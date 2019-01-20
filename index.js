const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const pg = require('pg');
const sha256 = require('js-sha256');
// const db = require('./db');

const configs = {
  user: 'Sheryl',
  host: '127.0.0.1',
  database: 'project2',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


const app = express();
const eBay = require('ebay-node-api');


// module.exports.abc = eBay;

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname+'/public/'));

const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

//Routes @ routes.js
// require('./routes')(app, db)

app.get('/', (req, res) => {
    pool.query((err, result) => {
        res.render("login")
    });
});

  app.post('/', (req, res) => {

      let text = "SELECT * FROM users WHERE name=$1";
      const values = [req.body.name];

      pool.query(text, values, (err, result) => {
          console.log(result.rows);

          // if the user doesnt exist
          if ( result.rows.length === 0 ) {
              console.log("Nope");
              res.redirect('/');
          }
          else {
              console.log("Yeh");

              const user = result.rows[0];
              let password = user.password;

              if ( password == sha256(req.body.password) ) {
                  //password is correct
                  console.log('PW yeh');
                  res.cookie('loggedin', 'true');
                  res.cookie('name', req.body.name);
                  res.redirect('/home');
              }
              else {
                  // password is incorrect
                  console.log('PW nop');
                  console.log(sha256(password))
                  res.redirect('/')
              }
          }
      })
  });

  app.get('/logout', (req, res) => {

    res.clearCookie('loggedin');
    res.clearCookie('name');
    res.redirect('/')
  })


  app.post('/new', (req, res) => {

      let text = "INSERT INTO users (name, password) VALUES ($1, $2)";
      const values = [req.body.regname, sha256(req.body.regpass)];

      // execute query
      pool.query(text, values, (error, result) => {
          // res.send("login success, pls sign in");
          res.cookie('loggedIn', true);
          res.cookie('name', req.body.name);
          res.redirect('/');
      });
  });


app.get('/home', (req, res) => {

    let text = "SELECT * FROM receivers ORDER BY deadline ASC";

    pool.query(text, (err, result) => {

        // if (req.body.sortlist === req.body.sortname) {
        //     let text = "SELECT * FROM receivers ORDER BY name ASC";
        // }
        // else {

        res.render("home", {users: result.rows})
        // }
    });
});

app.get('/:name', (req, res) => {

    let text = "SELECT * FROM receivers WHERE name=$1";
    const values = [req.params.name];

    let ebay = new eBay({
        clientID: "SherylWe-sherylwe-PRD-f392af54d-65578b46",
        limit: 9
    });

    pool.query(text, values, (err, result) => {
    //    console.log(result,"my db")

        ebay.findItemsByKeywords("fashion").then(data => {
            if (data.length>0){
               // console.log(data[0].searchResult[0].item)

                let ebayResult = data[0].searchResult[0].item;

              //  console.log(typeof data, data.searchResult)
              //  console.log(data); // fetches top 6 results in form of JSON.
                    res.render("receiver", {receivers: result.rows[0], ebay: ebayResult});
                    // console.log(data[0].searchResult[0].item[0].condition)
            }
            })
    });


});

app.post('/home', (req, res) => {
    let text = "INSERT INTO receivers (name, category, likes, deadline) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [req.body.name, req.body.category, req.body.likes, req.body.deadline];

      // execute query
      pool.query(text, values, (err, result) => {
          // res.redirect('/home');
          console.log(err)
          console.log(values)
          res.redirect('/home')
          // res.render("home", {users: result.rows});
      });
});


app.put('/:name', (req, res) => {
    let text = "UPDATE receivers SET category=$2, likes=$3, deadline=$4 WHERE name = $1";
    const values = [req.params.name, req.body.category, req.body.likes, req.body.deadline];

    pool.query(text, values, (err, result) => {
        res.redirect('/home');
    });
});

app.delete('/:name', (req, res) => {
    let text = "DELETE from receivers WHERE name = $1";
    const values = [req.params.name];

    pool.query(text, values, (err, result) => {
        res.redirect('/home');
    });
});


const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

// let onClose = function() {
//     server.close(() => {
//         console.log('Process terminated')
//         db.pool.end( () => console.log('Shut down db connection pool'));
//     })
// };

// process.on('SIGTERM', onClose);
// process.on('SIGINT', onClose);