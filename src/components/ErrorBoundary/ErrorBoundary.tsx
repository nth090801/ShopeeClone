import { Component, ErrorInfo, ReactNode } from 'react'
import path from 'src/constants/path'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error: ', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main className='flex h-screen w-full flex-col items-center justify-center'>
          <h1 className='text-9xl font-extrabold tracking-widest text-gray-900'>500</h1>
          <div className='absolute rotate-12 rounded bg-orange px-2 text-sm text-white'>Error!</div>
          <button className='mt-5'>
            <div className='flex items-center justify-center'>
              <a
                href={path.home}
                className=' mt-5 flex items-center justify-center rounded-sm bg-orange px-4 py-2  text-white hover:opacity-90'
              >
                Trở về trang chủ
              </a>
            </div>
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
