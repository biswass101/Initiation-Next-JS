import { Suspense } from "react"
import { Author } from "./author"

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export default async function PostsSqeuential() {
    const getData = await new Promise((resolve) => setTimeout(() => resolve("Promise resolved"), 2000));
    console.log(getData);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter(post => post.id % 10 === 1);

  return (
    <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-colrs-2 md:grid-cols-3 gap-4">
            {
                filteredPosts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            className="bg-white shadow-md p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
                            <Suspense fallback={<div className="text-sm text-red-500">Loading author...</div>}>
                                <Author userId={post.userId}/>
                            </Suspense>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}