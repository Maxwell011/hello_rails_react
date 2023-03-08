class Api::V1::MessagesController < ApplicationController
  def index
    @greetings = Message.all.sample
    render json: @greetings
  end
end
