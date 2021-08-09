// file to keep code organised when handling routes.
import express from 'express';

// Object to associate routes with.
const router = express.Router();

// Route handler
router.post('/api/users/logout', (req, res) => {
    req.session = null;

    res.send({});
});

// Renaming the router as our application will 
// end with many different routers which can't all be named router.
export { router as logoutRouter };