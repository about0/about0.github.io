import React from 'react'
import pic from '../../assets/pic.jpg'

const portraitStyles = {
  maxWidth: 100,
  display: 'inline',
  margin: '0 3rem 1.5rem 0',
  borderRadius: 50
}

const homePageStyles = {
  width: '80%',
  margin: '0 auto',
  display: 'box',
  webkitBoxDirection: 'normal',
  WebkitBoxOrient: 'vertical'
}

const centeredContainerStyles = {
  alignItems: 'center',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  webkitBoxAlign: 'center'
}

const profileCardTitleStyles = {
  fontSize: '2.6rem',
  lineHeight: '3rem',
  marginBottom: '1rem'
}



const homePageProfileCardStyles = {
  borderBottom: 0,
  paddingBottom: 0,
  marginBottom: '2rem'
}


const profileCardStyles = {
  textAlign: 'inherit',
  flexDirection: 'column',
  WebkitBoxDirection: 'normal',
  display: '-webkit-box',
  WebkitBoxAlign: 'center',
  alignItems: 'center'
}

const profileCardSubitleStyles = {
  fontSize: '2rem',
  lineHeight: '2rem',
  marginBottom: '1rem',
  marginTop: 0,
  fontWeight: 300,
  color: '#878787'
}

const aboutStyles = {
  marginBottom: '2rem'
}

const iconListStyles = {
  flexWrap: 'wrap'
}

const listItemStyles = {
  WebkitBoxFlex: 0,
  display: 'list-item',
  WebkitBoxOrient: 'horizontal',
  mozBoxOrient: 'horizontal',
  WebkitBoxDirection: 'normal',
  flexDirection: 'row',
  WebkitBoxLines: 'multiple',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0
}

export const Home = () => (
  <div className="centered-container" style={centeredContainerStyles}>
    <article className="home-page" style={homePageStyles}>
      <section className="home-page__profile-card" style={homePageProfileCardStyles}>
        <div className="profile-card" style={profileCardStyles}>
          <div className="profile-card__portrait" title="I'm a QA and web developer, working with React, Jest, Mocha">
            <img src={pic} alt="" style={portraitStyles}/>
          </div>
          <div className="profile-card__details">
            <h1 className="profile-card__title" style={profileCardTitleStyles}>Bogdan Kostrtytskyi</h1>
            <h2 className="profile-card__subtitle" style={profileCardSubitleStyles}>Web Developer & QA</h2>
          </div>
        </div>
      </section>
      <section className="home-page__about" style={aboutStyles}>
        <p>
          Hey, I'm a professional Web QA <span style={{color: '#ababab'}}>(Both, Manual and Automation)</span> and
          inspired Web Developer from Kyiv, Ukraine. I work primarily with <a
          href="https://facebook.github.io/react/">React</a>. Focusing mostly on JS-related projects.
        </p>
      </section>
      <ul style={iconListStyles}>
        <li style={listItemStyles}><a href="mailto:ghostautomatic@gmail.com" rel="nofollow" target="_blank" title="Send me an email">
          <i className="fa fa-envelope" href=''>
            Email
          </i>
        </a></li>
        <li style={listItemStyles}>LinkedIn</li>
        <li style={listItemStyles}>Skype</li>
        <li style={listItemStyles}>Github</li>

      </ul>
    </article>
  </div>
)