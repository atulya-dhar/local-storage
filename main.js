const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');




myForm.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else
    {
        console.log(nameInput.value);
        
    }
}
function saveData()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    localStorage.setItem('name', name);
    localStorage.setItem('email' ,email);
}