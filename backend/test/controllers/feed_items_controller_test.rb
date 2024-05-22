require "test_helper"

class FeedItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feed_item = feed_items(:one)
  end

  test "should get index" do
    get feed_items_url, as: :json
    assert_response :success
  end

  test "should create feed_item" do
    assert_difference('FeedItem.count') do
      post feed_items_url, params: { feed_item: { comment_count: @feed_item.comment_count, description: @feed_item.description, edited: @feed_item.edited, feed_type: @feed_item.feed_type, is_comment: @feed_item.is_comment, is_quote_feed: @feed_item.is_quote_feed, item_id: @feed_item.item_id, item_type: @feed_item.item_type, likes: @feed_item.likes, title: @feed_item.title, user_id: @feed_item.user_id, visibility: @feed_item.visibility } }, as: :json
    end

    assert_response 201
  end

  test "should show feed_item" do
    get feed_item_url(@feed_item), as: :json
    assert_response :success
  end

  test "should update feed_item" do
    patch feed_item_url(@feed_item), params: { feed_item: { comment_count: @feed_item.comment_count, description: @feed_item.description, edited: @feed_item.edited, feed_type: @feed_item.feed_type, is_comment: @feed_item.is_comment, is_quote_feed: @feed_item.is_quote_feed, item_id: @feed_item.item_id, item_type: @feed_item.item_type, likes: @feed_item.likes, title: @feed_item.title, user_id: @feed_item.user_id, visibility: @feed_item.visibility } }, as: :json
    assert_response 200
  end

  test "should destroy feed_item" do
    assert_difference('FeedItem.count', -1) do
      delete feed_item_url(@feed_item), as: :json
    end

    assert_response 204
  end
end
