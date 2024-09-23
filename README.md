


# Flag Quiz

## Code Institute - Milestone Project 2: Interactive Front-end web application.

This website was created to demonstrate my ability to design and develop an interactive web application.

Flag Quiz is an interactive game designed for school going children. The site aims to engage children in learning in a fun way.

# Table of Contents
- [Flag Quiz](#flag-quiz)
  - [Code Institute - Second Milestone Project: Interactive Front-end web application.](#code-institute---second-milestone-project-interactive-frontend-web-application)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo website can be found here](#a-live-demo-of-the-website-can-be-found-here)
  - [UX](#ux)
  - [User Stories](#user-stories)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Technologies](#technologies)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features) 
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Bugs](#bugs-encountered)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [media](#media)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)



## Demo
![How the website looks on different devices](docs/images/responsive.PNG)

### A live demo of the website can be found [here](https://lorrainescanlon.github.io/flag-quiz/)

## UX
This website is aimed at children who have an interest in quizes and geography. It aims to appeal to childrens competitive side and engage them to learn in a fun way.

## User stories
- As a user I want the purpose of the website to be clear and immediate.
- As a user I want the site design to be engaging and fun.
- As a user I want to easily navigate between the different areas on the site.
- As a user I want visuals to bring the content to life.
- As a user I want to see my real time score throughout the game.
- As a user I would like to see a score leaderboard.

### Strategy
The goal is to create a fun and engaging quiz. The focus is on presenting the content clearly and in a user-friendly manner. 

### Scope
To include features that enhanced the user experience and provide value to the user. Features such as the .....  support this.

### Structure
The user is presented with a landing page which details the rules of the quiz. The landing page allows the user to input a username to start the quiz.

**Website Sections:**
- **_Home / Landing Page:_** A list of the rules and an inout box for users username.
- **_Quiz Page:_** A page that displays flags and multiple choice answers to the user.
- **_Game Over:_** A page that displays the users final score and the top 5 quiz scores.

### Skeleton
The website is desinged with a sequential structure which the user can navigate through with ease.

Wireframes were created using Balsamiq software. Frames were drafted for both mobile and larger screens.
View the wireframe designs here ![Wireframe](docs/wireframes/brendanwireframes.pdf)

### Surface
A uniform design has been used throught with consistent colour schemes and font to provide a seamless user experience.

A fun background image is used throughout to help engage the younger user. Bright contrasting colours are used within the content containers to maintain the fun theme.

_Colour Palette_

![Colour Palette](docs/images/colourpalette.PNG)


Font used are Raleway sans-serif.

## Technologies
- HTML - To create the basic site layout and content.
- CSS - To add style to features and content.
- JavaScript - To add functionality to the website.
- Balsamiq - Used to create the wireframes.

## Features 
The following features are included on the website.
### Existing Features

- __Home Page__
  - The home page includes a text heading allow the user to see what this site is about. 
  - This section lists the game rules and contains a form where the the user is asked to enter a username of their choice.
  - The form uses validation, the user must enter a username in order to continue.

![Home Page](docs/images/homepage.PNG)

- __Quiz Page__
  - The quiz page displays the flag and 4 answer choices to the user. 
  - It displays a flag number counter.
  - It also displays the users current score.
  - When the user selects their answer, a correct answer is indicated by the answer button turning green and 
    an incorrect answer is indicated by the button turning red.
  - Once a choice is selected, the flag and answer choices refresh. The flag counter increases and if the user answered correctly their score also increases by 1.
  - The flag is removed from the array if it is guessed correctly to elminate repition. 
  - The Quit button returns the user to the homepage.


![Quiz Page](docs/images/.PNG)    

- __Game Over__
  - The game over page loads when the answer to the last flag has been selected.
  - It display a message telling the user their final score.
  - A table is also used to display the current top 5 scores.
  - A play again button allows the user to restart a new game.

![Game Over](docs/images/gameover.PNG)    


### Future Features
- Add in three additional rounds with flags representing Americas, Middle East & Africa and Asia & Australia.
- Add in a bonus question to the end of each round. A true or flase question based on the region in particular.
- Display a breakdown of scores by rounds to show users where they need to improve.
- Add a timer to questions. Maybe reducing as the rounds grow.

## Testing
- This page has been tested on different browsers such as Chrome, Firefox and Microsoft Edge.
- This page has been tested on laptop and mobile devices.
- Responsiveness and functionality have been tested on all screen sizes using the dev tools device toolbar.
- Form validation for the username input field has been tested successfully. 
- All pages passed lighthouse testing for performance, accessibility, best practices and search engine optimization. 

### Validator Testing 
- HTML
  - No errors were returned when passing through the official [W3C validator](docs/htmlValidation.pdf)
  - One warning was returned as detailed below in the unfixed bugs section.
- CSS
  - No errors were found when passing through the official [Jigsaw validator](docs/cssValidation.pdf)

## Bugs Encountered
- While creating the javascript code to load the flag images I was running into problems with 
  my dynamic file paths. I was using array indexes to correspond to image files. My array items were written with a leading 
  capital letter which was easily overcome by using .toLowerCase. However some array items also contained spaces but my image files 
  could not have spaces. After some research I found and used the .replace function to resolve this issue. Using the code found at the following link.
  https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript

- 
- 


### Unfixed Bugs
- When running the voyage.html code through the validator it returns the following warning.

 
## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab. 
  - Under the General menu on the left side find the Code and Automation section and select Pages.
  - Under the Build and Deployment section to the right find Source, select 'Deploy from a branch' from the dropdown list.
  - For Branch select 'main' from the dropdown list and click Save.
  - The link to the deployed website will now be displayed at the top of the page.
  - The live link can be found here - https://lorrainescanlon.github.io/flag-quiz/

## Credits 
The following is a list of resources that were used for this website.

### Media
- The flag images used were all taken from Pixabay by user OpenClipart-Vectors.
- The Quiz image used was taken from Pixabay.
- The background image used was taken from Pixabay and is by Checspec.

### Code
 - I used a Fisher-Yates Sorting Algorithm to shuffle array for round 1, I found the code snippet that I based mine on at the following link.
   https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript
 - I found the code snippet the following link to pick a random index from shortarray.
   https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
 - I used code found at the following link to remove any spaces from strings.
   https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
 - I used to following resource to help write code to remove an item from an array.
   https://sentry.io/answers/remove-specific-item-from-array/
 - I used the following resource to create code to sort scores array objects in descending order 
   https://www.w3schools.com/jsref/jsref_sort.asp 

### Acknowledgements
- I am gratefull to the Code Institute tutor support team for helping and guiding me in the right direction.
- A special thanks to my mentor Medale Oluwafemi for his guidance and great advice.



[def]: 