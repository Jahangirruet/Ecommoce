import { TokenDecode } from "../utils/tokenUtility.js";

export default (req, res, next) => {
    let token = req.headers["token"];
    if (!token) {
        token = req.cookies["token"];
    }
    let decode = DecodeToken(token);
    if (decode == null) {
        return res.status(401).json({ status: "Failed", Message: "Unauthorized" });
    }
    else {
        let email= decode['email'];
        let user_id = decode['user_id'];
        // set user_id and email in header object
        req.headers.user_id = user_id;
        req.headers.email = email;
        next();
    }
};