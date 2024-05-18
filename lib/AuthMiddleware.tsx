// lib/authMiddleware.js
import { getUser } from '@propelauth/nextjs/server/app-router';

export const authMiddleware = async (req, res, next) => {
    try {
        const user = await getUser(req);
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.error("Error in authMiddleware:", error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
