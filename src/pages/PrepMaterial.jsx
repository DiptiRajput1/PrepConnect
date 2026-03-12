import React, { useState } from 'react';
import { Search, Building2, Calendar, Award, BookOpen, Download } from 'lucide-react';
// Yahan hum data import kar rahe hain jo aapne 'campusCompanies.js' mein banaya tha
import { CAMPUS_COMPANIES } from '../data/campusCompanies';

const PrepMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Search filter logic - company name ya role se search karne ke liye
  const filteredCompanies = CAMPUS_COMPANIES.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            <span>Campus Drive Archives</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Prep Material</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed information, eligibility criteria, and preparation resources for companies visiting our campus.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative animate-in fade-in zoom-in duration-500 delay-100">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search company or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-all"
          />
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <div 
              key={company.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Card Header */}
              <div className="p-6 border-b border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 ${company.logoColor || 'bg-blue-600'} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                    {company.name[0]}
                  </div>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                    {company.ctc}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{company.role}</p>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Visited: {company.visitDate}</span>
                </div>
                
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-700 text-xs uppercase tracking-wide mb-1">Eligibility</span>
                    {company.eligibility}
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-700 text-xs uppercase tracking-wide mb-1">Process</span>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      {company.rounds && company.rounds.slice(0, 3).map((round, idx) => (
                        <li key={idx}>{round}</li>
                      ))}
                      {company.rounds && company.rounds.length > 3 && <li>+ {company.rounds.length - 3} more rounds</li>}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Available Resources</h4>
                <div className="space-y-2">
                  {company.resources && company.resources.map((resource, idx) => (
                    <button key={idx} className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors group/btn">
                      {resource}
                      <Download className="w-4 h-4 text-gray-400 group-hover/btn:text-indigo-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-gray-400">No companies found matching "{searchTerm}"</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrepMaterial;