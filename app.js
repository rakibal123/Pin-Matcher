
function getPin(){
    const pin=generatePin();
    const pinString=pin+ '';
    
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const callPin=getPin();
    const pinForm=document.getElementById('pin-form');
    pinForm.value=callPin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    const number=event.target.innerText;
    const typedNumbers=document.getElementById('typed-numbers');
    const previousTypedNUmber= typedNumbers.value;
    typedNumbers.value='';
    
    if(isNaN(number)){
       
        if(number==="C"){
            //console.log("Clicked C");
            typedNumbers.value='';
        }
        else if(number==="<"){
            //console.log('clicked to arrow');
            const digits=previousTypedNUmber.split('');
            digits.pop();
            const remainingDigits=digits.join('');
            typedNumbers.value=remainingDigits;}
        
    }
    
    else{
    
      const newNumber=previousTypedNUmber+number;
      typedNumbers.value=newNumber;
     
    }
});




document.getElementById('verify-pin').addEventListener('click',function(){
     const pinForm=document.getElementById('pin-form').value;
     const typedNumbers=document.getElementById('typed-numbers').value;
     const pinSuccessMessage=document.getElementById('pin-success');
     const pinFailureMessage=document.getElementById('pin-failure');
    
     if(pinForm==typedNumbers){
        console.log('valid user');
        pinSuccessMessage.style.display='block';
        pinFailureMessage.style.display='none';
       
     }
     else{
        console.log("invalid user");
       
        pinFailureMessage.style.display='block';
        pinSuccessMessage.style.display='none';

        const tryMessage=document.getElementById('try');
        const tryMessageString=tryMessage.innerText;
        const tryNumber=parseInt(tryMessageString);
        const  tryNumbers=tryNumber-1;
     
       
        if(tryNumber==0){
            alert("try later");
            return;
        }
        tryMessage.innerText=tryNumbers;
     };

    
})
