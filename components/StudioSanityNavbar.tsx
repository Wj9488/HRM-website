import Link from "next/link";

const StudioSanityNavbar = (props: any) => {
  return (
    <div className="dark:bg-neutral-900 bg-white">
        <div className="flex justify-between items-center p-4">
            <div className="text-xl font-bold dark:text-white text-neutral-900">HRM Blog</div>
            <div><Link href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Back to website
                </Link>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioSanityNavbar