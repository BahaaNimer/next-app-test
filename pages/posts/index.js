import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Main.module.css';
import Link from 'next/link';

const Posts = (props) => {
  return (
    <div>
      <h2 className={styles.title}>Posts</h2>

      {props.posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3 style={{ cursor: 'pointer' }}>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

Posts.propTypes = {
  props: PropTypes.object,
};

export default Posts;
