import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='py-6 bg-neutral-100'>
      <div className='container mt-6'>
        {/* footer top */}
        <div className='grid grid-cols-5 lg:grid-cols-5 gap-6 flex items-start'>
          {/* column */}
          <div className='lg:col-span-1 box-border '>
            <div className='uppercase text-[13px] font-bold '>Chăm sóc khách hàng</div>
            <ul className='no-underline mt-4'>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Shopee Blog
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Shopee Mall
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Hướng Dẫn Mua Hàng
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Hướng Dẫn Bán Hàng
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Thanh Toán
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Shopee Xu
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Vận Chuyển
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Trả Hàng & Hoàn Tiền
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Chăm Sóc Khách Hàng
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Chính Sách Bảo Hành
                </Link>
              </li>
            </ul>
          </div>
          {/* column */}
          <div className='lg:col-span-1 box-border '>
            <div className='uppercase text-[13px] font-bold '>VỀ SHOPEE</div>
            <ul className='no-underline mt-4'>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Giới Thiệu Về Shopee Việt Nam
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Tuyển Dụng
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Điều Khoản Shopee
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Chính Sách Bảo Mật
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Chính Hãng
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Kênh Người Bán
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Flash Sales
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Chương Trình Tiếp Thị Liên Kết Shopee
                </Link>
              </li>
              <li className='text-xs capitalize mt-3  overflow-hidden'>
                <Link to='/' className='text-gray-500 hover:text-orange cursor-pointer'>
                  Liên Hệ Với Truyền Thông
                </Link>
              </li>
            </ul>
          </div>
          {/* column */}
          <div className='lg:col-span-1 box-border '>
            <div className='uppercase text-[13px] font-bold '>THANH TOÁN</div>
            <ul className='flex list-none flex-wrap mt-4 mb-4'>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492' alt='img' />
              </li>
            </ul>
            <div className='uppercase text-[13px] font-bold '>ĐƠN VỊ VẬN CHUYỂN</div>
            <ul className='flex list-none flex-wrap mt-4 mb-4'>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img
                  src='https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185'
                  alt='img'
                />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='		https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img src='	https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6' alt='img' />
              </li>
              <li className='overflow-hidden box-border rounded-sm flex items-center justify-center bg-white w-16 h-8 shadow mb-2 mr-2'>
                <img
                  src='	https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd'
                  alt='img'
                />
              </li>
            </ul>
          </div>
          {/* column */}
          <div className='lg:col-span-1 box-border '>
            <div className='uppercase text-[13px] font-bold '>THEO DÕI CHÚNG TÔI TRÊN</div>
            <ul className='block no-underline list-none mt-4 mb-4 text-[#000000a6]'>
              <li className='text-xs mb-3 overflow-hidden'>
                <Link to='/' className='inline-flex hover:text-orange cursor-pointer '>
                  <img
                    className='mr-2'
                    src='https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5'
                    alt='facebook'
                  />
                  Facebook
                </Link>
              </li>
              <li className='text-xs mb-3 overflow-hidden'>
                <Link to='/' className='inline-flex hover:text-orange cursor-pointer '>
                  <img
                    className='mr-2'
                    src='https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91'
                    alt='instagram'
                  />
                  Instagram
                </Link>
              </li>
              <li className='text-xs mb-3 overflow-hidden'>
                <Link to='/' className='inline-flex hover:text-orange cursor-pointer '>
                  <img
                    className='mr-2'
                    src='	https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a'
                    alt='linkedIn'
                  />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          {/* column */}
          <div className='lg:col-span-1 box-border '>
            <div className='uppercase text-[13px] font-bold '>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
            <div className='flex flex-row w-full mt-4'>
              <Link to='/' className='no-underline cursor-pointer'>
                <img
                  className='w-24 h-24 mr-4 p-1 bg-white shadow-sm rounded-sm border-0'
                  src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                  alt='qr'
                />
              </Link>
              <div className='inline-block align-top w-20'>
                <Link
                  to='/'
                  className='flex w-20 h-6 mb-3 p-1 no-underline bg-white shadow-sm rounded-sm justify-center items-center '
                >
                  <img
                    src='	https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163'
                    alt='apple store'
                    className='max-h-full max-w-full border-0'
                  />
                </Link>
                <Link
                  to='/'
                  className='flex w-20 h-6 mb-3 p-1 no-underline bg-white shadow-sm rounded-sm justify-center items-center '
                >
                  <img
                    src='	https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def'
                    alt='google play'
                    className='max-h-full max-w-full border-0'
                  />
                </Link>
                <Link
                  to='/'
                  className='flex w-20 h-6 p-1 no-underline bg-white shadow-sm rounded-sm justify-center items-center '
                >
                  <img
                    src='	https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0'
                    alt='app'
                    className='max-h-full max-w-full border-0'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* line */}
        <div className='border-b-2 text-[#E9E9E9] my-10'></div>
        {/* footer bottom */}
        {/* p1 */}
        <div className='grid grid-cols-2 lg:grid-cols-3 text-sm text-gray-500'>
          <div className='lg:col-span-1'>
            <div>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div className='flex flex-wrap justify-center'>
              <div className='mr-[2px]'>Quốc gia & Khu vực:</div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Singapore
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Indonesia
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Thái Lan
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Malaysia
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Việt Nam
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Philippines
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Brazil
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                México
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Colombia
              </div>
              <div className='border-r border-solid border-gray-300 mr-[2px] px-1 hover:text-orange cursor-pointer'>
                Chile
              </div>
              <div className='pl-1 hover:text-orange cursor-pointer'>Đài Loan</div>
            </div>
          </div>
        </div>
        {/* p2 */}
        <div className='flex justify-center my-16'>
          <div className='px-6 border-r border-solid border-gray-300 uppercase text-xs block'>
            <Link to='/' className='no-underline block text-gray-500'>
              <span className='cursor-pointer hover:text-orange'>CHÍNH SÁCH BẢO MẬT</span>
            </Link>
          </div>
          <div className='px-6 border-r border-solid border-gray-300 uppercase text-xs block'>
            <Link to='/' className='no-underline block text-gray-500'>
              <span className='cursor-pointer hover:text-orange'>QUY CHẾ HOẠT ĐỘNG</span>
            </Link>
          </div>
          <div className='px-6 border-r border-solid border-gray-300 uppercase text-xs block'>
            <Link to='/' className='no-underline block text-gray-500'>
              <span className='cursor-pointer hover:text-orange'>CHÍNH SÁCH VẬN CHUYỂN</span>
            </Link>
          </div>
          <div className='px-6 uppercase text-xs block'>
            <Link to='/' className='no-underline block text-gray-500'>
              <span className='cursor-pointer hover:text-orange'>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
            </Link>
          </div>
        </div>
        {/* p3 */}
        <div className='flex items-center justify-center'>
          <Link to='/' className='no-underline mx-3'>
            <img
              className='w-32 h-12 rounded-md'
              src='http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png'
              alt='pic'
            />
          </Link>
          <Link to='/' className='no-underline  mx-3'>
            <img
              className='w-32 h-12 rounded-md'
              src='http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png'
              alt='pic'
            />
          </Link>
          <Link to='/' className='no-underline  mx-3'>
            <img
              className='w-32 h-12 rounded-md'
              src='http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png'
              alt='pic'
            />
          </Link>
        </div>
        <div className='block w-full text-center mt-2 mb-6 text-gray-500 text-sm'>Công ty TNHH Shopee</div>
        {/* p4 */}
        <div className='text-center text-xs text-gray-500 mt-10'>
          <div className='mt-6'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}
