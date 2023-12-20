require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET - /api/post
app.get('/api/posts', async (req, res) => {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'type19_db',
    });
    const sql = 'SELECT * FROM `posts`';
    const [rows] = await conn.query(sql);
    console.log('rows ===', rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
    console.log('klaida get posts');
    res.status(500).json({
      msg: 'somthing went wrong',
    });
  }
});

// app.listen(PORT);
app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
