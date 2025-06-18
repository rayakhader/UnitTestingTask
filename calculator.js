function calculate(...args) {
    let numbers = [];
    let operators = [];

    if (typeof args[0] !== 'number') { throw new Error("Invalid input type"); }
    if(args[0] <=1000){
        numbers.push(args[0]);
    }
    for(let i = 1; i < args.length; i+=2) {
        let operator = args[i];
        let number = args[i + 1];
        if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
            throw new Error("Invalid operator");
        }
        if (typeof number !== 'number') {
            throw new Error("Invalid input type");
        }
        if (number <= 1000) {
            operators.push(operator);
            numbers.push(number);
        }
    }
 
       for(let i =0 ; i<operators.length; ){
        if(operators[i] ==='*' || operators[i] ==='/'){
            let result = operators[i]=== '*' ? numbers[i] * numbers[i + 1] : 
            (()=>{
                if(numbers[i + 1] === 0) {
                    throw new Error('Division by zero');
                }
                 return numbers[i] / numbers[i + 1];

            })()
            numbers.splice(i, 2, result);
            operators.splice(i, 1);
        }else {
            i++;
        }
       }

       return operators.reduce((acc, operator, index) => {
        if (operator === '+') {
            return acc + numbers[index + 1];
        } else if (operator === '-') {
            return acc - numbers[index + 1];
        }   
    }, numbers[0]);
}

module.exports = calculate;