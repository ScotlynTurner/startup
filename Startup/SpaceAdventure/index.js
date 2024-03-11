const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'startup/Startup/SpaceAdventure/public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// GetAchievements
apiRouter.get('/achievements', (_req, res) => {
  res.send(achievements);
});

// SubmitAchievement
apiRouter.post('/achievements', (req, res) => {
  scores = updateAchievements(req.body, achievements);
  res.send(achievements);
});

// updateAchievements considers a new achievement for inclusion in the achievements.
// The achievements are saved in memory and disappear whenever the service is restarted.
let achievements = [];
function updateAchievements(newAchievement, achievements) {
  let found = false;
  for (const [i, prevAchievement] of achievements.entries()) {
      achievements.splice(i, 0, newAchievement);
      found = true;
  }

  if (!found) {
    achievements.push(newAchievement);
  }

  return achievements;
}
