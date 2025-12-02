export default function OutstandingPros() {
  return (
    <section className="section pros">
      <div className="container">
        <h2 className="section-title">Explore the outstanding pros</h2>
        <div className="pros-grid">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="pro-card">
              Card {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
