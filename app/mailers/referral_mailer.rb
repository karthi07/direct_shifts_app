class ReferralMailer < ApplicationMailer
  def send_referral_email
    @email = params[:email]
    @user = params[:user]
    @referral_url = "http://localhost:3000/sign_up?referral_code=#{@user.referral_code}"
    mail(to:@email, subject: "You are invited to DirectShifts !")
  end
end
