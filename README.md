# Timbuktu Digital Library
<a href = "http://getskeleton.com">Skeleton CSS framework</a>
<br>
<a href = "https://github.com/necolas/normalize.css/">Normalize CSS</a>
<br>
<br>
<br>
Deployed with <a href = "https://firebase.google.com/">Firebase</a> <br>
https://timbuktu-42c57.web.app/


## Timbuktu: The Library of Ancient History
  - A project written with HTML, CSS, Javascript, and Skeleton CSS.
  - Library holds Book title, author, format (book or podcast) and the civilization it covers.
  - User is able to input their own books or podcasts and add them to the array using Submit button.
  - Delete books from the library using the red 'X' button located on the right side of the array.
  - 

  - I wanted to build a digital library to explore arrays and object constructors. 
    - I used Skeleton CSS to achieve a clean design and responsive page that would work on both mobile and pc. I also enjoyed having the challenge of exploring an unfamiliar framework.
    - The library is a table that displays an array of objects.
        - Books are created as objects and then pushed to the array (podcasts are still Object 'Book' as they have the same properties)
        - 
    - After completing the first version of the project that implemented a default data set saved and loaded through use of localStorage and JSON.
    - I had the idea to create a personal record of all of my educational materials that I could update and edit, connected to a database so the data was more permanent than local storage. The goal was to create a full-stack web application, with a working database and separate data for each authenticated user, so that others could create their own "libraries" and keep a permanent, running record.
    - User authentication is achieved using Google or Github.
        - Each user is given a unique identification token on first time log-in that does not change.
        - Data is saved under user's unique id so it can be retrieved at a later time.

## Future Fixes & Updates
  - Add a tab to each table column to Sort library alphabetically depending on user choice (sorted by title, author, etc)
  - Realtime database needs to be fixed...
  - Supposed to load data when logging in as an authenticated user, but it is currently not functional.
    - Look into saving and retrieving a snapshot of the user's data.
  - Instead of default data loaded from a Javascript object, must load the data from Firebase database
    - May have to remove the default data array and replace it with user's saved data.
  - Instead of a save/load data button, make realtime database that updates automatically