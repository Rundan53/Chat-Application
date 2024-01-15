
let currentModal = null;

$(document).on('show.bs.modal',(event)=> {
    currentModal = event.target;
});

function showLoginModal() {
    if (currentModal) {
        $(currentModal).modal('hide');
    }
    $('#loginModal').modal('show');
}

function showForgotPassword() {
    if (currentModal) {
        $(currentModal).modal('hide');
    }
    $('#forgotPasswordModal').modal('show');
}


function signUp(event){
    event.preventDefault();
   
}

