import Head from "next/head";

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <div className="columns">
        <div className="column">
          <h1 className="has-text-left">Random Stuff</h1>
        </div>
        <div className="column">
          {" "}
          <h1 className="has-text-left">Random Stuff</h1>
        </div>
        <div className="column">
          {" "}
          <h1 className="has-text-left">Random Stuff</h1>
        </div>
        <div className="column">
          <h1 className="has-text-left">Contact Us</h1>
          <span className="icon is-large">
            <i className="fas fa-3x fab fa-instagram margin " />
            <i className="fas fa-3x fab fa-twitter-square margin" />
            <i className="fas fa-3x fab fa-pinterest-square margin" />
            <i className="fas fa-3x fab fa-facebook-square margin" />
            <i className="fas fa-3x fab fa-dribbble-square margin" />
          </span>
          <p className="has-text-left">1234 Fictional Road</p>
          <p className="has-text-left">Nashville, TN 00000</p>
          <p className="has-text-left">(500)-55230054</p>
        </div>
      </div>
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>
        . The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed{" "}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </a>
      </p>
    </div>
    <style jsx>
      {`
        .footer {
          background: transparent;
        }

        .margin {
          margin-right: 0.5rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
