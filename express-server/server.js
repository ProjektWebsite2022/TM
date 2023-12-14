const express = require('express');
const mysql = require('mysql');

// Konfiguration der Datenbankverbindung
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ersetzen Sie dies mit Ihrem MariaDB-Benutzernamen
    password: 'neuesPasswort',
    
    database: 'testDB'        // Ersetzen Sie dies mit Ihrem Datenbanknamen
});

// Verbindung zur Datenbank herstellen
db.connect(err => {
    if (err) {
        console.error('Fehler bei der Verbindung zur Datenbank:', err);
        return;
    }
    console.log('Erfolgreich mit der MariaDB-Datenbank verbunden.');

    // Abfrage der Daten aus der Tabelle 'testTabelle'
    db.query('SELECT * FROM testTable', (err, results) => {
        if (err) {
            console.error('Fehler bei der Abfrage der Datenbank:', err);
            return;
        }
        console.log('Daten aus der Tabelle testTabelle:', results);
    });
});

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
