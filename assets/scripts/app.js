const defaultResult =0;
let currentResult = defaultResult;
let logEntries =[];


function usrInputNumber(){
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator ,resultBeforeCalc, calcNumber){
    const calcDescription =`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription); //from vendor file
}

function logWrite(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry ={
        operation : operationIdentifier,
        prevResult: prevResult,
        number    : operationNumber,
        result    : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
}
function calculateResult(calculationType){
    const enteredNumber = usrInputNumber();
    const initialNumber = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator   = '+';
    }else {
        currentResult -=enteredNumber;
        mathOperator   = '-';
    }
    currentResult += enteredNumber;
    createAndWriteOutput('+',initialNumber,enteredNumber);
    logWrite(calculationType,initialNumber,enteredNumber,currentResult);
}

function add(){
   calculateResult('ADD');
}

function substract(){
  calculateResult('SUBTRACT')
}

function multiply(){
    const enteredNumber = usrInputNumber();
    const initialNumber = currentResult;
    currentResult *=enteredNumber;
    // currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialNumber,enteredNumber);
    logWrite('MULTIPLY',initialNumber,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = usrInputNumber();
    const initialNumber = currentResult;
    currentResult/= enteredNumber;
    // currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialNumber,enteredNumber);
    logWrite('DIVIDE',initialNumber,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// console.log(currentResult);

