'use client';
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <Link
      key={blog.slug}
      href={`/blogs/${blog.slug}`}
      className="text-blue-600 font-medium"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">
            {blog.title}
          </h2>
          <p className="text-gray-600 my-2">{blog.excerpt}</p>
          <button className="hover:underline">Read More →</button>
        </div>
      </div>
    </Link>
  );
}
