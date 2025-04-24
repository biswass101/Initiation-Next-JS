'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./style.css"

const navLinks = [
    {name: "Register", href: "/signup"},
    {name: "Login", href: "/login"},
    {name: 'Forgot Password', href: '/forgot-password'},
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== '/');
                return (
                    <Link
                    className={isActive ? 'bg-blue-500 text-white' : 'text-gray-700'}
                     href={link.href} key={link.name}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}