// import React, { useState } from 'react';
// import { Search, Clock, User, ThumbsUp, ArrowRight } from 'lucide-react';

// const INITIAL_EXPERIENCES = [
//   {
//     id: 1,
//     company: "Google",
//     role: "Frontend Engineer",
//     type: "Interview",
//     batch: "2024",
//     verdict: "Selected",
//     difficulty: "Hard",
//     date: "2024-03-10",
//     author: "Alex Chen",
//     content: "The process started with a phone screen focusing on basic DS/Algo. The onsite loop had 4 rounds: 1 system design (designing a news feed), 2 coding rounds (graphs and DP), and 1 behavioral (Googliness). Key tip: clarifying constraints is as important as the solution.",
//     likes: 124,
//   },
//   {
//     id: 2,
//     company: "Amazon",
//     role: "SDE Intern",
//     type: "Online Assessment",
//     batch: "2025",
//     verdict: "Rejected",
//     difficulty: "Medium",
//     date: "2024-03-12",
//     author: "Sarah Miller",
//     content: "Just finished the OA. Two questions: 1. Sliding window problem (medium). 2. A variation of 'Number of Islands' (medium-hard). Make sure you are comfortable with your IDE as no autocomplete was available.",
//     likes: 89,
//   },
//   {
//     id: 3,
//     company: "McKinsey",
//     role: "Business Analyst",
//     type: "Case Study",
//     batch: "2024",
//     verdict: "Selected",
//     difficulty: "Hard",
//     date: "2024-03-08",
//     author: "David Park",
//     content: "The case was about a retail client looking to expand into Asia. It required a lot of market sizing estimation. Practice mental math! The interviewer was very collaborative.",
//     likes: 56,
//   }
// ];

// const Explore = () => {
//   const [experiences, setExperiences] = useState(INITIAL_EXPERIENCES);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('newest'); 
  
//   // Filter and Sort Logic
//   const filteredExperiences = experiences.filter(exp => {
//     const matchesSearch = 
//       exp.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       exp.content.toLowerCase().includes(searchTerm.toLowerCase());
      
//     return matchesSearch;
//   }).sort((a, b) => {
//     if (sortBy === 'likes') return b.likes - a.likes;
//     return new Date(b.date) - new Date(a.date);
//   });

//   // Helpers for Badges
//   const getVerdictBadge = (verdict) => {
//     if (verdict === 'Selected') return 'bg-green-100 text-green-700 border-green-200';
//     if (verdict === 'Rejected') return 'bg-red-100 text-red-700 border-red-200';
//     return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//   };

//   const getDifficultyColor = (diff) => {
//     if (diff === 'Hard') return 'text-red-600 border-red-200 bg-red-50';
//     if (diff === 'Medium') return 'text-orange-600 border-orange-200 bg-orange-50';
//     return 'text-green-600 border-green-200 bg-green-50';
//   };

//   return (
//     <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Experiences</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Browse real stories from batchmates and seniors. Filter by company, role, or verdict to find exactly what you need.
//           </p>
//         </div>

//         {/* Controls Bar */}
//         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-20 z-40 transition-shadow hover:shadow-md">
          
//           {/* Search */}
//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input 
//               type="text" 
//               placeholder="Search companies, roles..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//             />
//           </div>

