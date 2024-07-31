import "reflect-metadata";
import express from 'express';
import dataSource from './config/dataSource';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 33010;

dataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });
