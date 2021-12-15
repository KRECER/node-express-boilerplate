const verifyRolesMiddleware = (allowedRoles) => (req, res, next) => {
    const { __t: role } = req.session.user;
    const result = allowedRoles.includes(role);

    if (result) {
        return next();
    }

    res.status(403).json({
        message: 'you do not have permission to access',
    });
};

export { verifyRolesMiddleware };
