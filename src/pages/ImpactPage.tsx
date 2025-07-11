import React from 'react';
import { Leaf, Globe, Recycle, TreePine, Droplets, Zap, Award, TrendingUp } from 'lucide-react';

const ImpactPage = () => {
  const globalStats = {
    totalItemsRecycled: 2347892,
    co2Prevented: 847.2,
    wasteRecycled: 1234.5,
    waterSaved: 45678,
    energySaved: 23456
  };

  const materialBreakdown = [
    { material: 'Electronics', percentage: 35, color: 'bg-blue-500', items: 821763 },
    { material: 'Textiles', percentage: 25, color: 'bg-green-500', items: 586973 },
    { material: 'Packaging', percentage: 20, color: 'bg-yellow-500', items: 469578 },
    { material: 'Furniture', percentage: 12, color: 'bg-purple-500', items: 281747 },
    { material: 'Other', percentage: 8, color: 'bg-gray-500', items: 187831 }
  ];

  const monthlyTrend = [
    { month: 'Jan', items: 180000, co2: 65 },
    { month: 'Feb', items: 195000, co2: 71 },
    { month: 'Mar', items: 210000, co2: 76 },
    { month: 'Apr', items: 225000, co2: 82 },
    { month: 'May', items: 240000, co2: 87 },
    { month: 'Jun', items: 255000, co2: 93 }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Global Environmental Impact</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how Walmart's recycling community is making a real difference for our planet
        </p>
      </div>

      {/* Global Impact Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 text-center">
          <Recycle size={32} className="mx-auto mb-3" />
          <div className="text-2xl font-bold mb-1">{globalStats.totalItemsRecycled.toLocaleString()}</div>
          <div className="text-sm opacity-90">Items Recycled</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center">
          <Globe size={32} className="mx-auto mb-3" />
          <div className="text-2xl font-bold mb-1">{globalStats.co2Prevented} tons</div>
          <div className="text-sm opacity-90">CO2 Prevented</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 text-center">
          <TreePine size={32} className="mx-auto mb-3" />
          <div className="text-2xl font-bold mb-1">{globalStats.wasteRecycled} tons</div>
          <div className="text-sm opacity-90">Waste Recycled</div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg p-6 text-center">
          <Droplets size={32} className="mx-auto mb-3" />
          <div className="text-2xl font-bold mb-1">{globalStats.waterSaved.toLocaleString()} L</div>
          <div className="text-sm opacity-90">Water Saved</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg p-6 text-center">
          <Zap size={32} className="mx-auto mb-3" />
          <div className="text-2xl font-bold mb-1">{globalStats.energySaved.toLocaleString()} kWh</div>
          <div className="text-sm opacity-90">Energy Saved</div>
        </div>
      </div>

      {/* Material Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Recycling by Material Type</h2>
        <div className="space-y-4">
          {materialBreakdown.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium">{item.material}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                <div 
                  className={`${item.color} h-4 rounded-full transition-all duration-1000`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className="w-16 text-sm text-gray-600">{item.percentage}%</div>
              <div className="w-24 text-sm text-gray-500">{item.items.toLocaleString()} items</div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={24} />
            Monthly Recycling Trend
          </h3>
          <div className="space-y-3">
            {monthlyTrend.map((month, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium">{month.month}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{month.items.toLocaleString()} items</span>
                  <span className="text-sm text-green-600">{month.co2}t CO2</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award size={24} />
            Top Recycling Categories
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">📱 Electronics</span>
              <span className="text-blue-600 font-bold">821,763 items</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">👕 Textiles</span>
              <span className="text-green-600 font-bold">586,973 items</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">📦 Packaging</span>
              <span className="text-yellow-600 font-bold">469,578 items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Benefits */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">What This Means for Our Planet</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TreePine size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Forest Protection</h3>
            <p className="opacity-90">
              Equivalent to saving 12,000 trees from being cut down for new materials
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Climate Impact</h3>
            <p className="opacity-90">
              CO2 reduction equivalent to taking 184 cars off the road for a year
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
            <p className="opacity-90">
              Water saved could supply 150 households for an entire month
            </p>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Community Champions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-lg mb-2">Top Recycler</h3>
            <p className="text-gray-600">Sarah M. from Austin</p>
            <p className="text-green-600 font-bold">347 items recycled</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg mb-2">Most CO2 Saved</h3>
            <p className="text-gray-600">Mike R. from Seattle</p>
            <p className="text-blue-600 font-bold">23.4 tons prevented</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Consistency Award</h3>
            <p className="text-gray-600">Lisa K. from Denver</p>
            <p className="text-purple-600 font-bold">52 weeks active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;