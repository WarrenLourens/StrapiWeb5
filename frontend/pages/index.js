import Head from "next/head"
import NextImage from "next/image"
const HomePage = () => {
  return (
    <div id="background">
      <Head>
        <title>Chasing the Cart</title>
      </Head>
    <div id='flex'>
      <NextImage id='Banner'
            src="/truck.jpg"
            width={300}
            height={300}
            alt="Truck"
          />
      <p id='test'><span id='bold'>Chasing the cart</span><br/>
      Welcome to Chasing the cart, a local food truck that serves restaurant quality food for people on the go. 

      </p>
      </div>
      
      
     
    </div>
  )
}



export default HomePage
