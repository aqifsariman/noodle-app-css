import createServer from ('http')
import readFile from('fs');

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request url', request.url);

  var filePath = '.' + request.url;

 readFile(filePath, (error, content) => {
    response.writeHead(200);
    response.end(content, 'utf-8');
  });
};

createServer(whenIncomingRequest).listen(PORT)

