'use client';

import {
  AlertTriangle,
  Car,
  Truck,
  Construction,
  Users,
  Siren,
  OctagonAlert,
  TrafficCone,
  Activity
} from 'lucide-react';

export default function Detection() {
  const detectionTypes = [
    { icon: AlertTriangle, label: 'Incidents & Crashes', color: 'text-red-500' },
    { icon: Activity, label: 'Congestion', color: 'text-orange-500' },
    { icon: Car, label: 'Traffic Jams', color: 'text-yellow-500' },
    { icon: Siren, label: 'Emergency Vehicles', color: 'text-red-600' },
    { icon: Truck, label: 'Disabled Vehicles', color: 'text-gray-500' },
    { icon: OctagonAlert, label: 'First Responders', color: 'text-blue-500' },
    { icon: TrafficCone, label: 'Traffic Stops', color: 'text-orange-400' },
    { icon: Construction, label: 'Construction', color: 'text-yellow-600' },
    { icon: Users, label: 'Pedestrians', color: 'text-green-500' },
  ];

  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-3">
            What We Detect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Detect the Incident. Others Detect the Symptom.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Traffic jams and congestion are symptoms. We see the incident that causes them—in under 10 seconds—and forecast the impact before it happens.
          </p>
        </div>

        {/* Detection Types Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-12">
          {detectionTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-white/10"
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${type.color}`} />
                <p className="text-xs md:text-sm font-medium text-white">{type.label}</p>
              </div>
            );
          })}
        </div>

        {/* Current Data Types */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Current Data</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                Real-time incident alerts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                Traffic flow data
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                Traffic volume counts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A23A] rounded-full"></span>
                Aggregated multi-source intelligence
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#C9A23A]/20 to-[#C9A23A]/5 backdrop-blur-sm rounded-xl p-6 border border-[#C9A23A]/30">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">Predictive Flow</h3>
              <span className="bg-[#C9A23A] text-[#0F172A] text-xs font-bold px-2 py-1 rounded">COMING SOON</span>
            </div>
            <p className="text-gray-300 mb-3">
              Vision-based predictive traffic flow—anticipating conditions in 10-minute intervals, up to 90 minutes ahead.
            </p>
            <p className="text-sm text-gray-400">
              No one else predicts because they don&apos;t see what&apos;s happening. We do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
