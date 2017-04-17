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
  maxWidth: 800,
  margin: '0 auto',
  display: 'box',
  WebkitBoxDirection: 'normal',
  WebkitBoxOrient: 'vertical'
}

const centeredContainerStyles = {
  alignItems: 'center',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  WebkitBoxAlign: 'center'
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

// const iconListStyles = {
//   flexWrap: 'wrap',
//   display: 'flex',
//   WebkitBoxOrient: 'horizontal',
//   WebkitBoxDirection: 'normal',
//   WebkitBoxLines: 'multiple',
//   margin: 0,
//   padding: 0
// }

const listItemStyles = {
  WebkitBoxFlex: 0,
  display: 'list-item',
  WebkitBoxOrient: 'horizontal',
  WebkitBoxDirection: 'normal',
  flexDirection: 'row',
  WebkitBoxLines: 'multiple',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  color: '#373737 !important'
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
      <ul  className="icons-list">
        <li style={listItemStyles} className="icons-list__item"><a href="mailto:ghostautomatic@gmail.com" rel="nofollow" target="_blank"
                                      title="Send me an email">
          <i className="fa fa-envelope" aria-hidden="true"></i> Email
        </a></li>
        <li style={listItemStyles} className="icons-list__item"><a href="https://www.linkedin.com/in/about0/" rel="nofollow" target="_blank" ><i className="fa fa-linkedin" aria-hidden="true" />
          LinkedIn
        </a></li>
        <li style={listItemStyles} className="icons-list__item"><a href="https://github.com/about0" rel="nofollow" target="_blank" ><i className="fa fa-github" aria-hidden="true"></i>Github</a></li>
        <li style={listItemStyles} className="icons-list__item"><a href="skype:bogdank.1"><i className="fa fa-skype"></i>Skype</a></li>

      </ul>
    </article>
  </div>
)