import { useState } from 'react';
import parse from "html-react-parser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import bmaLogo from '../images/logos/bma.jpg';
import bmt from '../images/logos/bmt.jpg';
import capita from '../images/logos/capita.jpg';
import bwin from '../images/logos/bwin.jpg';
import orange from '../images/logos/orange.jpg';
import concep from '../images/logos/concep.jpg';
import theGroup from '../images/logos/the-group.jpg';

import bwin1 from '../images/portfolio/bwin1.jpg';
import bwin2 from '../images/portfolio/bwin2.jpg';
import bwin3 from '../images/portfolio/bwin3.jpg';
import bwin4 from '../images/portfolio/bwin4.jpg';

import bmt1 from '../images/portfolio/bmt1.jpg';
import bmt2 from '../images/portfolio/bmt2.jpg';
import bmt3 from '../images/portfolio/bmt3.jpg';
import bmt4 from '../images/portfolio/bmt4.jpg';

import capita1 from '../images/portfolio/capita1.jpg';
import capita2 from '../images/portfolio/capita2.jpg';
import capita3 from '../images/portfolio/capita3.jpg';
import capita4 from '../images/portfolio/capita4.jpg';
import capita5 from '../images/portfolio/capita5.jpg';

import concep1 from '../images/portfolio/concep1.jpg';
import concep2 from '../images/portfolio/concep2.jpg';
import concep3 from '../images/portfolio/concep3.jpg';

import orange1 from '../images/portfolio/orange1.jpg';
import orange2 from '../images/portfolio/orange2.jpg';
import orange3 from '../images/portfolio/orange3.jpg';
import orange4 from '../images/portfolio/orange4.jpg';
import orange5 from '../images/portfolio/orange5.jpg';

import thegroup1 from '../images/portfolio/the-group1.jpg';
import thegroup2 from '../images/portfolio/the-group2.jpg';
import thegroup3 from '../images/portfolio/the-group3.jpg';
import thegroup4 from '../images/portfolio/the-group4.jpg';
import thegroup5 from '../images/portfolio/the-group5.jpg';

import ModalComponent from './ModalComponent';

