import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../utils/markdown';
import profile from '../data/profile.json';
import SocialLinks from '../components/SocialLinks';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const postData = getPostBySlug(slug);
      if (postData) {
        setPost(postData);
        document.title = `${postData.meta.title} — ${profile.name}`;
      } else {
        setNotFound(true);
        document.title = `Post not found — ${profile.name}`;
      }
    } catch (error) {
      setNotFound(true);
      document.title = `Post not found — ${profile.name}`;
    }
  }, [slug]);

  if (notFound) {
    return (
      <>
        <header className="header">
          <h1 className="section-title">Post not found</h1>
        </header>
        <section className="section">
          <p>The blog post you're looking for doesn't exist.</p>
          <p style={{ marginTop: '20px' }}>
            <Link to="/blog">[← back to blog]</Link>
          </p>
        </section>
      </>
    );
  }

  if (!post) {
    return (
      <div className="section">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <header className="header">
        <h1 className="section-title">{post.meta.title}</h1>
        <div className="post-meta">{post.meta.date}</div>
      </header>

      <article className="section">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      <SocialLinks />

      <nav className="post-navigation">
        <Link to="/blog">[← back to blog]</Link>
      </nav>
    </div>
  );
}

export default Post;
