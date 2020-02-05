var messageEle = document.querySelector(".message");
var wrapperEle = document.querySelector(".wrapper");

 var array = [
   {message:"HULLO", color:"red"}, 
   {message:"Hi there!", color:"blue"},
   {message:"Sup homie", color:"green"}
 ];

for(var i = 0; i < array.length; i++){
  var ele = document.createElement("div");
  ele.style.height="100px";
  ele.style.width="300px";
  ele.style.backgroundColor = array[i].color;
  
   const mess = array[i].message;
  ele.addEventListener("click", function(){
    messageEle.innerHTML = mess;
  });
  
  wrapperEle.appendChild(ele);
}