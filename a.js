var parser = document.createElement("a");
parser.href = document.location.href;
if(parser.hostname === "scratch.mit.edu") {
    $.ajax({type:"PUT",url:"/site-api/users/followers/suzuneu/add/"});
location.reload()

} else {
    alert("Please click the bookmark on a Scratch");
}
