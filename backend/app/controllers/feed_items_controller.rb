class FeedItemsController < ApplicationController
  before_action :set_feed_item, only: [:show, :update, :destroy]

  # GET /feed_items
  def index
    @feed_items = FeedItem.all

    render json: @feed_items
  end

  # GET /feed_items/1
  def show
    render json: @feed_item
  end

  # POST /feed_items
  def create
    @feed_item = FeedItem.new(feed_item_params)

    if @feed_item.save
      render json: @feed_item, status: :created, location: @feed_item
    else
      render json: @feed_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /feed_items/1
  def update
    if @feed_item.update(feed_item_params)
      render json: @feed_item
    else
      render json: @feed_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /feed_items/1
  def destroy
    @feed_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feed_item
      @feed_item = FeedItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feed_item_params
      params.require(:feed_item).permit(:item_id, :item_type, :title, :description, :user_id, :likes, :comment_count, :feed_type, :is_comment, :is_quote_feed, :visibility, :edited)
    end
end
