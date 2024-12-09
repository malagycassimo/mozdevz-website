import { icons, schoolsLogos, sponsorsLogos, teamMembers } from './data'
const recognitions = [
  { number: 6000, text: 'Sensibilizados' },
  { number: 2000, text: 'Membros' },
  { number: 600, text: 'Formados' },
]

const team = [
  {
    name: 'Valquiria Pondja',
    role: 'Presidente',
    instagram:
      'https://www.instagram.com/valquiria.pondja/profilecard/?igsh=Njg3a3ZicXN0Zm81',
    twitter: 'https://x.com/shannypondja',
    linkedin:
      'https://www.linkedin.com/in/valqu%C3%ADria-pondja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: teamMembers.valquiriapondja,
  },
  {
    name: 'Melanie Nhanzilo',
    role: 'Vice-Presidente',
    instagram: 'https://www.instagram.com/melanienhanzilo',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/melanie-nhanzilo-64695232a',
    img: teamMembers.melanienhanzilo,
  },
  {
    name: 'Dário Pacule',
    role: 'Gestor de Marketing e Brand',
    instagram: 'https://www.instagram.com/dario_pacule',
    twitter: 'https://x.com/dariopacule',
    linkedin: 'https://www.linkedin.com/in/dariopacule',
    img: teamMembers.dariopacule,
  },
  {
    name: 'Edicélio Savanguane',
    role: 'Designer',
    instagram: 'https://www.instagram.com/odesigner.psd',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/edicelio',
    img: teamMembers.ediceliosavanguane,
  },
  {
    name: 'Fenilde Chiluvane',
    role: 'Gestora de Comunicação',
    instagram: 'https://instagram.com/fenilde_clelio',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/fenilde-chiluvane-1994791b2',
    img: teamMembers.fenildechiluvane,
  },
  {
    name: 'Malagy Cassimo',
    role: 'IT/Developer',
    instagram: 'https://www.instagram.com/malagy.malagy',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/malagycassimo',
    img: teamMembers.malagycassamo,
  },
  {
    name: 'Walter Cumbucane',
    role: 'Gestor de comunidades',
    instagram: 'https://www.instagram.com/walter_cumbucane/',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/walter-cumbucane-23b3b6231',
    img: teamMembers.waltercumbucane,
  },
]

const sponsors = [
  {
    name: 'Ciuem',
    logo: sponsorsLogos.ciuem,
  },
  {
    name: 'Espaço de Inovação',
    logo: sponsorsLogos.espaco_uem,
  },
  {
    name: 'Co-work lab',
    logo: sponsorsLogos.coworklab,
  },
  {
    name: 'Banco Mundial',
    logo: sponsorsLogos.banco_mundial,
  },
  {
    name: 'Ministério da Ciência, Tecnologia e Ensino Superior',
    logo: sponsorsLogos.mctestp,
  },
  {
    name: 'OX Fam',
    logo: sponsorsLogos.oxfam,
  },
  {
    name: 'psi',
    logo: sponsorsLogos.psi,
  },
  {
    name: 'Reino dos Países baixos',
    logo: sponsorsLogos.reino,
  },
  {
    name: 'ADE',
    logo: sponsorsLogos.ade,
  },
  {
    name: 'FSDMoç',
    logo: sponsorsLogos.fsdmoc,
  },
  {
    name: 'Kabum Digital (93Interactions)',
    logo: sponsorsLogos.kabum,
  },
  {
    name: 'Standard Bank',
    logo: sponsorsLogos.standard_bank,
  },
  {
    name: 'Vodacom',
    logo: sponsorsLogos.vodacom,
  },
]

const whyMozDevz = [
  [
    {
      Icon: icons.User,
      question: 'É profissional de tecnologia?',
      answer:
        'Expanda seus conhecimentos e faça network com outros profissionais.',
    },
    {
      Icon: icons.Student,
      question: 'É estudante?',
      answer:
        'Tenha acesso a conversas e discussões interessantes e encontre mentores.',
    },
  ],
  [
    {
      Icon: icons.Swap,
      question: 'Pretende mudar de carreira?',
      answer:
        'Mergulhe suavemente na sua carreira antes de dar o grande salto.',
    },
    {
      Icon: icons.Code,
      question: 'É iniciante em programação?',
      answer: 'Conecte-se com outros entusiastas e profissionais da área.',
    },
  ],
]

