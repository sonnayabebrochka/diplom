const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.querySelector('#pop_up')
 
openPopUp.addEventListener('click', function(event){
	popUp.classList.add('active');
 
})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})