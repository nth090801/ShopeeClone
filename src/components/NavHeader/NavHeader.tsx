import { Link } from 'react-router-dom'
import Popover from '../Popover'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import path from 'src/constants/path'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { purchasesStatus } from 'src/constants/purchase'
import { getAvatarUrl } from 'src/utils/utils'
import { useTranslation } from 'react-i18next'
import { locales } from 'src/i18n/i18n'

export default function NavHeader() {
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const queryClient = useQueryClient()
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className='justify-between text-sm custom-min:flex  '>
      <div className='inline-flex items-center custom-max-tablet:hidden'>
        <div className='mx-1 h-4 cursor-pointer border-r-[1px] border-r-white/40 hover:text-white/70'>
          <p className='mr-2'>Kênh người bán</p>
        </div>
        {!isAuthenticated ? (
          <div className='mx-1 h-4 cursor-pointer border-r-[1px] border-r-white/40 hover:text-white/70'>
            <p className='mr-2'>Trờ thành người bán Shopee</p>
          </div>
        ) : (
          <div className='hidden'></div>
        )}
        <Popover
          className='mx-1 h-4 cursor-pointer border-r-[1px] border-r-white/40 hover:text-white/70'
          renderPopover={
            <div className='relative  flex-col rounded-sm border border-gray-200 bg-white shadow-md '>
              <div className='mt-3 block w-44 rounded-sm p-1'>
                <img
                  className='h-44 w-44 border-0'
                  src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png'
                  alt='qr'
                />
                <div className='flex flex-wrap items-center justify-between px-3'>
                  <div className='block h-4 w-16'>
                    <img
                      src='	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png'
                      alt='apple store'
                      className=' h-full w-full border-0'
                    />
                  </div>
                  <div className='block h-4 w-16'>
                    <img
                      src='	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png'
                      alt='apple store'
                      className=' h-full w-full border-0'
                    />
                  </div>
                  <div className='mt-3 block h-4 w-16'>
                    <img
                      src='	https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ae215920a31f2fc75b00d4ee9ae8551.png'
                      alt='apple store'
                      className=' h-full w-full border-0'
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className='flex items-center'>
            <span className='mr-2'>Tải ứng dụng</span>
          </div>
        </Popover>
        <div className='mx-1 mt-1'>Kết nối</div>
        <div className='mt-[1px] flex w-12 justify-around border-0'>
          <Link to='https://www.facebook.com/ShopeeVN' className='h-4 w-4 cursor-pointer fill-white text-base '>
            <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
              <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
            </svg>
          </Link>
          <Link to='https://instagram.com/Shopee_VN' className='h-4 w-4 cursor-pointer fill-white text-base'>
            <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
            </svg>
          </Link>
        </div>
      </div>
      <div className='inline-flex custom-max-tablet:flex custom-max-tablet:justify-end '>
        {/* Thông báo */}
        <Popover
          className='custom-mobile-small:hidden ml-3 flex cursor-pointer items-center py-1 hover:text-white/70'
          renderPopover={
            <div className='relative  h-[350px] w-[400px] flex-col rounded-sm border border-gray-200 bg-white shadow-md '>
              <div className=' flex h-[310px] w-full flex-col items-center justify-center '>
                <img
                  src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png'
                  alt='ảnh'
                  className='mt-[20px] h-[100px] w-[100px] flex-shrink-0 object-cover '
                />
                {isAuthenticated && <span className='mt-3'>Không có thông báo nào</span>}
                {!isAuthenticated && <span className='mt-3'>Đăng nhập để xem Thông báo</span>}
              </div>
              {!isAuthenticated && (
                <div className='bottom-0 flex w-full justify-around'>
                  <Link
                    className='flex h-10 w-[50%] items-center justify-center bg-gray-100 hover:bg-gray-200 hover:text-orange'
                    to={path.register}
                  >
                    <div>Đăng ký</div>
                  </Link>
                  <Link
                    className='flex h-10 w-[50%] items-center justify-center bg-gray-100 hover:bg-gray-200 hover:text-orange'
                    to={path.login}
                  >
                    <div>Đăng Nhập</div>
                  </Link>
                </div>
              )}
            </div>
          }
        >
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
              />
            </svg>

            <span className='mx-1'>Thông báo</span>
          </div>
        </Popover>
        {/* Hỗ trợ */}
        <div className='custom-mobile-small:hidden ml-3 flex cursor-pointer items-center hover:text-white/70'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
            />
          </svg>
          <span className='mx-1 mt-[2px]'>Hỗ trợ</span>
        </div>
        {/* Tiếng Việt */}
        <Popover
          className='custom-mobile-small:hidden ml-3 flex cursor-pointer items-center py-1 hover:text-white/70'
          renderPopover={
            <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
              <div className='flex flex-col items-start py-2 pl-3 pr-28 '>
                <button className='px-3 py-2 hover:text-orange' onClick={() => changeLanguage('vi')}>
                  Tiếng Việt
                </button>
                <button className='mt-2 px-3 py-2 hover:text-orange' onClick={() => changeLanguage('en')}>
                  EngLish
                </button>
              </div>
            </div>
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </svg>
          <span className='mx-1'>{currentLanguage}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </Popover>
        {isAuthenticated && (
          // account
          <Popover
            className='ml-6 flex cursor-pointer py-1 hover:text-white/70'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <Link
                  to={path.profile}
                  className='block w-full bg-white px-4 py-3 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to={path.historyPurchase}
                  className='block w-full bg-white px-4 py-3 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đơn mua
                </Link>
                <button
                  onClick={handleLogout}
                  className='block w-full bg-white px-4 py-3 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đăng xuất
                </button>
              </div>
            }
          >
            <div className='mr-2 h-5 w-5 flex-shrink-0'>
              <img
                src={getAvatarUrl(profile?.avatar)}
                alt='avatar'
                className='h-full w-full rounded-full fill-white object-cover'
              />
            </div>
            <div>{profile?.email}</div>
          </Popover>
        )}
        {!isAuthenticated && (
          <div className='flex items-center'>
            <Link to={path.register} className='mx-3 capitalize hover:text-white/70'>
              Đăng Ký
            </Link>
            <div className='h-4 border-r-[1px] border-r-white/40'></div>
            <Link to={path.login} className='mx-3 capitalize hover:text-white/70'>
              Đăng Nhập
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
