// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity2 = 'go to the office') {
    return `This Monday, I will ${activity2}.`
}




function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
    }
}
 