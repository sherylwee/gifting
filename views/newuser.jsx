var React = require('react');
var Default = require('./default');

class NewUser extends React.Component {
    render() {
        return(
                <html>
                    <head>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                        <link rel="stylesheet" type="text/css" href="/style.css"/>
                        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                    </head>
                        <Default>



                        </Default>
                    <body>
                    </body>
                </html>
            )
    }
}

module.exports = NewUser;