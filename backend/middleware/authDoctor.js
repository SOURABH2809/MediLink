import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers;

    if (!dtoken) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        // Decode the doctor token
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

        // Ensure req.body is initialized before setting docId
        req.body = req.body || {};
        req.body.docId = token_decode.id;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: 'Invalid token. Login Again' });
    }
}

export default authDoctor;
