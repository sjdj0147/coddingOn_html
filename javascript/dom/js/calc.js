let v1 = document.querySelector('.val1');
let v2 = document.querySelector('.val2');
let op = document.querySelector('.op');
let res = document.querySelector('.res');
let resultBtn = document.querySelector('.resultBtn');
let reset = document.querySelector('.reset');

resultBtn.onclick = resultFunction;
reset.onclick = resetFunction;

function resultFunction(){
    let v1Val = Number(v1.value);
    let v2Val = Number(v2.value);
    let opVal = op.value;
    let result = 0;

    switch(opVal){
        case '+':
            result = v1Val + v2Val;
            break;
        case '-':
            result = v1Val - v2Val;
            break;
        case '/':
            result = v1Val / v2Val;
            break;
        case '*':
            result = v1Val * v2Val;
            break;
        case '%':
            result = v1Val % v2Val;
            break;
        case '':
            alert('연산자가 입력되지 않았습니다.');
            return;
        default:
            alert('잘못된 연산자입니다.');
            return;
    }
    res.value = result;
}

function resetFunction(){
    v1.value = '';
    v2.value = '';
    op.value = '';
    res.value = '';
}
