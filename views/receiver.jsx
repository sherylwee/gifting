var React = require('react');
var Default = require('./default');

class Receiver extends React.Component {

    render() {

         let ebay = this.props.ebay.map( (item, index) => { return (



              <div id="boxcolumn"><img src={item.galleryURL}/> <br/><br/><p>{item.title}</p></div>




            );
        });


        //for each item in ebay obj, map to some html, then return to a variable.
        //afterwards, call variable in html code below
        return(
                <html>
                    <head>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                        <link rel="stylesheet" type="text/css" href="/style.css"/>
                        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                    </head>
                        <Default>
                            <div className="spacing">



                            <div className="row">
                              <div className="col-sm-8">
                                <div className="header pt-3">{this.props.receivers.name}</div>
                                    <p id="details">
                                    {this.props.receivers.category} <br/>
                                    <strong>Likes:</strong> {this.props.receivers.likes} <br/>
                                    <strong>By:</strong> {this.props.receivers.deadline}
                                    </p>
                              </div>
                              <div className="col-md-3 ml-md-auto spacingright" id="aligntop">

                                <form action={"/" + this.props.receivers.name + "/?_method=DELETE"} method="POST">
                                    <button className="btn submitbutton float-right">Delete</button>
                                </form>

                                    <button className="btn submitbutton float-right spacingright" type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>



                                        <div className="modal fade bd-example-modal-sm" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Edit {this.props.receivers.name}</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                </button>
                                              </div>
                                              <div className="modal-body">
                                                <form action={"/" + this.props.receivers.name + "?_method=PUT"} method="POST">

                                                  <div className="form-group">
                                                    <input type="text" className="form-control form-control-sm" name="category" placeholder="Occasion (e.g. Birthday, Wedding)" required/> <br/>

                                                    <input type="text" className="form-control form-control-sm" name="likes" placeholder="Likes" required/> <br/>

                                                    <input type="text" className="form-control form-control-sm" name="deadline" placeholder="Due date (YYYY-MM-DD)" required/>


                                                  </div>


                                              <div className="modal-footer">
                                                <button type="button" class="btn btn-secondary" id="button" data-dismiss="modal">Close</button>
                                                <input name="submit" type="submit" className="btn submitbutton"/>

                                              </div>

                                              </form>

                                              </div>
                                            </div>
                                          </div>
                                        </div>











                              </div>
                            </div>



                                <br/>


                                <div id="search">

                                    <p className="px-5 pt-4">These are our top 9 results:</p>
                                    {ebay}
                                </div>
                            </div>
                        </Default>
                    <body>
                    </body>
                </html>
            )
    }
}

module.exports = Receiver;