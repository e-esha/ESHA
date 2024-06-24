import heroImg from '../../assets/hero-img.png';
import style from './HeroStyles.module.css';
import sun from'../../assets/sun.svg';
import moon from'../../assets/moon.svg';
import twitterLight from'../../assets/twitter-light.svg';
import twitterDark from'../../assets/twitter-dark.svg';
import githubLight from'../../assets/github-light.svg';
import githubDark from'../../assets/github-dark.svg';
import linkedinLight from'../../assets/linkedin-light.svg';
import linkedinDark from'../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const{ theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight:twitterDark;
    const githubIcon = theme === 'light' ? githubLight:githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark; 
    return (
    <section id="hero" className={style.container}>
        <div className={style.colorModeContainer}>
            <img 
            className={style.hero}
            src={heroImg}
            alt="Profile pic of Esha" 
            />
            
            <img
             className={style.colorMode}
            src={themeIcon}
             alt="Color mode icon" 
             onClick={toggleTheme}
             />
        </div>
        <div className={style.info}>
         <h1>
            Esha
            <br />
            Tamang
         </h1>
         <h2>Web Developer</h2>
         <span>
            <a href="https://twitter.com" target='blank'>
                <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com" target='blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com" target='blank'>
                <img src={linkedinIcon} alt="Linked icon" />
                </a>
        </span>
        <p className={style.description}>
            Passionate towards web development and coding .
        </p>
        <a href={CV} download>
            <button className="hover" download>
                Resume
            </button>
        </a>
        </div>
        </section>
  )
}

export default Hero;