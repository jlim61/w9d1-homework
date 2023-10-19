import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { LoggedUser } from '../types';

interface UserContextValues {
  user: LoggedUser
  setUser: Dispatch<SetStateAction<LoggedUser>>
}

export const UserContext = createContext({} as UserContextValues);

export default function UserProvider({ children }: {
  children: JSX.Element | JSX.Element[];
}) {
  const [user, setUser] = useState({ username: '', token: '' });

  const value = {
    user, 
    setUser 
  }

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  );
}
