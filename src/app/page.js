import BlogCard from "../components/BlogCard";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <div>
      <h2 className="text-2xl text-center py-6">Blog Posts - {blogs.length}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          blogs.map(blog => <BlogCard
            key={blog.id}
            blog={blog}
          ></BlogCard>)
        }
      </div>
    </div>
  );
}