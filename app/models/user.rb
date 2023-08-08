class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :username, presence: true

  before_create :generate_referral_code
  after_create :complete_referral!

  validates :referral_code, uniqueness: true

  def generate_referral_code
    loop do
      self.referral_code = SecureRandom.hex(4)
      break unless self.class.exists?(referral_code: referral_code)
    end
  end

  belongs_to :referred_by, class_name: "User", optional: true
  has_many :referred_users, class_name: "User", foreign_key: :referred_by_id

  def complete_referral!
    update(referral_completed_at: Time.zone.now)
  end

end
