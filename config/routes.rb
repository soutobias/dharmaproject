Rails.application.routes.draw do
  devise_for :users
  get "whatwedo", to: "pages#whatwedo"
  get "howwedo", to: "pages#howwedo"
  get "next_steps", to: "pages#next_steps"
  get "study_case", to: "pages#study_case"
  get "about_us", to: "pages#about_us"
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
