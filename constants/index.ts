import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  youtube,
  tiktok,
  whatsapp,
} from "@/public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Início",
  },
  {
    id: "features",
    title: "Cursos",
  },
  {
    id: "product",
    title: "Professores",
  },
  {
    id: "clients",
    title: "Sobre Nós",
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Destaque no mercado de trabalho",
    content:
      "Aprenda na prática habilidades técnicas reais e ganhe vantagem competitiva em processos seletivos e oportunidades de emprego.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Certificação Reconhecida",
    content:
      "Ao concluir os módulos, você recebe certificados que comprovam seu conhecimento e valorizam seu currículo.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Impulsione sua carreira",
    content:
      "Domine montagem, reparos e automação e esteja pronto para empreender ou ingressar no setor tecnológico com confiança.",
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Os cursos da Contech me deram a confiança prática que eu precisava para entrar no mercado de trabalho de tecnologia.",
    name: "Ana Paula",
    title: "Estudante de Automação",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Aprender montagem e reparos eletrônicos aqui foi transformador. A metodologia mão na massa faz toda a diferença.",
    name: "Lucas Silva",
    title: "Técnico em Eletrônica",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Recomendo demais! Os certificados que recebi abriram portas no meu emprego atual, graças ao ensino prático da Contech.",
    name: "João Carvalho",
    title: "Profissional de Manutenção Eletrônica",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projetos Realizados",
    value: "80+",
  },
  {
    id: "stats-2",
    title: "Estudantes Ativos",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Horas de Mentoria",
    value: "5.000+",
  },
];

export const footerLinks = [
  {
    id: "footerLinks-1",
    title: "Links Úteis",
    links: [
      {
        name: "Conteúdos",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Nossa metodologia",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Termos & Serviços",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    id: "footerLinks-2",
    title: "Comunidade",
    links: [
      {
        name: "Central de Ajuda",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Patrocinadores",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Sujestões",
        link: "https://www.hoobank.com/suggestions/",
      },

    ],
  },
  {
    id: "footerLinks-3",
    title: "Patrocinadores",
    links: [
      {
        name: "Nossos Patrocinadores",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Vire um Patrocinador",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/contech.lab/",
  },
  {
    id: "social-media-2",
    icon: whatsapp,
    link: "https://wa.me/5575981143332",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://x.com/Lucxrs_srxcuL",
  },
  {
    id: "social-media-4",
    icon: tiktok,
    link: "https://www.tiktok.com/@contech.lab",
  },
  {
    id: "social-media-5",
    icon: youtube,
    link: "https://www.youtube.com/channel/UCrgk2JXDVu0_17fUpM93Eyw",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const modalities = [
  {
    id: "modality-1",
    title: "Aula Presencial",
    description:
      "Agende sua aula experimental presencial e venha conhecer de perto nossa estrutura prática.",
    actionText: "Chamar no WhatsApp",
    link: "https://wa.me/seu-numero-aqui", // substitua pelo seu link real
  },
  {
    id: "modality-2",
    title: "Aula Experimental Online",
    description:
      "Prefere online? Preencha um formulário rápido com seu nome, telefone e curso desejado. A gente entra em contato!",
    actionText: "Agendar Aula Online",
    link: "https://sua-plataforma-de-formulario.com", // ex: Google Forms, Tally, Typeform
  },
  {
    id: "modality-3",
    title: "Acesso Imediato aos Cursos",
    description:
      "Já quer começar agora? Acesse diretamente nossa plataforma de cursos online e estude no seu ritmo.",
    actionText: "Ir para Plataforma",
    link: "https://sualoja.com.br/cursos", // link direto da loja
  },
];
