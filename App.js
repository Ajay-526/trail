const area=document.querySelector('.App');
const regis=document.getElementById('register');
const login=document.getElementById('login');
const back=document.createElement('button');
back.classList.add('btn-primary');
back.textContent='Go Back';
back.style.display='none';
area.append(back);
console.log(regis);
function fun(){
    document.getElementById('login').style.display='none';
    signup.style.display='inline';
    back.style.display='inline';
}
back.addEventListener('click',(e)=>{
    document.getElementById('login').style.display='inline';
    signup.style.display='none';
    back.style.display='none';
})