import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { lazy, useEffect } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  useEffect(() => {
    window.FB?.XFBML.parse();
  }, [Component]);
  return (
    <>
      <div id="fb-root"></div>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
