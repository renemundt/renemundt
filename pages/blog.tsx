import { getAllPosts } from '@/api/posts'
import { BlogPost } from '@/interfaces/post'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  allPosts: BlogPost[]
}

const Blog = ({ allPosts }: Props) => {
  const posts = allPosts
  console.log('posts', posts)
  return (
    <>
      <div>
        <Head>
          <title>{`René Mundt - Web Log`}</title>
        </Head>
        {posts &&
          posts.length > 0 &&
          posts.map((post, i) => (
            <>
              <Link key={i} as={`/posts/${post.slug}`} href="/posts/[slug]">
                {post.title}
              </Link>
              <br />
            </>
          ))}
      </div>
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
