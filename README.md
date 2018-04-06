This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## How to Run Component

- [Folder Structure](#folder-structure)
- [Download Repository](#download-repository)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
- [Notes](#notes)



### `Folder Structure`

My file/folder structure is as follows:

```
search-components/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    /components
      Album.js
      App.js
    /css
      App.css
    /images
      ITunes_OS_X.svg.png
      logo.svg      
    App.test.js
    index.css
    index.js
    
```

### `Download Respository`
In the command line of your terminal, copy the following string:

```sh
git clone https://github.com/facebook/create-react-app.git
cd search-component
npm start
```


### `Available Scripts`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `notes`
I was only receiving 2 albums from the provided API (via the browser and Postman). Here are some improvements that could be made:

  Styling Improvements:
    -Making the displayed albums into a grid using Material UI (so the list of albums display horizontally)

  Functional Improvements:
    -I might have changed the visual library used for the search element. The AutoComplete component from the UI library was not handling the new request as expected and researched known issues with this specific property and callback use. 
  
  Overall Improvements:
    -A bit verbose in some areas of the code. Given more time, I could have used only one map to access all the information needed for the state and maybe abstracted the AutoComplete component into a separate js file for readability. 

Original Challenge Link: https://jsfiddle.net/mpatel369/1epbdbj4/