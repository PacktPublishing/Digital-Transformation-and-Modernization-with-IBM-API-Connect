var patient1Response = JSON.parse(context.get('patient1-response.body'));
var patient2Response = JSON.parse(context.get('patient2-response.body'));
var patientResponse= {
           patients: [{
             "lastName" : patient1Response.name[0].family,
             "firstName": patient1Response.name[0].given[0]
           },
           {
              "lastName" : patient2Response.name[0].family,
              "firstName": patient2Response.name[0].given[0] 
           }]
}
context.message.header.set('Content-Type',"application/json");
context.message.body.write(patientResponse);
