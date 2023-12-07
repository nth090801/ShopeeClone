import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function NotFound() {
  return (
    <div className='h-full w-full bg-white'>
      <Helmet>
        <title>Not Found | Shopee Clone</title>
        <meta name='description' content='404 Not Found!!! ERROR' />
      </Helmet>
      <div className='container mt-36'>
        <div className='m-auto block w-32 max-w-full'>
          <div className='block w-[100%] bg-not-found bg-contain bg-center bg-no-repeat pb-[100%]'></div>
        </div>
        <div className='text-center text-gray-400'>
          <p>404</p>
          <p>It looks like something is missing!</p>
        </div>
        <div className='flex items-center justify-center'>
          <Link
            to={path.home}
            className=' mt-5 flex items-center justify-center rounded-sm bg-orange px-4 py-2  text-white hover:opacity-90'
          >
            Trở về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
