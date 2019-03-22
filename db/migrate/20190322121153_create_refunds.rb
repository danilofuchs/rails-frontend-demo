class CreateRefunds < ActiveRecord::Migration[5.2]
  def change
    create_table :refunds do |t|
      t.string :country
      t.string :order_number
      t.string :refund_code
      t.float :currency_amount
      t.string :currency_symbol
      t.string :status
      t.string :customer_email

      t.timestamps
    end
  end
end
