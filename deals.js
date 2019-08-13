var source = $("#deals").html(); 
var template = Handlebars.compile(source); 

var data = {
    deals: [
      {
        age: 157,
        balance: 300.0,
        currency: "USD",
        type: "Reccurring",
        paid_date: "01-17-2019",
        ptp_date: "03-01-2019",
        created_at: "01-10-2019",
        created_by: {
          first_name: "Jane",
          last_name: "Johnson"
        },
        business: {
          name: "Best Plumbing Contractor",
          address: {
            street: "1 Main Str",
            city: "Houston",
            state: "TX",
            zip: "77000"
          },
          phones: {
            main: "3334445555",
            additional: "3335556666",
            cell: "7778889999"
          },
          website: "https://google.com",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore.",
          emails: ["email@email.com", "mail@mail.com"],
          industry: "Plumbing",
          language_spoken: "English, Spanish",
          working_hours: {
            monday: {
              from: "8:00 AM",
              to: "6:00 PM"
            },
            tuesday: {
              from: "8:00 AM",
              to: "6:00 PM"
            },
            wednesday: {
              from: "8:00 AM",
              to: "6:00 PM"
            },
            thursday: {
              from: "8:00 AM",
              to: "6:00 PM"
            },
            friday: {
              from: "8:00 AM",
              to: "6:00 PM"
            },
            saturday: {
              from: "Only By Appointment",
              to: "Only By Appointment"
            },
            sunday: {
              from: "Closed",
              to: "Closed"
            }
          },
          discounts: "20% for Seniors & Military"
        },
        service: [
          {
            number: 1234,
            type: "OPP",
            status: "Active",
            placement_status: "Good",
            promarketing_website: {
              date: "01-27-2019",
              status: "Ready",
              url: "https://optimizedwebsitename-tx.com"
            },
            contacts: [
              {
                first_name: "Mikle",
                last_name: "Todd",
                relation: "12312",
                phones: ["3334445555", "4445556666", "7778889999"]
              }
            ],
            link: "/service/1234"
          }
        ],
        invoices: [
          {
            type: "setup",
            amount: 50.0,
            currency: "USD",
            created_at: "02-01-2019",
            created_by: {
              first_name: "Jane",
              last_name: "Johnson"
            },
            waive: {
              amount: 50.0,
              status: "active"
            },
            transactions: "/transactions/1234"
          },
          {
            type: "recurring",
            amount: 250.0,
            currency: "USD",
            created_at: "02-01-2019",
            created_by: {
              first_name: "Jane",
              last_name: "Johnson"
            },
            waive: {
              amount: 0,
              status: "inactive"
            },
            transactions: "/transactions/1234"
          }
        ],
        discounts: [
          {
            from: "01-01-2019",
            to: "02-01-2019",
            amouth: 20,
            type: "percentage"
          }
        ]
      }
    ]
  }

$('body').append(template(data));