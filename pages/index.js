import Layout from "../components/MyLayout";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Main from "../components/Maincontent";
import Head from "next/head";
export default () => (
  <section className="section  ">
    <div class="container is-medium">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Head>
      <Layout>
        <Banner />
        <Cards />
        <Main />
      </Layout>
    </div>
    <style jsx global>
      {`
        .section {
          section-padding: ;
        }
        body {
          background-color: #e7e7e7;
        }
      `}
    </style>
  </section>
);
