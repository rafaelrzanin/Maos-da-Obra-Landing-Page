import { PricingPlan, Testimonial, FaqItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Para quem quer testar ou fazer uma pequena reforma.',
    ctaText: 'Começar Mensal',
    features: [
      { text: 'Controle de obras e reformas', included: true },
      { text: 'Lista de compras automática', included: true },
      { text: 'Gráficos simples de entender', included: true },
      { text: 'Suporte por e-mail', included: true },
      { text: 'IA Zé da Obra (Assistente)', included: false },
      { text: 'Checklist Anti-Erro (40 itens)', included: false },
      { text: 'Calculadora de Materiais', included: false },
      { text: 'Modelos de Contratos Prontos', included: false },
    ],
  },
  {
    id: 'semiannual',
    name: 'Semestral',
    price: 'R$ 97,00',
    period: '/semestre',
    description: 'Perfeito para construção de casas (duração média).',
    ctaText: 'Escolher Semestral',
    savings: 'Economize R$ 82,40',
    ribbon: 'Melhor para Obras Médias',
    features: [
      { text: 'Tudo do plano Mensal', included: true },
      { text: 'Acesso por 6 meses completos', included: true },
      { text: 'Prioridade no atendimento', included: true },
      { text: 'Exportação de relatórios em PDF', included: true },
      { text: 'IA Zé da Obra (Assistente)', included: false },
      { text: 'Checklist Anti-Erro (40 itens)', included: false },
      { text: 'Calculadora de Materiais', included: false },
      { text: 'Modelos de Contratos Prontos', included: false },
    ],
  },
  {
    id: 'lifetime',
    name: 'VITALÍCIO',
    price: 'R$ 247,00',
    period: 'PAGAMENTO ÚNICO',
    description: 'Sem mensalidades. Use hoje, amanhã e em futuras reformas.',
    ctaText: 'QUERO O ACESSO VITALÍCIO',
    highlight: true,
    ribbon: '⭐ OFERTA CAMPEÃ',
    features: [
      { text: 'Acesso para SEMPRE ao App', included: true },
      { text: 'Nunca mais pague mensalidade', included: true },
      { text: 'IA Zé da Obra (Ilimitado)', included: true },
      { text: 'Todas as atualizações futuras grátis', included: true },
      { text: 'Gerencie múltiplas obras ao mesmo tempo', included: true },
    ],
    bonuses: [
      { title: 'Calculadora Automática de Materiais', description: 'Saiba exato quantos tijolos e cimento comprar.' },
      { title: 'Checklist Anti-Erro (40 itens)', description: 'Previna erros que só aparecem depois: piso empoçando, falta de tomadas e ralos esquecidos.' },
      { title: 'Kit de Contratos Blindados', description: 'Modelos prontos para assinar com a mão de obra.' },
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Costa',
    role: 'Construindo a 1ª Casa',
    quote: 'Eu não entendo nada de obra. O app me disse exatamente o que comprar. O pedreiro pediu 50 sacos de cimento, o app calculou 35. O app estava certo. Só aí economizei R$ 600.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    savings: 'Economizou R$ 4.500 no total'
  },
  {
    id: 2,
    name: 'Roberto V.',
    role: 'Reformando Apartamento',
    quote: 'Minha última reforma atrasou 3 meses. Com o Mãos da Obra, usei o cronograma visual e mostrei pro mestre de obras. Terminamos 1 semana ANTES do prazo.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    savings: 'Obra entregue antecipada'
  },
  {
    id: 3,
    name: 'Fernanda L.',
    role: 'Autônoma',
    quote: 'A melhor parte é o controle financeiro. Antes eu anotava no caderno e perdia as notas. Agora sei centavo por centavo para onde foi meu dinheiro. Sensação de paz.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    savings: 'Zero dor de cabeça'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Eu não entendo nada de construção, serve pra mim?',
    answer: 'Sim! O Mãos da Obra foi criado justamente para você. Não usamos termos técnicos complicados. Além disso, no plano Vitalício, você conta com o Zé da Obra (IA), nosso assistente virtual que responde qualquer dúvida na hora.'
  },
  {
    question: 'Funciona para reformas pequenas (ex: só um banheiro)?',
    answer: 'Com certeza. Seja para trocar o piso de um quarto ou construir uma casa do zero, o princípio é o mesmo: evitar desperdício e atraso. Você ajusta o tamanho da obra dentro do app.'
  },
  {
    question: 'Como o app me faz economizar dinheiro?',
    answer: 'De 3 formas: 1) A Calculadora evita que você compre material a mais (sobras); 2) O Checklist evita erros de execução (que geram retrabalho e custo dobrado); 3) O Controle Financeiro te alerta se você estiver gastando muito em itens supérfluos.'
  },
  {
    question: 'Por que o Plano Vitalício vale mais a pena?',
    answer: 'Uma obra dura meses. Com o Vitalício, você paga um valor único (menor que uma diária de pedreiro) e tem a ferramenta para sempre. Além disso, SOMENTE no Vitalício você tem acesso ao Zé da Obra (IA) e ganha os contratos e checklists.'
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim. Você tem 30 dias para testar. Se achar que o app não está te ajudando a economizar, devolvemos 100% do seu dinheiro. Sem perguntas, basta enviar um e-mail.'
  }
];