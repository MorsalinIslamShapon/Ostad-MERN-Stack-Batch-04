

// 1.It should use the http module to create an HTTP server.
// start code----

/*
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('This is HTTP Server!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//2.It should listen on port 3000.
// start code----

/*
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello, World!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//3.It should log a message to the console when it starts listening on port 3000.
// start code----

/*
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello, World!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//4.If you request this url “/” then the response is  “This is Home Page”.
// start code----
/*
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Home Page\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found\n');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//5.If you request this url “/about” then the response is  “This is About Page”.
// start code----
/*
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Home Page\n');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is About Page\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found\n');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//6.If you request this url “/contact” then the response  is “This is Contact Page”.
// start code----
/*
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Home Page\n');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is About Page\n');
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Contact Page\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found\n');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//7.If you request this url “/file-write” then fs.writeFile() method will create a file “demo.txt” and write the text “hello world” in this file
// start code----
/*
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Home Page\n');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is About Page\n');
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Contact Page\n');
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('Error writing to file\n');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('File created and text written\n');
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found\n');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});
*/


//8.And of course you need to end the server response using res.end()
// start code----
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Home Page\n');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is About Page\n');
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is Contact Page\n');
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('Error writing to file\n');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('File created and text written\n');
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found\n');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`surver run successfull! ${PORT}`);
});



