onst express = require('express');
const app = express();
const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();
const PORT = process.env.PORT || 4001;


app.use('/mountains', mountainsRouter);
app.use('/mountain-ranges', mountainRangesRouter);
const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
});

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
