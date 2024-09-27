import { useState } from 'react';

export function useCalculator() {
    const [leftNumber, setLeftNumber] = useState('0');
    const [rightNumber, setRightNumber] = useState('0');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(2)

    const pressNumber = (panel, pressedNumber) => {
        console.log(`Pressed number: ${pressedNumber} on ${panel}`);
        if (panel === 'left') {
            setLeftNumber(leftNumber !== '0' ? leftNumber + pressedNumber : pressedNumber);
            console.log(leftNumber);
        } else if (panel === 'right') {
            setRightNumber(rightNumber !== '0' ? rightNumber + pressedNumber : pressedNumber);
            console.log(rightNumber);

        }
    };

    const pressEquals = () => {
        console.log(leftNumber);
        const numLeft = parseInt(leftNumber);
        console.log(numLeft);
        const numRight = parseInt(rightNumber);
        let results;
        switch(operator) {
            case '+':
                results = numLeft + numRight;
                break;

            case '-':
                results = numLeft - numRight;
                break;

            case '*':
                results = numLeft * numRight;
                break;

            case '÷':
                results = numLeft / numRight;
                break;
        }
        setResult(results);
    };

    const clearNumber = (panel) => {
        if (panel === 'left') {
            console.log("Clearing left number:", leftNumber);
            setLeftNumber('0');
        } else if (panel === 'right') {
            console.log("Clearing right number:", rightNumber);
            setRightNumber('0');
        }
    };

    const pressOperator = (pressedOperator) => {
        console.log(leftNumber);
        setOperator(pressedOperator);
    };


    return {
        leftNumber,
        rightNumber,
        pressNumber,
        clearNumber,
        operator,
        pressOperator,
        result,
        pressEquals,
    };
}
