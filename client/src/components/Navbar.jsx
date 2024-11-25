import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = (isAuthenticated, setAuthenticated) => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl">FlowBaseCRM</Link>
                <div>
                    {
                        !isAuthenticated ?
                            (
                                <>
                                    <Link to="/dashboard" className="mx-2">Dashboard</Link>
                                    <Link to="/customers" className="mx-2">Customers</Link>
                                    <Link to="/orders" className="mx-2">Orders</Link>
                                    <Link to="/profile" className="mx-2">Profile</Link>
                                </>
                            ) :
                            (
                                <>
                                    <Link to="/login" className="mx-2">Login</Link>
                                    <Link to="/register" className="mx-2">Register</Link>
                                    <Link to="/logout" className="mx-2">Logout</Link>
                                </>
                            )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
