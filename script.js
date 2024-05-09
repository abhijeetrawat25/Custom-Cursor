var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})
// main.addEventListener("mousemove",function(dets){
//     // shows detsils on what is happening
//     console.log(dets);
//     console.log(dets.x);
//     console.log(dets.y);
// })