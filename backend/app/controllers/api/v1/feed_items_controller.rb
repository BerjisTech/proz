# frozen_string_literal: true

module Api
  module V1
    class FeedItemsController < ApplicationController
      before_action :set_api_v1_feed_item, only: %i[show update destroy]

      # GET /api/v1/feed_items
      def index
        @api_v1_feed_items = Api::V1::FeedItem.all

        render json: @api_v1_feed_items
      end

      # GET /api/v1/feed_items/1
      def show
        render json: @api_v1_feed_item
      end

      # POST /api/v1/feed_items
      def create
        @api_v1_feed_item = Api::V1::FeedItem.new(api_v1_feed_item_params)

        if @api_v1_feed_item.save
          render json: @api_v1_feed_item, status: :created, location: @api_v1_feed_item
        else
          render json: @api_v1_feed_item.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/feed_items/1
      def update
        if @api_v1_feed_item.update(api_v1_feed_item_params)
          render json: @api_v1_feed_item
        else
          render json: @api_v1_feed_item.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/feed_items/1
      def destroy
        @api_v1_feed_item.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_api_v1_feed_item
        @api_v1_feed_item = Api::V1::FeedItem.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def api_v1_feed_item_params
        params.require(:api_v1_feed_item).permit(:item_id, :item_type)
      end
    end
  end
end
