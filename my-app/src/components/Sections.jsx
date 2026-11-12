import { memo, useEffect, useState } from 'react'
import {
  bestDealBig,
  bestDeals,
  categories,
  features,
  footerCategories,
  footerLinks,
  news,
  popularTags,
  productsSectionOne,
  productsSectionThree,
  productsSectionTwo,
  sectionOneTabs,
  sectionTwoTabs,
} from '../data'
import { useShop } from '../shop'
import {
  AppStoreIcon,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  CommentIcon,
  GooglePlayIcon,
  HeartIcon,
  StarIcon,
  UserCircleIcon,
} from './Icons'
import { ProductCardFour, ProductCardOne, ProductCardThree, ProductCardTwo } from './ProductCard'

function AddOne() {
  return (
    <div className="add-block-01">
      <div className="add-content">
        <h6 className="subtitle text-warning-500">Summer Sales</h6>
        <h2 className="title">New Google <br /> Pixel 6 Pro</h2>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
      </div>
      <div className="add-image">
        <img src="/image/add/add-mobile-1.png" alt="mobile" />
        <span className="badge">29% OFF</span>
      </div>
    </div>
  )
}

function AddTwo() {
  return (
    <div className="add-block-02">
      <div className="add-image">
        <img src="/image/add/airpods.png" alt="mobile" />
      </div>
      <div className="add-content">
        <h2 className="title">Xiaomi <br /> FlipBuds Pro</h2>
        <span className="price">$229 USD</span>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
      </div>
    </div>
  )
}

function AddThree() {
  return (
    <div className="add-block-03">
      <div className="add-block-03__content">
        <h6 className="subtitle">COMPUTER & ACCESSORIES</h6>
        <h2 className="title">32% Discount</h2>
        <p className="text">For all ellectronics products</p>
        <div className="content-wrapper">
          <p className="text-one">Offers ends in:</p>
          <p className="text-two">ENDS OF CHRISTMAS</p>
        </div>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight size={24} strokeWidth={2} /></a>
      </div>
      <div className="add-block-03__image d-none d-md-block">
        <img src="/image/add/apple-accessories.png" alt="accessories" className="w-100" />
      </div>
    </div>
  )
}

function AddFour() {
  return (
    <div className="add-block-04">
      <div className="add-content">
        <h6 className="subtitle">INTRODUCING</h6>
        <h2 className="title">New Apple <br /> Homepod Mini</h2>
        <p className="text">Jam-packed with innovation, <br /> HomePod mini delivers unexpectedly.</p>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
      </div>
      <div className="add-image d-none d-md-block text-end">
        <img src="/image/add/soundbox.png" alt="soundbox" className="mw-100" />
      </div>
    </div>
  )
}

function AddFive() {
  return (
    <div className="add-block-05">
      <div className="add-content">
        <h6 className="subtitle">INTRODUCING</h6>
        <h2 className="title">Xiaomi Mi 11 Ultra <br /> 12GB+256GB</h2>
        <p className="text">*Data provided by internal <br /> laboratories. Industry measurment.</p>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
      </div>
      <div className="add-image d-none d-md-block">
        <img src="/image/add/mobile.png" alt="mobile" className="w-100" />
        <div className="price-tag"><span>$299</span></div>
      </div>
    </div>
  )
}

function AddSix() {
  return (
    <div className="add-block-06">
      <div className="add-image">
        <img src="/image/add/airpod-02.png" alt="airpod" />
      </div>
      <div className="add-content">
        <h2 className="title">Xiaomi True <br /> Wireless Earbuds</h2>
        <p className="text">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</p>
        <div className="content-wrapper">
          <p className="text-one">Only for:</p>
          <p className="text-two">$299 USD</p>
        </div>
        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
      </div>
    </div>
  )
}

function AddSeven() {
  return (
    <div className="add-block-07">
      <h6 className="subtile">SUMMER SALES</h6>
      <h2 className="title">37% DISCOUNT</h2>
      <p>only for <span className="text-warning-500">SmartPhone</span> product.</p>
      <a className="btn btn-secondary" href="#">Shop now <ArrowRight /></a>
    </div>
  )
}

const heroSlides = [
  { price: '$299', image: '/image/banner/x-box.png' },
  { price: '$499', image: '/image/banner/x-box.png' },
  { price: '$599', image: '/image/banner/x-box.png' },
]

