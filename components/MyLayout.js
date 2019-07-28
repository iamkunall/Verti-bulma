import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Oleo+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
