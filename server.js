const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/archives/:pageNum', (req, res) => {
    const queryParams = { pageNum: req.params.pageNum }
    app.render(req, res, '/archives', queryParams)
  })

  server.get('/tag/:tagName/:pageNum', (req, res) => {
    const queryParams = { tagName: req.params.tagName, pageNum: req.params.pageNum }
    app.render(req, res, '/tagDetail', queryParams)
  })

  server.get('/article/:link', (req, res) => {
    const queryParams = { link: req.params.link }
    app.render(req, res, '/article', queryParams)
  })

  server.get('/page/:pageNum', (req, res) => {
    const queryParams = { pageNum: req.params.pageNum }
    app.render(req, res, '/index', queryParams)
  })

  server.get('/categories/:categoryName/:pageNum', (req, res) => {
    const queryParams = { 
      categoryName: req.params.categoryName,
      pageNum: req.params.pageNum
    }
    app.render(req, res, '/categoriesDetail', queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  process.exit(1)
})
