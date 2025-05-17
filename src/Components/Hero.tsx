import React from "react"
import './Hero.scss'
import { Navigation } from "./Hero/Navigation"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';

const Hero = () => {
    return (
        <div className="hero">
            <Navigation />
            <div className="content-container">
                <h2>Boyu Dai</h2>
                <p className="self-introdction">Some self introduction here </p>
                <div className="link-container">
                    <div className="link">
                        <button><LinkedInIcon className="icon"/><p>Twitter</p></button>
                    </div>
                    <div>
                        <button><XIcon className="icon"/><p>Twitter</p></button>
                    </div>
                    <div>
                        <button><WorkIcon className="icon" /><p>Twitter</p></button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero