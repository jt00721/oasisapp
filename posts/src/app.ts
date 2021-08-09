import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@jtgoasis/common';
import { createPostRouter } from './routes/new';
import { showPostRouter } from './routes/show';
import { indexPostRouter } from './routes/index';
import { updatePostRouter } from './routes/update';

const app = express();
// Enable express to be aware that it is behind a proxy of Ingress nginx and 
// trust traffic as being secure even though its from the proxy.
app.set('trust proxy', true);
app.use(json());

// Disable encryption on web token as json web token is encrypted
app.use(
    cookieSession({
        signed:false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUser);

app.use(createPostRouter);
app.use(showPostRouter);
app.use(indexPostRouter);
app.use(updatePostRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };