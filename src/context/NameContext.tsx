import {createContext, useState, ReactNode, useEffect, useContext} from 'react';
import { NameGeralContext } from './NameGeralContext';

interface NameContextData {
  variable: number;
  isActive: boolean;
  functionActive : () => void;
}

interface NameProviderProps {
  children: ReactNode;
}

export const NameContext = createContext({} as NameContextData);

export function NameProvider({children}: NameProviderProps) {

  
  const {consoleAlert} = useContext(NameGeralContext);

  const variable = 1;
  const [isActive, setIsActive] = useState(false);

  
  function functionActive(){

    if (isActive) {
      setIsActive(false);
      console.log('-----  is not active -----')
    } else {
      setIsActive(true);
      console.log('-----  is active -----')
    }

  }

  useEffect(() => {

    console.log('isActive was change')
    consoleAlert();

  }, [isActive])


  return (
    <NameContext.Provider 
        value={{variable, isActive, functionActive}}>
          {children}
    </NameContext.Provider>
  );

  }