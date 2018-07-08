const app = require('express')();

app.get('/', (req, res) => {
  res.send('user');
});

app.listen(80, () => console.log('Server running'));
