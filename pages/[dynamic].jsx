import { useRouter } from 'next/router'

const Dynamic = () => {
  const router = useRouter()
  const { dynamic } = router.query

  return <p>Dynamic: {dynamic}</p>
}

export default Dynamic
