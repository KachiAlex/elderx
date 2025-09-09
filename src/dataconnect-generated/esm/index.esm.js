import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'elderx',
  location: 'us-central1'
};

export const addNewVitalSignRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewVitalSign');
}
addNewVitalSignRef.operationName = 'AddNewVitalSign';

export function addNewVitalSign(dc) {
  return executeMutation(addNewVitalSignRef(dc));
}

export const getMyMedicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyMedications');
}
getMyMedicationsRef.operationName = 'GetMyMedications';

export function getMyMedications(dc) {
  return executeQuery(getMyMedicationsRef(dc));
}

export const updateMedicationNotesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMedicationNotes', inputVars);
}
updateMedicationNotesRef.operationName = 'UpdateMedicationNotes';

export function updateMedicationNotes(dcOrVars, vars) {
  return executeMutation(updateMedicationNotesRef(dcOrVars, vars));
}

export const listCaregiversForElderlyProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCaregiversForElderlyProfile', inputVars);
}
listCaregiversForElderlyProfileRef.operationName = 'ListCaregiversForElderlyProfile';

export function listCaregiversForElderlyProfile(dcOrVars, vars) {
  return executeQuery(listCaregiversForElderlyProfileRef(dcOrVars, vars));
}

