import { AddNewVitalSignData, GetMyMedicationsData, UpdateMedicationNotesData, UpdateMedicationNotesVariables, ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewVitalSign(options?: useDataConnectMutationOptions<AddNewVitalSignData, FirebaseError, void>): UseDataConnectMutationResult<AddNewVitalSignData, undefined>;
export function useAddNewVitalSign(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewVitalSignData, FirebaseError, void>): UseDataConnectMutationResult<AddNewVitalSignData, undefined>;

export function useGetMyMedications(options?: useDataConnectQueryOptions<GetMyMedicationsData>): UseDataConnectQueryResult<GetMyMedicationsData, undefined>;
export function useGetMyMedications(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyMedicationsData>): UseDataConnectQueryResult<GetMyMedicationsData, undefined>;

export function useUpdateMedicationNotes(options?: useDataConnectMutationOptions<UpdateMedicationNotesData, FirebaseError, UpdateMedicationNotesVariables>): UseDataConnectMutationResult<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
export function useUpdateMedicationNotes(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMedicationNotesData, FirebaseError, UpdateMedicationNotesVariables>): UseDataConnectMutationResult<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;

export function useListCaregiversForElderlyProfile(vars: ListCaregiversForElderlyProfileVariables, options?: useDataConnectQueryOptions<ListCaregiversForElderlyProfileData>): UseDataConnectQueryResult<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
export function useListCaregiversForElderlyProfile(dc: DataConnect, vars: ListCaregiversForElderlyProfileVariables, options?: useDataConnectQueryOptions<ListCaregiversForElderlyProfileData>): UseDataConnectQueryResult<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
