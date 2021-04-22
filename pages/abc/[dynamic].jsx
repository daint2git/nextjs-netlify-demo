import { useRouter } from "next/router";

const Dynamic = ({ y }) => {
  const router = useRouter();
  const { dynamic } = router.query;

  return (
    <div>
      <p>{`Dynamic: ${dynamic}`}</p>
      <p>{y}</p>
    </div>
  );
};

export const getServerSideProps = async () => ({
  props: {
    y: 12,
  },
});

export default Dynamic;
