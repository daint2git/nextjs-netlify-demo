import Head from "next/head";

function About({ x }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/logo192.png" />
        <title>dai title</title>
        <meta property="description" content="dai description" />
        
        <meta property="og:title" content="dai og title" />
        <meta property="og:description" content="dai og description" />
        <meta property="og:image" content="images/og-image.jpeg" />
        <meta
          property="og:url"
          content="https://github.com/daint2git/nextjs-netlify-demo"
        />

        <meta property="og:site_name" content="DaiNetlify" />
        <meta property="og:locale" content="vi" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <h1>About</h1>
        <p>x {x}</p>
      </div>
    </>
  );
}

export const getServerSideProps = async () => ({
  props: {
    x: 14,
  },
});

export default About;
