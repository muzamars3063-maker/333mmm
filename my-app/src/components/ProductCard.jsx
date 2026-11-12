import { useShop } from '../shop'
import { CartIcon, EyeIcon, HeartIcon, StarIcon } from './Icons'

function Price({ product, className = 'price-valu' }) {
  return (
    <p className={className}>
      {product.oldPrice && <del>{product.oldPrice}</del>}
      {product.price}
    </p>
  )
}

function CardHover({ product, small = false }) {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useShop()
  const iconSize = small ? 24 : 24

  const handleAdd = (event) => {
    event.preventDefault()
    addToCart(product)
  }

  const handleWishlist = (event) => {
    event.preventDefault()
    toggleWishlist(product.id)
  }

  const handleView = (event) => {
    event.preventDefault()
    openQuickView(product)
  }

  return (
    <div className="card-hover">
      <a
        href="#"
        className="wishlist"
        aria-label="Add to wishlist"
        onClick={handleWishlist}
      >
        <HeartIcon size={iconSize} filled={isWishlisted(product.id)} />
      </a>
      <a href="#" className="cart" aria-label="Add to cart" onClick={handleAdd}>
        <CartIcon size={iconSize} />
      </a>
      <a href="#" className="view" aria-label="Quick view" onClick={handleView}>
        <EyeIcon size={iconSize} stroke="white" />
      </a>
    </div>
  )
}

export function Rating({ count, outlined }) {
  return (
    <ul className="rating">
      {[0, 1, 2, 3, 4].map((index) => (
        <li key={index}>
          <StarIcon filled={index < 4 || !outlined} />
        </li>
      ))}
      <li>({count})</li>
    </ul>
  )
}

export function ProductCardOne({ product }) {
  return (
    <div className="card-product card-product--01">
      <div className="card-image">
        <img src={product.image} alt={product.title} className="mw-100" />
        <CardHover product={product} small />
      </div>
      <div className="card-body p-0">
        <h6 className="title">{product.title}</h6>
        <Price product={product} />
      </div>
      {product.badge && <p className={`${product.badgeClass} badge`}>{product.badge}</p>}
    </div>
  )
}

export function ProductCardTwo({ product }) {
  return (
    <div className="card-product card-product--02">
      <div className="card-image">
        <img src={product.image} alt={product.title} className="mw-100" />
      </div>
      <div className="card-body p-0">
        <h6 className="title">{product.title}</h6>
      </div>
    </div>
  )
}

export function ProductCardThree({ product }) {
  return (
    <div className="card-product card-product--03">
      <div className="card-image">
        <img src={product.image} alt={product.title} className="mw-100" />
        <CardHover product={product} />
      </div>
      <div className="card-body p-0">
        <Rating count={product.count} outlined={product.outlinedStar} />
        <h6 className="title">{product.title}</h6>
        <Price product={product} />
      </div>
      {product.badge && <p className={`${product.badgeClass} badge`}>{product.badge}</p>}
    </div>
  )
}

export function ProductCardFour({ product }) {
  return (
    <div className="card-product card-product--04">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-body p-0">
        <h6 className="title">{product.title}</h6>
        <span className="price">{product.price}</span>
      </div>
    </div>
  )
}
