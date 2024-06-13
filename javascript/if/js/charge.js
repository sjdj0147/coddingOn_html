let age = prompt('몇살이십니까?');
let charge=0;

if(age <8){
    document.write('미취학 아동입니다.</br>');
    charge=1000;
}
else if(age<14){
    document.write('초등학생입니다..</br>');
    charge=2000;
    
}
else if(age<20){
    document.write('중, 고등학생입니다..</br>');
    charge=2500;
    
}
else{
    document.write('성인입니다..</br>');
    charge=3000;
}
document.write('입장료는 <span>'+charge+'</span>원 입니다.')