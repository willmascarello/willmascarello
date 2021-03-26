import {createContext, useState, ReactNode} from 'react';

interface NameGeralContextData {
  variable: number;
  isActive: boolean;
  consoleAlert : () => void;
}

interface NameGeralProviderProps {
  children: ReactNode;
  variable: number;
  isActive: boolean;
}

export const NameGeralContext = createContext({} as NameGeralContextData);

export function NameGeralProvider({children, ...rest}: NameGeralProviderProps) {

  const variable = 1;
  const [isActive, setIsActive] = useState(rest.isActive ?? false);

  
  function consoleAlert(){
    console.log('This is a Alert from NameGeralContext');
  }


  return (
    <NameGeralContext.Provider 
        value={{variable, isActive, consoleAlert}}>
          {children}
    </NameGeralContext.Provider>
  );

  }