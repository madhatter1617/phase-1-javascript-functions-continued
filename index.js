// Your code here
function saturdayFun(sleep = "roller-skate") {
   return `This Saturday, I want to ${sleep}!`
}

function mondayWork(ew ="go to the office"){
    return `This Monday, I will ${ew}.`
}

function wrapAdjective(wrap = "*", wow = "special"){
    let result = wrapAdjective()
    let emphatic = result("a hard worker")
    return function()
    {
        const you= "You are ";
        return function () {
            return (you, wrapAdjective(wrap), emphatic, wrapAdjective(wow))
    }

}}

