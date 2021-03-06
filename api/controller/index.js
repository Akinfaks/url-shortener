import Shortener from "../utils";

const shortener = new Shortener();

export const found = async (req, res) => {
    try{
        res.status(200).json({status:200, message: "success"});
        return;
    } catch(error) {

    }
}

export const encode = async (req, res) => {
    try {

        const { longUrl } = req.query;


        if (longUrl){

            const short = shortener.findUrl(longUrl.trim()); 
            
            if (short){

                const { hash, short_url_string } = shortener.encodedUrl(longUrl);
                res.json({
                    short: short_url_string,
                    long:longUrl,
                    hash: hash,
                    status: 200,
                    statusTxt: 'OK'
                });
                return;
            } else {

                const { hash, short_url_string } = shortener.encodedUrl(longUrl);

                res.status(200).json({
                    short: short_url_string,
                    long:longUrl,
                    hash: hash,
                    status: 200,
                    statusTxt: 'OK'
                });

                // res.json('Your short url is: <a href="' + short_url_string +
                // '">' + short_url_string + '</a>');

            }

            
        } else {
            throw new Error("Invalid request");
        }
    } catch (error) {

        res.status(500).json({status: 500, message: error.message})

    }

}

export const decode = async (req, res) => {

    try{
        // const path = req.pathname.substring(1); 

        var short = req.query.shortUrl; // path === hash
        const path = new URL(short).pathname.substring(1);

        if (path){

            const {status, message, hash, long_url_string } = shortener.decodedUrl(path);

            if (status){
                res.status(401).json({status: 401, message});
                return;
            }

            res.json({
                url: long_url_string,
                hash: hash,
                status: 200,
                statusTxt: 'OK'
            });

        }

    } catch(error) {

        res.status(500).json({status: 500, message: error.message})

    }
}


export const statistic = async (req, res) => {
    
    try {

        var hash = req.query.url_path;

        const exist = shortener.findShort(hash)

        if (!exist){
            res.json({status: 401, hash: hash, message: "short url not found"});
            return;
        }

        const {hit, url_long, url_short} = shortener.stat(hash);
        
        res.json({
            // url: long_url_string,
            hash: hash,
            hit:hit,
            url_long, 
            url_short,
            status: 200,
            statusTxt: 'OK'
        });
        
    } catch (error) {

        res.status(500).json({status: 500, message: error.message})

    }
}

export const list = async (req, res) => {
    try {

        var path = req.query.hash;

        const list = await shortener.list();

        res.json(list);            

    } catch (error) {
        
        res.status(500).json({status: 500, message: error.message})

    }
}

export const redirect = async (req, res) => {
    try {
        var path = req.params.hash;

        if (path){

            const {status, message, hash, long_url_string} = shortener.decodedUrl(path);
            // if (status){
            //     res.end({status: 401, message})
            // }

            if(long_url_string) {

                shortener.hit(hash);
                res.redirect(long_url_string);

            } else {
                res.redirect('/');
            }
        }
            
    } catch (error) {

        res.json.status(500)({status: 500, message: error.message})

    }
}