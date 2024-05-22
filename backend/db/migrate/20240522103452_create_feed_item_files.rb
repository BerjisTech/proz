class CreateFeedItemFiles < ActiveRecord::Migration[6.1]
  def change
    create_table :feed_item_files, id: :uuid do |t|
      t.references :feed_item, null: false, foreign_key: true, type: :uuid
      t.string :file

      t.timestamps
    end
  end
end
