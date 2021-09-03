import React, {createContext, useState} from 'react';
import auth from "../firebase/firebaseConfig";

export const UserContext = createContext();

export function UserProvider(props) {
      let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || undefined);


      auth.onAuthStateChanged((user) => {
          if(user){
              setUser(user);
              localStorage.setItem("user", JSON.stringify(user));
          }else{
              setUser(undefined);
              localStorage.setItem("user", JSON.stringify({}));
          }
      })

    return (
        <UserContext.Provider value={user}>
             {props.children}
        </UserContext.Provider>
    )
}
