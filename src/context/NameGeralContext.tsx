import {createContext, useState, ReactNode} from 'react';

interface NameGeralContextData {
  variable: number;
  isActive: boolean;
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

  
  // function consoleAlert(){
  //   console.log('This is a Alert from NameGeralContext');
  // }


  return (
    <NameGeralContext.Provider 
        value={{variable, isActive}}>
          {children}
    </NameGeralContext.Provider>
  );

  }