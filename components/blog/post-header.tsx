import { Author } from '@/interfaces/author'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'

interface Props {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        {/* <div>
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
