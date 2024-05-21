class CreateApiV1FeedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_feed_items, id: :uuid do |t|
      t.references :item, polymorphic: true, null: false, type: :uuid

      t.timestamps
    end
  end
end
