import React from 'react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Analytics chart will be displayed here</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {['Product A', 'Product B', 'Product C'].map((product) => (
              <div key={product} className="flex justify-between items-center">
                <span className="text-gray-600">{product}</span>
                <span className="text-gray-900 font-medium">$1,234</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">User Statistics</h3>
          <div className="space-y-4">
            {[
              { label: 'Active Users', value: '1,234' },
              { label: 'New Signups', value: '123' },
              { label: 'Conversion Rate', value: '5.2%' },
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between items-center">
                <span className="text-gray-600">{stat.label}</span>
                <span className="text-gray-900 font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;