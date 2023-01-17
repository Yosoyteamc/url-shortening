import React, { useState } from 'react';

const LinkList = () => {

    const [links, setLinks] = useState([
        {url: 'https://www.google.com', shortenLink: 'https://rel.ink/1'},
        {url: 'https://www.facebook.com', shortenLink: 'https://rel.ink/2'},
    ]);

    return (
        <section>
            <div>
                <div>
                    <input type='text'></input>
                    <span>Message for input text</span>
                </div>
                <button>Shorten It!</button>
            </div>
            <ul>
                {
                    links.map((link, index) => {
                        return(
                            <li key={index}>
                                <h3>{link.url}</h3>
                                <div>
                                    <p>{link.shortenLink}</p>
                                    <button>Copy</button>
                                </div>
                            </li>);
                    })
                }
            </ul>
        </section>
    );
}

export default LinkList;
