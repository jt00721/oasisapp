// file to keep code organised when handling routes.
import express, { Request, Response }from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@jtgoasis/common';

import { User } from '../models/user';
import { Password } from '../services/password';

// Object to associate routes with.
const router = express.Router();

// Route handler
router.post('/api/users/login', 
    [
        body('email')
            .isEmail()
            .withMessage('Valid Email required'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password required')
    ],
    validateRequest, 
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new BadRequestError('Login Credentials are invalid');
        }

        const passwordsMatch = await Password.compare(
            existingUser.password, 
            password
        );

        if (!passwordsMatch) {
            throw new BadRequestError('Login credentials are invalid');
        } 

        //Generate JWT token
        const userJwt = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email
            }, 
            process.env.JWT_KEY!
        );

        // Store it in session object, cookie session library will take object and
        // serialize it and then send back to the users browser.
        req.session = {
            jwt: userJwt
        };

        res.status(200).send(existingUser);

});

// Renaming the router as our application will 
// end with many different routers which can't all be named router.
export { router as loginRouter };