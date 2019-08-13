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
      calls: [
        {
          phone: "3334445555",
          duration: 63,
          notes: "long note here",
          created_at: '02-01-2019 17:00:02',
        },
        {
          phone: "3334445555",
          duration: 63,
          notes: "long note here",
          created_at: '02-01-2019 17:03:02',
        }
      ]
    }
  }

// Handlebars.registerHelper('fullName', function(person) {
//   return person.firstName + " " + person.lastName;
// });

$('body').append(template(data));