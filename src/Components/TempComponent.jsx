// import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient("https://fcbyrfhpsxveworvwzep.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYnlyZmhwc3h2ZXdvcnZ3emVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjE0NTYsImV4cCI6MjAyNTkzNzQ1Nn0.vkxkszcZ8RJYz91qhIJ8oFi6W6gzhNDbCwp_t_S4Qbc");

// const GoogleAuth = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { user: authUser, error } = await supabase.auth.signinWithOAuth(
//         { provider: 'google' }
//       );
//       if (error) {
//         console.error('Error signing in with Google:', error.message);
//       } else {
//         setUser(authUser);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h2>Logged in as: {user.email}</h2>
//           <button onClick={() => supabase.auth.signOut()}>
//             Sign Out
//           </button>
//         </div>
//       ) : (
//         <button onClick={() => supabase.auth.signIn({ provider: 'google' })}>
//           Sign in with Google
//         </button>
//       )}
//     </div>
//   );
// };

// export default GoogleAuth;