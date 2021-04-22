import logo, { ReactComponent as Logo } from "../public/images/logo.svg";
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1>Index</h1>
      <Link href="/about"><a>About</a></Link>
      <img src="images/logo192.png" alt="logo" />
      <img src="images/logo.svg" alt="logo" />
      <img src={logo} alt="logo" />
      <Logo />
    </div>
  );
}

export const getStaticProps = async () => ({ props: {} });
