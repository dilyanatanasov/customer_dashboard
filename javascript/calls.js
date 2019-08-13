var source = $("#calls_details").html(); 
var template = Handlebars.compile(source); 

var data = {
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
        },
        {
          phone: "3334445555",
          duration: 63,
          notes: "long note here",
          created_at: '02-01-2019 17:03:02',
        },
      ]
}

$('#calls').append(template(data));