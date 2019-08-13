var source = $("#cancellation_request").html(); 
var template = Handlebars.compile(source); 

var data = {
    cancellation_request_details: {
      created_at: "01-10-2019",
      created_by: {
        first_name: "Jane",
        last_name: "Johnson"
      },
      status: "In Progress",
    }
  }

$('#canceled').append(template(data));