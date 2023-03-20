Rails.application.routes.draw do

 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "slideshow#index"

  get "public", to: "public#index"

  get "slideshow", to: "slideshow#index"

  get "checkbox", to: "checkbox#index"

  get "example", to: "example#index"
end



