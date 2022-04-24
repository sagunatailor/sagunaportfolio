import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav(){
  function myFunction() {
    var x = document.getElementById("myHashLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    return(
      <React.Fragment>
        <nav>
          <HashLink smooth to='#about'><i className='fa fa-fw fa-home'></i> About</HashLink >
          <HashLink smooth to='#skills'><i className='fa fa-paint-brush'></i> Skills</HashLink >
          <HashLink smooth to='#portfolio'><i className='fa fa-briefcase'></i> Portfolio</HashLink >
          <HashLink smooth to='#experience'><i className='fa fa-fw fa-superpowers'></i> Experience</HashLink >
          <HashLink smooth to='#contact'><i className='fa fa-fw fa-envelope'></i> Contact</HashLink >
        </nav>

        <div className='topnav'>
          <a href='about' className='active'>Saguna</a>
          <div id='myHashLinks' style={{display: "none"}}>
            <HashLink smooth to='#about'><i className='fa fa-fw fa-home'></i> About</HashLink >
            <HashLink smooth to='#skills'><i className='fa fa-paint-brush'></i> Skills</HashLink >
            <HashLink smooth to='#portfolio'><i className='fa fa-briefcase'></i> Portfolio</HashLink >
            <HashLink smooth to='#experience'><i className='fa fa-fw fa-superpowers'></i> Experience</HashLink >
            <HashLink smooth to='#contact'><i className='fa fa-fw fa-envelope'></i> Contact</HashLink >
          </div>
          <a href className='icon' onClick={myFunction}>
            <i className='fa fa-bars'></i>
          </a>
        </div>
      </React.Fragment>
    );
}
export default Nav;