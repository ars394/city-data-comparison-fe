# Citrics

Application deployed at https://citrics.io/.

## Contributors
[Meet the Team](https://citrics.io/meet-the-team)

## Project Overview

[Product Canvas](https://www.notion.so/City-Data-Comparison-bc94a2f56b05482e9c42a12748a0ed0a)

[UX Design files](https://www.figma.com/file/nPnVfqPCoitykxcuf8obvH/City-Data-Comparison%3A-Analysis%2C-Dariush-%26-Eddy)

Citrics is an application that analyzes data from cities such as populations, cost of living, crime rates and many other social and economic factors that are important in deciding where someone would like to live. Citrics present such important data in an intuitive and easy to understand interface.
<br>
Cities with data are marked on a searchable, indexed map generated from the Mapbox.com API. Selected markers populate navigable data graphs powered by the Chartjs library that indicate important information about the selected city. Graphs are generated dynamically as users adjust their selection of cities to compare.

### Key Features

### Basic Features
- Allows users to search city data set without logging in
- Data visualization of city metrics 
- Map visualization that allows users to navigate and browse cities 
- Autofill search feature to streamline city searching 
- Specific city metrics accessible through side navigation
- Qualitative metrics (restaurants, activities, events, etc.) for each city displayed on a "Single City Page"
- Filter on Single City Page to filter and display preferred sections
- Filter on Data Overview Page to filter and display preferred sections

### Future Features
- User account personalization 
    - Quiz users to indicate their priorities in a city. This will power DS prediciton engine
    - Allow users to save records of which cities important to them
- Expanded data set - Pending DS completion, this app aims to encompass data from ~30000 US cities
- User-friendly API access to DS model via multiple endpoints (Premium feature)

## Tech Stack

### Front end built using:
- React 
- Sass
- Chart JS
- Mapbox
- Font Awesome
- React-scroll
- React-carousel

#### React

- Familiarity with React (lower technical debt)
- Dynamic data rendering
- Web optimized 
- Lightweight 

#### Front-end deployed to https://citrics.io/

## MapBox

MapBox is an open source mapping platform for custom designed maps. 

<!-- # 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products -->

<!-- # 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

<!-- # 4️⃣ Testing

🚫Document what you used for testing and why -->

# Installation Instructions

In the root folder, run "yarn"

## Other Scripts

- yarn start (starts local server)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
<!-- 
## Documentation
