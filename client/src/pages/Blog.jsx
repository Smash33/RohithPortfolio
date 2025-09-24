import { useEffect } from 'react';
import profile from '../data/profile.json';
import PostList from '../components/PostList';

function Blog() {
  useEffect(() => {
    document.title = `Blog — ${profile.name}`;
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="section-title">Blog</h1>
      </header>

      <PostList />
    </>
  );
}

export default Blog;
