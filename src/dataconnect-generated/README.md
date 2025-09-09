# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyMedications*](#getmymedications)
  - [*ListCaregiversForElderlyProfile*](#listcaregiversforelderlyprofile)
- [**Mutations**](#mutations)
  - [*AddNewVitalSign*](#addnewvitalsign)
  - [*UpdateMedicationNotes*](#updatemedicationnotes)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyMedications
You can execute the `GetMyMedications` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyMedications(): QueryPromise<GetMyMedicationsData, undefined>;

interface GetMyMedicationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyMedicationsData, undefined>;
}
export const getMyMedicationsRef: GetMyMedicationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyMedications(dc: DataConnect): QueryPromise<GetMyMedicationsData, undefined>;

interface GetMyMedicationsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyMedicationsData, undefined>;
}
export const getMyMedicationsRef: GetMyMedicationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyMedicationsRef:
```typescript
const name = getMyMedicationsRef.operationName;
console.log(name);
```

### Variables
The `GetMyMedications` query has no variables.
### Return Type
Recall that executing the `GetMyMedications` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyMedicationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyMedicationsData {
  medications: ({
    id: UUIDString;
    name: string;
    dosage: string;
    frequency: string;
  } & Medication_Key)[];
}
```
### Using `GetMyMedications`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyMedications } from '@dataconnect/generated';


// Call the `getMyMedications()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyMedications();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyMedications(dataConnect);

console.log(data.medications);

// Or, you can use the `Promise` API.
getMyMedications().then((response) => {
  const data = response.data;
  console.log(data.medications);
});
```

### Using `GetMyMedications`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyMedicationsRef } from '@dataconnect/generated';


// Call the `getMyMedicationsRef()` function to get a reference to the query.
const ref = getMyMedicationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyMedicationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.medications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.medications);
});
```

## ListCaregiversForElderlyProfile
You can execute the `ListCaregiversForElderlyProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCaregiversForElderlyProfile(vars: ListCaregiversForElderlyProfileVariables): QueryPromise<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;

interface ListCaregiversForElderlyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListCaregiversForElderlyProfileVariables): QueryRef<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
}
export const listCaregiversForElderlyProfileRef: ListCaregiversForElderlyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCaregiversForElderlyProfile(dc: DataConnect, vars: ListCaregiversForElderlyProfileVariables): QueryPromise<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;

interface ListCaregiversForElderlyProfileRef {
  ...
  (dc: DataConnect, vars: ListCaregiversForElderlyProfileVariables): QueryRef<ListCaregiversForElderlyProfileData, ListCaregiversForElderlyProfileVariables>;
}
export const listCaregiversForElderlyProfileRef: ListCaregiversForElderlyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCaregiversForElderlyProfileRef:
```typescript
const name = listCaregiversForElderlyProfileRef.operationName;
console.log(name);
```

### Variables
The `ListCaregiversForElderlyProfile` query requires an argument of type `ListCaregiversForElderlyProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListCaregiversForElderlyProfileVariables {
  elderlyProfileId: UUIDString;
}
```
### Return Type
Recall that executing the `ListCaregiversForElderlyProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCaregiversForElderlyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListCaregiversForElderlyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCaregiversForElderlyProfile, ListCaregiversForElderlyProfileVariables } from '@dataconnect/generated';

// The `ListCaregiversForElderlyProfile` query requires an argument of type `ListCaregiversForElderlyProfileVariables`:
const listCaregiversForElderlyProfileVars: ListCaregiversForElderlyProfileVariables = {
  elderlyProfileId: ..., 
};

// Call the `listCaregiversForElderlyProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCaregiversForElderlyProfile(listCaregiversForElderlyProfileVars);
// Variables can be defined inline as well.
const { data } = await listCaregiversForElderlyProfile({ elderlyProfileId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCaregiversForElderlyProfile(dataConnect, listCaregiversForElderlyProfileVars);

console.log(data.caregiverRelationships);

// Or, you can use the `Promise` API.
listCaregiversForElderlyProfile(listCaregiversForElderlyProfileVars).then((response) => {
  const data = response.data;
  console.log(data.caregiverRelationships);
});
```

### Using `ListCaregiversForElderlyProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCaregiversForElderlyProfileRef, ListCaregiversForElderlyProfileVariables } from '@dataconnect/generated';

// The `ListCaregiversForElderlyProfile` query requires an argument of type `ListCaregiversForElderlyProfileVariables`:
const listCaregiversForElderlyProfileVars: ListCaregiversForElderlyProfileVariables = {
  elderlyProfileId: ..., 
};

// Call the `listCaregiversForElderlyProfileRef()` function to get a reference to the query.
const ref = listCaregiversForElderlyProfileRef(listCaregiversForElderlyProfileVars);
// Variables can be defined inline as well.
const ref = listCaregiversForElderlyProfileRef({ elderlyProfileId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCaregiversForElderlyProfileRef(dataConnect, listCaregiversForElderlyProfileVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.caregiverRelationships);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.caregiverRelationships);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewVitalSign
You can execute the `AddNewVitalSign` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewVitalSign(): MutationPromise<AddNewVitalSignData, undefined>;

interface AddNewVitalSignRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddNewVitalSignData, undefined>;
}
export const addNewVitalSignRef: AddNewVitalSignRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewVitalSign(dc: DataConnect): MutationPromise<AddNewVitalSignData, undefined>;

interface AddNewVitalSignRef {
  ...
  (dc: DataConnect): MutationRef<AddNewVitalSignData, undefined>;
}
export const addNewVitalSignRef: AddNewVitalSignRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewVitalSignRef:
```typescript
const name = addNewVitalSignRef.operationName;
console.log(name);
```

### Variables
The `AddNewVitalSign` mutation has no variables.
### Return Type
Recall that executing the `AddNewVitalSign` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewVitalSignData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewVitalSignData {
  vitalSign_insert: VitalSign_Key;
}
```
### Using `AddNewVitalSign`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewVitalSign } from '@dataconnect/generated';


// Call the `addNewVitalSign()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewVitalSign();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewVitalSign(dataConnect);

console.log(data.vitalSign_insert);

// Or, you can use the `Promise` API.
addNewVitalSign().then((response) => {
  const data = response.data;
  console.log(data.vitalSign_insert);
});
```

### Using `AddNewVitalSign`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewVitalSignRef } from '@dataconnect/generated';


// Call the `addNewVitalSignRef()` function to get a reference to the mutation.
const ref = addNewVitalSignRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewVitalSignRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.vitalSign_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.vitalSign_insert);
});
```

## UpdateMedicationNotes
You can execute the `UpdateMedicationNotes` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMedicationNotes(vars: UpdateMedicationNotesVariables): MutationPromise<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;

interface UpdateMedicationNotesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMedicationNotesVariables): MutationRef<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
}
export const updateMedicationNotesRef: UpdateMedicationNotesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMedicationNotes(dc: DataConnect, vars: UpdateMedicationNotesVariables): MutationPromise<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;

