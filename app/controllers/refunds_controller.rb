class RefundsController < ApplicationController

  # GET /refunds
  # GET /refunds.json
  def index
    @columns = [
      {title: "Número do pedido", dataIndex: "refund_id",dataType: "text", bootstrapWidth: 3},
      {title: "Código de Reembolso", dataIndex: "refund_code", dataType: "text", bootstrapWidth: 3},
      {title: "Valor", dataIndex: "amount", dataType: "text", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "email", dataType: "text", bootstrapWidth: 3},
    ]
    @dataSource = [
      {
        key: "1",
        refund_id: "#11231312",
        refund_code: "2kn17asbd8712ndf9",
        amount: "BRL 203.09",
        status: "RE",
        email: "teste1@email.com"
      },
      {
        key: "2",
        refund_id: "#18475398",
        refund_code: "1928hcxac8ascna98c",
        amount: "BRL 220.12",
        status: "NP",
        email: "teste2@email.com"
      },
      {
        key: "3",
        refund_id: "#18475398",
        refund_code: nil,
        amount: "BRL 15.89",
        status: "PA",
        email: "teste3@email.com"
      }
    ]
  end
end