require "application_system_test_case"

class PaymentsTest < ApplicationSystemTestCase
  setup do
    @payment = payments(:one)
  end

  test "visiting the index" do
    visit payments_url
    assert_selector "h1", text: "Payments"
  end

  test "creating a Payment" do
    visit payments_url
    click_on "New Payment"

    fill_in "Country", with: @payment.country
    fill_in "Currency amount", with: @payment.currency_amount
    fill_in "Currency symbol", with: @payment.currency_symbol
    fill_in "Customer email", with: @payment.customer_email
    fill_in "Order number", with: @payment.order_number
    fill_in "Payment group", with: @payment.payment_group
    fill_in "Payment method", with: @payment.payment_method
    fill_in "Status", with: @payment.status
    click_on "Create Payment"

    assert_text "Payment was successfully created"
    click_on "Back"
  end

  test "updating a Payment" do
    visit payments_url
    click_on "Edit", match: :first

    fill_in "Country", with: @payment.country
    fill_in "Currency amount", with: @payment.currency_amount
    fill_in "Currency symbol", with: @payment.currency_symbol
    fill_in "Customer email", with: @payment.customer_email
    fill_in "Order number", with: @payment.order_number
    fill_in "Payment group", with: @payment.payment_group
    fill_in "Payment method", with: @payment.payment_method
    fill_in "Status", with: @payment.status
    click_on "Update Payment"

    assert_text "Payment was successfully updated"
    click_on "Back"
  end

  test "destroying a Payment" do
    visit payments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Payment was successfully destroyed"
  end
end
