const express= require('express')
const app = express()
const morgan = require('morgan')

app.set('view engine','ejs')

app.listen(3000)

//________________ static dosyalar için_____________
app.use(express.static('public'))

//_________________________ MiddleWare_______________
app.use(morgan('dev'))

//____________________________________________________ GET______________________________
app.get('/',(req,res)=> {

      res.render('index', {title:'Anasayfa'})
})

app.get('/about',(req,res)=> {

      res.render('about',{title:'Hakkımda Sayfası'})
})


app.get('/about-us',(req,res) => { //__________________about-us olunca yönlendir_______

      res.redirect('/about')
})


app.get('/login',(req,res)=> {
      res.render('login',{title:'Login Form'})
})



//_________________middleware (404) git______________
app.use((req,res)=> {
      res.status(404).render('404',{title:'404 Sayfa Bulunamadı'})
})