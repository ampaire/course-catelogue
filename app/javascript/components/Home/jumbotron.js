import React from 'react';

const Jumbotron = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h4 className="title">Learn React</h4>
              <p>
                {" "}
                The Complete React Web Developer Course.2 Hour Course Preview for
                beginners
              </p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="mt-4 pt-4 text-center">
              <iframe
                width="300"
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
    </section>
  );
}
export default Jumbotron