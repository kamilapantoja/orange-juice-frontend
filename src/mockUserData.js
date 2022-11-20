import Lia from "./assets/Lia.png";
import Ux from "./assets/UI-UX-Design.jpg";
import Fullstack from "./assets/fullstack.jpg";
import Qa from "./assets/body-quality-assurance (1).jpg";
import Start from "./assets/Iniciando-uma-nova-jornada.jpg";
import Opcional from "./assets/opcional (1).jpg";

export const progress = {
  idUser: 1,
  courses: [
    "Habilidades além do código",
    "Qual a melhor linguagem de programação?",
    "LGPD: Desvendando o bicho de 7 cabeças",
    "Design Thinking e carreira: como migrei de Psicologia para UX Design",
    "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
    "O que um Dev júnior pode ensinar?",
    "Mini Curso Javascript do Zero",
    "O design do dia a dia",
    "A poderosa união entre design de UX e desenvolvimento de software",
    "De advogada a desenvolvedora: um relato sobre minha migração de carreira",
  ],
  courseTypes: [
    "Vídeo",
    "Vídeo",
    "Live",
    "Artigo",
    "Artigo",
    "Vídeo",
    "Curso",
    "Livro",
    "Artigo",
    "Artigo",
  ],
  roadmaps: [
    "Desenvolvimento Full Stack",
    "Desenvolvimento Full Stack",
    "O início",
    "O início",
    "O início",
    "Desenvolvimento Full Stack",
    "Opcional",
    "Opcional",
    "O início",
    "O início",
  ],
  status: [
    "Em andamento",
    "Em andamento",
    "Em andamento",
    "Em andamento",
    "Em andamento",
    "Concluído",
    "Concluído",
    "Concluído",
    "Concluído",
    "Concluído",
  ],
  favorites: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
};

export const userMock = {
  id: 1,
  firstName: "Lia",
  lastName: "Sousa",
  email: "liasousa@email.com",
  photo: Lia,
  currentRoadmap: "Desenvolvimento Full Stack",
  progress: 25, // adquirido por agregação
};

export const currentRoadmapVideosMock = {
  quantity: 6,
  courses: [
    {
      id: 35,
      course: "O que um Dev júnior pode ensinar?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:50:29",
      url: "https://www.youtube.com/watch?v=qZ4ZKJSmf4k",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 36,
      course: "Qual a melhor linguagem de programação?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:51:06",
      url: "https://www.youtube.com/watch?v=zTMvQD5EtJw",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 37,
      course: "Habilidades além do código",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:45:01",
      url: "https://www.youtube.com/watch?v=Mmukepu3yRs",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 38,
      course: "Dúvidas sobre carreira",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:57:54",
      url: "https://www.youtube.com/watch?v=bZQx1oHMbHg",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 40,
      course: "Curso de Lógica de Programação",
      type: "Vídeo",
      author: "Curso em Vídeo",
      image: "https://i.pravatar.cc/300",
      length: "07:58:07",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 44,
      course: "Versionamento com Git",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "01:03:15",
      url: "https://www.youtube.com/watch?v=9k_lIYuRtg8",
      roadmap: "Desenvolvimento Full Stack",
    },
  ],
};

