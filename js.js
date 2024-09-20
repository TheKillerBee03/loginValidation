function validateEmail(){
    
    let user = document.getElementById('users').value;
    let regEx = /[A-Za-z0-9]+@[a-z]+\.[a-z]{1,30}/; 

    //[A-Z] to able to use upper letter
    //[a-z] to able to use lower letter
    //[0-9] to able to declare a number
    //[.-] to able to use dash 
    //[@] to able use a gmail symbol
    //[+] to able occurs 1 or more times the pattern
    //[\] to able use again the pattern or symbol
    //{3,} to declare the mininum and maxinum length of the value

    
    if(regEx.test(user)){ //[test] is to verifies the correctness and [if, else] the use of if execute a statement if a specified condition is true and else if the statement is false
        document.getElementById('u').innerHTML = "valid username" //innerHTML can use to get the internal HTML content of any html element as an html string.
         document.getElementById('u').style.color = "green"; //color is to declare the color of the text
    }else{
        document.getElementById('u').innerHTML = "please input valid username"
        document.getElementById('u').style.color = "red";
    }
    
}
document.getElementById("bntcompute").addEventListener("click", validateEmail);

//addEventListener is abuilt in function in javascript that allows you to attach an event handler to specified element such as a button or link.

function validatePassord(){
    
    let password = document.getElementById('pass').value;
    let regEx = /(?=.*[a-z])(?=.*[A-Z]){6,}/;

    if(regEx.test(password)){
        document.getElementById('p').innerHTML = "correct password"
         document.getElementById('p').style.color = "green";
    }else{
        document.getElementById('p').innerHTML = "please input a correct password"
        document.getElementById('p').style.color = "red";
    }
    
}
document.getElementById("bntcompute").addEventListener("click", validatePassord);
