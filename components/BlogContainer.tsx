export default function BlogContainer({ children }) {
  return <div className="container mx-auto px-5 flex">
    <div className="flex-5">{children}</div>
    <div className="fb-page flex-1 min-w-[200px] mt-16" data-href="https://www.facebook.com/lluitacalafell" data-tabs="timeline" data-width="200" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/lluitacalafell" className="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/lluitacalafell">C.E. Lluita Olímpica Calafell</a>
      </blockquote>
    </div>
  </div>
}
