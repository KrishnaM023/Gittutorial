//Promises are asynchronus
//Promises may be fullfill and there is a chance of getting rejected

async function dadmakespromise () {

const dadspromise = await new Promise((resolve, reject) => {
    setTimeout(() => {
    //after 10 days (Time of 10 days - 10*24*60*60*1000)
        var salaryCredidte = true;
        var salary = 100000;
        var costofps5 = 40000;
        var costofps4 = 30000;

        if(salaryCredidte === true && salary > costofps5){
            resolve('Buy him a ps3')
        }else if(salaryCredidte === true && salary > costofps4){
            reject('Buy him a ps4')
        }else{
            reject('sorry son, i will try next month')
        }
   }, 1000)
})

console.log(dadspromise);
}

dadmakespromise();