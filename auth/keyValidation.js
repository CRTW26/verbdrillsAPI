const keyValidation = async (req, res, next) => {
    const apiKey = req.query.key;
    if (!apiKey) {
        return res.status(400).send({
            response: "Missing API key"
        });
    } else {
        next();
    }
}

export default keyValidation;