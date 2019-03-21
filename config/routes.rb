Rails.application.routes.draw do
  resources :payments
  resources :todos
  get '/refunds', to: 'refunds#index'
  get '/refunds/:id', to: 'refunds#show'


  get '/payments-toggle-background', to: 'payments#toggle_background'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
