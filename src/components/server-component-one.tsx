import fs from 'fs';
import { ServerComponentTwo } from './server-component-two';

export const ServerComponentOne = () => {
    fs.readFileSync('src/components/server-component-one.tsx', 'utf8')
    return (
        <>
            <h1> Server Component one</h1>
            <ServerComponentTwo/>
        </>
    )
}