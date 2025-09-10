import React from 'react';
import { Plus, Calendar, Clock, MapPin, User } from 'lucide-react';

const Appointments = () => {
  // Mock data - will be replaced with real data from Data Connect
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Smith',
      type: 'Checkup',
      date: 'Tomorrow',
      time: '10:00 AM',
      location: 'Main Street Clinic',
      notes: 'Annual physical examination'
    },
    {
      id: 2,
      doctorName: 'Dr. Johnson',
      type: 'Physical Therapy',
      date: 'Friday',
      time: '2:00 PM',
      location: 'Oak Avenue Hospital',
      notes: 'Follow-up session'
    },
    {
      id: 3,
      doctorName: 'Dr. Williams',
      type: 'Cardiology',
      date: 'Next Monday',
      time: '11:30 AM',
      location: 'Heart Center',
      notes: 'EKG and consultation'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Manage your medical appointments</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4" />
          Schedule Appointment
        </button>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 gap-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <Calendar className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{appointment.doctorName}</h3>
                  <p className="text-gray-600">{appointment.type}</p>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {appointment.date} at {appointment.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {appointment.location}
                    </div>
                  </div>
                  {appointment.notes && (
                    <p className="text-sm text-gray-500 mt-2">{appointment.notes}</p>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="btn btn-outline">Edit</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
