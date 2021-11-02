// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'
import pathName from 'path'

const app = express()
const PORT: number = 3000;
const publicPath = express.static(pathName.join(__dirname, '/public'))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use('/public', publicPath)

app.use('/', (res: any, req: any) => {
  req.render('index.ejs')
})

app.listen(PORT, () => {
  console.log('connected')
})