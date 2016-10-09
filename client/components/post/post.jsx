Post = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        return {
            currentUser:Meteor.userId()
        }
    },
    likePost(e){
        e.preventDefault();
        var postid = this.props.post._id;
        Meteor.call('likePost',this.data.currentUser,postid); //Send current user's ID and post's ID to server function
    },
    renderLikes(){
        var likes = '';
        var likesub = 0;
        var currentUser = String(Meteor.userId());
        if(this.props.post.likes.indexOf(currentUser) !== -1){
            likes = 'You and ';
            likesub = 1;
        }
        switch (this.props.post.likes.length - likesub) {
            case 0:
                return likesub > 0 ? 'You like this':'';
            case 1:
                return likesub > 0 ? likes + '1 other person like this':'1 person likes this';
                break;
            default:
                return likes + (this.props.post.likes.length - likesub) + ' people like this';
                break;
        }
    },
    render(){
        var dimage = '';

        if(this.props.post.imageurl){ //if an imageurl was provided to this component
            dimage = (
                <div>
                    <div className="panel-thumbnail">
                        {/*<img src="http://placehold.it/150x150" alt="" className="img-responsive postimage img-thumbnail"/>*/}
                        <img src={this.props.post.imageurl} alt="" className="img-responsive postimage img-thumbnail"/>
                    </div>
                </div>
            );
        }

        return (
            <div className="col-sm-12">
                <div className="panel panel-white post panel-shadow">
                    <div className="post-heading">
                        <div className="pull-left image">
                            <Avatar klass="img-circle avatar" user={this.props.post.user._id}/>
                            {/*<img src="http://placehold.it/48x48" alt="" className="img-circle"/>*/}
                        </div>
                        <div className="pull-left meta">
                            <div className="title h5">
                                <b>User Name</b>&nbsp;
                                made a post.
                            </div>
                            <div className="text-muted time">An hour ago</div>
                        </div>
                    </div>
                    <div className="col-md-12 post-description">
                        {/*<h3>Hello World!</h3>*/}
                        <h3>{this.props.post.message}</h3>
                        <br/>
                    </div>
                    <div className="col-md-12">
                        {dimage}
                        <br/>
                    </div>
                    <div className="actions">
                        <a onClick={this.likePost} href="#" className="btn btn-default stat-item">
                            <i className="fa fa-thumbs-up icon"></i>
                        </a>&nbsp;
                        {this.renderLikes(this.props.post.likes.length)}
                        <div className="post-footer">
                            Comments List
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
