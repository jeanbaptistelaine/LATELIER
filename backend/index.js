const path = require('path')

//express
const express = require('express')
const app = express()

const playersRouter = require('./routes/player')

const PORT = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, '../frontend/build')))

//API Routes
app.use('/api/v1', playersRouter)

//Other routes (frontend)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
})

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
