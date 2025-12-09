import Link from "next/link";
import { redirect } from "next/navigation";
import LikeButton from "@/components/LikeButton";

const getPost = async (id: string): Promise<Blogpost | undefined> => {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    if (!result) return undefined;

    return result.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) redirect("/");

  const post = await getPost(id);
  if (!post) return <h1>No Data Found</h1>;

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <LikeButton />
        <Link href="/">Go Back</Link>
      </article>
    </main>
  );
}
