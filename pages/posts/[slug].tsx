import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { BlogPost } from '../../interfaces/post'
import { getAllPosts, getPostBySlug } from '@/api/posts'

type Props = {
  post: BlogPost
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  const title = `${post.title} | René Mundt - Web Log`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article>
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <div>{post.title}</div>
          </article>
        </>
      )}
    </>
  )
}

export default Post

interface Params {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])

  return {
    props: {
      post: {
        ...post,
        // content,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
