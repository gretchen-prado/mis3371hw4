  /* 
Program name: index-4.html this is scripts-3.js
Author: Gretchen R Prado Gonzalez
Date created: February 5
Date last edited: May 3
Version: 4.0
Description: JavaScript for patient registration form.*/



/*from w3schools*/
const d = new Date();
document.getElementById("datetoday").innerHTML = d.toDateString();

var pwdWrite = document.getElementById("pwd");
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var number = document.getElementById("number");
var length = document.getElementById("length");

const slider = document.getElementById("vol");
const output = document.getElementById("rangeValue");

slider.addEventListener("input", function()
{
    output.textContent = slider.value;
});

pwdWrite.onfocus = function() 
{
    document.getElementById("error").style.display = "block";
}
pwdWrite.onblur = function()
{
    document.getElementById("error").style.display = "none";
}
pwdWrite.onload = function()
{
    document.getElementById("error").style.display = "none";
}

pwdWrite.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(pwdWrite.value.match(lowerCaseLetters)) {  
      lower.classList.remove("invalid");
      lower.classList.add("valid");
    } 
    else
    {
      lower.classList.remove("valid");
      lower.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(pwdWrite.value.match(upperCaseLetters)) 
    {  
      upper.classList.remove("invalid");
      upper.classList.add("valid");
    } 
    else
    {
      upper.classList.remove("valid");
      upper.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(pwdWrite.value.match(numbers)) 
    {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } 
    else 
    {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(pwdWrite.value.length >= 8) 
    {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } 
    else 
    {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  const form = document.getElementById('myForm'); 
  
  /*form.addEventListener('submit', function(event) {
    event.preventDefault(); 

  });*/
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const reviewArea = document.getElementById('reviewArea');
  reviewArea.innerHTML = ''; // Clear previous content
  for (const key in data) {
      reviewArea.innerHTML += `<p><b>${key}:</b> ${data[key]}</p>`;
  }

  function validatePassword() {
     const password = document.getElementById("pwd").value;
     const confirmPassword = document.getElementById("psw-repeat").value
     const userId = document.getElementById("username").value;
  
    if (password === confirmPassword) {
      document.getElementById("message").innerHTML = "Passwords match!";
     //document.getElementById("error").style.color = "green";
    } 
    else
    {
      document.getElementById("message").innerHTML = "Passwords do not match";
      //document.getElementById("message").style.color = "red";
    }
    if (password === userId) {
        document.getElementById("message").innerHTML = "Password cannot be User ID";
    }
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop submission initially
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      reviewArea.innerHTML = '<h2>Review Your Details</h2>';
      for (const key in data) {
          reviewArea.innerHTML += `<p><b>${key}:</b> ${data[key]}</p>`;
      }
  
      // Check password confirmation before submitting
      const password = document.getElementById("pwd").value;
      const confirmPassword = document.getElementById("psw-repeat").value;
      
      if (password !== confirmPassword) {
          document.getElementById("message").innerHTML = "Passwords do not match!";
          document.getElementById("message").style.color = "red";
          return; 
      }
  
      form.submit();
  });
    //document.getElementById("confirmSubmit").addEventListener("click", function() {
     // form.submit();
     document.getElementById("confirmSubmit").disabled = false;

  //});
  


//review form
  function reviewForm() {
    let formData = new FormData(document.getElementById("myForm"));
    let reviewHTML = "<h2>Review Your Information</h2><ul>";

    for (let [key, value] of formData.entries()) {
        reviewHTML += `<li><strong>${key.replace(/_/g, " ")}:</strong> ${value}</li>`;
    }

    reviewHTML += "</ul><button onclick='editForm()'>Edit</button>";
    document.getElementById("reviewArea").innerHTML = reviewHTML;
}

// Function to allow editing the form again
function editForm() {
    document.getElementById("reviewArea").innerHTML = "";
}

//new one
function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorSpan = document.getElementById("emailError");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value) && emailInput.value.length > 0) {
      errorSpan.textContent = "Invalid email format (e.g., name@example.com)";
  } else {
      errorSpan.textContent = ""; // Clear error message if input is valid
  }
}


//cookies w3schools working


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let popupbox;
    let user = getCookie("username");
    if (user != "") {
      popupbox = "Welcome back "+ user + ".\nPress OK to confirm or Cancel if this isn't "+user+".";
  if (confirm(popupbox))
    {
      document.getElementById("fname").setAttribute('value', user);
    } 
     else {
      deleteCookie();
       user = prompt("Welcome, new user! Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 1);
       }
    }
  }
}
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


/* prof jake
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
let name = cname + "=";
let ca = document.cookie.split(';');
for(let i = 0; i < ca.length; i++) {
let c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}

function checkCookie() 
{
let message;
let firstname = getCookie("firstname");
if (firstname != "") 
{
  message = "Welcome back "+ firstname + ".\nPress OK to confirm or Cancel if this isn't "+firstname+".";
  if (confirm(message)) 
    {
     document.getElementById("fname").setAttribute('value',firstname);
    }
  else
    {
      setCookie("firstname", "" , 0);  
    } 
}
}
window.onload = function() {
  checkCookie();
};
*/
    // Cookie helpers
    /* 

    function setCookie(name, value, hours) {
      const d = new Date();
      d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let c of ca) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
      }
      return "";
    }

    function deleteCookie(name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Clear form and delete data
    function resetUser() {
      deleteCookie("firstName");
      document.getElementById("nameForm").reset();
      location.reload();
    }

    window.onload = function () {
      const firstName = getCookie("firstName");
      const headerDiv = document.getElementById("header");

      if (firstName) {
        headerDiv.innerHTML = `<h2>Hello ${firstName}</h2>`;
        // Create "Not Jake?" checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "notMeBox";
        checkbox.onclick = function () {
          if (checkbox.checked) resetUser();
        };

        const label = document.createElement("label");
        label.htmlFor = "notMeBox";
        label.innerText = ` Not ${firstName}? Click HERE to start as a NEW USER.`;

        headerDiv.appendChild(checkbox);
        headerDiv.appendChild(label);
      } else {
        headerDiv.innerHTML = `<h2>Welcome, New User!</h2>`;
      }
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const name = document.getElementById("firstName").value.trim();
      const remember = document.getElementById("rememberMe").checked;

      if (remember && name) {
        setCookie("firstName", name, 24); // 24 hours
      } else {
        deleteCookie("firstName");
      }
      location.reload();
    }
      */