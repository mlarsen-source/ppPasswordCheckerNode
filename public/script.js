/*

Authors: Matthew Larsen & Justin Saephan
Date: 01/21/2025
Pair Program Password Checker
Filename: script.js
File Description: JavaScript for Password Checker webpage

*/


let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let output = document.getElementById("output")
let input = document.getElementById("input")

button1.onclick = testPassword;
button2.onclick = clearPassword;

function clearPassword()
{

  input.value = "";
  output.innerHTML = "";
}

input.onclick = function()
{
  
  document.addEventListener('keyup', testPassword); 
}
 
  function testPassword()
  {
  let password = input.value;
  let invalid = false;
  let reasons = [];
  output.innerHTML = "";
  
  // check password is at least 8 characters in length
  if(password.length <8)
  {
    invalid = true;
    reasons.push("Password must be at least 8 characters long.");
  }

  // check if password contains at least 1 speacial character
  if(!password.includes("!") && !password.includes("@") && !password.includes("#") && !password.includes("$") && !password.includes("%") && !password.includes("^") && !password.includes("&") && !password.includes("*")) 
  {
    invalid = true;
    reasons.push("Password must include at least one special character (!, @, #, $, %, ^, &, *).");
  }

  // check if password contains any spaces
  if (password.includes(" ")) 
  {
    invalid = true;
    reasons.push("Password must not contain spaces.");
  }

  //check if password contains at least 1 uppercase letter
  if(password === password.toLowerCase())
  {
    invalid = true;
    reasons.push("Password must include least one uppercase letter.");
  }

  //check if password contains at least 1 lowercase letter
  if(password === password.toUpperCase())
  {  
    invalid = true; 
    reasons.push("Password must include at least one lowercase letter.");
  }

  // check if password has at least one numeric digit
  let hasDigit = true;
  for (let char of password) 
  {
    if (!isNaN(char) && char !== " ") 
    {
      hasDigit = false;
      break;
    }
  }
  if (hasDigit)
  {
    invalid = true; 
    reasons.push("Password must include at least one numeric digit.");
  }

  if(invalid)
  {
    output.innerHTML = "";
    output.className = "outputRedText";
    for(let reason of reasons)
    {
     output.innerHTML += reason + "<br>";
    }
  }

  else
  {
    output.innerHTML = "";
    output.className = "outputGreenText";
    output.innerHTML = "Password is valid!";
    
  }

  function clearPassword(){

    input.value = "";
    output.innerHTML = "";
  }

}
