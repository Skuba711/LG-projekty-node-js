
const express = require('express')
const app = express()
const port = 3000
let i = 12
let j = 13

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    console.log(request.path)
    
    response.send({
        "name":"jan"
    })
})

app.get('/strona2', (request, response) => {
  response.send()
})

app.get('/status/:id', (request, response) => {
    console.log(request.params)
    console.log(request.query)
    response.send('TEKST')

  })

  app.get('/formularz', (request, response) =>{
    
    response.send(
        `
        <form method="POST" action="/formularz">
            <input type="text" name="name"/>
            <input type="text" name="surname"/>
            <button type="submit">wyślij</button>
        </form>`
        
    )
    
  })
  app.post('/formularz', (request, response) =>{
    
    
    console.log(request.body)
    
    response.send(request.body.name+" "+request.body.surname)
    
  })
  app.get('/mysite', (request,response) =>{
    response.render("pages/test")
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

