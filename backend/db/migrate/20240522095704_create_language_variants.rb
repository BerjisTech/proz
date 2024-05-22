class CreateLanguageVariants < ActiveRecord::Migration[6.1]
  def change
    create_table :language_variants, id: :uuid do |t|
      t.string :name
      t.references :language, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
