
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/20 mt-20 py-8">
            <div className="container mx-auto text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Alveare Realty. All rights reserved.</p>
                <p className="text-sm mt-2">Experience Wellness Living.</p>
            </div>
        </footer>
    );
}

export default Footer;