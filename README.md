## Timbuktu: The Library of Ancient History

## Project Notes
  - A project created with HTML, CSS, Javascript, plus Skeleton CSS and Normalize.css
  - Library holds Book title, author, format and the civilization it covers.
  - User is able to submit their own books or podcasts and create a list of materials
  - The 'library' display is a table that holds an array of Objects constructed and pushed to the array.
    - Delete books from the library by clicking the red 'X' button located next to each entry.
    - Books are created as objects using a constructor and then pushed to the array.
    - The book object's 'format' property has two options -> Book, Podcast   
  - I used Skeleton CSS to achieve a clean, responsive design that would work on both mobile and pc.
  <br>
  - The first version of the project that implemented a default data set saved and loaded through use of localStorage and JSON.
  - For the second version of the project, I decided to create a full-stack application that also scales down for mobile devices.
  - -Deployed with Firebase, that contains a realtime database and the ability to save and retrieve each authenticated user's data in such a way that they can only access their data and nobody else can read/write over it.
    - User authentication is achieved through Github and Google APIs.
    - Each user is given a unique identification token that is generated on first time log-in.
    - 
## Future Fixes & Updates
  - **this project is still in development**
  - Add a tab to each table column to Sort library alphabetically depending on user choice (sorted by title, author, etc).
  - Realtime database needs to be completed ...
    - Supposed to load the relevant data when logging in as an authenticated user, but it is currently not functional.
      - Firebase saves arrays as objects so array [a, b, c] would be {0: a, 1: b, 2: c}
    - Instead of default data loaded from a Javascript object, must load database & display to UI
    - ~~Straighten out granting permission for all authenticated users to be granted read/write privileges~~

- <a href = "http://getskeleton.com">Skeleton CSS</a>
- <a href = "https://github.com/necolas/normalize.css/">Normalize.CSS</a>
- Deployed using <a href = "https://firebase.google.com/">Firebase</a>

https://timbuktu-42c57.web.app/
