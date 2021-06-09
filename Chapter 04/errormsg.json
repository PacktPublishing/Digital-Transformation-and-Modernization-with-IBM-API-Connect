var errorName = context.get('error.name');
var errorMessage = context.get('error.message');
var errorResponse = 
{
    "name": errorName,
    "message": errorMessage
};
context.message.header.set('Content-Type', "application/json");
context.message.body.write(errorResponse);
