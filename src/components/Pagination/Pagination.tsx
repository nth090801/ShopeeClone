import classNames from 'classnames'
import { Link, createSearchParams } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/pages/ProductList/ProductList'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
const RANGE = 2
export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const renderPagination = () => {
    let dotBefore = false
    let dotAfter = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span
            key={index}
            className=' mx-2 flex w-[42px] cursor-text  items-center justify-center rounded  px-3 py-2 text-[#959595] outline-none'
          >
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span
            key={index}
            className=' mx-2 flex w-[42px] cursor-text items-center justify-center rounded  px-3 py-2 text-[#959595] outline-none'
          >
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        // điều kiện để render '...' trong pagination
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }
        return (
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({
                ...queryConfig,
                page: pageNumber.toString()
              }).toString()
            }}
            key={index}
            className={classNames(
              'mx-2 flex w-[42px] cursor-pointer items-center justify-center rounded px-3 py-2 outline-none ',
              {
                'bg-orange text-white': pageNumber === page,
                ' text-[#959595] hover:text-orange': pageNumber !== page
              }
            )}
          >
            {pageNumber}
          </Link>
        )
      })
  }
  return (
    <div className='mt-6 flex flex-wrap  justify-center  '>
      {page === 1 ? (
        <span className='mx-2 flex w-[42px] cursor-default items-center justify-center rounded bg-transparent px-3 py-2 outline-none '>
          <svg enableBackground='new 0 0 11 11' viewBox='0 0 11 11' x={0} y={0} className='w-3 fill-[#959595]'>
            <g>
              <path d='m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z' />
            </g>
          </svg>
        </span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page - 1).toString()
            }).toString()
          }}
          className='mx-2 flex w-[42px] cursor-pointer items-center justify-center rounded bg-transparent px-3 py-2 outline-none '
        >
          <svg enableBackground='new 0 0 11 11' viewBox='0 0 11 11' x={0} y={0} className='w-3 fill-[#959595]'>
            <g>
              <path d='m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z' />
            </g>
          </svg>
        </Link>
      )}

      {renderPagination()}
      {page === pageSize ? (
        <span className='mx-2 flex w-[42px] cursor-default items-center justify-center rounded bg-transparent px-3 py-2 outline-none '>
          <svg enableBackground='new 0 0 11 11' viewBox='0 0 11 11' x={0} y={0} className='w-3 fill-[#959595]'>
            <path d='m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z' />
          </svg>
        </span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page + 1).toString()
            }).toString()
          }}
          className='mx-2 flex w-[42px] cursor-pointer items-center justify-center rounded bg-transparent px-3 py-2 outline-none '
        >
          <svg enableBackground='new 0 0 11 11' viewBox='0 0 11 11' x={0} y={0} className='w-3 fill-[#959595]'>
            <path d='m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z' />
          </svg>
        </Link>
      )}
    </div>
  )
}
