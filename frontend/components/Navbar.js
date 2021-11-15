import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <NextImage
            src="/truck.jpg"
            alt="home"
            className="logo"
            height="100"
            width="100"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="50" width="50" src="/ShoppingCart.png" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  )
}

export default Navbar
