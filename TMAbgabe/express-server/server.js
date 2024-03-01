
const mysql = require('mysql');

const express = require('express');
const app = express();
const cors = require('cors');



// Define the port to listen on
const PORT = 3000;


// Create Express app

app.use(express.json());

// Aktivieren Sie CORS für alle Anfragen
app.use(cors());

// Oder konfigurieren Sie CORS für spezifische Ursprünge
app.use(cors({
  origin: ['http://168.119.224.182:4200','http://168.119.224.182']
}));



// Database configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MariaDB username
    password: '', // Replace with your MariaDB password
    database: 'TimosDB' // Replace with your database name
});

// Establish database connection
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit if the database connection fails
    }
    console.log('Successfully connected to the MariaDB database.');
});

const port = 3000;

// Bestellung speichern
app.post('/order', (req, res) => {
    console.log('route order genommen');
    const bestellungen = req.body;
    if (bestellungen.length < 1) {
        res.status(400).send('Keine Daten zum Verarbeiten');
        return;
    }

    // Der letzte Eintrag im Array enthält die Kundendaten
    const kundenDaten = bestellungen.pop();

    // Einfügen in die Tabelle 'Kunde'
    db.query('INSERT INTO Kunde SET ?', kundenDaten, (err, kundeResult) => {
        if (err) {
            res.status(500).send('Fehler beim Speichern des Kunden');
            return;
        }

        // Kundennummer des gerade eingefügten Kunden
        const kundennummer = kundeResult.insertId;
	console.log(kundennummer);
        // Verarbeiten jeder Bestellung
        bestellungen.forEach((bestellung, index) => {
            const bestellungDaten = {
                Kundennummer: kundennummer,
                Eventnummer: bestellung.Eventnummer,
                Anzahl: bestellung.Anzahl
            };
	console.log(bestellungDaten);
            // Einfügen in die Tabelle 'BestellungEvent'
            db.query('INSERT INTO Bestellung SET ?', bestellungDaten, (err) => {
                if (err) {
                    res.status(500).send(`Fehler beim Speichern der Bestellung für Eventnummer ${bestellung.Eventnummer}`);
                    return;
                }

                // Antwort, wenn alle Bestellungen verarbeitet wurden
                if (index === bestellungen.length - 1) {
                    res.json({ message: 'Bestellungen erfolgreich gespeichert' });
                }
            });
        });
    });
});


// List of valid table names
const validTables = ['Adresse', 'Kunde', 'Event', 'Bestellung'];

// Function to validate table names
function isValidTable(tableName) {
    return validTables.includes(tableName);
}

// Dynamic CRUD Operations for each table
app.route('/:tableName')
    // GET: Read data from a table
    .get((req, res) => {
        const tableName = req.params.tableName;

        // Validate table name
        if (!isValidTable(tableName)) {
            res.status(400).send('Test Invalid table name');
            return;
        }

        const sql = `SELECT * FROM ??`;
        db.query(sql, [tableName], (err, results) => {
            if (err) {
                res.status(500).send(`Error fetching data from ${tableName}`);
                return;
            }
            res.json(results);
        });
    })
    // POST: Create a new entry in a table
    .post((req, res) => {
        const tableName = req.params.tableName;
        const newData = req.body;

        // Validate table name
        if (!isValidTable(tableName)) {
            res.status(400).send('Test Invalid table name');
            return;
        }

        const sql = `INSERT INTO ?? SET ?`;
        db.query(sql, [tableName, newData], (err, result) => {
            if (err) {
                res.status(500).send(`Error adding data to ${tableName}`);
                return;
            }
            res.json({ message: `Neuer Eintrag zu ${tableName} hinzugefügt` });
        });
    })
    // PUT: Update an existing entry in a table
    .put((req, res) => {
        const tableName = req.params.tableName;
        const updateData = req.body;

        // Validate table name
        if (!isValidTable(tableName)) {
            res.status(400).send('Test Invalid table name');
            return;
        }

        const primaryKey = `${tableName}nummer`; // Assuming primary key follows this pattern
        const sql = `UPDATE ?? SET ? WHERE ?? = ?`;
        db.query(sql, [tableName, updateData, primaryKey, updateData[primaryKey]], (err, result) => {
            if (err) {
                res.status(500).send(`Error updating data in ${tableName}`);
                return;
            }
            res.send(`Entry updated in ${tableName}`);
        });
    })
    // DELETE: Remove an entry from a table
    .delete((req, res) => {
        const tableName = req.params.tableName;
        const primaryKey = `${tableName}nummer`; // Assuming primary key follows this pattern
        const idToDelete = req.body.id;

        // Validate table name
        if (!isValidTable(tableName)) {
            res.status(400).send('Test 5 Invalid table name');
            return;
        }

        const sql = `DELETE FROM ?? WHERE ?? = ?`;
        db.query(sql, [tableName, primaryKey, idToDelete], (err, result) => {
            if (err) {
                res.status(500).send(`Error deleting data from ${tableName}`);
                return;
            }
            res.send(`Entry deleted from ${tableName}`);
        });
    });






// Start the server
app.listen(PORT, '168.119.224.182', function() {
    console.log(`Server is running on port ${PORT}`);
  });
