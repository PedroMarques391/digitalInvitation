import { Event } from '../events'


const events: Event[] = [
    {
        id: 'ud3z0bh3vd-h5mj9pb8rip-syjise3k8h',
        alias: 'evento-fullstack',
        password: 'password123',
        name: 'Evento de Desenvolvimento Fullstack',
        date: new Date('2024-12-01T10:00:00Z'),
        place: 'São Paulo, SP',
        description:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        image: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        backgroundImage:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicExpected: 200,
        guests: [
            {
                id: 'w3xv2g6rj9-tlhkq7fn0h9-p9okv8e0r9m',
                name: 'Alice Silva',
                email: 'alice@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 1,
            },
            {
                id: 'jd9nk0a8xd-k2fjw3khdg-9jrwe7i0m4g',
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                isConfirmed: false,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
            {
                id: 'hf8js3i6bl-n3mhk2r4e0-n4omg9l7c9h',
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 2,
            },
        ],
    },
    {
        id: 'zv4jh1f0g5-hdyak9t9mn-8cmzq0n2r4d',
        alias: 'evento-js-avancado',
        password: 'js2024',
        name: 'Workshop Avançado de JavaScript',
        date: new Date('2024-11-20T15:00:00Z'),
        place: 'Rio de Janeiro, RJ',
        description: 'Um workshop avançado para programadores JavaScript.',
        image: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        backgroundImage:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicExpected: 100,
        guests: [
            {
                id: 'd8lkq9j7r5-jf5pa0g7jl-2d9qm7f8k4y',
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                isConfirmed: true,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
            {
                id: 'h2z2p4g1e9-xlg0h9jc7w-1p4jz5o6r9k',
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 1,
            },
        ],
    },
    {
        id: 'qz9jpd7twv-n6ehs2m6rk-0xj9m5g9w2b',
        alias: 'evento-dev-frontend',
        password: 'front123',
        name: 'Bootcamp de Desenvolvimento Frontend',
        date: new Date('2024-11-15T09:00:00Z'),
        place: 'Belo Horizonte, MG',
        description: 'Aprenda a criar interfaces incríveis e responsivas.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        backgroundImage:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicExpected: 150,
        guests: [
            {
                id: 's8vq4b5hp2-nk0lr7p8mh-9tp7z0u8h7v',
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 1,
            },
            {
                id: 'r6jd1l7qv9-0dbmj9k2j8-6k5hm0l9g3p',
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                isConfirmed: false,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
            {
                id: 'b2wkr3a6j7-vtkd2o5b0q-9wbd8p6g4o3d',
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                isConfirmed: true,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
        ],
    },
    {
        id: 'p1wb7b0g8h-k6m9w7h0bg-7jsy4v6q2j3',
        alias: 'casamento-alberto-marina',
        password: 'casamento2024',
        name: 'Casamento do Alberto e Marina',
        date: new Date('2024-11-25T16:00:00Z'),
        place: 'Florianópolis, SC',
        description:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        image: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        backgroundImage:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicExpected: 150,
        guests: [
            {
                id: 'm3w2w1r2g5-bb1dj2m5s2-w8p1y9e8p6g',
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 1,
            },
            {
                id: 'a4g9r5j8a6-j2bm0d4s7d-2d9a1f9k4s9',
                name: 'Carla Mendes',
                email: 'carla@example.com',
                isConfirmed: true,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
        ],
    },
    {
        id: 'nv5p4g8u1h-9sbf1x0f7b-3h2rw8j3o9h',
        alias: 'aniversario-joao',
        password: 'joao2024',
        name: 'Aniversário do João - 30 Anos',
        date: new Date('2024-12-05T18:00:00Z'),
        place: 'Curitiba, PR',
        description:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        image: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        backgroundImage:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicExpected: 80,
        guests: [
            {
                id: 'n0m8p9f2k7-b6o5y1s2a8-e3p7a6h0b6h',
                name: 'Maria Souza',
                email: 'maria@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 2,
            },
            {
                id: 'r9l6o1y7f9-b8a3j6s4e7-d8o7w0j1g7s',
                name: 'José Almeida',
                email: 'jose@example.com',
                isConfirmed: false,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
        ],
    },
    {
        id: 'y1p0a8t2g9-s6k7l8v7n2-a7k9w5r9e4d',
        alias: 'inauguracao-loja-estrela',
        password: 'estrela2024',
        name: 'Inauguração da Loja Estrela',
        date: new Date('2024-12-10T09:00:00Z'),
        place: 'Porto Alegre, RS',
        description:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        image: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        backgroundImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicExpected: 300,
        guests: [
            {
                id: 'd0l8h1m7p9-g5f9r3u8d-7z9x5c6r2s4',
                name: 'Cláudia Lima',
                email: 'claudia@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 3,
            },
            {
                id: 'f5m2k9r4g5-j5b1r3p9s-9h2l0f9e7k6',
                name: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                isConfirmed: true,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
        ],
    },
    {
        id: 'b1d8p5o1a2-r9w8n7f6o2-6t4v9y5b8l7',
        alias: 'reuniao-familia-oliveira',
        password: 'familia2024',
        name: 'Reunião da Família Oliveira',
        date: new Date('2024-12-15T12:00:00Z'),
        place: 'Salvador, BA',
        description: 'Reunião de fim de ano da família Oliveira.',
        image: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        backgroundImage:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicExpected: 50,
        guests: [
            {
                id: 'r0y7h9i9g8-p5s0t7m2j0b-7l3e6t4h8k6',
                name: 'Thiago Oliveira',
                email: 'thiago@example.com',
                isConfirmed: true,
                hasCompanions: true,
                numberOfCompanions: 4,
            },
            {
                id: 'r5d2l8e9v0-w8k7q9t9f2-p3m8b6p7n4d',
                name: 'Letícia Oliveira',
                email: 'leticia@example.com',
                isConfirmed: true,
                hasCompanions: false,
                numberOfCompanions: 0,
            },
        ],
    },
]

export default events
