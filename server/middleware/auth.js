import jwt from 'jsonwebtoken';

//authentication user identity
const auth = (req, res, next) => {
    
    try {
        //getting token from request 
        const token = req.headers.authorization.split(" ")[1];
        //if length.token < 500 its a google user otherwise its a custom user
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            //verify token equal to you set secret
            decodedData = jwt.verify(token, process.env.SECRET);
            
            req.userId = decodedData?.id;
        }else{
            //for google user no need to verify token but to decode it
            decodedData = jwt.decode(token);
            //sub is unique id for every google user
            req.userId = decodedData?.sub;
        }
        
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;