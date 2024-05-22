class CreateJobFields < ActiveRecord::Migration[6.1]
  def change
    create_table :job_fields, id: :uuid do |t|
      t.string :name

      t.timestamps
    end
  end
end
