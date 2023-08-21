
interface ContentProps {
  content: string
}

function Content({ content }: ContentProps) {
  return (
    <p className="post-content">{content}</p>
  )
}

export default Content