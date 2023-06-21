require('dotenv').config()

const mysql = require('mysql2')


function Suggestions() {

    const connection = mysql.createConnection(process.env.DATABASE_URL)

    console.log('Connected to PlanetScale!')


    connection.query(

  "SELECT * FROM `inventory`",

  function(err, results, fields) {

    console.log(err);

    console.log(results); // results contains rows returned by server

    console.log(fields); // fields contains extra meta data about results, if available

  }

);


    connection.end()

    const numOutfits = 1;

    const theOutfits = [...Array(numOutfits)].map((idx) => (<Outfit />));

    return (<>
        <main>
        <title>suggestions</title>
        <p>barbanera shirt</p>
        {theOutfits}

        </main>
            </>);

}


function Outfit() {

    const theTop = Math.random() > 0.5 ? "/images/blackShoes.jpeg" : "/images/beigeShoes.jpeg" ;

    return (<>
        <img src={theTop} />
        </>);

}

export default Suggestions ;