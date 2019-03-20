Rails.application.routes.draw do
  resources :todos
  get '/payments', to: 'payments#index'
  get '/refunds', to: 'refunds#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
