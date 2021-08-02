/*
* 提交时验证是否合规
* 用户名验证：字数
* Email验证：h5自动
* 密码验证：两次相同*/

const userName = document.getElementById("username"),
    email = document.getElementById("email"),
    psw = document.getElementById("psw"),
    confirm = document.getElementById("confirm"),
    submit = document.getElementById("submit");

let confFlag = 4; //验证标签，每当一个验证没有问题，就减掉1

function confUsername(){
    const ele =  document.getElementsByClassName("item")[0].getElementsByTagName("small")[0];
   const text = userName.value;
   if(text.length>2 && text.length<=10){    //进行验证
      ele.className = "success-text";       //正确则不显示错误信息
      userName.className = "success-input"; //正确的边框颜色为绿色
       confFlag--;
   }else{ele.className = "error-text";
        userName.className = "error-input";
   }
}

function confEmail(){
    const ele =  document.getElementsByClassName("item")[1].getElementsByTagName("small")[0];
    const text = email.value;
    const RE =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = RE.test(text);
    if(res){
        ele.className = "success-text";
        email.className ="success-input";
        confFlag--;
    }else{ele.className = "error-text";
        email.className = "error-input"}
}

function confPsw(){
    const ele =  document.getElementsByClassName("item")[2].getElementsByTagName("small")[0];
    const text = psw.value;
    if(text.length>=8 && text.length<=16){
        ele.className = "success-text";
        psw.className ="success-input";
        confFlag--;
    }else{ele.className = "error-text";
        psw.className = "error-input"}
}

function confEqual(){
    const ele =  document.getElementsByClassName("item")[3].getElementsByTagName("small")[0];
    const text = confirm.value;
    if(psw.value === text){
        ele.className = "success-text";
        confirm.className ="success-input";
        confFlag--;
    }else{ele.className = "error-text";
        confirm.className = "error-input"}
}
function conAll(event){

    confUsername();
    confEmail();
    confPsw();
    confEqual();
    if(confFlag) {
        event.preventDefault();
    }
}

submit.addEventListener("click",conAll)

