import Form from "../../../helpers/Form";

export default  {
    user: {
        authenticated: false,
        fields: new Form({
            username:'',
            password:''
        })
    }

}