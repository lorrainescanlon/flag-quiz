


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
    - [Content](#content)
    - [media](#media)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)



## Demo
![How the website looks on different devices](docs/images/responsivebright.PNG)

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
  - The landing page includes an image with text overlay to allow the user to see what this site is about. 
  - This section introduces the user to Brendan the Navigator with an image of his statue which stands at Fenit harbour in Kerry to set the scene.
  - This section includes a responsive timeline of the history of Brendan the Navigator.

![Home Page](docs/images/landingimage.PNG)

- __Quiz Page__
  - The timeline on the home page presents a short history of Brendan the Navigator displayed in chronological order. 
  - The timeline contains links to the Voyage page where users can read more about Brendan. 
  - It also contains links to external sites with further information that open in a new browser tab.
  - The timeline is responsive and will rearrange content for different device sizes.

![Quiz Page](docs/images/timeline.PNG)    

- __Game Over__
  - Similar to the home page, the voyage page icludes a heading image with text overlay to set the scene for the story to follow.
  - The voyage page details Brendan's famous seven year voyage.
  - Pictures are used to support the content and to paint a picture for the user. 
  - Links are provided to external sites where the user can find more information.

![Game Over](docs/images/timeline.PNG)    


### Future Features
- Add in three additional rounds with flags representing Americas, Middle East & Africa and Asia & Australia.
- Add in a bonus question to the end of each round. A true or flase question based on the region in particular.
- Display a breakdown of scores by rounds to show users where they need to improve.
- Add a timer to questions. Maybe reducing as the rounds grow.

## Testing
- This page has been tested on different browsers such as Chrome, Firefox and Microsoft Edge.
- This page has been tested on laptop and mobile devices.
- Responsiveness and functionality have been tested on all screen sizes using the dev tools device toolbar.
- All links internal and external have been tested and are working.
- Form validation for text and email input fields has been tested successfully. 
- The submit button posts the data to the code institute server successfully. 
- All pages passed lighthouse testing for performance, accessibility, best practices and search engine optimization. 

### Validator Testing 
- HTML
  - No errors were returned when passing through the official [W3C validator](docs/HTMLvalidated.pdf)
  - One warning was returned as detailed below in the unfixed bugs section.
- CSS
  - No errors were found when passing through the official [Jigsaw validator](docs/images/cssvalidated.PNG)

## Bugs Encountered
- While creating the javascript code to load the flag images I was running into problems with 
  my dynamic file paths. I was using array indexes to correspond to image files. The problem was
  that my array items were written with a leading capital letter and some contained spaces but my image files 
  were lower case with no spaces. I used the .toLowerCase and .replace functions to overcome this.

- It was also discovered that the form radio buttons did not behave as expected. 
  This was due to assigning unique names to the buttons, this was resolved by giving them both the same name.
- Problems were encountered when applying the media query to change the layout of the timeline for larger screens. 
  The timeline ruler and containers were displaying correctly, but the exisiting circles for some containers were not being re organised so duplicate circles were being displayed. With some assistance from tutor support a line of code `left;auto` was added to set the items to default.


### Unfixed Bugs
- When running the voyage.html code through the validator it returns the following warning.

  ![HTML Validator Error](docs/images/validatorwarning.PNG)
  No headings are needed in this section so it as been left for now.
 
## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab. 
  - Under the General menu on the left side find the Code and Automation section and select Pages.
  - Under the Build and Deployment section to the right find Source, select 'Deploy from a branch' from the dropdown list.
  - For Branch select 'main' from the dropdown list and click Save.
  - The link to the deployed website will now be displayed at the top of the page.
  - The live link can be found here - https://lorrainescanlon.github.io/brendan-the-navigator/

## Credits 
The following is a list of resources that were used for this website.

### Content 
- Wikipedia https://en.wikipedia.org/wiki/Brendan_the_Navigator was used as a content source.
- Dingle-Peninsula https://dingle-peninsula.ie/stories-2/49-blog-from-the-dingle-peninsula/251-st-brendan-the-navigator-s-departure-from-brandon-creek.html was used as a content source.
- Irish Culture and Customs https://www.irishcultureandcustoms.com/ASaints/BrendanNav.html was used as a content source.
- Archaeology Magazine https://archaeology.org/issues/march-april-2023/letters-from/faroe-islands-settlement/ was used as a source.

### Media
- The Statue, Brandon Creek and Monument images are my own.
- The Sea image used is from Unsplash by Ulrike Donohue.
- The Puffin image used is from Pixabay by Frank Liebmann.
- The Volcano image used is from Pixabay by Julius H.
- The Iceberg image used is from Pixabay by Lurens.
- The compass favicon was taken from [Favicon] https://favicon.io/.com
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Code
 - Instructions used on how to implement a timeline were found on 3Schools https://www.w3schools.com/howto/howto_css_timeline.asp 
   This particular code creates a split timeline that then reconfigures to become a single sided timeline. The reverse approach was used for this website as it has been developed for mobile first with media queries then used to split the timeline for larger screens. As such the code from 3Schools was chopped and changed quiet a bit to get the resulting effect.

### Acknowledgements
- Inspiration for some elements came from the Code Institute's Love Running project.
- I am gratefull to the Code Institute tutor support team for helping and guiding me in the right direction.
- A special thanks to my mentor Medale Oluwafemi for his guidance and great advice.



[def]: 