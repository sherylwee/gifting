var React = require('react');
var Default = require('./default');

class Receiver extends React.Component {

    render() {
        let ebay = this.props.ebay.map( (item, index) => { return (
            <div id="boxcolumn" className="pt-5"><img src={item.galleryURL}/> <br/><br/><p>{item.title}</p><a href={item.viewItemURL}>View on eBay</a></div>
            );
        });

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                </head>

                <body>
                    <Default>
                        <div className="spacing">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="header pt-3">{this.props.receivers.name}</div>
                                        <p id="details">
                                            {this.props.receivers.category}

                                            <br/>

                                            <strong>Likes:</strong> {this.props.receivers.likes}

                                            <br/>

                                            <strong>By:</strong> {this.props.receivers.deadline}
                                        </p>
                                </div>

                                <div className="col-md-3 ml-md-auto spacingright" id="aligntop">
                                    <form action={"/" + this.props.receivers.name + "/?_method=DELETE"} method="POST">
                                        <button className="btn submitbutton float-right">Delete</button>
                                    </form>

                                    <button className="btn submitbutton float-right spacingright" type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                                        Edit
                                    </button>

                                    <div className="modal fade bd-example-modal-sm" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">
                                                        Edit {this.props.receivers.name}
                                                    </h5>

                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="modal-body">
                                                    <form action={"/" + this.props.receivers.name + "?_method=PUT"} method="POST">
                                                        <div className="form-group">
                                                            <img className="editformicon" src="https://cdn3.iconfinder.com/data/icons/wedding-16/64/wedding-bell-512.png"/>
                                                                <input name="category" placeholder="Occasion (e.g. Birthday, Wedding)" className="col-sm-11 col-form-label col-form-label-sm editformborder" required/> <br/>
                                                            <img className="editformicon" src="https://cdn.iconscout.com/icon/free/png-256/heart-1754-910213.png"/>
                                                                <input name="likes" placeholder="Likes" className="col-sm-11 col-form-label col-form-label-sm editformborder" required/> <br/>
                                                            <img className="editformicon" src="https://cdn.iconscout.com/icon/free/png-256/calendar-151-109251.png"/>
                                                                <input name="deadline" placeholder="Due date (YYYY-MM-DD)" className="col-sm-11 col-form-label col-form-label-sm editformborder" required/>
                                                        </div>

                                                        <div className="modal-footer">
                                                            <button type="button" class="btn btn-secondary" id="button" data-dismiss="modal">
                                                                Close
                                                            </button>
                                                            <input name="submit" type="submit" className="btn submitbutton"/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="search" className="mt-1">
                                <p className="px-5 pt-4" id="boxtext">These are our top 15 results:</p>
                                    {ebay}
                            </div>

                        </div>
                    </Default>
                </body>
            </html>
        )
    }
}

module.exports = Receiver;