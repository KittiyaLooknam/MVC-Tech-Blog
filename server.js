const path = require( 'path' );
const express = require('express');
const rountes  = require("./controllers");
const sequelize = require ('./config/connection') ;
const helpers = require( './utils/helpers' ) ;
const  exphbs = require ('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.DB_SECRET,
    cookie:{},
    resave: false,
    saveUninitalized: true,
    store: new SequelizeStore({
        db: sequelize,
        checkEpxirationerval: 1000*60 *10, // will check ever 10 minutes
        expriation: 1000 * 60 *  30 // the session will last for  30 min
      }),
};

// turn on routes
const app= express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars');

app.use(session(sess));

// static content
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// home page route
app.get(rountes);

sequelize.sync();

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
 });

