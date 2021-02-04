const text = "I Want to be Best Devloper!!  A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Go or Java in the server, and http for communications between client and server. A web content management system is often used to develop and maintain web applications.";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);
    index++;

    if(index > text.length) {
        index = 0;
        
    }
}
setInterval(writeText, 100);