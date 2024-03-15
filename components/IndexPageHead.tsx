import { toPlainText } from '@portabletext/react'
import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  return (
    <Head>
      <title>{title}</title>
      <BlogMeta />
      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL : process.env.NODE_ENV === 'production' ? 'https://www.lluitacalafell.com' : ''
          }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
      <meta
        key="author"
        name="author"
        content="Soldeplata Saketos"
      />
      <meta
        key="email"
        name="email"
        content="soldeplatadeveloper@gmail.com"
      />
    </Head>
  )
}
