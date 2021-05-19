// Your code here
function saturdayFun(sleep = "roller-skate") {
   return `This Saturday, I want to ${sleep}!`
}

function mondayWork(ew ="go to the office"){
    return `This Monday, I will ${ew}.`
}

function wrapAdjective(wow = "special!"){
//const idkAnymore = wrapAdjective()
    const reTry = `You are `
    return function(){
        let wrap = "*"
        return function (){
            return reTry, wrap, wow, wrap 
        }
    }

}

