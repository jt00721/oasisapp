import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { loginRouter } from './routes/login';
import { logoutRouter } from './routes/logout';
import { registerRouter } from './routes/register';
import { errorHandler, NotFoundError } from '@jtgoasis/common';

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

// To associate router object with the app.
app.use(currentUserRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(registerRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };