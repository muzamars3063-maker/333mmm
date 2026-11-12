import { useShop } from '../shop'

export function QuickView() {
  const { quickView, closeQuickView, addToCart } = useShop()

  if (!quickView) return null

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      style={{ background: 'rgba(25, 28, 31, 0.55)' }}
      onClick={closeQuickView}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product quick view</h5>
            <button type="button" className="btn-close" onClick={closeQuickView} aria-label="Close quick view" />
          </div>
          <div className="modal-body">
            <div className="row align-items-center g-4">
              <div className="col-md-5">
                <img
                  src={quickView.image}
                  alt={quickView.title}
                  style={{ width: '100%', maxHeight: '240px', objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-7">
                <h4 className="mb-2">{quickView.title}</h4>
                <p className="price-valu mb-3">
                  {quickView.oldPrice && <del>{quickView.oldPrice}</del>}
                  {quickView.price}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    addToCart(quickView)
                    closeQuickView()
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
