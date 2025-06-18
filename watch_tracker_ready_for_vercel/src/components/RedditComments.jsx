export default function RedditComments({ comments }) {
  return (
    <div>
      <h4>Reddit Comments</h4>
      {comments.map((c, idx) => (
        <div key={idx} style={{ marginBottom: '10px', padding: '5px', borderBottom: '1px solid #ccc' }}>
          <strong>{c.user}</strong> <em>{new Date(c.timestamp).toLocaleString()}</em>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
