# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_05_22_095731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "admin_squashes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "job_id", null: false
    t.text "reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_admin_squashes_on_job_id"
  end

  create_table "field_specializations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "job_field_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_field_id"], name: "index_field_specializations_on_job_field_id"
  end

  create_table "job_fields", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jobs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.uuid "language_id", null: false
    t.uuid "language_variant_id", null: false
    t.uuid "job_field_id", null: false
    t.uuid "field_specialization_id", null: false
    t.boolean "potential"
    t.boolean "actual"
    t.decimal "price"
    t.boolean "fixed_price"
    t.datetime "quoting_deadline"
    t.datetime "submission_deadline"
    t.text "excerpt"
    t.text "document"
    t.boolean "sample_translation_required"
    t.uuid "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["field_specialization_id"], name: "index_jobs_on_field_specialization_id"
    t.index ["job_field_id"], name: "index_jobs_on_job_field_id"
    t.index ["language_id"], name: "index_jobs_on_language_id"
    t.index ["language_variant_id"], name: "index_jobs_on_language_variant_id"
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end

  create_table "jwt_denylists", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "jti"
    t.datetime "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jti"], name: "index_jwt_denylists_on_jti"
  end

  create_table "language_variants", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "language_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["language_id"], name: "index_language_variants_on_language_id"
  end

  create_table "languages", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "quotes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "job_id", null: false
    t.uuid "user_id", null: false
    t.decimal "amount"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_quotes_on_job_id"
    t.index ["user_id"], name: "index_quotes_on_user_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "admin_squashes", "jobs"
  add_foreign_key "field_specializations", "job_fields"
  add_foreign_key "jobs", "field_specializations"
  add_foreign_key "jobs", "job_fields"
  add_foreign_key "jobs", "language_variants"
  add_foreign_key "jobs", "languages"
  add_foreign_key "jobs", "users"
  add_foreign_key "language_variants", "languages"
  add_foreign_key "quotes", "jobs"
  add_foreign_key "quotes", "users"
end
