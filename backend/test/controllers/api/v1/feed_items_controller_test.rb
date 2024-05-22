# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class FeedItemsControllerTest < ActionDispatch::IntegrationTest
      setup do
        @api_v1_feed_item = api_v1_feed_items(:one)
      end

      test 'should get index' do
        get api_v1_feed_items_url, as: :json
        assert_response :success
      end

      test 'should create api_v1_feed_item' do
        assert_difference('Api::V1::FeedItem.count') do
          post api_v1_feed_items_url,
               params: { api_v1_feed_item: { item_id: @api_v1_feed_item.item_id, item_type: @api_v1_feed_item.item_type } }, as: :json
        end

        assert_response 201
      end

      test 'should show api_v1_feed_item' do
        get api_v1_feed_item_url(@api_v1_feed_item), as: :json
        assert_response :success
      end

      test 'should update api_v1_feed_item' do
        patch api_v1_feed_item_url(@api_v1_feed_item),
              params: { api_v1_feed_item: { item_id: @api_v1_feed_item.item_id, item_type: @api_v1_feed_item.item_type } }, as: :json
        assert_response 200
      end

      test 'should destroy api_v1_feed_item' do
        assert_difference('Api::V1::FeedItem.count', -1) do
          delete api_v1_feed_item_url(@api_v1_feed_item), as: :json
        end

        assert_response 204
      end
    end
  end
end
