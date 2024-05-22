class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes, id: :uuid do |t|
      t.references :job, null: false, foreign_key: true, type: :uuid
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.decimal :amount
      t.text :description

      t.timestamps
    end
  end
end
