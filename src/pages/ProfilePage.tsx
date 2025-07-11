import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Award, Leaf, Package, Gift } from 'lucide-react';

const ProfilePage = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Green Street, Austin, TX 78701',
    joinDate: 'January 2024',
    notifications: {
      email: true,
      sms: false,
      pickup: true,
      rewards: true
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type as keyof typeof prev.notifications]
      }
    }));
  };

  const handleSave = () => {
    updateUser({
      ...user,
      name: formData.name
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(prev => ({
      ...prev,
      name: user.name
    }));
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-green-600" size={40} />
              </div>
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                user.tier === 'Green Champion' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                <Award size={16} className="mr-1" />
                {user.tier}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Eco Points</span>
                  <span className="font-bold text-green-600">{user.credits}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Items Recycled</span>
                  <span className="font-bold text-blue-600">{user.itemsRecycled}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">CO2 Saved</span>
                  <span className="font-bold text-purple-600">{user.co2Saved}kg</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Environmental Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf size={18} />
                  <span className="text-sm">Equivalent to planting 12 trees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={18} />
                  <span className="text-sm">Diverted {user.wasteRecycled}kg from landfills</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={18} />
                  <span className="text-sm">Earned ${(user.credits * 0.01).toFixed(2)} in rewards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <Edit3 size={18} />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save size={16} />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <User size={18} className="text-gray-400" />
                      <span>{formData.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Mail size={18} className="text-gray-400" />
                    <span>{formData.email}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Phone size={18} className="text-gray-400" />
                      <span>{formData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Calendar size={18} className="text-gray-400" />
                    <span>{formData.joinDate}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <MapPin size={18} className="text-gray-400 mt-1" />
                    <span>{formData.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive updates about your recycling activity</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-gray-600">Get text messages for pickup confirmations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Pickup Reminders</h4>
                    <p className="text-sm text-gray-600">Reminders about scheduled pickups</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.pickup}
                      onChange={() => handleNotificationChange('pickup')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Reward Updates</h4>
                    <p className="text-sm text-gray-600">Notifications about earned points and rewards</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.rewards}
                      onChange={() => handleNotificationChange('rewards')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Account Actions</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-blue-600">Change Password</h4>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </button>
                
                <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium text-green-600">Download My Data</h4>
                  <p className="text-sm text-gray-600">Get a copy of your recycling history and data</p>
                </button>
                
                <button className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                  <h4 className="font-medium text-red-600">Delete Account</h4>
                  <p className="text-sm text-gray-600">Permanently delete your account and data</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;