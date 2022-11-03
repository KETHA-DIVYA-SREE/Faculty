const express = require(`express`);
const dotenv = require(`dotenv`);
const connectDB = require("./config/db");
const cors = require( `cors` );
const bodyParser = require("body-parser");

dotenv.config();
const PORT = process.env.PORT || 3000;

const studentRoutes = require( `./routes/studentRoutes` );
const attendanceRoutes = require( `./routes/attendanceRoutes` );

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
// app.use(cors())
app.use( express.json() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );

connectDB();

app.get('/', (req, res) => {
    res.send("Hello there");
})

app.use( '/api/student', studentRoutes );
app.use( '/api/attendance', attendanceRoutes );

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
})