import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewVitalSignData {
  vitalSign_insert: VitalSign_Key;
}

export interface Appointment_Key {
  id: UUIDString;
  __typename?: 'Appointment_Key';
}

export interface CaregiverRelationship_Key {
  caregiverId: UUIDString;
  elderlyProfileId: UUIDString;
  __typename?: 'CaregiverRelationship_Key';
}

export interface DoseLog_Key {
  id: UUIDString;
  __typename?: 'DoseLog_Key';
}

export interface ElderlyProfile_Key {
  id: UUIDString;
  __typename?: 'ElderlyProfile_Key';
}

export interface GetMyMedicationsData {
  medications: ({
    id: UUIDString;
    name: string;
    dosage: string;
    frequency: string;
  } & Medication_Key)[];
}

export interface ListCaregiversForElderlyProfileData {
  caregiverRelationships: ({
    caregiver: {
      id: UUIDString;
      displayName: string;
      email?: string | null;
    } & User_Key;
      accessLevel?: string | null;
  })[];
}

export interface ListCaregiversForElderlyProfileVariables {
  elderlyProfileId: UUIDString;
}

export interface Medication_Key {
  id: UUIDString;
  __typename?: 'Medication_Key';
}

export interface UpdateMedicationNotesData {
  medication_update?: Medication_Key | null;
}

export interface UpdateMedicationNotesVariables {
  id: UUIDString;
  notes?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface VitalSign_Key {
  id: UUIDString;
  __typename?: 'VitalSign_Key';
}

interface AddNewVitalSignRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddNewVitalSignData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<AddNewVitalSignData, undefined>;
  operationName: string;
}
export const addNewVitalSignRef: AddNewVitalSignRef;

export function addNewVitalSign(): MutationPromise<AddNewVitalSignData, undefined>;
export function addNewVitalSign(dc: DataConnect): MutationPromise<AddNewVitalSignData, undefined>;

interface GetMyMedicationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyMedicationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyMedicationsData, undefined>;
  operationName: string;
}
export const getMyMedicationsRef: GetMyMedicationsRef;

export function getMyMedications(): QueryPromise<GetMyMedicationsData, undefined>;
export function getMyMedications(dc: DataConnect): QueryPromise<GetMyMedicationsData, undefined>;

interface UpdateMedicationNotesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMedicationNotesVariables): MutationRef<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMedicationNotesVariables): MutationRef<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
  operationName: string;
}
export const updateMedicationNotesRef: UpdateMedicationNotesRef;

export function updateMedicationNotes(vars: UpdateMedicationNotesVariables): MutationPromise<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
export function updateMedicationNotes(dc: DataConnect, vars: UpdateMedicationNotesVariables): MutationPromise<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;

interface ListCaregiversForElderlyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListCaregiversForElderlyProfileVariables): QueryRef<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListCaregiversForElderlyProfileVariables): QueryRef<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
  operationName: string;
}
export const listCaregiversForElderlyProfileRef: ListCaregiversForElderlyProfileRef;

export function listCaregiversForElderlyProfile(vars: ListCaregiversForElderlyProfileVariables): QueryPromise<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
export function listCaregiversForElderlyProfile(dc: DataConnect, vars: ListCaregiversForElderlyProfileVariables): QueryPromise<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;

