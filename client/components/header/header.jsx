Header = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            message:'',
            messageClass:'hidden'
        }
    },
    displayError(message){
        this.setState({message:message,messageClass:'alert alert-danger message'});
    },
    handleSubmit(e){
        e.preventDefault();
        this.setState({message:'',messageClass:'hidden'});
        var that = this;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(email, password, function (e) {
            if(e){
                that.displayError(e.reason)
            } else{
                Meteor.setTimeout(function(){
                    FlowRouter.go('/dashboard');
                },1000)
            }
        });
    },
    render(){
        return (
            <div>
                <span className="navbar-react"><i className="fa fa-facebook"></i>akebook
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form onSubmit={this.handleSubmit} role="form" id="signin" className="navbar-form navbar-right">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="email" ref="email" placeholder="Email Address" name="email" id="email" className="form-control"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input type="password" ref="password" placeholder="Password" name="password" id="password" className="form-control"/>                
                            </div>
                            <button className="btn btn-primary">Login</button>
                            <br/>
                            <span className={this.state.messageClass}>{this.state.message}</span>
                        </form>
                    </div>
                </span>
            </div>
        )
    }
});
