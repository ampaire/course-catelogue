import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
background-color: #173F5F;
height : auto;
padding: 100px 0;
`
const Title = styled.h1`
color: #FFFEE9;
font-weight: bold;
line-height: 52px; 
`
const Description = styled.p`
color: #FFFEE9;
`

const Jumbotron = () => {
  return (
    <Section className="home-section">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <Title className="title">Learn React</Title>
              <Description >
                Th Complete React Web Developer Course.2 Hour Course Preview for
                beginners
              </Description >
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="mt-4 pt-4 text-center">
              <iframe
                width="400"
                height="215"
                src="https://www.youtube.com/embed/qI43yX1QeLM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
export default Jumbotron