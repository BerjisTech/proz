class CreateFeedItemImages < ActiveRecord::Migration[6.1]
  def change
    create_table :feed_item_images, id: :uuid do |t|
      t.references :feed_item, null: false, foreign_key: true, type: :uuid
      t.string :image

      t.timestamps
    end
  end
end
