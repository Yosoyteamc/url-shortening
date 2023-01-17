import React from 'react';
import Advanced from '../components/Advanced';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LinkList from '../components/LinkList';

const Index = () => {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <LinkList></LinkList>
            <Advanced></Advanced>
            <Footer></Footer>
        </>
    );
}

export default Index;
