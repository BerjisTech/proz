class Job < ApplicationRecord
  belongs_to :language
  belongs_to :language_variant
  belongs_to :job_field
  belongs_to :field_specialization
  belongs_to :user
  # Has many feeds
  has_many :feed_items, as: :item
end
