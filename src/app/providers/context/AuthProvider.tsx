import React, { ReactNode, createContext, useState, useContext } from "react";

interface AuthContextType {
    email: string | null;
    password: string | null;
    login: (newEmail: string, newPassword: string, callback: () => void) => void;
    logout: (callback: () => void) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }: AuthProviderProps) {

    const [inputs, setInputs] = useState<{ email: string | null; password: string | null }>(() => {
        const storedInputs = localStorage.getItem('inputs');
        return storedInputs ? JSON.parse(storedInputs) : { email: null, password: null };
    });
    const login = (newEmail: string, newPassword: string, callback: () => void) => {
        setInputs({email: newEmail, password: newPassword})
        localStorage.setItem('inputs', JSON.stringify({email: newEmail, password: newPassword}))
        callback()
    }

    const logout = (callback: () => void) => {
        setInputs({email: null, password: null})
        localStorage.removeItem('inputs')
        callback()
    }

    const value = {
        email: inputs.email,
        password: inputs.password,
        login,
        logout 
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}