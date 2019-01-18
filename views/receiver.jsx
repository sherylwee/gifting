var React = require('react');
var Default = require('./default');

class Receiver extends React.Component {

    render() {

         let ebay = this.props.ebay.map( (item, index) => { return (
            <p className="pt-5"><img src={item.galleryURL}/>{item.title}</p>

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



                            <div class="row">
                              <div class="col-sm-8">
                                <div className="name pt-4">{this.props.receivers.name}</div>
                                    <p className="opacity">
                                    {this.props.receivers.category} <br/>
                                    <strong>Likes:</strong> {this.props.receivers.likes} <br/>
                                    <strong>By:</strong> {this.props.receivers.deadline}
                                    </p>
                              </div>
                              <div class="col-md-3 ml-md-auto aligntop spacingright">
                                    <button className="btn submitbutton float-right">Delete</button>
                                    <button className="btn submitbutton float-right spacingright">Edit</button>

                              </div>
                            </div>






                                <div id="search">
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