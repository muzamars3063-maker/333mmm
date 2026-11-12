import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ShopContext = createContext(null)

const initialCart = [
  {
    id: 'cart-canon',
    title: 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm',
    image: '/image/product/product-43.png',
    price: 1500,
    quantity: 1,
  },
  {
    id: 'cart-simple',
    title: 'Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone',
    image: '/image/product/product-44.png',
    price: 269,
    quantity: 2,
  },
]

function toNumber(value) {
  return Number(String(value).replace(/[^0-9.]/g, '')) || 0
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(initialCart)
  const [wishlist, setWishlist] = useState([])
  const [quickView, setQuickView] = useState(null)

  const addToCart = useCallback((product) => {
    if (!product) return

    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: toNumber(product.price),
          quantity: 1,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }, [])

  const toggleWishlist = useCallback((id) => {
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }, [])

  const isWishlisted = useCallback((id) => wishlist.includes(id), [wishlist])

  const value = useMemo(() => {
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return {
      cart,
      cartCount: cart.length,
      cartTotal,
      wishlist,
      wishlistCount: wishlist.length,
      quickView,
      addToCart,
      removeFromCart,
      toggleWishlist,
      isWishlisted,
      openQuickView: setQuickView,
      closeQuickView: () => setQuickView(null),
    }
  }, [cart, wishlist, quickView, addToCart, removeFromCart, toggleWishlist, isWishlisted])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShop must be used inside ShopProvider')
  }
  return context
}
