class Api::V1::FeedItem < ApplicationRecord
  belongs_to :item, polymorphic: true
end
