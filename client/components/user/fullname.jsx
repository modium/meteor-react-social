Fullname = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        var data = {};
        data.usr = Meteor.users.findOne({_id:this.props.user});
        return data; // Retrieve this user's data in a collection
    },
    render(){
        var fullname = '';
        var personlink = '';
        if(this.data.usr){
            fullname = this.data.usr.profile.firstname + " " + this.data.usr.profile.lastname;
            personlink = '/user/' + (this.data.usr.profile.firstname + this.data.usr.profile.lastname).toLowerCase();
        }
        return (
            <a href={personlink} className={this.props.klass}>{fullname}</a>
        )
    }
});x
