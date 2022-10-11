import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

  const paths = data.map((d) => {
    return { params: { id: `${d.id}` } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`,
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

// TODO using `getServerSideProps` instead of `getStaticProps`

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

Details.propTypes = {
  props: PropTypes.array,
};

export default Details;
