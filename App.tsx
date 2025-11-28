import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  LayoutDashboard, 
  Hammer, 
  DollarSign, 
  Menu, 
  X,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PRICING_PLANS, TESTIMONIALS, FAQS } from './constants';
import { DashboardMockup, MaterialsListMockup } from './components/AppMockup';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray font-sans text-brand-dark overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-blue p-2 rounded-lg">
              <Hammer className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-dark">MÃOS DA OBRA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection('problema')} className="hover:text-brand-blue transition">O Problema</button>
            <button onClick={() => scrollToSection('solucao')} className="hover:text-brand-blue transition">Funcionalidades</button>
            <button onClick={() => scrollToSection('depoimentos')} className="hover:text-brand-blue transition">Depoimentos</button>
            <button 
              onClick={() => scrollToSection('precos')} 
              className="bg-brand-dark text-white px-5 py-2.5 rounded-full hover:bg-brand-blue transition-colors shadow-lg shadow-brand-blue/20"
            >
              Começar Agora
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-xl absolute w-full">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('problema')} className="text-left font-medium p-2 text-gray-700">O Problema</button>
              <button onClick={() => scrollToSection('solucao')} className="text-left font-medium p-2 text-gray-700">Funcionalidades</button>
              <button onClick={() => scrollToSection('precos')} className="bg-brand-blue text-white p-3 rounded-lg font-bold text-center">Ver Planos</button>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 rounded-l-[100px] opacity-60"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-semibold border border-brand-blue/20">
                <Star className="w-4 h-4 fill-brand-blue" />
                Economia comprovada de até 30%
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-brand-dark">
                Controle sua obra. <br />
                <span className="text-brand-blue">Economize dinheiro.</span> <br />
                Ganhe tempo.
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                O MÃOS DA OBRA reduz desperdícios, evita atrasos e te dá controle total da execução e dos materiais. Pare de jogar dinheiro fora na construção.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  QUERO ECONOMIZAR
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 px-4 py-2">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                       <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="block font-bold text-brand-dark">+2.000 obras</span>
                    <span className="text-gray-500">gerenciadas esse mês</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: CheckCircle2, text: 'Zero desperdício' },
                  { icon: Clock, text: 'Cronograma Visual' },
                  { icon: TrendingUp, text: 'Controle Financeiro' },
                  { icon: LayoutDashboard, text: 'Relatórios PDF' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                    <item.icon className="w-5 h-5 text-brand-green" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-green/20 rounded-full filter blur-3xl"></div>
               <div className="absolute top-20 -right-10 w-72 h-72 bg-brand-blue/20 rounded-full filter blur-3xl"></div>
               <div className="relative z-10 transform lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                 <DashboardMockup />
                 <div className="absolute -bottom-10 -left-10 hidden md:block transform rotate-6">
                    <MaterialsListMockup />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <section id="problema" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A falta de controle é o que mais destrói obras no Brasil.</h2>
            <p className="text-xl text-gray-300">Construir sem gestão profissional é pedir para perder dinheiro.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Orçamento Estourado', stat: '70%', desc: 'das obras custam mais do que o previsto inicial.' },
              { title: 'Desperdício de Material', stat: '20%', desc: 'do material comprado vai para o lixo ou entulho.' },
              { title: 'Atrasos Crônicos', stat: '90 dias', desc: 'é a média de atraso em reformas residenciais.' },
              { title: 'Equipe Desorganizada', stat: 'Prejuízo', desc: 'Retrabalho gera custo duplo de mão de obra.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-brand-green mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button onClick={() => scrollToSection('precos')} className="group text-white font-bold text-lg inline-flex items-center gap-2 border-b-2 border-brand-green pb-1 hover:text-brand-green transition-colors">
                Quero parar os prejuízos agora
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION --- */}
      <section id="solucao" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-blue font-bold tracking-wider text-sm uppercase">A Solução Definitiva</span>
            <h2 className="text-4xl font-bold mt-3 mb-6 text-brand-dark">A obra que se controla sozinha.<br/>Você só acompanha.</h2>
            <p className="text-gray-600">Centralize tudo em um único lugar. Do primeiro tijolo ao acabamento final.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Hammer,
                title: 'Controle da Execução',
                desc: 'Etapas organizadas, tarefas diárias, checklist de qualidade e acompanhamento do progresso físico.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: CheckCircle2,
                title: 'Controle de Materiais',
                desc: 'Listas automáticas, cálculo exato de quantitativos e alertas de estoque para evitar paradas.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: DollarSign,
                title: 'Controle de Gastos',
                desc: 'Resumo do orçamento em tempo real, fluxo de caixa e comparativo Previsto x Realizado.',
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="mt-24 bg-brand-gray rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
             <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-8 z-10">
                   <h3 className="text-3xl font-bold">Veja sua obra ficando profissional</h3>
                   <ul className="space-y-6">
                      {[
                        'Dashboard financeiro completo na palma da mão',
                        'Notificações de tarefas atrasadas',
                        'Exportação de relatórios para PDF',
                        'Acesso compartilhado com engenheiro e mestre de obras'
                      ].map((feat, i) => (
                        <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                           <div className="bg-brand-green/20 p-2 rounded-full">
                              <CheckCircle2 className="w-5 h-5 text-brand-green" />
                           </div>
                           <span className="font-medium text-gray-800">{feat}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="lg:w-1/2 relative z-10">
                   <DashboardMockup />
                </div>
                
                {/* Decorative BG elements */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-brand-blue/5 pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="precos" className="py-24 bg-brand-dark relative">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]"></div>
           <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Escolha o plano ideal</h2>
            <p className="text-xl text-gray-400">Investimento menor que um saco de cimento para salvar sua obra.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight 
                    ? 'border-4 border-brand-green shadow-[0_0_50px_rgba(30,194,139,0.3)] transform md:-translate-y-6 z-10' 
                    : 'border border-gray-200 opacity-95 hover:opacity-100'
                }`}
              >
                {plan.ribbon && (
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${plan.highlight ? 'bg-brand-green text-brand-dark' : 'bg-brand-blue text-white'} px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg`}>
                    {plan.ribbon}
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-brand-dark' : 'text-gray-500'}`}>{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-brand-dark">{plan.price}</span>
                  </div>
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">{plan.period}</span>
                  {plan.savings && <p className="text-brand-green font-bold text-sm mt-2">{plan.savings}</p>}
                </div>

                <p className="text-center text-gray-600 text-sm mb-8 px-4">{plan.description}</p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-300'}`}>
                      {feature.included ? (
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-brand-green' : 'text-brand-blue'}`} />
                      ) : (
                        <X className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'font-medium' : ''}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bonuses for Vitalício */}
                {plan.bonuses && (
                  <div className="bg-brand-gray/50 rounded-xl p-4 mb-8 border border-brand-green/20">
                    <p className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3 text-center">🎁 3 Bônus Inclusos (Grátis)</p>
                    <div className="space-y-3">
                      {plan.bonuses.map((bonus, bIdx) => (
                        <div key={bIdx} className="flex gap-2">
                           <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></div>
                           <div>
                             <p className="text-xs font-bold text-gray-800">{bonus.title}</p>
                             <p className="text-[10px] text-gray-500 leading-tight">{bonus.description}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                  plan.highlight 
                    ? 'bg-brand-green text-brand-dark hover:bg-emerald-400' 
                    : 'bg-brand-dark text-white hover:bg-gray-800'
                }`}>
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="depoimentos" className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-dark">Quem usa, economiza.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-brand-dark">{t.name}</h4>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div className="inline-block bg-green-50 text-brand-green px-3 py-1 rounded-full text-sm font-bold">
                  💰 {t.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-brand-blue" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 pt-0 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Sua obra não pode esperar.</h2>
             <p className="text-xl md:text-2xl opacity-90 mb-10">Cada dia sem controle gera prejuízo. Economize tempo, dinheiro e dores de cabeça agora.</p>
             
             <button 
               onClick={() => scrollToSection('precos')}
               className="bg-white text-brand-blue text-xl font-extrabold px-12 py-6 rounded-2xl shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
             >
               COMEÇAR AGORA — GARANTIR MEU ACESSO
             </button>
             <p className="mt-6 text-sm opacity-70">Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro.</p>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-gray-400 py-12 text-sm border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Hammer className="w-5 h-5 text-brand-blue" />
             <span className="font-bold text-white text-lg">MÃOS DA OBRA</span>
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition">Termos de Uso</a>
             <a href="#" className="hover:text-white transition">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition">Suporte</a>
          </div>
          <div className="text-center md:text-right">
             <p>&copy; 2024 Mãos da Obra App. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;