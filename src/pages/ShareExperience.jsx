// import React, { useState } from 'react';
// import { Share2, Loader2, Send, CheckCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const ShareExperience = () => {
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     company: '',
//     role: '',
//     type: 'Interview',
//     batch: '2025',
//     verdict: 'Selected',
//     difficulty: 'Medium',
//     content: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // In a real app, this is where you would POST to your database
//     console.log("Submitting experience:", formData);

//     // Simulate network delay
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setStep(2);
//     }, 1000);
//   };

//   return (
//     <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
//       <div className="max-w-3xl mx-auto px-4">
//         {step === 1 ? (
//           <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
//                 <Share2 className="w-4 h-4" />
//                 <span>Share Your Journey</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">Experience Details</h2>
//               <p className="text-gray-600 mt-2">Fill out the details below to help the community.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Row 1: Company & Role */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     placeholder="e.g. Amazon"
//                     value={formData.company}
//                     onChange={e => setFormData({...formData, company: e.target.value})}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Job Role</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     placeholder="e.g. SDE Intern"
//                     value={formData.role}
//                     onChange={e => setFormData({...formData, role: e.target.value})}
//                   />
//                 </div>
//               </div>

//               {/* Row 2: Batch, Verdict, Difficulty */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                  <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Batch</label>
//                   <select
//                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition-all"
//                     value={formData.batch}
//                     onChange={e => setFormData({...formData, batch: e.target.value})}
//                   >
//                     <option>2023</option>
//                     <option>2024</option>
//                     <option>2025</option>
//                     <option>2026</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Verdict</label>
//                   <select
//                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition-all"
//                     value={formData.verdict}
//                     onChange={e => setFormData({...formData, verdict: e.target.value})}
//                   >
//                     <option>Selected</option>
//                     <option>Rejected</option>
//                     <option>Pending</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Difficulty</label>
//                   <select
//                     className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition-all"
//                     value={formData.difficulty}
//                     onChange={e => setFormData({...formData, difficulty: e.target.value})}
//                   >
//                     <option>Easy</option>
//                     <option>Medium</option>
//                     <option>Hard</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Experience</label>
//                 <textarea
//                   required
//                   rows={8}
//                   className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all"
//                   placeholder="Describe the interview rounds, questions asked, and your overall experience..."
//                   value={formData.content}
//                   onChange={e => setFormData({...formData, content: e.target.value})}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
//                 {isSubmitting ? 'Publishing...' : 'Publish Experience'}
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 text-center animate-in zoom-in duration-300">
//             <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <CheckCircle className="w-10 h-10" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Published!</h2>
//             <p className="text-gray-600 mb-8 max-w-md mx-auto">
//               Thank you for contributing. Your experience has been added to the explore feed with all the details.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => {
//                   setStep(1);
//                   setFormData({ company: '', role: '', type: 'Interview', batch: '2025', verdict: 'Selected', difficulty: 'Medium', content: '' });
//                 }}
//                 className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
//               >
//                 Share Another
//               </button>
//               <button
//                 onClick={() => navigate('/explore')}
//                 className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
//               >
//                 Go to Feed
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShareExperience;



import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Loader2, Share2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShareExperience = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    batch: '2025',
    verdict: 'Selected',
    difficulty: 'Medium',
    content: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Current User ka email nikalo (Optional)
    const { data: { user } } = await supabase.auth.getUser();
    const userEmail = user ? user.email : 'Anonymous';

    // 2. Data Supabase mein daalo
    const { error } = await supabase
      .from('experiences')
      .insert([
        { ...formData, author_email: userEmail }
      ]);

    if (error) {
      alert("Error saving: " + error.message);
    } else {
      setStep(2); // Success screen dikhao
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen px-4">
      <div className="max-w-3xl mx-auto">
        {step === 1 ? (
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Share2 className="w-4 h-4" />
                <span>Share Your Journey</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Experience Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Company Name (e.g. Amazon)" className="p-3 border rounded-xl w-full" 
                  required onChange={e => setFormData({...formData, company: e.target.value})} />
                <input type="text" placeholder="Role (e.g. SDE Intern)" className="p-3 border rounded-xl w-full" 
                  required onChange={e => setFormData({...formData, role: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <select className="p-3 border rounded-xl w-full" onChange={e => setFormData({...formData, batch: e.target.value})}>
                  <option>2024</option><option>2025</option><option>2026</option>
                </select>
                <select className="p-3 border rounded-xl w-full" onChange={e => setFormData({...formData, verdict: e.target.value})}>
                  <option>Selected</option><option>Rejected</option><option>Pending</option>
                </select>
                <select className="p-3 border rounded-xl w-full" onChange={e => setFormData({...formData, difficulty: e.target.value})}>
                  <option>Easy</option><option>Medium</option><option>Hard</option>
                </select>
              </div>

              <textarea rows="8" placeholder="Describe the rounds, questions asked, and your experience..." className="p-4 border rounded-xl w-full resize-none"
                required onChange={e => setFormData({...formData, content: e.target.value})}></textarea>

              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold flex justify-center hover:bg-blue-700 transition-colors">
                {loading ? <Loader2 className="animate-spin" /> : <><Send className="mr-2 h-5 w-5" /> Publish Experience</>}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-4"><CheckCircle className="w-16 h-16 text-green-500" /></div>
            <h2 className="text-3xl font-bold mb-4">Published Successfully! 🎉</h2>
            <p className="text-gray-600 mb-8">Your experience is now live on the Explore Feed.</p>
            <button onClick={() => navigate('/explore')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700">Go to Feed</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareExperience;