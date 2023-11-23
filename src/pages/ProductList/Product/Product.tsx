import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to=''>
      <div className='bg-white shadow rounded-sm overflow-hidden hover:translate-y-[-0.05rem] hover:shadow-md duration-100  transition-transform'>
        <div className='w-full pt-[100%] relative '>
          <img
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
            src='https://down-vn.img.susercontent.com/file/4e30e14b1eaa6b281618c2b91853c7a6_tn'
            alt='pic'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>
            Áo Sweater Nam Form Rộng Phối Layer Chất Nỉ Unisex Thời Trang Trẻ Trung VESCA M10
          </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span>₫200.000</span>
            </div>
            <div className='text-orange ml-2 truncate'>
              <span className='text-xs'>₫</span>
              <span>129.000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-start'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 w-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='w-3 h-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='w-3 h-3 fill-current text-gray-300'
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>5.66k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
