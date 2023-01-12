import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginDetails } from '../mock'
import { connect } from 'react-redux';
import {onSignupData} from '../Action/action'

class Signup extends Component {
    state = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
        error: false,
        errorText: '',
        to: ''
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    onSignup = () => {
        if(this.state.Email == ''){
            this.setState({...this.state, error: true, errorText: 'please enter email'})
        }else if(this.state.Password == ''){
            this.setState({...this.state, error: true, errorText: 'please enter password'})
        }else if(this.state.Password !== this.state.ConfirmPassword){
            this.setState({...this.state, error: true, errorText: 'password dosent matched'})
        }else {
            this.setState({...this.state, error: false, errorText: '', to: '/' })
        }
        this.props.onSignupData(this.state)
    }
    render() {
        const plc_text = loginDetails.map((data) => { return data.loginHead[1] })
        return (

            <form  className="form_group">
                {
                    plc_text[0].placeholder.map((data) => {
                        return (
                            <input type="text" name={data.name} className={data.class} placeholder={data.placeholder} onChange={this.handleChanges} />
                        )
                    })
                }
                <button onClick={this.onSignup} className="button">
                    <Link className='signup_link'  to={this.state.to}>
                        Sign up
                    </Link>
                </button>
                {this.state.error ? <p>{this.state.errorText}</p>: null}
            </form>


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
        onSignupData: (data) => dispatch(onSignupData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);