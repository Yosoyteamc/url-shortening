import React from 'react';
import heroImage from '../assets/images/illustration-working.svg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-text'>
                <h1 className='hero-text__title'>More than just shorter links</h1>
                <p className='hero-text__description'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='hero-text__button button-primary'>Get Started</button>
            </div>
            <div className='hero-img'>
                <img className='hero-img__img' src={heroImage} alt="Hero Image"/>
            </div>
        </section>
    );
}

export default Hero;
