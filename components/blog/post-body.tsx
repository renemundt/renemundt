import markdownStyles from './markdown-styles.module.css'

interface Props {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div>
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
