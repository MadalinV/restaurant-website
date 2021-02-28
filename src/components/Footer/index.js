import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/'>Logo</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                                href="/"
                                target='_blank'      aria-label="Facebook"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/"
                                target='_blank'      aria-label="Instagram"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/"
                                target='_blank'      aria-label="Twitter"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/"
                                target='_blank'      aria-label="Linkedn"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
