import React, { useState } from 'react';
import { Package, Check, Leaf, Gift, Truck, Recycle, MapPin, Calendar } from 'lucide-react';
import { useUser } from '../context/UserContext';

const UploadPage = () => {
  const { user, updateUser } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    brand: '',
    condition: '',
    description: '',
    quantity: 1,
    address: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitRequest = () => {
    // Simulate request submission
    setStep(2);
  };

  const categories = [
    'Electronics', 'Clothing & Textiles', 'Packaging Materials', 
    'Furniture', 'Toys', 'Small Appliances', 'Books & Paper', 'Other'
  ];

  const conditions = [
    'Excellent - Like new',
    'Good - Minor wear',
    'Fair - Noticeable wear but functional',
    'Poor - Damaged but recyclable'
  ];

  if (step === 1) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Request Product Pickup</h1>
            <p className="text-xl text-gray-600">Submit a recycling request and we'll collect your items for proper recycling</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Package className="text-green-600" size={24} />
                  Product Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      placeholder="e.g., iPhone 12, Cotton T-shirt, Cardboard boxes"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand (if applicable)</label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="e.g., Apple, Nike, Samsung"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Provide additional details about the item(s), materials, size, etc."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Truck className="text-blue-600" size={24} />
                  Pickup Details
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address for pickup"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your contact number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-2">
                    <Gift className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-1">Eco Points Reward</h3>
                      <p className="text-sm text-yellow-700">
                        Points will be credited to your account after our team collects and processes your items. 
                        The final points depend on the recyclability and condition of the materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-green-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-green-800">Recycling Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">✅ What We Accept</h3>
                <ul className="space-y-2 text-sm text-green-600">
                  <li>• Electronics (phones, laptops, tablets)</li>
                  <li>• Textiles and clothing items</li>
                  <li>• Packaging materials (cardboard, plastic)</li>
                  <li>• Small furniture and home items</li>
                  <li>• Toys and games</li>
                  <li>• Books and paper products</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-3">❌ What We Don't Accept</h3>
                <ul className="space-y-2 text-sm text-red-600">
                  <li>• Hazardous materials or chemicals</li>
                  <li>• Large appliances (refrigerators, washers)</li>
                  <li>• Broken glass or sharp objects</li>
                  <li>• Food waste or perishables</li>
                  <li>• Medical or pharmaceutical items</li>
                  <li>• Automotive parts or fluids</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={submitRequest}
            disabled={!formData.category || !formData.productName || !formData.address || !formData.phone}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg"
            >
              Submit Pickup Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={40} />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Request Submitted Successfully!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for choosing to recycle with Walmart. Your pickup request has been received and is being processed.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-blue-800 mb-4">What Happens Next?</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium">Request Review</p>
                    <p className="text-sm text-gray-600">Our team will review your request within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium">Pickup Scheduling</p>
                    <p className="text-sm text-gray-600">We'll contact you to confirm pickup date and time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium">Item Collection</p>
                    <p className="text-sm text-gray-600">Our team will collect your items at the scheduled time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium">Points Credit</p>
                    <p className="text-sm text-gray-600">Eco Points will be credited after processing your items</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="text-green-600" size={24} />
                <span className="font-semibold text-green-800">Eco Points Information</span>
              </div>
              <p className="text-sm text-green-700">
                The number of Eco Points you'll receive depends on the type, condition, and recyclability of your items. 
                Points typically range from 5-50 per item and will be visible in your dashboard once credited.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">
                <p><strong>Request ID:</strong> WR-{Date.now().toString().slice(-6)}</p>
                <p><strong>Submitted:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Status:</strong> Under Review</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Submit Another Request
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="flex-1 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default UploadPage;