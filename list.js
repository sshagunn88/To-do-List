let input = document.getElementById("ipt");
let text = document.querySelector(".text");

function ADD(){
    if(input.value == ""){
        alert("Please enter task");
    }else{
        let newelement = document.createElement("ul");
        newelement.innerHTML=`${input.value} <i class="fa-regular fa-circle-xmark"></i>`; 
        text.appendChild(newelement);
        input.value="";

        newelement.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newelement.remove();
        }
        //this  `${}` is used to add value in ul that means unordered list
    }
}
