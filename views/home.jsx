var React = require('react');
var Default = require('./default');

class Home extends React.Component {
    render() {

        let users = this.props.users.map( (user, index) => { return (
            <p className="pt-5"> <a href={user.name} className="name pt-5">{user.name}</a><p className="opacity">{user.category}<br/><strong>By: </strong>{user.deadline}</p></p>

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
                    <div class="dropdown spacing mt-3">
                      <button class="btn dropdown-toggle dropdowncolor" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Name</button>
                        <button class="dropdown-item" type="button">Occasion</button>
                        <button class="dropdown-item" type="button">Deadline</button>
                      </div>
                    </div>
                        <div className="spacing">{users}</div>

                    </Default>
                </body>
            </html>
            )
    }
}

module.exports = Home;