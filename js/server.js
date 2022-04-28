const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const index = req.url
    let a
        switch (index) {
        case '/css/style.css':
           a =  fs.readFileSync('../css/style.css')
            break;
        case '/':
           a =  fs.readFileSync('../index.html')
            break;
        case '/js/script.js':
           a =  fs.readFileSync('script.js')
            break;
        case '/img/img1.jpg':
           a =  fs.readFileSync('../img/img1.jpg')
            break;
        case '/img/img2.jpg':
            a =  fs.readFileSync('../img/img2.jpg')
            break;
        case '/img/img3.jpg':
            a =  fs.readFileSync('../img/img3.jpg')
            break;
        default:
            break;
    }
    
    res.end(a)
})

server.listen(3000)
console.log('Server started');