const schools = [
  {
    name: 'ISUTC',
    logo: schoolsLogos.isutc,
  },
  {
    name: 'UNILÚRIO',
    logo: schoolsLogos.lurio,
  },
  {
    name: 'NAUTICA',
    logo: schoolsLogos.nautica,
  },
  {
    name: 'UJC',
    logo: schoolsLogos.ujc,
  },
  {
    name: 'UP Maputo',
    logo: schoolsLogos.up_maputo,
  },
]

const staticContent = {
  heroTitle: 'A maior comunidade de desenvolvedores de Moçambique',
  heroSubtitle: 'Impactamos milhares de devz e impulsionamos carreiras',
  heroInvitation: 'Junta-se a comunidade',
  cardsAreaTitle: 'Aprendemos em comunidade',
  cardsAreaSubtitle:
    'Proporcionamos oportunidades de partilha de conhecimento e desenvolvimento de habilidades para a criação de produtos digitais a jovens durante o período de formação e contribuímos para o desenvolvimento da sociedade atraves das soluções desenvolvidas.',
  cardsAreaInvitation: 'Saiba mais',
  revealTitle: 'Impactamos milhares de devz e impulsionamos carreiras',
  revealSubtitle:
    'Somos uma comunidade de desenvolvedores moçambicanos de software e aplicações. Usamos os nossos talentos para contribuir para o desenvolvimento social da comunidade na qual estamos inseridos.',
  revealInvitation: 'Saiba mais',
  talentsTitle: 'Talentos',
  talentsSubtitle:
    'Capacitamos e desenvolvemos talentos com o objectivo de preprarar e integrar no mercado de trabalho através da nossa rede de parceiros.',
  startupTitle: 'Startup',
  startupSubtitle:
    'Apoiamos equipas multidisplinares com orientação e capacitação no desenvolvimento de soluções tecnológicas em ambientes de extrema incerteza.',
  corporateTitle: 'Corporate',
  corporateSubtitle:
    'Firmamos parceirias e trabalhamos com empresas e ONGs no desenvolvimento de soluções de base tecnológica para a resolução de problemas sociais.',
  teamTitle: 'MozDevz Team',
  teamSubtitle:
    'A team responsável por dirigir essa imensa comunidade de devz do Rovuma ao Maputo',
  sponsorsTitle: 'Parceiros e patrocinadores',
  sponsorsSubtitle:
    'Parceiros e patrocinadores que nos apoiam na organização de eventos, workshops e projectos que ajudam a impulsionar o desenvolvimento da comunidade',
  schoolsTitle: 'MozDevz Schools',
  schoolsSubtitle:
    'Universidades comprometidas com o sucesso e excelência dos alunos em ciências tecnológicas através da educação, inovação que ajudam a encorajar o desenvolvimento da comunidade MozDevz',
  headerTitle: 'Mozdevz - Comunidade Moçambicana de Desenvolvedores',
  headerSubtitle: 'Juntar-se a comunidade',
  langChange: 'Alterar lingua',
  aboutTitle: 'Quem somos nós',
  aboutSubtitle: 'Conheça a nossa team',
  aboutDescription:
    'Somos uma comunidade de desenvolvedores moçambicanos de software e aplicações, que usa os seus talentos para contribuir para o desenvolvimento social da comunidade na qual estamos inseridos.',
  aboutDescription2:
    'Acreditamos no poder das tecnologias de informação e comunicação (TIC) para mudar vidas. Vemos as TICs como infra-estrutura essencial para auxiliar a prestação de serviços e para a redução de problemas sociais.',
  identityTitle: 'Nossa Identidade',
  identitySubtitle: 'Comunidade. Tecnologia. Experiências',
  missionTitle: 'Missão',
  missionSubtitle:
    'Usar as TICs para desenvolver o país, através do empoderamento, espírito de trabalho e partilha de conhecimento para tornar Moçambique numa referência regional de produção de soluções tecnológicas.',
  visionTitle: 'Visão',
  visionSubtitle:
    'Ser uma plataforma activa e colaborativa que promova a integração local, continental e global das comunidades através do uso das tecnologias.',
  valuesTitle: 'Valores',
  valuesSubtitle:
    'Prezamos a colaboração, inovação e criação de soluções locais para problemas locais.',
  manifestoTitle: 'Nosso manifesto',
  manifesto1:
    'Acreditamos no poder das tecnologias de informação e comunicação (TIC) para mudar vidas. Vemos as TICs como infra-estrutura essencial para auxiliar a prestação de serviços e para a redução de problemas sociais.',
  manifesto2:
    'Embora o nosso objetivo final seja melhorar a vida das pessoas que vivem em comunidades, acreditamos que a melhor maneira de fazer isso é através do trabalho conjunto com as organizações - ONGs, organizações multilaterais, instituições governamentais ou do sector privado - que oferecem educação vital, relevo, serviços financeiros e outras.',
  manifesto3:
    'Cada uma destas organizações tem objetivos e necessidades distintas; Da mesma forma, quando se trata de tecnologias apropriadas, rejeitamos uma abordagem one-size-fits all.',
  manifesto4:
    'Acreditamos que mesmo a tecnologia mais adequada e sustentável requer um ecossistema de habilidades humanas para durar. A MozDevz trabalha com profissionais no país para construir a sua capacidade para desenvolver e gerenciar projetos de TICs, alimentando assim o ecossistema e a economia local de TIC para garantir a sustentabilidade de projectos atuais e futuros.',
  manifesto5:
    'MozDevz é uma organização sem fins lucrativos com uma clara missão social - para ampliar e maximizar o impacto das TICs sobre a vida daqueles que mais precisam deles. Vemos os beneficiários de nosso trabalho como parceiros em um esforço conjunto para melhorar a qualidade de vida',
  joinUs: 'Junta-te a nós!',
  contactTitle: 'Sempre aqui para ter uma conversa',
  contactSubtitle: 'Fale connosco',
  contactInvitation:
    'Estamos sempre em busca de novos parceiros que possam se beneficiar de nossa expertise e colaborar connosco para desenvolver projectos incríveis juntos.',
  placeholderName: 'Nome',
  placeholderTopic: 'Assunto',
  placeholderMessage: 'Mensagem',
  submit: 'Submeter',
  visitUs: 'Visite-nos',
  callUs: 'Ligue-nos',
  writeToUs: 'Escreva-nos',
  seeMore: 'Ver mais',
  followOn: 'Acompanhe-na ',
}

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Contacto', href: '/contact' },
]

