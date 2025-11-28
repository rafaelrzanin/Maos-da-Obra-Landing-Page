import { PricingPlan, Testimonial, FaqItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: 'R$ 29,90',
    period: '/mês',
    description: 'Para pequenas reformas ou testes rápidos.',
    ctaText: 'Assinar Mensal',
    features: [
      { text: 'Controle de execução', included: true },
      { text: 'Controle de materiais', included: true },
      { text: 'Controle de gastos', included: true },
      { text: 'Acesso ao dashboard', included: true },
      { text: 'Suporte básico', included: true },
      { text: 'Calculadora de Obra', included: false },
      { text: 'Pacote de Contratos', included: false },
    ],
  },
  {
    id: 'semiannual',
    name: 'Semestral',
    price: 'R$ 97,00',
    period: '/semestre',
    description: 'Ideal para obras de médio prazo.',
    ctaText: 'Assinar Semestral',
    savings: 'Economize 45%',
    ribbon: 'Mais Economizado',
    features: [
      { text: 'Todo o plano Mensal', included: true },
      { text: 'Economia de 45% no valor', included: true },
      { text: 'Prioridade no suporte', included: true },
      { text: 'Acesso por 6 meses', included: true },
      { text: 'Calculadora de Obra', included: false },
      { text: 'Pacote de Contratos', included: false },
    ],
  },
  {
    id: 'lifetime',
    name: 'VITALÍCIO',
    price: 'R$ 247,00',
    period: 'pagamento único',
    description: 'Pague uma vez, use para sempre. Acesso total.',
    ctaText: 'Quero o Vitalício + Bônus',
    highlight: true,
    ribbon: '⭐ Mais Vendido',
    features: [
      { text: 'Acesso Vitalício ao App', included: true },
      { text: 'Todas as atualizações futuras', included: true },
      { text: 'Suporte VIP Prioritário', included: true },
      { text: 'Multi-obras', included: true },
    ],
    bonuses: [
      { title: 'Calculadora de Obra Completa', description: 'Metros, quantidades e custos exatos.' },
      { title: 'Checklist de Reforma (40+ itens)', description: 'Evite erros e retrabalhos.' },
      { title: 'Pacote de Contratos Profissionais', description: 'Segurança jurídica para sua obra.' },
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo M.',
    role: 'Engenheiro Civil',
    quote: 'Gerencio 3 obras simultaneamente. O MÃOS DA OBRA reduziu meu tempo de gestão em 40%. A lista de materiais automática é genial.',
    avatar: 'https://picsum.photos/100/100?random=1',
    savings: '40% tempo ganho'
  },
  {
    id: 2,
    name: 'Ana Paula S.',
    role: 'Proprietária',
    quote: 'Eu não entendia nada de obra. Com o app, evitei comprar material errado e economizei R$ 15.000 no final da construção da minha casa.',
    avatar: 'https://picsum.photos/100/100?random=2',
    savings: 'R$ 15k economizados'
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    role: 'Empreiteiro',
    quote: 'O cronograma visual ajuda minha equipe a saber exatamente o que fazer. Acabaram as desculpas de atraso.',
    avatar: 'https://picsum.photos/100/100?random=3',
    savings: 'Obra no prazo'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Funciona para obras pequenas e grandes?',
    answer: 'Sim! O app é escalável. Você pode usar desde a reforma de um banheiro até a construção de um prédio residencial. As ferramentas se adaptam ao tamanho do projeto.'
  },
  {
    question: 'Sou leigo, consigo usar?',
    answer: 'Absolutamente. Desenvolvemos o MÃOS DA OBRA pensando justamente em quem não é da área. A interface é intuitiva e o app te guia pelo passo a passo da obra.'
  },
  {
    question: 'Como ele gera economia real?',
    answer: 'Através de três frentes: 1) Calculando materiais com exatidão para evitar sobras; 2) Monitorando preços e orçamento para evitar estouros; 3) Organizando o cronograma para evitar diárias extras de mão de obra.'
  },
  {
    question: 'Qual plano compensa mais?',
    answer: 'Sem dúvida, o Plano Vitalício. Além de pagar uma única vez e ter acesso para sempre (inclusive para futuras reformas), você ganha R$ 300,00 em bônus exclusivos (Calculadora, Checklist e Contratos).'
  },
  {
    question: 'Posso usar para obra de terceiros?',
    answer: 'Sim! Muitos engenheiros e arquitetos usam o app para gerenciar as obras de seus clientes, centralizando as informações em um só lugar.'
  }
];