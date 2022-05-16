<!-- Please update value in the {}  -->

<h1 align="center">{Image Uploader}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://imageuploader-d71de.web.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [How did I do this project?](#how-did-i-do-this-project)
  - [My to do list](#my-to-do-list)
  - [How To Use](#how-to-use)
  - [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

You can see the live version [here](https://imageuploader-d71de.web.app)


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
## Features

- I can drag and drop an image to upload it
- I can choose to select an image from my folder
- I can see a loader when uploading
- When the image is uploaded, I can see the image and copy it
- I can choose to copy to the clipboard

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

# How did I do this project?
I decided to do this project in React, because it's the only javascript framework I knew a bit about. <br> 
For the back-end I decided to use firebase because it didn't seem interesting to use a node server just to send an image. So I could focus on React. 
I did this project in one week end and I'm quite happy with the result considering the little experience I had with React and I think I'll try to do the next devchallenge.io challenges. <br>
I started by making the figma models on React so I don't have to worry about the design for the rest of the project. <br>
Then I set up firebase so I could write the upload function. 
I use states to keep the url in memory. Indeed the files stored by firebase all have a link which will be very useful to display the image at the end. 
I then took care of the user inputs and then displayed the picture and the link on the end page. <br>
After that I did the css animation for the loading bar and linked the pages together. Indeed the application has a state and each time a step is finished we change the state and App.js displays the right component. <br>
I finished the project using two js libraries installed with npm. One for drag and drop and the other for copying the link to the clipboard.
Finally I deployed the application using the hosting feature of firebase.

I would like to say that although this is a technical test for a company, I really enjoyed doing this project because I learned a lot! 


## My to do list
- Make the design ✅
  - FinalPage ✅
  - HomePage ✅
  - UploadPage ✅
- Set up firebase ✅
- Make the upload function ✅
    - send image ✅
    - receive image ✅
    - get the URL of the image ✅
- Connect the back end with the front end ✅
- Comment on it ✅
- Make a commit ✅
- Create a state variable with the three possible states of the application ✅
- At the end of the function it changes the state ✅
- Display the last picture ✅
- Show progress bar ✅
- Show link ✅
- Animation of the navigation bar ✅
- Copy to clipboard ✅
- Drag and drop ✅
- Deploy on Firebase ✅
- Read Me ✅



## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/clement-gambier2/image-uploader

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contact

- My portfolio [Click here](https://clement-gambier.fr)
- GitHub [@clement-gambier2](https://github.com/clement-gambier2)

