import React from 'react';
import { BarChart3, CheckSquare, ShoppingCart, AlertTriangle, TrendingDown } from 'lucide-react';

export const DashboardMockup = () => (
  <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-sm mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
    {/* Header */}
    <div className="bg-brand-dark p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-sm opacity-80">Orçamento Total</h3>
          <p className="text-2xl font-bold">R$ 145.000,00</p>
        </div>
        <div className="bg-brand-green/20 p-2 rounded-lg">
          <TrendingDown className="w-6 h-6 text-brand-green" />
        </div>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
        <div className="bg-brand-green h-2 rounded-full" style={{ width: '65%' }}></div>
      </div>
      <div className="flex justify-between text-xs opacity-70">
        <span>Gasto: R$ 94.250</span>
        <span>Disponível: R$ 50.750</span>
      </div>
    </div>

    {/* Body */}
    <div className="p-6 space-y-6">
      {/* Alert */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-orange-800">Atenção ao Cimento</p>
          <p className="text-xs text-orange-600">Estoque baixo. Reabastecer em 2 dias.</p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-brand-blue">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Alvenaria</p>
              <p className="text-xs text-gray-500">85% concluído</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-600">Em dia</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Materiais</p>
              <p className="text-xs text-gray-500">12 itens pendentes</p>
            </div>
          </div>
          <button className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">Ver Lista</button>
        </div>

         <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg text-brand-green">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Economia</p>
              <p className="text-xs text-gray-500">Vs. Mês anterior</p>
            </div>
          </div>
          <span className="text-sm font-bold text-brand-green">+ 22%</span>
        </div>
      </div>
    </div>
    
    {/* Bottom Nav Fake */}
    <div className="border-t border-gray-100 p-4 flex justify-around text-gray-400">
       <div className="w-8 h-8 rounded-full bg-brand-blue/10"></div>
       <div className="w-8 h-8 rounded-full bg-gray-100"></div>
       <div className="w-8 h-8 rounded-full bg-gray-100"></div>
       <div className="w-8 h-8 rounded-full bg-gray-100"></div>
    </div>
  </div>
);

export const MaterialsListMockup = () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-full max-w-sm">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-brand-blue" />
            Lista de Compras Inteligente
        </h4>
        <div className="space-y-3">
            {[
                { name: 'Cimento CP II', qtd: '15 sc', status: 'done', price: 'R$ 450' },
                { name: 'Areia Média', qtd: '2 m³', status: 'pending', price: 'R$ 320' },
                { name: 'Tijolo 8 furos', qtd: '1 mil', status: 'pending', price: 'R$ 890' },
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${item.status === 'done' ? 'bg-brand-green border-brand-green text-white' : 'border-gray-300'}`}>
                            {item.status === 'done' && <CheckSquare className="w-3 h-3" />}
                        </div>
                        <div>
                            <p className={`text-sm font-medium ${item.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item.name}</p>
                            <p className="text-xs text-gray-500">{item.qtd}</p>
                        </div>
                    </div>
                    <span className="text-xs font-bold text-gray-700">{item.price}</span>
                </div>
            ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs text-gray-500">Total Estimado</span>
            <span className="font-bold text-brand-blue">R$ 1.660,00</span>
        </div>
    </div>
);
