import express from 'express';
import userController from './controllers/userRoutes'
import publicRoutes from './controllers/publicRoutes'

const app = express();
const port = process.env.PORT || 3000

app.use('/', publicRoutes);
app.use('/user', userController);


app.listen(port, () => { 
    console.log(`Port is running in port http://localhost:${port}`);
})