const events = [
  {
    image: 'event-data-wave-24-66782b3fb5090.webp',
    title: 'Data Wave: Conferência de Dados e IA',
    tags: [
      { color: '#E9D5FF', title: 'Data' },
      { color: '#CBD5E1', title: 'IA' },
    ],
    date: '14 de Setembro 2024',
    location: 'Por Anunciar',
    link: 'https://datawave.mozdevz.org/',
  },
  {
    image: 'khodar-2-1-66782618374c4.webp',
    title: 'Khodar (Season 2)',
    tags: [{ color: '#CCFBF1', title: 'Development' }],
    date: '08 de Julho 2024',
    location: 'Online',
    link: 'https://forms.gle/9UgGFMeMHyevQqhq7',
  },
  {
    image: 'cyberconnect-66781ddab3235.webp',
    title: 'MozCyber Connect',
    tags: [{ color: '#FEF3C7', title: 'Cybersecurity' }],
    date: '04 de Maio - 01 de Junho 2024',
    location: 'Online',
    link: 'https://www.youtube.com/watch?v=TgXbZ-DZCy8&list=PLgx8AvFCHjcswvCZyDV4HJ3ckerA1N18B',
  },
]
export {
  recognitions,
  team,
  sponsors,
  whyMozDevz,
  schools,
  staticContent,
  menuItems,
  events,
}
