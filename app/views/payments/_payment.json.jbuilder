json.extract! payment, :id, :country, :order_number, :currency_amount, :currency_symbol, :payment_group, :payment_method, :status, :customer_email, :created_at, :updated_at
json.url payment_url(payment, format: :json)
