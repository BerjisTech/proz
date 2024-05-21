Rails.application.routes.draw do
  
  root to: 'api/v1/home#index'
  get '/api' => 'api/v1/home#index'
  get '/api/v1' => 'api/v1/home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  namespace :api do
    namespace :v1 do
      resources :feed_items
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to module api, mudole v1, home controller
end
