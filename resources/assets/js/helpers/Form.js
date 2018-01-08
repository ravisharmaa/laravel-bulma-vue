import Errors from './Errors'
import Api from "./Api";

class Form {

    constructor(formFields){
        this.formFields = formFields;
        for(let fields in formFields){
            this[fields] = formFields[fields]
        }

    }

    formData() {
        let data = Object.assign({}, this);
        delete data.formFields;
        return data;

    }

    submit(url){
        let api = new Api(url);
        api.post(this.formData());
    }

}

export default Form