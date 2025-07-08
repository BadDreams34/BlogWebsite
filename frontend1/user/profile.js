const username = document.querySelector('#content')
const user = document.createElement('p')
user.textContent= `${localStorage.getItem('username')}`
console.log(user.textContent)
username.appendChild(user);

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    localStorage.removeItem('username')
    window.location.href= './index.html'
})


