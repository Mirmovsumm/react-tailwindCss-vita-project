
import React from 'react';
import whiteMod from '../../assets/whiteMod.png';
import darkMod from '../../assets/darkMod.png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'light'
    );

    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='relative'>
            <img 
                src={whiteMod} 
                alt="White Mode Icon"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
            />
            <img 
                src={darkMod} 
                alt="Dark Mode Icon"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default DarkMode;
