Rails.application.routes.draw do
  resources :refunds, param: :refund_code
  resources :payments, param: :order_number
  resources :todos

  get '/payments-toggle-background', to: 'payments#toggle_background'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