//           <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
//              {/* Sort Dropdown */}
//             <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
//               <Clock className="w-4 h-4 text-gray-500" />
//               <select 
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="bg-transparent border-none outline-none text-sm font-medium text-gray-700 cursor-pointer"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="likes">Most Popular</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Feed Grid */}
//         <div className="grid grid-cols-1 gap-6">
//           {filteredExperiences.length > 0 ? (
//             filteredExperiences.map((exp, index) => (
//               <div 
//                 key={exp.id} 
//                 className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-md group animate-in fade-in slide-in-from-bottom-2 duration-500"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
//                   <div className="flex gap-4 items-center">
//                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm shrink-0">
//                       {exp.company[0]}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
//                         {exp.company}
//                       </h3>
//                       <p className="text-gray-500 text-sm flex items-center gap-2">
//                         {exp.role} 
//                         <span className="w-1 h-1 bg-gray-400 rounded-full"></span> 
//                         Batch {exp.batch}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Badges */}
//                   <div className="flex flex-wrap gap-2">
//                     <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getVerdictBadge(exp.verdict)}`}>
//                       {exp.verdict}
//                     </div>
//                     <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-600 border border-gray-200 shadow-sm">
//                       {exp.type}
//                     </div>
//                     <div className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${getDifficultyColor(exp.difficulty)}`}>
//                       {exp.difficulty}
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
//                   {exp.content}
//                 </p>

//                 <div className="flex items-center justify-between border-t border-blue-200 pt-4">
//                   <div className="flex items-center gap-2 text-gray-500 text-sm">
//                     <User className="w-4 h-4" />
//                     <span>{exp.author} • {exp.date}</span>
//                   </div>
//                   <div className="flex gap-4">
//                     <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors">
//                       <ThumbsUp className="w-4 h-4" />
//                       <span className="text-sm font-medium">{exp.likes}</span>
//                     </button>
//                     <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm">
//                       Read More <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
//               <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//               <h3 className="text-xl font-bold text-gray-900">No experiences found</h3>
//               <p className="text-gray-500">Try adjusting your search or filters.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;



import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Search, Loader2, User, Clock } from 'lucide-react';

const Explore = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Page load hote hi data fetch karein
  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      // Database se 'experiences' table ka saara data maango
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('created_at', { ascending: false }); // Naya post sabse upar dikhega

      if (error) throw error;
      setExperiences(data || []);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Search Logic: Company ya Role ke naam se dhoondo
  const filteredData = experiences.filter(exp => 
    exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Badge Colors Helper Functions
  const getVerdictColor = (v) => {
    if (v === 'Selected') return 'bg-green-100 text-green-700 border-green-200';
    if (v === 'Rejected') return 'bg-red-100 text-red-700 border-red-200';
    return 'bg-yellow-100 text-yellow-700 border-yellow-200';
  };

  const getDifficultyColor = (d) => {
    if (d === 'Hard') return 'bg-red-50 text-red-600 border-red-200';
    if (d === 'Medium') return 'bg-orange-50 text-orange-600 border-orange-200';
    return 'bg-green-50 text-green-600 border-green-200';
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Search Bar */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Experiences</h2>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by Company or Role..." 
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Main Content Area */}
        {loading ? (
          <div className="flex justify-center h-64 items-center">
            <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
          </div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-20 text-gray-500 border-2 border-dashed border-gray-200 rounded-2xl">
            <p className="text-lg">No experiences found yet.</p>
            <p className="text-sm mt-2">Be the first to share your journey! 🚀</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredData.map((exp) => (
              <div key={exp.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                
                {/* Card Header: Company, Role & Badges */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                  <div className="flex gap-4 items-center">
                    {/* Company Initial Logo */}
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl uppercase shrink-0">
                      {exp.company[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{exp.company}</h3>
                      <p className="text-gray-500 text-sm font-medium">{exp.role} • Batch {exp.batch}</p>
                    </div>
                  </div>
                  
                  {/* Status Badges */}
                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getVerdictColor(exp.verdict)}`}>
                      {exp.verdict}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getDifficultyColor(exp.difficulty)}`}>
                      {exp.difficulty}
                    </span>
                  </div>
                </div>
                
                {/* Experience Content */}
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">
                  {exp.content}
                </div>

                {/* Footer: User & Date */}
                <div className="flex justify-between items-center border-t border-gray-50 pt-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> 
                    <span>{exp.author_email ? exp.author_email.split('@')[0] : 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 
                    <span>{new Date(exp.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;