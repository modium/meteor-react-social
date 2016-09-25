Header = React.createClass({
    render(){
        return (
            <div className="navbar-react">
                <span className="navbar-react">
                    <i className="fa fa-facebook"></i>akebook
                </span>
                <div className="collapse navbar-collapse" id="navbar">
                    <form role="form" id="signin" className="navbar-form navbar-right">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" ref="email" placeholder="Email Address" id="email" className="form-group"/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input type="text" ref="password" placeholder="Password" id="password" className="form-group"/>
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
});
