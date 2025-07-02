import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from '../../data/properties.json';
import BlogCard from "@/components/BlogCard";


export default function BlogList() {
    return (
        <>
            <Header />
            <div className="mt-24 px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Real Estate Blogs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div >
            <Footer />
        </>
    );
}
