import { memo, useState } from 'react'
import { useShop } from '../shop'
import {
  ArrowRight,
  CartIcon,
  ChevronDown,
  ChevronRight,
  CloseIcon,
  CompareIcon,
  HeartIcon,
  HelpIcon,
  PhoneIcon,
  PinIcon,
  SearchIcon,
  SupportIcon,
  UserIcon,
} from './Icons'

const socialLinks = ['twitter', 'facebook', 'pinterest-p', 'reddit', 'youtube', 'instagram']

function SocialLinks({ compact = false }) {
  return (
    <ul className="list-unstyled list-group">
      <li className={compact ? 'text text-14' : 'text-14'}>Follow us:</li>
      {socialLinks.map((social) => (
        <li key={social}>
          <a href="#" aria-label={social}>
            <i className={`fab fa-${social}`} />
          </a>
        </li>
      ))}
    </ul>
  )
}

function MobileMenu() {
  return (
    <header className="site-header site-header--menu-center mobile-menu-trigger-dark bg-secondary-700 d-lg-none site-header--absolute">
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="site-header__brand">
            <a href="#">
              <img src="/image/logo/logo-white.png" alt="logo" className="logo-black" />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay" />
            <nav className="menu-block menu-block-inner" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left" />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Home</a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Pages <i className="fas fa-angle-down" />
                  </a>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Case Studies <i className="fas fa-angle-right" />
                      </a>
                      <ul className="sub-menu" id="submenu-9">
                        <li className="sub-menu--item"><a href="#">Case Study</a></li>
                        <li className="sub-menu--item"><a href="#">Case Study Details</a></li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Services <i className="fas fa-angle-right" />
                      </a>
                      <ul className="sub-menu" id="submenu-10">
                        <li className="sub-menu--item"><a href="#">Service</a></li>
                        <li className="sub-menu--item"><a href="#">Service Details</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Blogs <i className="fas fa-angle-down" />
                  </a>
                  <ul className="sub-menu" id="submenu-11">
                    <li className="sub-menu--item"><a href="#">Blog One</a></li>
                    <li className="sub-menu--item"><a href="#">Blog Two</a></li>
                    <li className="sub-menu--item"><a href="#">Blog Details One</a></li>
                    <li className="sub-menu--item"><a href="#">Blog Details Two</a></li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Contact</a>
                </li>
              </ul>
              <div className="m-social-block">
                <SocialLinks compact />
              </div>
            </nav>
          </div>
          <div className="mobile-menu-trigger">
            <span />
          </div>
        </nav>
      </div>
    </header>
  )
}

function OfferWidget() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="offer-widget-01 d-none d-lg-block">
      <div className="container">
        <div className="offer-widget-01__wrapper">
          <div className="offer-widget-01__wrapper--text">
            <span className="text-gray-900 text-20 black bg-warning-300">Black</span>
            <span className="friday text-white text-24">Friday</span>
          </div>
          <div className="offer-widget-01__wrapper--discount-text">
            <span className="up-to text-white text-14">Up to</span>
            <span className="num text-warning-500 text-40">59%</span>
            <span className="text-white off text-20 text-uppercase">off</span>
          </div>
          <div className="offer-widget-01__wrapper--button">
            <a className="btn btn-warning" href="#">
              Shop now <ArrowRight />
            </a>
          </div>
          <button
            type="button"
            className="offer-widget-01__wrapper--close-button"
            aria-label="Close offer"
            onClick={() => setVisible(false)}
          >
            <CloseIcon stroke="white" />
          </button>
        </div>
      </div>
    </div>
  )
}

