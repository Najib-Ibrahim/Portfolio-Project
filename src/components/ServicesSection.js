import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle heading="Skills" subheading="What I can do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="Skilled in creating elegant and intuitive UI/UX designs"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Can develop high performance websites (like this one) using popular frameworks i.e. React."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="mobile dev"
            desc="Able to develop fluid fullstack mobile applications using popular frameworks i.e. React Native"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
