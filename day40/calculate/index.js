// 绩效 S 5 A 3 B 2 C 1 D  
var perfomanceX = function(salary){
    return salary * 60;
}
var perfomanceS = function(salary){
    return salary * 5;
}
var perfomanceA = function(salary){
    return salary * 3;
}
var perfomanceB = function(salary){
    return salary * 2;
}
var calculateBounce = function(perfomanceLevel,salary){
    if(perfomanceLevel === 'X'){
        return perfomanceX(salary);
    }
    if(perfomanceLevel === 'S'){
        return perfomanceS(salary);
    }
    if(perfomanceLevel === 'A'){
        return perfomanceA(salary);
    }
    if(perfomanceLevel === 'B'){
        return perfomanceB(salary);
    }
}
console.log(calculateBounce('S',20000));