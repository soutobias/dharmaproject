class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :whatwedo, :howwedo, :insight, :study_case ]

  def home
  end

  def whatwedo
  end

  def howwedo
  end

  def insight
  end

  def study_case
  end
end
