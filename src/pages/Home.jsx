import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, MessageSquare, Compass, Share2 } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto animate-in fade-in zoom-in duration-700">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-bounce">
              <Users className="w-4 h-4" />
              <span>Connecting Students Together</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Learn from real stories. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Share your success.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The premier community for students to explore real interview experiences, exam strategies, and career milestones. Don't just prepare—connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/explore"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Explore Experiences
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link 
                to="/share"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                Share Experience
                <Share2 className="w-5 h-5 text-gray-500" />
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
              <span className="font-bold text-xl">INSIGHTS FROM</span>
              <span className="font-bold text-2xl tracking-tighter italic">Google</span>
              <span className="font-bold text-2xl tracking-tighter italic">Meta</span>
              <span className="font-bold text-2xl tracking-tighter italic">Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect, Share, Grow</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A platform built around the power of shared knowledge and community support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Target}
              title="Real Interview Archives"
              description="Access a massive database of recent interview questions and experiences from top companies."
              color="bg-blue-600"
            />
            <FeatureCard 
              icon={Users}
              title="Find a Mentor"
              description="Connect with seniors and professionals who have already cracked the exams you are preparing for."
              color="bg-indigo-600"
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Community Discussions"
              description="Ask questions, clear doubts, and discuss strategies in our active forums."
              color="bg-orange-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;