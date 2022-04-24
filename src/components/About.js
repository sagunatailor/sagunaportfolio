import React from 'react';
import me from '../images/avatar.png';

function About() {
    return (
        <React.Fragment>
        <h1>I am <span>Saguna Tailor</span></h1>

        <section id="about">
            <br/>
            <br/>
            <h2>About Me</h2>
            <div className='about'>
                <figure><img src={me} alt='me' height='240px'/></figure>
                <div>
                    <h3>&lt;Front-end Web Developer /&gt;</h3>
                    <p>Hello, my name is Saguna Tailor and I have been a Front-end Web Developer since 2005. I have worked for footsie 100 index companies to start-ups. I have worked for a wide variety of sectors including: Gambeling, Finance, Medical, Agencies, Maritime, Marketing. I am a reliable, hard working team player who is looking for a role that has a good work / life balance. I really enjoy learning new skills. I live in East London. My hobbies include spending time with my children, travelling, theatre, gardening, cycling, trekking, knitting and eating.</p>
                </div>
            </div>
        </section>
        </React.Fragment>
        );
    }
export default About;