export const currentRoadmapCoursesMock = {
  quantity: 25,
  courses: [
    {
      id: 35,
      course: "O que um Dev júnior pode ensinar?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:50:29",
      url: "https://www.youtube.com/watch?v=qZ4ZKJSmf4k",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 36,
      course: "Qual a melhor linguagem de programação?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:51:06",
      url: "https://www.youtube.com/watch?v=zTMvQD5EtJw",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 37,
      course: "Habilidades além do código",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:45:01",
      url: "https://www.youtube.com/watch?v=Mmukepu3yRs",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 38,
      course: "Dúvidas sobre carreira",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:57:54",
      url: "https://www.youtube.com/watch?v=bZQx1oHMbHg",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 39,
      course: "Lógica de programação e algoritmos",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:20:00",
      url: "https://www.udemy.com/course/logica-de-programacao-e-algoritmos-iniciante/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 40,
      course: "Curso de Lógica de Programação",
      type: "Vídeo",
      author: "Curso em Vídeo",
      image: "https://i.pravatar.cc/300",
      length: "07:58:07",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 41,
      course: "Instalar o Linux no Windows com o WSL",
      type: "Artigo",
      author: "Windows",
      image: "https://i.pravatar.cc/300",
      length: "00:20:00",
      url: "https://docs.microsoft.com/pt-br/windows/wsl/install",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 42,
      course: "Terminal Linux",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "00:55:00",
      url: "https://www.udemy.com/course/terminal-de-comandos-linux/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 43,
      course: "Shell Script: Introdução e Como Automatizar Tarefas",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://www.alura.com.br/artigos/automatizando-tarefas-com-shell-script",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 44,
      course: "Versionamento com Git",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "01:03:15",
      url: "https://www.youtube.com/watch?v=9k_lIYuRtg8",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 45,
      course: "Git e Github para iniciantes",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:05:00",
      url: "https://www.udemy.com/course/git-e-github-para-iniciantes/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 46,
      course: "Introdução a Bancos de Dados e Linguagem SQL",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "01:59:00",
      url: "https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 47,
      course: "Básico HTML, CSS e Javascript",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:11:00",
      url: "https://www.udemy.com/course/criando-site-html-css-e-javascript/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 48,
      course: "Introdução à linguagem CSS",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "01:27:00",
      url: "https://www.udemy.com/course/introducao-a-linguagem-css/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 49,
      course: "Curso de SASS",
      type: "Curso",
      author: "Amanda Vilela",
      image: "https://i.pravatar.cc/300",
      length: "01:45:59",
      url: "https://www.youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 50,
      course: "Curso de HTML, CSS e Bootstrap",
      type: "Curso",
      author: "Michelli Brito",
      image: "https://i.pravatar.cc/300",
      length: "01:53:23",
      url: "https://www.youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 51,
      course: "Curso de LESS",
      type: "Curso",
      author: "Cursa",
      image: "https://i.pravatar.cc/300",
      length: "02:45:00",
      url: "https://www.cursa.com.br/home/course/curso-de-less/189",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 52,
      course: "Descomplicando SPA's",
      type: "Artigo",
      author: "Training Center",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://medium.com/trainingcenter/descomplicando-spas-caa8f57bdbf3",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 53,
      course: "Single-page application vs. multiple-page application",
      type: "Artigo",
      author: "Neoteric",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 54,
      course: "Curso Javascript + 14 Mini-Projetos",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "04:35:31",
      url: "https://www.youtube.com/watch?v=i6Oi-YtXnAU",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 55,
      course: "Curso de Java",
      type: "Curso",
      author: "Curso em Vídeo",
      image: "https://i.pravatar.cc/300",
      length: "11:36:40",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 56,
      course: "HTTP: Desmistificando o protocolo da Web",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:45:00",
      url: "https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 57,
      course: "O que é uma API?",
      type: "Artigo",
      author: "AWS",
      image: "https://i.pravatar.cc/300",
      length: "03:00:00",
      url: "https://aws.amazon.com/pt/what-is/api/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 58,
      course: "Qual é a diferença entre HTTP e HTTPS?",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://www.alura.com.br/artigos/qual-e-diferenca-entre-http-e-https",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 59,
      course: "Métodos de requisição do HTTP",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:10:00",
      url: "https://www.alura.com.br/artigos/metodos-de-requisicao-do-http",
      roadmap: "Desenvolvimento Full Stack",
    },
  ],
};

