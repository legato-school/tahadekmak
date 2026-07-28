import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getPosts, formatDate, isGhostConfigured } from '../lib/ghost';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error | unconfigured
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Blog · Taha Dekmak';
    window.scrollTo(0, 0);

    if (!isGhostConfigured()) {
      setStatus('unconfigured');
      return;
    }
    let active = true;
    getPosts({ limit: 'all' })
      .then(({ posts }) => {
        if (!active) return;
        setPosts(posts);
        setStatus('ready');
      })
      .catch((e) => {
        if (!active) return;
        setError(e.message);
        setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section-band pt-32">
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">Writing</p>
          <h2 className="section-title">The Blog</h2>
          <p className="section-lead">
            Notes on AWS architecture, DevSecOps, Kubernetes, and lessons from building cloud
            platforms in production.
          </p>
        </header>

        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border overflow-hidden animate-pulse">
                <div className="aspect-[16/9] bg-bg-tertiary" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-24 bg-bg-tertiary rounded" />
                  <div className="h-5 w-3/4 bg-bg-tertiary rounded" />
                  <div className="h-3 w-full bg-bg-tertiary rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {status === 'unconfigured' && (
          <div className="rounded-lg border border-border bg-bg-secondary p-8 text-center">
            <p className="text-text-primary font-semibold mb-1">Blog not connected yet</p>
            <p className="text-text-secondary text-sm">
              Add your Ghost Content API key to <code className="font-mono text-accent">.env</code> to
              start pulling posts.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="rounded-lg border border-border bg-bg-secondary p-8 text-center">
            <p className="text-text-primary font-semibold mb-1">Couldn't load posts</p>
            <p className="text-text-secondary text-sm font-mono">{error}</p>
          </div>
        )}

        {status === 'ready' && posts.length === 0 && (
          <div className="rounded-lg border border-border bg-bg-secondary p-8 text-center">
            <p className="text-text-primary font-semibold">No posts published yet.</p>
            <p className="text-text-secondary text-sm mt-1">Check back soon.</p>
          </div>
        )}

        {status === 'ready' && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-bg-primary overflow-hidden transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:shadow-black/[0.04]"
              >
                <div className="aspect-[16/9] bg-bg-tertiary overflow-hidden">
                  {post.feature_image ? (
                    <img
                      src={post.feature_image}
                      alt={post.feature_image_alt || post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center font-display text-4xl font-bold text-border">
                      TD
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-2">
                    <span>{formatDate(post.published_at)}</span>
                    {post.reading_time ? (
                      <>
                        <span>·</span>
                        <span>{post.reading_time} min read</span>
                      </>
                    ) : null}
                  </div>
                  <h3 className="font-display text-lg font-bold text-text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.custom_excerpt || post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read more
                    <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
