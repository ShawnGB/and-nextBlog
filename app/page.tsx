const fetchBlogs = async (): Promise<Blogpost[] | undefined> => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const posts = await fetchBlogs();
  return (
    <main>
      {posts && posts.length > 0
        ? posts.map((post: Blogpost) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))
        : null}
    </main>
  );
}
