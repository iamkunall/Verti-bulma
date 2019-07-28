const cards = () => (
  <div className="columns is-4 ">
    <div className="column ">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">Put something here</p>
            <p className="subtitle is-6">Maybe here as well I think</p>
          </div>
          <div className="content">
            Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
            Praesent sed semper
            <br />
            amet bibendum tristique fringilla.
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">Put something here</p>
            <p className="subtitle is-6">Maybe here as well I think</p>
          </div>
          <div className="content">
            Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
            Praesent sed semper
            <br />
            amet bibendum tristique fringilla.
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">Put something here</p>
            <p className="subtitle is-6">Maybe here as well I think</p>
          </div>
          <div className="content">
            Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
            Praesent sed semper
            <br />
            amet bibendum tristique fringilla.
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .columns {
          margin-top: 4rem;
        }

        .card {
          border-radius: 1rem;
        }
        img {
          border-radius: 1rem 1rem 0rem 0rem;
        }
      `}
    </style>
  </div>
);

export default cards;
