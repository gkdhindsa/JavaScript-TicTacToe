
turn=1;
let char

function checkWinner(){
    let s=['','','','','','','','',''];
    let w=-1;
    for(i=0;i<9;i++){
        s[i]=elements[i].innerText;
    }
    console.log(s);

    if(s[2]!='_')
    {
        if(s[0]==s[1] && s[1]==s[2]){
            document.querySelector("#winner-text").innerText=s[0]+ " is the winner!🎆"
            w=0;
        }
        else if(s[2]==s[5]&& s[8]==s[5]){
         document.querySelector("#winner-text").innerText=s[5]+ " is the winner!🎆"
         w=0
     } 
    }
    if(s[6]!='_')
    {
        if(s[6]==s[7]&& s[6]==s[8]){
            document.querySelector("#winner-text").innerText=s[6]+ " is the winner!🎆"
            w=0
        }  
        else if(s[0]==s[3] && s[3]==s[6]){
            document.querySelector("#winner-text").innerText=s[3]+ " is the winner!🎆"
            w=0
        } 
    }
    if(s[4]!='_')
    {
        if(s[3]==s[4]&& s[3]==s[5]){
            document.querySelector("#winner-text").innerText=s[3]+ " is the winner!🎆"
            w=0;
        } 
        else if(s[1]==s[4]&& s[7]==s[4]){
            document.querySelector("#winner-text").innerText=s[4]+ " is the winner!🎆"
            w=0
        }  
        else if(s[0]==s[4]&& s[8]==s[4]){
            document.querySelector("#winner-text").innerText=s[4]+ " is the winner!🎆"
            w=0
        } 
        else if(s[2]==s[4]&& s[4]==s[6]){
            document.querySelector("#winner-text").innerText=s[4]+ " is the winner!🎆"
            w=0
        } 
    }
    
    if(w==0){
        document.querySelector(".table").classList.add("remove-table");
    }
}

function clicked(element){
    if(turn%2==0)
    {
        char='X';
    }
    else{
        char='O'
    }
    if(element.innerText!=='_'){
        return
    }
    else{
        element.innerText=char;
        turn++;
    }
    if(turn>=5)
    {
        checkWinner();
    }
    if(turn>9)
    {
        document.querySelector("#winner-text").innerText="It's a draw!"
        ocument.querySelector(".table").classList.add("remove-table");
    }
}

const elements=document.querySelectorAll("button");
console.log(elements);


elements.forEach(ele => {
    ele.addEventListener('click',()=>{
        clicked(ele);
    });
});