const worker=new Worker("sum-col-worker.js")

const sumbutton=document.querySelector("#sumbutton")
const colbutton=document.querySelector("#colbutton")

sumbutton.addEventListener("click",(event)=>{worker.postMessage("Hello")});
worker.onmessage=function(message){
    console.log(message)
    alert("sum is ="+message.data);
}

colbutton.addEventListener("click",event=>{
    if(document.body.style.background!=="green")
        document.body.style.background="green"
    else
        document.body.style.background="blue"
});