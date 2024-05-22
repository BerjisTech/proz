class CreateAdminSquashes < ActiveRecord::Migration[6.1]
  def change
    create_table :admin_squashes, id: :uuid do |t|
      t.references :job, null: false, foreign_key: true, type: :uuid
      t.text :reason

      t.timestamps
    end
  end
end
