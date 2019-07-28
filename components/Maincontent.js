const Main = () => (
  <div className="columns main">
    <div className="column one">
      <h2 className="Heading-one">Interesting stuff</h2>
      <div className="columns">
        <div className="column is-half">
          <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="column is-half">
          <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
      <div className="columns bottom">
        <div className="column is-half">
          <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="column is-half">
          <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>

      <a className="button buttonone">
        <i className="fas fa-file-alt icons" />
        More
      </a>
    </div>
    <div className="column two is-three-quarters">
      <h1 className="head">So what's this all about?</h1>
      <p id="first-para">
        This is Verti, a free and fully responsive HTML5 site template by HTML5
        UP. Verti is released under the Creative Commons Attribution license, so
        feel free to use it for any personal or commercial project you might
        have going on (just don't forget to credit us for the design!)
      </p>
      <p id="second-para">
        Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
        Praesent semper bibendum ipsum, et tristique augue fringilla eu. Vivamus
        id risus vel dolor auctor euismod quis eget mi. Etiam eu ante risus.
        Aliquam erat volutpat. Aliquam luctus mattis lectus sit amet phasellus
        quam turpis.
      </p>
      <a className="button buttontwo">
        <i className="fas fa-arrow-circle-right icons" />
        Continue Reading
      </a>
    </div>
    <style jsx>{`
      .main {
        background-color: white;
        margin-top:2rem;
      }

      .one {
        margin-top: 1rem;
        margin-left: 1rem;
      }

      .Heading-one {
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 23px;
        margin-left: 1rem;
        font-family:"Open Sans", sans-serif
      }

      img {
        border-radius: 13px;
      }

      .button {
        margin-bottom: 5rem;
        margin-top: 1rem;
      }

      .icons{
         margin-right:0.25rem;
       }

      .buttonone{
        color:white;
        font-size: 1.5rem;
        width: 8rem;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        font-weight:bold;
        background-color: rgb(16,160,213);
        transition: background-color 0.2s;
        }

        .buttonone:hover,.buttontwo:hover{
          background-color:rgb(16,160,213,0.8)
        }

        .head {
        margin-top: 1rem;
        font-size: 36px;
        font-family:"Open Sans", sans-serif
        font-weight:bold;
        margin-left: 3rem;
      }

      #first-para{
        margin-top: 2.5rem;
        margin-left: 3rem;
      }

      #second-para{
        margin-top: 3rem;
        margin-left: 3rem;
      }

      .buttontwo{
        margin-top:2rem;
        margin-left: 3rem;
        color:white;
        font-size: 1.5rem;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        font-weight:bold;
        background-color: rgb(16,160,213);
        transition: background-color 0.2s;
      }
  }
      }
    `}</style>
  </div>
);

export default Main;
