import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">I am here</h3>
          <PText>Birmignham, UK</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Birmingham/@52.4974755,-2.0037128,11z/data=!4m6!3m5!1s0x4870942d1b417173:0xca81fef0aeee7998!8m2!3d52.486243!4d-1.890401!16zL20vMGszM3A"
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
