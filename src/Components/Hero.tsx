import React from "react"
import './Hero.scss'
import { Navigation } from "./Hero/Navigation"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';

const Hero = () => {
    const jumpTo = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        open(e.target.value)
        }
    return (
        <div className="hero">
            <Navigation />
            <div className="content-container">
                <h2>Boyu Dai</h2>
                <p className="self-introdction">Hi visitor, this is Dai. I am a software developer and game developer located in Canberra. Nice to meet you on my website.</p>
                <div className="link-container">
                    <div className="link">
                        <button onClick={jumpTo} value="https://www.linkedin.com/in/boyudai"><LinkedInIcon className="icon" /><p>Linkedin</p></button>
                    </div>
                    <div>
                        <button onClick={jumpTo} disabled={true}><XIcon className="icon" /><p>Twitter</p></button>
                    </div>
                    <div>
                        <button onClick={jumpTo} value="https://github.com/Daniel53245"><WorkIcon className="icon" /><p>Github</p></button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero