require('http-proxy')
.createServer(3000, 'localhost')
.listen(4000, function () {
  console.log("listening on port 4000, forwarding to port 3000");
});
