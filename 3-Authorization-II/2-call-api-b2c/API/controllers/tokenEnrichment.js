exports.enrichToken = (req, res, next) => {

    const claims = req.body;

    const r = {
        "version": "1.0.0",
        "action": "Continue",
        "email": claims.email,
        "extension_roles": "admin, agent",
    }

    console.log('req', claims);
    console.log('res', r);

    res.send(r);
};