export const Hero = memo(function Hero() {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8">
            <div className="banner-area__slider">
              <div className="product-slider-01">
                {heroSlides.map((slide) => (
                  <div className="single-slider" key={slide.price}>
                    <div className="banner-slider-content-01">
                      <div className="banner-content">
                        <h6 className="subtitle text-secondary-500 text-14 text-uppercase">
                          <span className="line" />THE BEST PLACE TO PLAY
                        </h6>
                        <h2 className="titel">Xbox Consoles</h2>
                        <p className="text">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                        <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
                      </div>
                      <div className="banner-image-group">
                        <img src={slide.image} alt="x-box" />
                        <div className="price-tag"><span>{slide.price}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="banner-area__add">
              <div className="one"><AddOne /></div>
              <div className="two"><AddTwo /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export function Features() {
  return (
    <div className="features-section-01">
      <div className="container">
        <div className="features-section-01__wrapper">
          {features.map((item) => (
            <div className="single-item" key={item.id}>
              <div className="card-features">
                <div className="card-image">
                  <img src={item.image} alt="card" className="mw-100" />
                </div>
                <div className="card-body p-0">
                  <h4 className="title heading-dark">{item.title}</h4>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function useCountdown() {
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const target = Date.now() + (2 * 24 * 60 * 60 + 14 * 60 * 60 + 23 * 60 + 12) * 1000
    const update = () => setRemaining(Math.max(0, target - Date.now()))

    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const days = Math.floor(remaining / 86400000)
  const hours = Math.floor((remaining / 3600000) % 24)
  const minutes = Math.floor((remaining / 60000) % 60)
  const seconds = Math.floor((remaining / 1000) % 60)
  const pad = (value) => String(value).padStart(2, '0')

  return [
    ['d', pad(days)],
    ['h', pad(hours)],
    ['m', pad(minutes)],
    ['s', pad(seconds)],
  ]
}

export function BestDeals() {
  const timer = useCountdown()
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useShop()

  return (
    <div className="best-deal-section-01">
      <div className="container">
        <div className="best-deal-section-01__wrapper">
          <div className="best-deal-section-01__top-content">
            <div className="section-content">
              <h2 className="title">Best Deals</h2>
            </div>
            <div className="deals-timer">
              <div className="deals-timer__content">
                <h6 className="title">Deals ends in</h6>
              </div>
              <div className="timer-block">
                {timer.map(([label, value]) => (
                  <div className="single-timer" key={label}>
                    <div className="timer-title-block">
                      <span className="time">{value}</span>
                      <span className="label">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="best-deal-section-01__top-button">
            <a className="btn-text" href="#">Browse All Product <ArrowRight size={20} /></a>
          </div>
        </div>
        <div className="best-deal-section-01__product-area">
          <div className="best-deal-section-01__product-area--big-product">
            <div className="big-product-card-01">
              <div className="card-image">
                <img src={bestDealBig.image} alt="ps5" className="w-100" />
              </div>
              <div className="card-body">
                <ul className="rating">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index}><StarIcon size={18} /></li>
                  ))}
                  <li className="text-gray-500">({bestDealBig.rating})</li>
                </ul>
                <h6 className="title">{bestDealBig.title}</h6>
                <span className="price-valu"><del>{bestDealBig.oldPrice}</del>{bestDealBig.price}</span>
                <p className="text">{bestDealBig.text}</p>
              </div>
              <div className="card-button-group">
                <a
                  className="wishlist-btn"
                  href="#"
                  aria-label="Add to wishlist"
                  onClick={(event) => {
                    event.preventDefault()
                    toggleWishlist(bestDealBig.id)
                  }}
                >
                  <HeartIcon size={24} filled={isWishlisted(bestDealBig.id)} />
                </a>
                <a
                  href="#"
                  className="btn btn-primary w-100 addtocard-btn text-uppercase"
                  onClick={(event) => {
                    event.preventDefault()
                    addToCart(bestDealBig)
                  }}
                >
                  Add to card <ArrowRight />
                </a>
                <a
                  href="#"
                  className="action-btn"
                  aria-label="Quick view"
                  onClick={(event) => {
                    event.preventDefault()
                    openQuickView(bestDealBig)
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="offer-tag">
                {bestDealBig.badges.map((badge) => (
                  <p className={`${badge.className} badge`} key={badge.label}>{badge.label}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="best-deal-section-01__product-area--small-product">
            {bestDeals.map((product) => <ProductCardOne product={product} key={product.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Categories = memo(function Categories() {
  return (
    <div className="shop-category-section-01">
      <div className="container">
        <div className="section-title-block text-center">
          <h2 className="title">Shop with Categories</h2>
        </div>
        <div className="shop-category-section-01__slider">
          <div className="product-slider-02">
            {categories.map((category) => (
              <a href="#" className="single-item" key={category.id}>
                <ProductCardTwo product={category} />
              </a>
            ))}
          </div>
          <div className="product-slider-02__control-buttons">
            <button className="button button--prev" type="button" aria-label="Previous categories">
              <ArrowLeft />
            </button>
            <button className="button button--next" type="button" aria-label="Next categories">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

function Tabs({ tabs, active, onSelect, prefix }) {
  return (
    <ul className="nav nav-pills" id={`${prefix}-tab`} role="tablist">
      {tabs.map((tab, index) => (
        <li className="nav-item" role="presentation" key={tab}>
          <button
            className={`nav-link${active === index ? ' active' : ''}`}
            id={`${prefix}-${index}-tab`}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => onSelect(index)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  )
}

function BrowseLink() {
  return (
    <div className="all-product-button">
      <a className="text-btn" href="#">Browse All Product <ArrowRight size={20} /></a>
    </div>
  )
}

export function ProductsSectionOne() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="products-section-01">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-xxl-3">
            <div className="products-section-01__add h-100"><AddThree /></div>
          </div>
          <div className="col-xxl-9">
            <div className="products-section-01__wrappper">
              <div className="products-section-01__wrappper--content">
                <div className="section-title">
                  <h2 className="title">Featured Products</h2>
                </div>
                <div className="button-group">
                  <Tabs tabs={sectionOneTabs} active={activeTab} onSelect={setActiveTab} prefix="pills-one" />
                  <BrowseLink />
                </div>
              </div>
              <div className="tab-content" id="pills-tabContentTwo">
                <div className="tab-pane fade show active" id={`pills-one-${activeTab}`} role="tabpanel">
                  <div className="products-section-01__wrappper--product">
                    {productsSectionOne.map((product) => <ProductCardThree product={product} key={product.id} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BannerTwo() {
  return (
    <div className="banner-area-02">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="banner-area-02__add-one"><AddFour /></div>
          </div>
          <div className="col-xl-6">
            <div className="banner-area-02__add-two"><AddFive /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductsSectionTwo() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="products-section-02">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-3 order-xxl-2">
            <div className="products-section-02__add-wrapper">
              <div className="products-section-02__add-wrapper--one"><AddSix /></div>
              <div className="products-section-02__add-wrapper--two"><AddSeven /></div>
            </div>
          </div>
          <div className="col-xxl-9 order-xxl-1">
            <div className="products-section-02__wrappper">
              <div className="products-section-02__wrappper--content">
                <div className="section-title">
                  <h2 className="title">Featured Products</h2>
                </div>
                <div className="button-group">
                  <Tabs tabs={sectionTwoTabs} active={activeTab} onSelect={setActiveTab} prefix="pills-two" />
                  <BrowseLink />
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id={`pills-two-${activeTab}`} role="tabpanel">
                  <div className="products-section-02__wrappper--product">
                    {productsSectionTwo.map((product) => <ProductCardThree product={product} key={product.id} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductsSectionThree() {
  return (
    <div className="products-section-03">
      <div className="container">
        <div className="row card-row">
          {productsSectionThree.map((widget, index) => (
            <div className="col-xl-3 col-md-6" key={`${widget.title}-${index}`}>
              <div className="section-title">
                <h2 className="title">{widget.title}</h2>
              </div>
              <div className="products-section-03__widget">
                {widget.products.map((product) => (
                  <a href="#" className="d-block single-item" key={product.id}>
                    <ProductCardFour product={product} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Cta() {
  return (
    <div className="cta-section-01">
      <div className="container">
        <div className="cta-section-01__wrapper">
          <div className="content-area">
            <h6 className="subtitle">SAVE UP TO $200.00</h6>
            <h2 className="title">Macbook Pro</h2>
            <p className="text">Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage</p>
            <a className="btn btn-primary" href="#">Shop now <ArrowRight /></a>
          </div>
          <div className="image-group">
            <img src="/image/product/apple.png" alt="apple" className="w-100" />
            <div className="price-valu"><span>$1999</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function News() {
  return (
    <div className="news-section-01 bg-gray-50">
      <div className="container">
        <div className="news-section-01__title-block">
          <h2 className="title">Latest News</h2>
        </div>
        <div className="row card-row justify-content-center">
          {news.map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-8 col-xs-11" key={item.id}>
              <div className="card-news">
                <div className="card-image">
                  <a href="#"><img src={item.image} alt="news" className="w-100" /></a>
                </div>
                <div className="card-body">
                  <div className="card-body__meta">
                    <div className="user-block">
                      <UserCircleIcon />
                      <span>{item.name}</span>
                    </div>
                    <a href="#">
                      <div className="date-block">
                        <CalendarIcon />
                        <span>{item.date}</span>
                      </div>
                    </a>
                    <div className="comment-block">
                      <CommentIcon />
                      <span>{item.comment}</span>
                    </div>
                  </div>
                  <a href="#"><h2 className="title">{item.title}</h2></a>
                  <p className="text">{item.text}</p>
                  <a className="btn btn-outline-primary" href="#">Read more <ArrowRight /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const sponsorLogos = ['googel', 'amaazon', 'philips', 'toshiba', 'samsung']

export function Newsletter() {
  return (
    <div className="newsletter-section-01 bg-secondary-700">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10 col-xs-11">
            <div className="newsletter-section-01__wrapper">
              <div className="section-title-block">
                <h2 className="title">Subscribe to our newsletter</h2>
                <p className="text">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
              </div>
              <div className="newsletter-form-01">
                <form action="#" onSubmit={(event) => event.preventDefault()}>
                  <input className="form-control" type="email" placeholder="Email address" />
                  <div className="button-group">
                    <button className="btn btn-primary" type="submit">Subscribe <ArrowRight /></button>
                  </div>
                </form>
              </div>
            </div>
            <div className="newsletter-section-01__sponsor">
              <div className="logo-slider">
                <div className="logo-slider__track">
                  {[0, 1, 2, 3].flatMap((group) =>
                    sponsorLogos.map((logo) => (
                      <div className="slide" key={`${group}-${logo}`}>
                        <img src={`/image/logo/${logo}.png`} alt="sponsor" />
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <>
      <div className="footer-section-01">
        <div className="container">
          <div className="row card-row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="logo">
                  <a href="#"><img src="/image/logo/logo-primary.png" alt="logo" /></a>
                </div>
                <div className="widget-content-info">
                  <span className="text-one">Customer Supports:</span>
                  <span className="phone">(629) 555-0129</span>
                  <span className="text-one">4517 Washington Ave. <br /> Manchester, Kentucky 39495</span>
                  <span className="mail"><a href="mailto:info@clicon.com">info@clicon.com</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <h2 className="title">Top Category</h2>
                <ul className="footer-list-group">
                  {footerCategories.map((category) => (
                    <li key={category}><a href="#">{category}</a></li>
                  ))}
                  <li className="text-btn">
                    <a href="#">Browse All Product <ArrowRight size={20} /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <h2 className="title">Quick links</h2>
                <ul className="footer-list-group">
                  {footerLinks.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <div className="footer-widget footer-widget__04">
                <h2 className="title">Download APp</h2>
                <div className="app-button-group">
                  <a className="google-play-btn" href="#">
                    <GooglePlayIcon />
                    <div className="text-group">
                      <span className="text-one">Get it now</span>
                      <span className="text-two">Google Play</span>
                    </div>
                  </a>
                  <a className="app-play-btn" href="#">
                    <AppStoreIcon />
                    <div className="text-group">
                      <span className="text-one">Get it now</span>
                      <span className="text-two">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget">
                <h2 className="title">Popular Tag</h2>
                <ul className="footer-tag">
                  {popularTags.map((tag) => (
                    <li key={tag}><a href="#">{tag}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-01">
        <p className="text-14 text-gray-300">Clicon - eCommerce Template © 2021. Design by <a className="text-gray-300" target="_blank" rel="noreferrer" href="https://templatecookie.com/">Templatecookie</a></p>
      </div>
    </>
  )
}
