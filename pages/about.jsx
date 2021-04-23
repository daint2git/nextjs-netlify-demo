import Head from "next/head";

function About({ x }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>dai title</title>
        <meta name="description" content="dai description" />
        <meta property="og:title" content="dai og title" />
        <meta property="og:description" content="dai og description" />
        <meta
          name="og:image"
          content="https://i.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o"
        />
        <meta
          name="og:url"
          content="https://github.com/daint2git/nextjs-netlify-demo"
        />
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
