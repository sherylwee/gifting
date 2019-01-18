var React = require('react');
var Default = require('./default');

class Create extends React.Component {
    render() {
        return(
                <html>
                    <head>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                        <link rel="stylesheet" type="text/css" href="/style.css"/>
                        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                    </head>
                        <Default>
                            <form action="/create" method="POST">
                                <div className="form-group spacing">
                                    <input name="name" placeholder="Name" className="form-control"/> <br/>
                                    <input name="category" placeholder="Occasion (e.g. Birthday, Wedding)" className="form-control"/> <br/>
                                    <input name="likes" placeholder="Likes" className="form-control"/> <br/>
                                    <input name="deadline" placeholder="Deadline (YYYY-MM-DD)" className="form-control"/> <br/>


                                    <input name="submit" type="submit" className="btn btn-primary"/>
                                </div>
                            </form>
                        </Default>
                    <body>
                    </body>
                </html>
            )
    }
}

module.exports = Create;