const TopNav = memo(function TopNav() {
  return (
    <div className="top-nav bg-secondary-700 d-none d-lg-block">
      <div className="container">
        <div className="top-nav__wrapper">
          <div className="top-nav__wrapper--text">
            <p className="text-14">Welcome to Clicon online eCommerce store. </p>
          </div>
          <div className="top-nav__wrapper--content">
            <div className="social-content">
              <SocialLinks />
            </div>
            <div className="switcher">
              <div className="switcher__language">
                <select className="nice-select" defaultValue="1">
                  <option data-display="Eng" value="1">English</option>
                  <option data-display="Man" value="2">Mandarin </option>
                  <option data-display="Russ" value="3">Russian</option>
                </select>
              </div>
              <div className="switcher__currency">
                <select className="nice-select" defaultValue="1">
                  <option data-display="USD" value="1">Dollar (USD)</option>
                  <option data-display="EUR" value="2">Euro (EUR)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

function formatMoney(value, fixed = false) {
  return `$${value.toLocaleString('en-US', {
    minimumFractionDigits: fixed ? 2 : 0,
    maximumFractionDigits: fixed ? 2 : 0,
  })}`
}

function DeskNav() {
  const { cart, cartCount, cartTotal, removeFromCart } = useShop()

  return (
    <div className="desk-nav d-none d-lg-block">
      <div className="container">
        <div className="desk-nav__wrapper">
          <div className="desk-nav__wrapper--logo">
            <a href="#">
              <img src="/image/logo/logo-white.png" alt="logo" />
            </a>
          </div>
          <div className="desk-nav__wrapper--search">
            <form action="#" onSubmit={(event) => event.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search for anything..." />
                <button type="submit" className="icon" aria-label="Search">
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
          <div className="desk-nav__wrapper--widget">
            <div className="cart cart-hide_show">
              <button id="showHiddenMenuOne" className="plain-btn" type="button" aria-label="Open cart">
                <CartIcon />
              </button>
              <div className="frame">
                <span>{cartCount}</span>
              </div>
              <div className="shopping-cart-popup">
                <div className="card-header">
                  <h6 className="title">
                    Shopping Cart <span className="count">({String(cartCount).padStart(2, '0')})</span>
                  </h6>
                </div>
                <div className="card-body">
                  {cart.map((item) => (
                    <div className="product-todo" key={item.id}>
                      <div className="card-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="card-content">
                        <p className="text">{item.title}</p>
                        <div className="price-box">
                          <span className="count">{item.quantity} x</span>
                          <span className="price">{formatMoney(item.price)}</span>
                        </div>
                      </div>
                      <div className="close-btn">
                        <button type="button" aria-label="Remove item" onClick={() => removeFromCart(item.id)}>
                          <CloseIcon stroke="#929FA5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-subtototal">
                  <p className="text text-14 text-gray-700">Sub-Total</p>
                  <p className="price">{formatMoney(cartTotal, true)} USD</p>
                </div>
                <div className="card-button-group">
                  <button type="submit" className="btn btn-primary w-100 d-block mb-3">
                    Checkout now <ArrowRight />
                  </button>
                  <button type="submit" className="btn btn-outline-primary w-100 d-block">
                    View Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="wishlist">
              <button className="plain-btn" type="button" aria-label="Wishlist">
                <HeartIcon />
              </button>
            </div>
            <div className="user user-hide_show">
              <button id="showHiddenMenuTwo" className="plain-btn" type="button" aria-label="Account">
                <UserIcon />
              </button>
              <div className="signin-popup" id="hiddenWidgetTwo">
                <h2 className="title">Sign in to your account</h2>
                <div className="signin-form">
                  <form action="#" onSubmit={(event) => event.preventDefault()}>
                    <div className="form-group mb-3">
                      <label htmlFor="desk-email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="desk-email" />
                    </div>
                    <div className="form-group">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">Password</label>
                        <a href="#" className="forgot-btn">Forget Password</a>
                      </div>
                      <div className="pass-box">
                        <input className="form-control" id="password-hide_show9" type="password" placeholder="password" />
                        <div className="pass-box--eye select-icon__nine">
                          <i className="far fa-eye" />
                        </div>
                      </div>
                    </div>
                    <div className="form-button">
                      <button className="btn btn-primary w-100">
                        Login <ArrowRight />
                      </button>
                    </div>
                    <div className="from-text">
                      <div className="texts">
                        <p className="text">Don’t have account</p>
                      </div>
                      <a href="#" className="btn btn-outline-primary w-100">Create account</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const categoryDropdown = [
  'Computer & Laptop',
  'Computer Accessories',
  'Headphone',
  'Mobile Accessories',
  'Gaming Console',
  'Camera & Photo',
  'TV & Homes Appliances',
  'Watchs & Accessories',
  'GPS & Navigation',
  'Warable Technology',
]

function NavIcon({ children }) {
  return <span className="d-block me-1">{children}</span>
}

const BottomNav = memo(function BottomNav() {
  return (
    <div className="bottom-nav d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="bottom-nav__wrapper">
            <div className="left-sidebar">
              <div className="dropdown">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  All Category <ChevronDown />
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {categoryDropdown.slice(0, 2).map((category) => (
                    <li key={category}><a className="dropdown-item" href="#">{category}</a></li>
                  ))}
                  <li>
                    <a className="dropdown-item" href="#">
                      SmartPhone <ChevronRight />
                    </a>
                    <div className="sub-item">
                      <div className="sub-wrapper">
                        <ul className="input-field">
                          {['All', 'iPhone', 'Sansung', 'Realme', 'Xiaomi', 'Oppo', 'Vivo', 'OnePlus', 'Huawei', 'Infinix', 'Tecno'].map((brand) => (
                            <li key={brand}><a href="#">{brand}</a></li>
                          ))}
                        </ul>
                        <div className="featured-itme-01">
                          <div className="featured-list">
                            <h6 className="title">FEATURED PHONES</h6>
                            {[
                              ['/image/featured-itme/f-i-1.png', 'Samsung Electronics Samsung Galexy S21 5G', '$160'],
                              ['/image/featured-itme/f-i-2.png', 'Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone', '$1,500'],
                              ['/image/featured-itme/f-i-3.png', 'Sony DSCHX8 High Zoom Point & Shoot Camera', '$2,300'],
                            ].map(([image, title, price]) => (
                              <a href="#" className="d-block" key={title}>
                                <div className="single-featured">
                                  <div className="card-image">
                                    <img src={image} alt="product" />
                                  </div>
                                  <div className="card-contetn">
                                    <p>{title}</p>
                                    <span>{price}</span>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="discount-add">
                            <div className="card-img">
                              <img src="/image/featured-itme/d-mobile.png" alt="accessories" />
                            </div>
                            <div className="card-content">
                              <h4>21% Discount</h4>
                              <p>Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
                              <div className="price-tag">
                                <span className="text">Starting price:</span>
                                <span className="price">$99 USD</span>
                              </div>
                              <a className="btn btn-primary w-100" href="#">
                                Shop now <ArrowRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {categoryDropdown.slice(2).map((category) => (
                    <li key={category}><a className="dropdown-item" href="#">{category}</a></li>
                  ))}
                </ul>
              </div>
              <nav className="mainnav">
                <ul>
                  <li className="single-list">
                    <a href="#"><NavIcon><PinIcon /></NavIcon><span className="text-14">Track Order</span></a>
                  </li>
                  <li className="single-list">
                    <a href="#"><NavIcon><CompareIcon /></NavIcon><span className="text-14">Compare</span></a>
                  </li>
                  <li className="single-list">
                    <a href="#"><NavIcon><SupportIcon /></NavIcon><span className="text-14">Customer Support</span></a>
                  </li>
                  <li className="single-list">
                    <a href="#"><NavIcon><HelpIcon /></NavIcon><span className="text-14">Need Help</span></a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tell">
              <span><PhoneIcon /></span>
              +1-202-555-0104
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export function Header() {
  return (
    <>
      <MobileMenu />
      <OfferWidget />
      <TopNav />
      <DeskNav />
      <BottomNav />
    </>
  )
}
