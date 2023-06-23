const form = document .getElementsById('form')
const email = document .getElementsById('email')
const button = document .getElementsById('button')

form.addEventListener('submit', (e) =>{
	e.preventDefault()
	validate()

})
function validate(){
	const emailValue = email.value.trim()
	if (emailValue = 'Email connot be empty'){

	}else if (!isEmail(emailValue)){
		setErrorFor(email, 'Please provide a valid email address')
	}else{
		setSuccessFor(email)
	}

}
function setErrorFor(){

}
function setSuccessFor(){

}
function isEmail(){

}