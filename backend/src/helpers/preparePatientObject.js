import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const preparePatientObject = (newPatient, fields = []) => {
  const baseObj = {
    _id: newPatient._id,
    firstname: newPatient.firstname,
    lastname: newPatient.lastname,
    dateOfBirth: newPatient.dateOfBirth,
    gender: newPatient.gender,
    address: {
      place: newPatient.address.place,
      zip: newPatient.address.zip,
      street: newPatient.address.street,
      streetNumber: newPatient.address.streetNumber,
    },
    contactInformation: {
      phone: newPatient.contactInformation.phone,
      email: newPatient.contactInformation.email,
      fax: newPatient.contactInformation.fax,
    },
    insuranceInformation: {
      insuranceNumber: newPatient.insuranceInformation.insuranceNumber,
      provider: newPatient.insuranceInformation.provider,
      type: newPatient.insuranceInformation.type,
      validityDate: {
        start: newPatient.insuranceInformation.validityDate.start,
        end: newPatient.insuranceInformation.validityDate.end,
      },
      insuredStatus: newPatient.insuranceInformation.insuredStatus,
      contact: {
        name: newPatient.insuranceInformation.contact.name,
        phone: newPatient.insuranceInformation.contact.phone,
        email: newPatient.insuranceInformation.contact.email,
      },
      coverageDetails: newPatient.insuranceInformation.coverageDetails,
      paymentStatus: newPatient.insuranceInformation.paymentStatus,
    },
  };

  return filterObjectByFields(baseObj, fields);
};
