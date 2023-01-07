// creating api 
//header for server

const handleOptions = (req, res, next) =>{
    res.setHeaders('Access-Control-Allow-Origin', '*');
    res.setHeaders('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'options') {
        return res.sendStatus(200);

        
    }
    return next();

}

module.exports = {
    handleOptions
}