import { Component } from "react";
import './formStyle.css';

class FormValidation extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            rePassword:'',
            fullName:'',
            formError:{},

        }
        
        this.initialState = this.state;

    }
    onFormValidation(){
        const {email,password,rePassword,fullName} = this.state;
        let formError = {};
        let isValidForm = true;
        const emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;
        const nameRegx = /^[a-zA-Z]+$/;

        if(!email || !emailRegx.test(email)){
            isValidForm = false;
            formError["emailErr"] = "Invalid Email ID";

        }
        if(!password){
            isValidForm = false;
            formError["passwordErr"] = "Password is required";

        }
        if(!rePassword || password !== rePassword){
            isValidForm = false;
            formError["rePasswordErr"] = "Password is not matched";

        }
        if(!fullName || !nameRegx.test(fullName)){
            isValidForm = false;
            formError["fullNameErr"] = "Invalid Name"
            
           
        }
        this.setState({formError:formError});
        return isValidForm;
    }
    handleChange=(e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.onFormValidation()){
            alert("Submitted Successfully..!");
            this.setState(this.initialState);
        }
    }

    render(){
        const {emailErr,passwordErr,rePasswordErr,fullNameErr} = this.state.formError;
        return(
                <>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div id="signup-form">
                            <div id="form-title">Signup</div>
                            <div id="form-body">
                                <div className="form-field  ">
                                    <label>E-Mail</label>
                                    <input type="email" name="email" value = {this.state.email} 
                                        onChange={this.handleChange} 
                                        className={emailErr?'form-field-error':""}/>                                                                  
                                </div>
                                {/* <div className="fieldError">{emailErr}</div> */}
                                <div className="form-field">
                                    <label>Password</label>
                                    <input type="password" name="password" value = {this.state.password} 
                                        onChange={this.handleChange} 
                                        className={passwordErr?'form-field-error':""}/>
                                </div>
                                {/* <div className="fieldError">{passwordErr}</div> */}
                                <div className="form-field">
                                    <label>Retype Password</label>
                                    <input type="password" name="rePassword" value = {this.state.rePassword} 
                                        onChange={this.handleChange} 
                                        className={rePasswordErr?'form-field-error':""}/>
                                </div>
                                {/* <div className="fieldError">{rePasswordErr}</div> */}
                                <div className="form-field">
                                    <label>Full Name</label>
                                    <input type="text" name="fullName" value = {this.state.fullName} 
                                        onChange={this.handleChange} 
                                        className={fullNameErr?'form-field-error':""}/>
                                </div>
                                {/* <div className="fieldError">{fullNameErr}</div> */}
                                <div className="form-field">
                                    <label>Are you a merchant?</label>
                                    <input type="checkbox" name="isMerchant" />
                                </div>
                                <div className="form-field">
                                    <button id="submit" type="submit">Go</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
        );
    }
}
export default FormValidation;