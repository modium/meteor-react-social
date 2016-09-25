Signupform = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">
                        It's free and always will be.
                    </p>
                </div>
                <form>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input name="first_name" placeholder="First name" type="text" ref="first_name" className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input name="last_name" placeholder="Last name" type="text" ref="last_name" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input name="email" placeholder="Email or mobile number" type="text" ref="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" placeholder="Password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-md btn-success">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
})
