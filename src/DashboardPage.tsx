import React from 'react';
import { useUser } from '../context/UserContext';
import { Award, Leaf, Package, TrendingUp, Star, Gift, Calendar, CheckCircle, Recycle } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useUser();

  const recentRecycling = [
    { id: 1, item: 'iPhone 12', points: 45, type: 'Electronics', date: '2024-01-15', status: 'collected', co2: 2.3 },
    { id: 2, item: 'Cotton T-Shirt', points: 12, type: 'Textiles', date: '2024-01-12', status: 'collected', co2: 0.8 },
    { id: 3, item: 'Cardboard Box', points: 8, type: 'Packaging', date: '2024-01-10', status: 'pending', co2: 0.5 },
    { id: 4, item: 'Plastic Bottles (5)', points: 15, type: 'Packaging', date: '2024-01-08', status: 'collected', co2: 1.2 },
  ];

  const badges = [
    { name: 'First Recycle', icon: '🎯', earned: true, description: 'Completed your first recycling' },
    { name: 'Eco Warrior', icon: '🌱', earned: true, description: 'Recycled 10 items' },
    { name: 'Tech Recycler', icon: '💻', earned: true, description: 'Recycled 5 electronics' },
    { name: 'Textile Hero', icon: '👕', earned: false, description: 'Recycle 10 clothing items' },
    { name: 'Carbon Saver', icon: '🌍', earned: true, description: 'Prevented 50kg CO2 emissions' },
    { name: 'Green Champion', icon: '⭐', earned: false, description: 'Reach Platinum tier status' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Eco Starter': return 'text-green-600 bg-green-100';
      case 'Green Champion': return 'text-blue-600 bg-blue-100';
      case 'Eco Master': return 'text-yellow-600 bg-yellow-100';
      case 'Planet Guardian': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-gray-600">Track your recycling impact and environmental contributions</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Impact Score</p>
              <p className="text-2xl font-bold text-green-600">{user.totalImpact}</p>
            </div>
            <Leaf className="text-green-600" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Items Recycled</p>
              <p className="text-2xl font-bold text-blue-600">{user.itemsRecycled}</p>
            </div>
            <Package className="text-blue-600" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Eco Points</p>
              <p className="text-2xl font-bold text-purple-600">{user.credits}</p>
            </div>
            <Gift className="text-purple-600" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tier Status</p>
              <p className={`text-lg font-bold px-3 py-1 rounded-full ${getTierColor(user.tier)}`}>
                {user.tier}
              </p>
            </div>
            <Award className="text-yellow-600" size={32} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Recent Recycling */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={24} />
            Recent Recycling
          </h2>
          <div className="space-y-4">
            {recentRecycling.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'collected' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <p className="font-semibold">{item.item}</p>
                    <p className="text-sm text-gray-600">{item.date} • {item.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{item.points} pts</p>
                  <p className="text-sm text-gray-600">{item.co2}kg CO2</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star size={24} />
            Badges & Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                badge.earned 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="text-center">
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                  <p className="text-xs text-gray-600">{badge.description}</p>
                  {badge.earned && (
                    <CheckCircle className="text-green-600 mx-auto mt-2" size={16} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Environmental Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{user.co2Saved} kg</div>
            <div className="text-sm opacity-90">CO2 Emissions Prevented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{user.wasteRecycled} kg</div>
            <div className="text-sm opacity-90">Waste Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{user.itemsRecycled}</div>
            <div className="text-sm opacity-90">Items Diverted from Landfill</div>
          </div>
        </div>
      </div>

      {/* Tier Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Progress to Next Tier</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Current: {user.tier}</span>
            <span>Next: Eco Master</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-600">
            Recycle 7 more items to reach Eco Master tier and unlock 25% bonus points!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;