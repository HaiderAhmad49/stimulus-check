Rails.application.routes.draw do




 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "enabledisable#index"

  get "public", to: "public#index"

  get "form", to: "form#index"

  get "enabledisable", to: "enabledisable#index"


  get "table", to: "table#index"

  get "slideshow", to: "slideshow#index"

  get "checkbox", to: "checkbox#index"

  get "example", to: "example#index"
end



