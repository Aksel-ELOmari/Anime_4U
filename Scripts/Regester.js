let formques = document.querySelector('.formques');
let toggleFormBtn = document.querySelector('.toggleForm-btn');
const FieldUserName = document.querySelector('.field-name');
const FormBox = document.querySelector('.SingingForm');
FieldUserName.style.display = 'none';  
toggleFormBtn.addEventListener('click',()=>{
    // toggle the formques innertext
    if(formques.innerText=="Don't Have Acount ?"){
        formques.innerText="Already Have Acount ?"
    }else{
        formques.innerText="Don't Have Acount ?";
    }
    // toggle the toggleFormBtn innertext
    if(toggleFormBtn.innerText=="Sing Up"){
        toggleFormBtn.innerText="Login"
    }else{
        toggleFormBtn.innerText="Sing Up";
    }
    // toggle the userName field displaying
    if(FieldUserName.style.display == 'none'){
        FieldUserName.style.display = 'block'; 
    }else{
        FieldUserName.style.display = 'none';  
    }
})
FormBox.addEventListener('submit',(e)=>{e.preventDefault();});