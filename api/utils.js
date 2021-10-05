if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

class Shortener{
    constructor() {
        this.SERVER = process.env.SERVER;
        this.PORT = process.env.PORT;
        this.id = 100000000; /* You can start from a non-zero seed */
        this.url_to_index = new Array();
        this.short_to_url = new Array();
        this.statistic = new Array();

        /* Randomize CHARS if you dont want people to guess the next url generated */
        this.CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';

        this.num_to_base62 = this.num_to_base62.bind(this);
        this.shortened = this.shortened.bind(this);
        this.findUrl = this.findUrl.bind(this);
        this.findShort = this.findShort.bind(this);
        this.encodedUrl = this.encodedUrl.bind(this);
        this.decodedUrl = this.decodedUrl.bind(this);
        this.hit = this.hit.bind(this);
        this.stat = this.stat.bind(this);
        this.list = this.list.bind(this);
        
    }

    num_to_base62(n) {
        if(n > 62) {
            return this.num_to_base62(Math.floor(n / 62)) + this.CHARS[n % 62];
        } else {
            return this.CHARS[n];
        }
    }
    
    shortened(url){
        let short_url = this.url_to_index[url];
        if (short_url == undefined) { /* Nope, not added */
            short_url = this.num_to_base62(this.id);
            while (short_url.length < 6) { /* Add padding */
                short_url = this.CHARS[0] + short_url;
            }
            this.url_to_index[url] = short_url;
            this.short_to_url[short_url] = url;
            this.statistic[short_url] = 0
            this.id++;
        }

        return short_url;

    }

    findUrl(url){

        return this.url_to_index[url]

    }

    findShort(hash){

        console.log(this.short_to_url);
        return this.short_to_url[hash];

    }

    encodedUrl(url){

        const hash = this.shortened(url);

        const short_url_string = 'http://' + this.SERVER + ':' + this.PORT +
                               '/' + hash;
        return {hash, short_url_string}

    }

    toShortUrl(hash){
        const short_url_string = 'http://' + this.SERVER + ':' + this.PORT +
                               '/' + hash;

        return {hash, short_url_string};

    }
    
    decodedUrl(hash){
        
        const long_url_string =  this.short_to_url[hash]

        if (long_url_string != undefined) {
            return {hash, long_url_string}
        } else {
            return {status: 404, message: "Requested url not found"}
        }
        
    }

    hit(hash){

        this.statistic[hash] =+ 1;
        return {hash, hit:this.statistic[hash]}

    }

    stat(hash){
        const {long_url_string } = this.decodedUrl(hash);
        
        return {
            hit: this.statistic[hash], 
            url_long: long_url_string, 
            url_short: long_url_string?this.encodedUrl(long_url_string)['short_url_string']:''
        };
        
    }

    list(){

        return new Promise((resolve, reject)=>{

            try {

                const aList = []
                const shortList = Object.keys(this.short_to_url);
                shortList.forEach((short)=>{
                    aList.push({
                        hash: short,
                        short: this.toShortUrl(short)["short_url_string"], 
                        long: this.short_to_url[short],
                        hit:this.statistic[short]
                    })
                });
                
                console.log('shortList', aList)

                resolve(aList);
    
            } catch (error) {

                reject({status: 500, message: error.message});

            }

        })
    }

}

export default Shortener;
