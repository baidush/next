// src/components/NavBar.tsx or similar
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/create-user">Create User</Link>
        </nav>
    );
};

export default NavBar;
