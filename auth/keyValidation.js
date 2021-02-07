const keyValidation = async (req, res, next) => {
    const apiKey = req.query.key;
    if (apiKey) {
        next();
    }
}

export default keyValidation;