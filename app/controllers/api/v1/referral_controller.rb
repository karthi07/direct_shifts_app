class Api::V1::ReferralController < ApplicationController
  before_action :authenticate_user!

  def index
    render :json => {data: "welcome to rails referral"}
  end
end