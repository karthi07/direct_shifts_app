# Preview all emails at http://localhost:3000/rails/mailers/referral_mailer
class ReferralMailerPreview < ActionMailer::Preview
  def send_referral_email
    tuser = User.last
    ReferralMailer.with(user: tuser, email: 'test@ga.co').send_referral_email
  end
end
