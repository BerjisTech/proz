# frozen_string_literal: true

module Api
  module V1
    class FeedItem < ApplicationRecord
      belongs_to :item, polymorphic: true
    end
  end
end
