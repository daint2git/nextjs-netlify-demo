function About({ x }) {
  return (
    <div>
      <h1>About</h1>
      <p>x {x}</p>
    </div>
  );
}

export const getServerSideProps = async () => ({
  props: {
    x: 12,
  },
});

export default About;
