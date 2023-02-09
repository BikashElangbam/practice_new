
const Validation = (values) =>{
    let errors ={}
    const emailRegx = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;
    const nameRegx = /^[a-zA-Z]{2,30}$/;

    if(!values.username){
        errors.username = "Email is required"
    }else if(!nameRegx.test(values.username)){
        errors.username = "Name is Invalid"
    }

    if(!values.email){
        errors.email = "Email is required"
    }else if(!emailRegx.test(values.email)){
        errors.email = "Email is Invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    } else if (values.password.length < 6){
        errors.password = "Password length must be 6 or more character"
    }

    if(!values.rePassword){
        errors.rePassword = "Confirm Password is required"
    } else if (values.password !== values.rePassword){
        errors.rePassword = "Password does not matched"
    }

    return errors;
}
export default Validation;
