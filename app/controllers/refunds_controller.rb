class RefundsController < ApplicationController

  # GET /refunds
  # GET /refunds.json
  def index
    @tableConfig = {
      redirectUrlIndex: "redirect_url"
    }
    @columnsConfig = [
      {title: "Número do pedido", dataIndex: "refund_id",dataType: "text", bootstrapWidth: 3},
      {title: "Código de Reembolso", dataIndex: "refund_code", dataType: "text", bootstrapWidth: 3},
      {title: "Valor", dataIndex: "transaction_amount", dataType: "currency", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "email", dataType: "text", bootstrapWidth: 3},
    ]
    @dataSource = [
      {
        key: "1",
        refund_id: "#11231312",
        refund_code: "2kn17asbd8712ndf9",
        transaction_amount: {
          currency: "BRL",
          amount: "203.09"
        },
        status: "RE",
        email: "teste1@email.com",
        redirect_url: "/refunds/2kn17asbd8712ndf9"
      },
      {
        key: "2",
        refund_id: "#18475398",
        refund_code: "1928hcxac8ascna98",
        transaction_amount: {
          currency: "BRL",
          amount: "220.12"
        },
        status: "NP",
        email: "teste2@email.com",
        redirect_url: "/refunds/1928hcxac8ascna98"
      },
      {
        key: "3",
        refund_id: "#18475398",
        refund_code: "aisdhaisdj12983712",
        transaction_amount: {
          currency: "MEX",
          amount: "780.87"
        },
        status: "PA",
        email: "teste3@email.com",
        redirect_url: "/refunds/aisdh2aisdj129837"
      }
    ]
  end

    # GET /refunds/1
    def show
      @refundId = params[:id]
    end
end
