/*获取货币名*/
let originCurrency = document.getElementById("choose-origin"),
    exCurrency = document.getElementById("choose-after");
/*获取兑换数目*/
let originAmount = document.getElementById("input-amount"),
    exAmount = document.getElementById("output-amount");
/*汇率*/
let rateNode = document.getElementById("rate");
/*swap*/
let swap = document.getElementById("swapbtn");
let rateList = {
    USD:1,
    CNY:6.84,
    AUD:1.36,
    HKD:7.78
}

/*写死的初始化数据，两行垃圾代码*/
rateNode.innerText = `1 ${originCurrency.value} = ${6.84.toString()}${exCurrency.value}`;
exAmount.value = originAmount.value * 6.84;


/*事件发生时更改汇率*/
function updateRate(){
    let rate =  ( rateList[exCurrency.value] / rateList[originCurrency.value] ).toFixed(3);
    rateNode.innerText = `1 ${originCurrency.value} = ${rate.toString()}${exCurrency.value}`;
    /*计算结果*/
    exAmount.value = (originAmount.value * rate).toFixed(3);
}
/*更改货币事件*/
originCurrency.addEventListener("change",updateRate);
exCurrency.addEventListener("change",updateRate);
/*swap事件*/
swap.addEventListener("click",()=>{
    let tem = originCurrency.value;
    originCurrency.value = exCurrency.value;
    exCurrency.value = tem;
    updateRate();
})
/*更改originAmount事件*/
originAmount.addEventListener("change",updateRate);

