import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import MenuButton from '../components/MenuButton';

export default function Header() {
    
    return (
        <header style={headerStyles}>
            <MenuButton />

            
            <a href="/dashboard">
                <HomeIcon className="h-8 w-8 text-white mr-2" />
            </a>

            <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
                <UserIcon className="h-6 w-6 text-white" />
            </div>
        </header>
    );
}

const headerStyles = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007BFF',
    padding: '.2rem 1rem'
};