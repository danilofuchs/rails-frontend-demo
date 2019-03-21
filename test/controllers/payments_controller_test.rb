require 'test_helper'

class PaymentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @payment = payments(:one)
  end

  test "should get index" do
    get payments_url
    assert_response :success
  end

  test "should get new" do
    get new_payment_url
    assert_response :success
  end

  test "should create payment" do
    assert_difference('Payment.count') do
      post payments_url, params: { payment: { country: @payment.country, currency_amount: @payment.currency_amount, currency_symbol: @payment.currency_symbol, customer_email: @payment.customer_email, order_number: @payment.order_number, payment_group: @payment.payment_group, payment_method: @payment.payment_method, status: @payment.status } }
    end

    assert_redirected_to payment_url(Payment.last)
  end

  test "should show payment" do
    get payment_url(@payment)
    assert_response :success
  end

  test "should get edit" do
    get edit_payment_url(@payment)
    assert_response :success
  end

  test "should update payment" do
    patch payment_url(@payment), params: { payment: { country: @payment.country, currency_amount: @payment.currency_amount, currency_symbol: @payment.currency_symbol, customer_email: @payment.customer_email, order_number: @payment.order_number, payment_group: @payment.payment_group, payment_method: @payment.payment_method, status: @payment.status } }
    assert_redirected_to payment_url(@payment)
  end

  test "should destroy payment" do
    assert_difference('Payment.count', -1) do
      delete payment_url(@payment)
    end

    assert_redirected_to payments_url
  end
end
