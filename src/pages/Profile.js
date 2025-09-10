import React from 'react';
import { User, Mail, Phone, Calendar, Heart, Shield } from 'lucide-react';

const Profile = () => {
  // Mock data - will be replaced with real data from Data Connect
  const profile = {
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    userType: 'elderly',
    dateOfBirth: '1950-05-15',
    emergencyContact: {
      name: 'Alice Johnson',
      phone: '555-1234'
    },
    primaryCareDoctor: 'Dr. Smith',
    allergies: 'Penicillin, Shellfish',
    medicalConditions: 'Hypertension, Diabetes Type 2'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">Manage your personal and medical information</p>
      </div>

      {/* Profile Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-900">{profile.displayName}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium text-gray-900">{profile.dateOfBirth}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="font-medium text-gray-900 capitalize">{profile.userType}</p>
              </div>
            </div>
          </div>
          <button className="btn btn-outline mt-4">Edit Personal Info</button>
        </div>

        {/* Medical Information */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Primary Care Doctor</p>
              <p className="font-medium text-gray-900">{profile.primaryCareDoctor}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Allergies</p>
              <p className="font-medium text-gray-900">{profile.allergies}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Medical Conditions</p>
              <p className="font-medium text-gray-900">{profile.medicalConditions}</p>
            </div>
          </div>
          <button className="btn btn-outline mt-4">Edit Medical Info</button>
        </div>

        {/* Emergency Contact */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-900">{profile.emergencyContact.name}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">{profile.emergencyContact.phone}</p>
              </div>
            </div>
          </div>
          <button className="btn btn-outline mt-4">Edit Emergency Contact</button>
        </div>

        {/* Health Summary */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Medications</span>
              <span className="font-semibold text-gray-900">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Upcoming Appointments</span>
              <span className="font-semibold text-gray-900">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Vital Signs This Week</span>
              <span className="font-semibold text-gray-900">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Medication Adherence</span>
              <span className="font-semibold text-green-600">95%</span>
            </div>
          </div>
          <button className="btn btn-primary mt-4">
            <Heart className="h-4 w-4 mr-2" />
            View Health Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
