var PerfomanceS = function(){
    
}
PerfomanceS.prototype.calculate = function(salary){
    return salary * 5;
}
var PerfomanceA = function(){
    
}
PerfomanceA.prototype.calculate = function(salary){
    return salary * 3;
}
var PerfomanceB = function(){
    
}
PerfomanceB.prototype.calculate = function(salary){
    return salary * 2;
}
var Bounce = function(salary){
    this.salary = salary;

}
Bounce.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
    return this.strategy.calculate(this.salary);
}
// var bounce = new Bounce(2000);
// bounce.setStrategy(new PerfomanceS());
// console.log(bounce.getBounce());

var bounce = new Bounce(2000);
bounce.setStrategy(new PerfomanceB());
console.log(bounce.getBounce());