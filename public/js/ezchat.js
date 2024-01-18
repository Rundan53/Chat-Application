const token = localStorage.getItem('token');

function saveMessage(e){
    e.preventDefault();
    const message = document.getElementById('mssgInput').value;

    axios.post('/user-chat/message', {message: message}, { headers: { "Authorization": token } })
    .then((response)=>{
        console.log(response)
        showOnScreen(response.data.message.message);
    })
    .catch((err)=>{
        console.log(err.message)
    })
}


function showOnScreen(message){
    const mssgBox = document.querySelector('.container');
    const div = document.createElement('div');
    div.className = 'message left';
    div.innerHTML = `<b>You:</b> ${message}`
    mssgBox.appendChild(div);

    document.getElementById('mssgInput').value = null;
}