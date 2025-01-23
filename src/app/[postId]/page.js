"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const PostDetails = () => {
  const params = useParams(); // Next.js এর নতুন হুক ব্যবহার করা হচ্ছে
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setLoading(false);
        });
    }
  }, [params?.postId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl font-semibold animate-pulse text-indigo-600">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-indigo-700">
            Post No - {post.id}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            {post.title}
          </h2>
        </div>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>{post.body}</p>
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-all">
            Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