interface UpdateMedicationNotesRef {
  ...
  (dc: DataConnect, vars: UpdateMedicationNotesVariables): MutationRef<UpdateMedicationNotesData, UpdateMedicationNotesVariables>;
}
export const updateMedicationNotesRef: UpdateMedicationNotesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMedicationNotesRef:
```typescript
const name = updateMedicationNotesRef.operationName;
console.log(name);
```

### Variables
The `UpdateMedicationNotes` mutation requires an argument of type `UpdateMedicationNotesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMedicationNotesVariables {
  id: UUIDString;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateMedicationNotes` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMedicationNotesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMedicationNotesData {
  medication_update?: Medication_Key | null;
}
```
### Using `UpdateMedicationNotes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMedicationNotes, UpdateMedicationNotesVariables } from '@dataconnect/generated';

// The `UpdateMedicationNotes` mutation requires an argument of type `UpdateMedicationNotesVariables`:
const updateMedicationNotesVars: UpdateMedicationNotesVariables = {
  id: ..., 
  notes: ..., // optional
};

// Call the `updateMedicationNotes()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMedicationNotes(updateMedicationNotesVars);
// Variables can be defined inline as well.
const { data } = await updateMedicationNotes({ id: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMedicationNotes(dataConnect, updateMedicationNotesVars);

console.log(data.medication_update);

// Or, you can use the `Promise` API.
updateMedicationNotes(updateMedicationNotesVars).then((response) => {
  const data = response.data;
  console.log(data.medication_update);
});
```

### Using `UpdateMedicationNotes`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMedicationNotesRef, UpdateMedicationNotesVariables } from '@dataconnect/generated';

// The `UpdateMedicationNotes` mutation requires an argument of type `UpdateMedicationNotesVariables`:
const updateMedicationNotesVars: UpdateMedicationNotesVariables = {
  id: ..., 
  notes: ..., // optional
};

// Call the `updateMedicationNotesRef()` function to get a reference to the mutation.
const ref = updateMedicationNotesRef(updateMedicationNotesVars);
// Variables can be defined inline as well.
const ref = updateMedicationNotesRef({ id: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMedicationNotesRef(dataConnect, updateMedicationNotesVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.medication_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.medication_update);
});
```

