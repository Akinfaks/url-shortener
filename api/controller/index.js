import Shortener from "../utils";

const shortener = new Shortener();
export const found = async (req, res) => {
    res.json("Tested and working")
}

export const encode = async (req, res) => {
    try {
        const { longUrl } = req.query;

        console.log("longUrl", longUrl);

        if (longUrl){

            const short = shortener.findUrl(longUrl); 
            
            if (short){
                console.log('entry found in memory');
                res.json({
                    url: longUrl,
                    hash: short,
                    status: 200,
                    statusTxt: 'OK'
                });
            } else {

                console.log('entry NOT found in memory, saving new');

                const { hash, short_url_string } = shortener.encodedUrl(longUrl);

                console.log(short_url_string, hash);

                res.json({
                    url: short_url_string,
                    hash: hash,
                    status: 200,
                    statusTxt: 'OK'
                });

                // res.json('Your short url is: <a href="' + short_url_string +
                // '">' + short_url_string + '</a>');

            }

            
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({status: 500, message: error.message})
    }

}

export const decode = async (req, res) => {

    try{
        // const path = req.pathname.substring(1); 

        var short = req.query.url_short; // path === hash
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

        console.log(error)
        res.status(500).json({status: 500, message: error.message})

    }
}


export const statistic = async (req, res) => {
    
    try {

        var hash = req.query.hash;

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
        // console.log(error)
        res.status(500).json({status: 500, message: error.message})
    }
}

export const list = async (req, res) => {
    try {

        var path = req.query.hash;

        const list = await shortener.list();
        console.log("Show List")
        res.json(list);            

    } catch (error) {
        
    }
}

export const redirect = async (req, res) => {
    try {
        var path = req.params.hash;
        console.log('path', path);

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
        console.log(error)
        res.json.status(500)({status: 500, message: error.message})

    }
}