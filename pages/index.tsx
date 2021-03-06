import { InferGetStaticPropsType } from 'next';
import { getPostList } from "@shared/utils";
import Link from 'next/link';
import Head from 'next/head';
import Header from '@components/Header';
import Navigation from '@components/Navigation';

type PostList = string[];

function Home({ posts }:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Hello world from my blog</title>
      </Head>

      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`post/${slug}`}>
                  <a>
                    {slug.replace(/-/g, ' ')}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts:PostList = getPostList();
  return {
    props: {
      posts
    }
  }
}


export default Home;