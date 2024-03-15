import AlertBanner from 'components/AlertBanner'
import Image from 'next/image'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
      <footer className='flex content-center justify-center text-xs'>
        <p>By <a href='https://www.soldeplata.dev' className='underline text-sky-600'>soldeplata.dev</a> with ❤️ <a href="https://github.com/silverium"><Image src="https://github.com/fluidicon.png" width={20} height={20} alt="GitHub" className='inline relative' style={{top: -2}} />
        </a></p>

      </footer>
    </>
  )
}
