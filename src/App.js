import logo from './assets/logo.png';
import menuTelegram from './assets/menuTelegram.svg';
import menuTwitter from './assets/menuTwitter.svg';
import heroGyro from './assets/heroGyro.png';
import line from './assets/heroLine.png';
import aboutImg from './assets/about.png';
import symbolGLeft from './assets/symbolGLeft.png';
import symbolGRight from './assets/symbolGRight.png';
import utilities from './assets/utilities.png';
import staking from './assets/staking.png';
import cc from './assets/cc.png';
import vault from './assets/vault.png';
import tokenomics from './assets/tokenomics.png';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import socialsImg from './assets/socialsImage.png';
import React, { useState, useEffect } from 'react';
import Loader from './components/Lodaer';
import appImg from './assets/Mockup.png'
import './App.css';


function App() {
  const ticker = "$GYRO";
  const contract = "TBA"
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };


  useEffect(() => {
    // Simulate loading time with progress (you can replace this with actual data fetching or other async operations)
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 20 : 100));
    }, 300);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1800); // Adjust the duration as needed

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Loader loading={loading} progress={progress} />
      <div className="hero" id="hero">
        <div className="header">
          <div className="header-inside">
            <div className="logo-block">
              <img alt="logo" className="logo-header" src={logo}/>
            </div>
            <div className="menu-block">
              <ul>
                <li onClick={() => scrollToSection('hero')}>BUY {ticker}</li>
                <li onClick={() => scrollToSection('about')}>ABOUT</li>
                <li onClick={() => scrollToSection('tokenomics')}>TOKENOMICS</li>
                <li onClick={() => scrollToSection('ourSocials')}>OUR SOCIALS</li>
              </ul>
              <div className="socials-block">
                <a href="https://t.me/Gyrocoinportal" target="_blank" rel="noreferrer"><img className="socials-block-img" alt="telegram" src={menuTelegram}/></a>
                <a href="https://twitter.com/Gyro_Coin_Sol" target="_blank" rel="noreferrer"><img className="socials-block-img" alt="twitter" src={menuTwitter}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="section-inside">
          <div className="imgBlock">
            <img alt="GYRO THE GIRAFFE" className="gyro" src={heroGyro}/>
          </div>
          <div className="textBlock">
            <div className="lineBlock">
              <img alt="line" className="line" src={line}/>
            </div>
            <div className="headingBlock">
              <h1 className="heading">
              GREETINGS<br/> BY GYRO
              </h1>
              <p className="mainDescription">Meet Gyro - the happiest giraffe <br/>
              in the entire world.©</p>
            </div>
            <div className="buttonBlock">
              <button className="mainButton button">BUY {ticker}</button>
              <a href="https://gyro-inc.gitbook.io/gyro-the-giraffe/gyro-the-giraffe/introduction" target="_blank" rel="noreferrer"><button className="subButton button">Whitepaper</button></a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-inside">
          <div className="aboutTextBlock">
            <h2 className="subheading">
              About {ticker}
            </h2>
            <p className="description">
              Introducing our revolutionary new token - <b>$GYRO</b>. Designed to disrupt traditional financial systems and empower individuals in the digital age, Gyro is set to revolutionize the way we transact, invest, and participate in the global economy.
            </p>
            <a href="https://gyro-inc.gitbook.io/gyro-the-giraffe/gyro-the-giraffe/introduction" target="_blank" rel="noreferrer"><button className="subButton button">Whitepaper</button></a>
          </div>
          <div className="aboutImgBlock">
            <img alt="about" src={aboutImg}/>
          </div>
        </div>
      </div>
      <div className="cinema">
        <img alt="giraffes" className="giraffeSymb" src={symbolGLeft}/>
        <div className="cinemaBlock">
          <img className="cinemaImg" alt="giraffes" src={utilities}/>
          <h2 className="subheading utilText">
            Utilities
          </h2>
        </div>
        <img alt="giraffes" className="giraffeSymb" src={symbolGRight}/>
      </div>
      <div className="utilities">
        <div className="utilities-inside">
          <div className="items">
            <div className="util-item">
              <img alt="staking" src={staking}/>
              <h2 className="subheading">
                Staking
              </h2>
              <p className="description2">        
                The capacity to stake tokens is a widely found feature in the cryptocurrency industry. However, among alternative coins, only $GYRO provides this capability. P.S. Already in development
              </p>
              <h3 className="upcomming">
                upcomming..
              </h3>
            </div>
            <div className="util-item">
              <img alt="staking" src={cc}/>
              <h2 className="subheading">
                Credit Cards
              </h2>
              <p className="description2">
              As in the nearest Feauture (by the end of 2024) we will be Launching App and connecting Payment System to the Visa/Mastercard. It will take time as many countries are very strict with kind things.
              </p>
              <h3 className="upcomming">
                upcomming..
              </h3>
            </div>
            <div className="util-item">
              <img alt="staking" src={vault}/>
              <h2 className="subheading">
                Crypto Vault
              </h2>
              <p className="description2">
              As an example for you to easier understand. We are making an analog of Crypto.com on early stages. Decentralised crypto banking app with ability to stake, vault and use other useful features.
              </p>
              <h3 className="upcomming">
                upcomming..
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="application">
        <br/><br/><br/><br/><br/>
        <h2 className="subheading">
          Comming Soon..
        </h2>
        <p className="description appDesc">
            Best Banking Experience & Crypto Exchange
          </p>
        <img alt="app" className="appImg" src={appImg}/>
      </div>
      <div className="tokenomics" id="tokenomics">
        <div className="tokenomics-inside">
          <div className="tokenImg">
            <img alt="tokenomics" src={tokenomics}/>
          </div>
          <div className="tokenText">
            <h2 className="subheading">
              TOKENOMICS
            </h2>
            <div className="input">
              <h3 className="upcomming">Token Contract: </h3><p className="inputDesc">{contract}</p>
            </div>
            <div className="input">
              <h3 className="upcomming">TICKER: </h3><p className="inputDesc">{ticker}</p>
            </div>
            <div className="input">
              <h3 className="upcomming">SUPPLY: </h3><p className="inputDesc">987.000.000</p>
            </div>
            <div className="input">
              <h3 className="upcomming">TAX: </h3><p className="inputDesc">BUY - 0% | SELL - 0%</p>
            </div>
            <div className="input">
              <h3 className="upcomming">MINT REVOKE: </h3><p className="inputDesc">REVOKED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourSocials" id="ourSocials">
        <div className="ourSocials-inside">
          <h2 className="subheading">
            Our Socials
          </h2>
          <p className="description ourSocDesc">
            Keep your self updated!<br/>Follow us on social media & join our telegram channel.
          </p>
          <div className="soc">
            <a href="https://t.me/Gyrocoinportal" target="_blank" rel="noreferrer"><img className="socImg" alt="telegram" src={telegram}/></a>
            <a href="https://twitter.com/Gyro_Coin_Sol" target="_blank" rel="noreferrer"><img className="socImg" alt="twitter" src={twitter}/></a>
          </div>
          <img className="giftImg" alt="socials" src={socialsImg}/>
        </div>
      </div>
    </div>
  );
}

export default App;
