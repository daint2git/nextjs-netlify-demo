import Head from "next/head";

function About({ x }) {
  return (
    <>
      <Head>
        <title>dai title</title>
        <meta name="description" content="dai description" />
        <meta property="og:title" content="dai og title" />
        <meta property="og:description" content="dai og description" />
        <meta name="og:image" content="https://picsum.photos/200" />
        <meta
          name="og:url"
          content="https://github.com/daint2git/nextjs-netlify-demo"
        />
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
