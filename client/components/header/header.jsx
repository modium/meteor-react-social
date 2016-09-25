Header = React.createClass({
    render(){
        return (
            <div>
                <span className="navbar-react"><i className="fa fa-facebook"></i>akebook
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form role="form" id="signin" className="navbar-form navbar-right">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" ref="email" placeholder="Email Address" name="email" id="email" className="form-control"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input type="text" ref="password" placeholder="Password" name="password" id="password" className="form-control"/>
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </span>
            </div>
        )
    }
});
