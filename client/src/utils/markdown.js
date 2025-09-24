// Import all markdown files using Vite's import.meta.glob
const modules = import.meta.glob('../data/posts/*.md', { query: '?raw', import: 'default', eager: true });

// Convert to expected format
const markdownFiles = {};
Object.entries(modules).forEach(([path, content]) => {
  const slug = path.replace('../data/posts/', '').replace('.md', '');
  markdownFiles[slug] = content;
});

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    // If no frontmatter, try to extract title from first heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    return {
      meta: {
        title: titleMatch ? titleMatch[1] : 'Untitled',
        date: 'No date',
        summary: content.slice(0, 160) + '...'
      },
      content
    };
  }

  const [, frontmatterStr, markdownContent] = match;
  const meta = {};
  
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      meta[key.trim()] = value;
    }
  });

  return {
    meta,
    content: markdownContent
  };
}

// Get all posts
export function getAllPosts() {
  const posts = Object.entries(markdownFiles).map(([slug, rawContent]) => {
    const { meta, content } = parseFrontmatter(rawContent);
    return {
      slug,
      meta,
      content
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}

// Get a single post by slug
export function getPostBySlug(slug) {
  const rawContent = markdownFiles[slug];
  if (!rawContent) {
    return null;
  }

  const { meta, content } = parseFrontmatter(rawContent);
  return {
    slug,
    meta,
    content
  };
}
