class HomepageController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def referral
  end
end
