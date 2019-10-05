import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to project TeamWork'
  });
});
app.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Route not found'
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}...`);
});
export default app;
