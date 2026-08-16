import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppScreenshotsShowcase } from './components/AppScreenshotsShowcase';
import { StoryChaosVsControl } from './components/StoryChaosVsControl';
import { PrescriptionModule } from './components/PrescriptionModule';
import { FeatureShowcase } from './components/FeatureShowcase';
import { InteractiveRoiCalculator } from './components/InteractiveRoiCalculator';
import { PricingSection } from './components/PricingSection';
import { SocialProof } from './components/SocialProof';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-20"></div>
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-20"></div>
      <div className="fixed bottom-10 left-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-20"></div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none -z-30"></div>

      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with Interactive Product Simulator */}
        <Hero />

        {/* 2. Telas Reais do Aplicativo FarmaFlow (10 Telas do Sistema) */}
        <AppScreenshotsShowcase />

        {/* 3. Storytelling: Caos do Balcão vs Alta Performance FarmaFlow */}
        <StoryChaosVsControl />

        {/* 4. Módulo de Receitas para Medicamentos Controlados */}
        <PrescriptionModule />

        {/* 5. Ecossistema Completo de Funcionalidades */}
        <FeatureShowcase />

        {/* 6. Calculadora Interativa de Retorno sobre Investimento */}
        <InteractiveRoiCalculator />

        {/* 7. Planos & Preços Transparentes */}
        <PricingSection />

        {/* 8. Prova Social & Depoimentos Reais */}
        <SocialProof />

        {/* 9. FAQ com Busca Instantânea */}
        <FaqSection />

        {/* 10. Final High-Converting CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
