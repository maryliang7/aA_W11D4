class AddSeatingToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :integer, column_options: { null: false }
  end
end
