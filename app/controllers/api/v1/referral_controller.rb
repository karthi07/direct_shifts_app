class Api::V1::ReferralController < ApplicationController
  before_action :authenticate_user!

  def index
    render :json => {data: "welcome to rails referral"}
  end

  def invite
    ReferralMailer.with(user: User.last, email: email_params[:email]).send_referral_email.deliver_now
    render json: {res: 'user invited to ' + email_params[:email]}
  end

  private

  def email_params
    params.permit(:email)
  end
end