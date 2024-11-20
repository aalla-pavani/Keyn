document.querySelector("#submit").addEventListener('click',()=>{
    let u=document.querySelector("#username").value;
    let p=document.querySelector("#password").value;
    let r=document.querySelector("#error");
    let a=["#","$","!","@"];
    if (p.length < 8) {
        r.innerHTML = "Password must be at least 8 characters long";
        r.style.color = "red";
        event.preventDefault();
        return;
    }

    // Initialize flags for uppercase and number
    let hasUpperCase = false;
    let hasNumber = false;
    let c=false;
    r.style.color = "red";
    r.innerHTML = "";

    // Loop through the password characters to check for uppercase and numbers
    for (let i = 0; i < p.length; i++) {
        if (p[i] === p[i].toUpperCase() && isNaN(p[i])) {
            hasUpperCase = true;
        }
        if (!isNaN(p[i])) {
            hasNumber = true;
        }
        for(let j=0;j<4;j++){
            if(p[i]==a[j]){
                c=true;
            }
        }
    }

    // Provide feedback based on the checks
    if (!c) {
        r.innerHTML = "Password must contain a Symbol";
        event.preventDefault();
    } else if (!hasUpperCase) {
        r.innerHTML = "Password must contain an uppercase letter";
        event.preventDefault();
    } else if (!hasNumber) {
        r.innerHTML = "Password must contain a number";
        event.preventDefault();
    } else {
        r.innerHTML = "Password is valid";
        r.style.color = "green";
    }
});