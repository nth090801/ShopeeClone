import DOMPurify from 'dompurify'
import React, { useState } from 'react'

interface ReadMoreProps {
  content: string
  maxLength: number
}

export const ReadMore: React.FC<ReadMoreProps> = ({ content, maxLength }) => {
  const [showMore, setShowMore] = useState(false)

  const sanitizedContent = DOMPurify.sanitize(content)
  const displayedContent =
    showMore || sanitizedContent.length <= maxLength ? sanitizedContent : sanitizedContent.slice(0, maxLength) + '...'

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const showLess = () => {
    setShowMore(false)
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: displayedContent }} />
      {sanitizedContent.length > maxLength && (
        <div>
          {showMore ? (
            <button className='text-orange outline-none' onClick={showLess}>
              Ẩn bớt
            </button>
          ) : (
            <button className='text-orange outline-none' onClick={toggleShowMore}>
              Xem thêm
            </button>
          )}
        </div>
      )}
    </div>
  )
}
