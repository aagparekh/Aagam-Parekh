

function caluclate(expression){

    const token = expression.split(" ");
    const result = []

    for(i = token.length - 1; i>=0; i--){
        if (token[i] == "+" || token[i] == "-" || token[i] == "*" || token[i] == "/") {
            const operand1 = result.pop();
            const operand2 = result.pop();
            const sol = performOperand(token[i], operand1, operand2);
            result.push(sol);
        }
        else{
            result.push(parseFloat(token[i]));
        }
        console.log(result)
    }

    return result[0];
}

function performOperand(operator, operand1, operand2){
    if (operator == "+") {
        return operand1 + operand2;
    }
    else if (operator == "-") {
        return operand1 - operand2;
    }
    else if (operator == "*") {
        return operand1 * operand2;
    }
    else if (operator == "/") {
        return operand1 / operand2;
    }
}

console.log(caluclate("* + 3 4 5"));