import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi my name's Tri, and I'm taking my first steps on the road to become a web developer
      </SectionText>
        <a style={{color:'#fff'}} target="_blank" href="/images/CV.pdf">
          <Button>
              Learn more
          </Button>
        </a>
    </LeftSection>
  </Section>
);

export default Hero;