var patientid = context.get('request.parameters.patient-id.values[0]');
if (patientid.length < 36) {
    context.reject('ValidateError', 'Incorrect patient-id');
}
