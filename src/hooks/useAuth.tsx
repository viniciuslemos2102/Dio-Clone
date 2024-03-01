import { useContext } from "react";
import { AuthContext } from "../Context/auth";

export const useAuth = () => {

    const Context = useContext(AuthContext);

    if(!Context){
        throw Error('Não existe Contexto de Autenticação')
    }

    return Context;

}