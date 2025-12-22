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
            How We&apos;re Different
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-[#C9A23A]">&lt;10 seconds.</span> We detect the incident.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Others detect the symptom—traffic jams, congestion, slowdowns. We see the crash, stall, or hazard that causes them and alert you before anyone else knows.
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

        {/* Speed Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#C9A23A]/20 to-transparent rounded-2xl p-6 md:p-8 border border-[#C9A23A]/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#C9A23A] mb-2">&lt;10s</div>
                <p className="text-xl text-white font-semibold mb-2">Argus AI detection</p>
                <p className="text-gray-400">From incident to alert in your driver&apos;s cab</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Waze</span>
                  <span className="text-gray-500 font-mono">~10 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">INRIX</span>
                  <span className="text-gray-500 font-mono">~6+ min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">TomTom</span>
                  <span className="text-gray-500 font-mono">~16 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Google Maps</span>
                  <span className="text-gray-500 font-mono">Variable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
