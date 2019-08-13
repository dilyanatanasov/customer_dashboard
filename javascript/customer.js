var source = $("#customer_detail").html(); 
var template = Handlebars.compile(source); 

var data = {
    customer: {
      first_name: "Jonh",
      last_name: "Smith",
      phones: {
        main: "3334445555",
        additional: "3335556666",
        cell: "7778889999"
      }
    }
  }

$('#customer').append(template(data));