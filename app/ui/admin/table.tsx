import { fetchBlogs } from "@/app/lib/data"
import { Blog } from '../../lib/definitions'

export default async function Table() {
    const blogs = await fetchBlogs()

    console.log(`blogs ${blogs}`)
    return (
        <div>
            {blogs?.map((blog:Blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    )
}