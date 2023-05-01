exports.enrichToken = (req, res, next) => {

    const claims = req.body;

    res.send({
        "version": "1.0.0",
        "action": "Continue",
        "postalCode": claims.email,
        "extension_cb90c9c3-f2a8-40ac-b049-a35b687c1575_role": "idrole" ,
        "extension_roles": "roles",
        "extension_customroles": "customroles"
    });
};