class PaymentsController < ApplicationController
  before_action :set_payment, only: [:show, :edit, :update, :destroy]

  # GET /payments
  # GET /payments.json
  def index
    @payments = Payment.all
    @dataSource = []
    @payments.each { |payment|
      newPayment = payment.attributes
      newPayment[:transaction_amount] = {
        amount: payment[:currency_amount],
        currency: payment[:currency_symbol]
      }
      newPayment[:redirect_url] = "/payments/#{payment[:order_number]}"
      @dataSource.push(newPayment)
    }

    @tableConfig = {
      redirectUrlIndex: "redirect_url"
    }
    @columnsConfig = [
      {title: "Número do pedido", dataIndex: "order_number",dataType: "text", bootstrapWidth: 3},
      {title: "Valor", dataIndex: "transaction_amount", dataType: "currency", bootstrapWidth: 1},
      {title: "Grupo", dataIndex: "payment_group", dataType: "text", bootstrapWidth: 2},
      {title: "Método", dataIndex: "payment_method", dataType: "payment_method_badge", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "customer_email", dataType: "text", bootstrapWidth: 3},
    ]
  end

  # GET /payments/1
  # GET /payments/1.json
  def show
  end

  # GET /payments/new
  def new
    @payment = Payment.new
  end

  # GET /payments/1/edit
  def edit
  end

  # POST /payments
  # POST /payments.json
  def create
    @payment = Payment.new(payment_params)

    respond_to do |format|
      if @payment.save
        format.html { redirect_to @payment, notice: 'Payment was successfully created.' }
        format.json { render :show, status: :created, location: @payment }
      else
        format.html { render :new }
        format.json { render json: @payment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payments/1
  # PATCH/PUT /payments/1.json
  def update
    respond_to do |format|
      if @payment.update(payment_params)
        format.html { redirect_to @payment, notice: 'Payment was successfully updated.' }
        format.json { render :show, status: :ok, location: @payment }
      else
        format.html { render :edit }
        format.json { render json: @payment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payments/1
  # DELETE /payments/1.json
  def destroy
    @payment.destroy
    respond_to do |format|
      format.html { redirect_to payments_url, notice: 'Payment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find_by order_number: params[:id]
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def payment_params
      params.require(:payment).permit(:country, :order_number, :currency_amount, :currency_symbol, :payment_group, :payment_method, :status, :customer_email)
    end
end
