Rails.application.routes.draw do
  resources :todos
  get '/xablau', to: 'todos#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end