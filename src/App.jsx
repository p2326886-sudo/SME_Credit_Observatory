import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ExecutiveSummary from './sections/ExecutiveSummary';
import KeyFindings from './sections/KeyFindings';
import StressIndicators from './sections/StressIndicators';
import CreditFrictionIndex from './sections/CreditFrictionIndex';
import WorkingCapitalDashboard from './sections/WorkingCapitalDashboard';
import SectorAnalysis from './sections/SectorAnalysis';
import StateReadiness from './sections/StateReadiness';
import DigitalLending from './sections/DigitalLending';
import PolicyRecommendations from './sections/PolicyRecommendations';
import Methodology from './sections/Methodology';
import AboutResearcher from './sections/AboutResearcher';
import DownloadReport from './sections/DownloadReport';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-steel-100">
      <Navbar />
      <main>
        <HeroSection />
        <ExecutiveSummary />
        <KeyFindings />
        <StressIndicators />
        <CreditFrictionIndex />
        <WorkingCapitalDashboard />
        <SectorAnalysis />
        <StateReadiness />
        <DigitalLending />
        <PolicyRecommendations />
        <Methodology />
        <AboutResearcher />
        <DownloadReport />
      </main>
      <Footer />
    </div>
  );
}
