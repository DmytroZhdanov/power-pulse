[![Netlify Status](https://api.netlify.com/api/v1/badges/ded25bcc-7d26-47b0-b723-5b0dd4a7d0cd/deploy-status)](https://app.netlify.com/sites/power-pulse-app/deploys)

# Power Pulse

Web app for tracking daily calorie consumption and managing user’s fitness journey.

## Table of content

- [Routing](#routing)
- [Features](#features)
- [Contributors](#contributors)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Redux State](#redux-state)

## Routing

The app uses React Router for navigation. The available routes are:
- `/welcome` - Welcome Page

The first page which meets user of [Power Pulse](https://power-pulse-app.netlify.app/)

You may choose to register a new account or sign in to existed one.  
There are some actual statistics info from the right side of the page.

<img width="1470" alt="Знімок екрана 2023-11-16 о 17 14 31" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/b25631c9-6e7e-4fec-a966-4a05543898b2">

- `/signup` - SignUp Page

For registering you have to enter your name which will be displayed on your profile page, email address and password.  
Please note that password required minimum 6 symbols.

There is a Google authorisation implemented for your convenience.

If you already have an account you can switch to SignIn page to log in.

<img width="1470" alt="Знімок екрана 2023-11-16 о 17 30 05" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/b4215112-2186-45a4-aafe-83754acabde3">

- `/signin` - SignIn Page

To log in to your account it's enought to enter only email and password.  
Or you can use Google authorisation button as well.

If you don't have registered account you can switch to SignUp page for registratioin.

<img width="1470" alt="Знімок екрана 2023-11-16 о 17 38 45" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/b312a30d-7de3-42c7-b76c-89c74ce108de">

- `/data` - Data Page

After successful registration you will be redirected to the Data page where you have to fill in all fields in 3 (three) steps.

Note that you won't be able to use this web app if you don't enter all required information. We use it for calculation daily rate of calories to help you achieve your fitness goal or for marking products as recommended or not recommended for you.

Also there is a help button becomes available, so if you have faced with any problem using this app you may click it and contact us. We'll reply to you ASAP to help you resolve it.  
Note that you have to enter valid email address so that we could reach you out with provided solution or clarifyed questions.

<img width="1470" alt="Знімок екрана 2023-11-16 о 17 55 16" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/47bc1f60-1743-4593-a51b-9b95c5a09576">

- `/diary` - Diary Page

On Diary page you can check your consumed products or performed exercises by the chosen date (by the default the date is set to current date).

Also there is a dashboard with calculated consumed and burned calories and minutes you have spend on training.

<img width="1470" alt="Знімок екрана 2023-11-16 о 18 26 02" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/4f35ba68-5b29-4c92-8e02-2e9e5f387d6c">

- `/products` - Products Page

On Products page you can select which product to add to your diary as consumed.  
You can use filters to find exact match.

<img width="1470" alt="Знімок екрана 2023-11-16 о 18 33 39" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/155faf33-ea0b-479e-8635-f2048696d831">

- `/exercises` - Exercises Page

On Exercises page you can find an exercise for your training.

There are 3 (three) categories to choose:
  1. Body parts
  2. Muscles
  3. Equipment

Depends on selected category the list of subcategories will be updated.  

<img width="1470" alt="Знімок екрана 2023-11-16 о 18 36 49" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/ee063e71-eb5a-4f94-9d98-48a4dd3145cb">

- `/exercises/:subcategory` - Exercises Page

By clicking on subcategory there is an exercises list will appear instead.

On hovering on exercise card you will see an example on how to perform it.

<img width="1470" alt="Знімок екрана 2023-11-16 о 18 44 11" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/9a4bae0b-82b4-4d33-9cd4-7160a6d37ef1">

- `/profile` - Exercises Page

By clicking on gear icon inside the header section you will go to Profile page where you can check your data and update it if you want.

<img width="1470" alt="Знімок екрана 2023-11-16 о 18 46 59" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/1d2c8a8f-6f4d-4e55-a4ea-c2efb0316cb6">

- `/calendar` - Exercises Page

This page is under construction yet. 🏗️  
Stay tuned for updates.

## Features

Implemented responsiveness and mobile menu for better UI.

## Contributors

- Dmytro Zhdanov [GitHub](https://github.com/DmytroZhdanov) || [LinkedIn](https://www.linkedin.com/in/dmytro-zhdanov/) - Team Lead, Developer (Set up repository, Redux store, RTK Query, React Routing; Worked on Authorisation logic, DayDashboard component, StatisticsInfo component, ErrorHandler component, TimerWarning component, Welcome page, FeedbackForm component; Reviewed code);
- Denys Cherednychenko [GitHub](https://github.com/Cherydens) || [LinkedIn](https://www.linkedin.com/in/denys-cherednychenko/) - Team Lead, Developer (General structure and logic of back-end, User's endpoints)
- Sergey Yasak [GitHub](https://github.com/Sergey4857) || [LinkedIn](https://www.linkedin.com/in/sergeyyasak/) - Scrum Master Developer (Header including all components, ExercisesList component, ExercisesItem component, features implementation)
- Vitalii Dmytriiev [GitHub](https://github.com/Rinya7) || [LinkedIn](https://www.linkedin.com/in/vitalii-dmytriiev/) - Developer (Products page including all components)
- Tetiana Derenko [GitHub](https://github.com/Tanyusha7) || [LinkedIn](https://www.linkedin.com/in/tetiana-derenko-ab514527b/) - Developer (Profile page including all components)
- Pavlo Volontyr [GitHub](https://github.com/VolontyrPavel) || [LinkedIn](https://www.linkedin.com/in/pavlo-volontyr/) - Developer (SignupForm, SignInForm including validation)
- Daryna Reva [GitHub](https://github.com/RevaDaryna) || [LinkedIn](https://www.linkedin.com/in/darynarevait/) - Developer (Diary page components markup and stylisation, DayDashboard logic, project presentation)
- Oleg Kiosa [GitHub](https://github.com/KiosaOleg) || [LinkedIn](https://www.linkedin.com/in/oleg-kiosa/) - Developer (Data page including all steps)
- Oleksanrd Borysenko [GitHub](https://github.com/LexMorrison) || [LinkedIn](https://www.linkedin.com/in/oleksanrd-borysenko/) - Developer (ExercisesCategories component, ExercisesSubcategories component)
- Taras Vasylkiv [GitHub](https://github.com/vasylkivt) || [LinkedIn](https://www.linkedin.com/in/taras-vasylkiv/) - Developer (Calendar component, birthday inputs' implementation, calendar related features implementation, modals for adding exercises to diary)
- Yevhen Kolchynskyi [GitHub](https://github.com/EvgenBatt) || [LinkedIn](https://www.linkedin.com/in/evgen-k/) - Developer (Error page, Data page stylisation)
- Serhii Savchak [GitHub](https://github.com/SerhiiSavchak) || [LinkedIn](https://www.linkedin.com/in/itsavchak/) - Developer (Products', Training's and Statistic's endpoints on beck-end, diary tables logic on front-end, avatar's modal window feature)
- Alexander Sirotov [GitHub](https://github.com/SirotovAlexander) || [LinkedIn](https://www.linkedin.com/in/alexander-sirotov/) - Developer (Diary's endpoints on back-end)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DmytroZhdanov/power-pulse.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser (Note: the port may be changed if 5173 port is occupied by another website).

## Technologies Used

- React
- Redux
- RTK Query
- React Router
- Axios (for API requests)
- Vite

## API

The application uses a backend developed by our team. You can familiarize yourself with it [here](https://github.com/Cherydens/power_pulse_backend)

## Redux State

The Redux store manages the state of the application, including token, user's name, email, avatar image and account creation date.
