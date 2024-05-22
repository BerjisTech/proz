class CreateFeedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :feed_items, id: :uuid do |t|
      t.references :item, polymorphic: true, null: false, type: :uuid
      t.text :title
      t.text :description
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.integer :likes
      t.integer :comment_count
      t.text :feed_type
      t.boolean :is_comment
      t.boolean :is_quote_feed
      t.text :visibility
      t.boolean :edited

      t.timestamps
    end
  end
end
