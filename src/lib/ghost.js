// Ghost Content API client (read-only, browser-safe key).
// Configure via .env: VITE_GHOST_API_URL and VITE_GHOST_CONTENT_KEY

const API_URL = (import.meta.env.VITE_GHOST_API_URL || 'https://blogs.tahadekmak.com').replace(/\/$/, '');
const CONTENT_KEY = import.meta.env.VITE_GHOST_CONTENT_KEY || '';
const API_VERSION = 'v5.0';

export const isGhostConfigured = () => Boolean(CONTENT_KEY);

function buildUrl(path, params = {}) {
  const url = new URL(`${API_URL}/ghost/api/content/${path}`);
  url.searchParams.set('key', CONTENT_KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, v);
  });
  return url.toString();
}

async function request(path, params) {
  if (!CONTENT_KEY) {
    throw new Error('Ghost Content API key is not configured. Set VITE_GHOST_CONTENT_KEY.');
  }
  const res = await fetch(buildUrl(path, params), {
    headers: { 'Accept-Version': API_VERSION },
  });
  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body?.errors?.[0]?.message || '';
    } catch (_) {
      /* ignore */
    }
    throw new Error(`Ghost API ${res.status}${detail ? `: ${detail}` : ''}`);
  }
  return res.json();
}

export async function getPosts({ limit = 'all', page = 1 } = {}) {
  const data = await request('posts/', {
    include: 'tags,authors',
    limit,
    page,
    order: 'published_at desc',
    fields:
      'id,title,slug,excerpt,custom_excerpt,feature_image,feature_image_alt,published_at,reading_time',
  });
  return { posts: data.posts || [], meta: data.meta };
}

export async function getPostBySlug(slug) {
  const data = await request(`posts/slug/${encodeURIComponent(slug)}/`, {
    include: 'tags,authors',
  });
  return data.posts?.[0] || null;
}

export function formatDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch (_) {
    return '';
  }
}
