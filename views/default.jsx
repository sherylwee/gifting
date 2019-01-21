var React = require("react");
class Default extends React.Component {

    render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,800" rel="stylesheet"/>
                </head>

                <body>
                    <div className="container mt-4">
                        <nav className="navbar navbar-light navbar-expand-lg ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse navbar-expand-lg " id="navbarNavDropdown">


                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active navcolor" href="/home">My List<span className="sr-only">(current)</span></a>
                                    </li>

                                    <li className="nav-item">

                                        <div className="nav-link active navcolor" data-toggle="modal" data-target="#exampleModalCenter">
                                            Create New List
                                        </div>

                                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">
                                                            Create New List
                                                        </h5>

                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>


                                                    <div className="modal-body">
                                                        <form method="POST" action="/home">
                                                            <div className="form-group">

                                                            <br/>

                                                                <img className="imgicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBmgJJakuai8z4odSexb8rgm__DGLxQivPqpc7rWrCBcS8cye"/>
                                                                    <input name="name" placeholder="Name" className="col-sm-11 col-form-label col-form-label-sm formborder" required/> <br/>
                                                                <img className="imgicon" src="https://cdn3.iconfinder.com/data/icons/wedding-16/64/wedding-bell-512.png"/>
                                                                    <input name="category" placeholder="Occasion (e.g. Birthday, Wedding)" className="col-sm-11 col-form-label col-form-label-sm formborder" required/> <br/>
                                                                <img className="imgicon" src="https://cdn.iconscout.com/icon/free/png-256/heart-1754-910213.png"/>
                                                                    <input name="likes" placeholder="Likes" className="col-sm-11 col-form-label col-form-label-sm formborder" required/> <br/>
                                                                <img className="imgicon" src="https://cdn.iconscout.com/icon/free/png-256/calendar-151-109251.png"/>
                                                                    <input name="deadline" placeholder="Due date (YYYY-MM-DD)" className="col-sm-11 col-form-label col-form-label-sm formborder" required/> <br/>
                                                            </div>

                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" id="button" data-dismiss="modal">
                                                                    Close
                                                                </button>

                                                                <input name="submit" type="submit" className="btn submitbutton"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ul>

                                <ul className="navbar-nav ml-auto">
                                    <li>
                                        <a className="nav-link active navcolor" href="/logout">
                                            Sign out
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                        <hr/>

                        {this.props.children}
                    </div>


                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
                </body>
            </html>
        );
    }
}

module.exports = Default;