function Portfolio() {
    const content = [
      {
        image: bmaLogo,
        title: 'British Medical Association',
        content: '<p>I Work on the maintenance and creation of <a href=`http://www.bestpractice.bmj.com` target=`_blank`>www.bestpractice.bmj.com</a>, <a href=`http://www.new-learning.bmj.com` target=`_blank`>www.new-learning.bmj.com</a></p>. <ul><li>I work with Backend developers and UX designers to update and create websites.</li><li>I work in Agile scrum teams across the Tech department to update the various websites.</li><li>Consulting and carrying out frontend GUI feature requests and bug fixes.</li><li>Work from PSD wireframes and Figma designs to create websites from scratch.</li><li>Liaise with several teams to organise each step of a new site launch including deployment of the site via AWS.</li><li>Built front-end websites using React JS, HTML, SASS, GitHub</li><li>Work on with multiple Agile teams on multiple websites simultaneously as the sole front end web developer for the department. At times I was triple sprinting!</li><li>Worked remotely with teams based across the globe (India) to update the journal websites.</li><li>I act as the main point of contact for all front end related issues on any of the websites.</li><li>I improve the sites to ensure they are fully scalable, accessible and mobile / tablet responsive for all devices.</li><li>We use Git repositories for all website builds and updates.</li><li>Peer reviewing developers code to ensure it`s clear, clean and maintainable by all.</li><li>Learning new React and Front end code and sharing findings with team mate`s in our weekly learning sessions / meetings.</li></ul>',
        screenshots: []
      },
      {
        image: bwin,
        title: 'BWIN',
        content: '<p>The world s largest publicly traded online gambling firm, known for PartyPoker.com and sports betting brand Bwin.</p><p>I work on the maintenance and creation of new areas for the following websites: cheekybingo, foxybingo, rolloverbingo, itvbingo, thinkbingo, foxycasino plus around 10 other bingo sites.</p><p>I also:</p><ul><li>Site build according to specifications.</li><li>Carry out front-end GUI feature requests.</li><li>Do site fixes and updates.</li><li>Liaise effectively between designers, copywriters and product managers at the final stage of the production</li><li>I create Well-formed W3C (x)HTML and CSS and simple jQuery scripts.</li><li>Work from PSD wire frames to create websites / Landing pages from scratch that are mobile responsive.</li><li>Liaise with several teams to organise each step of a new site launch.</li><li>Work in an Agile environment with daily sand-ups and review meetings.</li><li>Migrate sites from PHP into CQ5 with white labels</li><li>I have created Blueprint sites so B2B sites can share the same content with a few white label variable replacements for more site specific content.</li><li>I co-ordinate with localisation teams for multi-lingual sites.</li></ul>',
        handler: 'handleShowBWIN',
        screenshots: [bwin1, bwin2, bwin3, bwin4]
      },
      {
        image: concep,
        title: 'Concep',
        content: '<p>I worked as the only front-end developer in the company. Hand-coding fully functional corporate websites from psd`s. I had to manage multiple projects with business critical deadlines from production to delivery including creating email marketing campaigns and templates within the hour.</p><ul><li>I built this microsites http://www.concep.com/campaigner/</li><li>Web usability, customer journey and optimising conversions.</li><li>UMBRACO CMS to build microsites.</li><li>Designing standards compliant and hand-coded HTML & CSS user interfaces.</li><li>Cross Browser and Email Client Compatibility testing.</li><li>Jquery libraries.</li></ul>',
        screenshots: [concep1, concep2, concep3]
      },
      {
        image: bmt,
        title: 'British Maritime Technicians',
        content: '<p>British Maritime Technicians (BMT), is an international engineering, science and technology consultancy.</p><ul><li>Managed all 32 subsidiary company websites as well as the intranet site using the CMS.</li><li>Dealt with queries, created new areas/sites/micro-sites, converted paper-based magazines to online.</li><li>Created optimised images/banners for the web.</li><li>Logged / resolved / escalated faults and problems with web-based systems.</li><li>Managed domain name registrations and renewals.</li></ul>',
        screenshots: [bmt1, bmt2, bmt3, bmt4]
      },
      {
        image: theGroup,
        title: 'The Group',
        content: '<p>The most experienced online corporate reporting agency in Europe, with a long award-winning track record.</p><p>I worked as a member of the web technology team using XHTML, CSS and Dreamweaver. Working to strict W3C standards and web content accessibility guidelines as well as coding for cross browser compatibility.Worked to strict deadlines while maintaining a consistently high standard of accuracy. Barclays, Centrica, Aviva, Prudential and Kingfisher are just some of the big names I create online annual reports for</p>',
        screenshots: [thegroup1, thegroup2, thegroup3, thegroup4, thegroup5]
      },
      {
        image: orange,
        title: 'Orange',
        content: '<p>I was responsible for converting Photoshop wire-frames into fully functional W3Ccompliant html web pages using XHTML, CSS and Dreamweaver for the help and support section. Cross browser compatibility testing was a crucial part of the role including: Chrome, Safari, IE 6, 7, 8 and Firefox.</p>',
        screenshots: [orange1, orange2, orange3, orange4, orange5]
      },
      {
        image: capita,
        title: 'Capita',
        content: '<p>Capita is the UK`s FTSE 100 index business process outsourcing and professional services company.</p><ul><li>Liaised with various clients to scope, develop and maintain projects for the intranet and create micro-sites.</li><li>Created features in line with the brand identity through extensive use of Dreamweaver and XHTML.</li><li>Formatting and quality check content for the intranet.</li><li>Prepared graphics for banners, icons and buttons using Fireworks.</li><li>Created CSS style-sheets for web pages.</li><li>I ran one-to-one contribute training for department heads.</li><li>Troubleshooter for MondoSearch. (Mondosearch crawls information to update the sites search engine).</li><li>Ran basic SQL statements to extract specified data into excel.</li><li>Developed asp driven pages to create online booking forms, online competitions and other dynamic pages.</li></ul>',
        screenshots: [capita1, capita2, capita3, capita4, capita5]
      }
    ];

  function handleShowBMA() {
    setShowBMA(true);
  }
  function handleShowBWIN() {
    setShowBWIN(true);
  }
  function handleShowConcep() {
    setShowConcep(true);
  }
  function handleShowBMT() {
    setShowBMT(true);
  }
  function handleShowTheGroup() {
    setShowTheGroup(true);
  }
  function handleShowOrange() {
    setShowOrange(true);
  }
  function handleShowCapita() {
    setShowCapita(true);
  }
  const [showBMA, setShowBMA] = useState(false);
  const [showBWIN, setShowBWIN] = useState(false);
  const [showConcep, setShowConcep] = useState(false);
  const [showBMT, setShowBMT] = useState(false);
  const [showTheGroup, setShowTheGroup] = useState(false);
  const [showOrange, setShowOrange] = useState(false);
  const [showCapita, setShowCapita] = useState(false);

console.log('showBMA',showBMA);
    return (
      <section id='portfolio'>
      <br/>
      <br/>
      <h2>Portfolio</h2>
      <div className='portfolio'>
            {/* <Button className='button' onClick={() => handleShowBMA(true)}>
                <figure><img alt={content[0].title} src={content[0].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowBWIN(true)}>
                <figure><img alt={content[1].title} src={content[1].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowConcep(true)}>
                <figure><img alt={content[2].title} src={content[2].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowBMT(true)}>
                <figure><img alt={content[3].title} src={content[3].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowTheGroup(true)}>
                <figure><img alt={content[4].title} src={content[4].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowOrange(true)}>
                <figure><img alt={content[5].title} src={content[5].image} /></figure>
            </Button>
            <Button className='button' onClick={() => handleShowCapita(true)}>
                <figure><img alt={content[6].title} src={content[6].image} /></figure>
            </Button> */}

      <ModalComponent showValue={showBMA} content={content[0].content} title={content[0].title} screenshots={content[0].screenshots} setShow={showBMA}/>


      <Modal show={showBMA} fullscreen={true} onHide={() => setShowBMA(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[0].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {parse(content[0].content)}
        </Modal.Body>
      </Modal>

      <Modal show={showBWIN} fullscreen={true} onHide={() => setShowBWIN(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[1].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {parse(content[1].content)}
          {content[1].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='bwin' src={image} /></figure>
          ))}
        </Modal.Body>
      </Modal>

      <Modal show={showConcep} fullscreen={true} onHide={() => setShowConcep(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[2].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{parse(content[2].content)}
          {content[2].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='concep' src={image} /></figure>
          ))}</Modal.Body>
      </Modal>

      <Modal show={showBMT} fullscreen={true} onHide={() => setShowBMT(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[3].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{parse(content[3].content)}
          {content[3].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='BMT' src={image} /></figure>
          ))}</Modal.Body>
      </Modal>

      <Modal show={showTheGroup} fullscreen={true} onHide={() => setShowTheGroup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[4].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{parse(content[4].content)}
          {content[4].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='the group' src={image} /></figure>
          ))}</Modal.Body>
      </Modal>

      <Modal show={showOrange} fullscreen={true} onHide={() => setShowOrange(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[5].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{parse(content[5].content)}
          {content[5].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='orange' src={image} /></figure>
          ))}</Modal.Body>
      </Modal>

      <Modal show={showCapita} fullscreen={true} onHide={() => setShowCapita(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content[6].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{parse(content[6].content)}
          {content[6].screenshots.map((image, idx) => (
            <figure key={idx}><img alt='capita' src={image} /></figure>
          ))}</Modal.Body>
      </Modal>
        </div>
      </section>
    );
}
export default Portfolio;