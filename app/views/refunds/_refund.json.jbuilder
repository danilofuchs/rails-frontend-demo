json.extract! refund, :id, :country, :order_number, :refund_code, :currency_amount, :currency_symbol, :status, :customer_email, :created_at, :updated_at
json.url refund_url(refund, format: :json)
