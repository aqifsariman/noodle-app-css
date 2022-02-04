import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.argv[2];

const whenIncomingRequest = (request, response) => {
  console.log('request url', request.url);

  var filePath = '.' + request.url;

  readFile(filePath, (error, content) => {
    response.writeHead(200);
    response.end(content, 'utf-8');
  });
};

createServer(whenIncomingRequest).listen(PORT)

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}