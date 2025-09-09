const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'elderx',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const addNewVitalSignRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewVitalSign');
}
addNewVitalSignRef.operationName = 'AddNewVitalSign';
exports.addNewVitalSignRef = addNewVitalSignRef;

exports.addNewVitalSign = function addNewVitalSign(dc) {
  return executeMutation(addNewVitalSignRef(dc));
};

const getMyMedicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyMedications');
}
getMyMedicationsRef.operationName = 'GetMyMedications';
exports.getMyMedicationsRef = getMyMedicationsRef;

exports.getMyMedications = function getMyMedications(dc) {
  return executeQuery(getMyMedicationsRef(dc));
};

const updateMedicationNotesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMedicationNotes', inputVars);
}
updateMedicationNotesRef.operationName = 'UpdateMedicationNotes';
exports.updateMedicationNotesRef = updateMedicationNotesRef;

exports.updateMedicationNotes = function updateMedicationNotes(dcOrVars, vars) {
  return executeMutation(updateMedicationNotesRef(dcOrVars, vars));
};

const listCaregiversForElderlyProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCaregiversForElderlyProfile', inputVars);
}
listCaregiversForElderlyProfileRef.operationName = 'ListCaregiversForElderlyProfile';
exports.listCaregiversForElderlyProfileRef = listCaregiversForElderlyProfileRef;

exports.listCaregiversForElderlyProfile = function listCaregiversForElderlyProfile(dcOrVars, vars) {
  return executeQuery(listCaregiversForElderlyProfileRef(dcOrVars, vars));
};
