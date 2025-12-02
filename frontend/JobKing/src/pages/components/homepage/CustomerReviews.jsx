const mockReviews = [1, 2, 3, 4]

export default function CustomerReviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <h2 className="section-title">Customer Review</h2>
        <div className="review-grid">
          {mockReviews.map((id) => (
            <div key={id} className="review-card">
              <p className="review-title">Customer Review</p>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
