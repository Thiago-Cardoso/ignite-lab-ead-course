import { gql, useQuery } from "@apollo/client";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0"
import { useGetProductsQuery, useMeQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/pagePublic";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const { user} = useUser()
  const { data: me } = useMeQuery()
  //const { data, loading, error } = useGetProductsQuery()

  return (
    <div className="text-violet-500">
    Ok: <h1>Hello {JSON.stringify(me, null, 2)} </h1>
    <pre>
    {JSON.stringify(user, null, 2)}
    </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    //return getServerPageGetProducts({}, ctx);
    return {
      props: {}
    }
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);