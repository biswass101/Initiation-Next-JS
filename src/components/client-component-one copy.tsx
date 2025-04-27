'use clinet';

import { useState } from "react";

export default function ClientComponentTwo() {
    const [name, setName] = useState('Spoidormon');
    return (
        <h1> Client Component two</h1>
    )
}