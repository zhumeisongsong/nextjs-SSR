import Layout from "../components/MyLayout";
import Link from 'next/link';

const PostLink = (props: any) => (
  <li>
     {/* href={`/post?title=${props.title}`} */}
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>

  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs"/>
      <PostLink id="Learn-nextjs"/>
      <PostLink id="deploy-nextjs"/>

    </ul>
  </Layout>
);

export default Index;
