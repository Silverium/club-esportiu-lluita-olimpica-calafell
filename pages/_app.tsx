import 'tailwindcss/tailwind.css'
import 'flowbite';

import NavigationBar from 'components/NavigationBar';
import { AppProps } from 'next/app'
import Script from 'next/script';
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
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.FB?.XFBML.parse();
  }, [Component]);

  return (
    <>
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=926473622420128" nonce="URX4SzUB" />

      <NavigationBar />
      <div id="fb-root" />
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


