import Link from 'next/link';

const PostsPage = ({ currentUser, posts }) => {
  const postList = posts.map((post) => {
    return (
      <tr key={post.id}>
        <td>{post.message}</td>
        <td>{post.date}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Posts</h1>
      <table className="table" style={{marginBottom: '200px'}}>
        <thead>
          <tr>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{postList}</tbody>
      </table>

      <hr/>
    </div>
  );
};

PostsPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/posts');

  return { posts: data };
};

export default PostsPage;