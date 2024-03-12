const express = require('express');
const path = require('path');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

let achievements = [];

// GetAchievements
apiRouter.get('/achievements', (req, res) => {
  const { username } = req.query;
  if (!username) {
    return res.status(400).send('Username is required');
  }

  const userAchievements = achievements.filter(achievement => achievement.username === username);
  res.send(userAchievements);
});

apiRouter.get('/achievements/all', (req, res) => {
  res.send(achievements);
});

// SubmitAchievement
apiRouter.post('/achievements', (req, res) => {
  const newAchievement = req.body;
  let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
  achievements.push(newAchievement);
  localStorage.setItem('achievements', JSON.stringify(achievements));
  res.send(achievements);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
