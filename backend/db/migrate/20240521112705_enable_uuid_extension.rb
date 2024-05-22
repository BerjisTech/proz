# frozen_string_literal: true

class EnableUuidExtension < ActiveRecord::Migration[6.1]
  def change
    enable_extension 'pgcrypto' # Required for PostgreSQL to generate UUIDs
  end
end
