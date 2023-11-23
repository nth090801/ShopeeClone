import Button from 'src/components/Button'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex items-center justify-between gap-2'>
        <div className='flex flex gap-2 items-center'>
          <div>Sắp xếp theo</div>
          <Button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center rounded-sm'>
            Phổ biến
          </Button>
          <Button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center rounded-sm'>
            Mới nhất
          </Button>
          <Button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center rounded-sm'>
            Bán chạy
          </Button>
          <select
            className='h-8 px-4 outline-none capitalize bg-white text-black text-sm hover:bg-slate-100 text-left rounded-sm '
            defaultValue=''
          >
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến cao</option>
            <option value='price:desc'>Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <Button className='shadow px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </Button>
            <Button className='shadow px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
