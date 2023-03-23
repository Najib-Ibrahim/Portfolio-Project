import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {a
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Najib Ibrahim</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Lyon, France. A place of beauty and culture. Since
                  my childhood, I've always loved art and design. I always to
                  design my projects from a unique point of view. My passion for
                  technology stems from wanting to create something from scratch
                  and watch it impact the world around me.
                  <br /> <br />
                  I started coding since I was in college. I also consider
                  coding as an artform. I find process of deconstructing complex
                  problems and finding elegant solutions fascinating and the
                  statisfaction of watching your project blossom into an end
                  product is unmatched.
                  <br />
                  <br /> I aim to create. I wish to improve. I envision
                  innovation.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="/src/assets/data/Curriculum Vitae.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Degrees</h1>

              <AboutInfoItem
                title="University"
                items={['Birmingham City University']}
              />
              <AboutInfoItem
                title="Bachelors"
                items={['Computer Science with Honours (First Honours)']}
              />
              <AboutInfoItem
                title="Masters"
                items={['Cybersecurity (Merit)']}
              />
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem title="School" items={['Aston Manor Academy']} />
              <AboutInfoItem
                title="College"
                items={['Joseph Chamberlain Sixth Form College']}
              />
              <AboutInfoItem
                title="University"
                items={['Birmingham City University']}
              />
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'Python',
                  'Java',
                  'F#',
                  'REACT',
                  'REACT Native',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={[
                  'Node',
                  'MongoDB',
                  'SQL',
                  'AWS',
                  'RESTful',
                  'Full Stack',
                ]}
              />
              <AboutInfoItem
                title="Other Lang"
                items={['English', 'French', 'Somali']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
