class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs, id: :uuid do |t|
      t.string :title
      t.text :description
      t.references :language, null: false, foreign_key: true, type: :uuid
      t.references :language_variant, null: false, foreign_key: true, type: :uuid
      t.references :job_field, null: false, foreign_key: true, type: :uuid
      t.references :field_specialization, null: false, foreign_key: true, type: :uuid
      t.boolean :potential
      t.boolean :actual
      t.decimal :price
      t.boolean :fixed_price
      t.datetime :quoting_deadline
      t.datetime :submission_deadline
      t.text :excerpt
      t.text :document
      t.boolean :sample_translation_required
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
