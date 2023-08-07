class HomepageController < ApplicationController
  before_action :authenticate_user!, only: [:referral]
  def index
  end

  def referral
    render :json => {data: "welcome to rails referral"}
  end
end
