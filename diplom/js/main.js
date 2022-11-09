const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.querySelector('#pop_up');
const hidePassword = document.querySelector('.hide');
const Password = document.querySelector('#password');

openPopUp.addEventListener('click', function(event){
	popUp.classList.add('active');
	popUp.classList.add('active');

})

hidePassword.addEventListener('click', function(event){
	if (Password.type == "text"){
		Password.type = 'password';
	}
	else {
		Password.type = 'text';
	}


})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})
