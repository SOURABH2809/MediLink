import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        // Decode the token to get the user's ID
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure req.body is initialized before setting userId
        req.body = req.body || {};
        req.body.userId = token_decode.id;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: 'Invalid token. Login Again' });
    }
}

export default authUser;
