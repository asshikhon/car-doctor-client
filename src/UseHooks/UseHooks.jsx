import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const UseHooks = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseHooks;