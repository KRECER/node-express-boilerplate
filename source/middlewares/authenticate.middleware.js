// Instruments
import { NotFoundError } from '../helpers/errors';

export const authenticateMiddleware = (req, res, next) => {
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }

    const { emails } = req.session.user;

    if (emails) {
        return next();
    }

    res.status(401).json({
        message: 'authentication credentials are not valid',
    });
};
