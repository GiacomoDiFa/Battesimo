 function sendMail(params){
	 var tempParams = {
		 from_name: document.getElementById("Name").value,
		 from_lastname: document.getElementById("Lastname").value,
		 message: document.getElementById("Message").value,
	 };
	 
	 emailjs.send('service_7lbtvqo','template_52jm35t',tempParams)
	 .then((message) => alert("Form compilato correttamente, il messaggio è arrivato a destinazione! Grazie!"))
}