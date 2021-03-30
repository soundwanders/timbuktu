## Timbuktu: The Library of Ancient History
#### Current branch, 'main', only contains code for the static web application hosted on Github Pages. This version uses local storage and is not connected to Firebase.
#### To see the code for the version currently in development, which is a full-stack web application deployed with Firebase, please visit the branch 'firebase'

## Project Notes
  - A project created with HTML, CSS, Javascript, Skeleton CSS and Normalize.css
  - Library holds Book title, author, format (book or podcast) and the civilization it covers.
  - User is able to input their own books or podcasts and add them to the array using Submit button.
  - The library is a table that displays an array of objects; the books are constructed and pushed to the array.
    - Delete books from the library by clicking the red 'X' button located next to each entry.
    - Books are created as objects using a constructor and then pushed to the array.
    - Podcasts are created with the same object constructor as Books.
    - The material's format property is assigned through a Select field with two options -> Book, Podcast   
  - I used Skeleton CSS to achieve a clean, responsive design that would work on both mobile and pc.
    - I enjoyed having the challenge of exploring an unfamiliar framework and implementing a boilerplate framework.
  - The first version of the project that implemented a default data set saved and loaded through use of localStorage and JSON.
  - Once that was complete, I had the idea to create a database connected to the page with CRUD functionality.
  - The goal was to create a full-stack application, deployed with Firebase, that contains a realtime database and the ability to save and retrieve each authenticated user's data in such a way that they can only access their data and nobody else can read/write over it.
    - This allows others to create their own exclusive "libraries" and keep a permanent, running record of their data.
    - User authentication is achieved using Github and Google APIs.
    - Each user is given a unique identification token on first time log-in that does not change.
    - Data is saved under user's unique id so it can be retrieved at a later time.

## Future Fixes & Updates
  - **Still in development. The full-stack version of this project is not fully functional yet.**
  - Add a tab to each table column to Sort library alphabetically depending on user choice (sorted by title, author, etc).
  - Realtime database needs to be fixed:
    - Supposed to load the relevant data when logging in as an authenticated user, but it is currently not functional.
      - Look into saving and retrieving a snapshot of the user's data.
    - Instead of default data loaded from a Javascript object, must load the data from Firebase database
      - May have to remove the default data array and replace it with user's saved data.
    - Instead of a save/load data button, make realtime database that updates automatically
    - Straighten out the permissions for CRUD operations to be carried out for all authenticated users
<br>
<a href = "http://getskeleton.com">Skeleton CSS framework</a> <br>
<a href = "https://github.com/necolas/normalize.css/">Normalize CSS</a> <br>
Deployed with <a href = "https://firebase.google.com/">Firebase</a> <br>
https://timbuktu-42c57.web.app <br>
https://soundwanders.github.io/timbuktu
