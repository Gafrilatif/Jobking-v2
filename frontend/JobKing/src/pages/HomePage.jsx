import Navbar from './components/homepage/Navbar.jsx'
import HeroSection from './components/homepage/HeroSection.jsx'
import OutstandingPros from './components/homepage/OutstandingPros.jsx'
import WhyJobKing from './components/homepage/WhyJobKing.jsx'
import JobPreview from './components/homepage/JobPreview.jsx'
import InfoHookCTA from './components/homepage/InfoHookCTA.jsx'
import HowItWorks from './components/homepage/HowItWorks.jsx'
import CustomerReviews from './components/homepage/CustomerReviews.jsx'
import FinalCTA from './components/homepage/FinalCTA.jsx'
import Footer from './components/homepage/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="explore">
        <OutstandingPros />
      </section>
      <section id="why">
        <WhyJobKing />
      </section>
      <JobPreview />
      <section id="support">
        <InfoHookCTA />
      </section>
      <HowItWorks />
      <CustomerReviews />
      <FinalCTA />
      <Footer />
    </>
  )
}
