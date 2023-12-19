# inst377-Final Project
# Group members 
Kabindra Raj Suwal

## Food Search Web App
The Food Search Web App is a user-friendly application designed to provide quick access to detailed nutritional information for a wide range of food items. Whether you're health-conscious, a fitness enthusiast, a nutritionist, or simply interested in making informed dietary choices, this app aims to simplify the process of obtaining accurate and comprehensive nutritional data.
## Problem Statement
The challenge we address with this app is the need for a convenient and efficient way to access nutritional content for different foods. Users often require such information for personal health tracking, dietary planning, or simply to make informed food choices.
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

