import { getAllPosts } from '@/api/posts'
import { BlogPost } from '@/interfaces/post'
import Head from 'next/head'

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
          <title>{`René Mundt's Web Log`}</title>
        </Head>
        {posts && posts.length > 0 && posts.map((post, i) => <div key={i}>{post.title}</div>)}
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
