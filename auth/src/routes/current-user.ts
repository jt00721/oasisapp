// file to keep code organised when handling routes.
import express from 'express';
import { currentUser } from '@jtgoasis/common';

// Object to associate routes with.
const router = express.Router();

// Route handler
router.get('/api/users/currentuser', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null }); 
});

// Renaming the router as our application will 
// end with many different routers which can't all be named router.
export { router as currentUserRouter };