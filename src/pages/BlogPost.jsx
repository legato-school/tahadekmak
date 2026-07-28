import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getPostBySlug, formatDate, isGhostConfigured } from '../lib/ghost';
import Subscribe from '../components/Subscribe';

// Ghost post content contains Portal subscribe links (#/portal/...) that only
// work on the Ghost frontend. On our headless site, redirect those clicks to
// our own subscribe form instead.
function handleContentClick(e) {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (href.includes('/portal') || href.includes('#/portal')) {
    e.preventDefault();
    const box = document.getElementById('subscribe');
    if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = document.getElementById('subscribe-email');
    if (input) setTimeout(() => input.focus(), 400);
  }
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | notfound | error | unconfigured
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isGhostConfigured()) {
      setStatus('unconfigured');
      return;
    }
    let active = true;
    setStatus('loading');
    getPostBySlug(slug)
      .then((p) => {
        if (!active) return;
        if (!p) {
          setStatus('notfound');
          document.title = 'Not found · Taha Dekmak';
          return;
        }
        setPost(p);
        setStatus('ready');
        document.title = `${p.title} · Taha Dekmak`;
      })
      .catch((e) => {
        if (!active) return;
        setError(e.message);
        setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <article className="section-band pt-32">
      <div className="container-max section-padding">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors mb-8"
        >
          <FaArrowLeft className="w-3 h-3" />
          All posts
        </Link>

        {status === 'loading' && (
          <div className="max-w-3xl animate-pulse space-y-4">
            <div className="h-4 w-32 bg-bg-tertiary rounded" />
            <div className="h-10 w-3/4 bg-bg-tertiary rounded" />
            <div className="aspect-[16/9] bg-bg-tertiary rounded-lg" />
          </div>
        )}

        {status === 'unconfigured' && (
          <p className="text-text-secondary">
            Blog not connected. Add your Ghost Content API key to <code className="font-mono text-accent">.env</code>.
          </p>
        )}

        {status === 'notfound' && (
          <div className="max-w-2xl">
            <h1 className="section-title mb-3">Post not found</h1>
            <p className="text-text-secondary">
              That post doesn't exist or was unpublished.{' '}
              <Link to="/blogs" className="text-accent hover:underline">Back to the blog</Link>.
            </p>
          </div>
        )}

        {status === 'error' && (
          <p className="text-text-secondary font-mono text-sm">Error loading post: {error}</p>
        )}

        {status === 'ready' && post && (
          <div className="max-w-3xl">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-muted mb-4">
                <span>{formatDate(post.published_at)}</span>
                {post.reading_time ? (
                  <>
                    <span>·</span>
                    <span>{post.reading_time} min read</span>
                  </>
                ) : null}
                {post.primary_author?.name ? (
                  <>
                    <span>·</span>
                    <span>{post.primary_author.name}</span>
                  </>
                ) : null}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-[1.05]">
                {post.title}
              </h1>
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {post.tags.map((t) => (
                    <span
                      key={t.id}
                      className="px-2.5 py-1 rounded-md bg-bg-tertiary text-text-secondary text-xs font-mono"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {post.feature_image && (
              <img
                src={post.feature_image}
                alt={post.feature_image_alt || post.title}
                className="w-full rounded-lg border border-border mb-10"
              />
            )}

            <div
              className="prose-blog"
              onClick={handleContentClick}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-16">
              <Subscribe />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
