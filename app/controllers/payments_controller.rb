class PaymentsController < ApplicationController

  @@isBackgroundHighlighted = false;

  # GET /payments?background_highlighted=true
  # GET /payments.json
  def index
    @tableConfig = {
        redirectUrlIndex: "redirect_url",
        backgroundHighlightParam: "background_highlighted",
        isBackgroundHighlighted: @@isBackgroundHighlighted || params["background_highlighted"] == "true"
    }
    @columnsConfig = [
      {title: "Número do pedido", dataIndex: "order_number",dataType: "text", bootstrapWidth: 3},
      {title: "Valor", dataIndex: "transaction_amount", dataType: "currency", bootstrapWidth: 1},
      {title: "Grupo", dataIndex: "group", dataType: "text", bootstrapWidth: 2},
      {title: "Método", dataIndex: "payment_method", dataType: "payment_method_badge", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "email", dataType: "text", bootstrapWidth: 3},
    ]
    @dataSource = [
      {
        key: "1",
        order_number: "11231312",
        transaction_amount: {
            currency: "BRL",
            amount: "203.09"
          },
        group: "CC",
        payment_method: "visa",
        status: "RE",
        email: "teste1@email.com",
        redirect_url: "payments/11231312"
      },
      {
        key: "2",
        order_number: "18475398",
        transaction_amount: {
            currency: "BRL",
            amount: "220.12"
        },
        group: "Pagamento em dinheiro",
        payment_method: "boleto",
        status: "NP",
        email: "teste2@email.com",
        redirect_url: "payments/18475398"
      },
      {
        key: "3",
        order_number: "18475398",
        transaction_amount: {
            currency: "MEX",
            amount: "712.87"
          },
        group: nil,
        payment_method: nil,
        status: "PA",
        email: "teste3@email.com",
        redirect_url: "payments/18475398"
      }
    ]
  end

  # GET /payments/1
  def show
    @paymentId = params[:id]
  end

  def toggle_background
    @@isBackgroundHighlighted = !@@isBackgroundHighlighted
    render json: "{newState: #{@@isBackgroundHighlighted}}"
  end
end
