import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Leaf, Award, Truck, Camera, Globe, TreePine } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Turn Your Waste Into 
                <span className="text-yellow-400"> Walmart Rewards</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Join Walmart's circular economy initiative. Recycle your used products responsibly 
                and earn Eco Points for sustainable shopping. Together, we're building a zero-waste future.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/upload" 
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2"
                >
                  Start Recycling <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/impact" 
                  className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
                >
                  View Impact
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="text-green-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">2.3M+ Items</h3>
                  <p className="opacity-80">Recycled this year</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">847 tons</div>
                    <div className="text-sm opacity-80">CO2 prevented</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Recycling rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Recycling Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform makes it easy to recycle responsibly and earn rewards
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="text-green-600" size={32} />,
                title: "Upload Photos",
                description: "Take pictures of items you want to recycle using our smart scanner"
              },
              {
                icon: <Award className="text-blue-600" size={32} />,
                title: "AI Assessment",
                description: "Our AI identifies materials and calculates recycling value"
              },
              {
                icon: <Leaf className="text-yellow-600" size={32} />,
                title: "Earn Eco Points",
                description: "Get rewarded with points based on environmental impact"
              },
              {
                icon: <Truck className="text-purple-600" size={32} />,
                title: "Free Collection",
                description: "We'll collect your items or you can drop them at any Walmart"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recyclable Items */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Can You Recycle?</h2>
            <p className="text-xl text-gray-600">
              We accept a wide range of materials for responsible recycling
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electronics', icon: '📱', description: 'Phones, tablets, laptops' },
              { name: 'Clothing', icon: '👕', description: 'Textiles and fabrics' },
              { name: 'Packaging', icon: '📦', description: 'Cardboard, plastic, glass' },
              { name: 'Furniture', icon: '🪑', description: 'Wood, metal components' },
              { name: 'Toys', icon: '🧸', description: 'Plastic and electronic toys' },
              { name: 'Appliances', icon: '🏠', description: 'Small household items' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Recycle with Walmart?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Leaf className="text-green-600" size={24} />,
                    title: "Environmental Impact",
                    description: "Every item recycled helps reduce landfill waste and conserves natural resources"
                  },
                  {
                    icon: <Award className="text-blue-600" size={24} />,
                    title: "Earn Eco Points",
                    description: "Get rewarded for sustainable behavior with points you can use for shopping"
                  },
                  {
                    icon: <Globe className="text-purple-600" size={24} />,
                    title: "Circular Economy",
                    description: "Be part of a closed-loop system that transforms waste into new products"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Eco Champion</h3>
                <p className="text-gray-600">Maria S. - Austin, TX</p>
              </div>
              <div className="bg-white rounded-lg p-6 mb-6">
                <p className="text-gray-700 italic">
                  "I've recycled over 50 items this year and earned enough points for my weekly groceries. 
                  It feels amazing to contribute to a sustainable future!"
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">52</div>
                  <div className="text-sm text-gray-500">Items Recycled</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-gray-500">Eco Points</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">23kg</div>
                  <div className="text-sm text-gray-500">CO2 Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of customers who are already creating positive environmental impact
          </p>
          <Link 
            to="/upload" 
            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 text-lg"
          >
            Start Recycling Today <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;