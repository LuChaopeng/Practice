/*
* 提交时验证是否合规
* 用户名验证：字数
* Email验证：h5自动
* 密码验证：两次相同*/

const userName = document.getElementById("username"),
    email = document.getElementById("email"),
    psw = document.getElementById("psw"),
    confirm = document.getElementById("confirm");
function confUsername(){
   const text = userName.value;
   if(text.length>2 && text.length<=10){return true;}
}


function conAll(event){
    if(confUsername()){
        userName.class = ".success-input";
    }else{
        userName.class = ".error-input";
        event.preventDefault();
    }
}
confirm.addEventListener("click",conAll)
console.log("fds");
