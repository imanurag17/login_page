import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginDetails } from '../mock'
import {onSignin} from '../Action/action'

class Loginpage extends Component {
    constructor(props){
        super(props)
    }
    state = {
        Email: '',
        Password: '',
        loggedIn: false,
        changePass: false,
        error: false,
        errorText: '',
        to: '' 
    }
    handleChange = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    login = (e)=>{
        e.preventDefault()
        if(this.props.loginData === []){
            this.setState({...this.state, error: true, errorText: 'sign up to continue'})
        }else 
        if(!this.state.Email || !this.state.Password ){
            this.setState({...this.state, error: true, errorText: 'please fill all the fields'})
            
        }else if(this.state.Email !== this.props.loginData.Email){
            this.setState({...this.state, error: true, errorText: 'Incorrect Email'})
        }else if(this.state.Password !== this.props.loginData.Password){
            this.setState({...this.state, error: true, errorText: 'Incorrect Password'})
        }else{
        this.setState({...this.state, loggedIn: true, error: false, errorText: '', to: 'home'})
        //this.props.data.updateLoggedIn(this.state.loggedIn)
        this.props.onSignin()
        }   
    }
    render() {
        
        const plc_text = loginDetails.map((data) => { return data.loginHead[0] })
        return (
            <div>
                <div className="form_group">
                    {
                        plc_text[0].placeholder.map((data) => {
                            return (
                                <>
                                    <input type="text" name={data.name} className={data.class} placeholder={data.name} onChange={this.handleChange} />
                                </>
                            )
                        })
                    }
                    <label className="checkbox" name='checkbox'>
                        <input type="checkbox" />
                        remember me
                    </label>
                    <button onClick={this.login} className="button">
                    Login
                    </button>
                    {this.state.error ? <p className='error_msg'>{this.state.errorText}</p>: null}
                    <Link className="forget_pass" to='change_password'>forgot your password</Link>
                </div>
                {/* } */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.loginData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignin: () => dispatch(onSignin())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);



