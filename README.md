


# Brendan the Navigator

## Code Institute - Milestone Project 2: User Centric Frontend Development.

This website was created to demonstrate my ability to design and develop an interactive website.

Flag Quiz is a site that hopes to introduce people to the man behind Saint Brendan, the fearless adventurer with a love for travelling on the sea.
This website aims to bring this figure and his lengendary voyage into the mainstream and make him appealing to all and not just people of faith. 

# Table of Contents
- [Flag Quiz](#flag-quiz)
  - [Code Institute - Second Milestone Project: User Centric Frontend Development.](#code-institute---second-milestone-project-user-centric-frontend-development)
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

### A live demo of the website can be found [here](https://lorrainescanlon.github.io/brendan-the-navigator/index.html)

## UX
This website is aimed at users who have an interest in history. It aims to appeal to users looking to know more about Irish history and martitime exploration.

## User stories
- As a user I want the purpose of the website to be clear and immediate.
- As a user I don't want to be overwhelmed by a cluttered landing page.
- As a user I want to easily navigate between the different pages on the site.
- As a user I want to be presented with the content in chronological form. 
- As a user I want visuals to bring the content to life.
- As a user I want to decide if I would like to learn more about this historical figure.
- As a user I would like the opportunity to contact the page or provide feedback.

### Strategy
The goal is to create a well-functioning informative website. The focus is on presenting the content clearly and in a user-friendly manner. 

### Scope
To include features that enhanced the user experience and provide value to the user. Features such as the timeline and visual images support this.

### Structure
The user is presented with a landing page that is not cluttered and will not overwhelm them with information initially. The landing page presents the user with a synopsis of information from which they can navigate to find further information.

**Website Sections:**
- **_Home / Landing Page:_** A timeline with a synopsis of the life of Brendan the Navigator.
- **_Header:_** A header containing links to other parts of the website.
- **_Voyage Page:_** A more detailed account of Brendan's seven year voyage.
- **_Contact Page:_** A page featuring a feedback form and vote section.
- **_Footer:_** A footer containing social media links.

### Skeleton
The website is desinged with a simple hierarchical structure which the user can navigate through with ease.

Wireframes were created using Balsamiq software. Frames were drafted for both mobile and larger screens.
View the wireframe designs here ![Wireframe](docs/wireframes/brendanwireframes.pdf)

### Surface
A uniform design has been used throught with consistent colour schemes and font to provide a seamless user experience.

A dark background colour is used to frame the elements presenting the content to the user. It mimics the color of the sea in the background and compliments the images used.
The background of the content containers is a lighter colour with a contrasting dark font colour making it easy for users to read.

_Colour Palette_

![Colour Palette](docs/images/colourpalette.PNG)


Fonts used are Lato and Fairplay Display.

## Technologies
- HTML - To create the basic site layout and content.
- CSS - To add style to features and content, and to add responsiveness for different device sizes.
- Balsamiq - Used to create the wireframes.

## Features 
The following features are included on the website.
### Existing Features
- __Navigation Bar__
  - Featured on all three pages the navigation bar is fixed to the top of the page.
  - The fully responsive navigation bar includes links to the Home page, Voyage and Contact page. 
  - The color scheme used is in keeping with the website and identical on each page to allow for easy navigation.
  - The navigation bar will allow the user to easily move from page to page across all devices without having to use the ‘back’ button.
  - The hover effect is used to highlight the links, this helps to enhance the user experience.  

![Nav Bar](docs/images/navbar.PNG)

- __Home Page__
  - The landing page includes an image with text overlay to allow the user to see what this site is about. 
  - This section introduces the user to Brendan the Navigator with an image of his statue which stands at Fenit harbour in Kerry to set the scene.
  - This section includes a responsive timeline of the history of Brendan the Navigator.

![Landing Page](docs/images/landingimage.PNG)

- __Timeline__
  - The timeline on the home page presents a short history of Brendan the Navigator displayed in chronological order. 
  - The timeline contains links to the Voyage page where users can read more about Brendan. 
  - It also contains links to external sites with further information that open in a new browser tab.
  - The timeline is responsive and will rearrange content for different device sizes.

![Timeline](docs/images/timeline.PNG)    

- __The Voyage Page__
  - Similar to the home page, the voyage page icludes a heading image with text overlay to set the scene for the story to follow.
  - The voyage page details Brendan's famous seven year voyage.
  - Pictures are used to support the content and to paint a picture for the user. 
  - Links are provided to external sites where the user can find more information.

![Voyage Page](docs/images/voyage.PNG)

- __Contact Page__
  - Similar to the home page the contact page uses an image of the statue of Brendan the Navigator, set as the background this image takes up the full length of the page.
  - This page will allow the user to contact the website with any queries or feedback. 
  - The user will be asked to submit their full name and email address.
  - The user will also have the opportunity to vote on whether they believe Brendan reached America or not.

![Contact](docs/images/form.PNG)

- __The Footer__ 
  - The footer section includes links to the relevant social media sites for Brendan the Navigator. 
  - The links will open to a new browser tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer](docs/images/footer.PNG)

### Future Features
- As a future add on, a feature that would display the results of the vote button. Shown as a graphic to illustrate the percentage of users 
  that believe Brendan reached America versus the percentage that believe he didn't.
- An interactive map of Brendan's seven year voyage would be a great feature to support the existing content.
- I believe on very large devices a horizontal implementation of the timeline could make better use of screen space.

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
- When first deployed to GitHub, it was discovered that the social media links did not work. 
  This was due to not enclosing the icons within the anchor closing tag.
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