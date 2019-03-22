class RefundsController < ApplicationController
  before_action :set_refund, only: [:show, :edit, :update, :destroy]

  # GET /refunds
  # GET /refunds.json
  def index
    @refunds = Refund.all
    @dataSource = []
    @refunds.each { |refund|
      newRefund = refund.attributes
      newRefund[:transaction_amount] = {
        amount: refund[:currency_amount],
        currency: refund[:currency_symbol]
      }
      newRefund[:redirect_url] = refund_path(refund)
      @dataSource.push(newRefund)
    }

    @tableConfig = {
      redirectUrlIndex: "redirect_url"
    }
    @columnsConfig = [
      {title: "País", dataIndex: "country", dataType: "country_flag", bootstrapWidth: 1},
      {title: "Número do pedido", dataIndex: "order_number",dataType: "date", bootstrapWidth: 3},
      {title: "Código de Reembolso", dataIndex: "refund_code", dataType: "text", bootstrapWidth: 3},
      {title: "Valor", dataIndex: "transaction_amount", dataType: "currency", bootstrapWidth: 2},
      {title: "Status", dataIndex: "status", dataType: "payment_status_badge", bootstrapWidth: 1},
      {title: "E-mail do cliente", dataIndex: "customer_email", dataType: "text", bootstrapWidth: 2},
    ]
    

    
  end

  # GET /refunds/1
  # GET /refunds/1.json
  def show
  end

  # GET /refunds/new
  def new
    @refund = Refund.new
  end

  # GET /refunds/1/edit
  def edit
  end

  # POST /refunds
  # POST /refunds.json
  def create
    @refund = Refund.new(refund_params)

    respond_to do |format|
      if @refund.save
        format.html { redirect_to @refund, notice: 'Refund was successfully created.' }
        format.json { render :show, status: :created, location: @refund }
      else
        format.html { render :new }
        format.json { render json: @refund.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /refunds/1
  # PATCH/PUT /refunds/1.json
  def update
    respond_to do |format|
      if @refund.update(refund_params)
        format.html { redirect_to @refund, notice: 'Refund was successfully updated.' }
        format.json { render :show, status: :ok, location: @refund }
      else
        format.html { render :edit }
        format.json { render json: @refund.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /refunds/1
  # DELETE /refunds/1.json
  def destroy
    @refund.destroy
    respond_to do |format|
      format.html { redirect_to refunds_url, notice: 'Refund was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_refund
      #@refund = Refund.find(params[:refund_code])
      @refund = Refund.find_by refund_code: params[:refund_code]
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def refund_params
      params.require(:refund).permit(:country, :order_number, :refund_code, :currency_amount, :currency_symbol, :status, :customer_email)
    end
end
