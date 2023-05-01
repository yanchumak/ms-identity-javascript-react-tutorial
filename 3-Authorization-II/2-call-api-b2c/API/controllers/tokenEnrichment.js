exports.enrichToken = (req, res, next) => {

    const claims = req.body;

    const r = {
        "version": "1.0.0",
        "action": "Continue",
        "postalCode": claims.email,
        "extension_roles": "admin, agent",
        "extension_customroles": "customroles"
    }

    console.log('req', claims);
    console.log('res', r);

    res.send(r);
};