
const Header = () => {
  return (
    <div className="flex-col lg:flex-row"> 
        <div className="flex justify-between items-center mb-12">
          <p className="dark:text-white text-neutral-900 text-sm">BEM2021</p>
          <p className="dark:text-white text-neutral-900 text-sm">50%</p>
        </div>
      <hr className="border dark:border-neutral-200 border-neutral-700 mt-4 w-full"></hr>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-neutral-900 dark:text-white hmr__sizing font-extrabold flex justify-between items-center">
          <h1 className="mt-4 mb-4 ">H</h1>
          <h1 className="mt-4 mb-4 ">R</h1>
          <h1 className="mt-4 mb-4 ">M</h1>
        </div>
        <div className="flex-col lg:flex-row items-center justify-between text-5xl text-neutral-900 dark:text-white font-bold mb-12 lg:mb-0">
          <h1>HUMAN</h1>
          <h1>RESOURCE</h1>
          <h1>MANAGEMENT</h1>
          <h1>BLOG</h1>
        </div>
      </div>
      <hr className="border dark:border-neutral-200 border-neutral-700 mb-4 w-full"></hr>
    </div>
  )
}

export default Header