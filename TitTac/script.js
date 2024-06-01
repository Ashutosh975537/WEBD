const playerOne = document.getElementById('inputId1')
const playerTwo = document.getElementById('inputId2')
const bnt0 = document.getElementById('btn0')
const bnt1 = document.getElementById('btn1')
const bnt2 = document.getElementById('btn2')
const bnt3 = document.getElementById('btn3')
const bnt4 = document.getElementById('btn4')
const bnt5 = document.getElementById('btn5')
const bnt6 = document.getElementById('btn6')
const bnt7 = document.getElementById('btn7')
const bnt8 = document.getElementById('btn8')
const tableId = document.getElementById('tableId')
const pId = document.querySelector('.pId')
const div = document.querySelector('.main')
const matrix = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]] ;
const inp = ['O','X']  ;
let cnt = 0 ;
let i = 0 ;


function check(){
    // checking first row
    for( i = 0 ; i < 3 ; i++){
        if(matrix[0][i] !== inp[cnt%2])
        break ;
    }
    if(i === 3){
        return true ;
    }
    //checking second row 
    for( i = 0 ; i < 3 ; i++){
        if(matrix[1][i] !== inp[cnt%2])
        break ;
    }
    if(i === 3){
        return true ;
    }
        //checking third row 
    for( i = 0 ; i < 3 ; i++){
        if(matrix[2][i] !== inp[cnt%2])
        break ;
    }
    if(i === 3){
        return true ;
    }

    //checking first col 
    for( i = 0 ; i < 3 ; i++){
        if(matrix[i][0] !== inp[cnt%2])
        break ;
    }
    if(i === 3){
        return true ;
    }
    //checking second col 
    for( i = 0 ; i < 3 ; i++){
        if(matrix[i][1] !== inp[cnt%2])
        break ;
    }
    if(i == 3){
        return true ;
    }
        //checking third col 
    for( i = 0 ; i < 3 ; i++){
        if(matrix[i][2] !== inp[cnt%2])
        break ;
    }
    if(i == 3){
        return true ;
    }
    //checking first
    for( i = 0 ; i < 3 ; i++){
        if(matrix[i][i] !== inp[cnt%2])
        break ;
    }
    if(i == 3){
        return true ;
    }
    //checking last diagonal
    for( i = 2 ; i >= 0  ; i--){
        if(matrix[2-i][i] !== inp[cnt%2])
        break ;
    }
    if(i === -1){
        return true ;
    }
    return false ;
}

function display(){
    tableId.style.display = "none" ;
    const p = document.createElement('span')
    p.classList.add('pId')
    if(cnt % 2 === 0){
      p.innerHTML = `${(playerOne.value).toUpperCase()} WINS`
    }
    else{
      p.innerHTML = `${(playerTwo.value).toUpperCase()} WINS`
    }
   div.appendChild(p)
}
function checkCnt(){
    if(cnt === 9){
        tableId.style.display = "none" ;
        const p = document.createElement('span')
        p.classList.add('pId')
        p.innerHTML = "ITS A DRAW"
        div.appendChild(p)
       
    }
}



bnt0.addEventListener('click',() => {
    bnt0.innerHTML = inp[cnt%2];
    matrix[0][0] = inp[cnt%2] ;
    if(check()){
       display() ;
       cnt = -1 ;
    }
bnt0.disabled = true ;
    cnt++ ;
    checkCnt();
})

bnt1.addEventListener('click',() => {
    bnt1.innerHTML = inp[cnt%2];
    matrix[0][1] = inp[cnt%2];
    if(check()){
    display() ;
       cnt = -1 ;
    }
    
    bnt1.disabled = true ;
    cnt++ ;
    checkCnt();
})




bnt2.addEventListener('click',() => {
    bnt2.innerHTML = inp[cnt%2]; 
    matrix[0][2] = inp[cnt%2] ; 
    if(check()){
      display();
           cnt = -1 ;
    }
    bnt2.disabled = true ;
    cnt++ ;
    checkCnt();
})

bnt3.addEventListener('click',() => {
    bnt3.innerHTML = inp[cnt%2]; 
    matrix[1][0] = inp[cnt%2] ; 
    if(check()){
       display();
           cnt = -1 ;
    }
    bnt3.disabled = true ;
    cnt++ ;
    checkCnt();
})

bnt4.addEventListener('click',() => {
    bnt4.innerHTML = inp[cnt%2]; 
    matrix[1][1] = inp[cnt%2] ; 
    if(check()){
        display();
           cnt = -1 ;
    }
    bnt4.disabled = true ;
    cnt++ ;
    checkCnt();
})


bnt5.addEventListener('click',() => {
    bnt5.innerHTML = inp[cnt%2]; 
    matrix[1][2] = inp[cnt%2] ; 
    if(check()){
      display();
           cnt = -1 ;
    }
    bnt5.disabled = true ;
    cnt++ ;
    checkCnt();
})
bnt6.addEventListener('click',() => {
    bnt6.innerHTML = inp[cnt%2];
    matrix[2][0] = inp[cnt%2] ;
    if(check()){
       display() ;
           cnt = -1 ;
    }
    bnt6.disabled = true ;
    cnt++ ;
    checkCnt();
})

bnt7.addEventListener('click',() => {
    bnt7.innerHTML = inp[cnt%2];
    matrix[2][1] = inp[cnt%2] ;
    if(check()){
       display() ;
           cnt = -1 ;
    }
    bnt7.disabled = true ;
    cnt++ ;
    checkCnt();
})

bnt8.addEventListener('click',() => {
    bnt8.innerHTML = inp[cnt%2];
    matrix[2][2] = inp[cnt%2] ;
    if(check()){
       display() ;
           cnt = -1 ;
    }
    bnt8.disabled = true ;
    cnt++ ;
    checkCnt();
})