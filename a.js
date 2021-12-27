var parser = document.createElement("a");
parser.href = document.location.href;
if(parser.hostname === "scratch.mit.edu") {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = Main;
    document.getElementsByTagName('head')[0].appendChild(script);

} else {
    alert("Please click the bookmark on a Scratch");
}

function Main() {
    $.ajax({type:"PUT",url:"/site-api/users/followers/suzuneu/add/"});
location.reload()
}
