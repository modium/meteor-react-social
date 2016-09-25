Post = React.createClass({
    render(){
        var dimage = '';
        dimage = (
            <div>
                <div className="panel-thumbnail">
                    <img src="http://placehold.it/150x150" alt="" className="img-responsive postimage img-thumbnail"/>
                </div>
            </div>
        )

        return (
            <div className="col-sm-12">
                <div className="panel panel-white post panel-shadow">
                    <div className="post-heading">
                        <div className="pull-left image">
                            {/*Avatar*/}
                            <img src="http://placehold.it/48x48" alt="" className="img-circle"/>
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
                        <h3>Hello World!</h3>
                        <br/>
                    </div>
                    <div className="col-md-12">
                        {dimage}
                        <br/>
                    </div>
                    <div className="actions">
                        <a href="#" className="btn btn-default stat-item">
                            <i className="fa fa-thumbs-up icon"></i>
                        </a>&nbsp;
                        10 Likes
                        <div className="post-footer">
                            Comments List
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
