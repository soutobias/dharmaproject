class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :whatwedo, :howwedo, :next_steps, :study_case, :about_us]

  def home
  end

  def whatwedo
  end

  def howwedo
  end

  def next_steps
  end

  def about_us
  end

  def study_case
    @value = 1
    if params[:commit]
      if params[:commit] == 'JAN-FEB'
        @value = 1
      elsif params[:commit] == 'MAR-APR'
        @value = 2
      elsif params[:commit] == 'MAY-JUN'
        @value = 3
      elsif params[:commit] == 'JUL-AUG'
        @value = 4
      elsif params[:commit] == 'SET-OUT'
        @value = 5
      elsif params[:commit] == 'NOV'
        @value = 6
      end
    end
  end
end
