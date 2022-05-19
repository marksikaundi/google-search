import Head from "next/head";

export default function Home() {
  return (      
      <header className="flex">
        <div className="flex space-x-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>

        <div className="flex space-x-4 items center">
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>

  
  )
}
