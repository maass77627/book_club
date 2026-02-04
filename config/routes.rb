Rails.application.routes.draw do

   resources :books 
  resources :users

get "users/:user_id/books", to: "books#user_books"
get "users/:user_id/reviews", to: "books#user_book_reviews"
 
  # resources :users, only: [:show] do

  #   resources :books

  # end
  
   post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
   post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
