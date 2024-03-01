import {  createContext, useState} from 'react'
import {IAuthContext, IAuthContextProviderProps, ILoginData} from './types'
import { IUser } from '../types/user';
import { useNavigate  } from "react-router-dom";
import { api } from '../Services/api';
 
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);
    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const {data} = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
            if(data.length === 1){
                setUser(data[0])
                navigate('/feed')
            }else {
                alert('Email não é valido');
            }
            
        }catch{
            alert('Houve um error,tente novamente.')
        }
    }

   return <AuthContext.Provider value={{user, handleLogin}}>
        {children}
    </AuthContext.Provider>
}