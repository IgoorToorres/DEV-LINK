'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from 'lucide-react';

export const SwitchTheme = () => {

    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), [])
    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark'

    return (
        <div className="flex justify-center">
            <button
                aria-label="Alterar Tema"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="inline-flex h-6 w-16 items-center rounded-full border border-stroke bg-surface hover:text-hover"
            >
                <span
                    className={`flex justify-center items-center h-8 w-8 rounded-full bg-bg transition-transform ${isDark ? 'translate-x-8' : 'translate-x-0'}`}
                >
                    {isDark
                        ? <MoonIcon className="text-black h-4 w-4" />
                        : <SunIcon className="text-white h-4 w-4" />}
                </span>
            </button>
        </div>
    )
}