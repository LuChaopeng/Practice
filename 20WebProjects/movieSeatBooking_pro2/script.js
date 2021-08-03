let select = document.getElementById("pick-movie");
const allSeats = document.getElementsByClassName("seats")[0].getElementsByClassName("seat");
let seatsStatus = [];   //座位选择状态数组
const countEle = document.getElementById("count"),
    totalPriceEle = document.getElementById("total-price");
let count = 0, price = 0;

for(let i = 0;i<48;i++){
    seatsStatus[i] = true;      //默认true为未被选择
}

function totalPrice(){
    switch (select.value){
        case "avengers":{
            price = 10*count;
            break;
        }
        case "joker":{
            price = 12*count;
            break;
        }
        case "toy-story":{
            price = 8*count;
            break;
        }
        case "the-lion-king":{
            price = 9*count;
            break;
        }
    }
    totalPriceEle.innerText = price.toString();
}

/*
下面本来想用for of，但不知道怎么跟状态数组对应起来
for (const seat of allSeats) {      //给seat添加事件
 seat.addEventListener("click",()=>{
     if( ){    } })
}*/
//给每个座位设置监听事件
for(let i = 0;i<allSeats.length;i++){
    allSeats[i].addEventListener("click",()=>{
        if(seatsStatus[i]){
            count++;                                //票数+1
            countEle.innerText = count.toString();  //页面显示
            totalPrice();
            totalPriceEle.innerText = price.toString();
            allSeats[i].className = allSeats[i].className.slice(0,4) + " sel-seat";  //更改颜色
            seatsStatus[i] = !seatsStatus[i];       //更改状态
        }else{
            count--;
            countEle.innerText = count.toString();
            totalPrice();
            totalPriceEle.innerText = price.toString();
        /*    allSeats[i].className -=" .sel-seat";   */
            allSeats[i].className = allSeats[i].className.slice(0,4) + " na-seat";  //更改颜色
            seatsStatus[i] = !seatsStatus[i];       //更改状态
        }
    })
}
/*给select添加change事件*/
select.addEventListener("change",totalPrice);



