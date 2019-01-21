var React = require('react');
var Default = require('./default');

class Home extends React.Component {

    render() {
        let users = this.props.users.map( (user, index) => { return (
            <a href={"/" + user.name + "/" + user.likes} className="column pl-5 py-4 spacing"><div className="name">{user.name}</div><br/>
                <img id ="imgsize" src="https://media.giphy.com/media/8cARKvZXq73sOZBdrw/giphy.gif"/>
                <p className="opacity">{user.category}<br/><strong>By: </strong>{user.deadline}</p>
            </a>
            );
        });

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                </head>

                <body>
                    <Default>
                        <div class="row justify-content-between pt-3">
                            <div class="col-4 header spacing">
                                My List
                            </div>
                        </div>

                            {users}

                    </Default>
                </body>
            </html>
        )
    }
}

module.exports = Home;