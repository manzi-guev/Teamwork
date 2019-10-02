import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}...`);
});
export default app;
