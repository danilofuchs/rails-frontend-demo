# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_22_121153) do

  create_table "payments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "country"
    t.integer "order_number"
    t.float "currency_amount"
    t.string "currency_symbol"
    t.string "payment_group"
    t.string "payment_method"
    t.string "status"
    t.string "customer_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "refunds", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "country"
    t.string "order_number"
    t.string "refund_code"
    t.float "currency_amount"
    t.string "currency_symbol"
    t.string "status"
    t.string "customer_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "todos", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title"
    t.boolean "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
