import axios from 'axios'

class Api {

    constructor(url){
        this.url = url
    }

    post (data){
        axios.post(this.url, data).then((response)=> {
            console.log(response);
        }).catch((error) => {

        })
    }

}

export default Api