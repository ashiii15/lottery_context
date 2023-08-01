let luckyContext = new Promise((resolve,reject)=>{
    let myLottery = 1;
    let winLottery = Math.floor(Math.random()*5)+1
    if(myLottery == winLottery){
        resolve("you won the lottery")
    }else{
        reject("better next time")
    }
})

    luckyContext.then((value)=>{
        result.innerHTML = value;
        result.style.color ="green"
    })
    luckyContext.catch((err)=>{
        result.innerHTML = err;
        result.style.color = "red"
  

})