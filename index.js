const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"25491944974","first":100,"after":null}');
    const text = await response.text();
    res.send(text);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
