import React from 'react'
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[]; 
};

function BlogList({posts}: Props) {
  return (
    <div className='mb-4'>
      <h3 className='dark:text-white test-neutral-900 text-3xl mb-4 mt-4'>Latest Posts:</h3>
      <div className='dark:text-white text-neutral-900 flex flex-col'>
        {posts.map(post => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex items-center justify-between gap-4 mt-4 mb-4 border rounded-lg dark:border-white border-neutral-900 p-4">
              <div className=''>
                <h3 className='text-2xl'>
                  {post.title}
                </h3>
                <p className='mt-2 dark:text-neutral-400 text-neutral-500'>
                  {new Date(post._createdAt).toLocaleDateString ("en-UK", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <svg width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='dark:stroke-white stroke-neutral-900' d="M33.5 7.5H1V48.5H48V24" stroke="white" stroke-width="2"/>
                  <path className='dark:fill-white fill-neutral-900' d="M56.9887 4.18354C57.0901 3.36134 56.5057 2.61264 55.6835 2.51127L42.285 0.859396C41.4628 0.758029 40.7141 1.34238 40.6127 2.16458C40.5113 2.98678 41.0957 3.73549 41.9179 3.83685L53.8277 5.30519L52.3594 17.215C52.258 18.0372 52.8424 18.7859 53.6646 18.8873C54.4868 18.9887 55.2355 18.4043 55.3369 17.5821L56.9887 4.18354ZM15.4229 37.1825L56.4229 5.18247L54.5771 2.81753L13.5771 34.8175L15.4229 37.1825Z"/>
                </svg>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
      <div className="flex justify-between items-center mt-12">
          <p className="dark:text-white text-neutral-900 text-sm">STUDENT ID</p>
          <p className="dark:text-white text-neutral-900 text-sm">0000000000</p>
      </div>
    </div>
  )
}

export default BlogList