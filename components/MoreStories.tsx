import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { useEffect } from 'react';

export default function MoreStories({ posts }: { posts: Post[] }) {
  useEffect(() => {
    window.FB?.XFBML.parse();
  }, []);
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Més històries
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        <div className="fb-page grid grid-cols-1 gap-y-20 md:grid-cols-2" data-width="" data-href="https://www.facebook.com/lluitacalafell" data-lazy data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/lluitacalafell" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/lluitacalafell">Club Esportiu Lluita Olímpica Calafell</a>
          </blockquote>
        </div>
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
