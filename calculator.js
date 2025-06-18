function calculate(...args) {
    let numbers = [];
    let operators = [];

    for(let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            numbers.push(args[i]);
        } else if (typeof args[i] === 'string' && ['+', '-', '*', '/'].includes(args[i])) {
            operators.push(args[i]);
        }else if ((typeof args[i] === 'string') && (Number.isNaN(Number(args[i])) )) {
            throw new Error("Invalid operator");
        } 
        else {
            throw new Error("Invalid input type");
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