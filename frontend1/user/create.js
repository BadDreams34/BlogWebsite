const save = document.querySelector('#save')
const discard = document.querySelector('#discard');

save.addEventListener('click', async (e)=>{
    const title = document.querySelector('#title').value
    const post = document.querySelector('#Post').value
    const json = {title, post}
    if (!title || !post) {
        return alert("Please Fill all Fields")
    } 
    const response = await fetch('http://localhost:4000/api/posts', {
        method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(json)
    } )
    if (response.ok) {
        alert("SuccessFully Posted")
        window.location.href= './profile.html'
    } else {
        alert("Something Went Wrong")
    }
    e.preventDefault();


})
