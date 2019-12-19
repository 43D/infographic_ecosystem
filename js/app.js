$(document).ready(function() {

    var events = [{
        date: '1808',
        content: 'Criação do Jardim Botânico no Rio de Janeiro'
    }, {
        date: '1850',
        content: 'Lei 601 de Dom Pedro II proibindo a exploração florestal nas terras descobertas, a lei foi ignorada, continuando o desmatamento para implantação da monocultura de café.'
    }, {
        date: '1876',
        content: 'André Rebouçãs sugere a criação de parques nacionais na Ilha de Bananal e em Sete Quedas.'
    }, {
        date: '1891',
        content: 'Decreto 8.843 cria reserva florestal em Acre, que não foi implantada ainda.'
    }, {
        date: '1896',
        content: 'Foi criado o primeiro parque estadual em São Pablo. Parque da Cidade.'
    }, {
        date: '1920',
        content: 'O pau brasil é considerado extinto'
    }, {
        date: '1932',
        content: 'Realiza-se no Museu Nacional a primeira Conferência Brasileira de Proteção à Natureza'
    }, {
        date: '1934',
        content: 'Decreto 23793 transforma em Lei o Anteprojeto de Código Forestal'
    }, {
        date: '1937',
        content: 'Cria-se o Parque Nacional de Itatiaia'
    }, {
        date: '1939',
        content: 'Cria-se o Parque Nacional do Iguaçu'
    }, {
        date: '1961',
        content: 'Jânio Quadros, declara o pau brasil como árvore símbolo nacional, e o ipê como a flor símbolo nacional'
    }, {
        date: '1971',
        content: 'Cria-se em Rio Grande do Sul a associação Gaúcha de Proteção ao Ambiente Natural . AGAPAN'
    }, {
        date: '1972',
        content: 'A Delegação Brasileira na Conferência de Estocolmo declara que o pais está “aberto a poluição, porque o que se precisa é dólares, desenvolvimento e empregos” . Apesar disto, contraditoriamente o Brasil lidera os países do Terceiro Mundo para não aceitar a Teoria do Crescimento Zero proposta pelo Clube de Roma'
    }, {
        date: '1972',
        content: 'A Universidade Federal de Pernambuco inicia uma campanha de reintrodução do pau brasil considerado extinto em 1920.'
    }, {
        date: '1973',
        content: 'Cria-se a Secretaria Especial do Meio Ambiente, SEMA, no âmbito do Ministério do Interior, que entre outras atividades, começa a fazer Educação Ambiental'
    }, {
        date: '1976',
        content: 'A SEMA e a Fundação Educacional do Distrito Federal e a Universidade de Brasília realizam o primeiro curso de Extensão para professores do 1o Grau em Ecologia.'
    }, {
        date: '1977',
        content: 'Implantação do Projeto de Educação Ambiental em Ceilândia. (1977 – 81).'
    }, {
        date: '1977',
        content: 'SEMA constitui um grupo de trabalho para elaboração de um documento de Educação Ambiental para definir seu papel no contexto brasileiro.'
    }, {
        date: '1977',
        content: 'Seminários Encontros e debates preparatórios à Conferência de Tbilisi são realizados pela FEEMA-RJ'
    }, {
        date: '1977',
        content: 'A disciplina Ciências Ambientais passa a ser obrigatória nos cursos de Engenharia.'
    }, {
        date: '1978',
        content: 'A Secretaria de Educação de Rio Grande do Sul desenvolve o Projeto Natureza (1978 – 85)'
    }, {
        date: '1978',
        content: 'Criação de cursos voltados para as questões ambientais em varias universidades brasileiras.'
    }, {
        date: '1978',
        content: 'Nos cursos de Engenharia Sanitária inserem-se as disciplinas de Saneamento Básico e Saneamento Ambiental'
    }, {
        date: '1979',
        content: ' O MEC e a CETESB/ SP, publicam o documento “Ecologia uma Proposta para o Ensino de 1o e 2o Graus.'
    }, {
        date: '1981',
        content: 'Lei Nr. 6938 do 31 de Agosto, dispõe sobre a Política Nacional do Meio Ambiente (Presidente Figueiredo)'
    }, {
        date: '1984',
        content: 'Conselho Nacional do Meio Ambiente (CONAMA), apresenta umaresolução estabelecendo diretrizes para a Educação Ambiental, que não é tratada.'
    }, {
        date: '1986',
        content: 'A SEMA junto com a Universidade Nacional de Brasília, organiza o primeiro Curso de Especialização em Educação Ambiental . (1986 a 1988)'
    }, {
        date: '1986',
        content: ' I Seminário Nacional sobre Universidade e Meio Ambiente'
    }, {
        date: '1986',
        content: 'Seminário Internacional de Desenvolvimento Sustentado e Conservação de Regiões Estuarino – Lacunares (Manguezais) São Paulo'
    }, {
        date: '1987',
        content: 'O MEC aprova o Parecer 226/87 do conselheiro Arnaldo Niskier, em relação a necessidade de inclusão da Educação Ambiental nos currículos escolares de 1o e 2o Graus'
    }, {
        date: '1987',
        content: 'Paulo Nogueira Neto representa ao Brasil na Comissão Brundtland'
    }, {
        date: '1987',
        content: 'dII Seminário Universidade e Meio Ambiente, Belém, Pará.ado'
    }, {
        date: '1988',
        content: 'A Constituição Brasileira, de 1988, em Art. 225, no Capítulo VI – Do Meio Ambiente, Inciso VI, destaca a necessidade de ‘’promover a Educação Ambiental em todos os níveis de ensino e a conscientização pública para a preservação do meio ambiente’’. Para cumprimento dos preceitos constitucionais, leis federais, decretos, constituições estaduais, e leis municipais determinam a obrigatoriedade da Educação Ambiental.'
    }, {
        date: '1988',
        content: 'Fundação Getúlio Vargas traduz e publica o Relatório Brundtland, Nosso Futuro Comum.'
    }, {
        date: '1988',
        content: 'A Secretaria de Estado do Meio Ambiente de SP e a CETESB , publicam a edição piloto do livro “Educação Ambiental” Guia para professores de 1o e 2o Graus.'
    }, {
        date: '1989',
        content: 'Criação do IBAMA (Instituto Brasileiro do Meio Ambiente), pela fusão da SEMA, SUDEPE, SUDEHVEA e IBDF. Nele funciona a Divisão de Educação Ambiental.'
    }, {
        date: '1989',
        content: 'Programa de Educação Ambiental em Universidade Aberta da Fundação Demócrito Rocha, por meio de encartes nos jornais de Recife e Fortaleza.'
    }, {
        date: '1989',
        content: 'Primeiro Encontro Nacional sobre Educação Ambiental no Ensino Formal. IBAMA/ UFRPE. Recife'
    }, {
        date: '1989',
        content: 'Cria-se o Fundo Nacional de Meio Ambiente FNMA no Ministério do Meio Ambiente MMA.'
    }, {
        date: '1989',
        content: 'III Seminário Nacional sobre Universidade e Meio Ambiente. Cuiabá. MT'
    }, {
        date: '1990',
        content: 'I Curso Latino-Americano de Especialização em Educação Ambiental . PNUMA/IBAMA/CNPq/CAPES/UFMT. CUIABÁ- MT (1990 a 1994)'
    }, {
        date: '1990',
        content: 'IV Seminário Nacional sobre Universidade e Meio Ambiente, Florianópolis, SC.'
    }, {
        date: '1991',
        content: 'MEC resolve que todos os currículos nos diversos níveis de ensino deverão contemplar conteúdos de Educação Ambiental (Portaria 678 (14/05/91).'
    }, {
        date: '1991',
        content: 'Projeto de Informações sobre Educação Ambiental IBAMA/ MEC'
    }, {
        date: '1991',
        content: 'Grupo de Trabalho para Educação Ambiental coordenado pelo MEC, preparatório para a Conferência do Rio 92.'
    }, {
        date: '1991',
        content: 'Encontro Nacional de Políticas e Metodologias para Educação Ambiental . MEC/ IBAMA/Secretaria do Meio Ambiente da Presidência da República/ UNESCO/ Embaixada do Canadá.'
    }, {
        date: '1992',
        content: 'Criação dos Núcleos Estaduais de Educação Ambiental do IBAMA, NEA’s.'
    }, {
        date: '1992',
        content: 'Participação das ONG’s do Brasil no Fórum de ONG’s e na redação do Tratado de Educação Ambiental para Sociedades Sustentáveis. Destaca-se o papel da Educação Ambiental na construção da Cidadania Ambiental.'
    }, {
        date: '1992',
        content: 'O MEC promove no CIAC do Rio das Pedras em Jacarepagua Rio de Janeiro o Workshop sobre Educação Ambiental cujo resultado encontra-se na Carta Brasileira de Educação Ambiental, destacando a necessidade de capacitação de recursos humanos para EA'
    }, {
        date: '1993',
        content: 'Uma Proposta Interdisciplinar de Educação Ambiental para Amazônia. IBAMA, Universidades e SEDUC’s da região, publicação de um Documento Metodológico e um de caráter temático com 10 temas ambientais da região.(1992 a 1994)'
    }, {
        date: '1993',
        content: 'Criação dos Centros de Educação Ambiental do MEC, com a finalidade de criar e difundir metodologias em Educação Ambiental'
    }, {
        date: '1994',
        content: 'Aprovação do Programa Nacional de Educação Ambiental , PRONEA, com a participação do MMA/IBAMA/MEC/MCT/MINC'
    }, {
        date: '1994',
        content: 'Publicação da Agenda 21 feita por crianças e jovens em português. UNICEF.'
    }, {
        date: '1994',
        content: '3º Fórum de Educação Ambiental'
    }, {
        date: '1995',
        content: 'Todos os Projetos Ambientais e/ou de desenvolvimento sustentável devem incluir como componente atividades de Educação Ambiental.'
    }, {
        date: '1996',
        content: 'Criação da Câmara Técnica de Educação Ambiental do CONAMA'
    }, {
        date: '1996',
        content: 'Novos Parâmetros Curriculares do MEC, nos quais incluem a Educação Ambiental como tema transversal do currículo.'
    }, {
        date: '1996',
        content: 'Cursos de Capacitação em Educação Ambiental para os técnicos das SEDUC’s e DEMEC’s nos Estados, para orientar a implantação dos Parâmetros Curriculares. Convênio UNESCO – MEC'
    }, {
        date: '1996',
        content: 'Criação da Comissão Interministerial de EA. MMA'
    }, {
        date: '1997',
        content: 'Criação da Comissão de Educação Ambiental do MMA'
    }, {
        date: '1997',
        content: 'I Conferência Nacional de Educação Ambiental. Brasília. ICNEA'
    }, {
        date: '1997',
        content: ' Cursos de Educação Ambiental organizados pelo MEC – Coordenação de Educação Ambiental, para as escolas Técnicas e Segunda etapa de capacitação das SEDUC’s e DEMEC’s. Convênio UNESCO – MEC'
    }, {
        date: '1997',
        content: 'IV Fórum de Educação Ambiental e I Encontro da Rede de Educadores Ambientais. Vitoria'
    }, {
        date: '1997',
        content: 'I Teleconferência Naciona de Educação Ambiental .Brasília, MEC'
    }, {
        date: '1998',
        content: 'Publicação dos materiais surgidos da ICNEA'
    }, {
        date: '1999',
        content: 'Criação da Diretoria de Educação Ambiental do MMA Gabinete do Ministro'
    }, {
        date: '1999',
        content: 'Aprovação da LEI 9.597/99 que estabelece a Política Nacional de EA'
    }, {
        date: '1999',
        content: 'Programa Nacional de Educação Ambiental'
    }, {
        date: '1999',
        content: 'Criação dos Movimento dos Protetores da Vida Carta de Princípios Brasília DF'
    }, {
        date: '1999',
        content: 'A Coordenação de EA do MEC passa a formar parte da Secretária de Ensino Fundamental – COEA'
    }, {
        date: '2000',
        content: 'Seminário de Educação Ambiental organizado pela COEA/ MEC Brasília DF'
    }, {
        date: '2000',
        content: 'Curso Básico de Educação Ambiental a Distancia DEA/ MMA UFSC/ LED/ LEA'
    }, {
        date: '2002',
        content: 'Lançado o Sistema Brasileiro de Informação sobre Educação Ambiental e Práticas Sustentáveis (SIBEA)'
    }, {
        date: '2002',
        content: 'Decreto Nº 4.281, de 25 de junho de 2002. Regulamenta a Lei que institui a Política Nacional de Educação Ambiental e dá outras providências'
    }, {
        date: '2004',
        content: 'Em setembro é realizada a Consulta Pública do ProNEA, o Programa Nacional de Educação Ambiental, que reuniu contribuições de mais de 800 educadores ambientais do país.'
    }, {
        date: '2004',
        content: 'Em novembro foi realizado o V Fórum Brasileiro de Educação Ambiental, após sete anos de intervalo ocorrido entre o IV Fórum, com o lançamento da Revista Brasileira de Educação Ambiental e com a criação da Rede Brasileira de Educomunicação Ambiental – REBECA.'
    }, {
        date: '2004',
        content: 'Ainda em novembro, após dois anos de existência enquanto Grupo de Estudos, é oficializado o Grupo de Trabalho em Educação Ambiental da ANPEd, Associação Nacional de Pós-Graduação e Pesquisa em Educação.'
    }, {
        date: '2004',
        content: 'Em dezembro é criado o Grupo de Trabalho de Educação Ambiental no FBOMS, o Fórum Brasileiro de ONGs e Movimentos Sociais.'
    }];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
    });
});