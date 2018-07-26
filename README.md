# CarbonCalc

This web app is a personal transportation carbon footprint calculator created by Shannon Engstrom during her time at Prime Digital Academy. The purpose of the web app is to help motivate users to reduce their carbon emissions. The user will log their daily trips and use the app's carbon emission calculator and dashboard to review their individual and total emission output. Upon reviewing their data, the user can determine where they can cut back on motorized vehicle trips.

## Stack

- React JS
- React Redux
- React Saga
- Node.js
- Express
- PostgreSQL
- Passport

## Prerequisites 

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Setup Instructions

* For repo & download
* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Create required database tables as described in database.sql file
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Linting Note

The Airbnb ESLint for react is a part of this project. If you would like to take advantage of this in VS Code, add the `ESLint` extension. 

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `server/` contains the Express App


## Challenges

* **Database structure:**
Midway through the the initial build I realized my database structure could be improved. For example, if I want to add a feature that allows the user to create a new mode of their choosing, I would need a seperate modes table in my database. I plan to modify my structure and rewrite queries to solve this problem. 

* **Landing page UX and log form:**
I would like to rethink the landing page UI so that users are directed to one log form view instead of seperate views for each mode. 

* **Time constraints:** 
Significant health issues kept me from beginning the project on time. I am excited to continue to work on the project in my spare time. 

## Future Plans

Future goals for the project include: 

* Completing results dashboard: integrating ChartJS, apply styling and sorting to main table, and provide more detailed result information such as carbon emissions saved by taking nonmotorized transportation. 
* Rethink UI and log form user flow.
* Conduct user testing to determine ways to improve current features and to help prioritize future features. 
* Additional styling: modify CSS grid on landing page, add animation throughout, add Material UI input and button styling, etc. 
* Rework database to prepare app to be more scalable. 
* Convert to React Native to make it viable to incorporate iOS location services. 