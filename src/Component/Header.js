import React, { Component } from 'react';
import { loginDetails } from '../mock';
import { Link } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import { connect } from 'react-redux';
import Loginpage from './Loginpage';
import Signup from './Signup';
import Home from './Home';
import ChangePassword from './changePassword';

class Header extends Component {
    state = {
        //loggedin: false,
        changePass: false,
        loginData: []
    }
    
    render() {
        const loginHead = loginDetails.map((data) => { return data.loginHead })
        return (
            <>
            {this.props.loggedin ? <Home/> : 
            <div className="container">
                <div className="main_div">
                    <div className="login">
                        <div className="login_popup">
                            <div className="login_head"> 
                                {
                                    loginHead[0].map((data) => {
                                        console.log('name', data.name);
                                        return (
                                            <Link key={data.name} className={data.class} to={data.path}>
                                                {data.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            
                                <Routes>
                                    <Route path="/" element={<Loginpage />} />
                                    <Route path="signup" element={<Signup />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path='change_password' element={<ChangePassword />}/>
                                   
                                </Routes>
                        </div>
                    </div>
                </div>
            </div>
                                }
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedin: state.loggedin
    }
}
export default connect(mapStateToProps, null)(Header);