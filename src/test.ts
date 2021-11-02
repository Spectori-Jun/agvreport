// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'
import pathName from 'path'
const index = require('./routes/index')
const report = require('./routes/report')

const app = express()
const PORT: number = 3000;
const publicPath = express.static(pathName.join(__dirname, '/public'))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use('/public', publicPath)

app.get('/', index)
app.get('/report', report)

app.use('/report', (res: any, req: any) => {
  req.send('report.ejs')
})

app.listen(PORT, () => {
  console.log('connected')
})