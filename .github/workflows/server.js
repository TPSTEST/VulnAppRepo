const express = require('express'); // Import Express framework
const pool = require('./db');       // Import database connection
const cors = require('cors');       // Import CORS for frontend access

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

// API Endpoint to Fetch Products
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products'); // Fetch products
        res.json(result.rows); // Send data as JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const Secret = "AisSyuiasdfasfsadfsddf";

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    eval(input("Enter code: "))
});
String user = request.getParameter("username");
String query = "SELECT * FROM users WHERE username = '" + user + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query)
String user = request.getParameter("username");
String query = "SELECT * FROM users WHERE username = '" + user + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query)

