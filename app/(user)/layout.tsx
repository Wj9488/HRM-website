import Header from "../../components/Header"
import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="mr-auto ml-auto w-11/12 lg:w-10/12 bg-amber-50 dark:bg-neutral-800 overflow-x-hidden">
        <header className="mt-4 mb-4">
          <Header/>
        </header>
        {children}
      </body>
    </html>
  )
}
