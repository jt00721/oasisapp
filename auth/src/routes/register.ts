// file to keep code organised when handling routes.
import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { validateRequest, BadRequestError } from '@jtgoasis/common';

// Running validationResult will inspect any request pull out any 
// information that was appended to the request during validation.
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

// Object to associate routes with.
const router = express.Router();

// Route handler.
// Validation for email and password using express-validator 
// pre-built validation functions.
router.post('/api/users/register', [
    body('email')
        // Validate email structure.
        .isEmail()
        // Validation error message.
        .withMessage('Provide valid email'),
    body('password')
        // No leading or trailing spaces for password input.
        .trim()
        // Specified length range of characters for password.
        .isLength({ min: 4, max: 20 })
        // Validation error message.
        .withMessage('Password must be between 4 and 20 characters'),
    body('name')
        // No leading or trailing spaces for password input.
        .trim()
        // Specified length range of characters for password.
        .isLength({min: 1})
        // Validation error message.
        .withMessage('Provide a name')
],
validateRequest, 
async (req: Request, res: Response) => {
    // Values from the body of the register request.
    const { email, password, name } =req.body;

    // User with email will be assigned to this variable.
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new BadRequestError('Email already in use');
    }

    const user = User.build({ email, password, name });
    await user.save();

    //Generate JWT token
    const userJwt = jwt.sign(
        {
            id: user.id,
            email: user.email
        }, 
        process.env.JWT_KEY!
    );

    // Store it in session object, cookie session library will take object and
    // serialize it and then send back to the users browser.
    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);
});

// Renaming the router as our application will 
// end with many different routers which can't all be named router.
export { router as registerRouter };