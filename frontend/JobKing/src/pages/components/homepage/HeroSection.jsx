import heroImage from '../../../assets/img/Hero_temp.png'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
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

        <div className="hero-image">
          <img src={heroImage} alt="JobKing hero" />
        </div>
      </div>
    </section>
  )
}