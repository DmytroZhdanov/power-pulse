[![Netlify Status](https://api.netlify.com/api/v1/badges/ded25bcc-7d26-47b0-b723-5b0dd4a7d0cd/deploy-status)](https://app.netlify.com/sites/power-pulse-app/deploys)

# Power Pulse

Web app for tracking daily calorie consumption and managing user’s fitness journey.

Important! As this is a non-commercial project, our server is hosted on a free hosting service, which may cause longer loading times after periods of inactivity.  
If this occurs, please remain connected and avoid closing or reloading the page. Once our backend wakes up, any delays in using our app will be resolved.  
We are actively working to resolve this issue.

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

The initial page users encounter upon accessing [Power Pulse](https://power-pulse-app.netlify.app/)

You may choose to register a new account or sign in to an existing one.  
You'll find current statistics displayed on the right side of the page.

<img width="1470" alt="Welcome page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/9b944d2c-c788-47ff-b48e-b1dc33586f3f">

- `/signup` - SignUp Page

To register, provide your name (to be displayed on your profile page), email address, and a password.  
Please ensure that your password contains a minimum of 6 characters.

We've implemented Google authorization for your convenience.

If you already have an account, you can navigate to the SignIn page to log in.

<img width="1470" alt="SignUp page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/f3b973a6-44c5-4463-9bc6-7860234ac641">

- `/signin` - SignIn Page

To log in to your account, simply enter your email and password.  
Alternatively, you can use the Google authorization button.

If you haven't registered yet, you can switch to the SignUp page for registration.

<img width="1470" alt="SignIn page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/eed43a2d-391c-42f9-8f26-9bb9217286e8">

- `/data` - Data Page

After successful registration, you'll be redirected to the Data page, where you'll need to complete all fields across three steps.

Please note, using this web app requires filling in all required information. This data is utilized for calculating your daily calorie rate, assisting you in achieving your fitness goals, and marking products as recommended or not recommended for you.

Furthermore, a 'Help' button becomes available, allowing you to reach out if you encounter any issues while using the app. We'll respond promptly to assist in resolving any problems.

It's crucial to provide a valid email address for us to efficiently communicate solutions or address any questions you may have.

<img width="1470" alt="Data page step 1 screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/826380c7-a461-444b-ae4e-25d341e5d775">

- `/diary` - Diary Page

On the Diary page, you can review the products you've consumed or exercises you've performed by selecting a specific date (by default, it's set to the current date).

Additionally, there's a dashboard displaying calculated consumed and burned calories, along with the duration of your training sessions.

<img width="1470" alt="Diary page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/4f35ba68-5b29-4c92-8e02-2e9e5f387d6c">

- `/products` - Products Page

On the Products page, you have the option to select products to add to your diary as consumed items.  
Utilize filters to find the exact match for your selection.

<img width="1470" alt="Products page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/155faf33-ea0b-479e-8635-f2048696d831">

- `/exercises` - Exercises Page

On the Exercises page, you can explore exercises for your training regimen.

You'll find three categories to choose from:
1. Body parts
2. Muscles
3. Equipment

Based on your selected category, the list of subcategories will be updated accordingly.

<img width="1470" alt="Exercises page with exercises subcategories list screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/ee063e71-eb5a-4f94-9d98-48a4dd3145cb">

- `/exercises/:subcategory` - Exercises Page

When you click on a subcategory, an exercises list will appear instead of subcategories list.

Hovering over an exercise card will display an example demonstrating how to perform that exercise.

<img width="1470" alt="Exercises page with exercises list screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/9a4bae0b-82b4-4d33-9cd4-7160a6d37ef1">

- `/profile` - Exercises Page

Clicking on the gear icon within the header section will navigate you to the Profile page. Here, you can review your data and make updates if necessary.

<img width="1470" alt="Profile page screenshot" src="https://github.com/DmytroZhdanov/power-pulse/assets/119117057/1d2c8a8f-6f4d-4e55-a4ea-c2efb0316cb6">

- `/calendar` - Exercises Page

This page is currently under construction. 🏗️  
Please stay tuned for forthcoming updates.

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
- Yevhen Kolchynskyi [GitHub](https://github.com/EvgenBatt) || [LinkedIn](https://www.linkedin.com/in/evgen-k/) - Developer (Error page, Basic Modal window, Global styles, Loader, Data page stylisation)
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

The application utilizes a backend developed by our team. Feel free to familiarize yourself with it [here](https://github.com/Cherydens/power_pulse_backend)

## Redux State

The Redux store manages the application's state, encompassing tokens, user information such as name, email, avatar image, and the account creation date.
