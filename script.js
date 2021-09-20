const dateInput=document.querySelector("#date__Input");
const luckyNumberInput= (document.querySelector("#text__Input"));
const btn=document.querySelector(".btn-clicked");
const message=document.querySelector(".message");
 
 var mes;
 var messageText;

function BirthdayValidation(){
  const DOB=dateInput.value;
  const sum=calculateSum(DOB);
  Comparision(sum,luckyNumberInput.value);
  mes=message.innerText=messageText;
  
}
function calculateSum(DOB){
  DOB=DOB.replaceAll("-","")
  let sum=0;
  for(let i=0;i<DOB.length;i++){
    sum=sum + Number(DOB.charAt(i));
 }
 return sum;

}

function Comparision(sum,luckyNumberInput){
  if(sum % Number(luckyNumberInput) ===0){
    messageText="Yes Your birthday is lucky";
    message.style.color="green";
    
  }
  else{
    messageText="No Your birthday is not lucky";
    message.style.color="red"

  }

}


btn.addEventListener("click",BirthdayValidation)
