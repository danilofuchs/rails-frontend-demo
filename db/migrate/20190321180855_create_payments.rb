class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :country
      t.integer :order_number
      t.float :currency_amount
      t.string :currency_symbol
      t.string :payment_group
      t.string :payment_method
      t.string :status
      t.string :customer_email

      t.timestamps
    end
  end
end
