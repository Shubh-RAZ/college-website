import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login'
import './login.css'
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        account : {
            email : "",
            password : "",
            imageUrl : "",
        }
    }

    

    componentDidMount() {
        if(localStorage.getItem('mailer-logged') === 'true'){
            const account = {...this.state.account};
            account['imageUrl'] = localStorage.getItem('mailer-logged-image');
            this.setState({account})
            // redirect here
            this.props.history.push('/mailhome');
        }
    }

    handleChange = (e) => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : this.state.account.email,
            password : this.state.account.password,
        }
        axios.post('http://localhost:4000/mail-system/login', data)
        .then((res) => {
            console.log(res)
            if(res.status === 200){
                localStorage.setItem('mailer-logged', true)
                localStorage.setItem('mailer-name',  res.data.message)
                this.props.history.push('/mailhome');
                localStorage.setItem('Id',res.data.email)
                toast(`Login successfull`)
            }  
        })
        .catch((err) => {
            let account = {...this.state.account};
            account.email = ""
            account.password = ""
            this.setState({account})
            toast(`Login Failed`)
        });
    }

    googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj;  // optional chaingin operator

        try{
            const account = {...this.state.account};
            account['imageUrl'] = result.imageUrl;
            this.setState({account})
            console.log(this.state.account.imageUrl)
            const data = {
                email : result.email,
                password : 'google-sign-in',
            }
            const res = await axios.post('http://localhost:4000/mail-system/login', data);
            if(res.status === 200){
                localStorage.setItem('mailer-logged', true )
                localStorage.setItem('mailer-name', result.name )
                localStorage.setItem('mailer-logged-image', result.imageUrl)
                this.props.history.push('/mailhome');
            }
            else{
                console.log('login failed')
            }
        }   
        catch(error){
            console.log(error);
        }
    }

    googleFailure = (error) => {
        console.log(error);
        console.log('google signup failed')
    }

    render() { 
        return ( 
            <>
                 <ToastContainer></ToastContainer>
            <div className="login-whole">

                <div className="left-img-login">
                    <img src="./login.png" className="login"></img>
                </div>
            <form className="login-form">
                <div className="login-title">Alkazar </div>
                <div className="email-login" >Email</div>
                <input name="email" type="mail" className="input-email-login" value={this.state.account.email} onChange={this.handleChange}></input>
                <div className="password-login">Password</div>
                <input name="password" className="input-password-login" type="password" value={this.state.account.password} onChange={this.handleChange}></input>
                <div className="btns-login-flex">
                <div type="submit" onClick={this.handleSubmit} className="login-btn">Login</div>
                {/* <img src={this.state.account.imageUrl} alt="img" style={{borderRadius:'50%'}}/> */}
                {/* <button type="submit" onClick={this.handleSubmit}>Login</button> */}
                {/*  */}
                <GoogleLogin
                    clientId="493377956250-r6vuhl5hvkqcguvbok7frl1ceb2oge2r.apps.googleusercontent.com"
                    render={renderProps => (
                    <div onClick={renderProps.onClick} color='primary' className="login-google">Signin With Google</div>
                    )}
                    onSuccess={this.googleSuccess}
                    onFailure={this.googleFailure}
                    cookiePolicy={'single_host_origin'}
                />

                </div>

          <Link to="/signup" style={{textDecoration:'none'}} >      <div className="dont-account">
                    Don't Have An Acoount ?
                </div>

                </Link>
            </form>
            </div>
            </>
         );
    }
}
 
export default Login;
