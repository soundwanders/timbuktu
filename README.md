## Timbuktu: The Library of Ancient History

## Project Notes
  - A project created with HTML, CSS, Javascript, plus Skeleton CSS and Normalize.css
  - Library holds Book title, author, format and the relevant civilization
  - User is able to submit their own books or podcasts and create a list of materials
  - The 'library' is a table that displays an array of Objects constructed and pushed to the array
    - Delete books from the library by clicking the red 'X' button located next to each entry
    - Books are created as objects using a constructor and then pushed to the array
    - The book 'format' property has two options -> Book, Podcast
  - Skeleton CSS helped achieve a simple, responsive design that scales properly from mobile up to desktop
  - The first version of the project that implemented a default data set saved and loaded through use of localStorage and JSON
  - For the second version of the project, I decided to create a full-stack application that also scales down for mobile devices
  - Deployed with Firebase database hosted on Firebase servers gives user the ability to save and retrieve their data
    - User authentication is achieved through Github and Google APIs, only authorized users can write to database
    - Each user is given a unique identification token that is generated on first time log-in
    
## Future Fixes & Updates
  - **this project is still in development...**
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
