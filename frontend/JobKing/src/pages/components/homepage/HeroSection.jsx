export default function HeroSection() {
  return (
    <section className="section hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </h1>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search any talent..."
            className="hero-search-input"
          />
          <button className="hero-search-btn" type="button">
            Go
          </button>
        </div>
      </div>
    </section>
  )
}
