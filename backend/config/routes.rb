Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :feed_items
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to module api, mudole v1, home controller
  root to: 'api/v1/home#index'
  get '/api' => 'api/v1/home#index'
  # namespace api, namespace v1, resources
  namespace :api do
    namespace :v1 do

    end
  end
end
