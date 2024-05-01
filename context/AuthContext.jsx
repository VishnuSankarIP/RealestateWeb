// import React, { createContext, useEffect, useState } from 'react'

// export const AuthAPI = createContext();
// function AuthContext({children}) {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userId, setUserId] = useState(null);
//   useEffect(() => {
//    
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('userId');
//     if (token && user) {
//       setIsAuthenticated(true);
//       setUserId(user);
//     } else {
//       setIsAuthenticated(false);
//       setUserId(null);
//     }
//   }, []);

//   };
//   return (
//     <AuthAPI.Provider value={{ isAuthenticated, userId, login, logout }}>{children}</AuthAPI.Provider>
//   )
// }

// export default AuthContext