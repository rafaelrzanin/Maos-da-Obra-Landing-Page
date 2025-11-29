import React from 'react';
import { BarChart3, CheckSquare, ShoppingCart, AlertTriangle, TrendingDown, Calendar, Wallet, Hammer, Bell, Clock, ChevronRight, Bot, MessageSquare, Users, DollarSign, CheckCircle2 } from 'lucide-react';

export const DashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-[90vw] md:max-w-[380px]">
    {/* Device Frame */}
    <div className="relative bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border-[6px] md:border-8 border-gray-900 overflow-hidden z-10">
      
      {/* Top Bar */}
      <div className="h-7 bg-white flex items-center justify-between px-6 pt-2">
        <span className="text-[10px] font-bold text-gray-900">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-2.5 bg-gray-900 rounded-[2px]"></div>
          <div className="w-0.5 h-2.5 bg-gray-900/30 rounded-[2px]"></div>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-white px-6 pb-4 pt-2 flex justify-between items-center border-b border-gray-100">
        <div>
          <p className="text-xs text-gray-400 font-medium">Bom dia, Roberto</p>
          <h3 className="font-display font-bold text-lg text-gray-800">Obra: Casa Nova</h3>
        </div>
        <div className="relative">
             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                <Bell className="w-4 h-4" />
             </div>
             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="bg-gray-50 h-[450px] md:h-[550px] overflow-hidden relative">
        <div className="p-4 md:p-5 space-y-4">
          
          {/* Daily Summary Card (New Feature Highlight) */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue"></div>
             <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-800 text-sm">Resumo do Dia</h4>
                <span className="text-[10px] bg-blue-50 text-brand-blue px-2 py-0.5 rounded-full font-bold">Hoje</span>
             </div>
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                   <CheckSquare className="w-3.5 h-3.5 text-brand-green" />
                   <span>Iniciar contrapiso da sala</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                   <ShoppingCart className="w-3.5 h-3.5 text-orange-500" />
                   <span>Comprar argamassa (falta 2 dias)</span>
                </div>
             </div>
          </div>

          {/* Main Card - Money */}
          <div className="bg-brand-dark rounded-2xl p-5 text-white shadow-lg shadow-brand-dark/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full blur-2xl -mr-10 -mt-10"></div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-1 opacity-80">
                 <Wallet className="w-4 h-4" />
                 <span className="text-xs font-medium uppercase tracking-wider">Orçamento x Realizado</span>
               </div>
               <div className="flex items-baseline gap-2 mb-4">
                 <span className="text-3xl font-display font-bold">R$ 12.450</span>
                 <span className="text-xs opacity-70">gastos de R$ 85k</span>
               </div>
               
               <div className="space-y-2">
                 <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-brand-green h-1.5 rounded-full shadow-[0_0_10px_rgba(30,194,139,0.8)]" style={{ width: '18%' }}></div>
                 </div>
                 <div className="flex justify-between text-[10px] opacity-70">
                   <span>Dentro do previsto</span>
                   <span className="text-brand-green font-bold">Economia: R$ 1.200</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                   <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-700">Lista de Materiais</span>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                   <Hammer className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-700">Equipe e Diárias</span>
             </div>
          </div>
          
          {/* Ze da Obra Mini Teaser */}
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-3 rounded-xl shadow-md flex items-center gap-3">
             <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5 text-white" />
             </div>
             <div>
                <p className="text-[10px] text-blue-100 font-medium">Dúvida técnica?</p>
                <p className="text-xs font-bold text-white">Pergunte ao Zé da Obra</p>
             </div>
          </div>

        </div>
        
        {/* Floating Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-gray-100 p-4 flex justify-around items-center">
         <div className="flex flex-col items-center gap-1 text-brand-blue">
            <BarChart3 className="w-6 h-6" />
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-300">
            <Calendar className="w-6 h-6" />
         </div>
         <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white -mt-8 border-4 border-gray-50 shadow-lg">
            <span className="text-xl">+</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-300">
            <ShoppingCart className="w-6 h-6" />
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-300">
            <Wallet className="w-6 h-6" />
         </div>
      </div>
    </div>
  </div>
);

export const ZeDaObraChat = () => (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-sm mx-auto overflow-hidden flex flex-col h-[320px]">
        {/* Chat Header */}
        <div className="bg-brand-blue p-4 flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-blue-300">
                    <Bot className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-blue rounded-full"></div>
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">Zé da Obra (IA)</h4>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online agora
                </p>
            </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto">
            {/* User Message */}
            <div className="flex justify-end">
                <div className="bg-blue-100 text-gray-800 rounded-2xl rounded-tr-sm p-3 max-w-[85%] text-xs shadow-sm">
                    <p>Zé, o pedreiro pediu 50 sacos de cimento pro contrapiso de 40m². Tá certo isso?</p>
                </div>
            </div>

            {/* AI Message */}
            <div className="flex justify-start">
                <div className="bg-white text-gray-700 rounded-2xl rounded-tl-sm p-3 max-w-[90%] text-xs shadow-sm border border-gray-200">
                    <p className="font-bold text-brand-blue mb-1 flex items-center gap-1">
                        <Bot className="w-3 h-3" /> Análise do Zé:
                    </p>
                    <p className="mb-2">⚠️ <span className="font-bold">Atenção!</span> Essa quantidade está muito alta.</p>
                    <p>Para 40m² com 5cm de espessura, o cálculo correto seria aprox. <strong>35 sacos</strong> (traço 1:3).</p>
                    <div className="mt-2 bg-green-50 text-green-700 p-2 rounded-lg font-bold border border-green-100">
                        Economia estimada: R$ 600,00 (15 sacos a menos)
                    </div>
                </div>
            </div>
        </div>

        {/* Input Fake */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <div className="flex-1 bg-gray-100 rounded-full h-8 px-3 text-xs flex items-center text-gray-400">
                Digite sua dúvida...
            </div>
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white">
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>
    </div>
);

export const ComparisonCard = () => (
    <div className="glass-panel p-6 rounded-2xl shadow-xl border-l-4 border-brand-green max-w-sm w-full">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-brand-green" />
            Comparativo de Preço
        </h4>
        <div className="flex items-center justify-between mb-2">
             <div className="text-sm text-gray-500">Cimento CP II (50kg)</div>
             <div className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Melhor Preço</div>
        </div>
        <div className="space-y-2">
            <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 opacity-50">
                <span className="text-sm font-medium">Depósito Bairro</span>
                <span className="text-sm font-bold text-gray-500">R$ 38,90</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg bg-brand-green/10 border border-brand-green/30">
                <span className="text-sm font-bold text-brand-dark">Depósito Central</span>
                <span className="text-sm font-bold text-brand-green">R$ 34,50</span>
            </div>
            <div className="mt-3 text-xs text-center text-gray-500">
                Economia de <b>R$ 220,00</b> na compra de 50 sacos.
            </div>
        </div>
    </div>
);

// --- NEW MINI MOCKUPS FOR BENTO GRID ---

export const MiniFinancialCard = () => (
    <div className="w-full bg-brand-dark/50 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
        <div className="flex justify-between items-end mb-3">
            <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Saldo Disponível</p>
                <p className="text-2xl font-display font-bold text-white">R$ 4.250</p>
            </div>
            <div className="text-right">
                 <p className="text-xs text-brand-green bg-brand-green/10 px-2 py-1 rounded-md font-bold">+ Economia</p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-brand-blue w-[65%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400">
                <span>Gasto: 65%</span>
                <span>Meta: 100%</span>
            </div>
        </div>
    </div>
);

export const MiniMaterialList = () => (
    <div className="w-full bg-white rounded-xl p-3 border border-gray-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
            <div className="w-4 h-4 rounded border-2 border-brand-blue bg-brand-blue flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-gray-400 line-through">1000 Tijolos 8 furos</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
            <div className="w-4 h-4 rounded border-2 border-gray-300"></div>
            <span className="text-xs text-gray-700 font-medium">10 Sacos Cimento CP-II</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 opacity-50">
            <div className="w-4 h-4 rounded border-2 border-gray-300"></div>
            <span className="text-xs text-gray-700">3m³ Areia Média</span>
        </div>
    </div>
);

export const MiniTeamCard = () => (
    <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-200">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
            <span className="text-xs font-bold text-gray-600">Presença Hoje</span>
            <span className="text-[10px] text-brand-green font-bold bg-green-100 px-1.5 py-0.5 rounded">3/3</span>
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">JP</div>
                <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-700">João Pedreiro</p>
                    <p className="text-[9px] text-gray-400">Diária R$ 150</p>
                </div>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700">AS</div>
                <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-700">André Servente</p>
                    <p className="text-[9px] text-gray-400">Diária R$ 80</p>
                </div>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
        </div>
    </div>
);