export const courses = {
  quantity: 59,
  courses: [
    {
      id: 1,
      course:
        "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",
      roadmap: "O início",
    },
    {
      id: 2,
      course:
        "Design Thinking e carreira: como migrei de Psicologia para UX Design",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5",
      roadmap: "O início",
    },
    {
      id: 3,
      course:
        "De advogada a desenvolvedora: um relato sobre minha migração de carreira",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://medium.com/orangejuicefc/de-advogada-a-desenvolvedora-um-relato-sobre-minha-migra%C3%A7%C3%A3o-de-carreira-e-dicas-para-quem-pretende-45ad5df833b5",
      roadmap: "O início",
    },
    {
      id: 4,
      course: "Culture Code",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "01:22:25",
      url: "https://www.youtube.com/watch?v=n0KH8dQSrv0",
      roadmap: "O início",
    },
    {
      id: 5,
      course: "Product Owner e Scrum Master",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "01:13:33",
      url: "https://www.youtube.com/watch?v=_ku7bY5GtIY",
      roadmap: "O início",
    },
    {
      id: 6,
      course: "Product Owner",
      type: "Artigo",
      author: "PM3",
      image: "https://i.pravatar.cc/300",
      length: "00:08:00",
      url: "https://www.cursospm3.com.br/product-owner-o-que-faz-salario-habilidades/",
      roadmap: "O início",
    },
    {
      id: 7,
      course: "O que é um scrum master?",
      type: "Artigo",
      author: "Atlassian",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://www.atlassian.com/br/agile/scrum/scrum-master",
      roadmap: "O início",
    },
    {
      id: 8,
      course: "A Day in the Life of a Scrum Master",
      type: "Artigo",
      author: "Scrum Alliance",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://resources.scrumalliance.org/Article/day-life-scrum-master",
      roadmap: "O início",
    },
    {
      id: 9,
      course: "Com grandes códigos, vem grandes responsabilidades",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "01:25:20",
      url: "https://www.youtube.com/watch?v=N78-5gHLzbE",
      roadmap: "O início",
    },
    {
      id: 10,
      course: "Como se tornar um desenvolvedor full-stack no próximo ano",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano",
      roadmap: "O início",
    },
    {
      id: 11,
      course: "Mas o que é UX?",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:04:00",
      url: "https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887",
      roadmap: "O início",
    },
    {
      id: 12,
      course: "UX e UI: conheça as semelhanças e diferenças entre ambos",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos",
      roadmap: "O início",
    },
    {
      id: 13,
      course: "UX Rainbow: como nossa equipe trabalha",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "01:25:58",
      url: "https://www.youtube.com/watch?v=_RsYz_iKP4k",
      roadmap: "O início",
    },
    {
      id: 14,
      course: "Qual o papel do QA em uma equipe?",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:04:00",
      url: "https://medium.com/orangejuicefc/qual-o-papel-do-qa-em-uma-equipe-8e8147be28dd",
      roadmap: "O início",
    },
    {
      id: 15,
      course: "Selo Q.A. de qualidade",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "01:23:10",
      url: "https://www.youtube.com/watch?v=pP5M7lf6JmQ",
      roadmap: "O início",
    },
    {
      id: 16,
      course: 'O que é "stakeholder"',
      type: "Artigo",
      author: "PM3",
      image: "https://i.pravatar.cc/300",
      length: "00:02:00",
      url: "https://www.cursospm3.com.br/glossario/stakeholder/",
      roadmap: "O início",
    },
    {
      id: 17,
      course:
        "Leandro Karnal em O Futuro da Liderança - BTG Bankers Experience 2021",
      type: "Live",
      author: "BTG Pactual",
      image: "https://i.pravatar.cc/300",
      length: "00:56:33",
      url: "https://www.youtube.com/watch?v=b9A34yUvzEc",
      roadmap: "O início",
    },
    {
      id: 18,
      course: "Orange Juice Cast #17 - Scrum: uma revolução nas terras da T.I.",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:57:52",
      url: "https://www.youtube.com/watch?v=TmTupAe14T4",
      roadmap: "O início",
    },
    {
      id: 19,
      course: "Fundamentos iniciais da Metodologia Ágil",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:04:00",
      url: "https://medium.com/orangejuicefc/fundamento-iniciais-da-metodologia-%C3%A1gil-a4f3f0a3f025",
      roadmap: "O início",
    },
    {
      id: 20,
      course: "Manifesto Ágil: a Bíblia das Metodologias Ágeis",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://medium.com/orangejuicefc/manifesto-%C3%A1gil-a-b%C3%ADblia-das-metodologias-%C3%A1geis-1a4ec9f220a",
      roadmap: "O início",
    },
    {
      id: 21,
      course: "Squads - o que é e como funciona?",
      type: "Artigo",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/",
      roadmap: "O início",
    },
    {
      id: 22,
      course: "MVP: o que é e como construir um Produto Mínimo Viável",
      type: "Artigo",
      author: "PM3",
      image: "https://i.pravatar.cc/300",
      length: "00:08:00",
      url: "https://www.cursospm3.com.br/blog/mvp-o-que-e-e-como-construir-um-produto-minimo-viavel/",
      roadmap: "O início",
    },
    {
      id: 23,
      course: "Soft Skills: o que são e os benefícios de desenvolvê-las",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:04:00",
      url: "https://www.alura.com.br/artigos/soft-skills-o-que-sao-e-os-beneficios-de-desenvolve-las",
      roadmap: "O início",
    },
    {
      id: 24,
      course: "Aprimorando a comunicação",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:03:00",
      url: "https://medium.com/orangejuicefc/aprimorando-a-comunica%C3%A7%C3%A3o-3933cbc886b4",
      roadmap: "O início",
    },
    {
      id: 25,
      course: "Por que melhorar a comunicação",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:04:00",
      url: "https://medium.com/orangejuicefc/por-que-um-programador-deve-desconstruir-a-ideia-de-que-n%C3%A3o-precisa-lidar-com-pessoas-e-como-9974bcebf4a9",
      roadmap: "O início",
    },
    {
      id: 26,
      course: "UX Design e Comunicação",
      type: "Artigo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://medium.com/orangejuicefc/ux-design-e-comunica%C3%A7%C3%A3o-b32a44ef7e42",
      roadmap: "O início",
    },
    {
      id: 27,
      course: "Coisas que você deveria saber antes de trabalhar em equipe",
      type: "Live",
      author: "Grupo FCamara",
      image: "https://i.pravatar.cc/300",
      length: "00:59:48",
      url: "https://www.youtube.com/watch?v=gG0zZoj595U",
      roadmap: "O início",
    },
    {
      id: 28,
      course:
        "A poderosa união entre design de UX e desenvolvimento de software",
      type: "Artigo",
      author: "Fernanda de Oliveira",
      image: "https://i.pravatar.cc/300",
      length: "00:05:00",
      url: "https://www.linkedin.com/pulse/poderosa-uni%C3%A3o-entre-design-de-ux-e-desenvolvimento-de-oliveira/?originalSubdomain=pt",
      roadmap: "O início",
    },
    {
      id: 29,
      course: "LGPD: Desvendando o bicho de 7 cabeças",
      type: "Live",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "01:01:31",
      url: "https://www.youtube.com/watch?v=KKLDwHyQATA",
      roadmap: "O início",
    },
    {
      id: 30,
      course: "Design Para Quem Não é Designer: Princípios de Design",
      type: "Livro",
      author: "Outros",
      image: "https://i.pravatar.cc/300",
      length: null,
      url: "https://www.amazon.com.br/dp/857416836X/ref=cm_sw_r_tw_dp_4AHBKZPKDK9J290N0T28?_encoding=UTF8&psc=1",
      roadmap: "Opcional",
    },
    {
      id: 31,
      course: "Comunicação não violenta",
      type: "Livro",
      author: "Outros",
      image: "https://i.pravatar.cc/300",
      length: null,
      url: "https://www.amazon.com.br/dp/8571838267/ref=cm_sw_r_tw_dp_PRXG1BFCP2ZYTXVCVH2Z?_encoding=UTF8&psc=1",
      roadmap: "Opcional",
    },
    {
      id: 32,
      course: "Arrume sua cama",
      type: "Livro",
      author: "Outros",
      image: "https://i.pravatar.cc/300",
      length: null,
      url: "https://www.amazon.com.br/dp/8542215788/ref=cm_sw_r_tw_dp_CP0QF5VZAEJDP8T5PGGF?_encoding=UTF8&psc=1",
      roadmap: "Opcional",
    },
    {
      id: 33,
      course: "O design do dia a dia",
      type: "Livro",
      author: "Outros",
      image: "https://i.pravatar.cc/300",
      length: null,
      url: "https://www.amazon.com.br/dp/8532520839/ref=cm_sw_r_tw_dp_0A8Q2AJE82HQ6S4MVFC3?_encoding=UTF8&psc=1",
      roadmap: "Opcional",
    },
    {
      id: 34,
      course: "Mini Curso Javascript do Zero",
      type: "Curso",
      author: "Cubos Academy",
      image: "https://i.pravatar.cc/300",
      length: "03:30:00",
      url: "https://acesse.cubos.academy/minicurso-javascript?hsLang=pt",
      roadmap: "Opcional",
    },
    {
      id: 35,
      course: "O que um Dev júnior pode ensinar?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:50:29",
      url: "https://www.youtube.com/watch?v=qZ4ZKJSmf4k",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 36,
      course: "Qual a melhor linguagem de programação?",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:51:06",
      url: "https://www.youtube.com/watch?v=zTMvQD5EtJw",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 37,
      course: "Habilidades além do código",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:45:01",
      url: "https://www.youtube.com/watch?v=Mmukepu3yRs",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 38,
      course: "Dúvidas sobre carreira",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "00:57:54",
      url: "https://www.youtube.com/watch?v=bZQx1oHMbHg",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 39,
      course: "Lógica de programação e algoritmos",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:20:00",
      url: "https://www.udemy.com/course/logica-de-programacao-e-algoritmos-iniciante/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 40,
      course: "Curso de Lógica de Programação",
      type: "Vídeo",
      author: "Curso em Vídeo",
      image: "https://i.pravatar.cc/300",
      length: "07:58:07",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 41,
      course: "Instalar o Linux no Windows com o WSL",
      type: "Artigo",
      author: "Windows",
      image: "https://i.pravatar.cc/300",
      length: "00:20:00",
      url: "https://docs.microsoft.com/pt-br/windows/wsl/install",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 42,
      course: "Terminal Linux",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "00:55:00",
      url: "https://www.udemy.com/course/terminal-de-comandos-linux/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 43,
      course: "Shell Script: Introdução e Como Automatizar Tarefas",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://www.alura.com.br/artigos/automatizando-tarefas-com-shell-script",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 44,
      course: "Versionamento com Git",
      type: "Vídeo",
      author: "Orange Juice",
      image: "https://i.pravatar.cc/300",
      length: "01:03:15",
      url: "https://www.youtube.com/watch?v=9k_lIYuRtg8",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 45,
      course: "Git e Github para iniciantes",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:05:00",
      url: "https://www.udemy.com/course/git-e-github-para-iniciantes/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 46,
      course: "Introdução a Bancos de Dados e Linguagem SQL",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "01:59:00",
      url: "https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 47,
      course: "Básico HTML, CSS e Javascript",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "02:11:00",
      url: "https://www.udemy.com/course/criando-site-html-css-e-javascript/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 48,
      course: "Introdução à linguagem CSS",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "01:27:00",
      url: "https://www.udemy.com/course/introducao-a-linguagem-css/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 49,
      course: "Curso de SASS",
      type: "Curso",
      author: "Amanda Vilela",
      image: "https://i.pravatar.cc/300",
      length: "01:45:59",
      url: "https://www.youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 50,
      course: "Curso de HTML, CSS e Bootstrap",
      type: "Curso",
      author: "Michelli Brito",
      image: "https://i.pravatar.cc/300",
      length: "01:53:23",
      url: "https://www.youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 51,
      course: "Curso de LESS",
      type: "Curso",
      author: "Cursa",
      image: "https://i.pravatar.cc/300",
      length: "02:45:00",
      url: "https://www.cursa.com.br/home/course/curso-de-less/189",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 52,
      course: "Descomplicando SPA's",
      type: "Artigo",
      author: "Training Center",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://medium.com/trainingcenter/descomplicando-spas-caa8f57bdbf3",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 53,
      course: "Single-page application vs. multiple-page application",
      type: "Artigo",
      author: "Neoteric",
      image: "https://i.pravatar.cc/300",
      length: "00:06:00",
      url: "https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 54,
      course: "Curso Javascript + 14 Mini-Projetos",
      type: "Curso",
      author: "Udemy",
      image: "https://i.pravatar.cc/300",
      length: "04:35:31",
      url: "https://www.youtube.com/watch?v=i6Oi-YtXnAU",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 55,
      course: "Curso de Java",
      type: "Curso",
      author: "Curso em Vídeo",
      image: "https://i.pravatar.cc/300",
      length: "11:36:40",
      url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 56,
      course: "HTTP: Desmistificando o protocolo da Web",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:45:00",
      url: "https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 57,
      course: "O que é uma API?",
      type: "Artigo",
      author: "AWS",
      image: "https://i.pravatar.cc/300",
      length: "03:00:00",
      url: "https://aws.amazon.com/pt/what-is/api/",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 58,
      course: "Qual é a diferença entre HTTP e HTTPS?",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:15:00",
      url: "https://www.alura.com.br/artigos/qual-e-diferenca-entre-http-e-https",
      roadmap: "Desenvolvimento Full Stack",
    },
    {
      id: 59,
      course: "Métodos de requisição do HTTP",
      type: "Artigo",
      author: "Alura",
      image: "https://i.pravatar.cc/300",
      length: "00:10:00",
      url: "https://www.alura.com.br/artigos/metodos-de-requisicao-do-http",
      roadmap: "Desenvolvimento Full Stack",
    },
  ],
};

