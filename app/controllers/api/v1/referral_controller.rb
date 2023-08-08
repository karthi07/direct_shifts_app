class Api::V1::ReferralController < ApplicationController
  before_action :authenticate_user!
  skip_forgery_protection

  def index
    render :json => {data: "welcome to rails referral"}
  end

  def invite
    puts "current user: ", current_user
    ReferralMailer.with(user: current_user, email: email_params[:email]).send_referral_email.deliver_now
    render json: {res: 'user invited to ' + email_params[:email]}
  end

  private

  def email_params
    params.permit(:email)
  end
end