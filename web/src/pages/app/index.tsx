import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0"

export default function Home() {
  const { user} = useUser()

  return (
    <h1>Hello {JSON.stringify(user, null, 2)} </h1>
  )
}

export const getServerSideProps = withPageAuthRequired();
