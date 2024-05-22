class CreateFieldSpecializations < ActiveRecord::Migration[6.1]
  def change
    create_table :field_specializations, id: :uuid do |t|
      t.string :name
      t.references :job_field, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
