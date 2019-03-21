Rails.application.routes.draw do
  resources :todos
  get '/payments', to: 'payments#index'
  get '/payments/:id', to: 'payments#show'
  get '/refunds', to: 'refunds#index'
  get '/refunds/:id', to: 'refunds#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
