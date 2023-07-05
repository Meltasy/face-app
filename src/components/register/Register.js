import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://smartidea.onrender.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <article className="br3 ba #063155 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 #063155">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black-20 hover-white w-100"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black-20 hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black-20 hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                        <input
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black-20 bg-transparent grow pointer f5 dib"
                            type="submit"
                            value="Register"
                        />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;