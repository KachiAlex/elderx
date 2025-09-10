import React from 'react';
import { Plus, Heart, Activity, Thermometer, Droplets } from 'lucide-react';

const VitalSigns = () => {
  // Mock data - will be replaced with real data from Data Connect
  const vitalSigns = [
    {
      id: 1,
      type: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      recordedAt: '2 hours ago',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      id: 2,
      type: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      recordedAt: '1 hour ago',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'Temperature',
      value: '98.6',
      unit: '°F',
      recordedAt: '30 min ago',
      icon: Thermometer,
      color: 'text-orange-600'
    },
    {
      id: 4,
      type: 'Weight',
      value: '165',
      unit: 'lbs',
      recordedAt: '1 day ago',
      icon: Droplets,
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vital Signs</h1>
          <p className="text-gray-600">Track and monitor your health metrics</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4" />
          Record Vital Sign
        </button>
      </div>

      {/* Vital Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vitalSigns.map((vital) => {
          const Icon = vital.icon;
          return (
            <div key={vital.id} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{vital.type}</p>
                  <p className="text-2xl font-bold text-gray-900">{vital.value}</p>
                  <p className="text-sm text-gray-500">{vital.unit}</p>
                </div>
                <Icon className={`h-8 w-8 ${vital.color}`} />
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">Last recorded: {vital.recordedAt}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Records */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Records</h2>
        <div className="space-y-3">
          {vitalSigns.map((vital) => {
            const Icon = vital.icon;
            return (
              <div key={vital.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Icon className={`h-5 w-5 ${vital.color} mr-3`} />
                  <div>
                    <p className="font-medium text-gray-900">{vital.type}</p>
                    <p className="text-sm text-gray-500">{vital.recordedAt}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{vital.value}</p>
                  <p className="text-xs text-gray-500">{vital.unit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;
