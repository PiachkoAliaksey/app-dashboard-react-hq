"use client"

import { useState, useEffect } from "react";
import { Dispatch,SetStateAction } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
    const [storedValue, setStoredValue] = useState<string|number>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue] as [string,Dispatch<SetStateAction<string|number>>]
}