# frozen_string_literal: true

module Api
  module V1
    class HomeController < ApplicationController
      def index
        render json: { message: 'Welcome to the API' }
      end
    end
  end
end
