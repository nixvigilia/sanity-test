const express = require('express');
const cors = require('cors');
const sanityClient = require('@sanity/client');

const app = express();
const port = 3001;

app.use(cors());

const sanity = sanityClient({
    projectId: '1nvp6nsk',
    dataset: 'production',
    useCdn: false,
    token: 'your-api-token',
  });

app.get('/api/sanity-data', async (req, res) => {
  try {
    const query = `*[_type == 'your-data-type']`;
    const result = await sanity.fetch(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Sanity.io' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
