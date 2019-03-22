class ChangeOrderNumberTypeFromPayment < ActiveRecord::Migration[5.2]
  def change
    change_column(:payments, :order_number, :string)
  end
end
