const express = require('express')

require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const port = process.env.PORT

// express app
const app = express();

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  const blogs = [
    { title: 'Pastel de zanahoria', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Zhulien de champiñones', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Shakshuka', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { titulo: 'Inicio', comidas:comidas });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/number', (req, res) => {
  res.render('numeros', {})
})

app.get('/nov', (req, res) => {
  res.render('novedades', {})
})



app.use(express.json())
app.use('/api', taskRouter)
app.use('/api', userRouter)



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

