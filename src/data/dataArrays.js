export const categories = [
  {
    id: 0,
    name: 'Comida Indigena',
    photo_url: 'https://canaltres.com.br/wp-content/uploads/2022/06/comida-indigena-1024x819.jpeg'
  },
  {
    id: 1,
    name: 'Comida Brasileira',
    photo_url: 'https://live.mrf.io/statics/i/ps/cdn.falauniversidades.com.br/wp-content/uploads/2019/10/comida-brasileira.jpg?width=1200&enable=upscale'
  },
  {
    id: 2,
    name: 'Comida Mexicana',
    photo_url: 'https://www.dicasdemulher.com.br/wp-content/uploads/2021/08/comida-mexicana-00.png'
  },
  {
    id: 3,
    name: 'Comida Italiana',
    photo_url:
      'https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/culinaria-italiana-1170x762.jpg.webp'
  },
  {
    id: 4,
    name: 'Doces',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 5,
    name: 'Smoothies',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
];

export const recipes = [
  {
    recipeId: 12,
    categoryId: 0,
    title: 'Farofa de banana da terra',
    photo_url: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57813_shutterstock-739904824.jpg',
    photosArray: [
      'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57813_shutterstock-739904824.jpg',
      'https://s2.glbimg.com/mbZEezXCCvdoHXaX2jFxbpBC0AU=/0x0:588x447/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/53/16/218/DSC02849.jpg',
      'https://cooknenjoy.com/wp-content/uploads/2020/12/farofa-de-banana-02.jpg'
    ],
    time: 20,
    ingredients: [
      [42, '2 colheres de sopa'],
      [0, 'a gosto'],
      [1, 'a gosto'],
      [36, '1'],
      [90, '500 g'],
      [59, '3']
    ],
    description:
      'Descasque e corte as bananas da terra em cruz, não muito fina.\n\nFrite-as até dourar e reserve. Na mesma panela, retire o excesso de óleo, coloque a manteiga, doure a cebola picadinha, junte a banana frita, mexendo e adicionando a farinha de mandioca aos poucos.\n\nProve o sal e continue mexendo, mais ou menos, por uns três minutos até que a farofa fique homogênea.'
  },
  {
    recipeId: 13,
    categoryId: 0,
    title: 'Banana assada',
    photo_url: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57813_shutterstock-540033550.jpg',
    photosArray: [
      'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57813_shutterstock-540033550.jpg',
      'https://ruralea.com/wp-content/uploads/2022/06/8d9a2eb6e0498a10f7f4873547f85efd_banana-frita-receitas-nestle-min-1-min-e1655653339443.jpg',
      'https://dicasturismo.com.br/wp-content/uploads/2022/05/banana-assada-com-canela-1.jpeg'
    ],
    time: 20,
    ingredients: [
      [59, '1'],
      [67, '1 colher de sopa'],
      [92, '1 colher de chá'],
      [93, '100 ml'],
      [94, 'a gosto']
    ],
    description:
      'Corte a banana ao meio. Misture o açúcar e a canela com o licor e passe nas duas partes da banana.\n\nLeve ao forno com a temperatura média de 150º até caramelizar.\n\nSirva com sorvete.'
  },
  {
    recipeId: 14,
    categoryId: 0,
    title: 'Moqueca de peixe',
    photo_url: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9ae6e28383dc732ba697d21aaa71edbf.jpg',
    photosArray: [
      'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9ae6e28383dc732ba697d21aaa71edbf.jpg',
      'https://www.leiliane.com.br/wp-content/uploads/2017/08/moqueca_baiana_1.jpg',
      'https://img.taste.com.au/bGVvI3El/taste/2016/11/moqueca-de-peixe-57539-1.jpeg'
    ],
    time: 60,
    ingredients: [
      [33, '4 postas'],
      [30, 'suco de 1'],
      [36, '1'],
      [37, '1'],
      [38, '1'],
      [53, '2'],
      [56, '2 colheres de sopa'],
      [88, '200 ml'],
      [89, '1 colher de sopa'],
      [91, '400 ml']
    ],
    description:
      'Lave o peixe, regue-o com o suco de limão e deixe tomar gosto por cerca de 1 hora.\n\nNuma panela grande arrume o peixe, a cebola, os pimentões e os tomates. Polvilhe o coentro.\n\nEsfarele os tabletes de caldo de camarão, misture-os ao leite de coco e regue o peixe. Leve ao fogo baixo, com a panela parcialmente tampada, por 20 minutos. De vez em quando mexa com cuidado.\n\nJunte o azeite-de-dendê, prove os temperos e adicione sal, se preciso.\n\nRetire do fogo e sirva.'
  },
  
  {
    recipeId: 4,
    categoryId: 2,
    title: 'Tacos',
    photo_url: 'https://img.freepik.com/fotos-gratis/angulo-alto-do-conceito-de-comida-mexicana_23-2148629376.jpg?size=626&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-gratis/angulo-alto-do-conceito-de-comida-mexicana_23-2148629376.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-premium/conceito-de-comida-saborosa-com-taco-em-fundo-bege_185193-68794.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-gratis/tacos-mexicanos-com-carne-em-molho-de-tomate-e-salsa_2829-14227.jpg?w=1380&t=st=1669218678~exp=1669219278~hmac=ff2b18c26b156639745b4dc486f2013d519e042e55d7aa7b23857b9eab26e1fa'
    ],
    time: '35',
    ingredients: [
      [27, '10'],
      [25, '400 g'],
      [0, '1 colher de chá'],
      [36, '2'],
      [4, 'a gosto'],
      [23, '4 colheres de sopa'],
      [74, '2 colheres de sopa'],
      [26, '2 xícaras'],
      [46, '150 g'],
      [1, 'a gosto']
    ],
    description:
      'Grelhe as tortilhas em um frigideira quente, sem que fique quebradiça.\n\nDoure a cebola, depois a carne moída, em seguida coloque o extrato de tomate, a mostarda, pimenta, sal e diexe apurar por uns 10 minutos.\n\nBata no liquidificador com um pouco do próprio caldo o feijão.\n\nEm seguida, quando o molho estiver quase seco, despeje o feijão e após o queijo mussarela.\n\nDeixe cozer até ficar com consistência de pasta, bem grossa.\n\nO Chilli deve ficar bem picante. Sirva quente.'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Strogonoff de frango',
    photo_url:
      'https://img.freepik.com/fotos-premium/estrogonofe-de-frango-acompanhado-de-arroz-salada-e-palha-de-batata_261158-1189.jpg?size=626&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-premium/estrogonofe-de-frango-acompanhado-de-arroz-salada-e-palha-de-batata_261158-1189.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-premium/strogonoff-de-frango-e-um-prato-originario-da-culinaria-russa-que-no-brasil-e-composto-de-creme-de-leite-com-extrato-de-tomate-arroz-e-batata-frita_59529-775.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-premium/estrogonofe-de-carne-saborosa-em-superficie-cinza_392895-14426.jpg?size=626&ext=jpg'
    ],
    time: 35,
    ingredients: [
      [21, '3'],
      [51, '1 dente'],
      [1, 'a gosto'],
      [4, 'a gosto'],
      [36, '1'],
      [75, '2 colheres de sopa'],
      [42, '1 colher de sopa'],
      [40, '1/2 xícara'],
      [73, '1/3 xícara'],
      [74, '1 xícara'],
      [43, '1 caixa'],
      [76, 'a gosto']
    ],
    description:
      'Em uma panela, misture o frango cortado em cubos, o alho, a maionese, o sal e a pimenta.\n\nEm uma frigideira grande, derreta a manteiga e doure a cebola.\n\nJunte o frango temperado até que esteja dourado.\n\nAdicione os cogumelos, o ketchup e a mostarda.\n\nIncorpore o creme de leite e retire do fogo antes de ferver.\n\nSirva com arroz branco e batata palha.'
  },
  {
    recipeId: 6,
    categoryId: 3,
    title: 'Massa de pizza',
    photo_url:
      'https://img.freepik.com/fotos-gratis/pedacos-de-massa-de-pizza_23-2148570342.jpg?w=1480&t=st=1669218261~exp=1669218861~hmac=ac36ab97a40fae1ef3883d190d1634766437021d4ce9d582c7b41ba7c184a48a',
    photosArray: [
      'https://img.freepik.com/fotos-gratis/pedacos-de-massa-de-pizza_23-2148570342.jpg?w=1480&t=st=1669218261~exp=1669218861~hmac=ac36ab97a40fae1ef3883d190d1634766437021d4ce9d582c7b41ba7c184a48a',
      'https://t4.ftcdn.net/jpg/03/34/14/99/240_F_334149986_HrtCrFlTQrOYH9QGYNjLG0VFqiqIrrBz.jpg',
      'https://img.freepik.com/fotos-gratis/massa-de-pizza-ao-lado-de-queijo-polvilha-tomate-de-milho-verde-oliva-e-pimentao-em-fundo-preto-de-madeira_141793-1941.jpg?w=1380&t=st=1669218362~exp=1669218962~hmac=ab7515914d39882862923428908e9a4a81cf6d0fc3c968b6ce9cae2dcd81fddd'
    ],
    time: 50,
    ingredients: [
      [12, '1 kg'],
      [77, '30 g'],
      [18, '3 xícaras'],
      [42, '3/4 de xícara'],
      [1, '1 colher de chá'],
      [44, '1 colher de chá'],
      [78, '1 colher de sopa']
    ],
    description:
      'Misture o fermento, o sal e o açúcar em um pouco de água morna, até que o fermento esteja completamente dissolvido.\n\nEm seguida, adicione metade da medida de farinha de trigo, o óleo e mexa até criar uma consistência pastosa.\n\nAcrescente o restante da farinha de trigo, a pinga, a água morna e misture bem.\n\nAssim que a massa desgrudar das mãos, deixe crescer por 30 minutos.\n\nAbra os discos, fure a massa com um garfo e pincele o molho.\n\nLeve ao forno médio (180° C), preaquecido, por 15 minutos.'
  },
  {
    recipeId: 0,
    categoryId: 3,
    title: 'Lasanha',
    photo_url: 'https://img.freepik.com/fotos-premium/lasanha-italiana-com-molho-a-bolonhesa-e-carne-moida-de-vaca_89816-21582.jpg?size=626&ext=jpg',
    photosArray: [
      "https://img.freepik.com/fotos-premium/lasanha-italiana-com-molho-a-bolonhesa-e-carne-moida-de-vaca_89816-21582.jpg?size=626&ext=jpg",
      'https://img.freepik.com/fotos-gratis/lasanha-classica-com-molho-a-bolonhesa_2829-11251.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-gratis/lasagna-saborosa-em-um-recipiente-vermelho_1205-31.jpg?size=626&ext=jpg'
    ],
    time: '55',
    ingredients: [
      [52, '10 folhas'], 
      [48, '60 g'], 
      [81, '900ml'],
      [12, '50 g'], 
      [80, 'a gosto'], 
      [79, '400 g'],
      [42, '50 g'], 
      [1, 'a gosto']
    ],
    description:
      'Prepare o molho bechamel: derreta a manteiga, adicione a farinha, misture bem e adicione o leite a ferver com uma pitada de sal e a noz moscada. Deixe ferver e reserve.\n\nUnte um tabuleiro pirex com manteiga e monte a lasanha: coloque um pouco de bechamel no fundo do tabuleiro e vá alternando com camadas de massa seca, bechamel, molho Bolonhesa e Parmesão ralado. A última camada deverá levar Bolonhesa, bechamel e Parmesão ralado.\n\nLeve ao forno a 180 °C durante 20 minutos. Deixe repousar fora do forno durante 10 minutos e sirva.'
  },
  {
    recipeId: 7,
    categoryId: 3,
    title: 'Carbonara',
    photo_url: 'https://img.freepik.com/fotos-premium/massa-carbonara-com-creme-de-queijo-de-bacon-e-pimenta-closeup-sobre-fundo-cinza-comida-italiana-tradicional_166116-5385.jpg?w=1380',
    photosArray: [
      'https://img.freepik.com/fotos-premium/massa-carbonara-com-creme-de-queijo-de-bacon-e-pimenta-closeup-sobre-fundo-cinza-comida-italiana-tradicional_166116-5385.jpg?w=1380',
      'https://img.freepik.com/fotos-premium/macarrao-linguini-com-molho-carbonara-classico-em-fundo-cinza-comida-italiana-tradicional-espaco-de-vista-lateral-para-copiar_166116-5367.jpg?w=1480',
      'https://img.freepik.com/fotos-gratis/spaghetti-carbonara_1203-8910.jpg?w=1380&t=st=1669217928~exp=1669218528~hmac=7f960be0885f42d3bf71d6ff6d801d96598d052a69717fc53717cac981229d11'
    ],
    time: 15,
    ingredients: [
      [82, '150g'],
      [48, '50g'],
      [16, '3'],
      [4, 'a gosto'],
      [1, 'a gosto'],
      [83, '300g']
    ],
    description:
      'Frite bem o bacon, até ficar crocante.\n\nColoque o macarrão para cozinhar em água e sal.\n\nNo refratário onde será servido o macarrão, bata bem as gemas dos ovos com um garfo.\n\nTempere com sal e pimenta a gosto, e junte o queijo ralado, também a gosto.\n\nQuando o macarrão estiver pronto, escorra e coloque (bem quente) sobre a mistura de ovos com uma concha da água do cozimento do macarrão, misture bem.\n\nColoque o bacon, ainda quente, sobre o macarrão e sirva.'
  },
  {
    recipeId: 8,
    categoryId: 0,
    title: 'Açai',
    photo_url: 'https://img.freepik.com/fotos-premium/iogurte-congelado-brasileiro-em-uma-tigela-acompanhado-de-frutas-tropicais_261158-1762.jpg?size=338&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-premium/iogurte-congelado-brasileiro-em-uma-tigela-acompanhado-de-frutas-tropicais_261158-1762.jpg?size=338&ext=jpg',
      'https://img.freepik.com/fotos-premium/acai-tigela-de-sorvete-de-acai-congelado-brasileiro-vista-frontal-isolado_317399-524.jpg?size=338&ext=jpg',
      'https://img.freepik.com/fotos-premium/acai-congelado-brasileiro-com-morango-e-banana-em-uma-tigela-branca-isolada-no-fundo-branco_317399-729.jpg?w=826'
    ],
    time: 60,
    ingredients: [
      [59, '4'],
      [84, '1 kg'],
      [85, '250 ml']
    ],
    description:
      'Bata a banana no liquidificador.\n\nJunte a polpa de açaí e o xarope de guaraná e bata até ficar homogêneo.\n\nSirva com frutas, granola, puro ou como desejar.'
  },
  {
    recipeId: 122,
    categoryId: 4,
    title: 'Brigadeiro',
    photo_url: 'https://img.freepik.com/fotos-premium/brigadeiro-de-chocolate-na-colher-de-pau-brigadeiro-tradicional-doce-brasileiro_434193-4884.jpg?size=626&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-premium/brigadeiro-de-chocolate-na-colher-de-pau-brigadeiro-tradicional-doce-brasileiro_434193-4884.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-premium/doce-tipico-brasileiro-chamado-brigadeiro_261158-510.jpg?size=626&ext=jpg',
      'https://t3.ftcdn.net/jpg/04/50/20/24/240_F_450202421_MqlgOIksVgNlSW9I05UHI1WsfazfC0U0.jpg'
    ],
    time: '25',
    ingredients: [
      [42, '1 colher de sopa'], 
      [64, '1 caixa'],
      [62, '7 colheres de sopa'], 
      [63, 'A gosto']],
    description:
    'Em uma panela funda, acrescente o leite condensado, a margarina e o achocolatado (ou 4 colheres de sopa de chocolate em pó).\n\nCozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.\n\nDeixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.'
  },
  {
    recipeId: 3,
    categoryId: 5,
    title: 'Smoothie de morango e banana',
    photo_url:
      'https://img.freepik.com/fotos-gratis/batido-de-morango-e-banana-fresco-em-pote-na-mesa-de-madeira_123827-20782.jpg?w=1380&t=st=1669219307~exp=1669219907~hmac=77069da7617074eed038a559e86c60fd676f642f2f081376e2613c1f65bfb9a9',
    photosArray: [
      'https://img.freepik.com/fotos-gratis/batido-de-morango-e-banana-fresco-em-pote-na-mesa-de-madeira_123827-20782.jpg?w=1380&t=st=1669219307~exp=1669219907~hmac=77069da7617074eed038a559e86c60fd676f642f2f081376e2613c1f65bfb9a9',
      'https://img.freepik.com/fotos-gratis/cocktail-rosa-gelado-e-morangos-frescos_144627-1119.jpg?w=1060&t=st=1669219347~exp=1669219947~hmac=44c4a7b3a08647c5614c89f9d1df4f3a23f2cf02eecd5337ee8fc470a1083d56',
      'hhttps://img.freepik.com/fotos-gratis/batido-de-morango-e-banana-fresco-em-pote-na-mesa-de-madeira_123827-20832.jpg?w=1380&t=st=1669219383~exp=1669219983~hmac=426201f21d8ec38e8ff2f5d1eed9a836d184bd4b15a15dd24b6897d45381e38a'
    ],
    time: '10',
    ingredients: [
      [59, '1'], 
      [60, '2 xícaras'],
      [61, '1/3 de xícara'], 
      [65, 'A gosto']],
    description:
    'Corte a banana e os morangos em pedaços menores.\n\nEm um liquidificador, coloque a banana, o morango, o iogurte, o gelo e bata bem.\n\nCaso precise, adicione um pouco de água para ajudar a bater.\n\nTransfira o smoothie para uma jarra e sirva. Bom apetite.'
  },
  {
    recipeId: 2,
    categoryId: 4,
    title: 'Bolo de chocolate',
    photo_url: 'https://img.freepik.com/fotos-premium/fatia-deliciosa-de-bolo-de-chocolate_434193-3776.jpg?size=626&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-premium/fatia-deliciosa-de-bolo-de-chocolate_434193-3776.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-gratis/vista-superior-da-fatia-de-bolo-de-chocolate-com-colher-e-hortela_23-2148689772.jpg?w=1380&t=st=1669219130~exp=1669219730~hmac=387c7f03d5cf907690c84cc6aee310c9522a43ebe303f9943dae7fc4896d0bd4',
      'https://img.freepik.com/fotos-gratis/bolo-de-chocolate-vista-superior-pronto-para-ser-servido_23-2148622265.jpg?w=1380&t=st=1669219005~exp=1669219605~hmac=ee5800730ca498f2a99e5b29326df15807d4be7bb1eb97eea1c9852255e901fc'
    ],
    time: '45',
    ingredients: [
      [12, '2 xicarás'],
      [67, '1 e 1/2 xicará'],
      [62, '1 xicará'],
      [66, '1/2 colher de chá'],
      [0, '1 xicará'],
      [16, '3'],
      [18, '2 xicarás']
    ],
    description:
      'Em um recipiente, misture a farinha de trigo, o açúcar, o achocolatado, o fermento e o bicarbonato peneirados.\n\nJunte o óleo, os ovos e a água fervente, misturando bem.\n\nDespeje a massa em uma forma de furo central (24 cm de diâmetro) untada com óleo e polvilhada com farinha de trigo, e leve ao forno médio (180°C), preaquecido, por 40 minutos.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Cookies',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://img.freepik.com/fotos-gratis/disposicao-da-vista-superior-dos-cookies_23-2148654538.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-gratis/grande-plano-seletivo-closeup-tiro-de-uma-pilha-de-biscoitos-de-chocolate-assados_181624-3607.jpg?size=626&ext=jpg'
    ],
    time: '45',
    ingredients: [
      [42, '125 g'],
      [67, '3/4 de xicará'],
      [13, '1/2 de xicará'],
      [16, '1'],
      [12, '1 e 3/4 de xícara'],
      [68, '1 colher de chá'],
      [70, '300 g'],
      [69, '1 colher de chá']
    ],
    description:
      'Misture a manteiga, açúcar mascavo, açúcar, essência de baunilha (e chocolate em pó, se for fazer cookies com base de chocolate).\n\nAdicione o ovo batido aos poucos e misture bem.\n\nAcrescente a farinha aos poucos e misture bem (pode ser na mão ou na batedeira planetária)\n\nPor último, adicione o fermento e misture só para incorporá-lo à massa.\n\nDepois da massa bem misturada, adicione o chocolate picado.\n\nForme bolinhas pequenas e asse em forno preaquecido, sobre papel manteiga, por aproximadamente 15 a 20 minutos (250° C).'
  },
  {
    recipeId: 1,
    categoryId: 4,
    title: 'Brownies',
    photo_url: 'https://img.freepik.com/fotos-premium/brownies-caseiros-no-prato-branco-com-cobertura-de-fudge-de-chocolate-sobre-fundo-de-madeira_6351-46.jpg?size=626&ext=jpg',
    photosArray: [
      'https://img.freepik.com/fotos-premium/brownies-caseiros-no-prato-branco-com-cobertura-de-fudge-de-chocolate-sobre-fundo-de-madeira_6351-46.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-gratis/foto-aerea-de-brownies-recem-assados-em-uma-placa-de-madeira_181624-23397.jpg?size=626&ext=jpg',
      'https://img.freepik.com/fotos-premium/pedacos-de-bolo-brownie-servido-em-uma-mesa-branca-bolo-de-chocolate_130040-1332.jpg?size=626&ext=jpg'
    ],
    time: '40',
    ingredients: [
      [42, '6 colheres de sopa'],
      [62, '3/4 de xícara'],
      [71, '1/4 de xícara'],
      [12, '1 e 1/4 de xícara'],
      [67, '2 xícaras'],
      [16, '4'],
      [1, '2 pitadas'],
      [69, '1 colher de chá'],
      [70, '100 g'],
      [72, '1/2 xícara']
    ],
    description:
      'Misture os ovos e o açúcar.\n\nEm seguida, agregue todos os outros ingredientes até formar um creme uniforme.\n\nDespeje em uma assadeira, forrada com papel-manteiga e leve ao forno médio por 40 minutos.\n\nO brownie estará pronto quando a parte de cima estiver levemente corada e, ao se espetar um palito, ele esteja levemente úmido (devido ao chocolate derretido).\n\nCorte em quadrados ainda quente e sirva com uma bola de sorvete de creme, ou congele num saquinho para freezer.\n\nPara descongelar, coloque o brownie num prato de sobremesa e aqueça no micro-ondas, potência alta, por 1 minuto.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Óleo',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Sal',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Batata',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprica',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Pimenta do reino',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Sálvia seca',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Alho em pó',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Pimenta da Jamaica ',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Oregano seco',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Manjericão seco',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Manjerona seca',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Farinha',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Açucar mascavo',
    photo_url:
      'https://www.recetas.com/files/ingredient/thumb/a/azucar-moreno_5m8oh'
  },
  {
    ingredientId: 14,
    name: 'Sal grosso',
    photo_url:
      'https://img.freepik.com/fotos-premium/close-up-de-sal-grosso-em-uma-colher-de-pau-isolado-sobre-fundo-branco_92534-1503.jpg?w=1380'
  },
  {
    ingredientId: 15,
    name: 'Frango',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Ovo',
    photo_url:
      'https://img.freepik.com/fotos-gratis/ovos-isolados-na-superficie-branca_463209-42.jpg?w=1380&t=st=1669403519~exp=1669404119~hmac=a94e5ed5320b096a46897a6f7b33dfc44fb96418743773499b33269db055c3d5'
  },
  {
    ingredientId: 17,
    name: 'Óleo neutro',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Água',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Cebola em pó',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Peito de frango',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Cebolinha',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Extrato de tomate',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Pimenta em pó',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Carne moída',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Feijão',
    photo_url:
      'https://img.freepik.com/fotos-gratis/misturar-feijoes_1339-256.jpg?w=1380&t=st=1669417503~exp=1669418103~hmac=cf778e57b4c4ab96cc53e154462982ca729ede198e1dca21ffc03a10a36a4e4a'
  },
  {
    ingredientId: 27,
    name: 'Tortilhas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Peixe frito',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Cheddar ralado',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Limão',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Cominho',
    photo_url:
      'https://img.freepik.com/fotos-gratis/pimenta-em-po_1339-190.jpg?w=1380&t=st=1668917245~exp=1668917845~hmac=ee8f1d3c1eea255bdbe3f1d4ca127fa419b5de44a1b92a60c3a93792b6243092'
  },
  {
    ingredientId: 32,
    name: 'Pimenta-caiena',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Peixe',
    photo_url:
      'https://img.freepik.com/fotos-gratis/tilapia-crua_1339-897.jpg?w=1380&t=st=1668917165~exp=1668917765~hmac=d00b1525ea526487e42a01189c0b0242c822eaae4a3a2ac746349e17fd615bab'
  },
  {
    ingredientId: 34,
    name: 'Abacate',
    photo_url:
      'https://img.freepik.com/fotos-gratis/abacate-em-um-fundo-de-madeira-escura_1205-769.jpg?1&w=1380&t=st=1668916955~exp=1668917555~hmac=33663adc339d7be8c6e6def17ae55600a6ef005ae74da846259abd549f5b03fb'
  },
  {
    ingredientId: 35,
    name: 'Pimenta calabresa',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Cebola',
    photo_url: 'https://img.freepik.com/fotos-gratis/cebola-crua-em-uma-superficie-branca_144627-45173.jpg?w=1380&t=st=1668916529~exp=1668917129~hmac=8b7f3c9d610a63deea495146c0cd7c6b866587c0ca7a92a849fb3383a199392f'
  },
  {
    ingredientId: 37,
    name: 'Pimentão verde',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Pimentão vermelho',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Massa de pizza',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Molho picante',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Manteiga',
    photo_url: 
    'https://img.freepik.com/fotos-premium/manteiga-na-chapa-branca-isolada-no-fundo-branco_93675-88185.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 43,
    name: 'Creme de leite',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Iogurte natural ',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Queijo',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mussarela',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Talos de aipo',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesão',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Barriga de porco',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Alho',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Massa de lasanha ',
    photo_url:
      'https://img.freepik.com/fotos-premium/folhas-de-lasanha-na-pilha-massa-de-lasanha-crua-isolada-no-fundo-branco-tracado-de-recorte_503274-2224.jpg?w=2000'
  },
  {
    ingredientId: 53,
    name: 'Tomate',
    photo_url:
      'https://img.freepik.com/fotos-premium/tomate-isolado-um-monte-de-vegetais-isolados-em-um-fundo-branco-com-um-tracado-de-recorte-dois-tomates-vermelhos-inteiros-meio-e-um-quarto_92795-1638.jpg?w=2000'
  },
  {
    ingredientId: 54,
    name: 'Tomate amassado',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Açúcar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Salsa',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Ricota',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Funcho',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://img.freepik.com/vetores-gratis/banana-amarela-madura-inteira-e-picada-de-vetor-isolada-no-fundo-branco_1284-45451.jpg?w=1060&t=st=1669403466~exp=1669404066~hmac=87fb0d71ecd627f935d381b8fa04640a51b906c9429569e410063d65da271bfd'
  },
  {
    ingredientId: 60,
    name: ' Morangos congelados',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Iogurt grego',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Achocolatado',
    photo_url:
      'https://t3.ftcdn.net/jpg/03/06/94/30/240_F_306943009_RdBsSKp8FJXjk9pkLYC4sH4BmZPM2rxJ.jpg'
  },
  {
    ingredientId: 63,
    name: 'Chocolate granulado',
    photo_url:
      'https://www.magiadoce.pt/wp-content/uploads/2018/06/granulado.jpg'
  },
  {
    ingredientId: 64,
    name: 'Leite condensado',
    photo_url:
      'https://img.freepik.com/fotos-premium/tigela-de-creme-de-leite-condensado-isolado-no-fundo-branco_88281-845.jpg'
  },
  {
    ingredientId: 65,
    name: 'Gelo',
    photo_url:
      'https://img.freepik.com/fotos-premium/cubos-de-gelo-no-fundo-branco_37874-1845.jpg'
  },
  {
    ingredientId: 66,
    name: 'Bicarbonato',
    photo_url:
      'https://img.freepik.com/fotos-premium/bicarbonato-de-sodio-na-colher-de-pau-isolado_72932-424.jpg?w=1380'
  },
  {
    ingredientId: 67,
    name: 'Açucar',
    photo_url:
      'https://img.freepik.com/fotos-premium/acucar-em-uma-placa-de-madeira-isolada-em-um-fundo-branco-foto-de-alta-qualidade_311158-2431.jpg?w=2000'
  },
  {
    ingredientId: 68,
    name: 'Fermento em pó',
    photo_url:
      'https://thumbs.dreamstime.com/b/farinha-de-tapioca-isolada-em-fundo-branco-185711965.jpg'
  },
  {
    ingredientId: 69,
    name: 'Essência de baunilha',
    photo_url:
      'https://img.freepik.com/fotos-premium/vagens-de-baunilha-e-essencia-de-baunilha-em-garrafa-de-vidro_702159-1293.jpg?w=1380'
  },
  {
    ingredientId: 70,
    name: 'Chocolate',
    photo_url:
      'https://img.freepik.com/fotos-premium/pedacos-de-chocolate-ao-leite-e-barra-de-chocolate-isolados-no-fundo-branco-da-ilustracao-3d-de-vista-superior_394271-569.jpg'
  },
  {
    ingredientId: 71,
    name: 'Chocolate em pó',
    photo_url:
      'https://img.freepik.com/fotos-premium/cacau-em-po-com-chocolate-amargo-sobre-fundo-branco_525574-8798.jpg'
  },
  {
    ingredientId: 72,
    name: 'Nozes ou castanhas',
    photo_url:
      'https://img.freepik.com/fotos-gratis/diferentes-frutas-secas_144627-16145.jpg?w=1380&t=st=1669224122~exp=1669224722~hmac=34ee89983331f9d4ecdeebd8ace5b018aaac8b257021b0ab34849f8e7f77606c'
  },
  {
    ingredientId: 73,
    name: 'Mostarda',
    photo_url:
      'https://img.freepik.com/fotos-premium/molho-de-mostarda-em-uma-tigela_88281-2491.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 74,
    name: 'Cogumelo',
    photo_url:
      'https://img.freepik.com/fotos-premium/saborosos-cogumelos-champignon-isolados-no-fundo-branco_185193-71548.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 75,
    name: 'Maionese',
    photo_url:
      'https://img.freepik.com/fotos-premium/maionese-isolada-no-branco_88281-1821.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 76,
    name: 'Batata palha',
    photo_url:
      'https://img.freepik.com/fotos-premium/palha-de-batata-ou-batata-curta-em-uma-tigela-isolada-sobre-fundo-branco_92534-1825.jpg'
  },
  {
    ingredientId: 77,
    name: 'Fermento biológico',
    photo_url:
      'https://thumbs.dreamstime.com/b/fermento-em-uma-colher-22448474.jpg'
  },
  {
    ingredientId: 78,
    name: 'Cachaça',
    photo_url:
      'https://img.freepik.com/fotos-premium/xicara-de-pinga-brasileira-em-fundo-branco-isolado-com-cana-de-acucar-ao-lado_72932-2351.jpg'
  },
  {
    ingredientId: 79,
    name: 'Molho bolonhesa',
    photo_url:
      'https://st4.depositphotos.com/19518982/29814/i/600/depositphotos_298142586-stock-photo-bolognese-also-know-as-bolognesa.jpg'
  },
  {
    ingredientId: 80,
    name: 'Noz-moscada',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/45/30/04/240_F_245300460_JDU8iF7lxoBPld9sgXYzW6ocQpIL1q0A.jpg'
  },
  {
    ingredientId: 81,
    name: 'Leite',
    photo_url:
      'https://img.freepik.com/fotos-premium/leite-integral-natural-em-uma-jarra-e-um-copo-isolado-em-um-fundo-branco_184421-411.jpg?w=2000'
  },
  {
    ingredientId: 82,
    name: 'Bacon',
    photo_url:
      'https://img.freepik.com/fotos-premium/bacon-de-porco-defumado-em-um-fundo-branco_725874-21.jpg'
  },
  {
    ingredientId: 83,
    name: 'Macarrão',
    photo_url:
      'https://img.freepik.com/fotos-gratis/variedade-crua-de-macarrao-no-fundo-branco_23-2148360784.jpg'
  },
  {
    ingredientId: 84,
    name: 'Polpa de açai',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0516/5357/4838/products/AcaiPurissimo-NativeBerries_1000x.jpg?v=1618345658'
  },
  {
    ingredientId: 85,
    name: 'Xarope de guaraná',
    photo_url:
      'https://images.tcdn.com.br/img/img_prod/1053761/xarope_dilute_500ml_sabor_guarana_879_2_e897fc844f62020ccdf2a73635c4c216.png'
  },
  {
    ingredientId: 86,
    name: 'Milho enlatado',
    photo_url:
      'https://img.freepik.com/fotos-premium/de-milho_1472-15593.jpg?w=1380'
  },
  {
    ingredientId: 87,
    name: 'Coco ralado',
    photo_url:
      'https://media.istockphoto.com/id/1204875378/pt/foto/bowl-of-coconut-flakes-on-white-background.jpg?s=612x612&w=0&k=20&c=H4LSpuIImvXa4hxSx3u83-3DNhQrBx96rGvS9GkQDTA='
  },
  {
    ingredientId: 88,
    name: 'Leite de coco',
    photo_url:
      'https://img.freepik.com/fotos-premium/coco-e-copo-de-leite-de-coco-isolado-no-fundo-branco_185193-24590.jpg'
  },
  {
    ingredientId: 89,
    name: 'Azeite-de-dendê',
    photo_url:
      'https://cdn.awsli.com.br/1215/1215170/produto/98800410/68b37ab74c.jpg'
  },
  {
    ingredientId: 90,
    name: 'Farinha de mandioca',
    photo_url:
      'https://media.istockphoto.com/id/1300392101/pt/foto/cassava-flour-in-handmade-pot-natural-organic-flour-from-brazil.jpg?s=612x612&w=0&k=20&c=5yFNTMYrHZ1SM5I5ca5t60Xk1xM5F0_NWCXyb_LReQA='
  },
  {
    ingredientId: 91,
    name: 'Caldo de camarão',
    photo_url:
      'https://st.depositphotos.com/1034372/2470/i/600/depositphotos_24701725-stock-photo-shrimp-soup-dill-bowl-isolated.jpg'
  },
  {
    ingredientId: 92,
    name: 'Canela',
    photo_url:
      'https://img.freepik.com/fotos-gratis/canela-e-seu-po-ao-seu-redor_144627-447.jpg?w=1380&t=st=1669422337~exp=1669422937~hmac=7a8a77e98a2c8c5a24ccf0428ed47456a504ca661eb73af3353b143d5097ed38'
  },
  {
    ingredientId: 93,
    name: 'Licor de laranja',
    photo_url:
      'https://a-static.mlcdn.com.br/1500x1500/cointreau-licor-fino-de-laranja/emporiowiniarski/33984159p/b70442c864d87278d9d641aa10e1c12d.jpg'
  },
  {
    ingredientId: 94,
    name: 'Sorvete',
    photo_url:
      'https://img.freepik.com/fotos-premium/colheres-de-sorvete-em-uma-tigela-sobre-fundo-branco_488220-3938.jpg?w=2000'
  }
];
