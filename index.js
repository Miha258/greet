const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'static'))
app.use(express.static(path.resolve(__dirname, 'static')))
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`)
})