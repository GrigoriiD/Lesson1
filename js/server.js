const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const index = req.url === '/css/style.css'
        ?fs.readFileSync('../css/style.css')
        :fs.readFileSync('../index.html')
    res.end(index)
})

server.listen(3000)
console.log('Server started');