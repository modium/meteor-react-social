Statusform = React.createClass({
    getInitialState(){
        return {
            image:'',
            filename:''
        }
    },
    resetFields(){
        ReactDOM.findDOMNode(this.refs.sharing).value = '';
        ReactDOM.findDOMNode(this.refs.imageid).value = '';
        ReactDOM.findDOMNode(this.refs.sharing).focus();
    },
    submitForm(e){
        e.preventDefault();
        var message = this.refs.sharing.value; //get the value of ref="sharing"
        var imageid = this.refs.imageid.value;
        if(imageid){
            var image = Images.findOne({_id:imageid});
            var imageurl = image.url();
        }
        Meteor.call('Posts.insert',message,imageid,imageurl,function(err){
            if(err){
                console.log(err);
            }
        });
        this.setState({image:'',filename:''}); //reset image and filename
        this.resetFields();
    },
    uploadFile(e){
        e.preventDefault();
        var that = this;
        FS.Utility.eachFile(e,function(file){
            Images.insert(file,function(err,fileObj){
                that.setState({image:fileObj._id,filename:fileObj.data.blob.name}); //loop through if user uploads multiple files
            });
        });
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-content">
                    <div className="panel-heading">
                        Update Status
                    </div>
                    <form onSubmit={this.submitForm} className="form center-block">
                        <input type="hidden" ref="imageid" value={this.state.image}/>
                        <div className="panel-body">
                            <div className="form-group">
                                <textarea placeholder="What do you want to share" className="form-control input-lg" ref="sharing" id="sharing">

                                </textarea>
                                <h3>{this.state.filename||''}</h3>
                            </div>
                            <div className="panel-footer">
                                <div>
                                    <ul className="pull-left list-inline">
                                        <li><input onChange={this.uploadFile} ref="file" type="file" className="filepicker" id="file"/></li>
                                        <button className="btn btn-primary btn-sm postbutton">Post</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});
