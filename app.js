import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to TEAMWORK PROJECT'
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
export default app;
