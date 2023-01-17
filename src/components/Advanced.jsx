import React from 'react';

const Advanced = () => {
    return (
        <section className='advanced'>
            <div className='advanced-card'>
                <h2 className='advanced__title'>Advanced Statistics</h2>
                <p className='advanced__description'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div>
                <div className='advanced-card'>
                    <h3 className='advanced-card__title'>Brand Recognition</h3>
                    <p className='advanced-card__description'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='advanced-card'>
                    <h3 className='advanced-card__title'>Detailed Records</h3>
                    <p className='advanced-card__description'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='advanced-card'>
                    <h3 className='advanced-card__title'>Fully Customizable</h3>
                    <p className='advanced-card__description'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    );
}

export default Advanced;
