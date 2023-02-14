import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client"
import { PortableText } from "@portabletext/react" 
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
  const query = groq`*[_type=="post"] 
  {
    slug
  }`
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }))
}

async function Post({params: {slug}}: Props) {
    const query = groq`
    *[_type=="post" && slug.current == $slug] [0]
    {
        ..., 
        author->,
        categories[]->
    }
    `

    const post: Post = await client.fetch(query, { slug });

    

  return (
    <article>
        <section>
            <div className="dark:text-white text-neutral-900">
                <h1 className="text-3xl font-medium">{post.title}</h1>
                <p className='mt-2 dark:text-neutral-400 text-neutral-500'>
                {new Date(post._createdAt).toLocaleDateString ("en-UK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
        </section>

        <section className="dark:text-white text-neutral-900 text-lg mt-8 mb-8">
        <PortableText value={post.body} components={RichTextComponents} />
        </section>

        <Link href="/">
          <button className='mb-4 mt-4 dark:text-white text-neutral-900 border border-neutral-900 dark:border-white p-2 rounded-xl text-center w-full'>
            Back to home
          </button>
        </Link>
        <div className="flex justify-between items-center mt-12 mb-4">
          <p className="dark:text-white text-neutral-900 text-sm">STUDENT ID</p>
          <p className="dark:text-white text-neutral-900 text-sm">710041566</p>
      </div>
    </article>
  )
}

export default Post