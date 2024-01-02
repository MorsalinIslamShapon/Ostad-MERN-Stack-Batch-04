import React from 'react';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ContactsPage from '../pages/ContactsPage';
import NavBar from '../pages/NavBar';
import FAQPage from '../pages/FAQPage';
import BlogPage from '../pages/BlogPage';
import Footer from '../pages/Footer';


const Main = () => {
    return (
        <NavBar>
                <HomePage />
                <ProductPage/>
                <ContactsPage/>
                <FAQPage/>
                <BlogPage />
        </NavBar>
    );
};

export default Main;