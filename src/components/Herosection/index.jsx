import React from "react";
import styled from "styled-components";
import { HeroContainer, HeroBg, HeroLeftContainer, Image, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import { Bio } from "../../data/constant";
import Typewritter from "typewriter-effect";
import HeroImg from "../../Imagess/ADITYA.png";
import HeroBgAnimation from "../HeroBgAnimation";

function Hero() {
    return <div id="about">
        <HeroContainer>
            <HeroBg><HeroBgAnimation /></HeroBg>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    <Title>
                        Hi, I am <br />
                        {Bio.name}
                    </Title>
                    <TextLoop>
                        I am a
                        <Span>
                            <Typewritter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <Image src={HeroImg} alt="Hero"></Image>
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div> 
}

export default Hero;
