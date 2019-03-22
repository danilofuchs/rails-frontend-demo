require "application_system_test_case"

class RefundsTest < ApplicationSystemTestCase
  setup do
    @refund = refunds(:one)
  end

  test "visiting the index" do
    visit refunds_url
    assert_selector "h1", text: "Refunds"
  end

  test "creating a Refund" do
    visit refunds_url
    click_on "New Refund"

    fill_in "Country", with: @refund.country
    fill_in "Currency amount", with: @refund.currency_amount
    fill_in "Currency symbol", with: @refund.currency_symbol
    fill_in "Customer email", with: @refund.customer_email
    fill_in "Order number", with: @refund.order_number
    fill_in "Refund code", with: @refund.refund_code
    fill_in "Status", with: @refund.status
    click_on "Create Refund"

    assert_text "Refund was successfully created"
    click_on "Back"
  end

  test "updating a Refund" do
    visit refunds_url
    click_on "Edit", match: :first

    fill_in "Country", with: @refund.country
    fill_in "Currency amount", with: @refund.currency_amount
    fill_in "Currency symbol", with: @refund.currency_symbol
    fill_in "Customer email", with: @refund.customer_email
    fill_in "Order number", with: @refund.order_number
    fill_in "Refund code", with: @refund.refund_code
    fill_in "Status", with: @refund.status
    click_on "Update Refund"

    assert_text "Refund was successfully updated"
    click_on "Back"
  end

  test "destroying a Refund" do
    visit refunds_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Refund was successfully destroyed"
  end
end
