var React = require('react');
class Create extends React.Component {

    render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet"/>
                </head>

                <body>
                    <div className="container spacingtop">
                        <div className="row">
                            <div className="col">
                                <img className="size" src="https://i.gifer.com/D9u.gif"/>
                            </div>


                            <div className="col">
                                <form action="/new" method="POST">

                                    <div className="form-group w-50">
                                        <label for="formGroupExampleInput2">Register</label>
                                            <input name="regname" placeholder="Name" className="form-control form-control-sm" required/>
                                            <input name="regpass" type="password" className="form-control form-control-sm" aria-describedby="passwordHelpBlock" placeholder="Password" required/>
                                        <label>

                                            <small id="passwordHelpInline" className="text-muted">
                                                Must be 8-20 characters long.
                                            </small>
                                        </label>

                                        <br/>

                                        <input name="submit" type="submit" className="btn submitbutton"/>

                                        <br/><br/>

                                            {(this.props.newAcc) ? (<small><div class="alert alert-success alert-dismissible fade show" role="alert">
                                                New account created! <br/> <strong>Sign in now!</strong>

                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>

                                            </div></small>) : null
                                            }

                                    </div>

                                </form>


                                <form action="/" method="POST">

                                    <div className="form-group w-50">
                                        <label for="formGroupExampleInput2">Sign in</label>
                                        <input name="name" placeholder="Name" className="form-control form-control-sm" required/>
                                        <input name="password" type="password" id="inputPassword5" className="form-control form-control-sm" aria-describedby="passwordHelpBlock" placeholder="Password" required/>

                                        <br/>

                                            {(this.props.warning) ? (<small><div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                Wrong name or password!

                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>

                                            </div></small>) : null
                                            }


                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                             <label className="form-check-label" htmlFor="autoSizingCheck">
                                                <small>Remember me</small>
                                             </label>
                                        </div>
                                            <input name="submit" type="submit" className="btn submitbutton"/>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>




                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

                    </body>
            </html>
        )
    }
}

module.exports = Create;