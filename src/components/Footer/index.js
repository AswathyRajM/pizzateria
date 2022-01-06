import React from "react";
import FadeIn from "react-fade-in";

import {
  Footer,
  FooterContainer,
  FooterSection,
  FooterLogo,
  SectionHeader,
  SectionPara,
  FooterNavlist,
  ListItem,
  FooterCopyrights,
} from "./FooterElements";

function FooterComponent() {
  const Copyright =
    " Copyright © " + new Date().getFullYear() + ", Pizzateria, IN";

  return (
    <Footer>
      <FooterContainer>
        <FooterSection>
          <FooterLogo to="/">
            <FadeIn>Pizzateria </FadeIn>
          </FooterLogo>
        </FooterSection>
        <FooterSection>
          <FadeIn>
            <SectionHeader>Who we are?</SectionHeader>
            <SectionPara>
              The first Pizzateria Restaurant in Kerala opened in Alappey over
              30 years ago to a pizza craving state and now, there are over 20
              restaurants up and down the state, serving millions guests!
            </SectionPara>
          </FadeIn>
        </FooterSection>
        <FooterSection>
          <FadeIn>
            <SectionHeader>About Us</SectionHeader>
            <FooterNavlist>
              <ListItem to="/">About the Company</ListItem>
              <ListItem to="/">Privacy</ListItem>
              <ListItem to="/">Contact Support</ListItem>
              <ListItem to="/">Terms of Service</ListItem>
            </FooterNavlist>
          </FadeIn>
        </FooterSection>
        <FooterSection>
          <FadeIn>
            <SectionHeader>Menu</SectionHeader>
            <FooterNavlist>
              <ListItem to="/">Pizzas</ListItem>
              <ListItem to="/">Ice Creams</ListItem>
              <ListItem to="/">Burgers</ListItem>
              <ListItem to="/">Drinks</ListItem>
              <ListItem to="/">View All</ListItem>
            </FooterNavlist>
          </FadeIn>
        </FooterSection>
        <FooterSection>
          <FadeIn>
            <SectionHeader>Connect with Us</SectionHeader>
            <FooterNavlist>
              <ListItem to="/">Facebook</ListItem>
              <ListItem to="/">Twitter</ListItem>
              <ListItem to="/">Instagram</ListItem>
              <ListItem to="/">Youtube</ListItem>
            </FooterNavlist>
          </FadeIn>
        </FooterSection>
      </FooterContainer>
      <FooterCopyrights>{Copyright}</FooterCopyrights>
    </Footer>
  );
}

export default FooterComponent;
