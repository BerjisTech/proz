class FeedItem < ApplicationRecord
  belongs_to :item, polymorphic: true
  belongs_to :user
  has_many :feed_item_images, dependent: :destroy
  has_many :feed_item_files, dependent: :destroy
end
