class Job < ApplicationRecord
  belongs_to :language
  belongs_to :language_variant
  belongs_to :job_field
  belongs_to :field_specialization
  belongs_to :user
end
