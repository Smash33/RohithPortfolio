import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/markdown';

function PostList() {
  const posts = getAllPosts();

  return (
    <section className="section">
      {posts.map((post) => (
        <div key={post.slug} className="post-item">
          <div className="post-title">
            <Link to={`/blog/${post.slug}`}>{post.meta.title}</Link>
          </div>
          <div className="post-meta">{post.meta.date}</div>
          <div className="post-excerpt">{post.meta.summary}</div>
        </div>
      ))}
    </section>
  );
}

export default PostList;
