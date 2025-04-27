'use client';

import { useState } from "react";

export function ClientComponentOne({children}: {children: React.ReactNode}) {
    const [name, setName] = useState('Spoidormon');
    return (
        <>
            <h1> Client Component one</h1>
            {children}
        </>
    )
}