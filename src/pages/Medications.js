import React from 'react';
import { Plus, Pill, Clock, CheckCircle, XCircle } from 'lucide-react';

const Medications = () => {
  // Mock data - will be replaced with real data from Data Connect
  const medications = [
    {
      id: 1,
      name: 'Aspirin',
      dosage: '100mg',
      frequency: 'Daily',
      instructions: 'Take with food',
      nextDose: '8:00 AM',
      taken: true
    },
    {
      id: 2,
      name: 'Vitamin D',
      dosage: '2000IU',
      frequency: 'Weekly',
      instructions: 'Take in the morning',
      nextDose: '9:00 AM',
      taken: false
    },
    {
      id: 3,
      name: 'Blood Pressure Medication',
      dosage: '10mg',
      frequency: 'Twice Daily',
      instructions: 'Take with water',
      nextDose: '2:00 PM',
      taken: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medications</h1>
          <p className="text-gray-600">Manage your medications and track doses</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4" />
          Add Medication
        </button>
      </div>

      {/* Medications List */}
      <div className="grid grid-cols-1 gap-4">
        {medications.map((medication) => (
          <div key={medication.id} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Pill className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{medication.name}</h3>
                  <p className="text-gray-600">{medication.dosage} • {medication.frequency}</p>
                  <p className="text-sm text-gray-500">{medication.instructions}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Next Dose</p>
                  <p className="font-medium text-gray-900">{medication.nextDose}</p>
                </div>
                <div className="flex items-center">
                  {medication.taken ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <button className="btn btn-outline">
                  {medication.taken ? 'Mark as Missed' : 'Mark as Taken'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medications;
