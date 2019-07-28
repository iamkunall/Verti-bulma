const Banner = props => (
  <div>
    <head>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </head>
    <div className="columns">
      <div className="column is-three-fifths">
        <h1>Hi. This is Verti.</h1>
        <h2>
          It's a free responsive site <br />
          template by HTML5 UP
        </h2>
      </div>
      <div className="column second">
        <a
          className="button  button-one "
          href="https://www.youtube.com/watch?v=2QBsDH72MoM"
        >
          Ok let's go
          <i className="fas fa-arrow-circle-right arrow" />
        </a>
        <a
          className="button  button-two"
          href="https://www.youtube.com/watch?v=ioWkx6WRH2I"
        >
          More info
          <i className="fas fa-question-circle  arrow" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .column second{
        background-color:red;
      }

      .columns {
        background-color:#FFFFFF;
        margin-top: 1rem;
      }

      .column h2 {
        font-weight: 100;
        font-size: 44px;
        padding-left: 6rem;
        line-height:59.4px;
        margin-top: 1rem;
        margin-bottom:3rem;
      }

      .column h1 {
        line-height:59.4px;
        font-size:56px;
        font-weight:bold;
        padding-left: 6rem;
        margin-top: 3rem;
      }

      .button-one{
        font-weight:bold;
        color: white;
        margin-top: 3rem;
        width: 22rem;
        font-size: 36px;
        border-radius: 6px;
        background-color: rgb(16,160,213);
        transition: background-color 0.2s;
        padding: 3rem 0rem 3rem 0rem;
      }

      .arrow{
        margin-left: 2rem;
        margin-top: 0.5rem;
      }

      .button-two{
        font-weight:bold;
        color:black;
        margin-top: 1rem;
        width: 22rem;
        font-size: 36px;
        border-radius:6px;
        background-color:rgb(242,242,242);
        transition:background-color 0.2s;
        padding: 3rem 0rem 3rem 0rem;
      }

      .button-two:hover{
        background-color:rgb(242,242,242,0.8);
      }
      
      .button-one:hover{
        background-color:rgb(16,160,213,0.8)
      }
      }
    `}</style>
  </div>
);

export default Banner;
