// console.log("Agenda")
var count = 0;
function getContactData () {
	var name =  $('#contact-name').val();
	var phone =  $('#contact-phone').val()
	// console.log(name,phone);
	addContactData(name, phone);

	name.html = "";
	phone.html = "";
}

var template = '<div class="row">'+ 
		    '<div class="col offset-s3 s6">'+
		      '<div class="card-panel  orange lighten-4">'+
		        '<h3> __name__</h3>'+
		        '<span> __phone__</span>'+
		        '<button class="waves-effect waves-light btn right" onClick="deleteContact(event)"><i class="material-icons left">delete</i></button>'+
		      '</div>'+
		    '</div>'+
		 '</div>';

function addContactData (name, phone) {
	count++;
	var finalTemplate = "";

	// console.log("Name: " + name);
	// console.log("Tel: " +  phone);


	finalTemplate = template.replace("__name__", name)
		.replace("__phone__", phone);

	$("main").append(finalTemplate);
	// $('button').click(deleteContact); //REVISAR BUG

	$('h5').html('Total contactos: ' + count);
	swal("¡Yei!", "Contacto agregado", "success");
}

function deleteContact(){
	count--;
	// console.log("Delete");
	var item = $(event.currentTarget);
	// console.log(item)
	var card = item.parent();
	// var card = $(this).parent();
	var colCard = card.parent();
	var rowCard = colCard.parent();
	// $(this).remove();
	// console.log(card);
	// console.log(rowCard);

	rowCard.remove();
	
	$('h5').html('Total contactos: ' + count);
}


// Función principal 
 $(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);
  });