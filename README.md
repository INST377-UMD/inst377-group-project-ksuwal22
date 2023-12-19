# INST377-Final Project
### Group members 
Kabindra Raj Suwal

## Food Search Web App
The Food Search Web App is a user-friendly application designed to provide quick access to detailed nutritional information for a wide range of food items. Whether you're health-conscious, a fitness enthusiast, a nutritionist, or simply interested in making informed dietary choices, this app aims to simplify the process of obtaining accurate and comprehensive nutritional data.
## Problem Statement
The challenge we address with this app is the need for a convenient and efficient way to access nutritional content for different foods. Users often require such information for personal health tracking, dietary planning, or simply to make informed food choices.
## Key features
FoodData Central API Integration: The app utilizes the FoodData Central API, maintained by the U.S. Department of Agriculture (USDA), to fetch reliable and up-to-date nutritional information for various food items.

User-Friendly Interface: The front end is developed using pure JavaScript, HTML, and CSS, ensuring simplicity and accessibility. The intuitive design allows users to easily search for and view detailed nutritional information.

Responsive Design: The app is designed to be responsive and accessible on desktops, laptops, tablets, and smartphones, providing a consistent and user-friendly experience across different devices.

Node.js Backend: The backend is built on Node.js, leveraging JavaScript for efficient API development. Express is used for server capabilities, and Nodemon ensures automatic server restarts during development.

Supabase Integration: Data management is handled through Supabase, a cloud-based database service, providing a reliable foundation for the storage and retrieval of information.

### Demo:
Vedio demonstration: https://youtu.be/Qa475zLKIIc
# Developer Manual
## Getting Started
To run the Food Search Web App locally, follow these steps:

1. Clone the repository:
 `git clone https://github.com/your-username/food-search-web-app.git`
2. Open the workspace’s `index.js` file.
3. Install dependencies:
 - `npm install express` This will add a `package-lock.json` and `package.json` files to your current directory. These contain the necessary dependencies to run Express. 
 - `npm install nodemon`
 - `npm install @supabase/supabase-js`

4. Run `npm init`
   - Package name (curr directory): *hit enter*
   - Version (1.0.0): *hit enter*
   - Description: *dev’s choice*
   - Entry point (index.js): *hit enter*
   - Test command: *hit enter*
   - Git repository: *hit enter*
   - Author: *dev’s name, hit enter*
   - License: ISC *hit enter*
   - Is this OK? (yes) *hit enter*

5. Start the server:
   `npm start` Should display "App is Runnig" is the app started successfully
6. Open your browser and visit http://localhost:3000 to access the app.
7. press `ctrl+c` in terminal to terminate the app

## Technology Stack:
- Frontend: JavaScript, HTML, CSS
- Backend: Node.js, Express, Nodemon
- Database: Supabase
- API: FoodData Central API (USDA)
