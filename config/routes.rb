Rails.application.routes.draw do

  resources :books do 
    resources :reviews, only: [:index, :create]
  end
 
 
  resources :users
  resources :reviews
 
  
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"
   post "/signup", to: "users#create"
   get "/me", to: "users#show"
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
