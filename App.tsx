import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  LayoutDashboard, 
  Hammer, 
  DollarSign, 
  Menu, 
  X,
  Star,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  AlertOctagon,
  Smartphone,
  FileText,
  BellRing,
  Calculator,
  HardHat,
  CalendarCheck,
  AlertTriangle,
  Zap,
  Bot,
  Sparkles,
  MessageCircle,
  Users,
  Send
} from 'lucide-react';
import { PRICING_PLANS, TESTIMONIALS, FAQS } from './constants';
import { 
  DashboardMockup, 
  ComparisonCard, 
  ZeDaObraChat, 
  MiniFinancialCard, 
  MiniMaterialList, 
  MiniTeamCard 
} from './components/AppMockup';

// --- Chat Component Logic ---
interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  isHtml?: boolean;
}

const FloatingChatWidget = ({ isOpen, onClose, onOpen, initialMessage }: { isOpen: boolean; onClose: () => void; onOpen: () => void; initialMessage: string | null }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Olá! 👋 Sou a Inteligência Artificial do Mãos da Obra. Posso te ajudar com dúvidas sobre o app, preços ou como economizar na sua obra.", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen && initialMessage && !initializedRef.current) {
        handleSendMessage(initialMessage);
        initializedRef.current = true;
    }
  }, [isOpen, initialMessage]);

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('preço') || lowerInput.includes('quanto custa') || lowerInput.includes('valor') || lowerInput.includes('plano')) {
        return "Temos planos a partir de <strong>R$ 29,90/mês</strong>. Mas a dica de ouro 💡 é o <strong>Plano Vitalício (R$ 247)</strong>. Você paga uma vez só, nunca mais tem mensalidade e ainda ganha minha consultoria ilimitada!";
    }
    if (lowerInput.includes('funciona') || lowerInput.includes('ajuda') || lowerInput.includes('o que faz')) {
        return "É simples: o app organiza sua obra. Ele gera a lista de compras automática, controla quanto você gastou e te avisa se a obra está atrasada. Eu (a IA) fico disponível pra tirar dúvidas técnicas na hora.";
    }
    if (lowerInput.includes('garantia') || lowerInput.includes('teste') || lowerInput.includes('reembolso')) {
        return "Pode ficar tranquilo! 🛡️ Você tem <strong>30 dias de garantia</strong>. Se não gostar ou achar que não economizou, devolvemos todo o seu dinheiro.";
    }
    if (lowerInput.includes('vitalício') || lowerInput.includes('vitalicio')) {
        return "O Vitalício é o favorito! 🏆 Além de acesso eterno (para essa e futuras obras), você libera o <strong>Chat comigo (IA)</strong> e ganha pacotes de contratos e checklists profissionais.";
    }
    if (lowerInput.includes('olá') || lowerInput.includes('oi') || lowerInput.includes('bom dia') || lowerInput.includes('boa tarde')) {
        return "Opa, tudo bem? Sou o Zé da Obra. Como posso te ajudar a economizar na sua construção hoje?";
    }
    
    return "Boa pergunta! Para essa dúvida específica, recomendo dar uma olhada no nosso FAQ ou, se quiser começar agora e ver na prática, nosso <a href='#precos' class='text-brand-gold font-bold underline'>Plano Vitalício</a> tem garantia total. Quer saber sobre preços ou funcionalidades?";
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInput("");
    setIsTyping(true);

    // Simulate delay
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages(prev => [...prev, { text: response, sender: 'bot', isHtml: true }]);
      setIsTyping(false);
    }, 1200);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={onOpen}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-brand-gold hover:bg-brand-goldDark text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group animate-fade-in-up"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        <MessageCircle className="w-7 h-7" />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            Tire suas dúvidas com o Zé!
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 md:bottom-24 right-4 md:right-8 w-[90vw] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col h-[450px] animate-fade-in-up">
       <div className="bg-brand-dark p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-slate-600">
                        <Bot className="w-6 h-6 text-brand-dark" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-gold border-2 border-brand-dark rounded-full"></div>
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm">Zé da Obra</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
                        Assistente Virtual
                    </p>
                </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-700 transition-colors">
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="flex-1 bg-brand-surface p-4 space-y-4 overflow-y-auto scroll-smooth">
            {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                  {msg.sender === 'user' ? (
                     <div className="bg-slate-200 text-slate-800 rounded-2xl rounded-tr-sm p-3 max-w-[85%] text-sm shadow-sm">
                        <p>{msg.text}</p>
                     </div>
                  ) : (
                     <div className="bg-white text-slate-700 rounded-2xl rounded-tl-sm p-3 max-w-[90%] text-sm shadow-sm border border-gray-200">
                        <p className="font-bold text-brand-gold mb-1 text-xs">Zé da Obra:</p>
                        {msg.isHtml ? (
                          <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: msg.text }} />
                        ) : (
                          <p>{msg.text}</p>
                        )}
                        
                        {/* Show suggestions if it's the welcome message */}
                        {idx === 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                              <button onClick={() => handleSendMessage('Qual o preço?')} className="bg-amber-50 hover:bg-amber-100 text-brand-gold text-xs font-bold px-3 py-1.5 rounded-full transition-colors border border-amber-100">💰 Preços</button>
                              <button onClick={() => handleSendMessage('Como funciona?')} className="bg-amber-50 hover:bg-amber-100 text-brand-gold text-xs font-bold px-3 py-1.5 rounded-full transition-colors border border-amber-100">🛠️ Funcionalidades</button>
                          </div>
                        )}
                     </div>
                  )}
               </div>
            ))}
            
            {isTyping && (
               <div className="flex justify-start animate-fade-in-up">
                  <div className="bg-white text-slate-500 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Digite sua dúvida..." 
              className="flex-1 bg-gray-100 rounded-full h-10 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-slate-700" 
            />
            <button 
              onClick={() => handleSendMessage(input)}
              disabled={!input.trim()}
              className="w-10 h-10 bg-brand-gold hover:bg-brand-goldDark rounded-full flex items-center justify-center text-white shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Send className="w-4 h-4 ml-0.5" />
            </button>
        </div>
    </div>
  );
};


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialMsg, setChatInitialMsg] = useState<string | null>(null);

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

  const openChatWithContext = (msg?: string) => {
    setIsChatOpen(true);
    if (msg) setChatInitialMsg(msg);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-white pb-20 md:pb-0">
      
      {/* --- HEADER (Glassmorphism) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-dark p-2 rounded-xl shadow-lg shadow-brand-dark/20">
              <Hammer className="w-5 h-5 text-brand-gold" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark">MÃOS DA OBRA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection('problema')} className="hover:text-brand-gold transition">Problemas comuns</button>
            <button onClick={() => scrollToSection('solucao')} className="hover:text-brand-gold transition">O que o app faz</button>
            <button onClick={() => scrollToSection('depoimentos')} className="hover:text-brand-gold transition">Resultados</button>
            <button 
              onClick={() => scrollToSection('precos')} 
              className="bg-brand-dark text-white px-6 py-2.5 rounded-full hover:bg-brand-gold transition-all shadow-lg shadow-brand-dark/10 hover:shadow-brand-gold/20 transform hover:-translate-y-0.5 font-bold"
            >
              Ver Planos
            </button>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-xl absolute w-full animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('problema')} className="text-left font-medium p-3 rounded-lg hover:bg-gray-50 text-gray-700">Por que usar?</button>
              <button onClick={() => scrollToSection('solucao')} className="text-left font-medium p-3 rounded-lg hover:bg-gray-50 text-gray-700">Funcionalidades</button>
              <button onClick={() => { scrollToSection('precos'); setIsMenuOpen(false); }} className="bg-brand-gold text-white p-4 rounded-xl font-bold text-center shadow-md">QUERO ECONOMIZAR AGORA</button>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-28 pb-12 md:pt-48 md:pb-32 overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-amber-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-slate-200 to-transparent rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Hero Copy */}
            <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-gray-700 animate-float">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                Agora com Inteligência Artificial
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-brand-dark">
                Controle sua obra.<br />
                <span className="text-gradient">Economize dinheiro. Ganhe tempo.</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tenha o <strong>Zé da Obra (IA)</strong> como seu engenheiro virtual 24h. Ele tira dúvidas, fiscaliza orçamentos e impede que você gaste mais do que deveria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="relative overflow-hidden bg-brand-gold hover:bg-brand-goldDark text-white px-8 md:px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_40px_-10px_rgba(217,119,6,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 group border-b-4 border-amber-800 active:border-b-0 active:translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    QUERO ECONOMIZAR
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                </button>
                <button 
                  onClick={() => openChatWithContext('Olá Zé! Quero conhecer mais.')}
                  className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:border-gray-300"
                >
                  Conhecer o Zé da Obra
                </button>
              </div>

              <div className="pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-gray-500 text-xs md:text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-brand-green" />
                    <span>Plano vitalício disponível</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-brand-green" />
                    <span>Garantia de 30 dias</span>
                 </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:w-1/2 relative lg:h-[600px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0">
               <div className="relative z-20 transform transition-transform duration-700 hover:rotate-0 lg:rotate-y-[-10deg] lg:rotate-x-[5deg]">
                 <DashboardMockup />
               </div>
               
               {/* Floating Element - Comparison */}
               <div className="absolute top-[20%] -left-10 z-30 hidden md:block animate-float" style={{ animationDelay: '1s' }}>
                   <ComparisonCard />
               </div>

               {/* Background Blobs */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AGITATION SECTION (Dark Mode) --- */}
      <section id="problema" className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/30">
              A triste realidade
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              A falta de controle é o que mais <br /><span className="text-red-400">destrói obras no Brasil.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Sem organização, sua reforma dos sonhos vira um pesadelo financeiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: DollarSign, 
                title: 'Orçamento Estourado', 
                stat: '70%', 
                desc: 'das obras gastam muito mais do que o planejado por falta de controle.',
                color: 'text-red-400'
              },
              { 
                icon: AlertOctagon, 
                title: 'Desperdício Puro', 
                stat: '20%', 
                desc: 'do material vira entulho. É como rasgar 1 nota de R$100 a cada 5.',
                color: 'text-orange-400'
              },
              { 
                icon: Clock, 
                title: 'Atrasos Infinitos', 
                stat: '+90 dias', 
                desc: 'é a média de atraso. Isso significa meses a mais pagando mão de obra.',
                color: 'text-brand-gold'
              },
              { 
                icon: ShieldCheck, 
                title: 'Dor de Cabeça', 
                stat: 'Estresse', 
                desc: 'Discutir com pedreiro, material errado e compras de emergência.',
                color: 'text-gray-300'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className={`p-3 rounded-xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className={`text-4xl font-display font-bold ${item.color} mb-2`}>{item.stat}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center items-center gap-4">
             <button onClick={() => scrollToSection('solucao')} className="w-full md:w-auto bg-white text-brand-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                QUERO EVITAR ESSES PROBLEMAS
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (Bento Grid) --- */}
      <section id="solucao" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-gold font-bold tracking-wider text-sm uppercase">A Solução Inteligente</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-brand-dark">
              A obra que se controla sozinha. <br/> Com ajuda da IA.
            </h2>
            <p className="text-gray-600 text-lg">
              Reunimos todas as ferramentas de um engenheiro profissional em um aplicativo simples que tem uma Inteligência Artificial para te guiar.
            </p>
          </div>

          {/* Bento Grid Layout - RESTRUCTURED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)] max-w-6xl mx-auto">
            
            {/* Feature 1 - ZÉ DA OBRA (HERO) */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col md:flex-row gap-8">
               
               <div className="relative z-20 flex-1 flex flex-col justify-center">
                 <div className="flex gap-2 mb-6 flex-wrap">
                   <div className="inline-flex items-center gap-2 bg-slate-100 text-brand-dark px-3 py-1 rounded-full text-xs font-bold self-start">
                      <Sparkles className="w-3 h-3 text-brand-gold" /> NOVA IA
                   </div>
                   <div className="inline-flex items-center gap-2 bg-amber-50 text-brand-gold px-3 py-1 rounded-full text-xs font-bold self-start border border-amber-100 animate-pulse-slow">
                      <Star className="w-3 h-3 fill-brand-gold" /> EXCLUSIVO VITALÍCIO
                   </div>
                 </div>

                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-brand-gold shadow-lg shadow-brand-dark/20 flex-shrink-0">
                        <Bot className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Zé da Obra:<br/> Sua IA Especialista</h3>
                 </div>
                 
                 <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                    Não entende de obra? O Zé entende. Ele é seu assistente virtual disponível 24h para tirar dúvidas técnicas e evitar que te passem a perna.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                        <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                        <span>"Zé, essa quantidade de cimento tá certa?"</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                        <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                        <span>"Zé, qual a melhor tinta para área externa?"</span>
                    </li>
                 </ul>
               </div>
               
               {/* Visual Element: AI CHAT Mockup */}
               <div className="flex-1 relative z-10 flex items-center justify-center">
                   <div className="transform transition-transform duration-500 md:group-hover:scale-105 w-full">
                       <ZeDaObraChat />
                   </div>
               </div>
               
               {/* Decorative Background */}
               <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-slate-50 to-transparent rounded-r-[2rem] pointer-events-none -z-0"></div>
            </div>

            {/* Feature 2 - FINANCIAL CONTROL */}
            <div className="bg-brand-dark rounded-[2rem] p-6 border border-gray-800 shadow-xl text-white relative overflow-hidden flex flex-col justify-between group min-h-[250px]">
               <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="p-2 bg-white/10 rounded-lg"><DollarSign className="w-4 h-4 text-brand-green"/></div>
                     <h3 className="text-lg font-bold">Controle Financeiro</h3>
                  </div>
                  <p className="text-gray-400 text-xs mb-4">
                     Orçado x Realizado em tempo real.
                  </p>
                  <MiniFinancialCard />
               </div>
            </div>

            {/* Feature 3 - MATERIAL LIST */}
            <div className="bg-white rounded-[2rem] p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[250px] relative overflow-hidden">
               <div className="mb-4 relative z-10">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-amber-50 rounded-lg"><Smartphone className="w-4 h-4 text-brand-gold"/></div>
                      <h3 className="text-lg font-bold text-brand-dark">Lista de Compras</h3>
                   </div>
                   <p className="text-gray-600 text-xs mb-4">
                      O app gera a lista e você só manda pro fornecedor.
                   </p>
                   <MiniMaterialList />
               </div>
            </div>

            {/* Feature 4 - TEAM MANAGEMENT */}
            <div className="bg-white rounded-[2rem] p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow min-h-[250px] flex flex-col">
               <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-slate-100 rounded-lg"><Users className="w-4 h-4 text-brand-dark"/></div>
                  <h3 className="text-lg font-bold text-brand-dark">Gestão de Equipe</h3>
               </div>
               <p className="text-gray-600 text-xs mb-4">
                  Controle diárias, presenças e pagamentos.
               </p>
               <MiniTeamCard />
            </div>

            {/* Feature 5 - TIMELINE */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-100 to-white rounded-[2rem] p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
               <div className="flex-1 relative z-10 w-full">
                   <div className="flex items-center gap-3 mb-4">
                       <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-white">
                          <CalendarCheck className="w-5 h-5 text-brand-gold" />
                       </div>
                       <h3 className="text-xl font-bold text-brand-dark">Cronograma Visual</h3>
                   </div>
                   <p className="text-gray-600 text-sm mb-4">
                      Acompanhe a barra de progresso de cada etapa (Fundação, Alvenaria, Acabamento). Veja o que está atrasado e o que deve começar na próxima semana.
                   </p>
                   <button onClick={() => scrollToSection('precos')} className="text-brand-dark font-bold text-sm border-b border-brand-dark pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors">
                      Começar meu cronograma
                   </button>
               </div>
               <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-full max-w-xs mx-auto md:mx-0">
                   <div className="space-y-3">
                       <div className="flex justify-between text-xs font-bold text-gray-700"><span>Fundação</span> <span>100%</span></div>
                       <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-full h-full bg-brand-green rounded-full"></div></div>
                       
                       <div className="flex justify-between text-xs font-bold text-gray-700"><span>Alvenaria</span> <span>60%</span></div>
                       <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[60%] h-full bg-brand-gold rounded-full"></div></div>

                       <div className="flex justify-between text-xs font-bold text-gray-400"><span>Acabamento</span> <span>0%</span></div>
                       <div className="w-full bg-gray-100 h-1.5 rounded-full"></div>
                   </div>
               </div>
            </div>

          </div>

          <div className="mt-12 md:mt-16 text-center">
             <button 
                onClick={() => scrollToSection('precos')} 
                className="w-full md:w-auto bg-brand-gold text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl shadow-brand-gold/20 hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 mx-auto hover:bg-brand-goldDark border-b-4 border-amber-800 active:border-b-0 active:translate-y-1"
             >
                QUERO TER CONTROLE TOTAL
                <ArrowRight className="w-5 h-5" />
             </button>
             <p className="text-gray-500 text-sm mt-3">Teste por 30 dias sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
             <div className="max-w-xl">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
                 Eles economizaram milhares de reais. <br/> <span className="text-brand-gold">Você é o próximo.</span>
               </h2>
               <p className="text-gray-500">
                 Histórias reais de quem construiu sua casa própria ou reformou usando o app.
               </p>
             </div>
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/60/60?random=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-md" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-md">+2k</div>
             </div>
          </div>
          
          {/* Scroll Horizontal no Mobile */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-[85vw] md:min-w-0 snap-center bg-gray-50 p-6 md:p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-brand-dark">{t.name}</h4>
                      <span className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-md">{t.role}</span>
                    </div>
                  </div>
                  <div className="mb-6 relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif leading-none">"</span>
                    <p className="text-gray-600 italic relative z-10">{t.quote}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm border-t border-gray-200 pt-4">
                  <TrendingUp className="w-4 h-4" />
                  {t.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="precos" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
           <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Custa menos que <span className="text-brand-gold underline decoration-wavy decoration-brand-gold/30">um saco de cimento</span>.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha o plano que cabe no seu bolso e comece a economizar hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.highlight 
                    ? 'bg-gradient-to-b from-white to-gray-50 border-4 border-brand-gold shadow-[0_0_60px_rgba(217,119,6,0.25)] scale-100 md:scale-105 z-20 order-first md:order-none mb-8 md:mb-0' 
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                } ${plan.id === 'lifetime' ? 'md:order-2 order-3' : plan.id === 'semiannual' ? 'md:order-3 order-2' : 'md:order-1 order-1'}`}
              >
                {plan.ribbon && (
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${plan.highlight ? 'bg-brand-gold text-white animate-pulse-slow' : 'bg-slate-600 text-white'} px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap`}>
                    {plan.ribbon}
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-brand-dark' : 'text-gray-300'}`}>{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className={`text-4xl font-display font-bold ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>{plan.price}</span>
                  </div>
                    <span className={`text-xs font-bold uppercase tracking-wide ${plan.highlight ? 'text-gray-500' : 'text-gray-500'}`}>{plan.period}</span>
                  {plan.savings && <p className="text-brand-green font-bold text-sm mt-3 bg-brand-green/10 inline-block px-3 py-1 rounded-lg">{plan.savings}</p>}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-start gap-3 text-sm ${feature.included ? (plan.highlight ? 'text-gray-700' : 'text-gray-200') : 'text-gray-500 opacity-50'}`}>
                      {feature.included ? (
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-brand-gold' : 'text-brand-gold'}`} />
                      ) : (
                        <X className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'font-medium' : ''}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bonuses for Vitalício */}
                {plan.bonuses && (
                  <div className="bg-amber-50 rounded-xl p-5 mb-8 border border-amber-100 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>
                    <p className="text-xs font-extrabold text-brand-gold uppercase tracking-wider mb-4 text-center flex items-center justify-center gap-2">
                       <Star className="w-3 h-3 fill-brand-gold" />
                       3 Bônus Exclusivos (Grátis)
                    </p>
                    <div className="space-y-3">
                      {plan.bonuses.map((bonus, bIdx) => (
                        <div key={bIdx} className="flex gap-3">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0"></div>
                           <div>
                             <p className="text-sm font-bold text-slate-900">{bonus.title}</p>
                             <p className="text-[11px] text-gray-600 leading-tight">{bonus.description}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md border-b-4 ${
                  plan.highlight 
                    ? 'bg-brand-gold text-white hover:bg-brand-goldDark border-amber-800 shadow-amber-500/30' 
                    : 'bg-white text-brand-dark hover:bg-gray-100 border-gray-300'
                }`}>
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Pagamento seguro e processado via Hotmart/Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-4 text-brand-dark">Ficou com dúvida?</h2>
          <p className="text-center text-gray-500 mb-12">Respondemos as perguntas mais comuns de quem não é da área.</p>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-gold/30">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-base md:text-lg text-gray-800 pr-4">{faq.question}</span>
                  <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openFaqIndex === index ? 'bg-brand-gold text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {openFaqIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed border-t border-transparent animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-24 relative overflow-hidden mb-16 md:mb-0">
        <div className="absolute inset-0 bg-brand-dark">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-dark to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
           <div className="max-w-4xl mx-auto">
             <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
                <span className="font-bold tracking-wider text-sm flex items-center gap-2"><Zap className="w-4 h-4 text-brand-gold fill-brand-gold"/> OFERTA POR TEMPO LIMITADO</span>
             </div>
             
             <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
               Sua obra não pode esperar.<br/>O prejuízo aumenta a cada dia.
             </h2>
             <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light text-slate-300">
               Garanta o controle total, economize milhares de reais e durma tranquilo sabendo que sua obra está no caminho certo.
             </p>
             
             <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
               {/* 3D PREMIUM BUTTON */}
               <button 
                 onClick={() => scrollToSection('precos')}
                 className="
                   relative group w-full md:w-auto
                   bg-brand-gold 
                   text-white text-xl font-extrabold uppercase tracking-wide
                   px-12 py-6 rounded-2xl 
                   shadow-[0_10px_0_0_#92400e,0_20px_20px_rgba(0,0,0,0.3)]
                   hover:shadow-[0_10px_0_0_#92400e,0_25px_25px_rgba(0,0,0,0.35)]
                   hover:brightness-110 hover:-translate-y-[2px]
                   active:shadow-[0_0px_0_0_#92400e,0_0px_0px_rgba(0,0,0,0.3)]
                   active:translate-y-[10px] active:border-b-0
                   transition-all duration-150
                   border-b-0
                   flex items-center justify-center gap-3
                 "
               >
                 <span>QUERO ACESSO VITALÍCIO</span>
                 <ArrowRight className="w-7 h-7 stroke-[3]" />
                 
                 {/* Shine Effect */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
               </button>
             </div>
             
             <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm opacity-70">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold"/> Acesso Imediato</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold"/> Compra Segura</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-gold"/> Garantia de 30 Dias</span>
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-gray-500 py-12 text-sm border-t border-gray-800 pb-32 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
               <div className="bg-slate-800 p-1.5 rounded-lg">
                 <Hammer className="w-4 h-4 text-brand-gold" />
               </div>
               <span className="font-bold text-white text-lg tracking-tight">MÃOS DA OBRA</span>
            </div>
            <div className="flex gap-8 font-medium">
               <a href="#" className="hover:text-white transition">Termos de Uso</a>
               <a href="#" className="hover:text-white transition">Política de Privacidade</a>
               <a href="#" className="hover:text-white transition">Fale Conosco</a>
            </div>
          </div>
          <div className="text-center md:text-right border-t border-gray-800 pt-8">
             <p>&copy; {new Date().getFullYear()} Mãos da Obra App. Todos os direitos reservados.</p>
             <p className="mt-2 text-xs text-gray-600">Feito para quem constrói sonhos.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium">Planos a partir de</span>
          <span className="text-lg font-bold text-brand-dark">R$ 29,90</span>
        </div>
        <button 
          onClick={() => scrollToSection('precos')}
          className="bg-brand-gold text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-gold/20"
        >
          Ver Planos
        </button>
      </div>

      {/* Floating Chat Widget */}
      <FloatingChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
        initialMessage={chatInitialMsg}
      />

    </div>
  );
};

export default App;