Rails.application.routes.draw do
  resources :refunds
  resources :payments
  resources :todos

  get '/payments-toggle-background', to: 'payments#toggle_background'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