export const roadmapsMock = {
  quantity: 5,
  roadmaps: [
    {
      id: 1,
      title: "Desenvolvimento Full Stack",
      image: Fullstack,
      createdAt: "2022-11-02T15:00:30.000Z",
      updatedAt: "2022-11-02T16:00:30.000Z",
    },
    {
      id: 2,
      title: "UX/UI Design",
      image: Ux,
      createdAt: "2022-11-02T15:00:30.000Z",
      updatedAt: "2022-11-02T16:00:30.000Z",
    },
    {
      id: 3,
      title: "Quality Assurance",
      image: Qa,
      createdAt: "2022-11-02T15:00:30.000Z",
      updatedAt: "2022-11-02T16:00:30.000Z",
    },
    {
      id: 4,
      title: "O início",
      image: Start,
      createdAt: "2022-11-02T15:00:30.000Z",
      updatedAt: "2022-11-02T16:00:30.000Z",
    },
    {
      id: 5,
      title: "Opcional",
      image: Opcional,
      createdAt: "2022-11-02T15:00:30.000Z",
      updatedAt: "2022-11-02T16:00:30.000Z",
    },
  ],
};

export const quiz = {
  questions: {
    0: "1. Onde as variáveis de um software ficam armazenadas?",
    1: "2. Que são arrays?",
  },
  options: {
    0: {
      opt: [
        "no software",
        "na memória RAM do computador",
        "na placa-mãe",
        "no processador",
      ],
      correct: 1,
    },
    1: {
      opt: [
        "São estruturas de dados que possibilitam o armazenamento de valores de mesmo tipo em uma única variável",
        "São variáveis para armazenamento de números inteiros",
        "São uma forma de algoritmo",
        "Arrays não existem",
      ],
      correct: 0,
    },
  },
};
