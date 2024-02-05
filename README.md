# Space Adventure
## Specification Deliverable
### Elevator Pitch
With so many mind-numbing apps today that only allow you to meet one boring objective, it's important to keep your mind creatively engaged. That's why Space Adventure allows users to explore a virtual world through choosing different paths to take. Each decision leads to another, and when your path reaches an ending you are rewarded with an acheivement which you can share with friends. Then, you can begin again and choose a different course, gaining a new achievement each time you finish a path.

### Design
**Login**

<img width="500" alt="Screen Shot 2024-01-12 at 8 14 13 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/912e9c6b-6cba-4f4d-8a3c-2700aaa35b2b">

**Home Page**

<img width="500" alt="Screen Shot 2024-01-12 at 8 14 38 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/ca0849f0-d8d7-4044-808b-e02a59b6457f">

**Options**

<img width="500" alt="Screen Shot 2024-01-12 at 8 15 03 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/8048ec3c-81b0-4147-9fe8-17565c20492c">

**Ending**

<img width="500" alt="Screen Shot 2024-01-12 at 8 15 18 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/a17ba6c6-f2e7-40aa-b4b5-5c32906f5c91">

**Friends Page**

<img width="500" alt="Screen Shot 2024-01-12 at 8 15 36 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/3382569e-f5c3-4b7d-ab2e-bc9948983b37">

**Achievements Page**

<img width="500" alt="Screen Shot 2024-01-12 at 8 15 48 PM" src="https://github.com/ScotlynTurner/startup/assets/144388353/67a12601-84cf-49c5-8c80-83e8deff703d">

### Key Features
- Secure login over HTTPS
- Ability to select path options
- Background images that are related to the option selected
- New endings discovered are stored in both personal achievements and friends page
- Notifications of friend's endings displayed in real time
- Choice to play again once an ending is reached

### Technologies
- **HTML** - Uses correct HTML structure for application. Nine HTML pages. One for login, one for the home page, four for the story and options, one for the end result, one to diplay friends' achievements, and one to display personal achievements.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, option display, applying decisions, and moving to different pages.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving achievements
  - sending and saving achievements
- **DB/Login** - Store users and achievements in database. Register and login users. Credentials securely stored in database.
- **WebSocket** - As each user ends, their achievement is broadcast to all other users.
- **React** - Application ported to use the React web framework.

## HTML Deliverable
For this deliverable I built out the structure of my application using HTML.
- **HTML pages** - Nine HTML page that represent the ability to login, play, see achievements, and see friends' activity.
- **Links** - The login page automatically links to the home page. The home page links to the beginning of the game, which has links according to which story option is chosen. The last parts of the story have links to the game ending, and the ending links back to the home, achievements, and friends pages.
- **Text** - Each part of the story and options is represented by a textual description.
- **Images** - Image placeholders on story, ending, friends, and achievement pages.
- **DB/Login** - Input boxes and submit button for login. The friends and achievements tables represent data pulled from the database.
- **WebSocket** - The date of ending achievements represent the notification of realtime games.



notes.md = https://github.com/ScotlynTurner/startup/blob/main/notes.md
