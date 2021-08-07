Rails.application.routes.draw do
  devise_for :users
  get "whatwedo", to: "pages#whatwedo"
  get "howwedo", to: "pages#howwedo"
  get "insight", to: "pages#insight"
  get "study_case", to: "pages#study_case"
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
