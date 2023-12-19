# inst377-Final Project
# Group members 
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
# Developer Manual

## Installations and Configurations

### Nvm, npm, nodemon, express, supabase-js

#### Libraries used 
- Chart.JS

#### Nvm commands
1. Open terminal
2. `nvm install node`
3. Check installation with `nvm -v`
   - Note: `nvm install node` should automatically install npm
4. Check installation with `npm -v`

#### Workspace Setup
1. Now that nvm and npm are installed/configured, open the workspace’s `index.js` file.
2. Run `npm init`
   - Package name (curr directory): *hit enter*
   - Version (1.0.0): *hit enter*
   - Description: *dev’s choice*
   - Entry point (index.js): *hit enter*
   - Test command: *hit enter*
   - Git repository: *hit enter*
   - Author: *dev’s name, hit enter*
   - License: ISC *hit enter*
   - Is this OK? (yes) *hit enter*

#### Npm Commands
- `npm install express`
  - This will add a `package-lock.json` and `package.json` files to your current directory. These contain the necessary dependencies to run Express.
- `npm install nodemon`
- `npm install @supabase/supabase-js`
  - Supabase client required field is included in line 3 of `index.js`

#### Final Configuration
1. Once the above installations finish, access the `package.json` file.
2. In this file, add (all excluding brackets) `<"start": "nodemon -e '*'",>` in the scripts section of the file (right below line 6).

## API Docs

