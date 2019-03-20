class PaymentsController < ApplicationController

  # GET /payments
  # GET /payments.json
  def index
    @columns = [
      {title: "Número do pedido", dataIndex: "order_number",dataType: "text", bootstrapWidth: 3},
      {title: "Grupo", dataIndex: "group", dataType: "text", bootstrapWidth: 3},
      {title: "Método", dataIndex: "payment_method", dataType: "payment_method_badge", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "email", dataType: "text", bootstrapWidth: 3},
    ]
    @dataSource = [
      {
        key: "1",
        order_number: "11231312",
        group: "CC",
        payment_method: "visa",
        status: "RE",
        email: "teste1@email.com"
      },
      {
        key: "2",
        order_number: "18475398",
        group: "Pagamento em dinheiro",
        payment_method: "boleto",
        status: "NP",
        email: "teste2@email.com"
      },
      {
        key: "3",
        order_number: "18475398",
        group: nil,
        payment_method: nil,
        status: "PA",
        email: "teste3@email.com"
      }
    ]
  end
end
