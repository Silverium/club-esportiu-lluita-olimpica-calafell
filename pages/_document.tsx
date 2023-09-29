import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black">
        <div id="fb-root"></div>
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0&appId=311555238858518" nonce="Ops48Xy3"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
