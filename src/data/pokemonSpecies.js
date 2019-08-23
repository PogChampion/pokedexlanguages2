const pokemonSpeciesData = [
  {
    pokemon_species_id: 1,
    local_language_id: 1,
    name: 'フシギダネ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 2,
    name: 'Fushigidane',
    genus: ''
  },
  {
    pokemon_species_id: 1,
    local_language_id: 3,
    name: '이상해씨',
    genus: '씨앗포켓몬'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 4,
    name: '妙蛙種子',
    genus: '種子寶可夢'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 5,
    name: 'Bulbizarre',
    genus: 'Pokémon Graine'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 6,
    name: 'Bisasam',
    genus: 'Samen'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 7,
    name: 'Bulbasaur',
    genus: 'Pokémon Semilla'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 8,
    name: 'Bulbasaur',
    genus: 'Pokémon Seme'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 9,
    name: 'Bulbasaur',
    genus: 'Seed Pokémon'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 11,
    name: 'フシギダネ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 1,
    local_language_id: 12,
    name: '妙蛙种子',
    genus: '种子宝可梦'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 1,
    name: 'フシギソウ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 2,
    name: 'Fushigisou',
    genus: ''
  },
  {
    pokemon_species_id: 2,
    local_language_id: 3,
    name: '이상해풀',
    genus: '씨앗포켓몬'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 4,
    name: '妙蛙草',
    genus: '種子寶可夢'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 5,
    name: 'Herbizarre',
    genus: 'Pokémon Graine'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 6,
    name: 'Bisaknosp',
    genus: 'Samen'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 7,
    name: 'Ivysaur',
    genus: 'Pokémon Semilla'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 8,
    name: 'Ivysaur',
    genus: 'Pokémon Seme'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 9,
    name: 'Ivysaur',
    genus: 'Seed Pokémon'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 11,
    name: 'フシギソウ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 2,
    local_language_id: 12,
    name: '妙蛙草',
    genus: '种子宝可梦'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 1,
    name: 'フシギバナ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 2,
    name: 'Fushigibana',
    genus: ''
  },
  {
    pokemon_species_id: 3,
    local_language_id: 3,
    name: '이상해꽃',
    genus: '씨앗포켓몬'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 4,
    name: '妙蛙花',
    genus: '種子寶可夢'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 5,
    name: 'Florizarre',
    genus: 'Pokémon Graine'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 6,
    name: 'Bisaflor',
    genus: 'Samen'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 7,
    name: 'Venusaur',
    genus: 'Pokémon Semilla'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 8,
    name: 'Venusaur',
    genus: 'Pokémon Seme'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 9,
    name: 'Venusaur',
    genus: 'Seed Pokémon'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 11,
    name: 'フシギバナ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 3,
    local_language_id: 12,
    name: '妙蛙花',
    genus: '种子宝可梦'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 1,
    name: 'ヒトカゲ',
    genus: 'とかげポケモン'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 2,
    name: 'Hitokage',
    genus: ''
  },
  {
    pokemon_species_id: 4,
    local_language_id: 3,
    name: '파이리',
    genus: '도롱뇽포켓몬'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 4,
    name: '小火龍',
    genus: '蜥蜴寶可夢'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 5,
    name: 'Salamèche',
    genus: 'Pokémon Lézard'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 6,
    name: 'Glumanda',
    genus: 'Echse'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 7,
    name: 'Charmander',
    genus: 'Pokémon Lagartija'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 8,
    name: 'Charmander',
    genus: 'Pokémon Lucertola'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 9,
    name: 'Charmander',
    genus: 'Lizard Pokémon'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 11,
    name: 'ヒトカゲ',
    genus: 'とかげポケモン'
  },
  {
    pokemon_species_id: 4,
    local_language_id: 12,
    name: '小火龙',
    genus: '蜥蜴宝可梦'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 1,
    name: 'リザード',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 2,
    name: 'Lizardo',
    genus: ''
  },
  {
    pokemon_species_id: 5,
    local_language_id: 3,
    name: '리자드',
    genus: '화염포켓몬'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 4,
    name: '火恐龍',
    genus: '火焰寶可夢'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 5,
    name: 'Reptincel',
    genus: 'Pokémon Flamme'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 6,
    name: 'Glutexo',
    genus: 'Flamme'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 7,
    name: 'Charmeleon',
    genus: 'Pokémon Llama'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 8,
    name: 'Charmeleon',
    genus: 'Pokémon Fiamma'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 9,
    name: 'Charmeleon',
    genus: 'Flame Pokémon'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 11,
    name: 'リザード',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 5,
    local_language_id: 12,
    name: '火恐龙',
    genus: '火焰宝可梦'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 1,
    name: 'リザードン',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 2,
    name: 'Lizardon',
    genus: ''
  },
  {
    pokemon_species_id: 6,
    local_language_id: 3,
    name: '리자몽',
    genus: '화염포켓몬'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 4,
    name: '噴火龍',
    genus: '火焰寶可夢'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 5,
    name: 'Dracaufeu',
    genus: 'Pokémon Flamme'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 6,
    name: 'Glurak',
    genus: 'Flamme'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 7,
    name: 'Charizard',
    genus: 'Pokémon Llama'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 8,
    name: 'Charizard',
    genus: 'Pokémon Fiamma'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 9,
    name: 'Charizard',
    genus: 'Flame Pokémon'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 11,
    name: 'リザードン',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 6,
    local_language_id: 12,
    name: '喷火龙',
    genus: '火焰宝可梦'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 1,
    name: 'ゼニガメ',
    genus: 'かめのこポケモン'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 2,
    name: 'Zenigame',
    genus: ''
  },
  {
    pokemon_species_id: 7,
    local_language_id: 3,
    name: '꼬부기',
    genus: '꼬마거북포켓몬'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 4,
    name: '傑尼龜',
    genus: '小龜寶可夢'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 5,
    name: 'Carapuce',
    genus: 'Pokémon Minitortue'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 6,
    name: 'Schiggy',
    genus: 'Minikröte'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 7,
    name: 'Squirtle',
    genus: 'Pokémon Tortuguita'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 8,
    name: 'Squirtle',
    genus: 'Pokémon Tartaghina'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 9,
    name: 'Squirtle',
    genus: 'Tiny Turtle Pokémon'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 11,
    name: 'ゼニガメ',
    genus: 'かめのこポケモン'
  },
  {
    pokemon_species_id: 7,
    local_language_id: 12,
    name: '杰尼龟',
    genus: '小龟宝可梦'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 1,
    name: 'カメール',
    genus: 'かめポケモン'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 2,
    name: 'Kameil',
    genus: ''
  },
  {
    pokemon_species_id: 8,
    local_language_id: 3,
    name: '어니부기',
    genus: '거북포켓몬'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 4,
    name: '卡咪龜',
    genus: '龜寶可夢'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 5,
    name: 'Carabaffe',
    genus: 'Pokémon Tortue'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 6,
    name: 'Schillok',
    genus: 'Kröte'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 7,
    name: 'Wartortle',
    genus: 'Pokémon Tortuga'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 8,
    name: 'Wartortle',
    genus: 'Pokémon Tartaruga'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 9,
    name: 'Wartortle',
    genus: 'Turtle Pokémon'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 11,
    name: 'カメール',
    genus: 'かめポケモン'
  },
  {
    pokemon_species_id: 8,
    local_language_id: 12,
    name: '卡咪龟',
    genus: '龟宝可梦'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 1,
    name: 'カメックス',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 2,
    name: 'Kamex',
    genus: ''
  },
  {
    pokemon_species_id: 9,
    local_language_id: 3,
    name: '거북왕',
    genus: '껍질포켓몬'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 4,
    name: '水箭龜',
    genus: '甲殼寶可夢'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 5,
    name: 'Tortank',
    genus: 'Pokémon Carapace'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 6,
    name: 'Turtok',
    genus: 'Panzertier'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 7,
    name: 'Blastoise',
    genus: 'Pokémon Marisco'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 8,
    name: 'Blastoise',
    genus: 'Pokémon Crostaceo'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 9,
    name: 'Blastoise',
    genus: 'Shellfish Pokémon'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 11,
    name: 'カメックス',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 9,
    local_language_id: 12,
    name: '水箭龟',
    genus: '甲壳宝可梦'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 1,
    name: 'キャタピー',
    genus: 'いもむしポケモン'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 2,
    name: 'Caterpie',
    genus: ''
  },
  {
    pokemon_species_id: 10,
    local_language_id: 3,
    name: '캐터피',
    genus: '애벌레포켓몬'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 4,
    name: '綠毛蟲',
    genus: '蟲寶寶寶可夢'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 5,
    name: 'Chenipan',
    genus: 'Pokémon Ver'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 6,
    name: 'Raupy',
    genus: 'Wurm'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 7,
    name: 'Caterpie',
    genus: 'Pokémon Gusano'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 8,
    name: 'Caterpie',
    genus: 'Pokémon Baco'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 9,
    name: 'Caterpie',
    genus: 'Worm Pokémon'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 11,
    name: 'キャタピー',
    genus: 'いもむしポケモン'
  },
  {
    pokemon_species_id: 10,
    local_language_id: 12,
    name: '绿毛虫',
    genus: '虫宝宝宝可梦'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 1,
    name: 'トランセル',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 2,
    name: 'Trancell',
    genus: ''
  },
  {
    pokemon_species_id: 11,
    local_language_id: 3,
    name: '단데기',
    genus: '번데기포켓몬'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 4,
    name: '鐵甲蛹',
    genus: '蛹寶可夢'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 5,
    name: 'Chrysacier',
    genus: 'Pokémon Cocon'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 6,
    name: 'Safcon',
    genus: 'Kokon'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 7,
    name: 'Metapod',
    genus: 'Pokémon Capullo'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 8,
    name: 'Metapod',
    genus: 'Pokémon Bozzolo'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 9,
    name: 'Metapod',
    genus: 'Cocoon Pokémon'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 11,
    name: 'トランセル',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 11,
    local_language_id: 12,
    name: '铁甲蛹',
    genus: '蛹宝可梦'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 1,
    name: 'バタフリー',
    genus: 'ちょうちょポケモン'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 2,
    name: 'Butterfree',
    genus: ''
  },
  {
    pokemon_species_id: 12,
    local_language_id: 3,
    name: '버터플',
    genus: '나비포켓몬'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 4,
    name: '巴大蝶',
    genus: '蝴蝶寶可夢'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 5,
    name: 'Papilusion',
    genus: 'Pokémon Papillon'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 6,
    name: 'Smettbo',
    genus: 'Falter'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 7,
    name: 'Butterfree',
    genus: 'Pokémon Mariposa'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 8,
    name: 'Butterfree',
    genus: 'Pokémon Farfalla'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 9,
    name: 'Butterfree',
    genus: 'Butterfly Pokémon'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 11,
    name: 'バタフリー',
    genus: 'ちょうちょポケモン'
  },
  {
    pokemon_species_id: 12,
    local_language_id: 12,
    name: '巴大蝶',
    genus: '蝴蝶宝可梦'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 1,
    name: 'ビードル',
    genus: 'けむしポケモン'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 2,
    name: 'Beedle',
    genus: ''
  },
  {
    pokemon_species_id: 13,
    local_language_id: 3,
    name: '뿔충이',
    genus: '송충이포켓몬'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 4,
    name: '獨角蟲',
    genus: '毛毛蟲寶可夢'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 5,
    name: 'Aspicot',
    genus: 'Pokémon Insectopic'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 6,
    name: 'Hornliu',
    genus: 'Raupe'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 7,
    name: 'Weedle',
    genus: 'Pokémon Oruga'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 8,
    name: 'Weedle',
    genus: 'Pokémon Millepiedi'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 9,
    name: 'Weedle',
    genus: 'Hairy Bug Pokémon'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 11,
    name: 'ビードル',
    genus: 'けむしポケモン'
  },
  {
    pokemon_species_id: 13,
    local_language_id: 12,
    name: '独角虫',
    genus: '毛毛虫宝可梦'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 1,
    name: 'コクーン',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 2,
    name: 'Cocoon',
    genus: ''
  },
  {
    pokemon_species_id: 14,
    local_language_id: 3,
    name: '딱충이',
    genus: '번데기포켓몬'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 4,
    name: '鐵殼蛹',
    genus: '蛹寶可夢'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 5,
    name: 'Coconfort',
    genus: 'Pokémon Cocon'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 6,
    name: 'Kokuna',
    genus: 'Kokon'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 7,
    name: 'Kakuna',
    genus: 'Pokémon Capullo'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 8,
    name: 'Kakuna',
    genus: 'Pokémon Bozzolo'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 9,
    name: 'Kakuna',
    genus: 'Cocoon Pokémon'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 11,
    name: 'コクーン',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 14,
    local_language_id: 12,
    name: '铁壳蛹',
    genus: '蛹宝可梦'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 1,
    name: 'スピアー',
    genus: 'どくばちポケモン'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 2,
    name: 'Spear',
    genus: ''
  },
  {
    pokemon_species_id: 15,
    local_language_id: 3,
    name: '독침붕',
    genus: '독벌포켓몬'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 4,
    name: '大針蜂',
    genus: '毒蜂寶可夢'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 5,
    name: 'Dardargnan',
    genus: 'Pokémon Guêpoison'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 6,
    name: 'Bibor',
    genus: 'Giftbiene'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 7,
    name: 'Beedrill',
    genus: 'Pokémon Abeja Veneno'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 8,
    name: 'Beedrill',
    genus: 'Pokémon Velenape'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 9,
    name: 'Beedrill',
    genus: 'Poison Bee Pokémon'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 11,
    name: 'スピアー',
    genus: 'どくばちポケモン'
  },
  {
    pokemon_species_id: 15,
    local_language_id: 12,
    name: '大针蜂',
    genus: '毒蜂宝可梦'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 1,
    name: 'ポッポ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 2,
    name: 'Poppo',
    genus: ''
  },
  {
    pokemon_species_id: 16,
    local_language_id: 3,
    name: '구구',
    genus: '아기새포켓몬'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 4,
    name: '波波',
    genus: '小鳥寶可夢'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 5,
    name: 'Roucool',
    genus: 'Pokémon Minoiseau'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 6,
    name: 'Taubsi',
    genus: 'Kleinvogel'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 7,
    name: 'Pidgey',
    genus: 'Pokémon Pajarito'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 8,
    name: 'Pidgey',
    genus: 'Pokémon Uccellino'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 9,
    name: 'Pidgey',
    genus: 'Tiny Bird Pokémon'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 11,
    name: 'ポッポ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 16,
    local_language_id: 12,
    name: '波波',
    genus: '小鸟宝可梦'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 1,
    name: 'ピジョン',
    genus: 'とりポケモン'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 2,
    name: 'Pigeon',
    genus: ''
  },
  {
    pokemon_species_id: 17,
    local_language_id: 3,
    name: '피죤',
    genus: '새포켓몬'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 4,
    name: '比比鳥',
    genus: '鳥寶可夢'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 5,
    name: 'Roucoups',
    genus: 'Pokémon Oiseau'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 6,
    name: 'Tauboga',
    genus: 'Vogel'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 7,
    name: 'Pidgeotto',
    genus: 'Pokémon Pájaro'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 8,
    name: 'Pidgeotto',
    genus: 'Pokémon Uccello'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 9,
    name: 'Pidgeotto',
    genus: 'Bird Pokémon'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 11,
    name: 'ピジョン',
    genus: 'とりポケモン'
  },
  {
    pokemon_species_id: 17,
    local_language_id: 12,
    name: '比比鸟',
    genus: '鸟宝可梦'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 1,
    name: 'ピジョット',
    genus: 'とりポケモン'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 2,
    name: 'Pigeot',
    genus: ''
  },
  {
    pokemon_species_id: 18,
    local_language_id: 3,
    name: '피죤투',
    genus: '새포켓몬'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 4,
    name: '大比鳥',
    genus: '鳥寶可夢'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 5,
    name: 'Roucarnage',
    genus: 'Pokémon Oiseau'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 6,
    name: 'Tauboss',
    genus: 'Vogel'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 7,
    name: 'Pidgeot',
    genus: 'Pokémon Pájaro'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 8,
    name: 'Pidgeot',
    genus: 'Pokémon Uccello'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 9,
    name: 'Pidgeot',
    genus: 'Bird Pokémon'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 11,
    name: 'ピジョット',
    genus: 'とりポケモン'
  },
  {
    pokemon_species_id: 18,
    local_language_id: 12,
    name: '大比鸟',
    genus: '鸟宝可梦'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 1,
    name: 'コラッタ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 2,
    name: 'Koratta',
    genus: ''
  },
  {
    pokemon_species_id: 19,
    local_language_id: 3,
    name: '꼬렛',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 4,
    name: '小拉達',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 5,
    name: 'Rattata',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 6,
    name: 'Rattfratz',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 7,
    name: 'Rattata',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 8,
    name: 'Rattata',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 9,
    name: 'Rattata',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 11,
    name: 'コラッタ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 19,
    local_language_id: 12,
    name: '小拉达',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 1,
    name: 'ラッタ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 2,
    name: 'Ratta',
    genus: ''
  },
  {
    pokemon_species_id: 20,
    local_language_id: 3,
    name: '레트라',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 4,
    name: '拉達',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 5,
    name: 'Rattatac',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 6,
    name: 'Rattikarl',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 7,
    name: 'Raticate',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 8,
    name: 'Raticate',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 9,
    name: 'Raticate',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 11,
    name: 'ラッタ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 20,
    local_language_id: 12,
    name: '拉达',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 1,
    name: 'オニスズメ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 2,
    name: 'Onisuzume',
    genus: ''
  },
  {
    pokemon_species_id: 21,
    local_language_id: 3,
    name: '깨비참',
    genus: '아기새포켓몬'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 4,
    name: '烈雀',
    genus: '小鳥寶可夢'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 5,
    name: 'Piafabec',
    genus: 'Pokémon Minoiseau'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 6,
    name: 'Habitak',
    genus: 'Kleinvogel'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 7,
    name: 'Spearow',
    genus: 'Pokémon Pajarito'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 8,
    name: 'Spearow',
    genus: 'Pokémon Uccellino'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 9,
    name: 'Spearow',
    genus: 'Tiny Bird Pokémon'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 11,
    name: 'オニスズメ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 21,
    local_language_id: 12,
    name: '烈雀',
    genus: '小鸟宝可梦'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 1,
    name: 'オニドリル',
    genus: 'くちばしポケモン'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 2,
    name: 'Onidrill',
    genus: ''
  },
  {
    pokemon_species_id: 22,
    local_language_id: 3,
    name: '깨비드릴조',
    genus: '부리포켓몬'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 4,
    name: '大嘴雀',
    genus: '鳥嘴寶可夢'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 5,
    name: 'Rapasdepic',
    genus: 'Pokémon Bec-Oiseau'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 6,
    name: 'Ibitak',
    genus: 'Pickvogel'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 7,
    name: 'Fearow',
    genus: 'Pokémon Pico'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 8,
    name: 'Fearow',
    genus: 'Pokémon Becco'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 9,
    name: 'Fearow',
    genus: 'Beak Pokémon'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 11,
    name: 'オニドリル',
    genus: 'くちばしポケモン'
  },
  {
    pokemon_species_id: 22,
    local_language_id: 12,
    name: '大嘴雀',
    genus: '鸟嘴宝可梦'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 1,
    name: 'アーボ',
    genus: 'へびポケモン'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 2,
    name: 'Arbo',
    genus: ''
  },
  {
    pokemon_species_id: 23,
    local_language_id: 3,
    name: '아보',
    genus: '뱀포켓몬'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 4,
    name: '阿柏蛇',
    genus: '蛇寶可夢'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 5,
    name: 'Abo',
    genus: 'Pokémon Serpent'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 6,
    name: 'Rettan',
    genus: 'Schlange'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 7,
    name: 'Ekans',
    genus: 'Pokémon Serpiente'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 8,
    name: 'Ekans',
    genus: 'Pokémon Serpente'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 9,
    name: 'Ekans',
    genus: 'Snake Pokémon'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 11,
    name: 'アーボ',
    genus: 'へびポケモン'
  },
  {
    pokemon_species_id: 23,
    local_language_id: 12,
    name: '阿柏蛇',
    genus: '蛇宝可梦'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 1,
    name: 'アーボック',
    genus: 'コブラポケモン'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 2,
    name: 'Arbok',
    genus: ''
  },
  {
    pokemon_species_id: 24,
    local_language_id: 3,
    name: '아보크',
    genus: '코브라포켓몬'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 4,
    name: '阿柏怪',
    genus: '眼鏡蛇寶可夢'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 5,
    name: 'Arbok',
    genus: 'Pokémon Cobra'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 6,
    name: 'Arbok',
    genus: 'Kobra'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 7,
    name: 'Arbok',
    genus: 'Pokémon Cobra'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 8,
    name: 'Arbok',
    genus: 'Pokémon Cobra'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 9,
    name: 'Arbok',
    genus: 'Cobra Pokémon'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 11,
    name: 'アーボック',
    genus: 'コブラポケモン'
  },
  {
    pokemon_species_id: 24,
    local_language_id: 12,
    name: '阿柏怪',
    genus: '眼镜蛇宝可梦'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 1,
    name: 'ピカチュウ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 2,
    name: 'Pikachu',
    genus: ''
  },
  {
    pokemon_species_id: 25,
    local_language_id: 3,
    name: '피카츄',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 4,
    name: '皮卡丘',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 5,
    name: 'Pikachu',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 6,
    name: 'Pikachu',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 7,
    name: 'Pikachu',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 8,
    name: 'Pikachu',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 9,
    name: 'Pikachu',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 11,
    name: 'ピカチュウ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 25,
    local_language_id: 12,
    name: '皮卡丘',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 1,
    name: 'ライチュウ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 2,
    name: 'Raichu',
    genus: ''
  },
  {
    pokemon_species_id: 26,
    local_language_id: 3,
    name: '라이츄',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 4,
    name: '雷丘',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 5,
    name: 'Raichu',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 6,
    name: 'Raichu',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 7,
    name: 'Raichu',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 8,
    name: 'Raichu',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 9,
    name: 'Raichu',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 11,
    name: 'ライチュウ',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 26,
    local_language_id: 12,
    name: '雷丘',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 1,
    name: 'サンド',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 2,
    name: 'Sand',
    genus: ''
  },
  {
    pokemon_species_id: 27,
    local_language_id: 3,
    name: '모래두지',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 4,
    name: '穿山鼠',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 5,
    name: 'Sabelette',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 6,
    name: 'Sandan',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 7,
    name: 'Sandshrew',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 8,
    name: 'Sandshrew',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 9,
    name: 'Sandshrew',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 11,
    name: 'サンド',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 27,
    local_language_id: 12,
    name: '穿山鼠',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 1,
    name: 'サンドパン',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 2,
    name: 'Sandpan',
    genus: ''
  },
  {
    pokemon_species_id: 28,
    local_language_id: 3,
    name: '고지',
    genus: '쥐포켓몬'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 4,
    name: '穿山王',
    genus: '鼠寶可夢'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 5,
    name: 'Sablaireau',
    genus: 'Pokémon Souris'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 6,
    name: 'Sandamer',
    genus: 'Maus'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 7,
    name: 'Sandslash',
    genus: 'Pokémon Ratón'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 8,
    name: 'Sandslash',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 9,
    name: 'Sandslash',
    genus: 'Mouse Pokémon'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 11,
    name: 'サンドパン',
    genus: 'ねずみポケモン'
  },
  {
    pokemon_species_id: 28,
    local_language_id: 12,
    name: '穿山王',
    genus: '鼠宝可梦'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 1,
    name: 'ニドラン♀',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 2,
    name: 'Nidoran♀',
    genus: ''
  },
  {
    pokemon_species_id: 29,
    local_language_id: 3,
    name: '니드런♀',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 4,
    name: '尼多蘭',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 5,
    name: 'Nidoran♀',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 6,
    name: 'Nidoran♀',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 7,
    name: 'Nidoran♀',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 8,
    name: 'Nidoran♀',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 9,
    name: 'Nidoran♀',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 11,
    name: 'ニドラン♀',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 29,
    local_language_id: 12,
    name: '尼多兰',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 1,
    name: 'ニドリーナ',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 2,
    name: 'Nidorina',
    genus: ''
  },
  {
    pokemon_species_id: 30,
    local_language_id: 3,
    name: '니드리나',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 4,
    name: '尼多娜',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 5,
    name: 'Nidorina',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 6,
    name: 'Nidorina',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 7,
    name: 'Nidorina',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 8,
    name: 'Nidorina',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 9,
    name: 'Nidorina',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 11,
    name: 'ニドリーナ',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 30,
    local_language_id: 12,
    name: '尼多娜',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 1,
    name: 'ニドクイン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 2,
    name: 'Nidoqueen',
    genus: ''
  },
  {
    pokemon_species_id: 31,
    local_language_id: 3,
    name: '니드퀸',
    genus: '드릴포켓몬'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 4,
    name: '尼多后',
    genus: '鑽錐寶可夢'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 5,
    name: 'Nidoqueen',
    genus: 'Pokémon Perceur'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 6,
    name: 'Nidoqueen',
    genus: 'Bohrer'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 7,
    name: 'Nidoqueen',
    genus: 'Pokémon Taladro'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 8,
    name: 'Nidoqueen',
    genus: 'Pokémon Trapano'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 9,
    name: 'Nidoqueen',
    genus: 'Drill Pokémon'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 11,
    name: 'ニドクイン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 31,
    local_language_id: 12,
    name: '尼多后',
    genus: '钻锥宝可梦'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 1,
    name: 'ニドラン♂',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 2,
    name: 'Nidoran♂',
    genus: ''
  },
  {
    pokemon_species_id: 32,
    local_language_id: 3,
    name: '니드런♂',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 4,
    name: '尼多朗',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 5,
    name: 'Nidoran♂',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 6,
    name: 'Nidoran♂',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 7,
    name: 'Nidoran♂',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 8,
    name: 'Nidoran♂',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 9,
    name: 'Nidoran♂',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 11,
    name: 'ニドラン♂',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 32,
    local_language_id: 12,
    name: '尼多朗',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 1,
    name: 'ニドリーノ',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 2,
    name: 'Nidorino',
    genus: ''
  },
  {
    pokemon_species_id: 33,
    local_language_id: 3,
    name: '니드리노',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 4,
    name: '尼多力諾',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 5,
    name: 'Nidorino',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 6,
    name: 'Nidorino',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 7,
    name: 'Nidorino',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 8,
    name: 'Nidorino',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 9,
    name: 'Nidorino',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 11,
    name: 'ニドリーノ',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 33,
    local_language_id: 12,
    name: '尼多力诺',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 1,
    name: 'ニドキング',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 2,
    name: 'Nidoking',
    genus: ''
  },
  {
    pokemon_species_id: 34,
    local_language_id: 3,
    name: '니드킹',
    genus: '드릴포켓몬'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 4,
    name: '尼多王',
    genus: '鑽錐寶可夢'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 5,
    name: 'Nidoking',
    genus: 'Pokémon Perceur'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 6,
    name: 'Nidoking',
    genus: 'Bohrer'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 7,
    name: 'Nidoking',
    genus: 'Pokémon Taladro'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 8,
    name: 'Nidoking',
    genus: 'Pokémon Trapano'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 9,
    name: 'Nidoking',
    genus: 'Drill Pokémon'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 11,
    name: 'ニドキング',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 34,
    local_language_id: 12,
    name: '尼多王',
    genus: '钻锥宝可梦'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 1,
    name: 'ピッピ',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 2,
    name: 'Pippi',
    genus: ''
  },
  {
    pokemon_species_id: 35,
    local_language_id: 3,
    name: '삐삐',
    genus: '요정포켓몬'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 4,
    name: '皮皮',
    genus: '妖精寶可夢'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 5,
    name: 'Mélofée',
    genus: 'Pokémon Fée'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 6,
    name: 'Piepi',
    genus: 'Fee'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 7,
    name: 'Clefairy',
    genus: 'Pokémon Hada'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 8,
    name: 'Clefairy',
    genus: 'Pokémon Fata'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 9,
    name: 'Clefairy',
    genus: 'Fairy Pokémon'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 11,
    name: 'ピッピ',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 35,
    local_language_id: 12,
    name: '皮皮',
    genus: '妖精宝可梦'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 1,
    name: 'ピクシー',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 2,
    name: 'Pixy',
    genus: ''
  },
  {
    pokemon_species_id: 36,
    local_language_id: 3,
    name: '픽시',
    genus: '요정포켓몬'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 4,
    name: '皮可西',
    genus: '妖精寶可夢'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 5,
    name: 'Mélodelfe',
    genus: 'Pokémon Fée'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 6,
    name: 'Pixi',
    genus: 'Fee'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 7,
    name: 'Clefable',
    genus: 'Pokémon Hada'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 8,
    name: 'Clefable',
    genus: 'Pokémon Fata'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 9,
    name: 'Clefable',
    genus: 'Fairy Pokémon'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 11,
    name: 'ピクシー',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 36,
    local_language_id: 12,
    name: '皮可西',
    genus: '妖精宝可梦'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 1,
    name: 'ロコン',
    genus: 'きつねポケモン'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 2,
    name: 'Rokon',
    genus: ''
  },
  {
    pokemon_species_id: 37,
    local_language_id: 3,
    name: '식스테일',
    genus: '여우포켓몬'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 4,
    name: '六尾',
    genus: '狐狸寶可夢'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 5,
    name: 'Goupix',
    genus: 'Pokémon Renard'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 6,
    name: 'Vulpix',
    genus: 'Fuchs'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 7,
    name: 'Vulpix',
    genus: 'Pokémon Zorro'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 8,
    name: 'Vulpix',
    genus: 'Pokémon Volpe'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 9,
    name: 'Vulpix',
    genus: 'Fox Pokémon'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 11,
    name: 'ロコン',
    genus: 'きつねポケモン'
  },
  {
    pokemon_species_id: 37,
    local_language_id: 12,
    name: '六尾',
    genus: '狐狸宝可梦'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 1,
    name: 'キュウコン',
    genus: 'きつねポケモン'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 2,
    name: 'Kyukon',
    genus: ''
  },
  {
    pokemon_species_id: 38,
    local_language_id: 3,
    name: '나인테일',
    genus: '여우포켓몬'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 4,
    name: '九尾',
    genus: '狐狸寶可夢'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 5,
    name: 'Feunard',
    genus: 'Pokémon Renard'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 6,
    name: 'Vulnona',
    genus: 'Fuchs'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 7,
    name: 'Ninetales',
    genus: 'Pokémon Zorro'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 8,
    name: 'Ninetales',
    genus: 'Pokémon Volpe'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 9,
    name: 'Ninetales',
    genus: 'Fox Pokémon'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 11,
    name: 'キュウコン',
    genus: 'きつねポケモン'
  },
  {
    pokemon_species_id: 38,
    local_language_id: 12,
    name: '九尾',
    genus: '狐狸宝可梦'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 1,
    name: 'プリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 2,
    name: 'Purin',
    genus: ''
  },
  {
    pokemon_species_id: 39,
    local_language_id: 3,
    name: '푸린',
    genus: '풍선포켓몬'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 4,
    name: '胖丁',
    genus: '氣球寶可夢'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 5,
    name: 'Rondoudou',
    genus: 'Pokémon Bouboule'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 6,
    name: 'Pummeluff',
    genus: 'Ballon'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 7,
    name: 'Jigglypuff',
    genus: 'Pokémon Globo'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 8,
    name: 'Jigglypuff',
    genus: 'Pokémon Pallone'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 9,
    name: 'Jigglypuff',
    genus: 'Balloon Pokémon'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 11,
    name: 'プリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 39,
    local_language_id: 12,
    name: '胖丁',
    genus: '气球宝可梦'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 1,
    name: 'プクリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 2,
    name: 'Pukurin',
    genus: ''
  },
  {
    pokemon_species_id: 40,
    local_language_id: 3,
    name: '푸크린',
    genus: '풍선포켓몬'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 4,
    name: '胖可丁',
    genus: '氣球寶可夢'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 5,
    name: 'Grodoudou',
    genus: 'Pokémon Bouboule'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 6,
    name: 'Knuddeluff',
    genus: 'Ballon'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 7,
    name: 'Wigglytuff',
    genus: 'Pokémon Globo'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 8,
    name: 'Wigglytuff',
    genus: 'Pokémon Pallone'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 9,
    name: 'Wigglytuff',
    genus: 'Balloon Pokémon'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 11,
    name: 'プクリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 40,
    local_language_id: 12,
    name: '胖可丁',
    genus: '气球宝可梦'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 1,
    name: 'ズバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 2,
    name: 'Zubat',
    genus: ''
  },
  {
    pokemon_species_id: 41,
    local_language_id: 3,
    name: '주뱃',
    genus: '박쥐포켓몬'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 4,
    name: '超音蝠',
    genus: '蝙蝠寶可夢'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 5,
    name: 'Nosferapti',
    genus: 'Pokémon Chovsouris'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 6,
    name: 'Zubat',
    genus: 'Fledermaus'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 7,
    name: 'Zubat',
    genus: 'Pokémon Murciélago'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 8,
    name: 'Zubat',
    genus: 'Pokémon Pipistrello'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 9,
    name: 'Zubat',
    genus: 'Bat Pokémon'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 11,
    name: 'ズバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 41,
    local_language_id: 12,
    name: '超音蝠',
    genus: '蝙蝠宝可梦'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 1,
    name: 'ゴルバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 2,
    name: 'Golbat',
    genus: ''
  },
  {
    pokemon_species_id: 42,
    local_language_id: 3,
    name: '골뱃',
    genus: '박쥐포켓몬'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 4,
    name: '大嘴蝠',
    genus: '蝙蝠寶可夢'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 5,
    name: 'Nosferalto',
    genus: 'Pokémon Chovsouris'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 6,
    name: 'Golbat',
    genus: 'Fledermaus'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 7,
    name: 'Golbat',
    genus: 'Pokémon Murciélago'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 8,
    name: 'Golbat',
    genus: 'Pokémon Pipistrello'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 9,
    name: 'Golbat',
    genus: 'Bat Pokémon'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 11,
    name: 'ゴルバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 42,
    local_language_id: 12,
    name: '大嘴蝠',
    genus: '蝙蝠宝可梦'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 1,
    name: 'ナゾノクサ',
    genus: 'ざっそうポケモン'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 2,
    name: 'Nazonokusa',
    genus: ''
  },
  {
    pokemon_species_id: 43,
    local_language_id: 3,
    name: '뚜벅쵸',
    genus: '잡초포켓몬'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 4,
    name: '走路草',
    genus: '雜草寶可夢'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 5,
    name: 'Mystherbe',
    genus: 'Pokémon Racine'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 6,
    name: 'Myrapla',
    genus: 'Unkraut'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 7,
    name: 'Oddish',
    genus: 'Pokémon Hierbajo'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 8,
    name: 'Oddish',
    genus: 'Pokémon Malerba'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 9,
    name: 'Oddish',
    genus: 'Weed Pokémon'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 11,
    name: 'ナゾノクサ',
    genus: 'ざっそうポケモン'
  },
  {
    pokemon_species_id: 43,
    local_language_id: 12,
    name: '走路草',
    genus: '杂草宝可梦'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 1,
    name: 'クサイハナ',
    genus: 'ざっそうポケモン'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 2,
    name: 'Kusaihana',
    genus: ''
  },
  {
    pokemon_species_id: 44,
    local_language_id: 3,
    name: '냄새꼬',
    genus: '잡초포켓몬'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 4,
    name: '臭臭花',
    genus: '雜草寶可夢'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 5,
    name: 'Ortide',
    genus: 'Pokémon Racine'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 6,
    name: 'Duflor',
    genus: 'Unkraut'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 7,
    name: 'Gloom',
    genus: 'Pokémon Hierbajo'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 8,
    name: 'Gloom',
    genus: 'Pokémon Malerba'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 9,
    name: 'Gloom',
    genus: 'Weed Pokémon'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 11,
    name: 'クサイハナ',
    genus: 'ざっそうポケモン'
  },
  {
    pokemon_species_id: 44,
    local_language_id: 12,
    name: '臭臭花',
    genus: '杂草宝可梦'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 1,
    name: 'ラフレシア',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 2,
    name: 'Ruffresia',
    genus: ''
  },
  {
    pokemon_species_id: 45,
    local_language_id: 3,
    name: '라플레시아',
    genus: '꽃포켓몬'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 4,
    name: '霸王花',
    genus: '花寶可夢'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 5,
    name: 'Rafflesia',
    genus: 'Pokémon Fleur'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 6,
    name: 'Giflor',
    genus: 'Blume'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 7,
    name: 'Vileplume',
    genus: 'Pokémon Flor'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 8,
    name: 'Vileplume',
    genus: 'Pokémon Fiore'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 9,
    name: 'Vileplume',
    genus: 'Flower Pokémon'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 11,
    name: 'ラフレシア',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 45,
    local_language_id: 12,
    name: '霸王花',
    genus: '花宝可梦'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 1,
    name: 'パラス',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 2,
    name: 'Paras',
    genus: ''
  },
  {
    pokemon_species_id: 46,
    local_language_id: 3,
    name: '파라스',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 4,
    name: '派拉斯',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 5,
    name: 'Paras',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 6,
    name: 'Paras',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 7,
    name: 'Paras',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 8,
    name: 'Paras',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 9,
    name: 'Paras',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 11,
    name: 'パラス',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 46,
    local_language_id: 12,
    name: '派拉斯',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 1,
    name: 'パラセクト',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 2,
    name: 'Parasect',
    genus: ''
  },
  {
    pokemon_species_id: 47,
    local_language_id: 3,
    name: '파라섹트',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 4,
    name: '派拉斯特',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 5,
    name: 'Parasect',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 6,
    name: 'Parasek',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 7,
    name: 'Parasect',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 8,
    name: 'Parasect',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 9,
    name: 'Parasect',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 11,
    name: 'パラセクト',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 47,
    local_language_id: 12,
    name: '派拉斯特',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 1,
    name: 'コンパン',
    genus: 'こんちゅうポケモン'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 2,
    name: 'Kongpang',
    genus: ''
  },
  {
    pokemon_species_id: 48,
    local_language_id: 3,
    name: '콘팡',
    genus: '곤충포켓몬'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 4,
    name: '毛球',
    genus: '昆蟲寶可夢'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 5,
    name: 'Mimitoss',
    genus: 'Pokémon Vermine'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 6,
    name: 'Bluzuk',
    genus: 'Insekt'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 7,
    name: 'Venonat',
    genus: 'Pokémon Insecto'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 8,
    name: 'Venonat',
    genus: 'Pokémon Insetto'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 9,
    name: 'Venonat',
    genus: 'Insect Pokémon'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 11,
    name: 'コンパン',
    genus: 'こんちゅうポケモン'
  },
  {
    pokemon_species_id: 48,
    local_language_id: 12,
    name: '毛球',
    genus: '昆虫宝可梦'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 1,
    name: 'モルフォン',
    genus: 'どくがポケモン'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 2,
    name: 'Morphon',
    genus: ''
  },
  {
    pokemon_species_id: 49,
    local_language_id: 3,
    name: '도나리',
    genus: '독나방포켓몬'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 4,
    name: '摩魯蛾',
    genus: '毒蛾寶可夢'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 5,
    name: 'Aéromite',
    genus: 'Pokémon Papipoison'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 6,
    name: 'Omot',
    genus: 'Giftmotte'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 7,
    name: 'Venomoth',
    genus: 'Pokémon Polilla Ven.'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 8,
    name: 'Venomoth',
    genus: 'Pokémon Velentarma'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 9,
    name: 'Venomoth',
    genus: 'Poison Moth Pokémon'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 11,
    name: 'モルフォン',
    genus: 'どくがポケモン'
  },
  {
    pokemon_species_id: 49,
    local_language_id: 12,
    name: '摩鲁蛾',
    genus: '毒蛾宝可梦'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 1,
    name: 'ディグダ',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 2,
    name: 'Digda',
    genus: ''
  },
  {
    pokemon_species_id: 50,
    local_language_id: 3,
    name: '디그다',
    genus: '두더지포켓몬'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 4,
    name: '地鼠',
    genus: '鼴鼠寶可夢'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 5,
    name: 'Taupiqueur',
    genus: 'Pokémon Taupe'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 6,
    name: 'Digda',
    genus: 'Maulwurf'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 7,
    name: 'Diglett',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 8,
    name: 'Diglett',
    genus: 'Pokémon Talpa'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 9,
    name: 'Diglett',
    genus: 'Mole Pokémon'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 11,
    name: 'ディグダ',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 50,
    local_language_id: 12,
    name: '地鼠',
    genus: '鼹鼠宝可梦'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 1,
    name: 'ダグトリオ',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 2,
    name: 'Dugtrio',
    genus: ''
  },
  {
    pokemon_species_id: 51,
    local_language_id: 3,
    name: '닥트리오',
    genus: '두더지포켓몬'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 4,
    name: '三地鼠',
    genus: '鼴鼠寶可夢'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 5,
    name: 'Triopikeur',
    genus: 'Pokémon Taupe'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 6,
    name: 'Digdri',
    genus: 'Maulwurf'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 7,
    name: 'Dugtrio',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 8,
    name: 'Dugtrio',
    genus: 'Pokémon Talpa'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 9,
    name: 'Dugtrio',
    genus: 'Mole Pokémon'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 11,
    name: 'ダグトリオ',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 51,
    local_language_id: 12,
    name: '三地鼠',
    genus: '鼹鼠宝可梦'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 1,
    name: 'ニャース',
    genus: 'ばけねこポケモン'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 2,
    name: 'Nyarth',
    genus: ''
  },
  {
    pokemon_species_id: 52,
    local_language_id: 3,
    name: '나옹',
    genus: '요괴고양이포켓몬'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 4,
    name: '喵喵',
    genus: '妖怪貓寶可夢'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 5,
    name: 'Miaouss',
    genus: 'Pokémon Chadégout'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 6,
    name: 'Mauzi',
    genus: 'Katze'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 7,
    name: 'Meowth',
    genus: 'Pokémon Gato Araña'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 8,
    name: 'Meowth',
    genus: 'Pokémon Graffimiao'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 9,
    name: 'Meowth',
    genus: 'Scratch Cat Pokémon'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 11,
    name: 'ニャース',
    genus: 'ばけねこポケモン'
  },
  {
    pokemon_species_id: 52,
    local_language_id: 12,
    name: '喵喵',
    genus: '妖怪猫宝可梦'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 1,
    name: 'ペルシアン',
    genus: 'シャムネコポケモン'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 2,
    name: 'Persian',
    genus: ''
  },
  {
    pokemon_species_id: 53,
    local_language_id: 3,
    name: '페르시온',
    genus: '샴고양이포켓몬'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 4,
    name: '貓老大',
    genus: '暹羅貓寶可夢'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 5,
    name: 'Persian',
    genus: 'Pokémon Chadeville'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 6,
    name: 'Snobilikat',
    genus: 'Rassekatze'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 7,
    name: 'Persian',
    genus: 'Pokémon Gato Fino'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 8,
    name: 'Persian',
    genus: 'Pokémon Nobilgatto'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 9,
    name: 'Persian',
    genus: 'Classy Cat Pokémon'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 11,
    name: 'ペルシアン',
    genus: 'シャムネコポケモン'
  },
  {
    pokemon_species_id: 53,
    local_language_id: 12,
    name: '猫老大',
    genus: '暹罗猫宝可梦'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 1,
    name: 'コダック',
    genus: 'あひるポケモン'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 2,
    name: 'Koduck',
    genus: ''
  },
  {
    pokemon_species_id: 54,
    local_language_id: 3,
    name: '고라파덕',
    genus: '오리포켓몬'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 4,
    name: '可達鴨',
    genus: '鴨寶可夢'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 5,
    name: 'Psykokwak',
    genus: 'Pokémon Canard'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 6,
    name: 'Enton',
    genus: 'Ente'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 7,
    name: 'Psyduck',
    genus: 'Pokémon Pato'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 8,
    name: 'Psyduck',
    genus: 'Pokémon Papero'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 9,
    name: 'Psyduck',
    genus: 'Duck Pokémon'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 11,
    name: 'コダック',
    genus: 'あひるポケモン'
  },
  {
    pokemon_species_id: 54,
    local_language_id: 12,
    name: '可达鸭',
    genus: '鸭宝可梦'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 1,
    name: 'ゴルダック',
    genus: 'あひるポケモン'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 2,
    name: 'Golduck',
    genus: ''
  },
  {
    pokemon_species_id: 55,
    local_language_id: 3,
    name: '골덕',
    genus: '오리포켓몬'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 4,
    name: '哥達鴨',
    genus: '鴨寶可夢'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 5,
    name: 'Akwakwak',
    genus: 'Pokémon Canard'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 6,
    name: 'Entoron',
    genus: 'Ente'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 7,
    name: 'Golduck',
    genus: 'Pokémon Pato'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 8,
    name: 'Golduck',
    genus: 'Pokémon Papero'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 9,
    name: 'Golduck',
    genus: 'Duck Pokémon'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 11,
    name: 'ゴルダック',
    genus: 'あひるポケモン'
  },
  {
    pokemon_species_id: 55,
    local_language_id: 12,
    name: '哥达鸭',
    genus: '鸭宝可梦'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 1,
    name: 'マンキー',
    genus: 'ぶたざるポケモン'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 2,
    name: 'Mankey',
    genus: ''
  },
  {
    pokemon_species_id: 56,
    local_language_id: 3,
    name: '망키',
    genus: '돈숭이포켓몬'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 4,
    name: '猴怪',
    genus: '豬猴寶可夢'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 5,
    name: 'Férosinge',
    genus: 'Pokémon Porsinge'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 6,
    name: 'Menki',
    genus: 'Schwein/Affe'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 7,
    name: 'Mankey',
    genus: 'Pokémon Mono Cerdo'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 8,
    name: 'Mankey',
    genus: 'Pokémon Suinpanzé'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 9,
    name: 'Mankey',
    genus: 'Pig Monkey Pokémon'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 11,
    name: 'マンキー',
    genus: 'ぶたざるポケモン'
  },
  {
    pokemon_species_id: 56,
    local_language_id: 12,
    name: '猴怪',
    genus: '猪猴宝可梦'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 1,
    name: 'オコリザル',
    genus: 'ぶたざるポケモン'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 2,
    name: 'Okorizaru',
    genus: ''
  },
  {
    pokemon_species_id: 57,
    local_language_id: 3,
    name: '성원숭',
    genus: '돈숭이포켓몬'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 4,
    name: '火爆猴',
    genus: '豬猴寶可夢'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 5,
    name: 'Colossinge',
    genus: 'Pokémon Porsinge'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 6,
    name: 'Rasaff',
    genus: 'Schwein/Affe'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 7,
    name: 'Primeape',
    genus: 'Pokémon Mono Cerdo'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 8,
    name: 'Primeape',
    genus: 'Pokémon Suinpanzé'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 9,
    name: 'Primeape',
    genus: 'Pig Monkey Pokémon'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 11,
    name: 'オコリザル',
    genus: 'ぶたざるポケモン'
  },
  {
    pokemon_species_id: 57,
    local_language_id: 12,
    name: '火暴猴',
    genus: '猪猴宝可梦'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 1,
    name: 'ガーディ',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 2,
    name: 'Gardie',
    genus: ''
  },
  {
    pokemon_species_id: 58,
    local_language_id: 3,
    name: '가디',
    genus: '강아지포켓몬'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 4,
    name: '卡蒂狗',
    genus: '小狗寶可夢'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 5,
    name: 'Caninos',
    genus: 'Pokémon Chiot'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 6,
    name: 'Fukano',
    genus: 'Hund'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 7,
    name: 'Growlithe',
    genus: 'Pokémon Perrito'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 8,
    name: 'Growlithe',
    genus: 'Pokémon Cagnolino'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 9,
    name: 'Growlithe',
    genus: 'Puppy Pokémon'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 11,
    name: 'ガーディ',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 58,
    local_language_id: 12,
    name: '卡蒂狗',
    genus: '小狗宝可梦'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 1,
    name: 'ウインディ',
    genus: 'でんせつポケモン'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 2,
    name: 'Windie',
    genus: ''
  },
  {
    pokemon_species_id: 59,
    local_language_id: 3,
    name: '윈디',
    genus: '전설포켓몬'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 4,
    name: '風速狗',
    genus: '傳說寶可夢'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 5,
    name: 'Arcanin',
    genus: 'Pokémon Légendaire'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 6,
    name: 'Arkani',
    genus: 'Legendär'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 7,
    name: 'Arcanine',
    genus: 'Pokémon Legendario'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 8,
    name: 'Arcanine',
    genus: 'Pokémon Leggenda'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 9,
    name: 'Arcanine',
    genus: 'Legendary Pokémon'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 11,
    name: 'ウインディ',
    genus: 'でんせつポケモン'
  },
  {
    pokemon_species_id: 59,
    local_language_id: 12,
    name: '风速狗',
    genus: '传说宝可梦'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 1,
    name: 'ニョロモ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 2,
    name: 'Nyoromo',
    genus: ''
  },
  {
    pokemon_species_id: 60,
    local_language_id: 3,
    name: '발챙이',
    genus: '올챙이포켓몬'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 4,
    name: '蚊香蝌蚪',
    genus: '蝌蚪寶可夢'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 5,
    name: 'Ptitard',
    genus: 'Pokémon Têtard'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 6,
    name: 'Quapsel',
    genus: 'Kaulquappe'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 7,
    name: 'Poliwag',
    genus: 'Pokémon Renacuajo'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 8,
    name: 'Poliwag',
    genus: 'Pokémon Girino'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 9,
    name: 'Poliwag',
    genus: 'Tadpole Pokémon'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 11,
    name: 'ニョロモ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 60,
    local_language_id: 12,
    name: '蚊香蝌蚪',
    genus: '蝌蚪宝可梦'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 1,
    name: 'ニョロゾ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 2,
    name: 'Nyorozo',
    genus: ''
  },
  {
    pokemon_species_id: 61,
    local_language_id: 3,
    name: '슈륙챙이',
    genus: '올챙이포켓몬'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 4,
    name: '蚊香君',
    genus: '蝌蚪寶可夢'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 5,
    name: 'Têtarte',
    genus: 'Pokémon Têtard'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 6,
    name: 'Quaputzi',
    genus: 'Kaulquappe'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 7,
    name: 'Poliwhirl',
    genus: 'Pokémon Renacuajo'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 8,
    name: 'Poliwhirl',
    genus: 'Pokémon Girino'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 9,
    name: 'Poliwhirl',
    genus: 'Tadpole Pokémon'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 11,
    name: 'ニョロゾ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 61,
    local_language_id: 12,
    name: '蚊香君',
    genus: '蝌蚪宝可梦'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 1,
    name: 'ニョロボン',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 2,
    name: 'Nyorobon',
    genus: ''
  },
  {
    pokemon_species_id: 62,
    local_language_id: 3,
    name: '강챙이',
    genus: '올챙이포켓몬'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 4,
    name: '蚊香泳士',
    genus: '蝌蚪寶可夢'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 5,
    name: 'Tartard',
    genus: 'Pokémon Têtard'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 6,
    name: 'Quappo',
    genus: 'Kaulquappe'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 7,
    name: 'Poliwrath',
    genus: 'Pokémon Renacuajo'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 8,
    name: 'Poliwrath',
    genus: 'Pokémon Girino'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 9,
    name: 'Poliwrath',
    genus: 'Tadpole Pokémon'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 11,
    name: 'ニョロボン',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 62,
    local_language_id: 12,
    name: '蚊香泳士',
    genus: '蝌蚪宝可梦'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 1,
    name: 'ケーシィ',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 2,
    name: 'Casey',
    genus: ''
  },
  {
    pokemon_species_id: 63,
    local_language_id: 3,
    name: '캐이시',
    genus: '초능력포켓몬'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 4,
    name: '凱西',
    genus: '念力寶可夢'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 5,
    name: 'Abra',
    genus: 'Pokémon Psy'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 6,
    name: 'Abra',
    genus: 'Psi'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 7,
    name: 'Abra',
    genus: 'Pokémon Psi'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 8,
    name: 'Abra',
    genus: 'Pokémon Psico'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 9,
    name: 'Abra',
    genus: 'Psi Pokémon'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 11,
    name: 'ケーシィ',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 63,
    local_language_id: 12,
    name: '凯西',
    genus: '念力宝可梦'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 1,
    name: 'ユンゲラー',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 2,
    name: 'Yungerer',
    genus: ''
  },
  {
    pokemon_species_id: 64,
    local_language_id: 3,
    name: '윤겔라',
    genus: '초능력포켓몬'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 4,
    name: '勇基拉',
    genus: '念力寶可夢'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 5,
    name: 'Kadabra',
    genus: 'Pokémon Psy'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 6,
    name: 'Kadabra',
    genus: 'Psi'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 7,
    name: 'Kadabra',
    genus: 'Pokémon Psi'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 8,
    name: 'Kadabra',
    genus: 'Pokémon Psico'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 9,
    name: 'Kadabra',
    genus: 'Psi Pokémon'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 11,
    name: 'ユンゲラー',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 64,
    local_language_id: 12,
    name: '勇基拉',
    genus: '念力宝可梦'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 1,
    name: 'フーディン',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 2,
    name: 'Foodin',
    genus: ''
  },
  {
    pokemon_species_id: 65,
    local_language_id: 3,
    name: '후딘',
    genus: '초능력포켓몬'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 4,
    name: '胡地',
    genus: '念力寶可夢'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 5,
    name: 'Alakazam',
    genus: 'Pokémon Psy'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 6,
    name: 'Simsala',
    genus: 'Psi'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 7,
    name: 'Alakazam',
    genus: 'Pokémon Psi'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 8,
    name: 'Alakazam',
    genus: 'Pokémon Psico'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 9,
    name: 'Alakazam',
    genus: 'Psi Pokémon'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 11,
    name: 'フーディン',
    genus: 'ねんりきポケモン'
  },
  {
    pokemon_species_id: 65,
    local_language_id: 12,
    name: '胡地',
    genus: '念力宝可梦'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 1,
    name: 'ワンリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 2,
    name: 'Wanriky',
    genus: ''
  },
  {
    pokemon_species_id: 66,
    local_language_id: 3,
    name: '알통몬',
    genus: '괴력포켓몬'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 4,
    name: '腕力',
    genus: '怪力寶可夢'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 5,
    name: 'Machoc',
    genus: 'Pokémon Colosse'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 6,
    name: 'Machollo',
    genus: 'Kraftprotz'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 7,
    name: 'Machop',
    genus: 'Pokémon Superpoder'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 8,
    name: 'Machop',
    genus: 'Pokémon Megaforza'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 9,
    name: 'Machop',
    genus: 'Superpower Pokémon'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 11,
    name: 'ワンリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 66,
    local_language_id: 12,
    name: '腕力',
    genus: '怪力宝可梦'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 1,
    name: 'ゴーリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 2,
    name: 'Goriky',
    genus: ''
  },
  {
    pokemon_species_id: 67,
    local_language_id: 3,
    name: '근육몬',
    genus: '괴력포켓몬'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 4,
    name: '豪力',
    genus: '怪力寶可夢'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 5,
    name: 'Machopeur',
    genus: 'Pokémon Colosse'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 6,
    name: 'Maschock',
    genus: 'Kraftprotz'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 7,
    name: 'Machoke',
    genus: 'Pokémon Superpoder'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 8,
    name: 'Machoke',
    genus: 'Pokémon Megaforza'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 9,
    name: 'Machoke',
    genus: 'Superpower Pokémon'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 11,
    name: 'ゴーリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 67,
    local_language_id: 12,
    name: '豪力',
    genus: '怪力宝可梦'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 1,
    name: 'カイリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 2,
    name: 'Kairiky',
    genus: ''
  },
  {
    pokemon_species_id: 68,
    local_language_id: 3,
    name: '괴력몬',
    genus: '괴력포켓몬'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 4,
    name: '怪力',
    genus: '怪力寶可夢'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 5,
    name: 'Mackogneur',
    genus: 'Pokémon Colosse'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 6,
    name: 'Machomei',
    genus: 'Kraftprotz'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 7,
    name: 'Machamp',
    genus: 'Pokémon Superpoder'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 8,
    name: 'Machamp',
    genus: 'Pokémon Megaforza'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 9,
    name: 'Machamp',
    genus: 'Superpower Pokémon'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 11,
    name: 'カイリキー',
    genus: 'かいりきポケモン'
  },
  {
    pokemon_species_id: 68,
    local_language_id: 12,
    name: '怪力',
    genus: '怪力宝可梦'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 1,
    name: 'マダツボミ',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 2,
    name: 'Madatsubomi',
    genus: ''
  },
  {
    pokemon_species_id: 69,
    local_language_id: 3,
    name: '모다피',
    genus: '꽃포켓몬'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 4,
    name: '喇叭芽',
    genus: '花寶可夢'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 5,
    name: 'Chétiflor',
    genus: 'Pokémon Fleur'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 6,
    name: 'Knofensa',
    genus: 'Blume'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 7,
    name: 'Bellsprout',
    genus: 'Pokémon Flor'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 8,
    name: 'Bellsprout',
    genus: 'Pokémon Fiore'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 9,
    name: 'Bellsprout',
    genus: 'Flower Pokémon'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 11,
    name: 'マダツボミ',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 69,
    local_language_id: 12,
    name: '喇叭芽',
    genus: '花宝可梦'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 1,
    name: 'ウツドン',
    genus: 'ハエとりポケモン'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 2,
    name: 'Utsudon',
    genus: ''
  },
  {
    pokemon_species_id: 70,
    local_language_id: 3,
    name: '우츠동',
    genus: '파리잡이포켓몬'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 4,
    name: '口呆花',
    genus: '捕蠅寶可夢'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 5,
    name: 'Boustiflor',
    genus: 'Pokémon Carnivore'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 6,
    name: 'Ultrigaria',
    genus: 'Fliegentod'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 7,
    name: 'Weepinbell',
    genus: 'Pokémon Matamoscas'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 8,
    name: 'Weepinbell',
    genus: 'Pokémon Moschivoro'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 9,
    name: 'Weepinbell',
    genus: 'Flycatcher Pokémon'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 11,
    name: 'ウツドン',
    genus: 'ハエとりポケモン'
  },
  {
    pokemon_species_id: 70,
    local_language_id: 12,
    name: '口呆花',
    genus: '捕蝇宝可梦'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 1,
    name: 'ウツボット',
    genus: 'ハエとりポケモン'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 2,
    name: 'Utsubot',
    genus: ''
  },
  {
    pokemon_species_id: 71,
    local_language_id: 3,
    name: '우츠보트',
    genus: '파리잡이포켓몬'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 4,
    name: '大食花',
    genus: '捕蠅寶可夢'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 5,
    name: 'Empiflor',
    genus: 'Pokémon Carnivore'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 6,
    name: 'Sarzenia',
    genus: 'Fliegentod'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 7,
    name: 'Victreebel',
    genus: 'Pokémon Matamoscas'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 8,
    name: 'Victreebel',
    genus: 'Pokémon Moschivoro'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 9,
    name: 'Victreebel',
    genus: 'Flycatcher Pokémon'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 11,
    name: 'ウツボット',
    genus: 'ハエとりポケモン'
  },
  {
    pokemon_species_id: 71,
    local_language_id: 12,
    name: '大食花',
    genus: '捕蝇宝可梦'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 1,
    name: 'メノクラゲ',
    genus: 'くらげポケモン'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 2,
    name: 'Menokurage',
    genus: ''
  },
  {
    pokemon_species_id: 72,
    local_language_id: 3,
    name: '왕눈해',
    genus: '해파리포켓몬'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 4,
    name: '瑪瑙水母',
    genus: '水母寶可夢'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 5,
    name: 'Tentacool',
    genus: 'Pokémon Mollusque'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 6,
    name: 'Tentacha',
    genus: 'Qualle'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 7,
    name: 'Tentacool',
    genus: 'Pokémon Medusa'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 8,
    name: 'Tentacool',
    genus: 'Pokémon Medusa'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 9,
    name: 'Tentacool',
    genus: 'Jellyfish Pokémon'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 11,
    name: 'メノクラゲ',
    genus: 'くらげポケモン'
  },
  {
    pokemon_species_id: 72,
    local_language_id: 12,
    name: '玛瑙水母',
    genus: '水母宝可梦'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 1,
    name: 'ドククラゲ',
    genus: 'くらげポケモン'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 2,
    name: 'Dokukurage',
    genus: ''
  },
  {
    pokemon_species_id: 73,
    local_language_id: 3,
    name: '독파리',
    genus: '해파리포켓몬'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 4,
    name: '毒刺水母',
    genus: '水母寶可夢'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 5,
    name: 'Tentacruel',
    genus: 'Pokémon Mollusque'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 6,
    name: 'Tentoxa',
    genus: 'Qualle'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 7,
    name: 'Tentacruel',
    genus: 'Pokémon Medusa'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 8,
    name: 'Tentacruel',
    genus: 'Pokémon Medusa'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 9,
    name: 'Tentacruel',
    genus: 'Jellyfish Pokémon'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 11,
    name: 'ドククラゲ',
    genus: 'くらげポケモン'
  },
  {
    pokemon_species_id: 73,
    local_language_id: 12,
    name: '毒刺水母',
    genus: '水母宝可梦'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 1,
    name: 'イシツブテ',
    genus: 'がんせきポケモン'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 2,
    name: 'Isitsubute',
    genus: ''
  },
  {
    pokemon_species_id: 74,
    local_language_id: 3,
    name: '꼬마돌',
    genus: '암석포켓몬'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 4,
    name: '小拳石',
    genus: '岩石寶可夢'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 5,
    name: 'Racaillou',
    genus: 'Pokémon Roche'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 6,
    name: 'Kleinstein',
    genus: 'Gestein'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 7,
    name: 'Geodude',
    genus: 'Pokémon Roca'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 8,
    name: 'Geodude',
    genus: 'Pokémon Roccia'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 9,
    name: 'Geodude',
    genus: 'Rock Pokémon'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 11,
    name: 'イシツブテ',
    genus: 'がんせきポケモン'
  },
  {
    pokemon_species_id: 74,
    local_language_id: 12,
    name: '小拳石',
    genus: '岩石宝可梦'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 1,
    name: 'ゴローン',
    genus: 'がんせきポケモン'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 2,
    name: 'Golone',
    genus: ''
  },
  {
    pokemon_species_id: 75,
    local_language_id: 3,
    name: '데구리',
    genus: '암석포켓몬'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 4,
    name: '隆隆石',
    genus: '岩石寶可夢'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 5,
    name: 'Gravalanch',
    genus: 'Pokémon Roche'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 6,
    name: 'Georok',
    genus: 'Gestein'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 7,
    name: 'Graveler',
    genus: 'Pokémon Roca'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 8,
    name: 'Graveler',
    genus: 'Pokémon Roccia'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 9,
    name: 'Graveler',
    genus: 'Rock Pokémon'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 11,
    name: 'ゴローン',
    genus: 'がんせきポケモン'
  },
  {
    pokemon_species_id: 75,
    local_language_id: 12,
    name: '隆隆石',
    genus: '岩石宝可梦'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 1,
    name: 'ゴローニャ',
    genus: 'メガトンポケモン'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 2,
    name: 'Golonya',
    genus: ''
  },
  {
    pokemon_species_id: 76,
    local_language_id: 3,
    name: '딱구리',
    genus: '메가톤포켓몬'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 4,
    name: '隆隆岩',
    genus: '重量級寶可夢'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 5,
    name: 'Grolem',
    genus: 'Pokémon Titanesque'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 6,
    name: 'Geowaz',
    genus: 'Urgestein'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 7,
    name: 'Golem',
    genus: 'Pokémon Megatón'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 8,
    name: 'Golem',
    genus: 'Pokémon Megatone'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 9,
    name: 'Golem',
    genus: 'Megaton Pokémon'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 11,
    name: 'ゴローニャ',
    genus: 'メガトンポケモン'
  },
  {
    pokemon_species_id: 76,
    local_language_id: 12,
    name: '隆隆岩',
    genus: '重量级宝可梦'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 1,
    name: 'ポニータ',
    genus: 'ひのうまポケモン'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 2,
    name: 'Ponyta',
    genus: ''
  },
  {
    pokemon_species_id: 77,
    local_language_id: 3,
    name: '포니타',
    genus: '불의말포켓몬'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 4,
    name: '小火馬',
    genus: '火馬寶可夢'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 5,
    name: 'Ponyta',
    genus: 'Pokémon Cheval Feu'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 6,
    name: 'Ponita',
    genus: 'Feuerpferd'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 7,
    name: 'Ponyta',
    genus: 'Pokémon Caballo F.'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 8,
    name: 'Ponyta',
    genus: 'Pokémon Cavalfuoco'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 9,
    name: 'Ponyta',
    genus: 'Fire Horse Pokémon'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 11,
    name: 'ポニータ',
    genus: 'ひのうまポケモン'
  },
  {
    pokemon_species_id: 77,
    local_language_id: 12,
    name: '小火马',
    genus: '火马宝可梦'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 1,
    name: 'ギャロップ',
    genus: 'ひのうまポケモン'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 2,
    name: 'Gallop',
    genus: ''
  },
  {
    pokemon_species_id: 78,
    local_language_id: 3,
    name: '날쌩마',
    genus: '불의말포켓몬'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 4,
    name: '烈焰馬',
    genus: '火馬寶可夢'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 5,
    name: 'Galopa',
    genus: 'Pokémon Cheval Feu'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 6,
    name: 'Gallopa',
    genus: 'Feuerpferd'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 7,
    name: 'Rapidash',
    genus: 'Pokémon Caballo F.'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 8,
    name: 'Rapidash',
    genus: 'Pokémon Cavalfuoco'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 9,
    name: 'Rapidash',
    genus: 'Fire Horse Pokémon'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 11,
    name: 'ギャロップ',
    genus: 'ひのうまポケモン'
  },
  {
    pokemon_species_id: 78,
    local_language_id: 12,
    name: '烈焰马',
    genus: '火马宝可梦'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 1,
    name: 'ヤドン',
    genus: 'まぬけポケモン'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 2,
    name: 'Yadon',
    genus: ''
  },
  {
    pokemon_species_id: 79,
    local_language_id: 3,
    name: '야돈',
    genus: '얼간이포켓몬'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 4,
    name: '呆呆獸',
    genus: '憨憨寶可夢'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 5,
    name: 'Ramoloss',
    genus: 'Pokémon Crétin'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 6,
    name: 'Flegmon',
    genus: 'Schnarcher'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 7,
    name: 'Slowpoke',
    genus: 'Pokémon Atontado'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 8,
    name: 'Slowpoke',
    genus: 'Pokémon Ronfone'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 9,
    name: 'Slowpoke',
    genus: 'Dopey Pokémon'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 11,
    name: 'ヤドン',
    genus: 'まぬけポケモン'
  },
  {
    pokemon_species_id: 79,
    local_language_id: 12,
    name: '呆呆兽',
    genus: '憨憨宝可梦'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 1,
    name: 'ヤドラン',
    genus: 'やどかりポケモン'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 2,
    name: 'Yadoran',
    genus: ''
  },
  {
    pokemon_species_id: 80,
    local_language_id: 3,
    name: '야도란',
    genus: '기생포켓몬'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 4,
    name: '呆殼獸',
    genus: '寄居蟹寶可夢'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 5,
    name: 'Flagadoss',
    genus: 'Pokémon Symbiose'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 6,
    name: 'Lahmus',
    genus: 'Symbiose'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 7,
    name: 'Slowbro',
    genus: 'Pokémon Ermitaño'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 8,
    name: 'Slowbro',
    genus: 'Pokémon Paguro'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 9,
    name: 'Slowbro',
    genus: 'Hermit Crab Pokémon'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 11,
    name: 'ヤドラン',
    genus: 'やどかりポケモン'
  },
  {
    pokemon_species_id: 80,
    local_language_id: 12,
    name: '呆壳兽',
    genus: '寄居蟹宝可梦'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 1,
    name: 'コイル',
    genus: 'じしゃくポケモン'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 2,
    name: 'Coil',
    genus: ''
  },
  {
    pokemon_species_id: 81,
    local_language_id: 3,
    name: '코일',
    genus: '자석포켓몬'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 4,
    name: '小磁怪',
    genus: '磁鐵寶可夢'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 5,
    name: 'Magnéti',
    genus: 'Pokémon Magnétique'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 6,
    name: 'Magnetilo',
    genus: 'Magnet'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 7,
    name: 'Magnemite',
    genus: 'Pokémon Imán'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 8,
    name: 'Magnemite',
    genus: 'Pokémon Calamita'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 9,
    name: 'Magnemite',
    genus: 'Magnet Pokémon'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 11,
    name: 'コイル',
    genus: 'じしゃくポケモン'
  },
  {
    pokemon_species_id: 81,
    local_language_id: 12,
    name: '小磁怪',
    genus: '磁铁宝可梦'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 1,
    name: 'レアコイル',
    genus: 'じしゃくポケモン'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 2,
    name: 'Rarecoil',
    genus: ''
  },
  {
    pokemon_species_id: 82,
    local_language_id: 3,
    name: '레어코일',
    genus: '자석포켓몬'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 4,
    name: '三合一磁怪',
    genus: '磁鐵寶可夢'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 5,
    name: 'Magnéton',
    genus: 'Pokémon Magnétique'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 6,
    name: 'Magneton',
    genus: 'Magnet'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 7,
    name: 'Magneton',
    genus: 'Pokémon Imán'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 8,
    name: 'Magneton',
    genus: 'Pokémon Calamita'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 9,
    name: 'Magneton',
    genus: 'Magnet Pokémon'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 11,
    name: 'レアコイル',
    genus: 'じしゃくポケモン'
  },
  {
    pokemon_species_id: 82,
    local_language_id: 12,
    name: '三合一磁怪',
    genus: '磁铁宝可梦'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 1,
    name: 'カモネギ',
    genus: 'かるがもポケモン'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 2,
    name: 'Kamonegi',
    genus: ''
  },
  {
    pokemon_species_id: 83,
    local_language_id: 3,
    name: '파오리',
    genus: '천둥오리포켓몬'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 4,
    name: '大蔥鴨',
    genus: '黃嘴鴨寶可夢'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 5,
    name: 'Canarticho',
    genus: 'Pokémon Canard Fou'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 6,
    name: 'Porenta',
    genus: 'Wildente'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 7,
    name: 'Farfetch’d',
    genus: 'Pokémon Pato Salvaje'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 8,
    name: 'Farfetch’d',
    genus: 'Pokémon Selvanatra'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 9,
    name: 'Farfetch’d',
    genus: 'Wild Duck Pokémon'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 11,
    name: 'カモネギ',
    genus: 'かるがもポケモン'
  },
  {
    pokemon_species_id: 83,
    local_language_id: 12,
    name: '大葱鸭',
    genus: '黄嘴鸭宝可梦'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 1,
    name: 'ドードー',
    genus: 'ふたごどりポケモン'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 2,
    name: 'Dodo',
    genus: ''
  },
  {
    pokemon_species_id: 84,
    local_language_id: 3,
    name: '두두',
    genus: '쌍둥이새포켓몬'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 4,
    name: '嘟嘟',
    genus: '兩頭鳥寶可夢'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 5,
    name: 'Doduo',
    genus: 'Pokémon Duoiseau'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 6,
    name: 'Dodu',
    genus: 'Duovogel'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 7,
    name: 'Doduo',
    genus: 'Pokémon Ave Gemela'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 8,
    name: 'Doduo',
    genus: 'Pokémon Biuccello'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 9,
    name: 'Doduo',
    genus: 'Twin Bird Pokémon'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 11,
    name: 'ドードー',
    genus: 'ふたごどりポケモン'
  },
  {
    pokemon_species_id: 84,
    local_language_id: 12,
    name: '嘟嘟',
    genus: '两头鸟宝可梦'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 1,
    name: 'ドードリオ',
    genus: 'みつごどりポケモン'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 2,
    name: 'Dodorio',
    genus: ''
  },
  {
    pokemon_species_id: 85,
    local_language_id: 3,
    name: '두트리오',
    genus: '세쌍둥이새포켓몬'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 4,
    name: '嘟嘟利',
    genus: '三頭鳥寶可夢'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 5,
    name: 'Dodrio',
    genus: 'Pokémon Trioiseau'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 6,
    name: 'Dodri',
    genus: 'Trivogel'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 7,
    name: 'Dodrio',
    genus: 'Pokémon Ave Triple'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 8,
    name: 'Dodrio',
    genus: 'Pokémon Triuccello'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 9,
    name: 'Dodrio',
    genus: 'Triple Bird Pokémon'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 11,
    name: 'ドードリオ',
    genus: 'みつごどりポケモン'
  },
  {
    pokemon_species_id: 85,
    local_language_id: 12,
    name: '嘟嘟利',
    genus: '三头鸟宝可梦'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 1,
    name: 'パウワウ',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 2,
    name: 'Pawou',
    genus: ''
  },
  {
    pokemon_species_id: 86,
    local_language_id: 3,
    name: '쥬쥬',
    genus: '강치포켓몬'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 4,
    name: '小海獅',
    genus: '海獅寶可夢'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 5,
    name: 'Otaria',
    genus: 'Pokémon Otarie'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 6,
    name: 'Jurob',
    genus: 'Seehund'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 7,
    name: 'Seel',
    genus: 'Pokémon León Marino'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 8,
    name: 'Seel',
    genus: 'Pokémon Otaria'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 9,
    name: 'Seel',
    genus: 'Sea Lion Pokémon'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 11,
    name: 'パウワウ',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 86,
    local_language_id: 12,
    name: '小海狮',
    genus: '海狮宝可梦'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 1,
    name: 'ジュゴン',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 2,
    name: 'Jugon',
    genus: ''
  },
  {
    pokemon_species_id: 87,
    local_language_id: 3,
    name: '쥬레곤',
    genus: '강치포켓몬'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 4,
    name: '白海獅',
    genus: '海獅寶可夢'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 5,
    name: 'Lamantine',
    genus: 'Pokémon Otarie'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 6,
    name: 'Jugong',
    genus: 'Seehund'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 7,
    name: 'Dewgong',
    genus: 'Pokémon León Marino'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 8,
    name: 'Dewgong',
    genus: 'Pokémon Otaria'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 9,
    name: 'Dewgong',
    genus: 'Sea Lion Pokémon'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 11,
    name: 'ジュゴン',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 87,
    local_language_id: 12,
    name: '白海狮',
    genus: '海狮宝可梦'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 1,
    name: 'ベトベター',
    genus: 'ヘドロポケモン'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 2,
    name: 'Betbeter',
    genus: ''
  },
  {
    pokemon_species_id: 88,
    local_language_id: 3,
    name: '질퍽이',
    genus: '진흙포켓몬'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 4,
    name: '臭泥',
    genus: '污泥寶可夢'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 5,
    name: 'Tadmorv',
    genus: 'Pokémon Dégueu'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 6,
    name: 'Sleima',
    genus: 'Schlamm'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 7,
    name: 'Grimer',
    genus: 'Pokémon Lodo'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 8,
    name: 'Grimer',
    genus: 'Pokémon Melma'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 9,
    name: 'Grimer',
    genus: 'Sludge Pokémon'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 11,
    name: 'ベトベター',
    genus: 'ヘドロポケモン'
  },
  {
    pokemon_species_id: 88,
    local_language_id: 12,
    name: '臭泥',
    genus: '污泥宝可梦'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 1,
    name: 'ベトベトン',
    genus: 'ヘドロポケモン'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 2,
    name: 'Betbeton',
    genus: ''
  },
  {
    pokemon_species_id: 89,
    local_language_id: 3,
    name: '질뻐기',
    genus: '진흙포켓몬'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 4,
    name: '臭臭泥',
    genus: '污泥寶可夢'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 5,
    name: 'Grotadmorv',
    genus: 'Pokémon Dégueu'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 6,
    name: 'Sleimok',
    genus: 'Schlamm'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 7,
    name: 'Muk',
    genus: 'Pokémon Lodo'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 8,
    name: 'Muk',
    genus: 'Pokémon Melma'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 9,
    name: 'Muk',
    genus: 'Sludge Pokémon'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 11,
    name: 'ベトベトン',
    genus: 'ヘドロポケモン'
  },
  {
    pokemon_species_id: 89,
    local_language_id: 12,
    name: '臭臭泥',
    genus: '污泥宝可梦'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 1,
    name: 'シェルダー',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 2,
    name: 'Shellder',
    genus: ''
  },
  {
    pokemon_species_id: 90,
    local_language_id: 3,
    name: '셀러',
    genus: '두조개포켓몬'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 4,
    name: '大舌貝',
    genus: '雙殼貝寶可夢'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 5,
    name: 'Kokiyas',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 6,
    name: 'Muschas',
    genus: 'Muschel'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 7,
    name: 'Shellder',
    genus: 'Pokémon Bivalvo'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 8,
    name: 'Shellder',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 9,
    name: 'Shellder',
    genus: 'Bivalve Pokémon'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 11,
    name: 'シェルダー',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 90,
    local_language_id: 12,
    name: '大舌贝',
    genus: '双壳贝宝可梦'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 1,
    name: 'パルシェン',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 2,
    name: 'Parshen',
    genus: ''
  },
  {
    pokemon_species_id: 91,
    local_language_id: 3,
    name: '파르셀',
    genus: '두조개포켓몬'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 4,
    name: '刺甲貝',
    genus: '雙殼貝寶可夢'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 5,
    name: 'Crustabri',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 6,
    name: 'Austos',
    genus: 'Muschel'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 7,
    name: 'Cloyster',
    genus: 'Pokémon Bivalvo'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 8,
    name: 'Cloyster',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 9,
    name: 'Cloyster',
    genus: 'Bivalve Pokémon'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 11,
    name: 'パルシェン',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 91,
    local_language_id: 12,
    name: '刺甲贝',
    genus: '双壳贝宝可梦'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 1,
    name: 'ゴース',
    genus: 'ガスじょうポケモン'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 2,
    name: 'Ghos',
    genus: ''
  },
  {
    pokemon_species_id: 92,
    local_language_id: 3,
    name: '고오스',
    genus: '가스포켓몬'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 4,
    name: '鬼斯',
    genus: '氣體狀寶可夢'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 5,
    name: 'Fantominus',
    genus: 'Pokémon Gaz'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 6,
    name: 'Nebulak',
    genus: 'Gas'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 7,
    name: 'Gastly',
    genus: 'Pokémon Gas'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 8,
    name: 'Gastly',
    genus: 'Pokémon Gas'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 9,
    name: 'Gastly',
    genus: 'Gas Pokémon'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 11,
    name: 'ゴース',
    genus: 'ガスじょうポケモン'
  },
  {
    pokemon_species_id: 92,
    local_language_id: 12,
    name: '鬼斯',
    genus: '气体状宝可梦'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 1,
    name: 'ゴースト',
    genus: 'ガスじょうポケモン'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 2,
    name: 'Ghost',
    genus: ''
  },
  {
    pokemon_species_id: 93,
    local_language_id: 3,
    name: '고우스트',
    genus: '가스포켓몬'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 4,
    name: '鬼斯通',
    genus: '氣體狀寶可夢'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 5,
    name: 'Spectrum',
    genus: 'Pokémon Gaz'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 6,
    name: 'Alpollo',
    genus: 'Gas'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 7,
    name: 'Haunter',
    genus: 'Pokémon Gas'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 8,
    name: 'Haunter',
    genus: 'Pokémon Gas'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 9,
    name: 'Haunter',
    genus: 'Gas Pokémon'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 11,
    name: 'ゴースト',
    genus: 'ガスじょうポケモン'
  },
  {
    pokemon_species_id: 93,
    local_language_id: 12,
    name: '鬼斯通',
    genus: '气体状宝可梦'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 1,
    name: 'ゲンガー',
    genus: 'シャドーポケモン'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 2,
    name: 'Gangar',
    genus: ''
  },
  {
    pokemon_species_id: 94,
    local_language_id: 3,
    name: '팬텀',
    genus: '그림자포켓몬'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 4,
    name: '耿鬼',
    genus: '影子寶可夢'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 5,
    name: 'Ectoplasma',
    genus: 'Pokémon Ombre'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 6,
    name: 'Gengar',
    genus: 'Schatten'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 7,
    name: 'Gengar',
    genus: 'Pokémon Sombra'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 8,
    name: 'Gengar',
    genus: 'Pokémon Ombra'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 9,
    name: 'Gengar',
    genus: 'Shadow Pokémon'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 11,
    name: 'ゲンガー',
    genus: 'シャドーポケモン'
  },
  {
    pokemon_species_id: 94,
    local_language_id: 12,
    name: '耿鬼',
    genus: '影子宝可梦'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 1,
    name: 'イワーク',
    genus: 'いわへびポケモン'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 2,
    name: 'Iwark',
    genus: ''
  },
  {
    pokemon_species_id: 95,
    local_language_id: 3,
    name: '롱스톤',
    genus: '돌뱀포켓몬'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 4,
    name: '大岩蛇',
    genus: '岩蛇寶可夢'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 5,
    name: 'Onix',
    genus: 'Pokémon Serpenroc'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 6,
    name: 'Onix',
    genus: 'Felsnatter'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 7,
    name: 'Onix',
    genus: 'Pokémon Serp. Roca'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 8,
    name: 'Onix',
    genus: 'Pokémon Serpesasso'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 9,
    name: 'Onix',
    genus: 'Rock Snake Pokémon'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 11,
    name: 'イワーク',
    genus: 'いわへびポケモン'
  },
  {
    pokemon_species_id: 95,
    local_language_id: 12,
    name: '大岩蛇',
    genus: '岩蛇宝可梦'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 1,
    name: 'スリープ',
    genus: 'さいみんポケモン'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 2,
    name: 'Sleep',
    genus: ''
  },
  {
    pokemon_species_id: 96,
    local_language_id: 3,
    name: '슬리프',
    genus: '최면포켓몬'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 4,
    name: '催眠貘',
    genus: '催眠寶可夢'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 5,
    name: 'Soporifik',
    genus: 'Pokémon Hypnose'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 6,
    name: 'Traumato',
    genus: 'Hypnose'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 7,
    name: 'Drowzee',
    genus: 'Pokémon Hipnosis'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 8,
    name: 'Drowzee',
    genus: 'Pokémon Ipnosi'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 9,
    name: 'Drowzee',
    genus: 'Hypnosis Pokémon'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 11,
    name: 'スリープ',
    genus: 'さいみんポケモン'
  },
  {
    pokemon_species_id: 96,
    local_language_id: 12,
    name: '催眠貘',
    genus: '催眠宝可梦'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 1,
    name: 'スリーパー',
    genus: 'さいみんポケモン'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 2,
    name: 'Sleeper',
    genus: ''
  },
  {
    pokemon_species_id: 97,
    local_language_id: 3,
    name: '슬리퍼',
    genus: '최면포켓몬'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 4,
    name: '引夢貘人',
    genus: '催眠寶可夢'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 5,
    name: 'Hypnomade',
    genus: 'Pokémon Hypnose'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 6,
    name: 'Hypno',
    genus: 'Hypnose'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 7,
    name: 'Hypno',
    genus: 'Pokémon Hipnosis'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 8,
    name: 'Hypno',
    genus: 'Pokémon Ipnosi'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 9,
    name: 'Hypno',
    genus: 'Hypnosis Pokémon'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 11,
    name: 'スリーパー',
    genus: 'さいみんポケモン'
  },
  {
    pokemon_species_id: 97,
    local_language_id: 12,
    name: '引梦貘人',
    genus: '催眠宝可梦'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 1,
    name: 'クラブ',
    genus: 'さわがにポケモン'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 2,
    name: 'Crab',
    genus: ''
  },
  {
    pokemon_species_id: 98,
    local_language_id: 3,
    name: '크랩',
    genus: '게포켓몬'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 4,
    name: '大鉗蟹',
    genus: '清水蟹寶可夢'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 5,
    name: 'Krabby',
    genus: 'Pokémon Doux Crabe'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 6,
    name: 'Krabby',
    genus: 'Krabbe'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 7,
    name: 'Krabby',
    genus: 'Pokémon Cangrejo'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 8,
    name: 'Krabby',
    genus: 'Pokémon Granchio'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 9,
    name: 'Krabby',
    genus: 'River Crab Pokémon'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 11,
    name: 'クラブ',
    genus: 'さわがにポケモン'
  },
  {
    pokemon_species_id: 98,
    local_language_id: 12,
    name: '大钳蟹',
    genus: '清水蟹宝可梦'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 1,
    name: 'キングラー',
    genus: 'はさみポケモン'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 2,
    name: 'Kingler',
    genus: ''
  },
  {
    pokemon_species_id: 99,
    local_language_id: 3,
    name: '킹크랩',
    genus: '집게포켓몬'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 4,
    name: '巨鉗蟹',
    genus: '鉗子寶可夢'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 5,
    name: 'Krabboss',
    genus: 'Pokémon Pince'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 6,
    name: 'Kingler',
    genus: 'Kneifer'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 7,
    name: 'Kingler',
    genus: 'Pokémon Tenaza'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 8,
    name: 'Kingler',
    genus: 'Pokémon Chela'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 9,
    name: 'Kingler',
    genus: 'Pincer Pokémon'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 11,
    name: 'キングラー',
    genus: 'はさみポケモン'
  },
  {
    pokemon_species_id: 99,
    local_language_id: 12,
    name: '巨钳蟹',
    genus: '钳子宝可梦'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 1,
    name: 'ビリリダマ',
    genus: 'ボールポケモン'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 2,
    name: 'Biriridama',
    genus: ''
  },
  {
    pokemon_species_id: 100,
    local_language_id: 3,
    name: '찌리리공',
    genus: '볼포켓몬'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 4,
    name: '霹靂電球',
    genus: '球寶可夢'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 5,
    name: 'Voltorbe',
    genus: 'Pokémon Balle'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 6,
    name: 'Voltobal',
    genus: 'Ball'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 7,
    name: 'Voltorb',
    genus: 'Pokémon Bola'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 8,
    name: 'Voltorb',
    genus: 'Pokémon Ball'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 9,
    name: 'Voltorb',
    genus: 'Ball Pokémon'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 11,
    name: 'ビリリダマ',
    genus: 'ボールポケモン'
  },
  {
    pokemon_species_id: 100,
    local_language_id: 12,
    name: '霹雳电球',
    genus: '球宝可梦'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 1,
    name: 'マルマイン',
    genus: 'ボールポケモン'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 2,
    name: 'Marumine',
    genus: ''
  },
  {
    pokemon_species_id: 101,
    local_language_id: 3,
    name: '붐볼',
    genus: '볼포켓몬'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 4,
    name: '頑皮雷彈',
    genus: '球寶可夢'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 5,
    name: 'Électrode',
    genus: 'Pokémon Balle'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 6,
    name: 'Lektrobal',
    genus: 'Ball'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 7,
    name: 'Electrode',
    genus: 'Pokémon Bola'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 8,
    name: 'Electrode',
    genus: 'Pokémon Ball'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 9,
    name: 'Electrode',
    genus: 'Ball Pokémon'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 11,
    name: 'マルマイン',
    genus: 'ボールポケモン'
  },
  {
    pokemon_species_id: 101,
    local_language_id: 12,
    name: '顽皮雷弹',
    genus: '球宝可梦'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 1,
    name: 'タマタマ',
    genus: 'たまごポケモン'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 2,
    name: 'Tamatama',
    genus: ''
  },
  {
    pokemon_species_id: 102,
    local_language_id: 3,
    name: '아라리',
    genus: '알포켓몬'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 4,
    name: '蛋蛋',
    genus: '蛋寶可夢'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 5,
    name: 'Noeunoeuf',
    genus: 'Pokémon Œuf'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 6,
    name: 'Owei',
    genus: 'Ei'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 7,
    name: 'Exeggcute',
    genus: 'Pokémon Huevo'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 8,
    name: 'Exeggcute',
    genus: 'Pokémon Uovo'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 9,
    name: 'Exeggcute',
    genus: 'Egg Pokémon'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 11,
    name: 'タマタマ',
    genus: 'たまごポケモン'
  },
  {
    pokemon_species_id: 102,
    local_language_id: 12,
    name: '蛋蛋',
    genus: '蛋宝可梦'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 1,
    name: 'ナッシー',
    genus: 'やしのみポケモン'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 2,
    name: 'Nassy',
    genus: ''
  },
  {
    pokemon_species_id: 103,
    local_language_id: 3,
    name: '나시',
    genus: '야자열매포켓몬'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 4,
    name: '椰蛋樹',
    genus: '椰子寶可夢'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 5,
    name: 'Noadkoko',
    genus: 'Pokémon Fruitpalme'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 6,
    name: 'Kokowei',
    genus: 'Palmfrucht'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 7,
    name: 'Exeggutor',
    genus: 'Pokémon Coco'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 8,
    name: 'Exeggutor',
    genus: 'Pokémon Nocecocco'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 9,
    name: 'Exeggutor',
    genus: 'Coconut Pokémon'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 11,
    name: 'ナッシー',
    genus: 'やしのみポケモン'
  },
  {
    pokemon_species_id: 103,
    local_language_id: 12,
    name: '椰蛋树',
    genus: '椰子宝可梦'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 1,
    name: 'カラカラ',
    genus: 'こどくポケモン'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 2,
    name: 'Karakara',
    genus: ''
  },
  {
    pokemon_species_id: 104,
    local_language_id: 3,
    name: '탕구리',
    genus: '고독포켓몬'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 4,
    name: '卡拉卡拉',
    genus: '孤獨寶可夢'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 5,
    name: 'Osselait',
    genus: 'Pokémon Solitaire'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 6,
    name: 'Tragosso',
    genus: 'Einsam'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 7,
    name: 'Cubone',
    genus: 'Pokémon Solitario'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 8,
    name: 'Cubone',
    genus: 'Pokémon Solitario'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 9,
    name: 'Cubone',
    genus: 'Lonely Pokémon'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 11,
    name: 'カラカラ',
    genus: 'こどくポケモン'
  },
  {
    pokemon_species_id: 104,
    local_language_id: 12,
    name: '卡拉卡拉',
    genus: '孤独宝可梦'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 1,
    name: 'ガラガラ',
    genus: 'ほねずきポケモン'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 2,
    name: 'Garagara',
    genus: ''
  },
  {
    pokemon_species_id: 105,
    local_language_id: 3,
    name: '텅구리',
    genus: '뼈다귀포켓몬'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 4,
    name: '嘎啦嘎啦',
    genus: '愛骨寶可夢'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 5,
    name: 'Ossatueur',
    genus: 'Pokémon Gard’Os'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 6,
    name: 'Knogga',
    genus: 'Knochenfan'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 7,
    name: 'Marowak',
    genus: 'Pokémon Apilahueso'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 8,
    name: 'Marowak',
    genus: 'Pokémon Guardaossi'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 9,
    name: 'Marowak',
    genus: 'Bone Keeper Pokémon'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 11,
    name: 'ガラガラ',
    genus: 'ほねずきポケモン'
  },
  {
    pokemon_species_id: 105,
    local_language_id: 12,
    name: '嘎啦嘎啦',
    genus: '爱骨宝可梦'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 1,
    name: 'サワムラー',
    genus: 'キックポケモン'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 2,
    name: 'Sawamular',
    genus: ''
  },
  {
    pokemon_species_id: 106,
    local_language_id: 3,
    name: '시라소몬',
    genus: '킥포켓몬'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 4,
    name: '飛腿郎',
    genus: '踢腿寶可夢'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 5,
    name: 'Kicklee',
    genus: 'Pokémon Latteur'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 6,
    name: 'Kicklee',
    genus: 'Kicker'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 7,
    name: 'Hitmonlee',
    genus: 'Pokémon Patada'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 8,
    name: 'Hitmonlee',
    genus: 'Pokémon Tiracalci'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 9,
    name: 'Hitmonlee',
    genus: 'Kicking Pokémon'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 11,
    name: 'サワムラー',
    genus: 'キックポケモン'
  },
  {
    pokemon_species_id: 106,
    local_language_id: 12,
    name: '飞腿郎',
    genus: '踢腿宝可梦'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 1,
    name: 'エビワラー',
    genus: 'パンチポケモン'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 2,
    name: 'Ebiwalar',
    genus: ''
  },
  {
    pokemon_species_id: 107,
    local_language_id: 3,
    name: '홍수몬',
    genus: '펀치포켓몬'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 4,
    name: '快拳郎',
    genus: '拳擊寶可夢'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 5,
    name: 'Tygnon',
    genus: 'Pokémon Puncheur'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 6,
    name: 'Nockchan',
    genus: 'Puncher'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 7,
    name: 'Hitmonchan',
    genus: 'Pokémon Puñetazo'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 8,
    name: 'Hitmonchan',
    genus: 'Pokémon Tirapugni'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 9,
    name: 'Hitmonchan',
    genus: 'Punching Pokémon'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 11,
    name: 'エビワラー',
    genus: 'パンチポケモン'
  },
  {
    pokemon_species_id: 107,
    local_language_id: 12,
    name: '快拳郎',
    genus: '拳击宝可梦'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 1,
    name: 'ベロリンガ',
    genus: 'なめまわしポケモン'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 2,
    name: 'Beroringa',
    genus: ''
  },
  {
    pokemon_species_id: 108,
    local_language_id: 3,
    name: '내루미',
    genus: '핥기포켓몬'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 4,
    name: '大舌頭',
    genus: '舔舔寶可夢'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 5,
    name: 'Excelangue',
    genus: 'Pokémon Lécheur'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 6,
    name: 'Schlurp',
    genus: 'Schlecker'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 7,
    name: 'Lickitung',
    genus: 'Pokémon Lametazo'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 8,
    name: 'Lickitung',
    genus: 'Pokémon Linguaccia'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 9,
    name: 'Lickitung',
    genus: 'Licking Pokémon'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 11,
    name: 'ベロリンガ',
    genus: 'なめまわしポケモン'
  },
  {
    pokemon_species_id: 108,
    local_language_id: 12,
    name: '大舌头',
    genus: '舔舔宝可梦'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 1,
    name: 'ドガース',
    genus: 'どくガスポケモン'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 2,
    name: 'Dogars',
    genus: ''
  },
  {
    pokemon_species_id: 109,
    local_language_id: 3,
    name: '또가스',
    genus: '독가스포켓몬'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 4,
    name: '瓦斯彈',
    genus: '毒氣寶可夢'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 5,
    name: 'Smogo',
    genus: 'Pokémon Gaz Mortel'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 6,
    name: 'Smogon',
    genus: 'Giftwolke'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 7,
    name: 'Koffing',
    genus: 'Pokémon Gas Venenoso'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 8,
    name: 'Koffing',
    genus: 'Pokémon Velenuvola'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 9,
    name: 'Koffing',
    genus: 'Poison Gas Pokémon'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 11,
    name: 'ドガース',
    genus: 'どくガスポケモン'
  },
  {
    pokemon_species_id: 109,
    local_language_id: 12,
    name: '瓦斯弹',
    genus: '毒气宝可梦'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 1,
    name: 'マタドガス',
    genus: 'どくガスポケモン'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 2,
    name: 'Matadogas',
    genus: ''
  },
  {
    pokemon_species_id: 110,
    local_language_id: 3,
    name: '또도가스',
    genus: '독가스포켓몬'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 4,
    name: '雙彈瓦斯',
    genus: '毒氣寶可夢'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 5,
    name: 'Smogogo',
    genus: 'Pokémon Gaz Mortel'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 6,
    name: 'Smogmog',
    genus: 'Giftwolke'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 7,
    name: 'Weezing',
    genus: 'Pokémon Gas Venenoso'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 8,
    name: 'Weezing',
    genus: 'Pokémon Velenuvola'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 9,
    name: 'Weezing',
    genus: 'Poison Gas Pokémon'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 11,
    name: 'マタドガス',
    genus: 'どくガスポケモン'
  },
  {
    pokemon_species_id: 110,
    local_language_id: 12,
    name: '双弹瓦斯',
    genus: '毒气宝可梦'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 1,
    name: 'サイホーン',
    genus: 'とげとげポケモン'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 2,
    name: 'Sihorn',
    genus: ''
  },
  {
    pokemon_species_id: 111,
    local_language_id: 3,
    name: '뿔카노',
    genus: '뿔포켓몬'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 4,
    name: '獨角犀牛',
    genus: '尖尖寶可夢'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 5,
    name: 'Rhinocorne',
    genus: 'Pokémon Piquant'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 6,
    name: 'Rihorn',
    genus: 'Stachler'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 7,
    name: 'Rhyhorn',
    genus: 'Pokémon Clavos'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 8,
    name: 'Rhyhorn',
    genus: 'Pokémon Punzoni'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 9,
    name: 'Rhyhorn',
    genus: 'Spikes Pokémon'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 11,
    name: 'サイホーン',
    genus: 'とげとげポケモン'
  },
  {
    pokemon_species_id: 111,
    local_language_id: 12,
    name: '独角犀牛',
    genus: '尖尖宝可梦'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 1,
    name: 'サイドン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 2,
    name: 'Sidon',
    genus: ''
  },
  {
    pokemon_species_id: 112,
    local_language_id: 3,
    name: '코뿌리',
    genus: '드릴포켓몬'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 4,
    name: '鑽角犀獸',
    genus: '鑽錐寶可夢'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 5,
    name: 'Rhinoféros',
    genus: 'Pokémon Perceur'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 6,
    name: 'Rizeros',
    genus: 'Bohrer'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 7,
    name: 'Rhydon',
    genus: 'Pokémon Taladro'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 8,
    name: 'Rhydon',
    genus: 'Pokémon Trapano'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 9,
    name: 'Rhydon',
    genus: 'Drill Pokémon'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 11,
    name: 'サイドン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 112,
    local_language_id: 12,
    name: '钻角犀兽',
    genus: '钻锥宝可梦'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 1,
    name: 'ラッキー',
    genus: 'たまごポケモン'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 2,
    name: 'Lucky',
    genus: ''
  },
  {
    pokemon_species_id: 113,
    local_language_id: 3,
    name: '럭키',
    genus: '알포켓몬'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 4,
    name: '吉利蛋',
    genus: '蛋寶可夢'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 5,
    name: 'Leveinard',
    genus: 'Pokémon Œuf'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 6,
    name: 'Chaneira',
    genus: 'Ei'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 7,
    name: 'Chansey',
    genus: 'Pokémon Huevo'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 8,
    name: 'Chansey',
    genus: 'Pokémon Uovo'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 9,
    name: 'Chansey',
    genus: 'Egg Pokémon'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 11,
    name: 'ラッキー',
    genus: 'たまごポケモン'
  },
  {
    pokemon_species_id: 113,
    local_language_id: 12,
    name: '吉利蛋',
    genus: '蛋宝可梦'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 1,
    name: 'モンジャラ',
    genus: 'ツルじょうポケモン'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 2,
    name: 'Monjara',
    genus: ''
  },
  {
    pokemon_species_id: 114,
    local_language_id: 3,
    name: '덩쿠리',
    genus: '넝쿨포켓몬'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 4,
    name: '蔓藤怪',
    genus: '藤蔓狀寶可夢'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 5,
    name: 'Saquedeneu',
    genus: 'Pokémon Vigne'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 6,
    name: 'Tangela',
    genus: 'Ranke'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 7,
    name: 'Tangela',
    genus: 'Pokémon Enredadera'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 8,
    name: 'Tangela',
    genus: 'Pokémon Liana'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 9,
    name: 'Tangela',
    genus: 'Vine Pokémon'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 11,
    name: 'モンジャラ',
    genus: 'ツルじょうポケモン'
  },
  {
    pokemon_species_id: 114,
    local_language_id: 12,
    name: '蔓藤怪',
    genus: '藤蔓状宝可梦'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 1,
    name: 'ガルーラ',
    genus: 'おやこポケモン'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 2,
    name: 'Garura',
    genus: ''
  },
  {
    pokemon_species_id: 115,
    local_language_id: 3,
    name: '캥카',
    genus: '가족포켓몬'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 4,
    name: '袋獸',
    genus: '親子寶可夢'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 5,
    name: 'Kangourex',
    genus: 'Pokémon Maternel'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 6,
    name: 'Kangama',
    genus: 'Muttertier'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 7,
    name: 'Kangaskhan',
    genus: 'Pokémon Padres'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 8,
    name: 'Kangaskhan',
    genus: 'Pokémon Genitore'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 9,
    name: 'Kangaskhan',
    genus: 'Parent Pokémon'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 11,
    name: 'ガルーラ',
    genus: 'おやこポケモン'
  },
  {
    pokemon_species_id: 115,
    local_language_id: 12,
    name: '袋兽',
    genus: '亲子宝可梦'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 1,
    name: 'タッツー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 2,
    name: 'Tattu',
    genus: ''
  },
  {
    pokemon_species_id: 116,
    local_language_id: 3,
    name: '쏘드라',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 4,
    name: '墨海馬',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 5,
    name: 'Hypotrempe',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 6,
    name: 'Seeper',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 7,
    name: 'Horsea',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 8,
    name: 'Horsea',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 9,
    name: 'Horsea',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 11,
    name: 'タッツー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 116,
    local_language_id: 12,
    name: '墨海马',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 1,
    name: 'シードラ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 2,
    name: 'Seadra',
    genus: ''
  },
  {
    pokemon_species_id: 117,
    local_language_id: 3,
    name: '시드라',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 4,
    name: '海刺龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 5,
    name: 'Hypocéan',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 6,
    name: 'Seemon',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 7,
    name: 'Seadra',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 8,
    name: 'Seadra',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 9,
    name: 'Seadra',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 11,
    name: 'シードラ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 117,
    local_language_id: 12,
    name: '海刺龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 1,
    name: 'トサキント',
    genus: 'きんぎょポケモン'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 2,
    name: 'Tosakinto',
    genus: ''
  },
  {
    pokemon_species_id: 118,
    local_language_id: 3,
    name: '콘치',
    genus: '금붕어포켓몬'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 4,
    name: '角金魚',
    genus: '金魚寶可夢'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 5,
    name: 'Poissirène',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 6,
    name: 'Goldini',
    genus: 'Goldfisch'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 7,
    name: 'Goldeen',
    genus: 'Pokémon Pez Color'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 8,
    name: 'Goldeen',
    genus: 'Pokémon Pescerosso'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 9,
    name: 'Goldeen',
    genus: 'Goldfish Pokémon'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 11,
    name: 'トサキント',
    genus: 'きんぎょポケモン'
  },
  {
    pokemon_species_id: 118,
    local_language_id: 12,
    name: '角金鱼',
    genus: '金鱼宝可梦'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 1,
    name: 'アズマオウ',
    genus: 'きんぎょポケモン'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 2,
    name: 'Azumao',
    genus: ''
  },
  {
    pokemon_species_id: 119,
    local_language_id: 3,
    name: '왕콘치',
    genus: '금붕어포켓몬'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 4,
    name: '金魚王',
    genus: '金魚寶可夢'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 5,
    name: 'Poissoroy',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 6,
    name: 'Golking',
    genus: 'Goldfisch'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 7,
    name: 'Seaking',
    genus: 'Pokémon Pez Color'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 8,
    name: 'Seaking',
    genus: 'Pokémon Pescerosso'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 9,
    name: 'Seaking',
    genus: 'Goldfish Pokémon'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 11,
    name: 'アズマオウ',
    genus: 'きんぎょポケモン'
  },
  {
    pokemon_species_id: 119,
    local_language_id: 12,
    name: '金鱼王',
    genus: '金鱼宝可梦'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 1,
    name: 'ヒトデマン',
    genus: 'ほしがたポケモン'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 2,
    name: 'Hitodeman',
    genus: ''
  },
  {
    pokemon_species_id: 120,
    local_language_id: 3,
    name: '별가사리',
    genus: '별포켓몬'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 4,
    name: '海星星',
    genus: '星形寶可夢'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 5,
    name: 'Stari',
    genus: 'Pokémon Étoile'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 6,
    name: 'Sterndu',
    genus: 'Sternform'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 7,
    name: 'Staryu',
    genus: 'Pokémon Estrellada'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 8,
    name: 'Staryu',
    genus: 'Pokémon Stella'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 9,
    name: 'Staryu',
    genus: 'Star Shape Pokémon'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 11,
    name: 'ヒトデマン',
    genus: 'ほしがたポケモン'
  },
  {
    pokemon_species_id: 120,
    local_language_id: 12,
    name: '海星星',
    genus: '星形宝可梦'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 1,
    name: 'スターミー',
    genus: 'なぞのポケモン'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 2,
    name: 'Starmie',
    genus: ''
  },
  {
    pokemon_species_id: 121,
    local_language_id: 3,
    name: '아쿠스타',
    genus: '수수께끼포켓몬'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 4,
    name: '寶石海星',
    genus: '謎寶可夢'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 5,
    name: 'Staross',
    genus: 'Pokémon Mystérieux'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 6,
    name: 'Starmie',
    genus: 'Mysteriös'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 7,
    name: 'Starmie',
    genus: 'Pokémon Misterioso'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 8,
    name: 'Starmie',
    genus: 'Pokémon Misterioso'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 9,
    name: 'Starmie',
    genus: 'Mysterious Pokémon'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 11,
    name: 'スターミー',
    genus: 'なぞのポケモン'
  },
  {
    pokemon_species_id: 121,
    local_language_id: 12,
    name: '宝石海星',
    genus: '谜宝可梦'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 1,
    name: 'バリヤード',
    genus: 'バリアーポケモン'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 2,
    name: 'Barrierd',
    genus: ''
  },
  {
    pokemon_species_id: 122,
    local_language_id: 3,
    name: '마임맨',
    genus: '배리어포켓몬'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 4,
    name: '魔牆人偶',
    genus: '屏障寶可夢'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 5,
    name: 'M. Mime',
    genus: 'Pokémon Bloqueur'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 6,
    name: 'Pantimos',
    genus: 'Sperre'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 7,
    name: 'Mr. Mime',
    genus: 'Pokémon Barrera'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 8,
    name: 'Mr. Mime',
    genus: 'Pokémon Barriera'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 9,
    name: 'Mr. Mime',
    genus: 'Barrier Pokémon'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 11,
    name: 'バリヤード',
    genus: 'バリアーポケモン'
  },
  {
    pokemon_species_id: 122,
    local_language_id: 12,
    name: '魔墙人偶',
    genus: '屏障宝可梦'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 1,
    name: 'ストライク',
    genus: 'かまきりポケモン'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 2,
    name: 'Strike',
    genus: ''
  },
  {
    pokemon_species_id: 123,
    local_language_id: 3,
    name: '스라크',
    genus: '버마재비포켓몬'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 4,
    name: '飛天螳螂',
    genus: '螳螂寶可夢'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 5,
    name: 'Insécateur',
    genus: 'Pokémon Mante'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 6,
    name: 'Sichlor',
    genus: 'Mantis'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 7,
    name: 'Scyther',
    genus: 'Pokémon Mantis'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 8,
    name: 'Scyther',
    genus: 'Pokémon Mantide'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 9,
    name: 'Scyther',
    genus: 'Mantis Pokémon'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 11,
    name: 'ストライク',
    genus: 'かまきりポケモン'
  },
  {
    pokemon_species_id: 123,
    local_language_id: 12,
    name: '飞天螳螂',
    genus: '螳螂宝可梦'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 1,
    name: 'ルージュラ',
    genus: 'ひとがたポケモン'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 2,
    name: 'Rougela',
    genus: ''
  },
  {
    pokemon_species_id: 124,
    local_language_id: 3,
    name: '루주라',
    genus: '인간형태포켓몬'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 4,
    name: '迷唇姐',
    genus: '人形寶可夢'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 5,
    name: 'Lippoutou',
    genus: 'Pokémon Humanoïde'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 6,
    name: 'Rossana',
    genus: 'Humanotyp'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 7,
    name: 'Jynx',
    genus: 'Pokémon Forma Humana'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 8,
    name: 'Jynx',
    genus: 'Pokémon Umanoide'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 9,
    name: 'Jynx',
    genus: 'Human Shape Pokémon'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 11,
    name: 'ルージュラ',
    genus: 'ひとがたポケモン'
  },
  {
    pokemon_species_id: 124,
    local_language_id: 12,
    name: '迷唇姐',
    genus: '人形宝可梦'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 1,
    name: 'エレブー',
    genus: 'でんげきポケモン'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 2,
    name: 'Eleboo',
    genus: ''
  },
  {
    pokemon_species_id: 125,
    local_language_id: 3,
    name: '에레브',
    genus: '전기포켓몬'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 4,
    name: '電擊獸',
    genus: '電擊寶可夢'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 5,
    name: 'Élektek',
    genus: 'Pokémon Électrique'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 6,
    name: 'Elektek',
    genus: 'Elektro'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 7,
    name: 'Electabuzz',
    genus: 'Pokémon Eléctrico'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 8,
    name: 'Electabuzz',
    genus: 'Pokémon Elettrico'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 9,
    name: 'Electabuzz',
    genus: 'Electric Pokémon'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 11,
    name: 'エレブー',
    genus: 'でんげきポケモン'
  },
  {
    pokemon_species_id: 125,
    local_language_id: 12,
    name: '电击兽',
    genus: '电击宝可梦'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 1,
    name: 'ブーバー',
    genus: 'ひふきポケモン'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 2,
    name: 'Boober',
    genus: ''
  },
  {
    pokemon_species_id: 126,
    local_language_id: 3,
    name: '마그마',
    genus: '불뿜기포켓몬'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 4,
    name: '鴨嘴火獸',
    genus: '吐火寶可夢'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 5,
    name: 'Magmar',
    genus: 'Pokémon Crache-Feu'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 6,
    name: 'Magmar',
    genus: 'Brenner'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 7,
    name: 'Magmar',
    genus: 'Pokémon Escupefuego'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 8,
    name: 'Magmar',
    genus: 'Pokémon Sputafuoco'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 9,
    name: 'Magmar',
    genus: 'Spitfire Pokémon'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 11,
    name: 'ブーバー',
    genus: 'ひふきポケモン'
  },
  {
    pokemon_species_id: 126,
    local_language_id: 12,
    name: '鸭嘴火兽',
    genus: '吐火宝可梦'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 1,
    name: 'カイロス',
    genus: 'くわがたポケモン'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 2,
    name: 'Kailios',
    genus: ''
  },
  {
    pokemon_species_id: 127,
    local_language_id: 3,
    name: '쁘사이저',
    genus: '뿔집게포켓몬'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 4,
    name: '凱羅斯',
    genus: '鍬形蟲寶可夢'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 5,
    name: 'Scarabrute',
    genus: 'Pokémon Scarabée'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 6,
    name: 'Pinsir',
    genus: 'Kneifkäfer'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 7,
    name: 'Pinsir',
    genus: 'Pokémon Escarabajo'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 8,
    name: 'Pinsir',
    genus: 'Pokémon Cervolante'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 9,
    name: 'Pinsir',
    genus: 'Stag Beetle Pokémon'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 11,
    name: 'カイロス',
    genus: 'くわがたポケモン'
  },
  {
    pokemon_species_id: 127,
    local_language_id: 12,
    name: '凯罗斯',
    genus: '锹形虫宝可梦'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 1,
    name: 'ケンタロス',
    genus: 'あばれうしポケモン'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 2,
    name: 'Kentauros',
    genus: ''
  },
  {
    pokemon_species_id: 128,
    local_language_id: 3,
    name: '켄타로스',
    genus: '성난소포켓몬'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 4,
    name: '肯泰羅',
    genus: '暴牛寶可夢'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 5,
    name: 'Tauros',
    genus: 'Pokémon Buffle'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 6,
    name: 'Tauros',
    genus: 'Wildbulle'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 7,
    name: 'Tauros',
    genus: 'Pokémon Toro Bravo'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 8,
    name: 'Tauros',
    genus: 'Pokémon Torobrado'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 9,
    name: 'Tauros',
    genus: 'Wild Bull Pokémon'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 11,
    name: 'ケンタロス',
    genus: 'あばれうしポケモン'
  },
  {
    pokemon_species_id: 128,
    local_language_id: 12,
    name: '肯泰罗',
    genus: '暴牛宝可梦'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 1,
    name: 'コイキング',
    genus: 'さかなポケモン'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 2,
    name: 'Koiking',
    genus: ''
  },
  {
    pokemon_species_id: 129,
    local_language_id: 3,
    name: '잉어킹',
    genus: '물고기포켓몬'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 4,
    name: '鯉魚王',
    genus: '魚寶可夢'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 5,
    name: 'Magicarpe',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 6,
    name: 'Karpador',
    genus: 'Fisch'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 7,
    name: 'Magikarp',
    genus: 'Pokémon Pez'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 8,
    name: 'Magikarp',
    genus: 'Pokémon Pesce'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 9,
    name: 'Magikarp',
    genus: 'Fish Pokémon'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 11,
    name: 'コイキング',
    genus: 'さかなポケモン'
  },
  {
    pokemon_species_id: 129,
    local_language_id: 12,
    name: '鲤鱼王',
    genus: '鱼宝可梦'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 1,
    name: 'ギャラドス',
    genus: 'きょうあくポケモン'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 2,
    name: 'Gyarados',
    genus: ''
  },
  {
    pokemon_species_id: 130,
    local_language_id: 3,
    name: '갸라도스',
    genus: '흉악포켓몬'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 4,
    name: '暴鯉龍',
    genus: '凶惡寶可夢'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 5,
    name: 'Léviator',
    genus: 'Pokémon Terrifiant'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 6,
    name: 'Garados',
    genus: 'Grausam'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 7,
    name: 'Gyarados',
    genus: 'Pokémon Atrocidad'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 8,
    name: 'Gyarados',
    genus: 'Pokémon Atroce'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 9,
    name: 'Gyarados',
    genus: 'Atrocious Pokémon'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 11,
    name: 'ギャラドス',
    genus: 'きょうあくポケモン'
  },
  {
    pokemon_species_id: 130,
    local_language_id: 12,
    name: '暴鲤龙',
    genus: '凶恶宝可梦'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 1,
    name: 'ラプラス',
    genus: 'のりものポケモン'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 2,
    name: 'Laplace',
    genus: ''
  },
  {
    pokemon_species_id: 131,
    local_language_id: 3,
    name: '라프라스',
    genus: '탈것포켓몬'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 4,
    name: '拉普拉斯',
    genus: '乘載寶可夢'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 5,
    name: 'Lokhlass',
    genus: 'Pokémon Transport'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 6,
    name: 'Lapras',
    genus: 'Transport'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 7,
    name: 'Lapras',
    genus: 'Pokémon Transporte'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 8,
    name: 'Lapras',
    genus: 'Pokémon Trasporto'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 9,
    name: 'Lapras',
    genus: 'Transport Pokémon'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 11,
    name: 'ラプラス',
    genus: 'のりものポケモン'
  },
  {
    pokemon_species_id: 131,
    local_language_id: 12,
    name: '拉普拉斯',
    genus: '乘载宝可梦'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 1,
    name: 'メタモン',
    genus: 'へんしんポケモン'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 2,
    name: 'Metamon',
    genus: ''
  },
  {
    pokemon_species_id: 132,
    local_language_id: 3,
    name: '메타몽',
    genus: '변신포켓몬'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 4,
    name: '百變怪',
    genus: '變身寶可夢'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 5,
    name: 'Métamorph',
    genus: 'Pokémon Morphing'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 6,
    name: 'Ditto',
    genus: 'Transform'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 7,
    name: 'Ditto',
    genus: 'Pokémon Transform.'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 8,
    name: 'Ditto',
    genus: 'Pokémon Mutante'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 9,
    name: 'Ditto',
    genus: 'Transform Pokémon'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 11,
    name: 'メタモン',
    genus: 'へんしんポケモン'
  },
  {
    pokemon_species_id: 132,
    local_language_id: 12,
    name: '百变怪',
    genus: '变身宝可梦'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 1,
    name: 'イーブイ',
    genus: 'しんかポケモン'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 2,
    name: 'Eievui',
    genus: ''
  },
  {
    pokemon_species_id: 133,
    local_language_id: 3,
    name: '이브이',
    genus: '진화포켓몬'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 4,
    name: '伊布',
    genus: '進化寶可夢'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 5,
    name: 'Évoli',
    genus: 'Pokémon Évolutif'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 6,
    name: 'Evoli',
    genus: 'Evolution'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 7,
    name: 'Eevee',
    genus: 'Pokémon Evolución'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 8,
    name: 'Eevee',
    genus: 'Pokémon Evoluzione'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 9,
    name: 'Eevee',
    genus: 'Evolution Pokémon'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 11,
    name: 'イーブイ',
    genus: 'しんかポケモン'
  },
  {
    pokemon_species_id: 133,
    local_language_id: 12,
    name: '伊布',
    genus: '进化宝可梦'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 1,
    name: 'シャワーズ',
    genus: 'あわはきポケモン'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 2,
    name: 'Showers',
    genus: ''
  },
  {
    pokemon_species_id: 134,
    local_language_id: 3,
    name: '샤미드',
    genus: '거품뿜기포켓몬'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 4,
    name: '水伊布',
    genus: '吐泡寶可夢'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 5,
    name: 'Aquali',
    genus: 'Pokémon Bulleur'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 6,
    name: 'Aquana',
    genus: 'Blubbblase'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 7,
    name: 'Vaporeon',
    genus: 'Pokémon Burbuja'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 8,
    name: 'Vaporeon',
    genus: 'Pokémon Bollajet'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 9,
    name: 'Vaporeon',
    genus: 'Bubble Jet Pokémon'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 11,
    name: 'シャワーズ',
    genus: 'あわはきポケモン'
  },
  {
    pokemon_species_id: 134,
    local_language_id: 12,
    name: '水伊布',
    genus: '吐泡宝可梦'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 1,
    name: 'サンダース',
    genus: 'かみなりポケモン'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 2,
    name: 'Thunders',
    genus: ''
  },
  {
    pokemon_species_id: 135,
    local_language_id: 3,
    name: '쥬피썬더',
    genus: '번개포켓몬'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 4,
    name: '雷伊布',
    genus: '雷寶可夢'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 5,
    name: 'Voltali',
    genus: 'Pokémon Orage'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 6,
    name: 'Blitza',
    genus: 'Blitz'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 7,
    name: 'Jolteon',
    genus: 'Pokémon Relámpago'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 8,
    name: 'Jolteon',
    genus: 'Pokémon Luminoso'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 9,
    name: 'Jolteon',
    genus: 'Lightning Pokémon'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 11,
    name: 'サンダース',
    genus: 'かみなりポケモン'
  },
  {
    pokemon_species_id: 135,
    local_language_id: 12,
    name: '雷伊布',
    genus: '雷宝可梦'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 1,
    name: 'ブースター',
    genus: 'ほのおポケモン'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 2,
    name: 'Booster',
    genus: ''
  },
  {
    pokemon_species_id: 136,
    local_language_id: 3,
    name: '부스터',
    genus: '불꽃포켓몬'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 4,
    name: '火伊布',
    genus: '火寶可夢'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 5,
    name: 'Pyroli',
    genus: 'Pokémon Flamme'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 6,
    name: 'Flamara',
    genus: 'Feuer'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 7,
    name: 'Flareon',
    genus: 'Pokémon Llama'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 8,
    name: 'Flareon',
    genus: 'Pokémon Fiamma'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 9,
    name: 'Flareon',
    genus: 'Flame Pokémon'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 11,
    name: 'ブースター',
    genus: 'ほのおポケモン'
  },
  {
    pokemon_species_id: 136,
    local_language_id: 12,
    name: '火伊布',
    genus: '火宝可梦'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 1,
    name: 'ポリゴン',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 2,
    name: 'Porygon',
    genus: ''
  },
  {
    pokemon_species_id: 137,
    local_language_id: 3,
    name: '폴리곤',
    genus: '가상포켓몬'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 4,
    name: '多邊獸',
    genus: '虛擬寶可夢'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 5,
    name: 'Porygon',
    genus: 'Pokémon Virtuel'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 6,
    name: 'Porygon',
    genus: 'Virtuell'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 7,
    name: 'Porygon',
    genus: 'Pokémon Virtual'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 8,
    name: 'Porygon',
    genus: 'Pokémon Virtuale'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 9,
    name: 'Porygon',
    genus: 'Virtual Pokémon'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 11,
    name: 'ポリゴン',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 137,
    local_language_id: 12,
    name: '多边兽',
    genus: '虚拟宝可梦'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 1,
    name: 'オムナイト',
    genus: 'うずまきポケモン'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 2,
    name: 'Omnite',
    genus: ''
  },
  {
    pokemon_species_id: 138,
    local_language_id: 3,
    name: '암나이트',
    genus: '소용돌이포켓몬'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 4,
    name: '菊石獸',
    genus: '漩渦寶可夢'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 5,
    name: 'Amonita',
    genus: 'Pokémon Spirale'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 6,
    name: 'Amonitas',
    genus: 'Spirale'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 7,
    name: 'Omanyte',
    genus: 'Pokémon Espiral'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 8,
    name: 'Omanyte',
    genus: 'Pokémon Spirale'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 9,
    name: 'Omanyte',
    genus: 'Spiral Pokémon'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 11,
    name: 'オムナイト',
    genus: 'うずまきポケモン'
  },
  {
    pokemon_species_id: 138,
    local_language_id: 12,
    name: '菊石兽',
    genus: '漩涡宝可梦'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 1,
    name: 'オムスター',
    genus: 'うずまきポケモン'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 2,
    name: 'Omstar',
    genus: ''
  },
  {
    pokemon_species_id: 139,
    local_language_id: 3,
    name: '암스타',
    genus: '소용돌이포켓몬'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 4,
    name: '多刺菊石獸',
    genus: '漩渦寶可夢'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 5,
    name: 'Amonistar',
    genus: 'Pokémon Spirale'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 6,
    name: 'Amoroso',
    genus: 'Spirale'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 7,
    name: 'Omastar',
    genus: 'Pokémon Espiral'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 8,
    name: 'Omastar',
    genus: 'Pokémon Spirale'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 9,
    name: 'Omastar',
    genus: 'Spiral Pokémon'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 11,
    name: 'オムスター',
    genus: 'うずまきポケモン'
  },
  {
    pokemon_species_id: 139,
    local_language_id: 12,
    name: '多刺菊石兽',
    genus: '漩涡宝可梦'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 1,
    name: 'カブト',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 2,
    name: 'Kabuto',
    genus: ''
  },
  {
    pokemon_species_id: 140,
    local_language_id: 3,
    name: '투구',
    genus: '껍질포켓몬'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 4,
    name: '化石盔',
    genus: '甲殼寶可夢'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 5,
    name: 'Kabuto',
    genus: 'Pokémon Carapace'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 6,
    name: 'Kabuto',
    genus: 'Schaltier'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 7,
    name: 'Kabuto',
    genus: 'Pokémon Marisco'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 8,
    name: 'Kabuto',
    genus: 'Pokémon Crostaceo'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 9,
    name: 'Kabuto',
    genus: 'Shellfish Pokémon'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 11,
    name: 'カブト',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 140,
    local_language_id: 12,
    name: '化石盔',
    genus: '甲壳宝可梦'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 1,
    name: 'カブトプス',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 2,
    name: 'Kabutops',
    genus: ''
  },
  {
    pokemon_species_id: 141,
    local_language_id: 3,
    name: '투구푸스',
    genus: '껍질포켓몬'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 4,
    name: '鐮刀盔',
    genus: '甲殼寶可夢'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 5,
    name: 'Kabutops',
    genus: 'Pokémon Carapace'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 6,
    name: 'Kabutops',
    genus: 'Schaltier'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 7,
    name: 'Kabutops',
    genus: 'Pokémon Marisco'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 8,
    name: 'Kabutops',
    genus: 'Pokémon Crostaceo'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 9,
    name: 'Kabutops',
    genus: 'Shellfish Pokémon'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 11,
    name: 'カブトプス',
    genus: 'こうらポケモン'
  },
  {
    pokemon_species_id: 141,
    local_language_id: 12,
    name: '镰刀盔',
    genus: '甲壳宝可梦'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 1,
    name: 'プテラ',
    genus: 'かせきポケモン'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 2,
    name: 'Ptera',
    genus: ''
  },
  {
    pokemon_species_id: 142,
    local_language_id: 3,
    name: '프테라',
    genus: '화석포켓몬'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 4,
    name: '化石翼龍',
    genus: '化石寶可夢'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 5,
    name: 'Ptéra',
    genus: 'Pokémon Fossile'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 6,
    name: 'Aerodactyl',
    genus: 'Fossil'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 7,
    name: 'Aerodactyl',
    genus: 'Pokémon Fósil'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 8,
    name: 'Aerodactyl',
    genus: 'Pokémon Fossile'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 9,
    name: 'Aerodactyl',
    genus: 'Fossil Pokémon'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 11,
    name: 'プテラ',
    genus: 'かせきポケモン'
  },
  {
    pokemon_species_id: 142,
    local_language_id: 12,
    name: '化石翼龙',
    genus: '化石宝可梦'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 1,
    name: 'カビゴン',
    genus: 'いねむりポケモン'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 2,
    name: 'Kabigon',
    genus: ''
  },
  {
    pokemon_species_id: 143,
    local_language_id: 3,
    name: '잠만보',
    genus: '졸음포켓몬'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 4,
    name: '卡比獸',
    genus: '瞌睡寶可夢'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 5,
    name: 'Ronflex',
    genus: 'Pokémon Pionceur'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 6,
    name: 'Relaxo',
    genus: 'Tagträumer'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 7,
    name: 'Snorlax',
    genus: 'Pokémon Dormir'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 8,
    name: 'Snorlax',
    genus: 'Pokémon Sonno'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 9,
    name: 'Snorlax',
    genus: 'Sleeping Pokémon'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 11,
    name: 'カビゴン',
    genus: 'いねむりポケモン'
  },
  {
    pokemon_species_id: 143,
    local_language_id: 12,
    name: '卡比兽',
    genus: '瞌睡宝可梦'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 1,
    name: 'フリーザー',
    genus: 'れいとうポケモン'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 2,
    name: 'Freezer',
    genus: ''
  },
  {
    pokemon_species_id: 144,
    local_language_id: 3,
    name: '프리져',
    genus: '냉동포켓몬'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 4,
    name: '急凍鳥',
    genus: '冰凍寶可夢'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 5,
    name: 'Artikodin',
    genus: 'Pokémon Glaciaire'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 6,
    name: 'Arktos',
    genus: 'Eis'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 7,
    name: 'Articuno',
    genus: 'Pokémon Congelar'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 8,
    name: 'Articuno',
    genus: 'Pokémon Gelo'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 9,
    name: 'Articuno',
    genus: 'Freeze Pokémon'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 11,
    name: 'フリーザー',
    genus: 'れいとうポケモン'
  },
  {
    pokemon_species_id: 144,
    local_language_id: 12,
    name: '急冻鸟',
    genus: '冰冻宝可梦'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 1,
    name: 'サンダー',
    genus: 'でんげきポケモン'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 2,
    name: 'Thunder',
    genus: ''
  },
  {
    pokemon_species_id: 145,
    local_language_id: 3,
    name: '썬더',
    genus: '전기포켓몬'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 4,
    name: '閃電鳥',
    genus: '電擊寶可夢'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 5,
    name: 'Électhor',
    genus: 'Pokémon Électrique'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 6,
    name: 'Zapdos',
    genus: 'Elektro'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 7,
    name: 'Zapdos',
    genus: 'Pokémon Eléctrico'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 8,
    name: 'Zapdos',
    genus: 'Pokémon Elettrico'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 9,
    name: 'Zapdos',
    genus: 'Electric Pokémon'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 11,
    name: 'サンダー',
    genus: 'でんげきポケモン'
  },
  {
    pokemon_species_id: 145,
    local_language_id: 12,
    name: '闪电鸟',
    genus: '电击宝可梦'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 1,
    name: 'ファイヤー',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 2,
    name: 'Fire',
    genus: ''
  },
  {
    pokemon_species_id: 146,
    local_language_id: 3,
    name: '파이어',
    genus: '화염포켓몬'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 4,
    name: '火焰鳥',
    genus: '火焰寶可夢'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 5,
    name: 'Sulfura',
    genus: 'Pokémon Flamme'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 6,
    name: 'Lavados',
    genus: 'Flamme'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 7,
    name: 'Moltres',
    genus: 'Pokémon Llama'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 8,
    name: 'Moltres',
    genus: 'Pokémon Fiamma'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 9,
    name: 'Moltres',
    genus: 'Flame Pokémon'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 11,
    name: 'ファイヤー',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 146,
    local_language_id: 12,
    name: '火焰鸟',
    genus: '火焰宝可梦'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 1,
    name: 'ミニリュウ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 2,
    name: 'Miniryu',
    genus: ''
  },
  {
    pokemon_species_id: 147,
    local_language_id: 3,
    name: '미뇽',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 4,
    name: '迷你龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 5,
    name: 'Minidraco',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 6,
    name: 'Dratini',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 7,
    name: 'Dratini',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 8,
    name: 'Dratini',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 9,
    name: 'Dratini',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 11,
    name: 'ミニリュウ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 147,
    local_language_id: 12,
    name: '迷你龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 1,
    name: 'ハクリュー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 2,
    name: 'Hakuryu',
    genus: ''
  },
  {
    pokemon_species_id: 148,
    local_language_id: 3,
    name: '신뇽',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 4,
    name: '哈克龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 5,
    name: 'Draco',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 6,
    name: 'Dragonir',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 7,
    name: 'Dragonair',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 8,
    name: 'Dragonair',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 9,
    name: 'Dragonair',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 11,
    name: 'ハクリュー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 148,
    local_language_id: 12,
    name: '哈克龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 1,
    name: 'カイリュー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 2,
    name: 'Kairyu',
    genus: ''
  },
  {
    pokemon_species_id: 149,
    local_language_id: 3,
    name: '망나뇽',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 4,
    name: '快龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 5,
    name: 'Dracolosse',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 6,
    name: 'Dragoran',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 7,
    name: 'Dragonite',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 8,
    name: 'Dragonite',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 9,
    name: 'Dragonite',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 11,
    name: 'カイリュー',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 149,
    local_language_id: 12,
    name: '快龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 1,
    name: 'ミュウツー',
    genus: 'いでんしポケモン'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 2,
    name: 'Mewtwo',
    genus: ''
  },
  {
    pokemon_species_id: 150,
    local_language_id: 3,
    name: '뮤츠',
    genus: '유전포켓몬'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 4,
    name: '超夢',
    genus: '基因寶可夢'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 5,
    name: 'Mewtwo',
    genus: 'Pokémon Génétique'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 6,
    name: 'Mewtu',
    genus: 'Genmutant'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 7,
    name: 'Mewtwo',
    genus: 'Pokémon Genético'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 8,
    name: 'Mewtwo',
    genus: 'Pokémon Genetico'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 9,
    name: 'Mewtwo',
    genus: 'Genetic Pokémon'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 11,
    name: 'ミュウツー',
    genus: 'いでんしポケモン'
  },
  {
    pokemon_species_id: 150,
    local_language_id: 12,
    name: '超梦',
    genus: '基因宝可梦'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 1,
    name: 'ミュウ',
    genus: 'しんしゅポケモン'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 2,
    name: 'Mew',
    genus: ''
  },
  {
    pokemon_species_id: 151,
    local_language_id: 3,
    name: '뮤',
    genus: '신종포켓몬'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 4,
    name: '夢幻',
    genus: '新種寶可夢'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 5,
    name: 'Mew',
    genus: 'Pokémon Nouveau'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 6,
    name: 'Mew',
    genus: 'Neue Art'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 7,
    name: 'Mew',
    genus: 'Pokémon N. Especie'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 8,
    name: 'Mew',
    genus: 'Pokémon Novaspecie'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 9,
    name: 'Mew',
    genus: 'New Species Pokémon'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 11,
    name: 'ミュウ',
    genus: 'しんしゅポケモン'
  },
  {
    pokemon_species_id: 151,
    local_language_id: 12,
    name: '梦幻',
    genus: '新种宝可梦'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 1,
    name: 'チコリータ',
    genus: 'はっぱポケモン'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 2,
    name: 'Chicorita',
    genus: ''
  },
  {
    pokemon_species_id: 152,
    local_language_id: 3,
    name: '치코리타',
    genus: '잎사귀포켓몬'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 4,
    name: '菊草葉',
    genus: '葉子寶可夢'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 5,
    name: 'Germignon',
    genus: 'Pokémon Feuille'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 6,
    name: 'Endivie',
    genus: 'Laub'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 7,
    name: 'Chikorita',
    genus: 'Pokémon Hoja'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 8,
    name: 'Chikorita',
    genus: 'Pokémon Foglia'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 9,
    name: 'Chikorita',
    genus: 'Leaf Pokémon'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 11,
    name: 'チコリータ',
    genus: 'はっぱポケモン'
  },
  {
    pokemon_species_id: 152,
    local_language_id: 12,
    name: '菊草叶',
    genus: '叶子宝可梦'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 1,
    name: 'ベイリーフ',
    genus: 'はっぱポケモン'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 2,
    name: 'Bayleaf',
    genus: ''
  },
  {
    pokemon_species_id: 153,
    local_language_id: 3,
    name: '베이리프',
    genus: '잎사귀포켓몬'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 4,
    name: '月桂葉',
    genus: '葉子寶可夢'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 5,
    name: 'Macronium',
    genus: 'Pokémon Feuille'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 6,
    name: 'Lorblatt',
    genus: 'Laub'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 7,
    name: 'Bayleef',
    genus: 'Pokémon Hoja'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 8,
    name: 'Bayleef',
    genus: 'Pokémon Foglia'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 9,
    name: 'Bayleef',
    genus: 'Leaf Pokémon'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 11,
    name: 'ベイリーフ',
    genus: 'はっぱポケモン'
  },
  {
    pokemon_species_id: 153,
    local_language_id: 12,
    name: '月桂叶',
    genus: '叶子宝可梦'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 1,
    name: 'メガニウム',
    genus: 'ハーブポケモン'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 2,
    name: 'Meganium',
    genus: ''
  },
  {
    pokemon_species_id: 154,
    local_language_id: 3,
    name: '메가니움',
    genus: '허브포켓몬'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 4,
    name: '大竺葵',
    genus: '芳草寶可夢'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 5,
    name: 'Méganium',
    genus: 'Pokémon Herbe'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 6,
    name: 'Meganie',
    genus: 'Kräuter'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 7,
    name: 'Meganium',
    genus: 'Pokémon Hierba'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 8,
    name: 'Meganium',
    genus: 'Pokémon Erbe'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 9,
    name: 'Meganium',
    genus: 'Herb Pokémon'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 11,
    name: 'メガニウム',
    genus: 'ハーブポケモン'
  },
  {
    pokemon_species_id: 154,
    local_language_id: 12,
    name: '大竺葵',
    genus: '芳草宝可梦'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 1,
    name: 'ヒノアラシ',
    genus: 'ひねずみポケモン'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 2,
    name: 'Hinoarashi',
    genus: ''
  },
  {
    pokemon_species_id: 155,
    local_language_id: 3,
    name: '브케인',
    genus: '불쥐포켓몬'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 4,
    name: '火球鼠',
    genus: '火鼠寶可夢'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 5,
    name: 'Héricendre',
    genus: 'Pokémon Souris Feu'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 6,
    name: 'Feurigel',
    genus: 'Feuermaus'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 7,
    name: 'Cyndaquil',
    genus: 'Pokémon Ratón Fuego'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 8,
    name: 'Cyndaquil',
    genus: 'Pokémon Fuocotopo'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 9,
    name: 'Cyndaquil',
    genus: 'Fire Mouse Pokémon'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 11,
    name: 'ヒノアラシ',
    genus: 'ひねずみポケモン'
  },
  {
    pokemon_species_id: 155,
    local_language_id: 12,
    name: '火球鼠',
    genus: '火鼠宝可梦'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 1,
    name: 'マグマラシ',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 2,
    name: 'Magmarashi',
    genus: ''
  },
  {
    pokemon_species_id: 156,
    local_language_id: 3,
    name: '마그케인',
    genus: '화산포켓몬'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 4,
    name: '火岩鼠',
    genus: '火山寶可夢'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 5,
    name: 'Feurisson',
    genus: 'Pokémon Volcan'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 6,
    name: 'Igelavar',
    genus: 'Vulkan'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 7,
    name: 'Quilava',
    genus: 'Pokémon Volcán'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 8,
    name: 'Quilava',
    genus: 'Pokémon Vulcano'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 9,
    name: 'Quilava',
    genus: 'Volcano Pokémon'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 11,
    name: 'マグマラシ',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 156,
    local_language_id: 12,
    name: '火岩鼠',
    genus: '火山宝可梦'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 1,
    name: 'バクフーン',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 2,
    name: 'Bakphoon',
    genus: ''
  },
  {
    pokemon_species_id: 157,
    local_language_id: 3,
    name: '블레이범',
    genus: '화산포켓몬'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 4,
    name: '火爆獸',
    genus: '火山寶可夢'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 5,
    name: 'Typhlosion',
    genus: 'Pokémon Volcan'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 6,
    name: 'Tornupto',
    genus: 'Vulkan'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 7,
    name: 'Typhlosion',
    genus: 'Pokémon Volcán'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 8,
    name: 'Typhlosion',
    genus: 'Pokémon Vulcano'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 9,
    name: 'Typhlosion',
    genus: 'Volcano Pokémon'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 11,
    name: 'バクフーン',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 157,
    local_language_id: 12,
    name: '火暴兽',
    genus: '火山宝可梦'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 1,
    name: 'ワニノコ',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 2,
    name: 'Waninoko',
    genus: ''
  },
  {
    pokemon_species_id: 158,
    local_language_id: 3,
    name: '리아코',
    genus: '큰턱포켓몬'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 4,
    name: '小鋸鱷',
    genus: '大顎寶可夢'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 5,
    name: 'Kaiminus',
    genus: 'Pokémon Mâchoire'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 6,
    name: 'Karnimani',
    genus: 'Großmaul'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 7,
    name: 'Totodile',
    genus: 'Pokémon Fauces'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 8,
    name: 'Totodile',
    genus: 'Pokémon Mascellone'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 9,
    name: 'Totodile',
    genus: 'Big Jaw Pokémon'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 11,
    name: 'ワニノコ',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 158,
    local_language_id: 12,
    name: '小锯鳄',
    genus: '大颚宝可梦'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 1,
    name: 'アリゲイツ',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 2,
    name: 'Alligates',
    genus: ''
  },
  {
    pokemon_species_id: 159,
    local_language_id: 3,
    name: '엘리게이',
    genus: '큰턱포켓몬'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 4,
    name: '藍鱷',
    genus: '大顎寶可夢'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 5,
    name: 'Crocrodil',
    genus: 'Pokémon Mâchoire'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 6,
    name: 'Tyracroc',
    genus: 'Großmaul'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 7,
    name: 'Croconaw',
    genus: 'Pokémon Fauces'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 8,
    name: 'Croconaw',
    genus: 'Pokémon Mascellone'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 9,
    name: 'Croconaw',
    genus: 'Big Jaw Pokémon'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 11,
    name: 'アリゲイツ',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 159,
    local_language_id: 12,
    name: '蓝鳄',
    genus: '大颚宝可梦'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 1,
    name: 'オーダイル',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 2,
    name: 'Ordile',
    genus: ''
  },
  {
    pokemon_species_id: 160,
    local_language_id: 3,
    name: '장크로다일',
    genus: '큰턱포켓몬'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 4,
    name: '大力鱷',
    genus: '大顎寶可夢'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 5,
    name: 'Aligatueur',
    genus: 'Pokémon Mâchoire'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 6,
    name: 'Impergator',
    genus: 'Großmaul'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 7,
    name: 'Feraligatr',
    genus: 'Pokémon Fauces'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 8,
    name: 'Feraligatr',
    genus: 'Pokémon Mascellone'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 9,
    name: 'Feraligatr',
    genus: 'Big Jaw Pokémon'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 11,
    name: 'オーダイル',
    genus: 'おおあごポケモン'
  },
  {
    pokemon_species_id: 160,
    local_language_id: 12,
    name: '大力鳄',
    genus: '大颚宝可梦'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 1,
    name: 'オタチ',
    genus: 'みはりポケモン'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 2,
    name: 'Otachi',
    genus: ''
  },
  {
    pokemon_species_id: 161,
    local_language_id: 3,
    name: '꼬리선',
    genus: '망보기포켓몬'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 4,
    name: '尾立',
    genus: '放哨寶可夢'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 5,
    name: 'Fouinette',
    genus: 'Pokémon Espion'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 6,
    name: 'Wiesor',
    genus: 'Späher'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 7,
    name: 'Sentret',
    genus: 'Pokémon Explorador'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 8,
    name: 'Sentret',
    genus: 'Pokémon Esplorante'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 9,
    name: 'Sentret',
    genus: 'Scout Pokémon'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 11,
    name: 'オタチ',
    genus: 'みはりポケモン'
  },
  {
    pokemon_species_id: 161,
    local_language_id: 12,
    name: '尾立',
    genus: '放哨宝可梦'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 1,
    name: 'オオタチ',
    genus: 'どうながポケモン'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 2,
    name: 'Ootachi',
    genus: ''
  },
  {
    pokemon_species_id: 162,
    local_language_id: 3,
    name: '다꼬리',
    genus: '긴몸통포켓몬'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 4,
    name: '大尾立',
    genus: '長軀幹寶可夢'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 5,
    name: 'Fouinar',
    genus: 'Pokémon Allongé'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 6,
    name: 'Wiesenior',
    genus: 'Langleib'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 7,
    name: 'Furret',
    genus: 'Pokémon Alargado'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 8,
    name: 'Furret',
    genus: 'Pokémon Lungocorpo'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 9,
    name: 'Furret',
    genus: 'Long Body Pokémon'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 11,
    name: 'オオタチ',
    genus: 'どうながポケモン'
  },
  {
    pokemon_species_id: 162,
    local_language_id: 12,
    name: '大尾立',
    genus: '长躯干宝可梦'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 1,
    name: 'ホーホー',
    genus: 'ふくろうポケモン'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 2,
    name: 'Hoho',
    genus: ''
  },
  {
    pokemon_species_id: 163,
    local_language_id: 3,
    name: '부우부',
    genus: '부엉이포켓몬'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 4,
    name: '咕咕',
    genus: '貓頭鷹寶可夢'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 5,
    name: 'Hoothoot',
    genus: 'Pokémon Hibou'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 6,
    name: 'Hoothoot',
    genus: 'Eule'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 7,
    name: 'Hoothoot',
    genus: 'Pokémon Búho'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 8,
    name: 'Hoothoot',
    genus: 'Pokémon Gufo'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 9,
    name: 'Hoothoot',
    genus: 'Owl Pokémon'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 11,
    name: 'ホーホー',
    genus: 'ふくろうポケモン'
  },
  {
    pokemon_species_id: 163,
    local_language_id: 12,
    name: '咕咕',
    genus: '猫头鹰宝可梦'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 1,
    name: 'ヨルノズク',
    genus: 'ふくろうポケモン'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 2,
    name: 'Yorunozuku',
    genus: ''
  },
  {
    pokemon_species_id: 164,
    local_language_id: 3,
    name: '야부엉',
    genus: '부엉이포켓몬'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 4,
    name: '貓頭夜鷹',
    genus: '貓頭鷹寶可夢'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 5,
    name: 'Noarfang',
    genus: 'Pokémon Hibou'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 6,
    name: 'Noctuh',
    genus: 'Eule'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 7,
    name: 'Noctowl',
    genus: 'Pokémon Búho'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 8,
    name: 'Noctowl',
    genus: 'Pokémon Gufo'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 9,
    name: 'Noctowl',
    genus: 'Owl Pokémon'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 11,
    name: 'ヨルノズク',
    genus: 'ふくろうポケモン'
  },
  {
    pokemon_species_id: 164,
    local_language_id: 12,
    name: '猫头夜鹰',
    genus: '猫头鹰宝可梦'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 1,
    name: 'レディバ',
    genus: 'いつつぼしポケモン'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 2,
    name: 'Rediba',
    genus: ''
  },
  {
    pokemon_species_id: 165,
    local_language_id: 3,
    name: '레디바',
    genus: '별다섯포켓몬'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 4,
    name: '芭瓢蟲',
    genus: '五星寶可夢'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 5,
    name: 'Coxy',
    genus: 'Pokémon 5 Étoiles'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 6,
    name: 'Ledyba',
    genus: 'Fünf-Punkt'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 7,
    name: 'Ledyba',
    genus: 'Pokémon 5 Estrellas'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 8,
    name: 'Ledyba',
    genus: 'Pokémon Pentastra'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 9,
    name: 'Ledyba',
    genus: 'Five Star Pokémon'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 11,
    name: 'レディバ',
    genus: 'いつつぼしポケモン'
  },
  {
    pokemon_species_id: 165,
    local_language_id: 12,
    name: '芭瓢虫',
    genus: '五星宝可梦'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 1,
    name: 'レディアン',
    genus: 'いつつぼしポケモン'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 2,
    name: 'Redian',
    genus: ''
  },
  {
    pokemon_species_id: 166,
    local_language_id: 3,
    name: '레디안',
    genus: '별다섯포켓몬'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 4,
    name: '安瓢蟲',
    genus: '五星寶可夢'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 5,
    name: 'Coxyclaque',
    genus: 'Pokémon 5 Étoiles'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 6,
    name: 'Ledian',
    genus: 'Fünf-Punkt'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 7,
    name: 'Ledian',
    genus: 'Pokémon 5 Estrellas'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 8,
    name: 'Ledian',
    genus: 'Pokémon Pentastra'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 9,
    name: 'Ledian',
    genus: 'Five Star Pokémon'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 11,
    name: 'レディアン',
    genus: 'いつつぼしポケモン'
  },
  {
    pokemon_species_id: 166,
    local_language_id: 12,
    name: '安瓢虫',
    genus: '五星宝可梦'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 1,
    name: 'イトマル',
    genus: 'いとはきポケモン'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 2,
    name: 'Itomaru',
    genus: ''
  },
  {
    pokemon_species_id: 167,
    local_language_id: 3,
    name: '페이검',
    genus: '실뿜기포켓몬'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 4,
    name: '圓絲蛛',
    genus: '吐絲寶可夢'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 5,
    name: 'Mimigal',
    genus: 'Pokémon Crache Fil'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 6,
    name: 'Webarak',
    genus: 'Fadenwurf'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 7,
    name: 'Spinarak',
    genus: 'Pokémon Escupesoga'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 8,
    name: 'Spinarak',
    genus: 'Pokémon Tela'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 9,
    name: 'Spinarak',
    genus: 'String Spit Pokémon'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 11,
    name: 'イトマル',
    genus: 'いとはきポケモン'
  },
  {
    pokemon_species_id: 167,
    local_language_id: 12,
    name: '圆丝蛛',
    genus: '吐丝宝可梦'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 1,
    name: 'アリアドス',
    genus: 'あしながポケモン'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 2,
    name: 'Ariados',
    genus: ''
  },
  {
    pokemon_species_id: 168,
    local_language_id: 3,
    name: '아리아도스',
    genus: '롱다리포켓몬'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 4,
    name: '阿利多斯',
    genus: '長腿寶可夢'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 5,
    name: 'Migalos',
    genus: 'Pokémon Long-Patte'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 6,
    name: 'Ariados',
    genus: 'Langbein'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 7,
    name: 'Ariados',
    genus: 'Pokémon Pata Larga'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 8,
    name: 'Ariados',
    genus: 'Pokémon Lungazampa'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 9,
    name: 'Ariados',
    genus: 'Long Leg Pokémon'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 11,
    name: 'アリアドス',
    genus: 'あしながポケモン'
  },
  {
    pokemon_species_id: 168,
    local_language_id: 12,
    name: '阿利多斯',
    genus: '长腿宝可梦'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 1,
    name: 'クロバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 2,
    name: 'Crobat',
    genus: ''
  },
  {
    pokemon_species_id: 169,
    local_language_id: 3,
    name: '크로뱃',
    genus: '박쥐포켓몬'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 4,
    name: '叉字蝠',
    genus: '蝙蝠寶可夢'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 5,
    name: 'Nostenfer',
    genus: 'Pokémon Chovsouris'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 6,
    name: 'Iksbat',
    genus: 'Fledermaus'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 7,
    name: 'Crobat',
    genus: 'Pokémon Murciélago'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 8,
    name: 'Crobat',
    genus: 'Pokémon Pipistrello'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 9,
    name: 'Crobat',
    genus: 'Bat Pokémon'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 11,
    name: 'クロバット',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 169,
    local_language_id: 12,
    name: '叉字蝠',
    genus: '蝙蝠宝可梦'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 1,
    name: 'チョンチー',
    genus: 'あんこうポケモン'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 2,
    name: 'Chonchie',
    genus: ''
  },
  {
    pokemon_species_id: 170,
    local_language_id: 3,
    name: '초라기',
    genus: '아귀포켓몬'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 4,
    name: '燈籠魚',
    genus: '琵琶魚寶可夢'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 5,
    name: 'Loupio',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 6,
    name: 'Lampi',
    genus: 'Angler'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 7,
    name: 'Chinchou',
    genus: 'Pokémon Rape'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 8,
    name: 'Chinchou',
    genus: 'Pokémon Pescatore'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 9,
    name: 'Chinchou',
    genus: 'Angler Pokémon'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 11,
    name: 'チョンチー',
    genus: 'あんこうポケモン'
  },
  {
    pokemon_species_id: 170,
    local_language_id: 12,
    name: '灯笼鱼',
    genus: '琵琶鱼宝可梦'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 1,
    name: 'ランターン',
    genus: 'ライトポケモン'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 2,
    name: 'Lantern',
    genus: ''
  },
  {
    pokemon_species_id: 171,
    local_language_id: 3,
    name: '랜턴',
    genus: '라이트포켓몬'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 4,
    name: '電燈怪',
    genus: '燈寶可夢'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 5,
    name: 'Lanturn',
    genus: 'Pokémon Lumière'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 6,
    name: 'Lanturn',
    genus: 'Leuchte'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 7,
    name: 'Lanturn',
    genus: 'Pokémon Luz'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 8,
    name: 'Lanturn',
    genus: 'Pokémon Luce'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 9,
    name: 'Lanturn',
    genus: 'Light Pokémon'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 11,
    name: 'ランターン',
    genus: 'ライトポケモン'
  },
  {
    pokemon_species_id: 171,
    local_language_id: 12,
    name: '电灯怪',
    genus: '灯宝可梦'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 1,
    name: 'ピチュー',
    genus: 'こねずみポケモン'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 2,
    name: 'Pichu',
    genus: ''
  },
  {
    pokemon_species_id: 172,
    local_language_id: 3,
    name: '피츄',
    genus: '아기쥐포켓몬'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 4,
    name: '皮丘',
    genus: '小鼠寶可夢'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 5,
    name: 'Pichu',
    genus: 'Pokémon Minisouris'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 6,
    name: 'Pichu',
    genus: 'Babymaus'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 7,
    name: 'Pichu',
    genus: 'Pokémon Ratoncito'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 8,
    name: 'Pichu',
    genus: 'Pokémon Topino'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 9,
    name: 'Pichu',
    genus: 'Tiny Mouse Pokémon'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 11,
    name: 'ピチュー',
    genus: 'こねずみポケモン'
  },
  {
    pokemon_species_id: 172,
    local_language_id: 12,
    name: '皮丘',
    genus: '小鼠宝可梦'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 1,
    name: 'ピィ',
    genus: 'ほしがたポケモン'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 2,
    name: 'Py',
    genus: ''
  },
  {
    pokemon_species_id: 173,
    local_language_id: 3,
    name: '삐',
    genus: '별포켓몬'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 4,
    name: '皮寶寶',
    genus: '星形寶可夢'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 5,
    name: 'Mélo',
    genus: 'Pokémon Étoile'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 6,
    name: 'Pii',
    genus: 'Sternform'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 7,
    name: 'Cleffa',
    genus: 'Pokémon Estrellada'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 8,
    name: 'Cleffa',
    genus: 'Pokémon Stella'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 9,
    name: 'Cleffa',
    genus: 'Star Shape Pokémon'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 11,
    name: 'ピィ',
    genus: 'ほしがたポケモン'
  },
  {
    pokemon_species_id: 173,
    local_language_id: 12,
    name: '皮宝宝',
    genus: '星形宝可梦'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 1,
    name: 'ププリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 2,
    name: 'Pupurin',
    genus: ''
  },
  {
    pokemon_species_id: 174,
    local_language_id: 3,
    name: '푸푸린',
    genus: '풍선포켓몬'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 4,
    name: '寶寶丁',
    genus: '氣球寶可夢'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 5,
    name: 'Toudoudou',
    genus: 'Pokémon Bouboule'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 6,
    name: 'Fluffeluff',
    genus: 'Ballon'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 7,
    name: 'Igglybuff',
    genus: 'Pokémon Globo'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 8,
    name: 'Igglybuff',
    genus: 'Pokémon Pallone'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 9,
    name: 'Igglybuff',
    genus: 'Balloon Pokémon'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 11,
    name: 'ププリン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 174,
    local_language_id: 12,
    name: '宝宝丁',
    genus: '气球宝可梦'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 1,
    name: 'トゲピー',
    genus: 'はりたまポケモン'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 2,
    name: 'Togepy',
    genus: ''
  },
  {
    pokemon_species_id: 175,
    local_language_id: 3,
    name: '토게피',
    genus: '바늘알포켓몬'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 4,
    name: '波克比',
    genus: '針球寶可夢'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 5,
    name: 'Togepi',
    genus: 'Pokémon Balle Pic'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 6,
    name: 'Togepi',
    genus: 'Zackenball'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 7,
    name: 'Togepi',
    genus: 'Pokémon Bolaclavos'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 8,
    name: 'Togepi',
    genus: 'Pokémon Pallapunte'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 9,
    name: 'Togepi',
    genus: 'Spike Ball Pokémon'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 11,
    name: 'トゲピー',
    genus: 'はりたまポケモン'
  },
  {
    pokemon_species_id: 175,
    local_language_id: 12,
    name: '波克比',
    genus: '针球宝可梦'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 1,
    name: 'トゲチック',
    genus: 'しあわせポケモン'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 2,
    name: 'Togechick',
    genus: ''
  },
  {
    pokemon_species_id: 176,
    local_language_id: 3,
    name: '토게틱',
    genus: '행복포켓몬'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 4,
    name: '波克基古',
    genus: '幸福寶可夢'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 5,
    name: 'Togetic',
    genus: 'Pokémon Bonheur'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 6,
    name: 'Togetic',
    genus: 'Freude'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 7,
    name: 'Togetic',
    genus: 'Pokémon Felicidad'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 8,
    name: 'Togetic',
    genus: 'Pokémon Felicità'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 9,
    name: 'Togetic',
    genus: 'Happiness Pokémon'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 11,
    name: 'トゲチック',
    genus: 'しあわせポケモン'
  },
  {
    pokemon_species_id: 176,
    local_language_id: 12,
    name: '波克基古',
    genus: '幸福宝可梦'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 1,
    name: 'ネイティ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 2,
    name: 'Naty',
    genus: ''
  },
  {
    pokemon_species_id: 177,
    local_language_id: 3,
    name: '네이티',
    genus: '아기새포켓몬'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 4,
    name: '天然雀',
    genus: '小鳥寶可夢'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 5,
    name: 'Natu',
    genus: 'Pokémon Minoiseau'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 6,
    name: 'Natu',
    genus: 'Kleinvogel'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 7,
    name: 'Natu',
    genus: 'Pokémon Pajarito'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 8,
    name: 'Natu',
    genus: 'Pokémon Uccellino'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 9,
    name: 'Natu',
    genus: 'Tiny Bird Pokémon'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 11,
    name: 'ネイティ',
    genus: 'ことりポケモン'
  },
  {
    pokemon_species_id: 177,
    local_language_id: 12,
    name: '天然雀',
    genus: '小鸟宝可梦'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 1,
    name: 'ネイティオ',
    genus: 'せいれいポケモン'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 2,
    name: 'Natio',
    genus: ''
  },
  {
    pokemon_species_id: 178,
    local_language_id: 3,
    name: '네이티오',
    genus: '정령포켓몬'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 4,
    name: '天然鳥',
    genus: '神秘寶可夢'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 5,
    name: 'Xatu',
    genus: 'Pokémon Mystique'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 6,
    name: 'Xatu',
    genus: 'Mystik'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 7,
    name: 'Xatu',
    genus: 'Pokémon Místico'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 8,
    name: 'Xatu',
    genus: 'Pokémon Magico'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 9,
    name: 'Xatu',
    genus: 'Mystic Pokémon'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 11,
    name: 'ネイティオ',
    genus: 'せいれいポケモン'
  },
  {
    pokemon_species_id: 178,
    local_language_id: 12,
    name: '天然鸟',
    genus: '神秘宝可梦'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 1,
    name: 'メリープ',
    genus: 'わたげポケモン'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 2,
    name: 'Merriep',
    genus: ''
  },
  {
    pokemon_species_id: 179,
    local_language_id: 3,
    name: '메리프',
    genus: '솜털포켓몬'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 4,
    name: '咩利羊',
    genus: '綿毛寶可夢'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 5,
    name: 'Wattouat',
    genus: 'Pokémon Laine'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 6,
    name: 'Voltilamm',
    genus: 'Wolle'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 7,
    name: 'Mareep',
    genus: 'Pokémon Lana'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 8,
    name: 'Mareep',
    genus: 'Pokémon Lana'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 9,
    name: 'Mareep',
    genus: 'Wool Pokémon'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 11,
    name: 'メリープ',
    genus: 'わたげポケモン'
  },
  {
    pokemon_species_id: 179,
    local_language_id: 12,
    name: '咩利羊',
    genus: '绵毛宝可梦'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 1,
    name: 'モココ',
    genus: 'わたげポケモン'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 2,
    name: 'Mokoko',
    genus: ''
  },
  {
    pokemon_species_id: 180,
    local_language_id: 3,
    name: '보송송',
    genus: '솜털포켓몬'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 4,
    name: '茸茸羊',
    genus: '綿毛寶可夢'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 5,
    name: 'Lainergie',
    genus: 'Pokémon Laine'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 6,
    name: 'Waaty',
    genus: 'Wolle'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 7,
    name: 'Flaaffy',
    genus: 'Pokémon Lana'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 8,
    name: 'Flaaffy',
    genus: 'Pokémon Lana'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 9,
    name: 'Flaaffy',
    genus: 'Wool Pokémon'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 11,
    name: 'モココ',
    genus: 'わたげポケモン'
  },
  {
    pokemon_species_id: 180,
    local_language_id: 12,
    name: '茸茸羊',
    genus: '绵毛宝可梦'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 1,
    name: 'デンリュウ',
    genus: 'ライトポケモン'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 2,
    name: 'Denryu',
    genus: ''
  },
  {
    pokemon_species_id: 181,
    local_language_id: 3,
    name: '전룡',
    genus: '라이트포켓몬'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 4,
    name: '電龍',
    genus: '燈寶可夢'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 5,
    name: 'Pharamp',
    genus: 'Pokémon Lumière'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 6,
    name: 'Ampharos',
    genus: 'Leuchte'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 7,
    name: 'Ampharos',
    genus: 'Pokémon Luz'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 8,
    name: 'Ampharos',
    genus: 'Pokémon Luce'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 9,
    name: 'Ampharos',
    genus: 'Light Pokémon'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 11,
    name: 'デンリュウ',
    genus: 'ライトポケモン'
  },
  {
    pokemon_species_id: 181,
    local_language_id: 12,
    name: '电龙',
    genus: '灯宝可梦'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 1,
    name: 'キレイハナ',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 2,
    name: 'Kireihana',
    genus: ''
  },
  {
    pokemon_species_id: 182,
    local_language_id: 3,
    name: '아르코',
    genus: '꽃포켓몬'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 4,
    name: '美麗花',
    genus: '花寶可夢'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 5,
    name: 'Joliflor',
    genus: 'Pokémon Fleur'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 6,
    name: 'Blubella',
    genus: 'Blume'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 7,
    name: 'Bellossom',
    genus: 'Pokémon Flor'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 8,
    name: 'Bellossom',
    genus: 'Pokémon Fiore'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 9,
    name: 'Bellossom',
    genus: 'Flower Pokémon'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 11,
    name: 'キレイハナ',
    genus: 'フラワーポケモン'
  },
  {
    pokemon_species_id: 182,
    local_language_id: 12,
    name: '美丽花',
    genus: '花宝可梦'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 1,
    name: 'マリル',
    genus: 'みずねずみポケモン'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 2,
    name: 'Maril',
    genus: ''
  },
  {
    pokemon_species_id: 183,
    local_language_id: 3,
    name: '마릴',
    genus: '물쥐포켓몬'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 4,
    name: '瑪力露',
    genus: '水鼠寶可夢'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 5,
    name: 'Marill',
    genus: 'Pokémon Aquasouris'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 6,
    name: 'Marill',
    genus: 'Aquamaus'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 7,
    name: 'Marill',
    genus: 'Pokémon Ratón Agua'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 8,
    name: 'Marill',
    genus: 'Pokémon Acquatopo'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 9,
    name: 'Marill',
    genus: 'Aqua Mouse Pokémon'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 11,
    name: 'マリル',
    genus: 'みずねずみポケモン'
  },
  {
    pokemon_species_id: 183,
    local_language_id: 12,
    name: '玛力露',
    genus: '水鼠宝可梦'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 1,
    name: 'マリルリ',
    genus: 'みずうさぎポケモン'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 2,
    name: 'Marilli',
    genus: ''
  },
  {
    pokemon_species_id: 184,
    local_language_id: 3,
    name: '마릴리',
    genus: '물토끼포켓몬'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 4,
    name: '瑪力露麗',
    genus: '水兔寶可夢'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 5,
    name: 'Azumarill',
    genus: 'Pokémon Aqualapin'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 6,
    name: 'Azumarill',
    genus: 'Aquahase'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 7,
    name: 'Azumarill',
    genus: 'Pokémon Conejo Agua'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 8,
    name: 'Azumarill',
    genus: 'Pokémon Acquniglio'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 9,
    name: 'Azumarill',
    genus: 'Aqua Rabbit Pokémon'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 11,
    name: 'マリルリ',
    genus: 'みずうさぎポケモン'
  },
  {
    pokemon_species_id: 184,
    local_language_id: 12,
    name: '玛力露丽',
    genus: '水兔宝可梦'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 1,
    name: 'ウソッキー',
    genus: 'まねポケモン'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 2,
    name: 'Usokkie',
    genus: ''
  },
  {
    pokemon_species_id: 185,
    local_language_id: 3,
    name: '꼬지모',
    genus: '흉내포켓몬'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 4,
    name: '樹才怪',
    genus: '模仿寶可夢'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 5,
    name: 'Simularbre',
    genus: 'Pokémon Imitation'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 6,
    name: 'Mogelbaum',
    genus: 'Imitation'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 7,
    name: 'Sudowoodo',
    genus: 'Pokémon Imitación'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 8,
    name: 'Sudowoodo',
    genus: 'Pokémon Imitazione'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 9,
    name: 'Sudowoodo',
    genus: 'Imitation Pokémon'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 11,
    name: 'ウソッキー',
    genus: 'まねポケモン'
  },
  {
    pokemon_species_id: 185,
    local_language_id: 12,
    name: '树才怪',
    genus: '模仿宝可梦'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 1,
    name: 'ニョロトノ',
    genus: 'かえるポケモン'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 2,
    name: 'Nyorotono',
    genus: ''
  },
  {
    pokemon_species_id: 186,
    local_language_id: 3,
    name: '왕구리',
    genus: '개구리포켓몬'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 4,
    name: '蚊香蛙皇',
    genus: '蛙寶可夢'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 5,
    name: 'Tarpaud',
    genus: 'Pokémon Grenouille'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 6,
    name: 'Quaxo',
    genus: 'Frosch'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 7,
    name: 'Politoed',
    genus: 'Pokémon Rana'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 8,
    name: 'Politoed',
    genus: 'Pokémon Rana'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 9,
    name: 'Politoed',
    genus: 'Frog Pokémon'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 11,
    name: 'ニョロトノ',
    genus: 'かえるポケモン'
  },
  {
    pokemon_species_id: 186,
    local_language_id: 12,
    name: '蚊香蛙皇',
    genus: '蛙宝可梦'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 1,
    name: 'ハネッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 2,
    name: 'Hanecco',
    genus: ''
  },
  {
    pokemon_species_id: 187,
    local_language_id: 3,
    name: '통통코',
    genus: '솜풀포켓몬'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 4,
    name: '毽子草',
    genus: '棉草寶可夢'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 5,
    name: 'Granivol',
    genus: 'Pokémon Pissenlit'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 6,
    name: 'Hoppspross',
    genus: 'Löwenzahn'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 7,
    name: 'Hoppip',
    genus: 'Pokémon Algadón'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 8,
    name: 'Hoppip',
    genus: 'Pokémon Gramigna'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 9,
    name: 'Hoppip',
    genus: 'Cottonweed Pokémon'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 11,
    name: 'ハネッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 187,
    local_language_id: 12,
    name: '毽子草',
    genus: '棉草宝可梦'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 1,
    name: 'ポポッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 2,
    name: 'Popocco',
    genus: ''
  },
  {
    pokemon_species_id: 188,
    local_language_id: 3,
    name: '두코',
    genus: '솜풀포켓몬'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 4,
    name: '毽子花',
    genus: '棉草寶可夢'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 5,
    name: 'Floravol',
    genus: 'Pokémon Pissenlit'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 6,
    name: 'Hubelupf',
    genus: 'Löwenzahn'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 7,
    name: 'Skiploom',
    genus: 'Pokémon Algadón'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 8,
    name: 'Skiploom',
    genus: 'Pokémon Gramigna'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 9,
    name: 'Skiploom',
    genus: 'Cottonweed Pokémon'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 11,
    name: 'ポポッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 188,
    local_language_id: 12,
    name: '毽子花',
    genus: '棉草宝可梦'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 1,
    name: 'ワタッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 2,
    name: 'Watacco',
    genus: ''
  },
  {
    pokemon_species_id: 189,
    local_language_id: 3,
    name: '솜솜코',
    genus: '솜풀포켓몬'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 4,
    name: '毽子棉',
    genus: '棉草寶可夢'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 5,
    name: 'Cotovol',
    genus: 'Pokémon Pissenlit'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 6,
    name: 'Papungha',
    genus: 'Löwenzahn'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 7,
    name: 'Jumpluff',
    genus: 'Pokémon Algadón'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 8,
    name: 'Jumpluff',
    genus: 'Pokémon Gramigna'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 9,
    name: 'Jumpluff',
    genus: 'Cottonweed Pokémon'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 11,
    name: 'ワタッコ',
    genus: 'わたくさポケモン'
  },
  {
    pokemon_species_id: 189,
    local_language_id: 12,
    name: '毽子棉',
    genus: '棉草宝可梦'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 1,
    name: 'エイパム',
    genus: 'おながポケモン'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 2,
    name: 'Eipam',
    genus: ''
  },
  {
    pokemon_species_id: 190,
    local_language_id: 3,
    name: '에이팜',
    genus: '긴꼬리포켓몬'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 4,
    name: '長尾怪手',
    genus: '長尾寶可夢'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 5,
    name: 'Capumain',
    genus: 'Pokémon Longqueue'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 6,
    name: 'Griffel',
    genus: 'Langschweif'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 7,
    name: 'Aipom',
    genus: 'Pokémon Cola Larga'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 8,
    name: 'Aipom',
    genus: 'Pokémon Lungacoda'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 9,
    name: 'Aipom',
    genus: 'Long Tail Pokémon'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 11,
    name: 'エイパム',
    genus: 'おながポケモン'
  },
  {
    pokemon_species_id: 190,
    local_language_id: 12,
    name: '长尾怪手',
    genus: '长尾宝可梦'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 1,
    name: 'ヒマナッツ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 2,
    name: 'Himanuts',
    genus: ''
  },
  {
    pokemon_species_id: 191,
    local_language_id: 3,
    name: '해너츠',
    genus: '씨앗포켓몬'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 4,
    name: '向日種子',
    genus: '種子寶可夢'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 5,
    name: 'Tournegrin',
    genus: 'Pokémon Graine'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 6,
    name: 'Sonnkern',
    genus: 'Samen'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 7,
    name: 'Sunkern',
    genus: 'Pokémon Semilla'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 8,
    name: 'Sunkern',
    genus: 'Pokémon Seme'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 9,
    name: 'Sunkern',
    genus: 'Seed Pokémon'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 11,
    name: 'ヒマナッツ',
    genus: 'たねポケモン'
  },
  {
    pokemon_species_id: 191,
    local_language_id: 12,
    name: '向日种子',
    genus: '种子宝可梦'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 1,
    name: 'キマワリ',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 2,
    name: 'Kimawari',
    genus: ''
  },
  {
    pokemon_species_id: 192,
    local_language_id: 3,
    name: '해루미',
    genus: '태양포켓몬'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 4,
    name: '向日花怪',
    genus: '太陽寶可夢'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 5,
    name: 'Héliatronc',
    genus: 'Pokémon Soleil'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 6,
    name: 'Sonnflora',
    genus: 'Sonne'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 7,
    name: 'Sunflora',
    genus: 'Pokémon Sol'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 8,
    name: 'Sunflora',
    genus: 'Pokémon Sole'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 9,
    name: 'Sunflora',
    genus: 'Sun Pokémon'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 11,
    name: 'キマワリ',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 192,
    local_language_id: 12,
    name: '向日花怪',
    genus: '太阳宝可梦'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 1,
    name: 'ヤンヤンマ',
    genus: 'うすばねポケモン'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 2,
    name: 'Yanyanma',
    genus: ''
  },
  {
    pokemon_species_id: 193,
    local_language_id: 3,
    name: '왕자리',
    genus: '얇은날개포켓몬'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 4,
    name: '蜻蜻蜓',
    genus: '薄翼寶可夢'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 5,
    name: 'Yanma',
    genus: 'Pokémon Translaile'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 6,
    name: 'Yanma',
    genus: 'Libelle'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 7,
    name: 'Yanma',
    genus: 'Pokémon Ala Clara'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 8,
    name: 'Yanma',
    genus: 'Pokémon Alachiara'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 9,
    name: 'Yanma',
    genus: 'Clear Wing Pokémon'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 11,
    name: 'ヤンヤンマ',
    genus: 'うすばねポケモン'
  },
  {
    pokemon_species_id: 193,
    local_language_id: 12,
    name: '蜻蜻蜓',
    genus: '薄翼宝可梦'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 1,
    name: 'ウパー',
    genus: 'みずうおポケモン'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 2,
    name: 'Upah',
    genus: ''
  },
  {
    pokemon_species_id: 194,
    local_language_id: 3,
    name: '우파',
    genus: '수어포켓몬'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 4,
    name: '烏波',
    genus: '水魚寶可夢'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 5,
    name: 'Axoloto',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 6,
    name: 'Felino',
    genus: 'Fisch'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 7,
    name: 'Wooper',
    genus: 'Pokémon Pez Agua'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 8,
    name: 'Wooper',
    genus: 'Pokémon Acquapesce'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 9,
    name: 'Wooper',
    genus: 'Water Fish Pokémon'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 11,
    name: 'ウパー',
    genus: 'みずうおポケモン'
  },
  {
    pokemon_species_id: 194,
    local_language_id: 12,
    name: '乌波',
    genus: '水鱼宝可梦'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 1,
    name: 'ヌオー',
    genus: 'みずうおポケモン'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 2,
    name: 'Nuoh',
    genus: ''
  },
  {
    pokemon_species_id: 195,
    local_language_id: 3,
    name: '누오',
    genus: '수어포켓몬'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 4,
    name: '沼王',
    genus: '水魚寶可夢'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 5,
    name: 'Maraiste',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 6,
    name: 'Morlord',
    genus: 'Fisch'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 7,
    name: 'Quagsire',
    genus: 'Pokémon Pez Agua'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 8,
    name: 'Quagsire',
    genus: 'Pokémon Acquapesce'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 9,
    name: 'Quagsire',
    genus: 'Water Fish Pokémon'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 11,
    name: 'ヌオー',
    genus: 'みずうおポケモン'
  },
  {
    pokemon_species_id: 195,
    local_language_id: 12,
    name: '沼王',
    genus: '水鱼宝可梦'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 1,
    name: 'エーフィ',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 2,
    name: 'Eifie',
    genus: ''
  },
  {
    pokemon_species_id: 196,
    local_language_id: 3,
    name: '에브이',
    genus: '태양포켓몬'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 4,
    name: '太陽伊布',
    genus: '太陽寶可夢'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 5,
    name: 'Mentali',
    genus: 'Pokémon Soleil'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 6,
    name: 'Psiana',
    genus: 'Sonne'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 7,
    name: 'Espeon',
    genus: 'Pokémon Sol'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 8,
    name: 'Espeon',
    genus: 'Pokémon Sole'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 9,
    name: 'Espeon',
    genus: 'Sun Pokémon'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 11,
    name: 'エーフィ',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 196,
    local_language_id: 12,
    name: '太阳伊布',
    genus: '太阳宝可梦'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 1,
    name: 'ブラッキー',
    genus: 'げっこうポケモン'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 2,
    name: 'Blacky',
    genus: ''
  },
  {
    pokemon_species_id: 197,
    local_language_id: 3,
    name: '블래키',
    genus: '달빛포켓몬'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 4,
    name: '月亮伊布',
    genus: '月光寶可夢'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 5,
    name: 'Noctali',
    genus: 'Pokémon Lune'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 6,
    name: 'Nachtara',
    genus: 'Mondschein'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 7,
    name: 'Umbreon',
    genus: 'Pokémon Luz Lunar'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 8,
    name: 'Umbreon',
    genus: 'Pokémon Lucelunare'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 9,
    name: 'Umbreon',
    genus: 'Moonlight Pokémon'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 11,
    name: 'ブラッキー',
    genus: 'げっこうポケモン'
  },
  {
    pokemon_species_id: 197,
    local_language_id: 12,
    name: '月亮伊布',
    genus: '月光宝可梦'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 1,
    name: 'ヤミカラス',
    genus: 'くらやみポケモン'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 2,
    name: 'Yamikarasu',
    genus: ''
  },
  {
    pokemon_species_id: 198,
    local_language_id: 3,
    name: '니로우',
    genus: '어둠포켓몬'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 4,
    name: '黑暗鴉',
    genus: '黑暗寶可夢'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 5,
    name: 'Cornèbre',
    genus: 'Pokémon Obscurité'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 6,
    name: 'Kramurx',
    genus: 'Finsternis'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 7,
    name: 'Murkrow',
    genus: 'Pokémon Oscuridad'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 8,
    name: 'Murkrow',
    genus: 'Pokémon Oscurità'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 9,
    name: 'Murkrow',
    genus: 'Darkness Pokémon'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 11,
    name: 'ヤミカラス',
    genus: 'くらやみポケモン'
  },
  {
    pokemon_species_id: 198,
    local_language_id: 12,
    name: '黑暗鸦',
    genus: '黑暗宝可梦'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 1,
    name: 'ヤドキング',
    genus: 'おうじゃポケモン'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 2,
    name: 'Yadoking',
    genus: ''
  },
  {
    pokemon_species_id: 199,
    local_language_id: 3,
    name: '야도킹',
    genus: '임금포켓몬'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 4,
    name: '呆呆王',
    genus: '王者寶可夢'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 5,
    name: 'Roigada',
    genus: 'Pokémon Royal'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 6,
    name: 'Laschoking',
    genus: 'Monarch'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 7,
    name: 'Slowking',
    genus: 'Pokémon Regio'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 8,
    name: 'Slowking',
    genus: 'Pokémon Reale'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 9,
    name: 'Slowking',
    genus: 'Royal Pokémon'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 11,
    name: 'ヤドキング',
    genus: 'おうじゃポケモン'
  },
  {
    pokemon_species_id: 199,
    local_language_id: 12,
    name: '呆呆王',
    genus: '王者宝可梦'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 1,
    name: 'ムウマ',
    genus: 'よなきポケモン'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 2,
    name: 'Muma',
    genus: ''
  },
  {
    pokemon_species_id: 200,
    local_language_id: 3,
    name: '무우마',
    genus: '야명포켓몬'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 4,
    name: '夢妖',
    genus: '夜啼寶可夢'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 5,
    name: 'Feuforêve',
    genus: 'Pokémon Strident'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 6,
    name: 'Traunfugil',
    genus: 'Kreischer'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 7,
    name: 'Misdreavus',
    genus: 'Pokémon Chirrido'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 8,
    name: 'Misdreavus',
    genus: 'Pokémon Strido'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 9,
    name: 'Misdreavus',
    genus: 'Screech Pokémon'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 11,
    name: 'ムウマ',
    genus: 'よなきポケモン'
  },
  {
    pokemon_species_id: 200,
    local_language_id: 12,
    name: '梦妖',
    genus: '夜啼宝可梦'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 1,
    name: 'アンノーン',
    genus: 'シンボルポケモン'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 2,
    name: 'Unknown',
    genus: ''
  },
  {
    pokemon_species_id: 201,
    local_language_id: 3,
    name: '안농',
    genus: '심볼포켓몬'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 4,
    name: '未知圖騰',
    genus: '象徵寶可夢'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 5,
    name: 'Zarbi',
    genus: 'Pokémon Symbolique'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 6,
    name: 'Icognito',
    genus: 'Symbol'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 7,
    name: 'Unown',
    genus: 'Pokémon Símbolo'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 8,
    name: 'Unown',
    genus: 'Pokémon Simbolo'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 9,
    name: 'Unown',
    genus: 'Symbol Pokémon'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 11,
    name: 'アンノーン',
    genus: 'シンボルポケモン'
  },
  {
    pokemon_species_id: 201,
    local_language_id: 12,
    name: '未知图腾',
    genus: '象征宝可梦'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 1,
    name: 'ソーナンス',
    genus: 'がまんポケモン'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 2,
    name: 'Sonans',
    genus: ''
  },
  {
    pokemon_species_id: 202,
    local_language_id: 3,
    name: '마자용',
    genus: '참기포켓몬'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 4,
    name: '果然翁',
    genus: '忍耐寶可夢'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 5,
    name: 'Qulbutoké',
    genus: 'Pokémon Patient'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 6,
    name: 'Woingenau',
    genus: 'Geduld'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 7,
    name: 'Wobbuffet',
    genus: 'Pokémon Paciente'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 8,
    name: 'Wobbuffet',
    genus: 'Pokémon Pazienza'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 9,
    name: 'Wobbuffet',
    genus: 'Patient Pokémon'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 11,
    name: 'ソーナンス',
    genus: 'がまんポケモン'
  },
  {
    pokemon_species_id: 202,
    local_language_id: 12,
    name: '果然翁',
    genus: '忍耐宝可梦'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 1,
    name: 'キリンリキ',
    genus: 'くびながポケモン'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 2,
    name: 'Kirinriki',
    genus: ''
  },
  {
    pokemon_species_id: 203,
    local_language_id: 3,
    name: '키링키',
    genus: '긴목포켓몬'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 4,
    name: '麒麟奇',
    genus: '長頸寶可夢'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 5,
    name: 'Girafarig',
    genus: 'Pokémon Long-Cou'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 6,
    name: 'Girafarig',
    genus: 'Langhals'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 7,
    name: 'Girafarig',
    genus: 'Pokémon Gran Cuello'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 8,
    name: 'Girafarig',
    genus: 'Pokémon Lungocollo'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 9,
    name: 'Girafarig',
    genus: 'Long Neck Pokémon'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 11,
    name: 'キリンリキ',
    genus: 'くびながポケモン'
  },
  {
    pokemon_species_id: 203,
    local_language_id: 12,
    name: '麒麟奇',
    genus: '长颈宝可梦'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 1,
    name: 'クヌギダマ',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 2,
    name: 'Kunugidama',
    genus: ''
  },
  {
    pokemon_species_id: 204,
    local_language_id: 3,
    name: '피콘',
    genus: '도롱이벌레포켓몬'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 4,
    name: '榛果球',
    genus: '蓑衣蟲寶可夢'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 5,
    name: 'Pomdepik',
    genus: 'Pokémon Ver Caché'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 6,
    name: 'Tannza',
    genus: 'Beutelwurm'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 7,
    name: 'Pineco',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 8,
    name: 'Pineco',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 9,
    name: 'Pineco',
    genus: 'Bagworm Pokémon'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 11,
    name: 'クヌギダマ',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 204,
    local_language_id: 12,
    name: '榛果球',
    genus: '蓑衣虫宝可梦'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 1,
    name: 'フォレトス',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 2,
    name: 'Foretos',
    genus: ''
  },
  {
    pokemon_species_id: 205,
    local_language_id: 3,
    name: '쏘콘',
    genus: '도롱이벌레포켓몬'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 4,
    name: '佛烈托斯',
    genus: '蓑衣蟲寶可夢'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 5,
    name: 'Foretress',
    genus: 'Pokémon Ver Caché'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 6,
    name: 'Forstellka',
    genus: 'Beutelwurm'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 7,
    name: 'Forretress',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 8,
    name: 'Forretress',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 9,
    name: 'Forretress',
    genus: 'Bagworm Pokémon'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 11,
    name: 'フォレトス',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 205,
    local_language_id: 12,
    name: '佛烈托斯',
    genus: '蓑衣虫宝可梦'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 1,
    name: 'ノコッチ',
    genus: 'つちへびポケモン'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 2,
    name: 'Nokocchi',
    genus: ''
  },
  {
    pokemon_species_id: 206,
    local_language_id: 3,
    name: '노고치',
    genus: '땅뱀포켓몬'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 4,
    name: '土龍弟弟',
    genus: '地蛇寶可夢'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 5,
    name: 'Insolourdo',
    genus: 'Pokémon Serpent'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 6,
    name: 'Dummisel',
    genus: 'Schlange'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 7,
    name: 'Dunsparce',
    genus: 'Pokémon Serptierra'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 8,
    name: 'Dunsparce',
    genus: 'Pokémon Terraserpe'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 9,
    name: 'Dunsparce',
    genus: 'Land Snake Pokémon'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 11,
    name: 'ノコッチ',
    genus: 'つちへびポケモン'
  },
  {
    pokemon_species_id: 206,
    local_language_id: 12,
    name: '土龙弟弟',
    genus: '地蛇宝可梦'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 1,
    name: 'グライガー',
    genus: 'とびさそりポケモン'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 2,
    name: 'Gliger',
    genus: ''
  },
  {
    pokemon_species_id: 207,
    local_language_id: 3,
    name: '글라이거',
    genus: '날전갈포켓몬'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 4,
    name: '天蠍',
    genus: '飛蠍寶可夢'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 5,
    name: 'Scorplane',
    genus: 'Pokémon Scorpivol'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 6,
    name: 'Skorgla',
    genus: 'Flugskorpi'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 7,
    name: 'Gligar',
    genus: 'Pokémon Escorpiala'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 8,
    name: 'Gligar',
    genus: 'Pokémon Aliscorpio'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 9,
    name: 'Gligar',
    genus: 'Fly Scorpion Pokémon'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 11,
    name: 'グライガー',
    genus: 'とびさそりポケモン'
  },
  {
    pokemon_species_id: 207,
    local_language_id: 12,
    name: '天蝎',
    genus: '飞蝎宝可梦'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 1,
    name: 'ハガネール',
    genus: 'てつへびポケモン'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 2,
    name: 'Haganeil',
    genus: ''
  },
  {
    pokemon_species_id: 208,
    local_language_id: 3,
    name: '강철톤',
    genus: '철뱀포켓몬'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 4,
    name: '大鋼蛇',
    genus: '鐵蛇寶可夢'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 5,
    name: 'Steelix',
    genus: 'Pokémon Serpenfer'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 6,
    name: 'Stahlos',
    genus: 'Stahlboa'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 7,
    name: 'Steelix',
    genus: 'Pokémon Serpférrea'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 8,
    name: 'Steelix',
    genus: 'Pokémon Ferroserpe'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 9,
    name: 'Steelix',
    genus: 'Iron Snake Pokémon'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 11,
    name: 'ハガネール',
    genus: 'てつへびポケモン'
  },
  {
    pokemon_species_id: 208,
    local_language_id: 12,
    name: '大钢蛇',
    genus: '铁蛇宝可梦'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 1,
    name: 'ブルー',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 2,
    name: 'Bulu',
    genus: ''
  },
  {
    pokemon_species_id: 209,
    local_language_id: 3,
    name: '블루',
    genus: '요정포켓몬'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 4,
    name: '布魯',
    genus: '妖精寶可夢'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 5,
    name: 'Snubbull',
    genus: 'Pokémon Fée'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 6,
    name: 'Snubbull',
    genus: 'Fee'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 7,
    name: 'Snubbull',
    genus: 'Pokémon Hada'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 8,
    name: 'Snubbull',
    genus: 'Pokémon Fata'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 9,
    name: 'Snubbull',
    genus: 'Fairy Pokémon'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 11,
    name: 'ブルー',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 209,
    local_language_id: 12,
    name: '布鲁',
    genus: '妖精宝可梦'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 1,
    name: 'グランブル',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 2,
    name: 'Granbulu',
    genus: ''
  },
  {
    pokemon_species_id: 210,
    local_language_id: 3,
    name: '그랑블루',
    genus: '요정포켓몬'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 4,
    name: '布魯皇',
    genus: '妖精寶可夢'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 5,
    name: 'Granbull',
    genus: 'Pokémon Fée'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 6,
    name: 'Granbull',
    genus: 'Fee'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 7,
    name: 'Granbull',
    genus: 'Pokémon Hada'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 8,
    name: 'Granbull',
    genus: 'Pokémon Fata'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 9,
    name: 'Granbull',
    genus: 'Fairy Pokémon'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 11,
    name: 'グランブル',
    genus: 'ようせいポケモン'
  },
  {
    pokemon_species_id: 210,
    local_language_id: 12,
    name: '布鲁皇',
    genus: '妖精宝可梦'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 1,
    name: 'ハリーセン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 2,
    name: 'Harysen',
    genus: ''
  },
  {
    pokemon_species_id: 211,
    local_language_id: 3,
    name: '침바루',
    genus: '풍선포켓몬'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 4,
    name: '千針魚',
    genus: '氣球寶可夢'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 5,
    name: 'Qwilfish',
    genus: 'Pokémon Bouboule'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 6,
    name: 'Baldorfish',
    genus: 'Ballon'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 7,
    name: 'Qwilfish',
    genus: 'Pokémon Globo'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 8,
    name: 'Qwilfish',
    genus: 'Pokémon Pallone'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 9,
    name: 'Qwilfish',
    genus: 'Balloon Pokémon'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 11,
    name: 'ハリーセン',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 211,
    local_language_id: 12,
    name: '千针鱼',
    genus: '气球宝可梦'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 1,
    name: 'ハッサム',
    genus: 'はさみポケモン'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 2,
    name: 'Hassam',
    genus: ''
  },
  {
    pokemon_species_id: 212,
    local_language_id: 3,
    name: '핫삼',
    genus: '집게포켓몬'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 4,
    name: '巨鉗螳螂',
    genus: '鉗子寶可夢'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 5,
    name: 'Cizayox',
    genus: 'Pokémon Pince'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 6,
    name: 'Scherox',
    genus: 'Kneifer'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 7,
    name: 'Scizor',
    genus: 'Pokémon Tenaza'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 8,
    name: 'Scizor',
    genus: 'Pokémon Chela'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 9,
    name: 'Scizor',
    genus: 'Pincer Pokémon'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 11,
    name: 'ハッサム',
    genus: 'はさみポケモン'
  },
  {
    pokemon_species_id: 212,
    local_language_id: 12,
    name: '巨钳螳螂',
    genus: '钳子宝可梦'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 1,
    name: 'ツボツボ',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 2,
    name: 'Tsubotsubo',
    genus: ''
  },
  {
    pokemon_species_id: 213,
    local_language_id: 3,
    name: '단단지',
    genus: '발효포켓몬'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 4,
    name: '壺壺',
    genus: '發酵寶可夢'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 5,
    name: 'Caratroc',
    genus: 'Pokémon Pourri'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 6,
    name: 'Pottrott',
    genus: 'Schimmel'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 7,
    name: 'Shuckle',
    genus: 'Pokémon Moho'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 8,
    name: 'Shuckle',
    genus: 'Pokémon Muffa'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 9,
    name: 'Shuckle',
    genus: 'Mold Pokémon'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 11,
    name: 'ツボツボ',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 213,
    local_language_id: 12,
    name: '壶壶',
    genus: '发酵宝可梦'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 1,
    name: 'ヘラクロス',
    genus: '１ぽんヅノポケモン'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 2,
    name: 'Heracros',
    genus: ''
  },
  {
    pokemon_species_id: 214,
    local_language_id: 3,
    name: '헤라크로스',
    genus: '외뿔포켓몬'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 4,
    name: '赫拉克羅斯',
    genus: '獨角寶可夢'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 5,
    name: 'Scarhino',
    genus: 'Pokémon Unicorne'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 6,
    name: 'Skaraborn',
    genus: 'Einzelhorn'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 7,
    name: 'Heracross',
    genus: 'Pokémon Unicornio'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 8,
    name: 'Heracross',
    genus: 'Pokémon Monocorno'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 9,
    name: 'Heracross',
    genus: 'Single Horn Pokémon'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 11,
    name: 'ヘラクロス',
    genus: '１ぽんヅノポケモン'
  },
  {
    pokemon_species_id: 214,
    local_language_id: 12,
    name: '赫拉克罗斯',
    genus: '独角宝可梦'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 1,
    name: 'ニューラ',
    genus: 'かぎづめポケモン'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 2,
    name: 'Nyula',
    genus: ''
  },
  {
    pokemon_species_id: 215,
    local_language_id: 3,
    name: '포푸니',
    genus: '갈고리손톱포켓몬'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 4,
    name: '狃拉',
    genus: '鉤爪寶可夢'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 5,
    name: 'Farfuret',
    genus: 'Pokémon Grifacérée'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 6,
    name: 'Sniebel',
    genus: 'Stichklaue'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 7,
    name: 'Sneasel',
    genus: 'Pokémon Garra Filo'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 8,
    name: 'Sneasel',
    genus: 'Pokémon Lamartigli'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 9,
    name: 'Sneasel',
    genus: 'Sharp Claw Pokémon'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 11,
    name: 'ニューラ',
    genus: 'かぎづめポケモン'
  },
  {
    pokemon_species_id: 215,
    local_language_id: 12,
    name: '狃拉',
    genus: '钩爪宝可梦'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 1,
    name: 'ヒメグマ',
    genus: 'こぐまポケモン'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 2,
    name: 'Himeguma',
    genus: ''
  },
  {
    pokemon_species_id: 216,
    local_language_id: 3,
    name: '깜지곰',
    genus: '아기곰포켓몬'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 4,
    name: '熊寶寶',
    genus: '小熊寶可夢'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 5,
    name: 'Teddiursa',
    genus: 'Pokémon Mini Ours'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 6,
    name: 'Teddiursa',
    genus: 'Kleinbär'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 7,
    name: 'Teddiursa',
    genus: 'Pokémon Osito'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 8,
    name: 'Teddiursa',
    genus: 'Pokémon Orsetto'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 9,
    name: 'Teddiursa',
    genus: 'Little Bear Pokémon'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 11,
    name: 'ヒメグマ',
    genus: 'こぐまポケモン'
  },
  {
    pokemon_species_id: 216,
    local_language_id: 12,
    name: '熊宝宝',
    genus: '小熊宝可梦'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 1,
    name: 'リングマ',
    genus: 'とうみんポケモン'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 2,
    name: 'Ringuma',
    genus: ''
  },
  {
    pokemon_species_id: 217,
    local_language_id: 3,
    name: '링곰',
    genus: '동면포켓몬'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 4,
    name: '圈圈熊',
    genus: '冬眠寶可夢'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 5,
    name: 'Ursaring',
    genus: 'Pokémon Hibernant'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 6,
    name: 'Ursaring',
    genus: 'Schläfer'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 7,
    name: 'Ursaring',
    genus: 'Pokémon Hibernante'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 8,
    name: 'Ursaring',
    genus: 'Pokémon Letargo'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 9,
    name: 'Ursaring',
    genus: 'Hibernator Pokémon'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 11,
    name: 'リングマ',
    genus: 'とうみんポケモン'
  },
  {
    pokemon_species_id: 217,
    local_language_id: 12,
    name: '圈圈熊',
    genus: '冬眠宝可梦'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 1,
    name: 'マグマッグ',
    genus: 'ようがんポケモン'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 2,
    name: 'Magmag',
    genus: ''
  },
  {
    pokemon_species_id: 218,
    local_language_id: 3,
    name: '마그마그',
    genus: '용암포켓몬'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 4,
    name: '熔岩蟲',
    genus: '熔岩寶可夢'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 5,
    name: 'Limagma',
    genus: 'Pokémon Lave'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 6,
    name: 'Schneckmag',
    genus: 'Lava'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 7,
    name: 'Slugma',
    genus: 'Pokémon Lava'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 8,
    name: 'Slugma',
    genus: 'Pokémon Lava'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 9,
    name: 'Slugma',
    genus: 'Lava Pokémon'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 11,
    name: 'マグマッグ',
    genus: 'ようがんポケモン'
  },
  {
    pokemon_species_id: 218,
    local_language_id: 12,
    name: '熔岩虫',
    genus: '熔岩宝可梦'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 1,
    name: 'マグカルゴ',
    genus: 'ようがんポケモン'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 2,
    name: 'Magcargot',
    genus: ''
  },
  {
    pokemon_species_id: 219,
    local_language_id: 3,
    name: '마그카르고',
    genus: '용암포켓몬'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 4,
    name: '熔岩蝸牛',
    genus: '熔岩寶可夢'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 5,
    name: 'Volcaropod',
    genus: 'Pokémon Lave'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 6,
    name: 'Magcargo',
    genus: 'Lava'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 7,
    name: 'Magcargo',
    genus: 'Pokémon Lava'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 8,
    name: 'Magcargo',
    genus: 'Pokémon Lava'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 9,
    name: 'Magcargo',
    genus: 'Lava Pokémon'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 11,
    name: 'マグカルゴ',
    genus: 'ようがんポケモン'
  },
  {
    pokemon_species_id: 219,
    local_language_id: 12,
    name: '熔岩蜗牛',
    genus: '熔岩宝可梦'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 1,
    name: 'ウリムー',
    genus: 'いのぶたポケモン'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 2,
    name: 'Urimoo',
    genus: ''
  },
  {
    pokemon_species_id: 220,
    local_language_id: 3,
    name: '꾸꾸리',
    genus: '산돼지포켓몬'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 4,
    name: '小山豬',
    genus: '小豬寶可夢'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 5,
    name: 'Marcacrin',
    genus: 'Pokémon Cochon'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 6,
    name: 'Quiekel',
    genus: 'Ferkel'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 7,
    name: 'Swinub',
    genus: 'Pokémon Cerdo'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 8,
    name: 'Swinub',
    genus: 'Pokémon Maiale'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 9,
    name: 'Swinub',
    genus: 'Pig Pokémon'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 11,
    name: 'ウリムー',
    genus: 'いのぶたポケモン'
  },
  {
    pokemon_species_id: 220,
    local_language_id: 12,
    name: '小山猪',
    genus: '小猪宝可梦'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 1,
    name: 'イノムー',
    genus: 'いのししポケモン'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 2,
    name: 'Inomoo',
    genus: ''
  },
  {
    pokemon_species_id: 221,
    local_language_id: 3,
    name: '메꾸리',
    genus: '멧돼지포켓몬'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 4,
    name: '長毛豬',
    genus: '野豬寶可夢'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 5,
    name: 'Cochignon',
    genus: 'Pokémon Porc'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 6,
    name: 'Keifel',
    genus: 'Schwein'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 7,
    name: 'Piloswine',
    genus: 'Pokémon Puerco'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 8,
    name: 'Piloswine',
    genus: 'Pokémon Suino'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 9,
    name: 'Piloswine',
    genus: 'Swine Pokémon'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 11,
    name: 'イノムー',
    genus: 'いのししポケモン'
  },
  {
    pokemon_species_id: 221,
    local_language_id: 12,
    name: '长毛猪',
    genus: '野猪宝可梦'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 1,
    name: 'サニーゴ',
    genus: 'さんごポケモン'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 2,
    name: 'Sunnygo',
    genus: ''
  },
  {
    pokemon_species_id: 222,
    local_language_id: 3,
    name: '코산호',
    genus: '산호포켓몬'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 4,
    name: '太陽珊瑚',
    genus: '珊瑚寶可夢'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 5,
    name: 'Corayon',
    genus: 'Pokémon Corail'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 6,
    name: 'Corasonn',
    genus: 'Koralle'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 7,
    name: 'Corsola',
    genus: 'Pokémon Coral'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 8,
    name: 'Corsola',
    genus: 'Pokémon Corallo'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 9,
    name: 'Corsola',
    genus: 'Coral Pokémon'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 11,
    name: 'サニーゴ',
    genus: 'さんごポケモン'
  },
  {
    pokemon_species_id: 222,
    local_language_id: 12,
    name: '太阳珊瑚',
    genus: '珊瑚宝可梦'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 1,
    name: 'テッポウオ',
    genus: 'ふんしゃポケモン'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 2,
    name: 'Teppouo',
    genus: ''
  },
  {
    pokemon_species_id: 223,
    local_language_id: 3,
    name: '총어',
    genus: '분사포켓몬'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 4,
    name: '鐵砲魚',
    genus: '噴射寶可夢'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 5,
    name: 'Rémoraid',
    genus: 'Pokémon Jet'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 6,
    name: 'Remoraid',
    genus: 'Hochdruck'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 7,
    name: 'Remoraid',
    genus: 'Pokémon Reactor'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 8,
    name: 'Remoraid',
    genus: 'Pokémon Jet'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 9,
    name: 'Remoraid',
    genus: 'Jet Pokémon'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 11,
    name: 'テッポウオ',
    genus: 'ふんしゃポケモン'
  },
  {
    pokemon_species_id: 223,
    local_language_id: 12,
    name: '铁炮鱼',
    genus: '喷射宝可梦'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 1,
    name: 'オクタン',
    genus: 'ふんしゃポケモン'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 2,
    name: 'Okutank',
    genus: ''
  },
  {
    pokemon_species_id: 224,
    local_language_id: 3,
    name: '대포무노',
    genus: '분사포켓몬'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 4,
    name: '章魚桶',
    genus: '噴射寶可夢'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 5,
    name: 'Octillery',
    genus: 'Pokémon Jet'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 6,
    name: 'Octillery',
    genus: 'Hochdruck'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 7,
    name: 'Octillery',
    genus: 'Pokémon Reactor'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 8,
    name: 'Octillery',
    genus: 'Pokémon Jet'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 9,
    name: 'Octillery',
    genus: 'Jet Pokémon'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 11,
    name: 'オクタン',
    genus: 'ふんしゃポケモン'
  },
  {
    pokemon_species_id: 224,
    local_language_id: 12,
    name: '章鱼桶',
    genus: '喷射宝可梦'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 1,
    name: 'デリバード',
    genus: 'はこびやポケモン'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 2,
    name: 'Delibird',
    genus: ''
  },
  {
    pokemon_species_id: 225,
    local_language_id: 3,
    name: '딜리버드',
    genus: '배달포켓몬'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 4,
    name: '信使鳥',
    genus: '搬運寶可夢'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 5,
    name: 'Cadoizo',
    genus: 'Pokémon Livraison'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 6,
    name: 'Botogel',
    genus: 'Lieferant'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 7,
    name: 'Delibird',
    genus: 'Pokémon Reparto'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 8,
    name: 'Delibird',
    genus: 'Pokémon Consegna'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 9,
    name: 'Delibird',
    genus: 'Delivery Pokémon'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 11,
    name: 'デリバード',
    genus: 'はこびやポケモン'
  },
  {
    pokemon_species_id: 225,
    local_language_id: 12,
    name: '信使鸟',
    genus: '搬运宝可梦'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 1,
    name: 'マンタイン',
    genus: 'カイトポケモン'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 2,
    name: 'Mantain',
    genus: ''
  },
  {
    pokemon_species_id: 226,
    local_language_id: 3,
    name: '만타인',
    genus: '연포켓몬'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 4,
    name: '巨翅飛魚',
    genus: '風箏寶可夢'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 5,
    name: 'Démanta',
    genus: 'Pokémon Cervolant'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 6,
    name: 'Mantax',
    genus: 'Flugrochen'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 7,
    name: 'Mantine',
    genus: 'Pokémon Milano'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 8,
    name: 'Mantine',
    genus: 'Pokémon Aquilone'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 9,
    name: 'Mantine',
    genus: 'Kite Pokémon'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 11,
    name: 'マンタイン',
    genus: 'カイトポケモン'
  },
  {
    pokemon_species_id: 226,
    local_language_id: 12,
    name: '巨翅飞鱼',
    genus: '风筝宝可梦'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 1,
    name: 'エアームド',
    genus: 'よろいどりポケモン'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 2,
    name: 'Airmd',
    genus: ''
  },
  {
    pokemon_species_id: 227,
    local_language_id: 3,
    name: '무장조',
    genus: '갑옷새포켓몬'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 4,
    name: '盔甲鳥',
    genus: '鋼甲鳥寶可夢'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 5,
    name: 'Airmure',
    genus: 'Pokémon Armoiseau'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 6,
    name: 'Panzaeron',
    genus: 'Flugstahl'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 7,
    name: 'Skarmory',
    genus: 'Pokémon Coraza Ave'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 8,
    name: 'Skarmory',
    genus: 'Pokémon Armuccello'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 9,
    name: 'Skarmory',
    genus: 'Armor Bird Pokémon'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 11,
    name: 'エアームド',
    genus: 'よろいどりポケモン'
  },
  {
    pokemon_species_id: 227,
    local_language_id: 12,
    name: '盔甲鸟',
    genus: '钢甲鸟宝可梦'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 1,
    name: 'デルビル',
    genus: 'ダークポケモン'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 2,
    name: 'Delvil',
    genus: ''
  },
  {
    pokemon_species_id: 228,
    local_language_id: 3,
    name: '델빌',
    genus: '다크포켓몬'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 4,
    name: '戴魯比',
    genus: '陰暗寶可夢'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 5,
    name: 'Malosse',
    genus: 'Pokémon Sombre'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 6,
    name: 'Hunduster',
    genus: 'Hades'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 7,
    name: 'Houndour',
    genus: 'Pokémon Siniestro'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 8,
    name: 'Houndour',
    genus: 'Pokémon Buio'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 9,
    name: 'Houndour',
    genus: 'Dark Pokémon'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 11,
    name: 'デルビル',
    genus: 'ダークポケモン'
  },
  {
    pokemon_species_id: 228,
    local_language_id: 12,
    name: '戴鲁比',
    genus: '阴暗宝可梦'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 1,
    name: 'ヘルガー',
    genus: 'ダークポケモン'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 2,
    name: 'Hellgar',
    genus: ''
  },
  {
    pokemon_species_id: 229,
    local_language_id: 3,
    name: '헬가',
    genus: '다크포켓몬'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 4,
    name: '黑魯加',
    genus: '陰暗寶可夢'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 5,
    name: 'Démolosse',
    genus: 'Pokémon Sombre'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 6,
    name: 'Hundemon',
    genus: 'Hades'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 7,
    name: 'Houndoom',
    genus: 'Pokémon Siniestro'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 8,
    name: 'Houndoom',
    genus: 'Pokémon Buio'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 9,
    name: 'Houndoom',
    genus: 'Dark Pokémon'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 11,
    name: 'ヘルガー',
    genus: 'ダークポケモン'
  },
  {
    pokemon_species_id: 229,
    local_language_id: 12,
    name: '黑鲁加',
    genus: '阴暗宝可梦'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 1,
    name: 'キングドラ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 2,
    name: 'Kingdra',
    genus: ''
  },
  {
    pokemon_species_id: 230,
    local_language_id: 3,
    name: '킹드라',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 4,
    name: '刺龍王',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 5,
    name: 'Hyporoi',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 6,
    name: 'Seedraking',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 7,
    name: 'Kingdra',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 8,
    name: 'Kingdra',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 9,
    name: 'Kingdra',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 11,
    name: 'キングドラ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 230,
    local_language_id: 12,
    name: '刺龙王',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 1,
    name: 'ゴマゾウ',
    genus: 'ながはなポケモン'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 2,
    name: 'Gomazou',
    genus: ''
  },
  {
    pokemon_species_id: 231,
    local_language_id: 3,
    name: '코코리',
    genus: '긴코포켓몬'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 4,
    name: '小小象',
    genus: '長鼻寶可夢'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 5,
    name: 'Phanpy',
    genus: 'Pokémon Long-Nez'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 6,
    name: 'Phanpy',
    genus: 'Langrüssel'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 7,
    name: 'Phanpy',
    genus: 'Pokémon Narizotas'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 8,
    name: 'Phanpy',
    genus: 'Pokémon Nasone'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 9,
    name: 'Phanpy',
    genus: 'Long Nose Pokémon'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 11,
    name: 'ゴマゾウ',
    genus: 'ながはなポケモン'
  },
  {
    pokemon_species_id: 231,
    local_language_id: 12,
    name: '小小象',
    genus: '长鼻宝可梦'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 1,
    name: 'ドンファン',
    genus: 'よろいポケモン'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 2,
    name: 'Donfan',
    genus: ''
  },
  {
    pokemon_species_id: 232,
    local_language_id: 3,
    name: '코리갑',
    genus: '갑옷포켓몬'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 4,
    name: '頓甲',
    genus: '鎧甲寶可夢'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 5,
    name: 'Donphan',
    genus: 'Pokémon Armure'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 6,
    name: 'Donphan',
    genus: 'Panzer'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 7,
    name: 'Donphan',
    genus: 'Pokémon Coraza'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 8,
    name: 'Donphan',
    genus: 'Pokémon Armatura'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 9,
    name: 'Donphan',
    genus: 'Armor Pokémon'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 11,
    name: 'ドンファン',
    genus: 'よろいポケモン'
  },
  {
    pokemon_species_id: 232,
    local_language_id: 12,
    name: '顿甲',
    genus: '铠甲宝可梦'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 1,
    name: 'ポリゴン２',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 2,
    name: 'Porygon2',
    genus: ''
  },
  {
    pokemon_species_id: 233,
    local_language_id: 3,
    name: '폴리곤2',
    genus: '가상포켓몬'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 4,
    name: '多邊獸２',
    genus: '虛擬寶可夢'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 5,
    name: 'Porygon2',
    genus: 'Pokémon Virtuel'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 6,
    name: 'Porygon2',
    genus: 'Virtuell'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 7,
    name: 'Porygon2',
    genus: 'Pokémon Virtual'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 8,
    name: 'Porygon2',
    genus: 'Pokémon Virtuale'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 9,
    name: 'Porygon2',
    genus: 'Virtual Pokémon'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 11,
    name: 'ポリゴン２',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 233,
    local_language_id: 12,
    name: '多边兽２',
    genus: '虚拟宝可梦'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 1,
    name: 'オドシシ',
    genus: 'おおツノポケモン'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 2,
    name: 'Odoshishi',
    genus: ''
  },
  {
    pokemon_species_id: 234,
    local_language_id: 3,
    name: '노라키',
    genus: '큰뿔포켓몬'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 4,
    name: '驚角鹿',
    genus: '大角寶可夢'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 5,
    name: 'Cerfrousse',
    genus: 'Pokémon Maxi Corne'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 6,
    name: 'Damhirplex',
    genus: 'Vielender'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 7,
    name: 'Stantler',
    genus: 'Pokémon Gran Cuerno'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 8,
    name: 'Stantler',
    genus: 'Pokémon Grancorno'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 9,
    name: 'Stantler',
    genus: 'Big Horn Pokémon'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 11,
    name: 'オドシシ',
    genus: 'おおツノポケモン'
  },
  {
    pokemon_species_id: 234,
    local_language_id: 12,
    name: '惊角鹿',
    genus: '大角宝可梦'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 1,
    name: 'ドーブル',
    genus: 'えかきポケモン'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 2,
    name: 'Doble',
    genus: ''
  },
  {
    pokemon_species_id: 235,
    local_language_id: 3,
    name: '루브도',
    genus: '그림장이포켓몬'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 4,
    name: '圖圖犬',
    genus: '畫畫寶可夢'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 5,
    name: 'Queulorior',
    genus: 'Pokémon Peintre'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 6,
    name: 'Farbeagle',
    genus: 'Maler'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 7,
    name: 'Smeargle',
    genus: 'Pokémon Pintor'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 8,
    name: 'Smeargle',
    genus: 'Pokémon Pittore'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 9,
    name: 'Smeargle',
    genus: 'Painter Pokémon'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 11,
    name: 'ドーブル',
    genus: 'えかきポケモン'
  },
  {
    pokemon_species_id: 235,
    local_language_id: 12,
    name: '图图犬',
    genus: '画画宝可梦'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 1,
    name: 'バルキー',
    genus: 'けんかポケモン'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 2,
    name: 'Balkie',
    genus: ''
  },
  {
    pokemon_species_id: 236,
    local_language_id: 3,
    name: '배루키',
    genus: '싸움포켓몬'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 4,
    name: '無畏小子',
    genus: '打鬥寶可夢'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 5,
    name: 'Debugant',
    genus: 'Pokémon Bagarreur'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 6,
    name: 'Rabauz',
    genus: 'Racker'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 7,
    name: 'Tyrogue',
    genus: 'Pokémon Peleón'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 8,
    name: 'Tyrogue',
    genus: 'Pokémon Baruffa'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 9,
    name: 'Tyrogue',
    genus: 'Scuffle Pokémon'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 11,
    name: 'バルキー',
    genus: 'けんかポケモン'
  },
  {
    pokemon_species_id: 236,
    local_language_id: 12,
    name: '无畏小子',
    genus: '打斗宝可梦'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 1,
    name: 'カポエラー',
    genus: 'さかだちポケモン'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 2,
    name: 'Kapoerer',
    genus: ''
  },
  {
    pokemon_species_id: 237,
    local_language_id: 3,
    name: '카포에라',
    genus: '물구나무포켓몬'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 4,
    name: '戰舞郎',
    genus: '倒立寶可夢'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 5,
    name: 'Kapoera',
    genus: 'Pokémon Poirier'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 6,
    name: 'Kapoera',
    genus: 'Kopfstand'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 7,
    name: 'Hitmontop',
    genus: 'Pokémon Boca Abajo'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 8,
    name: 'Hitmontop',
    genus: 'Pokémon Verticale'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 9,
    name: 'Hitmontop',
    genus: 'Handstand Pokémon'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 11,
    name: 'カポエラー',
    genus: 'さかだちポケモン'
  },
  {
    pokemon_species_id: 237,
    local_language_id: 12,
    name: '战舞郎',
    genus: '倒立宝可梦'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 1,
    name: 'ムチュール',
    genus: 'くちづけポケモン'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 2,
    name: 'Muchul',
    genus: ''
  },
  {
    pokemon_species_id: 238,
    local_language_id: 3,
    name: '뽀뽀라',
    genus: '뽀뽀포켓몬'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 4,
    name: '迷唇娃',
    genus: '親吻寶可夢'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 5,
    name: 'Lippouti',
    genus: 'Pokémon Bisou'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 6,
    name: 'Kussilla',
    genus: 'Kuss'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 7,
    name: 'Smoochum',
    genus: 'Pokémon Beso'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 8,
    name: 'Smoochum',
    genus: 'Pokémon Bacio'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 9,
    name: 'Smoochum',
    genus: 'Kiss Pokémon'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 11,
    name: 'ムチュール',
    genus: 'くちづけポケモン'
  },
  {
    pokemon_species_id: 238,
    local_language_id: 12,
    name: '迷唇娃',
    genus: '亲吻宝可梦'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 1,
    name: 'エレキッド',
    genus: 'でんきポケモン'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 2,
    name: 'Elekid',
    genus: ''
  },
  {
    pokemon_species_id: 239,
    local_language_id: 3,
    name: '에레키드',
    genus: '전류포켓몬'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 4,
    name: '電擊怪',
    genus: '電氣寶可夢'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 5,
    name: 'Élekid',
    genus: 'Pokémon Électrique'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 6,
    name: 'Elekid',
    genus: 'Elektro'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 7,
    name: 'Elekid',
    genus: 'Pokémon Eléctrico'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 8,
    name: 'Elekid',
    genus: 'Pokémon Elettrico'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 9,
    name: 'Elekid',
    genus: 'Electric Pokémon'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 11,
    name: 'エレキッド',
    genus: 'でんきポケモン'
  },
  {
    pokemon_species_id: 239,
    local_language_id: 12,
    name: '电击怪',
    genus: '电气宝可梦'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 1,
    name: 'ブビィ',
    genus: 'ひだねポケモン'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 2,
    name: 'Buby',
    genus: ''
  },
  {
    pokemon_species_id: 240,
    local_language_id: 3,
    name: '마그비',
    genus: '불씨포켓몬'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 4,
    name: '鴨嘴寶寶',
    genus: '火種寶可夢'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 5,
    name: 'Magby',
    genus: 'Pokémon Charbon'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 6,
    name: 'Magby',
    genus: 'Glutherd'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 7,
    name: 'Magby',
    genus: 'Pokémon Ascuas'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 8,
    name: 'Magby',
    genus: 'Pokémon Carbonvivo'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 9,
    name: 'Magby',
    genus: 'Live Coal Pokémon'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 11,
    name: 'ブビィ',
    genus: 'ひだねポケモン'
  },
  {
    pokemon_species_id: 240,
    local_language_id: 12,
    name: '鸭嘴宝宝',
    genus: '火种宝可梦'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 1,
    name: 'ミルタンク',
    genus: 'ちちうしポケモン'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 2,
    name: 'Miltank',
    genus: ''
  },
  {
    pokemon_species_id: 241,
    local_language_id: 3,
    name: '밀탱크',
    genus: '젖소포켓몬'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 4,
    name: '大奶罐',
    genus: '乳牛寶可夢'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 5,
    name: 'Écrémeuh',
    genus: 'Pokémon Vachalait'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 6,
    name: 'Miltank',
    genus: 'Milchkuh'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 7,
    name: 'Miltank',
    genus: 'Pokémon Lechera'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 8,
    name: 'Miltank',
    genus: 'Pokémon Bovino'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 9,
    name: 'Miltank',
    genus: 'Milk Cow Pokémon'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 11,
    name: 'ミルタンク',
    genus: 'ちちうしポケモン'
  },
  {
    pokemon_species_id: 241,
    local_language_id: 12,
    name: '大奶罐',
    genus: '奶牛宝可梦'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 1,
    name: 'ハピナス',
    genus: 'しあわせポケモン'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 2,
    name: 'Happinas',
    genus: ''
  },
  {
    pokemon_species_id: 242,
    local_language_id: 3,
    name: '해피너스',
    genus: '행복포켓몬'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 4,
    name: '幸福蛋',
    genus: '幸福寶可夢'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 5,
    name: 'Leuphorie',
    genus: 'Pokémon Bonheur'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 6,
    name: 'Heiteira',
    genus: 'Freude'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 7,
    name: 'Blissey',
    genus: 'Pokémon Felicidad'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 8,
    name: 'Blissey',
    genus: 'Pokémon Felicità'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 9,
    name: 'Blissey',
    genus: 'Happiness Pokémon'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 11,
    name: 'ハピナス',
    genus: 'しあわせポケモン'
  },
  {
    pokemon_species_id: 242,
    local_language_id: 12,
    name: '幸福蛋',
    genus: '幸福宝可梦'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 1,
    name: 'ライコウ',
    genus: 'いかずちポケモン'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 2,
    name: 'Raikou',
    genus: ''
  },
  {
    pokemon_species_id: 243,
    local_language_id: 3,
    name: '라이코',
    genus: '우뢰포켓몬'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 4,
    name: '雷公',
    genus: '天雷寶可夢'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 5,
    name: 'Raikou',
    genus: 'Pokémon Foudre'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 6,
    name: 'Raikou',
    genus: 'Donner'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 7,
    name: 'Raikou',
    genus: 'Pokémon Trueno'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 8,
    name: 'Raikou',
    genus: 'Pokémon Tuono'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 9,
    name: 'Raikou',
    genus: 'Thunder Pokémon'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 11,
    name: 'ライコウ',
    genus: 'いかずちポケモン'
  },
  {
    pokemon_species_id: 243,
    local_language_id: 12,
    name: '雷公',
    genus: '天雷宝可梦'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 1,
    name: 'エンテイ',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 2,
    name: 'Entei',
    genus: ''
  },
  {
    pokemon_species_id: 244,
    local_language_id: 3,
    name: '앤테이',
    genus: '화산포켓몬'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 4,
    name: '炎帝',
    genus: '火山寶可夢'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 5,
    name: 'Entei',
    genus: 'Pokémon Volcan'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 6,
    name: 'Entei',
    genus: 'Vulkan'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 7,
    name: 'Entei',
    genus: 'Pokémon Volcán'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 8,
    name: 'Entei',
    genus: 'Pokémon Vulcano'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 9,
    name: 'Entei',
    genus: 'Volcano Pokémon'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 11,
    name: 'エンテイ',
    genus: 'かざんポケモン'
  },
  {
    pokemon_species_id: 244,
    local_language_id: 12,
    name: '炎帝',
    genus: '火山宝可梦'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 1,
    name: 'スイクン',
    genus: 'オーロラポケモン'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 2,
    name: 'Suikun',
    genus: ''
  },
  {
    pokemon_species_id: 245,
    local_language_id: 3,
    name: '스이쿤',
    genus: '오로라포켓몬'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 4,
    name: '水君',
    genus: '極光寶可夢'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 5,
    name: 'Suicune',
    genus: 'Pokémon Aurore'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 6,
    name: 'Suicune',
    genus: 'Polarlicht'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 7,
    name: 'Suicune',
    genus: 'Pokémon Aurora'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 8,
    name: 'Suicune',
    genus: 'Pokémon Aurora'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 9,
    name: 'Suicune',
    genus: 'Aurora Pokémon'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 11,
    name: 'スイクン',
    genus: 'オーロラポケモン'
  },
  {
    pokemon_species_id: 245,
    local_language_id: 12,
    name: '水君',
    genus: '极光宝可梦'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 1,
    name: 'ヨーギラス',
    genus: 'いわはだポケモン'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 2,
    name: 'Yogiras',
    genus: ''
  },
  {
    pokemon_species_id: 246,
    local_language_id: 3,
    name: '애버라스',
    genus: '바위표면포켓몬'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 4,
    name: '幼基拉斯',
    genus: '岩石膚寶可夢'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 5,
    name: 'Embrylex',
    genus: 'Pokémon Peaupierre'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 6,
    name: 'Larvitar',
    genus: 'Felshaut'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 7,
    name: 'Larvitar',
    genus: 'Pokémon Piel Roca'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 8,
    name: 'Larvitar',
    genus: 'Pokémon Peldisasso'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 9,
    name: 'Larvitar',
    genus: 'Rock Skin Pokémon'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 11,
    name: 'ヨーギラス',
    genus: 'いわはだポケモン'
  },
  {
    pokemon_species_id: 246,
    local_language_id: 12,
    name: '幼基拉斯',
    genus: '岩石肤宝可梦'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 1,
    name: 'サナギラス',
    genus: 'だんがんポケモン'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 2,
    name: 'Sanagiras',
    genus: ''
  },
  {
    pokemon_species_id: 247,
    local_language_id: 3,
    name: '데기라스',
    genus: '탄환포켓몬'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 4,
    name: '沙基拉斯',
    genus: '子彈寶可夢'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 5,
    name: 'Ymphect',
    genus: 'Pokémon Carapadure'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 6,
    name: 'Pupitar',
    genus: 'Hartschale'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 7,
    name: 'Pupitar',
    genus: 'Pokémon Caparazón'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 8,
    name: 'Pupitar',
    genus: 'Pokémon Guscioduro'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 9,
    name: 'Pupitar',
    genus: 'Hard Shell Pokémon'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 11,
    name: 'サナギラス',
    genus: 'だんがんポケモン'
  },
  {
    pokemon_species_id: 247,
    local_language_id: 12,
    name: '沙基拉斯',
    genus: '子弹宝可梦'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 1,
    name: 'バンギラス',
    genus: 'よろいポケモン'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 2,
    name: 'Bangiras',
    genus: ''
  },
  {
    pokemon_species_id: 248,
    local_language_id: 3,
    name: '마기라스',
    genus: '갑옷포켓몬'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 4,
    name: '班基拉斯',
    genus: '鎧甲寶可夢'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 5,
    name: 'Tyranocif',
    genus: 'Pokémon Armure'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 6,
    name: 'Despotar',
    genus: 'Panzer'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 7,
    name: 'Tyranitar',
    genus: 'Pokémon Coraza'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 8,
    name: 'Tyranitar',
    genus: 'Pokémon Armatura'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 9,
    name: 'Tyranitar',
    genus: 'Armor Pokémon'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 11,
    name: 'バンギラス',
    genus: 'よろいポケモン'
  },
  {
    pokemon_species_id: 248,
    local_language_id: 12,
    name: '班基拉斯',
    genus: '铠甲宝可梦'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 1,
    name: 'ルギア',
    genus: 'せんすいポケモン'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 2,
    name: 'Lugia',
    genus: ''
  },
  {
    pokemon_species_id: 249,
    local_language_id: 3,
    name: '루기아',
    genus: '잠수포켓몬'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 4,
    name: '洛奇亞',
    genus: '潛水寶可夢'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 5,
    name: 'Lugia',
    genus: 'Pokémon Plongeon'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 6,
    name: 'Lugia',
    genus: 'Taucher'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 7,
    name: 'Lugia',
    genus: 'Pokémon Buceo'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 8,
    name: 'Lugia',
    genus: 'Pokémon Immersione'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 9,
    name: 'Lugia',
    genus: 'Diving Pokémon'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 11,
    name: 'ルギア',
    genus: 'せんすいポケモン'
  },
  {
    pokemon_species_id: 249,
    local_language_id: 12,
    name: '洛奇亚',
    genus: '潜水宝可梦'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 1,
    name: 'ホウオウ',
    genus: 'にじいろポケモン'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 2,
    name: 'Houou',
    genus: ''
  },
  {
    pokemon_species_id: 250,
    local_language_id: 3,
    name: '칠색조',
    genus: '무지개색포켓몬'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 4,
    name: '鳳王',
    genus: '虹色寶可夢'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 5,
    name: 'Ho-Oh',
    genus: 'Pokémon Arcenciel'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 6,
    name: 'Ho-Oh',
    genus: 'Regenbogen'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 7,
    name: 'Ho-Oh',
    genus: 'Pokémon Arcoíris'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 8,
    name: 'Ho-Oh',
    genus: 'Pokémon Arcobaleno'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 9,
    name: 'Ho-Oh',
    genus: 'Rainbow Pokémon'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 11,
    name: 'ホウオウ',
    genus: 'にじいろポケモン'
  },
  {
    pokemon_species_id: 250,
    local_language_id: 12,
    name: '凤王',
    genus: '虹色宝可梦'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 1,
    name: 'セレビィ',
    genus: 'ときわたりポケモン'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 2,
    name: 'Celebi',
    genus: ''
  },
  {
    pokemon_species_id: 251,
    local_language_id: 3,
    name: '세레비',
    genus: '시간이동포켓몬'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 4,
    name: '時拉比',
    genus: '時空穿越寶可夢'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 5,
    name: 'Celebi',
    genus: 'Pokémon Temporel'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 6,
    name: 'Celebi',
    genus: 'Zeitreise'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 7,
    name: 'Celebi',
    genus: 'Pokémon Viajetiempo'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 8,
    name: 'Celebi',
    genus: 'Pokémon Tempovia'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 9,
    name: 'Celebi',
    genus: 'Time Travel Pokémon'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 11,
    name: 'セレビィ',
    genus: 'ときわたりポケモン'
  },
  {
    pokemon_species_id: 251,
    local_language_id: 12,
    name: '时拉比',
    genus: '时空穿越宝可梦'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 1,
    name: 'キモリ',
    genus: 'もりトカゲポケモン'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 2,
    name: 'Kimori',
    genus: ''
  },
  {
    pokemon_species_id: 252,
    local_language_id: 3,
    name: '나무지기',
    genus: '숲도마뱀포켓몬'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 4,
    name: '木守宮',
    genus: '林蜥寶可夢'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 5,
    name: 'Arcko',
    genus: 'Pokémon Bois Gecko'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 6,
    name: 'Geckarbor',
    genus: 'Waldgecko'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 7,
    name: 'Treecko',
    genus: 'Pokémon Geco Bosque'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 8,
    name: 'Treecko',
    genus: 'Pokémon Legnogeco'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 9,
    name: 'Treecko',
    genus: 'Wood Gecko Pokémon'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 11,
    name: 'キモリ',
    genus: 'もりトカゲポケモン'
  },
  {
    pokemon_species_id: 252,
    local_language_id: 12,
    name: '木守宫',
    genus: '林蜥宝可梦'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 1,
    name: 'ジュプトル',
    genus: 'もりトカゲポケモン'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 2,
    name: 'Juptile',
    genus: ''
  },
  {
    pokemon_species_id: 253,
    local_language_id: 3,
    name: '나무돌이',
    genus: '숲도마뱀포켓몬'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 4,
    name: '森林蜥蜴',
    genus: '林蜥寶可夢'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 5,
    name: 'Massko',
    genus: 'Pokémon Bois Gecko'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 6,
    name: 'Reptain',
    genus: 'Waldgecko'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 7,
    name: 'Grovyle',
    genus: 'Pokémon Geco Bosque'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 8,
    name: 'Grovyle',
    genus: 'Pokémon Legnogeco'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 9,
    name: 'Grovyle',
    genus: 'Wood Gecko Pokémon'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 11,
    name: 'ジュプトル',
    genus: 'もりトカゲポケモン'
  },
  {
    pokemon_species_id: 253,
    local_language_id: 12,
    name: '森林蜥蜴',
    genus: '林蜥宝可梦'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 1,
    name: 'ジュカイン',
    genus: 'みつりんポケモン'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 2,
    name: 'Jukain',
    genus: ''
  },
  {
    pokemon_species_id: 254,
    local_language_id: 3,
    name: '나무킹',
    genus: '밀림포켓몬'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 4,
    name: '蜥蜴王',
    genus: '密林寶可夢'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 5,
    name: 'Jungko',
    genus: 'Pokémon Forêt'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 6,
    name: 'Gewaldro',
    genus: 'Dschungel'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 7,
    name: 'Sceptile',
    genus: 'Pokémon Monte'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 8,
    name: 'Sceptile',
    genus: 'Pokémon Foresta'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 9,
    name: 'Sceptile',
    genus: 'Forest Pokémon'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 11,
    name: 'ジュカイン',
    genus: 'みつりんポケモン'
  },
  {
    pokemon_species_id: 254,
    local_language_id: 12,
    name: '蜥蜴王',
    genus: '密林宝可梦'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 1,
    name: 'アチャモ',
    genus: 'ひよこポケモン'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 2,
    name: 'Achamo',
    genus: ''
  },
  {
    pokemon_species_id: 255,
    local_language_id: 3,
    name: '아차모',
    genus: '풋내기포켓몬'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 4,
    name: '火稚雞',
    genus: '雛雞寶可夢'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 5,
    name: 'Poussifeu',
    genus: 'Pokémon Poussin'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 6,
    name: 'Flemmli',
    genus: 'Küken'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 7,
    name: 'Torchic',
    genus: 'Pokémon Polluelo'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 8,
    name: 'Torchic',
    genus: 'Pokémon Pulcino'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 9,
    name: 'Torchic',
    genus: 'Chick Pokémon'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 11,
    name: 'アチャモ',
    genus: 'ひよこポケモン'
  },
  {
    pokemon_species_id: 255,
    local_language_id: 12,
    name: '火稚鸡',
    genus: '雏鸡宝可梦'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 1,
    name: 'ワカシャモ',
    genus: 'わかどりポケモン'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 2,
    name: 'Wakasyamo',
    genus: ''
  },
  {
    pokemon_species_id: 256,
    local_language_id: 3,
    name: '영치코',
    genus: '꼬마닭포켓몬'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 4,
    name: '力壯雞',
    genus: '幼雞寶可夢'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 5,
    name: 'Galifeu',
    genus: 'Pokémon Poulet'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 6,
    name: 'Jungglut',
    genus: 'Kleinhahn'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 7,
    name: 'Combusken',
    genus: 'Pokémon Ave Corral'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 8,
    name: 'Combusken',
    genus: 'Pokémon Rampollo'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 9,
    name: 'Combusken',
    genus: 'Young Fowl Pokémon'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 11,
    name: 'ワカシャモ',
    genus: 'わかどりポケモン'
  },
  {
    pokemon_species_id: 256,
    local_language_id: 12,
    name: '力壮鸡',
    genus: '幼鸡宝可梦'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 1,
    name: 'バシャーモ',
    genus: 'もうかポケモン'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 2,
    name: 'Bursyamo',
    genus: ''
  },
  {
    pokemon_species_id: 257,
    local_language_id: 3,
    name: '번치코',
    genus: '맹화포켓몬'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 4,
    name: '火焰雞',
    genus: '猛火寶可夢'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 5,
    name: 'Braségali',
    genus: 'Pokémon Ardent'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 6,
    name: 'Lohgock',
    genus: 'Großbrand'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 7,
    name: 'Blaziken',
    genus: 'Pokémon Llameante'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 8,
    name: 'Blaziken',
    genus: 'Pokémon Vampe'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 9,
    name: 'Blaziken',
    genus: 'Blaze Pokémon'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 11,
    name: 'バシャーモ',
    genus: 'もうかポケモン'
  },
  {
    pokemon_species_id: 257,
    local_language_id: 12,
    name: '火焰鸡',
    genus: '猛火宝可梦'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 1,
    name: 'ミズゴロウ',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 2,
    name: 'Mizugorou',
    genus: ''
  },
  {
    pokemon_species_id: 258,
    local_language_id: 3,
    name: '물짱이',
    genus: '늪물고기포켓몬'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 4,
    name: '水躍魚',
    genus: '沼魚寶可夢'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 5,
    name: 'Gobou',
    genus: 'Pokémon Poissonboue'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 6,
    name: 'Hydropi',
    genus: 'Lehmhüpfer'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 7,
    name: 'Mudkip',
    genus: 'Pokémon Pez Lodo'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 8,
    name: 'Mudkip',
    genus: 'Pokémon Fango Pesce'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 9,
    name: 'Mudkip',
    genus: 'Mud Fish Pokémon'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 11,
    name: 'ミズゴロウ',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 258,
    local_language_id: 12,
    name: '水躍鱼',
    genus: '沼鱼宝可梦'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 1,
    name: 'ヌマクロー',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 2,
    name: 'Numacraw',
    genus: ''
  },
  {
    pokemon_species_id: 259,
    local_language_id: 3,
    name: '늪짱이',
    genus: '늪물고기포켓몬'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 4,
    name: '沼躍魚',
    genus: '沼魚寶可夢'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 5,
    name: 'Flobio',
    genus: 'Pokémon Poissonboue'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 6,
    name: 'Moorabbel',
    genus: 'Lehmhüpfer'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 7,
    name: 'Marshtomp',
    genus: 'Pokémon Pez Lodo'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 8,
    name: 'Marshtomp',
    genus: 'Pokémon Fango Pesce'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 9,
    name: 'Marshtomp',
    genus: 'Mud Fish Pokémon'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 11,
    name: 'ヌマクロー',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 259,
    local_language_id: 12,
    name: '沼躍鱼',
    genus: '沼鱼宝可梦'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 1,
    name: 'ラグラージ',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 2,
    name: 'Laglarge',
    genus: ''
  },
  {
    pokemon_species_id: 260,
    local_language_id: 3,
    name: '대짱이',
    genus: '늪물고기포켓몬'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 4,
    name: '巨沼怪',
    genus: '沼魚寶可夢'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 5,
    name: 'Laggron',
    genus: 'Pokémon Poissonboue'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 6,
    name: 'Sumpex',
    genus: 'Lehmhüpfer'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 7,
    name: 'Swampert',
    genus: 'Pokémon Pez Lodo'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 8,
    name: 'Swampert',
    genus: 'Pokémon Fango Pesce'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 9,
    name: 'Swampert',
    genus: 'Mud Fish Pokémon'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 11,
    name: 'ラグラージ',
    genus: 'ぬまうおポケモン'
  },
  {
    pokemon_species_id: 260,
    local_language_id: 12,
    name: '巨沼怪',
    genus: '沼鱼宝可梦'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 1,
    name: 'ポチエナ',
    genus: 'かみつきポケモン'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 2,
    name: 'Pochiena',
    genus: ''
  },
  {
    pokemon_species_id: 261,
    local_language_id: 3,
    name: '포챠나',
    genus: '물어뜯기포켓몬'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 4,
    name: '土狼犬',
    genus: '緊咬寶可夢'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 5,
    name: 'Medhyèna',
    genus: 'Pokémon Morsure'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 6,
    name: 'Fiffyen',
    genus: 'Biss'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 7,
    name: 'Poochyena',
    genus: 'Pokémon Mordisco'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 8,
    name: 'Poochyena',
    genus: 'Pokémon Morso'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 9,
    name: 'Poochyena',
    genus: 'Bite Pokémon'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 11,
    name: 'ポチエナ',
    genus: 'かみつきポケモン'
  },
  {
    pokemon_species_id: 261,
    local_language_id: 12,
    name: '土狼犬',
    genus: '紧咬宝可梦'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 1,
    name: 'グラエナ',
    genus: 'かみつきポケモン'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 2,
    name: 'Guraena',
    genus: ''
  },
  {
    pokemon_species_id: 262,
    local_language_id: 3,
    name: '그라에나',
    genus: '물어뜯기포켓몬'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 4,
    name: '大狼犬',
    genus: '緊咬寶可夢'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 5,
    name: 'Grahyèna',
    genus: 'Pokémon Morsure'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 6,
    name: 'Magnayen',
    genus: 'Biss'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 7,
    name: 'Mightyena',
    genus: 'Pokémon Mordisco'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 8,
    name: 'Mightyena',
    genus: 'Pokémon Morso'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 9,
    name: 'Mightyena',
    genus: 'Bite Pokémon'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 11,
    name: 'グラエナ',
    genus: 'かみつきポケモン'
  },
  {
    pokemon_species_id: 262,
    local_language_id: 12,
    name: '大狼犬',
    genus: '紧咬宝可梦'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 1,
    name: 'ジグザグマ',
    genus: 'まめだぬきポケモン'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 2,
    name: 'Ziguzaguma',
    genus: ''
  },
  {
    pokemon_species_id: 263,
    local_language_id: 3,
    name: '지그제구리',
    genus: '앙증너구리포켓몬'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 4,
    name: '蛇紋熊',
    genus: '豆貍寶可夢'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 5,
    name: 'Zigzaton',
    genus: 'Pokémon Petit Raton'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 6,
    name: 'Zigzachs',
    genus: 'Kleindachs'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 7,
    name: 'Zigzagoon',
    genus: 'Pokémon Mapachito'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 8,
    name: 'Zigzagoon',
    genus: 'Pokémon Procione'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 9,
    name: 'Zigzagoon',
    genus: 'Tiny Raccoon Pokémon'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 11,
    name: 'ジグザグマ',
    genus: 'まめだぬきポケモン'
  },
  {
    pokemon_species_id: 263,
    local_language_id: 12,
    name: '蛇纹熊',
    genus: '豆狸宝可梦'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 1,
    name: 'マッスグマ',
    genus: 'とっしんポケモン'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 2,
    name: 'Massuguma',
    genus: ''
  },
  {
    pokemon_species_id: 264,
    local_language_id: 3,
    name: '직구리',
    genus: '돌진포켓몬'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 4,
    name: '直衝熊',
    genus: '猛衝寶可夢'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 5,
    name: 'Linéon',
    genus: 'Pokémon Fonceur'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 6,
    name: 'Geradaks',
    genus: 'Sprinter'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 7,
    name: 'Linoone',
    genus: 'Pokémon Lanzado'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 8,
    name: 'Linoone',
    genus: 'Pokémon Sfrecciante'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 9,
    name: 'Linoone',
    genus: 'Rushing Pokémon'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 11,
    name: 'マッスグマ',
    genus: 'とっしんポケモン'
  },
  {
    pokemon_species_id: 264,
    local_language_id: 12,
    name: '直冲熊',
    genus: '猛冲宝可梦'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 1,
    name: 'ケムッソ',
    genus: 'いもむしポケモン'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 2,
    name: 'Kemusso',
    genus: ''
  },
  {
    pokemon_species_id: 265,
    local_language_id: 3,
    name: '개무소',
    genus: '애벌레포켓몬'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 4,
    name: '刺尾蟲',
    genus: '蟲寶寶寶可夢'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 5,
    name: 'Chenipotte',
    genus: 'Pokémon Ver'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 6,
    name: 'Waumpel',
    genus: 'Wurm'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 7,
    name: 'Wurmple',
    genus: 'Pokémon Gusano'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 8,
    name: 'Wurmple',
    genus: 'Pokémon Baco'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 9,
    name: 'Wurmple',
    genus: 'Worm Pokémon'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 11,
    name: 'ケムッソ',
    genus: 'いもむしポケモン'
  },
  {
    pokemon_species_id: 265,
    local_language_id: 12,
    name: '刺尾虫',
    genus: '虫宝宝宝可梦'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 1,
    name: 'カラサリス',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 2,
    name: 'Karasalis',
    genus: ''
  },
  {
    pokemon_species_id: 266,
    local_language_id: 3,
    name: '실쿤',
    genus: '번데기포켓몬'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 4,
    name: '甲殼繭',
    genus: '蛹寶可夢'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 5,
    name: 'Armulys',
    genus: 'Pokémon Cocon'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 6,
    name: 'Schaloko',
    genus: 'Kokon'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 7,
    name: 'Silcoon',
    genus: 'Pokémon Capullo'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 8,
    name: 'Silcoon',
    genus: 'Pokémon Bozzolo'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 9,
    name: 'Silcoon',
    genus: 'Cocoon Pokémon'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 11,
    name: 'カラサリス',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 266,
    local_language_id: 12,
    name: '甲壳茧',
    genus: '蛹宝可梦'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 1,
    name: 'アゲハント',
    genus: 'ちょうちょポケモン'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 2,
    name: 'Agehunt',
    genus: ''
  },
  {
    pokemon_species_id: 267,
    local_language_id: 3,
    name: '뷰티플라이',
    genus: '나비포켓몬'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 4,
    name: '狩獵鳳蝶',
    genus: '蝴蝶寶可夢'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 5,
    name: 'Charmillon',
    genus: 'Pokémon Papillon'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 6,
    name: 'Papinella',
    genus: 'Falter'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 7,
    name: 'Beautifly',
    genus: 'Pokémon Mariposa'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 8,
    name: 'Beautifly',
    genus: 'Pokémon Farfalla'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 9,
    name: 'Beautifly',
    genus: 'Butterfly Pokémon'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 11,
    name: 'アゲハント',
    genus: 'ちょうちょポケモン'
  },
  {
    pokemon_species_id: 267,
    local_language_id: 12,
    name: '狩猎凤蝶',
    genus: '蝴蝶宝可梦'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 1,
    name: 'マユルド',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 2,
    name: 'Mayuld',
    genus: ''
  },
  {
    pokemon_species_id: 268,
    local_language_id: 3,
    name: '카스쿤',
    genus: '번데기포켓몬'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 4,
    name: '盾甲繭',
    genus: '蛹寶可夢'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 5,
    name: 'Blindalys',
    genus: 'Pokémon Cocon'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 6,
    name: 'Panekon',
    genus: 'Kokon'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 7,
    name: 'Cascoon',
    genus: 'Pokémon Capullo'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 8,
    name: 'Cascoon',
    genus: 'Pokémon Bozzolo'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 9,
    name: 'Cascoon',
    genus: 'Cocoon Pokémon'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 11,
    name: 'マユルド',
    genus: 'さなぎポケモン'
  },
  {
    pokemon_species_id: 268,
    local_language_id: 12,
    name: '盾甲茧',
    genus: '蛹宝可梦'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 1,
    name: 'ドクケイル',
    genus: 'どくがポケモン'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 2,
    name: 'Dokucale',
    genus: ''
  },
  {
    pokemon_species_id: 269,
    local_language_id: 3,
    name: '독케일',
    genus: '독나방포켓몬'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 4,
    name: '毒粉蛾',
    genus: '毒蛾寶可夢'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 5,
    name: 'Papinox',
    genus: 'Pokémon Papipoison'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 6,
    name: 'Pudox',
    genus: 'Giftmotte'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 7,
    name: 'Dustox',
    genus: 'Pokémon Polilla Ven.'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 8,
    name: 'Dustox',
    genus: 'Pokémon Velentarma'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 9,
    name: 'Dustox',
    genus: 'Poison Moth Pokémon'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 11,
    name: 'ドクケイル',
    genus: 'どくがポケモン'
  },
  {
    pokemon_species_id: 269,
    local_language_id: 12,
    name: '毒粉蛾',
    genus: '毒蛾宝可梦'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 1,
    name: 'ハスボー',
    genus: 'うきくさポケモン'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 2,
    name: 'Hassboh',
    genus: ''
  },
  {
    pokemon_species_id: 270,
    local_language_id: 3,
    name: '연꽃몬',
    genus: '개구리밥포켓몬'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 4,
    name: '蓮葉童子',
    genus: '浮萍寶可夢'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 5,
    name: 'Nénupiot',
    genus: 'Pokémon Aquaplante'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 6,
    name: 'Loturzel',
    genus: 'Wasserlinse'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 7,
    name: 'Lotad',
    genus: 'Pokémon Alga'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 8,
    name: 'Lotad',
    genus: 'Pokémon Alga'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 9,
    name: 'Lotad',
    genus: 'Water Weed Pokémon'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 11,
    name: 'ハスボー',
    genus: 'うきくさポケモン'
  },
  {
    pokemon_species_id: 270,
    local_language_id: 12,
    name: '莲叶童子',
    genus: '浮萍宝可梦'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 1,
    name: 'ハスブレロ',
    genus: 'ようきポケモン'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 2,
    name: 'Hasubrero',
    genus: ''
  },
  {
    pokemon_species_id: 271,
    local_language_id: 3,
    name: '로토스',
    genus: '명랑함포켓몬'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 4,
    name: '蓮帽小童',
    genus: '爽朗寶可夢'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 5,
    name: 'Lombre',
    genus: 'Pokémon Jovial'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 6,
    name: 'Lombrero',
    genus: 'Frohmut'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 7,
    name: 'Lombre',
    genus: 'Pokémon Alegre'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 8,
    name: 'Lombre',
    genus: 'Pokémon Giocoso'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 9,
    name: 'Lombre',
    genus: 'Jolly Pokémon'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 11,
    name: 'ハスブレロ',
    genus: 'ようきポケモン'
  },
  {
    pokemon_species_id: 271,
    local_language_id: 12,
    name: '莲帽小童',
    genus: '爽朗宝可梦'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 1,
    name: 'ルンパッパ',
    genus: 'のうてんきポケモン'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 2,
    name: 'Runpappa',
    genus: ''
  },
  {
    pokemon_species_id: 272,
    local_language_id: 3,
    name: '로파파',
    genus: '행복하기포켓몬'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 4,
    name: '樂天河童',
    genus: '樂天寶可夢'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 5,
    name: 'Ludicolo',
    genus: 'Pokémon Insouciant'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 6,
    name: 'Kappalores',
    genus: 'Sorglos'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 7,
    name: 'Ludicolo',
    genus: 'Pokémon Optimista'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 8,
    name: 'Ludicolo',
    genus: 'Pokémon Spensierato'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 9,
    name: 'Ludicolo',
    genus: 'Carefree Pokémon'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 11,
    name: 'ルンパッパ',
    genus: 'のうてんきポケモン'
  },
  {
    pokemon_species_id: 272,
    local_language_id: 12,
    name: '乐天河童',
    genus: '乐天宝可梦'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 1,
    name: 'タネボー',
    genus: 'どんぐりポケモン'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 2,
    name: 'Taneboh',
    genus: ''
  },
  {
    pokemon_species_id: 273,
    local_language_id: 3,
    name: '도토링',
    genus: '도토리포켓몬'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 4,
    name: '橡實果',
    genus: '橡實寶可夢'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 5,
    name: 'Grainipiot',
    genus: 'Pokémon Gland'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 6,
    name: 'Samurzel',
    genus: 'Eichelnuss'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 7,
    name: 'Seedot',
    genus: 'Pokémon Bellota'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 8,
    name: 'Seedot',
    genus: 'Pokémon Ghianda'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 9,
    name: 'Seedot',
    genus: 'Acorn Pokémon'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 11,
    name: 'タネボー',
    genus: 'どんぐりポケモン'
  },
  {
    pokemon_species_id: 273,
    local_language_id: 12,
    name: '橡实果',
    genus: '橡实宝可梦'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 1,
    name: 'コノハナ',
    genus: 'いじわるポケモン'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 2,
    name: 'Konohana',
    genus: ''
  },
  {
    pokemon_species_id: 274,
    local_language_id: 3,
    name: '잎새코',
    genus: '꾀부리기포켓몬'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 4,
    name: '長鼻葉',
    genus: '捉弄寶可夢'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 5,
    name: 'Pifeuil',
    genus: 'Pokémon Malin'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 6,
    name: 'Blanas',
    genus: 'Hinterlist'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 7,
    name: 'Nuzleaf',
    genus: 'Pokémon Astuto'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 8,
    name: 'Nuzleaf',
    genus: 'Pokémon Scaltro'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 9,
    name: 'Nuzleaf',
    genus: 'Wily Pokémon'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 11,
    name: 'コノハナ',
    genus: 'いじわるポケモン'
  },
  {
    pokemon_species_id: 274,
    local_language_id: 12,
    name: '长鼻叶',
    genus: '捉弄宝可梦'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 1,
    name: 'ダーテング',
    genus: 'よこしまポケモン'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 2,
    name: 'Dirteng',
    genus: ''
  },
  {
    pokemon_species_id: 275,
    local_language_id: 3,
    name: '다탱구',
    genus: '부정하기포켓몬'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 4,
    name: '狡猾天狗',
    genus: '邪惡寶可夢'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 5,
    name: 'Tengalice',
    genus: 'Pokémon Malveillant'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 6,
    name: 'Tengulist',
    genus: 'Verschlagen'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 7,
    name: 'Shiftry',
    genus: 'Pokémon Malvado'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 8,
    name: 'Shiftry',
    genus: 'Pokémon Burbero'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 9,
    name: 'Shiftry',
    genus: 'Wicked Pokémon'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 11,
    name: 'ダーテング',
    genus: 'よこしまポケモン'
  },
  {
    pokemon_species_id: 275,
    local_language_id: 12,
    name: '狡猾天狗',
    genus: '邪恶宝可梦'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 1,
    name: 'スバメ',
    genus: 'こツバメポケモン'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 2,
    name: 'Subame',
    genus: ''
  },
  {
    pokemon_species_id: 276,
    local_language_id: 3,
    name: '테일로',
    genus: '아기제비포켓몬'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 4,
    name: '傲骨燕',
    genus: '幼燕寶可夢'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 5,
    name: 'Nirondelle',
    genus: 'Pokémon Minirondel'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 6,
    name: 'Schwalbini',
    genus: 'Schwälblein'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 7,
    name: 'Taillow',
    genus: 'Pokémon Pequebuche'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 8,
    name: 'Taillow',
    genus: 'Pokémon Rondinella'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 9,
    name: 'Taillow',
    genus: 'Tiny Swallow Pokémon'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 11,
    name: 'スバメ',
    genus: 'こツバメポケモン'
  },
  {
    pokemon_species_id: 276,
    local_language_id: 12,
    name: '傲骨燕',
    genus: '幼燕宝可梦'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 1,
    name: 'オオスバメ',
    genus: 'ツバメポケモン'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 2,
    name: 'Ohsubame',
    genus: ''
  },
  {
    pokemon_species_id: 277,
    local_language_id: 3,
    name: '스왈로',
    genus: '제비포켓몬'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 4,
    name: '大王燕',
    genus: '燕子寶可夢'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 5,
    name: 'Hélédelle',
    genus: 'Pokémon Hirondelle'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 6,
    name: 'Schwalboss',
    genus: 'Schwalbe'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 7,
    name: 'Swellow',
    genus: 'Pokémon Buche'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 8,
    name: 'Swellow',
    genus: 'Pokémon Rondine'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 9,
    name: 'Swellow',
    genus: 'Swallow Pokémon'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 11,
    name: 'オオスバメ',
    genus: 'ツバメポケモン'
  },
  {
    pokemon_species_id: 277,
    local_language_id: 12,
    name: '大王燕',
    genus: '燕子宝可梦'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 1,
    name: 'キャモメ',
    genus: 'うみねこポケモン'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 2,
    name: 'Camome',
    genus: ''
  },
  {
    pokemon_species_id: 278,
    local_language_id: 3,
    name: '갈모매',
    genus: '괭이갈매기포켓몬'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 4,
    name: '長翅鷗',
    genus: '海鷗寶可夢'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 5,
    name: 'Goélise',
    genus: 'Pokémon Mouette'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 6,
    name: 'Wingull',
    genus: 'Seemöwe'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 7,
    name: 'Wingull',
    genus: 'Pokémon Gaviota'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 8,
    name: 'Wingull',
    genus: 'Pokémon Gabbiano'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 9,
    name: 'Wingull',
    genus: 'Seagull Pokémon'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 11,
    name: 'キャモメ',
    genus: 'うみねこポケモン'
  },
  {
    pokemon_species_id: 278,
    local_language_id: 12,
    name: '长翅鸥',
    genus: '海鸥宝可梦'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 1,
    name: 'ペリッパー',
    genus: 'みずどりポケモン'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 2,
    name: 'Pelipper',
    genus: ''
  },
  {
    pokemon_species_id: 279,
    local_language_id: 3,
    name: '패리퍼',
    genus: '물새포켓몬'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 4,
    name: '大嘴鷗',
    genus: '水鳥寶可夢'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 5,
    name: 'Bekipan',
    genus: 'Pokémon Oiseaudo'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 6,
    name: 'Pelipper',
    genus: 'Wasservogel'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 7,
    name: 'Pelipper',
    genus: 'Pokémon Ave Agua'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 8,
    name: 'Pelipper',
    genus: 'Pokémon Alacquatico'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 9,
    name: 'Pelipper',
    genus: 'Water Bird Pokémon'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 11,
    name: 'ペリッパー',
    genus: 'みずどりポケモン'
  },
  {
    pokemon_species_id: 279,
    local_language_id: 12,
    name: '大嘴鸥',
    genus: '水鸟宝可梦'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 1,
    name: 'ラルトス',
    genus: 'きもちポケモン'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 2,
    name: 'Ralts',
    genus: ''
  },
  {
    pokemon_species_id: 280,
    local_language_id: 3,
    name: '랄토스',
    genus: '느낌포켓몬'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 4,
    name: '拉魯拉絲',
    genus: '心情寶可夢'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 5,
    name: 'Tarsal',
    genus: 'Pokémon Sentiment'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 6,
    name: 'Trasla',
    genus: 'Gefühl'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 7,
    name: 'Ralts',
    genus: 'Pokémon Sensible'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 8,
    name: 'Ralts',
    genus: 'Pokémon Sensazione'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 9,
    name: 'Ralts',
    genus: 'Feeling Pokémon'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 11,
    name: 'ラルトス',
    genus: 'きもちポケモン'
  },
  {
    pokemon_species_id: 280,
    local_language_id: 12,
    name: '拉鲁拉丝',
    genus: '心情宝可梦'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 1,
    name: 'キルリア',
    genus: 'かんじょうポケモン'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 2,
    name: 'Kirlia',
    genus: ''
  },
  {
    pokemon_species_id: 281,
    local_language_id: 3,
    name: '킬리아',
    genus: '감정포켓몬'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 4,
    name: '奇魯莉安',
    genus: '感情寶可夢'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 5,
    name: 'Kirlia',
    genus: 'Pokémon Émotion'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 6,
    name: 'Kirlia',
    genus: 'Emotion'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 7,
    name: 'Kirlia',
    genus: 'Pokémon Sensorio'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 8,
    name: 'Kirlia',
    genus: 'Pokémon Emozione'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 9,
    name: 'Kirlia',
    genus: 'Emotion Pokémon'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 11,
    name: 'キルリア',
    genus: 'かんじょうポケモン'
  },
  {
    pokemon_species_id: 281,
    local_language_id: 12,
    name: '奇鲁莉安',
    genus: '感情宝可梦'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 1,
    name: 'サーナイト',
    genus: 'ほうようポケモン'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 2,
    name: 'Sirnight',
    genus: ''
  },
  {
    pokemon_species_id: 282,
    local_language_id: 3,
    name: '가디안',
    genus: '포용포켓몬'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 4,
    name: '沙奈朵',
    genus: '包容寶可夢'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 5,
    name: 'Gardevoir',
    genus: 'Pokémon Étreinte'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 6,
    name: 'Guardevoir',
    genus: 'Umarmung'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 7,
    name: 'Gardevoir',
    genus: 'Pokémon Envolvente'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 8,
    name: 'Gardevoir',
    genus: 'Pokémon Abbraccio'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 9,
    name: 'Gardevoir',
    genus: 'Embrace Pokémon'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 11,
    name: 'サーナイト',
    genus: 'ほうようポケモン'
  },
  {
    pokemon_species_id: 282,
    local_language_id: 12,
    name: '沙奈朵',
    genus: '包容宝可梦'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 1,
    name: 'アメタマ',
    genus: 'あめんぼポケモン'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 2,
    name: 'Ametama',
    genus: ''
  },
  {
    pokemon_species_id: 283,
    local_language_id: 3,
    name: '비구술',
    genus: '소금쟁이포켓몬'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 4,
    name: '溜溜糖球',
    genus: '水黽寶可夢'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 5,
    name: 'Arakdo',
    genus: 'Pokémon Maresurfeur'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 6,
    name: 'Gehweiher',
    genus: 'Wassergeher'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 7,
    name: 'Surskit',
    genus: 'Pokémon Zapatero'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 8,
    name: 'Surskit',
    genus: 'Pokémon Sfiorapozze'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 9,
    name: 'Surskit',
    genus: 'Pond Skater Pokémon'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 11,
    name: 'アメタマ',
    genus: 'あめんぼポケモン'
  },
  {
    pokemon_species_id: 283,
    local_language_id: 12,
    name: '溜溜糖球',
    genus: '水黾宝可梦'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 1,
    name: 'アメモース',
    genus: 'めだまポケモン'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 2,
    name: 'Amemoth',
    genus: ''
  },
  {
    pokemon_species_id: 284,
    local_language_id: 3,
    name: '비나방',
    genus: '안구포켓몬'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 4,
    name: '雨翅蛾',
    genus: '眼珠寶可夢'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 5,
    name: 'Maskadra',
    genus: 'Pokémon Boule Œil'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 6,
    name: 'Maskeregen',
    genus: 'Auge'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 7,
    name: 'Masquerain',
    genus: 'Pokémon Globocular'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 8,
    name: 'Masquerain',
    genus: 'Pokémon Occhi'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 9,
    name: 'Masquerain',
    genus: 'Eyeball Pokémon'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 11,
    name: 'アメモース',
    genus: 'めだまポケモン'
  },
  {
    pokemon_species_id: 284,
    local_language_id: 12,
    name: '雨翅蛾',
    genus: '眼珠宝可梦'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 1,
    name: 'キノココ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 2,
    name: 'Kinococo',
    genus: ''
  },
  {
    pokemon_species_id: 285,
    local_language_id: 3,
    name: '버섯꼬',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 4,
    name: '蘑蘑菇',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 5,
    name: 'Balignon',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 6,
    name: 'Knilz',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 7,
    name: 'Shroomish',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 8,
    name: 'Shroomish',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 9,
    name: 'Shroomish',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 11,
    name: 'キノココ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 285,
    local_language_id: 12,
    name: '蘑蘑菇',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 1,
    name: 'キノガッサ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 2,
    name: 'Kinogassa',
    genus: ''
  },
  {
    pokemon_species_id: 286,
    local_language_id: 3,
    name: '버섯모',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 4,
    name: '斗笠菇',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 5,
    name: 'Chapignon',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 6,
    name: 'Kapilz',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 7,
    name: 'Breloom',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 8,
    name: 'Breloom',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 9,
    name: 'Breloom',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 11,
    name: 'キノガッサ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 286,
    local_language_id: 12,
    name: '斗笠菇',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 1,
    name: 'ナマケロ',
    genus: 'なまけものポケモン'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 2,
    name: 'Namakero',
    genus: ''
  },
  {
    pokemon_species_id: 287,
    local_language_id: 3,
    name: '게을로',
    genus: '게으름뱅이포켓몬'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 4,
    name: '懶人獺',
    genus: '懶人寶可夢'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 5,
    name: 'Parecool',
    genus: 'Pokémon Flâneur'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 6,
    name: 'Bummelz',
    genus: 'Faulpelz'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 7,
    name: 'Slakoth',
    genus: 'Pokémon Gandul'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 8,
    name: 'Slakoth',
    genus: 'Pokémon Ozioso'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 9,
    name: 'Slakoth',
    genus: 'Slacker Pokémon'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 11,
    name: 'ナマケロ',
    genus: 'なまけものポケモン'
  },
  {
    pokemon_species_id: 287,
    local_language_id: 12,
    name: '懒人獭',
    genus: '懒人宝可梦'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 1,
    name: 'ヤルキモノ',
    genus: 'あばれザルポケモン'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 2,
    name: 'Yarukimono',
    genus: ''
  },
  {
    pokemon_species_id: 288,
    local_language_id: 3,
    name: '발바로',
    genus: '성난원숭이포켓몬'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 4,
    name: '過動猿',
    genus: '暴猿寶可夢'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 5,
    name: 'Vigoroth',
    genus: 'Pokémon Turbusinge'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 6,
    name: 'Muntier',
    genus: 'Wildaffe'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 7,
    name: 'Vigoroth',
    genus: 'Pokémon Mono Feroz'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 8,
    name: 'Vigoroth',
    genus: 'Pokémon Indocile'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 9,
    name: 'Vigoroth',
    genus: 'Wild Monkey Pokémon'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 11,
    name: 'ヤルキモノ',
    genus: 'あばれザルポケモン'
  },
  {
    pokemon_species_id: 288,
    local_language_id: 12,
    name: '过动猿',
    genus: '暴猿宝可梦'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 1,
    name: 'ケッキング',
    genus: 'ものぐさポケモン'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 2,
    name: 'Kekking',
    genus: ''
  },
  {
    pokemon_species_id: 289,
    local_language_id: 3,
    name: '게을킹',
    genus: '나태함포켓몬'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 4,
    name: '請假王',
    genus: '怕麻煩寶可夢'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 5,
    name: 'Monaflèmit',
    genus: 'Pokémon Fainéant'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 6,
    name: 'Letarking',
    genus: 'Müßig'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 7,
    name: 'Slaking',
    genus: 'Pokémon Holgazán'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 8,
    name: 'Slaking',
    genus: 'Pokémon Pigrizia'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 9,
    name: 'Slaking',
    genus: 'Lazy Pokémon'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 11,
    name: 'ケッキング',
    genus: 'ものぐさポケモン'
  },
  {
    pokemon_species_id: 289,
    local_language_id: 12,
    name: '请假王',
    genus: '怕麻烦宝可梦'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 1,
    name: 'ツチニン',
    genus: 'したづみポケモン'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 2,
    name: 'Tutinin',
    genus: ''
  },
  {
    pokemon_species_id: 290,
    local_language_id: 3,
    name: '토중몬',
    genus: '신참포켓몬'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 4,
    name: '土居忍士',
    genus: '入門寶可夢'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 5,
    name: 'Ningale',
    genus: 'Pokémon Apprenti'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 6,
    name: 'Nincada',
    genus: 'Vorbereiter'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 7,
    name: 'Nincada',
    genus: 'Pokémon Aprendiz'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 8,
    name: 'Nincada',
    genus: 'Pokémon Novizio'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 9,
    name: 'Nincada',
    genus: 'Trainee Pokémon'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 11,
    name: 'ツチニン',
    genus: 'したづみポケモン'
  },
  {
    pokemon_species_id: 290,
    local_language_id: 12,
    name: '土居忍士',
    genus: '入门宝可梦'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 1,
    name: 'テッカニン',
    genus: 'しのびポケモン'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 2,
    name: 'Tekkanin',
    genus: ''
  },
  {
    pokemon_species_id: 291,
    local_language_id: 3,
    name: '아이스크',
    genus: '시노비포켓몬'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 4,
    name: '鐵面忍者',
    genus: '忍者寶可夢'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 5,
    name: 'Ninjask',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 6,
    name: 'Ninjask',
    genus: 'Ninja'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 7,
    name: 'Ninjask',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 8,
    name: 'Ninjask',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 9,
    name: 'Ninjask',
    genus: 'Ninja Pokémon'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 11,
    name: 'テッカニン',
    genus: 'しのびポケモン'
  },
  {
    pokemon_species_id: 291,
    local_language_id: 12,
    name: '铁面忍者',
    genus: '忍者宝可梦'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 1,
    name: 'ヌケニン',
    genus: 'ぬけがらポケモン'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 2,
    name: 'Nukenin',
    genus: ''
  },
  {
    pokemon_species_id: 292,
    local_language_id: 3,
    name: '껍질몬',
    genus: '허물포켓몬'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 4,
    name: '脫殼忍者',
    genus: '空殼寶可夢'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 5,
    name: 'Munja',
    genus: 'Pokémon Exuvie'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 6,
    name: 'Ninjatom',
    genus: 'Häutung'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 7,
    name: 'Shedinja',
    genus: 'Pokémon Muda'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 8,
    name: 'Shedinja',
    genus: 'Pokémon Cambiapelle'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 9,
    name: 'Shedinja',
    genus: 'Shed Pokémon'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 11,
    name: 'ヌケニン',
    genus: 'ぬけがらポケモン'
  },
  {
    pokemon_species_id: 292,
    local_language_id: 12,
    name: '脱壳忍者',
    genus: '空壳宝可梦'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 1,
    name: 'ゴニョニョ',
    genus: 'ささやきポケモン'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 2,
    name: 'Gonyonyo',
    genus: ''
  },
  {
    pokemon_species_id: 293,
    local_language_id: 3,
    name: '소곤룡',
    genus: '속삭임포켓몬'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 4,
    name: '咕妞妞',
    genus: '細語寶可夢'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 5,
    name: 'Chuchmur',
    genus: 'Pokémon Chuchoteur'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 6,
    name: 'Flurmel',
    genus: 'Flüster'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 7,
    name: 'Whismur',
    genus: 'Pokémon Susurro'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 8,
    name: 'Whismur',
    genus: 'Pokémon Sussurro'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 9,
    name: 'Whismur',
    genus: 'Whisper Pokémon'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 11,
    name: 'ゴニョニョ',
    genus: 'ささやきポケモン'
  },
  {
    pokemon_species_id: 293,
    local_language_id: 12,
    name: '咕妞妞',
    genus: '细语宝可梦'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 1,
    name: 'ドゴーム',
    genus: 'おおごえポケモン'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 2,
    name: 'Dogohmb',
    genus: ''
  },
  {
    pokemon_species_id: 294,
    local_language_id: 3,
    name: '노공룡',
    genus: '큰목소리포켓몬'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 4,
    name: '吼爆彈',
    genus: '大聲寶可夢'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 5,
    name: 'Ramboum',
    genus: 'Pokémon Grosse Voix'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 6,
    name: 'Krakeelo',
    genus: 'Lauthals'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 7,
    name: 'Loudred',
    genus: 'Pokémon Chillón'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 8,
    name: 'Loudred',
    genus: 'Pokémon Vocione'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 9,
    name: 'Loudred',
    genus: 'Big Voice Pokémon'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 11,
    name: 'ドゴーム',
    genus: 'おおごえポケモン'
  },
  {
    pokemon_species_id: 294,
    local_language_id: 12,
    name: '吼爆弹',
    genus: '大声宝可梦'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 1,
    name: 'バクオング',
    genus: 'そうおんポケモン'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 2,
    name: 'Bakuong',
    genus: ''
  },
  {
    pokemon_species_id: 295,
    local_language_id: 3,
    name: '폭음룡',
    genus: '소음포켓몬'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 4,
    name: '爆音怪',
    genus: '噪音寶可夢'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 5,
    name: 'Brouhabam',
    genus: 'Pokémon Bruit Sourd'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 6,
    name: 'Krawumms',
    genus: 'Krach'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 7,
    name: 'Exploud',
    genus: 'Pokémon Escandaloso'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 8,
    name: 'Exploud',
    genus: 'Pokémon Fragore'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 9,
    name: 'Exploud',
    genus: 'Loud Noise Pokémon'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 11,
    name: 'バクオング',
    genus: 'そうおんポケモン'
  },
  {
    pokemon_species_id: 295,
    local_language_id: 12,
    name: '爆音怪',
    genus: '噪音宝可梦'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 1,
    name: 'マクノシタ',
    genus: 'こんじょうポケモン'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 2,
    name: 'Makunoshita',
    genus: ''
  },
  {
    pokemon_species_id: 296,
    local_language_id: 3,
    name: '마크탕',
    genus: '근성포켓몬'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 4,
    name: '幕下力士',
    genus: '毅力寶可夢'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 5,
    name: 'Makuhita',
    genus: 'Pokémon Tenace'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 6,
    name: 'Makuhita',
    genus: 'Courage'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 7,
    name: 'Makuhita',
    genus: 'Pokémon Valiente'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 8,
    name: 'Makuhita',
    genus: 'Pokémon Coraggio'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 9,
    name: 'Makuhita',
    genus: 'Guts Pokémon'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 11,
    name: 'マクノシタ',
    genus: 'こんじょうポケモン'
  },
  {
    pokemon_species_id: 296,
    local_language_id: 12,
    name: '幕下力士',
    genus: '毅力宝可梦'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 1,
    name: 'ハリテヤマ',
    genus: 'つっぱりポケモン'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 2,
    name: 'Hariteyama',
    genus: ''
  },
  {
    pokemon_species_id: 297,
    local_language_id: 3,
    name: '하리뭉',
    genus: '손바닥치기포켓몬'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 4,
    name: '鐵掌力士',
    genus: '猛推寶可夢'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 5,
    name: 'Hariyama',
    genus: 'Pokémon Cogneur'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 6,
    name: 'Hariyama',
    genus: 'Armwurf'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 7,
    name: 'Hariyama',
    genus: 'Pokémon Empuje'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 8,
    name: 'Hariyama',
    genus: 'Pokémon Sberletese'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 9,
    name: 'Hariyama',
    genus: 'Arm Thrust Pokémon'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 11,
    name: 'ハリテヤマ',
    genus: 'つっぱりポケモン'
  },
  {
    pokemon_species_id: 297,
    local_language_id: 12,
    name: '铁掌力士',
    genus: '猛推宝可梦'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 1,
    name: 'ルリリ',
    genus: 'みずたまポケモン'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 2,
    name: 'Ruriri',
    genus: ''
  },
  {
    pokemon_species_id: 298,
    local_language_id: 3,
    name: '루리리',
    genus: '물방울포켓몬'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 4,
    name: '露力麗',
    genus: '水珠寶可夢'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 5,
    name: 'Azurill',
    genus: 'Pokémon Point Polka'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 6,
    name: 'Azurill',
    genus: 'Gepunktet'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 7,
    name: 'Azurill',
    genus: 'Pokémon A Topos'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 8,
    name: 'Azurill',
    genus: 'Pokémon Pois'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 9,
    name: 'Azurill',
    genus: 'Polka Dot Pokémon'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 11,
    name: 'ルリリ',
    genus: 'みずたまポケモン'
  },
  {
    pokemon_species_id: 298,
    local_language_id: 12,
    name: '露力丽',
    genus: '水珠宝可梦'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 1,
    name: 'ノズパス',
    genus: 'コンパスポケモン'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 2,
    name: 'Nosepass',
    genus: ''
  },
  {
    pokemon_species_id: 299,
    local_language_id: 3,
    name: '코코파스',
    genus: '콤파스포켓몬'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 4,
    name: '朝北鼻',
    genus: '羅盤寶可夢'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 5,
    name: 'Tarinor',
    genus: 'Pokémon Boussole'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 6,
    name: 'Nasgnet',
    genus: 'Kompass'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 7,
    name: 'Nosepass',
    genus: 'Pokémon Brújula'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 8,
    name: 'Nosepass',
    genus: 'Pokémon Bussola'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 9,
    name: 'Nosepass',
    genus: 'Compass Pokémon'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 11,
    name: 'ノズパス',
    genus: 'コンパスポケモン'
  },
  {
    pokemon_species_id: 299,
    local_language_id: 12,
    name: '朝北鼻',
    genus: '罗盘宝可梦'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 1,
    name: 'エネコ',
    genus: 'こねこポケモン'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 2,
    name: 'Eneco',
    genus: ''
  },
  {
    pokemon_species_id: 300,
    local_language_id: 3,
    name: '에나비',
    genus: '작은고양이포켓몬'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 4,
    name: '向尾喵',
    genus: '小貓寶可夢'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 5,
    name: 'Skitty',
    genus: 'Pokémon Chaton'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 6,
    name: 'Eneco',
    genus: 'Kätzchen'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 7,
    name: 'Skitty',
    genus: 'Pokémon Gatito'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 8,
    name: 'Skitty',
    genus: 'Pokémon Micio'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 9,
    name: 'Skitty',
    genus: 'Kitten Pokémon'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 11,
    name: 'エネコ',
    genus: 'こねこポケモン'
  },
  {
    pokemon_species_id: 300,
    local_language_id: 12,
    name: '向尾喵',
    genus: '小猫宝可梦'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 1,
    name: 'エネコロロ',
    genus: 'おすましポケモン'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 2,
    name: 'Enekororo',
    genus: ''
  },
  {
    pokemon_species_id: 301,
    local_language_id: 3,
    name: '델케티',
    genus: '새침떼기포켓몬'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 4,
    name: '優雅貓',
    genus: '清高寶可夢'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 5,
    name: 'Delcatty',
    genus: 'Pokémon Guindé'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 6,
    name: 'Enekoro',
    genus: 'Eingebildet'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 7,
    name: 'Delcatty',
    genus: 'Pokémon Cursi'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 8,
    name: 'Delcatty',
    genus: 'Pokémon Finezza'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 9,
    name: 'Delcatty',
    genus: 'Prim Pokémon'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 11,
    name: 'エネコロロ',
    genus: 'おすましポケモン'
  },
  {
    pokemon_species_id: 301,
    local_language_id: 12,
    name: '优雅猫',
    genus: '清高宝可梦'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 1,
    name: 'ヤミラミ',
    genus: 'くらやみポケモン'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 2,
    name: 'Yamirami',
    genus: ''
  },
  {
    pokemon_species_id: 302,
    local_language_id: 3,
    name: '깜까미',
    genus: '어둠포켓몬'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 4,
    name: '勾魂眼',
    genus: '黑暗寶可夢'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 5,
    name: 'Ténéfix',
    genus: 'Pokémon Obscurité'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 6,
    name: 'Zobiris',
    genus: 'Finsternis'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 7,
    name: 'Sableye',
    genus: 'Pokémon Oscuridad'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 8,
    name: 'Sableye',
    genus: 'Pokémon Oscurità'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 9,
    name: 'Sableye',
    genus: 'Darkness Pokémon'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 11,
    name: 'ヤミラミ',
    genus: 'くらやみポケモン'
  },
  {
    pokemon_species_id: 302,
    local_language_id: 12,
    name: '勾魂眼',
    genus: '黑暗宝可梦'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 1,
    name: 'クチート',
    genus: 'あざむきポケモン'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 2,
    name: 'Kucheat',
    genus: ''
  },
  {
    pokemon_species_id: 303,
    local_language_id: 3,
    name: '입치트',
    genus: '배반포켓몬'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 4,
    name: '大嘴娃',
    genus: '欺騙寶可夢'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 5,
    name: 'Mysdibule',
    genus: 'Pokémon Trompeur'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 6,
    name: 'Flunkifer',
    genus: 'Schwindler'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 7,
    name: 'Mawile',
    genus: 'Pokémon Tramposo'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 8,
    name: 'Mawile',
    genus: 'Pokémon Inganno'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 9,
    name: 'Mawile',
    genus: 'Deceiver Pokémon'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 11,
    name: 'クチート',
    genus: 'あざむきポケモン'
  },
  {
    pokemon_species_id: 303,
    local_language_id: 12,
    name: '大嘴娃',
    genus: '欺骗宝可梦'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 1,
    name: 'ココドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 2,
    name: 'Cokodora',
    genus: ''
  },
  {
    pokemon_species_id: 304,
    local_language_id: 3,
    name: '가보리',
    genus: '철갑옷포켓몬'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 4,
    name: '可可多拉',
    genus: '鐵鎧寶可夢'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 5,
    name: 'Galekid',
    genus: 'Pokémon Armurfer'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 6,
    name: 'Stollunior',
    genus: 'Eisenpanzer'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 7,
    name: 'Aron',
    genus: 'Pokémon Cor. Férrea'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 8,
    name: 'Aron',
    genus: 'Pokémon Corazza'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 9,
    name: 'Aron',
    genus: 'Iron Armor Pokémon'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 11,
    name: 'ココドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 304,
    local_language_id: 12,
    name: '可可多拉',
    genus: '铁铠宝可梦'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 1,
    name: 'コドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 2,
    name: 'Kodora',
    genus: ''
  },
  {
    pokemon_species_id: 305,
    local_language_id: 3,
    name: '갱도라',
    genus: '철갑옷포켓몬'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 4,
    name: '可多拉',
    genus: '鐵鎧寶可夢'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 5,
    name: 'Galegon',
    genus: 'Pokémon Armurfer'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 6,
    name: 'Stollrak',
    genus: 'Eisenpanzer'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 7,
    name: 'Lairon',
    genus: 'Pokémon Cor. Férrea'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 8,
    name: 'Lairon',
    genus: 'Pokémon Corazza'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 9,
    name: 'Lairon',
    genus: 'Iron Armor Pokémon'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 11,
    name: 'コドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 305,
    local_language_id: 12,
    name: '可多拉',
    genus: '铁铠宝可梦'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 1,
    name: 'ボスゴドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 2,
    name: 'Bossgodora',
    genus: ''
  },
  {
    pokemon_species_id: 306,
    local_language_id: 3,
    name: '보스로라',
    genus: '철갑옷포켓몬'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 4,
    name: '波士可多拉',
    genus: '鐵鎧寶可夢'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 5,
    name: 'Galeking',
    genus: 'Pokémon Armurfer'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 6,
    name: 'Stolloss',
    genus: 'Eisenpanzer'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 7,
    name: 'Aggron',
    genus: 'Pokémon Cor. Férrea'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 8,
    name: 'Aggron',
    genus: 'Pokémon Corazza'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 9,
    name: 'Aggron',
    genus: 'Iron Armor Pokémon'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 11,
    name: 'ボスゴドラ',
    genus: 'てつヨロイポケモン'
  },
  {
    pokemon_species_id: 306,
    local_language_id: 12,
    name: '波士可多拉',
    genus: '铁铠宝可梦'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 1,
    name: 'アサナン',
    genus: 'めいそうポケモン'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 2,
    name: 'Asanan',
    genus: ''
  },
  {
    pokemon_species_id: 307,
    local_language_id: 3,
    name: '요가랑',
    genus: '명상포켓몬'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 4,
    name: '瑪沙那',
    genus: '冥想寶可夢'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 5,
    name: 'Méditikka',
    genus: 'Pokémon Méditation'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 6,
    name: 'Meditie',
    genus: 'Meditation'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 7,
    name: 'Meditite',
    genus: 'Pokémon Meditador'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 8,
    name: 'Meditite',
    genus: 'Pokémon Meditazione'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 9,
    name: 'Meditite',
    genus: 'Meditate Pokémon'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 11,
    name: 'アサナン',
    genus: 'めいそうポケモン'
  },
  {
    pokemon_species_id: 307,
    local_language_id: 12,
    name: '玛沙那',
    genus: '冥想宝可梦'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 1,
    name: 'チャーレム',
    genus: 'めいそうポケモン'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 2,
    name: 'Charem',
    genus: ''
  },
  {
    pokemon_species_id: 308,
    local_language_id: 3,
    name: '요가램',
    genus: '명상포켓몬'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 4,
    name: '恰雷姆',
    genus: '冥想寶可夢'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 5,
    name: 'Charmina',
    genus: 'Pokémon Méditation'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 6,
    name: 'Meditalis',
    genus: 'Meditation'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 7,
    name: 'Medicham',
    genus: 'Pokémon Meditador'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 8,
    name: 'Medicham',
    genus: 'Pokémon Meditazione'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 9,
    name: 'Medicham',
    genus: 'Meditate Pokémon'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 11,
    name: 'チャーレム',
    genus: 'めいそうポケモン'
  },
  {
    pokemon_species_id: 308,
    local_language_id: 12,
    name: '恰雷姆',
    genus: '冥想宝可梦'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 1,
    name: 'ラクライ',
    genus: 'いなずまポケモン'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 2,
    name: 'Rakurai',
    genus: ''
  },
  {
    pokemon_species_id: 309,
    local_language_id: 3,
    name: '썬더라이',
    genus: '천둥번개포켓몬'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 4,
    name: '落雷獸',
    genus: '閃電寶可夢'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 5,
    name: 'Dynavolt',
    genus: 'Pokémon Orage'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 6,
    name: 'Frizelbliz',
    genus: 'Gewitter'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 7,
    name: 'Electrike',
    genus: 'Pokémon Calambre'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 8,
    name: 'Electrike',
    genus: 'Pokémon Lampo'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 9,
    name: 'Electrike',
    genus: 'Lightning Pokémon'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 11,
    name: 'ラクライ',
    genus: 'いなずまポケモン'
  },
  {
    pokemon_species_id: 309,
    local_language_id: 12,
    name: '落雷兽',
    genus: '闪电宝可梦'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 1,
    name: 'ライボルト',
    genus: 'ほうでんポケモン'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 2,
    name: 'Livolt',
    genus: ''
  },
  {
    pokemon_species_id: 310,
    local_language_id: 3,
    name: '썬더볼트',
    genus: '방전포켓몬'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 4,
    name: '雷電獸',
    genus: '放電寶可夢'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 5,
    name: 'Élecsprint',
    genus: 'Pokémon Décharge'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 6,
    name: 'Voltenso',
    genus: 'Entladung'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 7,
    name: 'Manectric',
    genus: 'Pokémon Descarga'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 8,
    name: 'Manectric',
    genus: 'Pokémon Scossa'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 9,
    name: 'Manectric',
    genus: 'Discharge Pokémon'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 11,
    name: 'ライボルト',
    genus: 'ほうでんポケモン'
  },
  {
    pokemon_species_id: 310,
    local_language_id: 12,
    name: '雷电兽',
    genus: '放电宝可梦'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 1,
    name: 'プラスル',
    genus: 'おうえんポケモン'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 2,
    name: 'Prasle',
    genus: ''
  },
  {
    pokemon_species_id: 311,
    local_language_id: 3,
    name: '플러시',
    genus: '응원포켓몬'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 4,
    name: '正電拍拍',
    genus: '加油寶可夢'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 5,
    name: 'Posipi',
    genus: 'Pokémon Acclameur'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 6,
    name: 'Plusle',
    genus: 'Jubel'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 7,
    name: 'Plusle',
    genus: 'Pokémon Ánimo'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 8,
    name: 'Plusle',
    genus: 'Pokémon Incitamento'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 9,
    name: 'Plusle',
    genus: 'Cheering Pokémon'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 11,
    name: 'プラスル',
    genus: 'おうえんポケモン'
  },
  {
    pokemon_species_id: 311,
    local_language_id: 12,
    name: '正电拍拍',
    genus: '加油宝可梦'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 1,
    name: 'マイナン',
    genus: 'おうえんポケモン'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 2,
    name: 'Minun',
    genus: ''
  },
  {
    pokemon_species_id: 312,
    local_language_id: 3,
    name: '마이농',
    genus: '응원포켓몬'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 4,
    name: '負電拍拍',
    genus: '加油寶可夢'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 5,
    name: 'Négapi',
    genus: 'Pokémon Acclameur'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 6,
    name: 'Minun',
    genus: 'Jubel'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 7,
    name: 'Minun',
    genus: 'Pokémon Ánimo'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 8,
    name: 'Minun',
    genus: 'Pokémon Incitamento'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 9,
    name: 'Minun',
    genus: 'Cheering Pokémon'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 11,
    name: 'マイナン',
    genus: 'おうえんポケモン'
  },
  {
    pokemon_species_id: 312,
    local_language_id: 12,
    name: '負电拍拍',
    genus: '加油宝可梦'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 1,
    name: 'バルビート',
    genus: 'ほたるポケモン'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 2,
    name: 'Barubeat',
    genus: ''
  },
  {
    pokemon_species_id: 313,
    local_language_id: 3,
    name: '볼비트',
    genus: '반딧불포켓몬'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 4,
    name: '電螢蟲',
    genus: '螢火蟲寶可夢'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 5,
    name: 'Muciole',
    genus: 'Pokémon Luciole'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 6,
    name: 'Volbeat',
    genus: 'Glühwürmchen'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 7,
    name: 'Volbeat',
    genus: 'Pokémon Luciérnaga'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 8,
    name: 'Volbeat',
    genus: 'Pokémon Lucciola'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 9,
    name: 'Volbeat',
    genus: 'Firefly Pokémon'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 11,
    name: 'バルビート',
    genus: 'ほたるポケモン'
  },
  {
    pokemon_species_id: 313,
    local_language_id: 12,
    name: '电萤虫',
    genus: '萤火虫宝可梦'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 1,
    name: 'イルミーゼ',
    genus: 'ほたるポケモン'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 2,
    name: 'Illumise',
    genus: ''
  },
  {
    pokemon_species_id: 314,
    local_language_id: 3,
    name: '네오비트',
    genus: '반딧불포켓몬'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 4,
    name: '甜甜螢',
    genus: '螢火蟲寶可夢'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 5,
    name: 'Lumivole',
    genus: 'Pokémon Luciole'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 6,
    name: 'Illumise',
    genus: 'Glühwürmchen'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 7,
    name: 'Illumise',
    genus: 'Pokémon Luciérnaga'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 8,
    name: 'Illumise',
    genus: 'Pokémon Lucciola'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 9,
    name: 'Illumise',
    genus: 'Firefly Pokémon'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 11,
    name: 'イルミーゼ',
    genus: 'ほたるポケモン'
  },
  {
    pokemon_species_id: 314,
    local_language_id: 12,
    name: '甜甜萤',
    genus: '萤火虫宝可梦'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 1,
    name: 'ロゼリア',
    genus: 'いばらポケモン'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 2,
    name: 'Roselia',
    genus: ''
  },
  {
    pokemon_species_id: 315,
    local_language_id: 3,
    name: '로젤리아',
    genus: '가시포켓몬'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 4,
    name: '毒薔薇',
    genus: '荊棘寶可夢'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 5,
    name: 'Rosélia',
    genus: 'Pokémon Épine'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 6,
    name: 'Roselia',
    genus: 'Dorn'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 7,
    name: 'Roselia',
    genus: 'Pokémon Espina'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 8,
    name: 'Roselia',
    genus: 'Pokémon Spina'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 9,
    name: 'Roselia',
    genus: 'Thorn Pokémon'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 11,
    name: 'ロゼリア',
    genus: 'いばらポケモン'
  },
  {
    pokemon_species_id: 315,
    local_language_id: 12,
    name: '毒蔷薇',
    genus: '荆棘宝可梦'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 1,
    name: 'ゴクリン',
    genus: 'いぶくろポケモン'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 2,
    name: 'Gokulin',
    genus: ''
  },
  {
    pokemon_species_id: 316,
    local_language_id: 3,
    name: '꼴깍몬',
    genus: '밥통포켓몬'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 4,
    name: '溶食獸',
    genus: '胃袋寶可夢'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 5,
    name: 'Gloupti',
    genus: 'Pokémon Estomac'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 6,
    name: 'Schluppuck',
    genus: 'Magen'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 7,
    name: 'Gulpin',
    genus: 'Pokémon Estómago'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 8,
    name: 'Gulpin',
    genus: 'Pokémon Stomaco'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 9,
    name: 'Gulpin',
    genus: 'Stomach Pokémon'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 11,
    name: 'ゴクリン',
    genus: 'いぶくろポケモン'
  },
  {
    pokemon_species_id: 316,
    local_language_id: 12,
    name: '溶食兽',
    genus: '胃袋宝可梦'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 1,
    name: 'マルノーム',
    genus: 'どくぶくろポケモン'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 2,
    name: 'Marunoom',
    genus: ''
  },
  {
    pokemon_species_id: 317,
    local_language_id: 3,
    name: '꿀꺽몬',
    genus: '독봉지포켓몬'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 4,
    name: '吞食獸',
    genus: '毒袋寶可夢'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 5,
    name: 'Avaltout',
    genus: 'Pokémon Sac Poison'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 6,
    name: 'Schlukwech',
    genus: 'Giftbeutel'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 7,
    name: 'Swalot',
    genus: 'Pokémon Bolsa Veneno'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 8,
    name: 'Swalot',
    genus: 'Pokémon Velenosacco'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 9,
    name: 'Swalot',
    genus: 'Poison Bag Pokémon'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 11,
    name: 'マルノーム',
    genus: 'どくぶくろポケモン'
  },
  {
    pokemon_species_id: 317,
    local_language_id: 12,
    name: '吞食兽',
    genus: '毒袋宝可梦'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 1,
    name: 'キバニア',
    genus: 'どうもうポケモン'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 2,
    name: 'Kibanha',
    genus: ''
  },
  {
    pokemon_species_id: 318,
    local_language_id: 3,
    name: '샤프니아',
    genus: '사나움포켓몬'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 4,
    name: '利牙魚',
    genus: '凶猛寶可夢'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 5,
    name: 'Carvanha',
    genus: 'Pokémon Féroce'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 6,
    name: 'Kanivanha',
    genus: 'Gnadenlos'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 7,
    name: 'Carvanha',
    genus: 'Pokémon Feroz'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 8,
    name: 'Carvanha',
    genus: 'Pokémon Feroce'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 9,
    name: 'Carvanha',
    genus: 'Savage Pokémon'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 11,
    name: 'キバニア',
    genus: 'どうもうポケモン'
  },
  {
    pokemon_species_id: 318,
    local_language_id: 12,
    name: '利牙鱼',
    genus: '凶猛宝可梦'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 1,
    name: 'サメハダー',
    genus: 'きょうぼうポケモン'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 2,
    name: 'Samehader',
    genus: ''
  },
  {
    pokemon_species_id: 319,
    local_language_id: 3,
    name: '샤크니아',
    genus: '난폭포켓몬'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 4,
    name: '巨牙鯊',
    genus: '凶暴寶可夢'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 5,
    name: 'Sharpedo',
    genus: 'Pokémon Brutal'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 6,
    name: 'Tohaido',
    genus: 'Brutal'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 7,
    name: 'Sharpedo',
    genus: 'Pokémon Voraz'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 8,
    name: 'Sharpedo',
    genus: 'Pokémon Brutale'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 9,
    name: 'Sharpedo',
    genus: 'Brutal Pokémon'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 11,
    name: 'サメハダー',
    genus: 'きょうぼうポケモン'
  },
  {
    pokemon_species_id: 319,
    local_language_id: 12,
    name: '巨牙鲨',
    genus: '凶暴宝可梦'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 1,
    name: 'ホエルコ',
    genus: 'たまくじらポケモン'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 2,
    name: 'Whalko',
    genus: ''
  },
  {
    pokemon_species_id: 320,
    local_language_id: 3,
    name: '고래왕자',
    genus: '둥근고래포켓몬'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 4,
    name: '吼吼鯨',
    genus: '球鯨寶可夢'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 5,
    name: 'Wailmer',
    genus: 'Pokémon Baleinboule'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 6,
    name: 'Wailmer',
    genus: 'Kugelwal'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 7,
    name: 'Wailmer',
    genus: 'Pokémon Ballenabola'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 8,
    name: 'Wailmer',
    genus: 'Pokémon Balenottero'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 9,
    name: 'Wailmer',
    genus: 'Ball Whale Pokémon'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 11,
    name: 'ホエルコ',
    genus: 'たまくじらポケモン'
  },
  {
    pokemon_species_id: 320,
    local_language_id: 12,
    name: '吼吼鲸',
    genus: '球鲸宝可梦'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 1,
    name: 'ホエルオー',
    genus: 'うきくじらポケモン'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 2,
    name: 'Whaloh',
    genus: ''
  },
  {
    pokemon_species_id: 321,
    local_language_id: 3,
    name: '고래왕',
    genus: '뜸고래포켓몬'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 4,
    name: '吼鯨王',
    genus: '浮鯨寶可夢'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 5,
    name: 'Wailord',
    genus: 'Pokémon Cachabouée'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 6,
    name: 'Wailord',
    genus: 'Flutwal'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 7,
    name: 'Wailord',
    genus: 'Pokémon Ballenaflot'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 8,
    name: 'Wailord',
    genus: 'Pokémon Megabalena'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 9,
    name: 'Wailord',
    genus: 'Float Whale Pokémon'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 11,
    name: 'ホエルオー',
    genus: 'うきくじらポケモン'
  },
  {
    pokemon_species_id: 321,
    local_language_id: 12,
    name: '吼鲸王',
    genus: '浮鲸宝可梦'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 1,
    name: 'ドンメル',
    genus: 'どんかんポケモン'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 2,
    name: 'Donmel',
    genus: ''
  },
  {
    pokemon_species_id: 322,
    local_language_id: 3,
    name: '둔타',
    genus: '둔감포켓몬'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 4,
    name: '呆火駝',
    genus: '遲鈍寶可夢'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 5,
    name: 'Chamallot',
    genus: 'Pokémon Engourdi'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 6,
    name: 'Camaub',
    genus: 'Taubheit'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 7,
    name: 'Numel',
    genus: 'Pokémon Torpe'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 8,
    name: 'Numel',
    genus: 'Pokémon Torpore'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 9,
    name: 'Numel',
    genus: 'Numb Pokémon'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 11,
    name: 'ドンメル',
    genus: 'どんかんポケモン'
  },
  {
    pokemon_species_id: 322,
    local_language_id: 12,
    name: '呆火驼',
    genus: '迟钝宝可梦'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 1,
    name: 'バクーダ',
    genus: 'ふんかポケモン'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 2,
    name: 'Bakuuda',
    genus: ''
  },
  {
    pokemon_species_id: 323,
    local_language_id: 3,
    name: '폭타',
    genus: '분화포켓몬'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 4,
    name: '噴火駝',
    genus: '噴火寶可夢'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 5,
    name: 'Camérupt',
    genus: 'Pokémon Éruption'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 6,
    name: 'Camerupt',
    genus: 'Ausbruch'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 7,
    name: 'Camerupt',
    genus: 'Pokémon Erupción'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 8,
    name: 'Camerupt',
    genus: 'Pokémon Eruzione'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 9,
    name: 'Camerupt',
    genus: 'Eruption Pokémon'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 11,
    name: 'バクーダ',
    genus: 'ふんかポケモン'
  },
  {
    pokemon_species_id: 323,
    local_language_id: 12,
    name: '喷火驼',
    genus: '喷火宝可梦'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 1,
    name: 'コータス',
    genus: 'せきたんポケモン'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 2,
    name: 'Cotoise',
    genus: ''
  },
  {
    pokemon_species_id: 324,
    local_language_id: 3,
    name: '코터스',
    genus: '석탄포켓몬'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 4,
    name: '煤炭龜',
    genus: '煤炭寶可夢'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 5,
    name: 'Chartor',
    genus: 'Pokémon Charbon'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 6,
    name: 'Qurtel',
    genus: 'Kohle'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 7,
    name: 'Torkoal',
    genus: 'Pokémon Carbón'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 8,
    name: 'Torkoal',
    genus: 'Pokémon Carbone'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 9,
    name: 'Torkoal',
    genus: 'Coal Pokémon'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 11,
    name: 'コータス',
    genus: 'せきたんポケモン'
  },
  {
    pokemon_species_id: 324,
    local_language_id: 12,
    name: '煤炭龟',
    genus: '煤炭宝可梦'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 1,
    name: 'バネブー',
    genus: 'とびはねポケモン'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 2,
    name: 'Baneboo',
    genus: ''
  },
  {
    pokemon_species_id: 325,
    local_language_id: 3,
    name: '피그점프',
    genus: '튀다포켓몬'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 4,
    name: '跳跳豬',
    genus: '彈跳寶可夢'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 5,
    name: 'Spoink',
    genus: 'Pokémon Rebond'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 6,
    name: 'Spoink',
    genus: 'Sprungfeder'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 7,
    name: 'Spoink',
    genus: 'Pokémon Saltarín'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 8,
    name: 'Spoink',
    genus: 'Pokémon Molla'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 9,
    name: 'Spoink',
    genus: 'Bounce Pokémon'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 11,
    name: 'バネブー',
    genus: 'とびはねポケモン'
  },
  {
    pokemon_species_id: 325,
    local_language_id: 12,
    name: '跳跳猪',
    genus: '弹跳宝可梦'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 1,
    name: 'ブーピッグ',
    genus: 'あやつりポケモン'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 2,
    name: 'Boopig',
    genus: ''
  },
  {
    pokemon_species_id: 326,
    local_language_id: 3,
    name: '피그킹',
    genus: '조작포켓몬'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 4,
    name: '噗噗豬',
    genus: '操縱寶可夢'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 5,
    name: 'Groret',
    genus: 'Pokémon Magouilleur'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 6,
    name: 'Groink',
    genus: 'Manipulator'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 7,
    name: 'Grumpig',
    genus: 'Pokémon Manipulador'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 8,
    name: 'Grumpig',
    genus: 'Pokémon Raggiro'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 9,
    name: 'Grumpig',
    genus: 'Manipulate Pokémon'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 11,
    name: 'ブーピッグ',
    genus: 'あやつりポケモン'
  },
  {
    pokemon_species_id: 326,
    local_language_id: 12,
    name: '噗噗猪',
    genus: '操纵宝可梦'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 1,
    name: 'パッチール',
    genus: 'ぶちパンダポケモン'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 2,
    name: 'Patcheel',
    genus: ''
  },
  {
    pokemon_species_id: 327,
    local_language_id: 3,
    name: '얼루기',
    genus: '얼룩팬더포켓몬'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 4,
    name: '晃晃斑',
    genus: '斑點熊貓寶可夢'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 5,
    name: 'Spinda',
    genus: 'Pokémon Panda Tache'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 6,
    name: 'Pandir',
    genus: 'Punkt-Panda'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 7,
    name: 'Spinda',
    genus: 'Pokémon Panda Topos'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 8,
    name: 'Spinda',
    genus: 'Pokémon Macchipanda'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 9,
    name: 'Spinda',
    genus: 'Spot Panda Pokémon'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 11,
    name: 'パッチール',
    genus: 'ぶちパンダポケモン'
  },
  {
    pokemon_species_id: 327,
    local_language_id: 12,
    name: '晃晃斑',
    genus: '斑点熊猫宝可梦'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 1,
    name: 'ナックラー',
    genus: 'ありじごくポケモン'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 2,
    name: 'Nuckrar',
    genus: ''
  },
  {
    pokemon_species_id: 328,
    local_language_id: 3,
    name: '톱치',
    genus: '개미지옥포켓몬'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 4,
    name: '大顎蟻',
    genus: '蟻獅寶可夢'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 5,
    name: 'Kraknoix',
    genus: 'Pokémon Piégeur'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 6,
    name: 'Knacklion',
    genus: 'Ameisenlöwe'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 7,
    name: 'Trapinch',
    genus: 'Pokémon Hormigaleón'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 8,
    name: 'Trapinch',
    genus: 'Pokémon Trappola'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 9,
    name: 'Trapinch',
    genus: 'Ant Pit Pokémon'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 11,
    name: 'ナックラー',
    genus: 'ありじごくポケモン'
  },
  {
    pokemon_species_id: 328,
    local_language_id: 12,
    name: '大颚蚁',
    genus: '蚁狮宝可梦'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 1,
    name: 'ビブラーバ',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 2,
    name: 'Vibrava',
    genus: ''
  },
  {
    pokemon_species_id: 329,
    local_language_id: 3,
    name: '비브라바',
    genus: '진동포켓몬'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 4,
    name: '超音波幼蟲',
    genus: '震動寶可夢'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 5,
    name: 'Vibraninf',
    genus: 'Pokémon Vibration'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 6,
    name: 'Vibrava',
    genus: 'Vibration'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 7,
    name: 'Vibrava',
    genus: 'Pokémon Vibrante'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 8,
    name: 'Vibrava',
    genus: 'Pokémon Vibrazione'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 9,
    name: 'Vibrava',
    genus: 'Vibration Pokémon'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 11,
    name: 'ビブラーバ',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 329,
    local_language_id: 12,
    name: '超音波幼虫',
    genus: '振动宝可梦'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 1,
    name: 'フライゴン',
    genus: 'せいれいポケモン'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 2,
    name: 'Frygon',
    genus: ''
  },
  {
    pokemon_species_id: 330,
    local_language_id: 3,
    name: '플라이곤',
    genus: '정령포켓몬'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 4,
    name: '沙漠蜻蜓',
    genus: '神秘寶可夢'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 5,
    name: 'Libégon',
    genus: 'Pokémon Mystique'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 6,
    name: 'Libelldra',
    genus: 'Mystik'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 7,
    name: 'Flygon',
    genus: 'Pokémon Místico'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 8,
    name: 'Flygon',
    genus: 'Pokémon Magico'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 9,
    name: 'Flygon',
    genus: 'Mystic Pokémon'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 11,
    name: 'フライゴン',
    genus: 'せいれいポケモン'
  },
  {
    pokemon_species_id: 330,
    local_language_id: 12,
    name: '沙漠蜻蜓',
    genus: '神秘宝可梦'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 1,
    name: 'サボネア',
    genus: 'サボテンポケモン'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 2,
    name: 'Sabonea',
    genus: ''
  },
  {
    pokemon_species_id: 331,
    local_language_id: 3,
    name: '선인왕',
    genus: '선인장포켓몬'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 4,
    name: '刺球仙人掌',
    genus: '仙人掌寶可夢'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 5,
    name: 'Cacnea',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 6,
    name: 'Tuska',
    genus: 'Kaktus'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 7,
    name: 'Cacnea',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 8,
    name: 'Cacnea',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 9,
    name: 'Cacnea',
    genus: 'Cactus Pokémon'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 11,
    name: 'サボネア',
    genus: 'サボテンポケモン'
  },
  {
    pokemon_species_id: 331,
    local_language_id: 12,
    name: '刺球仙人掌',
    genus: '仙人掌宝可梦'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 1,
    name: 'ノクタス',
    genus: 'カカシぐさポケモン'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 2,
    name: 'Noctus',
    genus: ''
  },
  {
    pokemon_species_id: 332,
    local_language_id: 3,
    name: '밤선인',
    genus: '허수아비포켓몬'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 4,
    name: '夢歌仙人掌',
    genus: '稻草人寶可夢'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 5,
    name: 'Cacturne',
    genus: 'Pokémon Épouvantail'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 6,
    name: 'Noktuska',
    genus: 'Vogelschock'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 7,
    name: 'Cacturne',
    genus: 'Pokémon Espantajo'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 8,
    name: 'Cacturne',
    genus: 'Pokémon Spavento'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 9,
    name: 'Cacturne',
    genus: 'Scarecrow Pokémon'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 11,
    name: 'ノクタス',
    genus: 'カカシぐさポケモン'
  },
  {
    pokemon_species_id: 332,
    local_language_id: 12,
    name: '梦歌仙人掌',
    genus: '稻草人宝可梦'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 1,
    name: 'チルット',
    genus: 'わたどりポケモン'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 2,
    name: 'Tyltto',
    genus: ''
  },
  {
    pokemon_species_id: 333,
    local_language_id: 3,
    name: '파비코',
    genus: '솜새포켓몬'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 4,
    name: '青綿鳥',
    genus: '綿鳥寶可夢'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 5,
    name: 'Tylton',
    genus: 'Pokémon Oiseaucoton'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 6,
    name: 'Wablu',
    genus: 'Wollvogel'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 7,
    name: 'Swablu',
    genus: 'Pokémon Ave Algodón'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 8,
    name: 'Swablu',
    genus: 'Pokémon Alidicotone'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 9,
    name: 'Swablu',
    genus: 'Cotton Bird Pokémon'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 11,
    name: 'チルット',
    genus: 'わたどりポケモン'
  },
  {
    pokemon_species_id: 333,
    local_language_id: 12,
    name: '青绵鸟',
    genus: '绵鸟宝可梦'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 1,
    name: 'チルタリス',
    genus: 'ハミングポケモン'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 2,
    name: 'Tyltalis',
    genus: ''
  },
  {
    pokemon_species_id: 334,
    local_language_id: 3,
    name: '파비코리',
    genus: '허밍포켓몬'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 4,
    name: '七夕青鳥',
    genus: '哼唱寶可夢'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 5,
    name: 'Altaria',
    genus: 'Pokémon Virevolteur'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 6,
    name: 'Altaria',
    genus: 'Summsel'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 7,
    name: 'Altaria',
    genus: 'Pokémon Cantor'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 8,
    name: 'Altaria',
    genus: 'Pokémon Canterino'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 9,
    name: 'Altaria',
    genus: 'Humming Pokémon'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 11,
    name: 'チルタリス',
    genus: 'ハミングポケモン'
  },
  {
    pokemon_species_id: 334,
    local_language_id: 12,
    name: '七夕青鸟',
    genus: '哼唱宝可梦'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 1,
    name: 'ザングース',
    genus: 'ネコイタチポケモン'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 2,
    name: 'Zangoose',
    genus: ''
  },
  {
    pokemon_species_id: 335,
    local_language_id: 3,
    name: '쟝고',
    genus: '고양이족제비포켓몬'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 4,
    name: '貓鼬斬',
    genus: '貓鼬寶可夢'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 5,
    name: 'Mangriff',
    genus: 'Pokémon Chat Furet'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 6,
    name: 'Sengo',
    genus: 'Frettkatz'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 7,
    name: 'Zangoose',
    genus: 'Pokémon Gato Hurón'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 8,
    name: 'Zangoose',
    genus: 'Pokémon Furogatto'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 9,
    name: 'Zangoose',
    genus: 'Cat Ferret Pokémon'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 11,
    name: 'ザングース',
    genus: 'ネコイタチポケモン'
  },
  {
    pokemon_species_id: 335,
    local_language_id: 12,
    name: '猫鼬斩',
    genus: '猫鼬宝可梦'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 1,
    name: 'ハブネーク',
    genus: 'キバへびポケモン'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 2,
    name: 'Habunake',
    genus: ''
  },
  {
    pokemon_species_id: 336,
    local_language_id: 3,
    name: '세비퍼',
    genus: '송곳뱀포켓몬'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 4,
    name: '飯匙蛇',
    genus: '牙蛇寶可夢'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 5,
    name: 'Séviper',
    genus: 'Pokémon Serpacroc'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 6,
    name: 'Vipitis',
    genus: 'Reißzahn'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 7,
    name: 'Seviper',
    genus: 'Pokémon Colmillos'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 8,
    name: 'Seviper',
    genus: 'Pokémon Zannaserpe'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 9,
    name: 'Seviper',
    genus: 'Fang Snake Pokémon'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 11,
    name: 'ハブネーク',
    genus: 'キバへびポケモン'
  },
  {
    pokemon_species_id: 336,
    local_language_id: 12,
    name: '饭匙蛇',
    genus: '牙蛇宝可梦'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 1,
    name: 'ルナトーン',
    genus: 'いんせきポケモン'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 2,
    name: 'Lunatone',
    genus: ''
  },
  {
    pokemon_species_id: 337,
    local_language_id: 3,
    name: '루나톤',
    genus: '별똥별포켓몬'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 4,
    name: '月石',
    genus: '隕石寶可夢'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 5,
    name: 'Séléroc',
    genus: 'Pokémon Météorite'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 6,
    name: 'Lunastein',
    genus: 'Meteorit'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 7,
    name: 'Lunatone',
    genus: 'Pokémon Meteorito'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 8,
    name: 'Lunatone',
    genus: 'Pokémon Meteorite'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 9,
    name: 'Lunatone',
    genus: 'Meteorite Pokémon'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 11,
    name: 'ルナトーン',
    genus: 'いんせきポケモン'
  },
  {
    pokemon_species_id: 337,
    local_language_id: 12,
    name: '月石',
    genus: '陨石宝可梦'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 1,
    name: 'ソルロック',
    genus: 'いんせきポケモン'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 2,
    name: 'Solrock',
    genus: ''
  },
  {
    pokemon_species_id: 338,
    local_language_id: 3,
    name: '솔록',
    genus: '별똥별포켓몬'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 4,
    name: '太陽岩',
    genus: '隕石寶可夢'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 5,
    name: 'Solaroc',
    genus: 'Pokémon Météorite'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 6,
    name: 'Sonnfel',
    genus: 'Meteorit'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 7,
    name: 'Solrock',
    genus: 'Pokémon Meteorito'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 8,
    name: 'Solrock',
    genus: 'Pokémon Meteorite'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 9,
    name: 'Solrock',
    genus: 'Meteorite Pokémon'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 11,
    name: 'ソルロック',
    genus: 'いんせきポケモン'
  },
  {
    pokemon_species_id: 338,
    local_language_id: 12,
    name: '太阳岩',
    genus: '陨石宝可梦'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 1,
    name: 'ドジョッチ',
    genus: 'ひげうおポケモン'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 2,
    name: 'Dojoach',
    genus: ''
  },
  {
    pokemon_species_id: 339,
    local_language_id: 3,
    name: '미꾸리',
    genus: '수염물고기포켓몬'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 4,
    name: '泥泥鰍',
    genus: '鬚魚寶可夢'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 5,
    name: 'Barloche',
    genus: 'Pokémon Barbillon'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 6,
    name: 'Schmerbe',
    genus: 'Barthaar'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 7,
    name: 'Barboach',
    genus: 'Pokémon Bigotudo'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 8,
    name: 'Barboach',
    genus: 'Pokémon Baffetti'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 9,
    name: 'Barboach',
    genus: 'Whiskers Pokémon'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 11,
    name: 'ドジョッチ',
    genus: 'ひげうおポケモン'
  },
  {
    pokemon_species_id: 339,
    local_language_id: 12,
    name: '泥泥鰍',
    genus: '须鱼宝可梦'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 1,
    name: 'ナマズン',
    genus: 'ひげうおポケモン'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 2,
    name: 'Namazun',
    genus: ''
  },
  {
    pokemon_species_id: 340,
    local_language_id: 3,
    name: '메깅',
    genus: '수염물고기포켓몬'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 4,
    name: '鯰魚王',
    genus: '鬚魚寶可夢'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 5,
    name: 'Barbicha',
    genus: 'Pokémon Barbillon'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 6,
    name: 'Welsar',
    genus: 'Barthaar'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 7,
    name: 'Whiscash',
    genus: 'Pokémon Bigotudo'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 8,
    name: 'Whiscash',
    genus: 'Pokémon Baffetti'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 9,
    name: 'Whiscash',
    genus: 'Whiskers Pokémon'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 11,
    name: 'ナマズン',
    genus: 'ひげうおポケモン'
  },
  {
    pokemon_species_id: 340,
    local_language_id: 12,
    name: '鲶鱼王',
    genus: '须鱼宝可梦'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 1,
    name: 'ヘイガニ',
    genus: 'ごろつきポケモン'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 2,
    name: 'Heigani',
    genus: ''
  },
  {
    pokemon_species_id: 341,
    local_language_id: 3,
    name: '가재군',
    genus: '건달포켓몬'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 4,
    name: '龍蝦小兵',
    genus: '無賴寶可夢'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 5,
    name: 'Écrapince',
    genus: 'Pokémon Brute'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 6,
    name: 'Krebscorps',
    genus: 'Grobian'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 7,
    name: 'Corphish',
    genus: 'Pokémon Rufián'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 8,
    name: 'Corphish',
    genus: 'Pokémon Birbone'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 9,
    name: 'Corphish',
    genus: 'Ruffian Pokémon'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 11,
    name: 'ヘイガニ',
    genus: 'ごろつきポケモン'
  },
  {
    pokemon_species_id: 341,
    local_language_id: 12,
    name: '龙虾小兵',
    genus: '无赖宝可梦'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 1,
    name: 'シザリガー',
    genus: 'ならずものポケモン'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 2,
    name: 'Shizariger',
    genus: ''
  },
  {
    pokemon_species_id: 342,
    local_language_id: 3,
    name: '가재장군',
    genus: '불량배포켓몬'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 4,
    name: '鐵螯龍蝦',
    genus: '流氓寶可夢'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 5,
    name: 'Colhomard',
    genus: 'Pokémon Crapule'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 6,
    name: 'Krebutack',
    genus: 'Schlingel'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 7,
    name: 'Crawdaunt',
    genus: 'Pokémon Granuja'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 8,
    name: 'Crawdaunt',
    genus: 'Pokémon Canaglia'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 9,
    name: 'Crawdaunt',
    genus: 'Rogue Pokémon'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 11,
    name: 'シザリガー',
    genus: 'ならずものポケモン'
  },
  {
    pokemon_species_id: 342,
    local_language_id: 12,
    name: '铁螯龙虾',
    genus: '流氓宝可梦'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 1,
    name: 'ヤジロン',
    genus: 'どぐうポケモン'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 2,
    name: 'Yajilon',
    genus: ''
  },
  {
    pokemon_species_id: 343,
    local_language_id: 3,
    name: '오뚝군',
    genus: '토우포켓몬'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 4,
    name: '天秤偶',
    genus: '泥偶寶可夢'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 5,
    name: 'Balbuto',
    genus: 'Pokémon Poupargile'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 6,
    name: 'Puppance',
    genus: 'Lehmpuppe'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 7,
    name: 'Baltoy',
    genus: 'Pokémon Muñeca Barro'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 8,
    name: 'Baltoy',
    genus: 'Pokémon Argilla'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 9,
    name: 'Baltoy',
    genus: 'Clay Doll Pokémon'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 11,
    name: 'ヤジロン',
    genus: 'どぐうポケモン'
  },
  {
    pokemon_species_id: 343,
    local_language_id: 12,
    name: '天秤偶',
    genus: '泥偶宝可梦'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 1,
    name: 'ネンドール',
    genus: 'どぐうポケモン'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 2,
    name: 'Nendoll',
    genus: ''
  },
  {
    pokemon_species_id: 344,
    local_language_id: 3,
    name: '점토도리',
    genus: '토우포켓몬'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 4,
    name: '念力土偶',
    genus: '泥偶寶可夢'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 5,
    name: 'Kaorine',
    genus: 'Pokémon Poupargile'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 6,
    name: 'Lepumentas',
    genus: 'Lehmpuppe'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 7,
    name: 'Claydol',
    genus: 'Pokémon Muñeca Barro'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 8,
    name: 'Claydol',
    genus: 'Pokémon Argilla'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 9,
    name: 'Claydol',
    genus: 'Clay Doll Pokémon'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 11,
    name: 'ネンドール',
    genus: 'どぐうポケモン'
  },
  {
    pokemon_species_id: 344,
    local_language_id: 12,
    name: '念力土偶',
    genus: '泥偶宝可梦'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 1,
    name: 'リリーラ',
    genus: 'ウミユリポケモン'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 2,
    name: 'Lilyla',
    genus: ''
  },
  {
    pokemon_species_id: 345,
    local_language_id: 3,
    name: '릴링',
    genus: '바다나리포켓몬'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 4,
    name: '觸手百合',
    genus: '海百合寶可夢'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 5,
    name: 'Lilia',
    genus: 'Pokémon Lis d’Eau'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 6,
    name: 'Liliep',
    genus: 'Seeanemone'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 7,
    name: 'Lileep',
    genus: 'Pokémon Lila Mar'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 8,
    name: 'Lileep',
    genus: 'Pokémon Fiordimare'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 9,
    name: 'Lileep',
    genus: 'Sea Lily Pokémon'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 11,
    name: 'リリーラ',
    genus: 'ウミユリポケモン'
  },
  {
    pokemon_species_id: 345,
    local_language_id: 12,
    name: '触手百合',
    genus: '海百合宝可梦'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 1,
    name: 'ユレイドル',
    genus: 'いわつぼポケモン'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 2,
    name: 'Yuradle',
    genus: ''
  },
  {
    pokemon_species_id: 346,
    local_language_id: 3,
    name: '릴리요',
    genus: '바위단지포켓몬'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 4,
    name: '搖籃百合',
    genus: '藤壺寶可夢'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 5,
    name: 'Vacilys',
    genus: 'Pokémon Bernacle'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 6,
    name: 'Wielie',
    genus: 'Rankfüßer'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 7,
    name: 'Cradily',
    genus: 'Pokémon Percebe'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 8,
    name: 'Cradily',
    genus: 'Pokémon Lepade'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 9,
    name: 'Cradily',
    genus: 'Barnacle Pokémon'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 11,
    name: 'ユレイドル',
    genus: 'いわつぼポケモン'
  },
  {
    pokemon_species_id: 346,
    local_language_id: 12,
    name: '摇篮百合',
    genus: '藤壶宝可梦'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 1,
    name: 'アノプス',
    genus: 'むかしエビポケモン'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 2,
    name: 'Anopth',
    genus: ''
  },
  {
    pokemon_species_id: 347,
    local_language_id: 3,
    name: '아노딥스',
    genus: '고대새우포켓몬'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 4,
    name: '太古羽蟲',
    genus: '古蝦寶可夢'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 5,
    name: 'Anorith',
    genus: 'Pokémon Crustage'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 6,
    name: 'Anorith',
    genus: 'Urgarnele'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 7,
    name: 'Anorith',
    genus: 'Pokémon Camarón'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 8,
    name: 'Anorith',
    genus: 'Pokémon Primaceo'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 9,
    name: 'Anorith',
    genus: 'Old Shrimp Pokémon'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 11,
    name: 'アノプス',
    genus: 'むかしエビポケモン'
  },
  {
    pokemon_species_id: 347,
    local_language_id: 12,
    name: '太古羽虫',
    genus: '古虾宝可梦'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 1,
    name: 'アーマルド',
    genus: 'かっちゅうポケモン'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 2,
    name: 'Armaldo',
    genus: ''
  },
  {
    pokemon_species_id: 348,
    local_language_id: 3,
    name: '아말도',
    genus: '갑주포켓몬'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 4,
    name: '太古盔甲',
    genus: '甲胄寶可夢'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 5,
    name: 'Armaldo',
    genus: 'Pokémon Blindage'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 6,
    name: 'Armaldo',
    genus: 'Schild'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 7,
    name: 'Armaldo',
    genus: 'Pokémon Armadura'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 8,
    name: 'Armaldo',
    genus: 'Pokémon Piastre'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 9,
    name: 'Armaldo',
    genus: 'Plate Pokémon'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 11,
    name: 'アーマルド',
    genus: 'かっちゅうポケモン'
  },
  {
    pokemon_species_id: 348,
    local_language_id: 12,
    name: '太古盔甲',
    genus: '甲胄宝可梦'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 1,
    name: 'ヒンバス',
    genus: 'さかなポケモン'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 2,
    name: 'Hinbass',
    genus: ''
  },
  {
    pokemon_species_id: 349,
    local_language_id: 3,
    name: '빈티나',
    genus: '물고기포켓몬'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 4,
    name: '醜醜魚',
    genus: '魚寶可夢'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 5,
    name: 'Barpau',
    genus: 'Pokémon Poisson'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 6,
    name: 'Barschwa',
    genus: 'Fisch'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 7,
    name: 'Feebas',
    genus: 'Pokémon Pez'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 8,
    name: 'Feebas',
    genus: 'Pokémon Pesce'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 9,
    name: 'Feebas',
    genus: 'Fish Pokémon'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 11,
    name: 'ヒンバス',
    genus: 'さかなポケモン'
  },
  {
    pokemon_species_id: 349,
    local_language_id: 12,
    name: '丑丑鱼',
    genus: '鱼宝可梦'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 1,
    name: 'ミロカロス',
    genus: 'いつくしみポケモン'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 2,
    name: 'Milokaross',
    genus: ''
  },
  {
    pokemon_species_id: 350,
    local_language_id: 3,
    name: '밀로틱',
    genus: '사랑포켓몬'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 4,
    name: '美納斯',
    genus: '慈愛寶可夢'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 5,
    name: 'Milobellus',
    genus: 'Pokémon Tendre'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 6,
    name: 'Milotic',
    genus: 'Zartheit'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 7,
    name: 'Milotic',
    genus: 'Pokémon Tierno'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 8,
    name: 'Milotic',
    genus: 'Pokémon Tenerezza'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 9,
    name: 'Milotic',
    genus: 'Tender Pokémon'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 11,
    name: 'ミロカロス',
    genus: 'いつくしみポケモン'
  },
  {
    pokemon_species_id: 350,
    local_language_id: 12,
    name: '美纳斯',
    genus: '慈爱宝可梦'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 1,
    name: 'ポワルン',
    genus: 'てんきポケモン'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 2,
    name: 'Powalen',
    genus: ''
  },
  {
    pokemon_species_id: 351,
    local_language_id: 3,
    name: '캐스퐁',
    genus: '날씨포켓몬'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 4,
    name: '飄浮泡泡',
    genus: '天氣寶可夢'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 5,
    name: 'Morphéo',
    genus: 'Pokémon Climat'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 6,
    name: 'Formeo',
    genus: 'Wetter'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 7,
    name: 'Castform',
    genus: 'Pokémon Clima'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 8,
    name: 'Castform',
    genus: 'Pokémon Meteo'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 9,
    name: 'Castform',
    genus: 'Weather Pokémon'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 11,
    name: 'ポワルン',
    genus: 'てんきポケモン'
  },
  {
    pokemon_species_id: 351,
    local_language_id: 12,
    name: '飘浮泡泡',
    genus: '天气宝可梦'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 1,
    name: 'カクレオン',
    genus: 'いろへんげポケモン'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 2,
    name: 'Kakureon',
    genus: ''
  },
  {
    pokemon_species_id: 352,
    local_language_id: 3,
    name: '켈리몬',
    genus: '색변화포켓몬'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 4,
    name: '變隱龍',
    genus: '變色寶可夢'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 5,
    name: 'Kecleon',
    genus: 'Pokémon Multicolor'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 6,
    name: 'Kecleon',
    genus: 'Farbenspiel'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 7,
    name: 'Kecleon',
    genus: 'Pokémon Camaleónico'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 8,
    name: 'Kecleon',
    genus: 'Pokémon Mutacolore'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 9,
    name: 'Kecleon',
    genus: 'Color Swap Pokémon'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 11,
    name: 'カクレオン',
    genus: 'いろへんげポケモン'
  },
  {
    pokemon_species_id: 352,
    local_language_id: 12,
    name: '变隐龙',
    genus: '变色宝可梦'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 1,
    name: 'カゲボウズ',
    genus: 'にんぎょうポケモン'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 2,
    name: 'Kagebouzu',
    genus: ''
  },
  {
    pokemon_species_id: 353,
    local_language_id: 3,
    name: '어둠대신',
    genus: '인형포켓몬'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 4,
    name: '怨影娃娃',
    genus: '人偶寶可夢'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 5,
    name: 'Polichombr',
    genus: 'Pokémon Poupée'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 6,
    name: 'Shuppet',
    genus: 'Puppe'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 7,
    name: 'Shuppet',
    genus: 'Pokémon Títere'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 8,
    name: 'Shuppet',
    genus: 'Pokémon Pupazzo'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 9,
    name: 'Shuppet',
    genus: 'Puppet Pokémon'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 11,
    name: 'カゲボウズ',
    genus: 'にんぎょうポケモン'
  },
  {
    pokemon_species_id: 353,
    local_language_id: 12,
    name: '怨影娃娃',
    genus: '人偶宝可梦'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 1,
    name: 'ジュペッタ',
    genus: 'ぬいぐるみポケモン'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 2,
    name: 'Juppeta',
    genus: ''
  },
  {
    pokemon_species_id: 354,
    local_language_id: 3,
    name: '다크펫',
    genus: '봉제인형포켓몬'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 4,
    name: '詛咒娃娃',
    genus: '布偶寶可夢'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 5,
    name: 'Branette',
    genus: 'Pokémon Marionnette'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 6,
    name: 'Banette',
    genus: 'Marionette'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 7,
    name: 'Banette',
    genus: 'Pokémon Marioneta'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 8,
    name: 'Banette',
    genus: 'Pokémon Marionetta'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 9,
    name: 'Banette',
    genus: 'Marionette Pokémon'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 11,
    name: 'ジュペッタ',
    genus: 'ぬいぐるみポケモン'
  },
  {
    pokemon_species_id: 354,
    local_language_id: 12,
    name: '诅咒娃娃',
    genus: '布偶宝可梦'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 1,
    name: 'ヨマワル',
    genus: 'おむかえポケモン'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 2,
    name: 'Yomawaru',
    genus: ''
  },
  {
    pokemon_species_id: 355,
    local_language_id: 3,
    name: '해골몽',
    genus: '마중포켓몬'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 4,
    name: '夜巡靈',
    genus: '渡魂寶可夢'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 5,
    name: 'Skelénox',
    genus: 'Pokémon Requiem'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 6,
    name: 'Zwirrlicht',
    genus: 'Requiem'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 7,
    name: 'Duskull',
    genus: 'Pokémon Réquiem'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 8,
    name: 'Duskull',
    genus: 'Pokémon Requiem'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 9,
    name: 'Duskull',
    genus: 'Requiem Pokémon'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 11,
    name: 'ヨマワル',
    genus: 'おむかえポケモン'
  },
  {
    pokemon_species_id: 355,
    local_language_id: 12,
    name: '夜巡灵',
    genus: '渡魂宝可梦'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 1,
    name: 'サマヨール',
    genus: 'てまねきポケモン'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 2,
    name: 'Samayouru',
    genus: ''
  },
  {
    pokemon_species_id: 356,
    local_language_id: 3,
    name: '미라몽',
    genus: '손짓포켓몬'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 4,
    name: '彷徨夜靈',
    genus: '招手寶可夢'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 5,
    name: 'Téraclope',
    genus: 'Pokémon Appel'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 6,
    name: 'Zwirrklop',
    genus: 'Wink'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 7,
    name: 'Dusclops',
    genus: 'Pokémon Atrayente'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 8,
    name: 'Dusclops',
    genus: 'Pokémon Ipnosguardo'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 9,
    name: 'Dusclops',
    genus: 'Beckon Pokémon'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 11,
    name: 'サマヨール',
    genus: 'てまねきポケモン'
  },
  {
    pokemon_species_id: 356,
    local_language_id: 12,
    name: '彷徨夜灵',
    genus: '招手宝可梦'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 1,
    name: 'トロピウス',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 2,
    name: 'Tropius',
    genus: ''
  },
  {
    pokemon_species_id: 357,
    local_language_id: 3,
    name: '트로피우스',
    genus: '후르츠포켓몬'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 4,
    name: '熱帶龍',
    genus: '水果寶可夢'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 5,
    name: 'Tropius',
    genus: 'Pokémon Fruit'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 6,
    name: 'Tropius',
    genus: 'Obst'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 7,
    name: 'Tropius',
    genus: 'Pokémon Fruto'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 8,
    name: 'Tropius',
    genus: 'Pokémon Frutto'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 9,
    name: 'Tropius',
    genus: 'Fruit Pokémon'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 11,
    name: 'トロピウス',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 357,
    local_language_id: 12,
    name: '热带龙',
    genus: '水果宝可梦'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 1,
    name: 'チリーン',
    genus: 'ふうりんポケモン'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 2,
    name: 'Chirean',
    genus: ''
  },
  {
    pokemon_species_id: 358,
    local_language_id: 3,
    name: '치렁',
    genus: '풍경포켓몬'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 4,
    name: '風鈴鈴',
    genus: '風鈴寶可夢'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 5,
    name: 'Éoko',
    genus: 'Pokémon Carillon'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 6,
    name: 'Palimpalim',
    genus: 'Windspiel'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 7,
    name: 'Chimecho',
    genus: 'Pokémon Sonido Aire'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 8,
    name: 'Chimecho',
    genus: 'Pokémon Vencampana'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 9,
    name: 'Chimecho',
    genus: 'Wind Chime Pokémon'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 11,
    name: 'チリーン',
    genus: 'ふうりんポケモン'
  },
  {
    pokemon_species_id: 358,
    local_language_id: 12,
    name: '风铃铃',
    genus: '风铃宝可梦'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 1,
    name: 'アブソル',
    genus: 'わざわいポケモン'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 2,
    name: 'Absol',
    genus: ''
  },
  {
    pokemon_species_id: 359,
    local_language_id: 3,
    name: '앱솔',
    genus: '재난포켓몬'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 4,
    name: '阿勃梭魯',
    genus: '災禍寶可夢'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 5,
    name: 'Absol',
    genus: 'Pokémon Désastre'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 6,
    name: 'Absol',
    genus: 'Desaster'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 7,
    name: 'Absol',
    genus: 'Pokémon Catástrofe'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 8,
    name: 'Absol',
    genus: 'Pokémon Catastrofe'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 9,
    name: 'Absol',
    genus: 'Disaster Pokémon'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 11,
    name: 'アブソル',
    genus: 'わざわいポケモン'
  },
  {
    pokemon_species_id: 359,
    local_language_id: 12,
    name: '阿勃梭鲁',
    genus: '灾祸宝可梦'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 1,
    name: 'ソーナノ',
    genus: 'ほがらかポケモン'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 2,
    name: 'Sohnano',
    genus: ''
  },
  {
    pokemon_species_id: 360,
    local_language_id: 3,
    name: '마자',
    genus: '명랑포켓몬'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 4,
    name: '小果然',
    genus: '開朗寶可夢'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 5,
    name: 'Okéoké',
    genus: 'Pokémon Ravi'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 6,
    name: 'Isso',
    genus: 'Strahlekind'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 7,
    name: 'Wynaut',
    genus: 'Pokémon Radiante'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 8,
    name: 'Wynaut',
    genus: 'Pokémon Brillante'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 9,
    name: 'Wynaut',
    genus: 'Bright Pokémon'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 11,
    name: 'ソーナノ',
    genus: 'ほがらかポケモン'
  },
  {
    pokemon_species_id: 360,
    local_language_id: 12,
    name: '小果然',
    genus: '开朗宝可梦'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 1,
    name: 'ユキワラシ',
    genus: 'ゆきかさポケモン'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 2,
    name: 'Yukiwarashi',
    genus: ''
  },
  {
    pokemon_species_id: 361,
    local_language_id: 3,
    name: '눈꼬마',
    genus: '눈우산포켓몬'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 4,
    name: '雪童子',
    genus: '雪笠寶可夢'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 5,
    name: 'Stalgamin',
    genus: 'Pokémon Capuche'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 6,
    name: 'Schneppke',
    genus: 'Schneehut'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 7,
    name: 'Snorunt',
    genus: 'Pokémon Gorro Nieve'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 8,
    name: 'Snorunt',
    genus: 'Pokémon Cappelneve'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 9,
    name: 'Snorunt',
    genus: 'Snow Hat Pokémon'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 11,
    name: 'ユキワラシ',
    genus: 'ゆきかさポケモン'
  },
  {
    pokemon_species_id: 361,
    local_language_id: 12,
    name: '雪童子',
    genus: '雪笠宝可梦'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 1,
    name: 'オニゴーリ',
    genus: 'がんめんポケモン'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 2,
    name: 'Onigohri',
    genus: ''
  },
  {
    pokemon_species_id: 362,
    local_language_id: 3,
    name: '얼음귀신',
    genus: '얼굴포켓몬'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 4,
    name: '冰鬼護',
    genus: '臉面寶可夢'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 5,
    name: 'Oniglali',
    genus: 'Pokémon Face'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 6,
    name: 'Firnontor',
    genus: 'Antlitz'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 7,
    name: 'Glalie',
    genus: 'Pokémon Cara'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 8,
    name: 'Glalie',
    genus: 'Pokémon Tuttomuso'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 9,
    name: 'Glalie',
    genus: 'Face Pokémon'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 11,
    name: 'オニゴーリ',
    genus: 'がんめんポケモン'
  },
  {
    pokemon_species_id: 362,
    local_language_id: 12,
    name: '冰鬼护',
    genus: '脸面宝可梦'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 1,
    name: 'タマザラシ',
    genus: 'てたたきポケモン'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 2,
    name: 'Tamazarashi',
    genus: ''
  },
  {
    pokemon_species_id: 363,
    local_language_id: 3,
    name: '대굴레오',
    genus: '손뼉포켓몬'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 4,
    name: '海豹球',
    genus: '拍手寶可夢'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 5,
    name: 'Obalie',
    genus: 'Pokémon Clap Clap'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 6,
    name: 'Seemops',
    genus: 'Applaus'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 7,
    name: 'Spheal',
    genus: 'Pokémon Aplauso'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 8,
    name: 'Spheal',
    genus: 'Pokémon Rotolante'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 9,
    name: 'Spheal',
    genus: 'Clap Pokémon'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 11,
    name: 'タマザラシ',
    genus: 'てたたきポケモン'
  },
  {
    pokemon_species_id: 363,
    local_language_id: 12,
    name: '海豹球',
    genus: '拍手宝可梦'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 1,
    name: 'トドグラー',
    genus: 'たままわしポケモン'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 2,
    name: 'Todoggler',
    genus: ''
  },
  {
    pokemon_species_id: 364,
    local_language_id: 3,
    name: '씨레오',
    genus: '공돌리기포켓몬'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 4,
    name: '海魔獅',
    genus: '滾球寶可夢'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 5,
    name: 'Phogleur',
    genus: 'Pokémon Roule Boule'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 6,
    name: 'Seejong',
    genus: 'Spielball'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 7,
    name: 'Sealeo',
    genus: 'Pokémon Rodabola'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 8,
    name: 'Sealeo',
    genus: 'Pokémon Rotapalla'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 9,
    name: 'Sealeo',
    genus: 'Ball Roll Pokémon'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 11,
    name: 'トドグラー',
    genus: 'たままわしポケモン'
  },
  {
    pokemon_species_id: 364,
    local_language_id: 12,
    name: '海魔狮',
    genus: '滚球宝可梦'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 1,
    name: 'トドゼルガ',
    genus: 'こおりわりポケモン'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 2,
    name: 'Todoseruga',
    genus: ''
  },
  {
    pokemon_species_id: 365,
    local_language_id: 3,
    name: '씨카이저',
    genus: '얼음깨기포켓몬'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 4,
    name: '帝牙海獅',
    genus: '破冰寶可夢'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 5,
    name: 'Kaimorse',
    genus: 'Pokémon Brise Glace'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 6,
    name: 'Walraisa',
    genus: 'Eisbrecher'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 7,
    name: 'Walrein',
    genus: 'Pokémon Rompehielo'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 8,
    name: 'Walrein',
    genus: 'Pokémon Spaccagelo'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 9,
    name: 'Walrein',
    genus: 'Ice Break Pokémon'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 11,
    name: 'トドゼルガ',
    genus: 'こおりわりポケモン'
  },
  {
    pokemon_species_id: 365,
    local_language_id: 12,
    name: '帝牙海狮',
    genus: '破冰宝可梦'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 1,
    name: 'パールル',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 2,
    name: 'Pearlulu',
    genus: ''
  },
  {
    pokemon_species_id: 366,
    local_language_id: 3,
    name: '진주몽',
    genus: '두조개포켓몬'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 4,
    name: '珍珠貝',
    genus: '雙殼貝寶可夢'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 5,
    name: 'Coquiperl',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 6,
    name: 'Perlu',
    genus: 'Muschel'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 7,
    name: 'Clamperl',
    genus: 'Pokémon Bivalvo'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 8,
    name: 'Clamperl',
    genus: 'Pokémon Bivalve'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 9,
    name: 'Clamperl',
    genus: 'Bivalve Pokémon'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 11,
    name: 'パールル',
    genus: '２まいがいポケモン'
  },
  {
    pokemon_species_id: 366,
    local_language_id: 12,
    name: '珍珠贝',
    genus: '双壳贝宝可梦'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 1,
    name: 'ハンテール',
    genus: 'しんかいポケモン'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 2,
    name: 'Huntail',
    genus: ''
  },
  {
    pokemon_species_id: 367,
    local_language_id: 3,
    name: '헌테일',
    genus: '깊은바다포켓몬'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 4,
    name: '獵斑魚',
    genus: '深海寶可夢'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 5,
    name: 'Serpang',
    genus: 'Pokémon Abysse'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 6,
    name: 'Aalabyss',
    genus: 'Tiefsee'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 7,
    name: 'Huntail',
    genus: 'Pokémon Abisal'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 8,
    name: 'Huntail',
    genus: 'Pokémon Abissi'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 9,
    name: 'Huntail',
    genus: 'Deep Sea Pokémon'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 11,
    name: 'ハンテール',
    genus: 'しんかいポケモン'
  },
  {
    pokemon_species_id: 367,
    local_language_id: 12,
    name: '猎斑鱼',
    genus: '深海宝可梦'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 1,
    name: 'サクラビス',
    genus: 'なんかいポケモン'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 2,
    name: 'Sakurabyss',
    genus: ''
  },
  {
    pokemon_species_id: 368,
    local_language_id: 3,
    name: '분홍장이',
    genus: '남해포켓몬'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 4,
    name: '櫻花魚',
    genus: '南海寶可夢'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 5,
    name: 'Rosabyss',
    genus: 'Pokémon Mer du Sud'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 6,
    name: 'Saganabyss',
    genus: 'Südsee'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 7,
    name: 'Gorebyss',
    genus: 'Pokémon Mar del Sur'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 8,
    name: 'Gorebyss',
    genus: 'Pokémon Sudmarino'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 9,
    name: 'Gorebyss',
    genus: 'South Sea Pokémon'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 11,
    name: 'サクラビス',
    genus: 'なんかいポケモン'
  },
  {
    pokemon_species_id: 368,
    local_language_id: 12,
    name: '樱花鱼',
    genus: '南海宝可梦'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 1,
    name: 'ジーランス',
    genus: 'ちょうじゅポケモン'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 2,
    name: 'Glanth',
    genus: ''
  },
  {
    pokemon_species_id: 369,
    local_language_id: 3,
    name: '시라칸',
    genus: '장수포켓몬'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 4,
    name: '古空棘魚',
    genus: '長壽寶可夢'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 5,
    name: 'Relicanth',
    genus: 'Pokémon Longévité'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 6,
    name: 'Relicanth',
    genus: 'Bestand'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 7,
    name: 'Relicanth',
    genus: 'Pokémon Longevo'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 8,
    name: 'Relicanth',
    genus: 'Pokémon Longevità'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 9,
    name: 'Relicanth',
    genus: 'Longevity Pokémon'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 11,
    name: 'ジーランス',
    genus: 'ちょうじゅポケモン'
  },
  {
    pokemon_species_id: 369,
    local_language_id: 12,
    name: '古空棘鱼',
    genus: '长寿宝可梦'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 1,
    name: 'ラブカス',
    genus: 'ランデブーポケモン'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 2,
    name: 'Lovecus',
    genus: ''
  },
  {
    pokemon_species_id: 370,
    local_language_id: 3,
    name: '사랑동이',
    genus: '랑데부포켓몬'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 4,
    name: '愛心魚',
    genus: '相隨寶可夢'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 5,
    name: 'Lovdisc',
    genus: 'Pokémon Rendezvous'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 6,
    name: 'Liebiskus',
    genus: 'Rendezvous'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 7,
    name: 'Luvdisc',
    genus: 'Pokémon Cita'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 8,
    name: 'Luvdisc',
    genus: 'Pokémon Rendezvous'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 9,
    name: 'Luvdisc',
    genus: 'Rendezvous Pokémon'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 11,
    name: 'ラブカス',
    genus: 'ランデブーポケモン'
  },
  {
    pokemon_species_id: 370,
    local_language_id: 12,
    name: '爱心鱼',
    genus: '相随宝可梦'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 1,
    name: 'タツベイ',
    genus: 'いしあたまポケモン'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 2,
    name: 'Tatsubay',
    genus: ''
  },
  {
    pokemon_species_id: 371,
    local_language_id: 3,
    name: '아공이',
    genus: '돌머리포켓몬'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 4,
    name: '寶貝龍',
    genus: '堅硬腦袋寶可夢'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 5,
    name: 'Draby',
    genus: 'Pokémon Tête de Roc'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 6,
    name: 'Kindwurm',
    genus: 'Steinhaupt'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 7,
    name: 'Bagon',
    genus: 'Pokémon Cabeza Roca'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 8,
    name: 'Bagon',
    genus: 'Pokémon Rocciotesta'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 9,
    name: 'Bagon',
    genus: 'Rock Head Pokémon'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 11,
    name: 'タツベイ',
    genus: 'いしあたまポケモン'
  },
  {
    pokemon_species_id: 371,
    local_language_id: 12,
    name: '宝贝龙',
    genus: '坚硬脑袋宝可梦'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 1,
    name: 'コモルー',
    genus: 'にんたいポケモン'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 2,
    name: 'Komoruu',
    genus: ''
  },
  {
    pokemon_species_id: 372,
    local_language_id: 3,
    name: '쉘곤',
    genus: '인내포켓몬'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 4,
    name: '甲殼龍',
    genus: '耐力寶可夢'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 5,
    name: 'Drackhaus',
    genus: 'Pokémon Endurant'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 6,
    name: 'Draschel',
    genus: 'Durchsteher'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 7,
    name: 'Shelgon',
    genus: 'Pokémon Resistencia'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 8,
    name: 'Shelgon',
    genus: 'Pokémon Resistenza'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 9,
    name: 'Shelgon',
    genus: 'Endurance Pokémon'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 11,
    name: 'コモルー',
    genus: 'にんたいポケモン'
  },
  {
    pokemon_species_id: 372,
    local_language_id: 12,
    name: '甲壳龙',
    genus: '耐力宝可梦'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 1,
    name: 'ボーマンダ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 2,
    name: 'Bohmander',
    genus: ''
  },
  {
    pokemon_species_id: 373,
    local_language_id: 3,
    name: '보만다',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 4,
    name: '暴飛龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 5,
    name: 'Drattak',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 6,
    name: 'Brutalanda',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 7,
    name: 'Salamence',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 8,
    name: 'Salamence',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 9,
    name: 'Salamence',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 11,
    name: 'ボーマンダ',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 373,
    local_language_id: 12,
    name: '暴飞龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 1,
    name: 'ダンバル',
    genus: 'てっきゅうポケモン'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 2,
    name: 'Dumbber',
    genus: ''
  },
  {
    pokemon_species_id: 374,
    local_language_id: 3,
    name: '메탕',
    genus: '철공포켓몬'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 4,
    name: '鐵啞鈴',
    genus: '鐵球寶可夢'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 5,
    name: 'Terhal',
    genus: 'Pokémon Boulefer'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 6,
    name: 'Tanhel',
    genus: 'Eisenkugel'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 7,
    name: 'Beldum',
    genus: 'Pokémon Bola Hierro'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 8,
    name: 'Beldum',
    genus: 'Pokémon Ferrosfera'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 9,
    name: 'Beldum',
    genus: 'Iron Ball Pokémon'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 11,
    name: 'ダンバル',
    genus: 'てっきゅうポケモン'
  },
  {
    pokemon_species_id: 374,
    local_language_id: 12,
    name: '铁哑铃',
    genus: '铁球宝可梦'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 1,
    name: 'メタング',
    genus: 'てつツメポケモン'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 2,
    name: 'Metang',
    genus: ''
  },
  {
    pokemon_species_id: 375,
    local_language_id: 3,
    name: '메탕구',
    genus: '철발톱포켓몬'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 4,
    name: '金屬怪',
    genus: '鐵爪寶可夢'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 5,
    name: 'Métang',
    genus: 'Pokémon Pincefer'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 6,
    name: 'Metang',
    genus: 'Eisenklaue'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 7,
    name: 'Metang',
    genus: 'Pokémon Garra Hierro'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 8,
    name: 'Metang',
    genus: 'Pokémon Ferrunghia'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 9,
    name: 'Metang',
    genus: 'Iron Claw Pokémon'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 11,
    name: 'メタング',
    genus: 'てつツメポケモン'
  },
  {
    pokemon_species_id: 375,
    local_language_id: 12,
    name: '金属怪',
    genus: '铁爪宝可梦'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 1,
    name: 'メタグロス',
    genus: 'てつあしポケモン'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 2,
    name: 'Metagross',
    genus: ''
  },
  {
    pokemon_species_id: 376,
    local_language_id: 3,
    name: '메타그로스',
    genus: '무쇠다리포켓몬'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 4,
    name: '巨金怪',
    genus: '鐵足寶可夢'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 5,
    name: 'Métalosse',
    genus: 'Pokémon Pattefer'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 6,
    name: 'Metagross',
    genus: 'Eisenfuß'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 7,
    name: 'Metagross',
    genus: 'Pokémon Pata Hierro'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 8,
    name: 'Metagross',
    genus: 'Pokémon Ferrarto'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 9,
    name: 'Metagross',
    genus: 'Iron Leg Pokémon'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 11,
    name: 'メタグロス',
    genus: 'てつあしポケモン'
  },
  {
    pokemon_species_id: 376,
    local_language_id: 12,
    name: '巨金怪',
    genus: '铁足宝可梦'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 1,
    name: 'レジロック',
    genus: 'いわやまポケモン'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 2,
    name: 'Regirock',
    genus: ''
  },
  {
    pokemon_species_id: 377,
    local_language_id: 3,
    name: '레지락',
    genus: '바위산포켓몬'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 4,
    name: '雷吉洛克',
    genus: '岩山寶可夢'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 5,
    name: 'Regirock',
    genus: 'Pokémon Pic Rocheux'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 6,
    name: 'Regirock',
    genus: 'Steingipfel'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 7,
    name: 'Regirock',
    genus: 'Pokémon Pico Roca'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 8,
    name: 'Regirock',
    genus: 'Pokémon Picco'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 9,
    name: 'Regirock',
    genus: 'Rock Peak Pokémon'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 11,
    name: 'レジロック',
    genus: 'いわやまポケモン'
  },
  {
    pokemon_species_id: 377,
    local_language_id: 12,
    name: '雷吉洛克',
    genus: '岩山宝可梦'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 1,
    name: 'レジアイス',
    genus: 'ひょうざんポケモン'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 2,
    name: 'Regice',
    genus: ''
  },
  {
    pokemon_species_id: 378,
    local_language_id: 3,
    name: '레지아이스',
    genus: '빙산포켓몬'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 4,
    name: '雷吉艾斯',
    genus: '冰山寶可夢'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 5,
    name: 'Regice',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 6,
    name: 'Regice',
    genus: 'Eisberg'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 7,
    name: 'Regice',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 8,
    name: 'Regice',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 9,
    name: 'Regice',
    genus: 'Iceberg Pokémon'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 11,
    name: 'レジアイス',
    genus: 'ひょうざんポケモン'
  },
  {
    pokemon_species_id: 378,
    local_language_id: 12,
    name: '雷吉艾斯',
    genus: '冰山宝可梦'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 1,
    name: 'レジスチル',
    genus: 'くろがねポケモン'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 2,
    name: 'Registeel',
    genus: ''
  },
  {
    pokemon_species_id: 379,
    local_language_id: 3,
    name: '레지스틸',
    genus: '쇠철포켓몬'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 4,
    name: '雷吉斯奇魯',
    genus: '黑金寶可夢'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 5,
    name: 'Registeel',
    genus: 'Pokémon Fer'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 6,
    name: 'Registeel',
    genus: 'Eisen'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 7,
    name: 'Registeel',
    genus: 'Pokémon Hierro'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 8,
    name: 'Registeel',
    genus: 'Pokémon Ferro'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 9,
    name: 'Registeel',
    genus: 'Iron Pokémon'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 11,
    name: 'レジスチル',
    genus: 'くろがねポケモン'
  },
  {
    pokemon_species_id: 379,
    local_language_id: 12,
    name: '雷吉斯奇鲁',
    genus: '黑金宝可梦'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 1,
    name: 'ラティアス',
    genus: 'むげんポケモン'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 2,
    name: 'Latias',
    genus: ''
  },
  {
    pokemon_species_id: 380,
    local_language_id: 3,
    name: '라티아스',
    genus: '무한포켓몬'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 4,
    name: '拉帝亞斯',
    genus: '無限寶可夢'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 5,
    name: 'Latias',
    genus: 'Pokémon Éon'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 6,
    name: 'Latias',
    genus: 'Äon'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 7,
    name: 'Latias',
    genus: 'Pokémon Eón'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 8,
    name: 'Latias',
    genus: 'Pokémon Eone'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 9,
    name: 'Latias',
    genus: 'Eon Pokémon'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 11,
    name: 'ラティアス',
    genus: 'むげんポケモン'
  },
  {
    pokemon_species_id: 380,
    local_language_id: 12,
    name: '拉帝亚斯',
    genus: '无限宝可梦'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 1,
    name: 'ラティオス',
    genus: 'むげんポケモン'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 2,
    name: 'Latios',
    genus: ''
  },
  {
    pokemon_species_id: 381,
    local_language_id: 3,
    name: '라티오스',
    genus: '무한포켓몬'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 4,
    name: '拉帝歐斯',
    genus: '無限寶可夢'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 5,
    name: 'Latios',
    genus: 'Pokémon Éon'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 6,
    name: 'Latios',
    genus: 'Äon'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 7,
    name: 'Latios',
    genus: 'Pokémon Eón'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 8,
    name: 'Latios',
    genus: 'Pokémon Eone'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 9,
    name: 'Latios',
    genus: 'Eon Pokémon'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 11,
    name: 'ラティオス',
    genus: 'むげんポケモン'
  },
  {
    pokemon_species_id: 381,
    local_language_id: 12,
    name: '拉帝欧斯',
    genus: '无限宝可梦'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 1,
    name: 'カイオーガ',
    genus: 'かいていポケモン'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 2,
    name: 'Kyogre',
    genus: ''
  },
  {
    pokemon_species_id: 382,
    local_language_id: 3,
    name: '가이오가',
    genus: '해저포켓몬'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 4,
    name: '蓋歐卡',
    genus: '海底寶可夢'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 5,
    name: 'Kyogre',
    genus: 'Pokémon Bassinmarin'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 6,
    name: 'Kyogre',
    genus: 'Seegründler'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 7,
    name: 'Kyogre',
    genus: 'Pokémon Cuenca Mar'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 8,
    name: 'Kyogre',
    genus: 'Pokémon Oceano'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 9,
    name: 'Kyogre',
    genus: 'Sea Basin Pokémon'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 11,
    name: 'カイオーガ',
    genus: 'かいていポケモン'
  },
  {
    pokemon_species_id: 382,
    local_language_id: 12,
    name: '盖欧卡',
    genus: '海底宝可梦'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 1,
    name: 'グラードン',
    genus: 'たいりくポケモン'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 2,
    name: 'Groudon',
    genus: ''
  },
  {
    pokemon_species_id: 383,
    local_language_id: 3,
    name: '그란돈',
    genus: '대륙포켓몬'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 4,
    name: '固拉多',
    genus: '大陸寶可夢'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 5,
    name: 'Groudon',
    genus: 'Pokémon Continent'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 6,
    name: 'Groudon',
    genus: 'Kontinent'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 7,
    name: 'Groudon',
    genus: 'Pokémon Continente'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 8,
    name: 'Groudon',
    genus: 'Pokémon Continente'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 9,
    name: 'Groudon',
    genus: 'Continent Pokémon'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 11,
    name: 'グラードン',
    genus: 'たいりくポケモン'
  },
  {
    pokemon_species_id: 383,
    local_language_id: 12,
    name: '固拉多',
    genus: '大陆宝可梦'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 1,
    name: 'レックウザ',
    genus: 'てんくうポケモン'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 2,
    name: 'Rayquaza',
    genus: ''
  },
  {
    pokemon_species_id: 384,
    local_language_id: 3,
    name: '레쿠쟈',
    genus: '천공포켓몬'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 4,
    name: '烈空坐',
    genus: '天空寶可夢'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 5,
    name: 'Rayquaza',
    genus: 'Pokémon Cieux'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 6,
    name: 'Rayquaza',
    genus: 'Himmelhoch'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 7,
    name: 'Rayquaza',
    genus: 'Pokémon Cielo'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 8,
    name: 'Rayquaza',
    genus: 'Pokémon Stratosfera'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 9,
    name: 'Rayquaza',
    genus: 'Sky High Pokémon'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 11,
    name: 'レックウザ',
    genus: 'てんくうポケモン'
  },
  {
    pokemon_species_id: 384,
    local_language_id: 12,
    name: '烈空坐',
    genus: '天空宝可梦'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 1,
    name: 'ジラーチ',
    genus: 'ねがいごとポケモン'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 2,
    name: 'Jirachi',
    genus: ''
  },
  {
    pokemon_species_id: 385,
    local_language_id: 3,
    name: '지라치',
    genus: '희망사항포켓몬'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 4,
    name: '基拉祈',
    genus: '祈願寶可夢'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 5,
    name: 'Jirachi',
    genus: 'Pokémon Souhait'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 6,
    name: 'Jirachi',
    genus: 'Wünscher'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 7,
    name: 'Jirachi',
    genus: 'Pokémon Deseo'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 8,
    name: 'Jirachi',
    genus: 'Pokémon Desiderio'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 9,
    name: 'Jirachi',
    genus: 'Wish Pokémon'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 11,
    name: 'ジラーチ',
    genus: 'ねがいごとポケモン'
  },
  {
    pokemon_species_id: 385,
    local_language_id: 12,
    name: '基拉祈',
    genus: '祈愿宝可梦'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 1,
    name: 'デオキシス',
    genus: 'ＤＮＡポケモン'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 2,
    name: 'Deoxys',
    genus: ''
  },
  {
    pokemon_species_id: 386,
    local_language_id: 3,
    name: '테오키스',
    genus: 'DNA포켓몬'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 4,
    name: '代歐奇希斯',
    genus: 'ＤＮＡ寶可夢'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 5,
    name: 'Deoxys',
    genus: 'Pokémon ADN'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 6,
    name: 'Deoxys',
    genus: 'DNS'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 7,
    name: 'Deoxys',
    genus: 'Pokémon ADN'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 8,
    name: 'Deoxys',
    genus: 'Pokémon DNA'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 9,
    name: 'Deoxys',
    genus: 'DNA Pokémon'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 11,
    name: 'デオキシス',
    genus: 'ＤＮＡポケモン'
  },
  {
    pokemon_species_id: 386,
    local_language_id: 12,
    name: '代欧奇希斯',
    genus: 'ＤＮＡ宝可梦'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 1,
    name: 'ナエトル',
    genus: 'わかばポケモン'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 2,
    name: 'Naetle',
    genus: ''
  },
  {
    pokemon_species_id: 387,
    local_language_id: 3,
    name: '모부기',
    genus: '어린잎포켓몬'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 4,
    name: '草苗龜',
    genus: '嫩葉寶可夢'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 5,
    name: 'Tortipouss',
    genus: 'Pokémon Minifeuille'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 6,
    name: 'Chelast',
    genus: 'Winziglaub'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 7,
    name: 'Turtwig',
    genus: 'Pokémon Hojita'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 8,
    name: 'Turtwig',
    genus: 'Pokémon Fogliolina'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 9,
    name: 'Turtwig',
    genus: 'Tiny Leaf Pokémon'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 11,
    name: 'ナエトル',
    genus: 'わかばポケモン'
  },
  {
    pokemon_species_id: 387,
    local_language_id: 12,
    name: '草苗龟',
    genus: '嫩叶宝可梦'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 1,
    name: 'ハヤシガメ',
    genus: 'こだちポケモン'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 2,
    name: 'Hayashigame',
    genus: ''
  },
  {
    pokemon_species_id: 388,
    local_language_id: 3,
    name: '수풀부기',
    genus: '나무숲포켓몬'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 4,
    name: '樹林龜',
    genus: '樹叢寶可夢'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 5,
    name: 'Boskara',
    genus: 'Pokémon Bosquet'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 6,
    name: 'Chelcarain',
    genus: 'Hain'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 7,
    name: 'Grotle',
    genus: 'Pokémon Arboleda'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 8,
    name: 'Grotle',
    genus: 'Pokémon Boschetto'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 9,
    name: 'Grotle',
    genus: 'Grove Pokémon'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 11,
    name: 'ハヤシガメ',
    genus: 'こだちポケモン'
  },
  {
    pokemon_species_id: 388,
    local_language_id: 12,
    name: '树林龟',
    genus: '树丛宝可梦'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 1,
    name: 'ドダイトス',
    genus: 'たいりくポケモン'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 2,
    name: 'Dodaitose',
    genus: ''
  },
  {
    pokemon_species_id: 389,
    local_language_id: 3,
    name: '토대부기',
    genus: '대륙포켓몬'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 4,
    name: '土台龜',
    genus: '大陸寶可夢'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 5,
    name: 'Torterra',
    genus: 'Pokémon Continent'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 6,
    name: 'Chelterrar',
    genus: 'Kontinent'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 7,
    name: 'Torterra',
    genus: 'Pokémon Continente'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 8,
    name: 'Torterra',
    genus: 'Pokémon Continente'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 9,
    name: 'Torterra',
    genus: 'Continent Pokémon'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 11,
    name: 'ドダイトス',
    genus: 'たいりくポケモン'
  },
  {
    pokemon_species_id: 389,
    local_language_id: 12,
    name: '土台龟',
    genus: '大陆宝可梦'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 1,
    name: 'ヒコザル',
    genus: 'こざるポケモン'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 2,
    name: 'Hikozaru',
    genus: ''
  },
  {
    pokemon_species_id: 390,
    local_language_id: 3,
    name: '불꽃숭이',
    genus: '꼬마원숭이포켓몬'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 4,
    name: '小火焰猴',
    genus: '小猴寶可夢'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 5,
    name: 'Ouisticram',
    genus: 'Pokémon Chimpanzé'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 6,
    name: 'Panflam',
    genus: 'Schimpanse'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 7,
    name: 'Chimchar',
    genus: 'Pokémon Chimpancé'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 8,
    name: 'Chimchar',
    genus: 'Pokémon Scimpanzé'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 9,
    name: 'Chimchar',
    genus: 'Chimp Pokémon'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 11,
    name: 'ヒコザル',
    genus: 'こざるポケモン'
  },
  {
    pokemon_species_id: 390,
    local_language_id: 12,
    name: '小火焰猴',
    genus: '小猴宝可梦'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 1,
    name: 'モウカザル',
    genus: 'やんちゃポケモン'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 2,
    name: 'Mōkazaru',
    genus: ''
  },
  {
    pokemon_species_id: 391,
    local_language_id: 3,
    name: '파이숭이',
    genus: '개구쟁이포켓몬'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 4,
    name: '猛火猴',
    genus: '頑皮寶可夢'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 5,
    name: 'Chimpenfeu',
    genus: 'Pokémon Garnement'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 6,
    name: 'Panpyro',
    genus: 'Verspielt'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 7,
    name: 'Monferno',
    genus: 'Pokémon Juguetón'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 8,
    name: 'Monferno',
    genus: 'Pokémon Briccone'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 9,
    name: 'Monferno',
    genus: 'Playful Pokémon'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 11,
    name: 'モウカザル',
    genus: 'やんちゃポケモン'
  },
  {
    pokemon_species_id: 391,
    local_language_id: 12,
    name: '猛火猴',
    genus: '顽皮宝可梦'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 1,
    name: 'ゴウカザル',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 2,
    name: 'Gōkazaru',
    genus: ''
  },
  {
    pokemon_species_id: 392,
    local_language_id: 3,
    name: '초염몽',
    genus: '화염포켓몬'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 4,
    name: '烈焰猴',
    genus: '火焰寶可夢'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 5,
    name: 'Simiabraz',
    genus: 'Pokémon Flamme'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 6,
    name: 'Panferno',
    genus: 'Flamme'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 7,
    name: 'Infernape',
    genus: 'Pokémon Llama'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 8,
    name: 'Infernape',
    genus: 'Pokémon Fiamma'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 9,
    name: 'Infernape',
    genus: 'Flame Pokémon'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 11,
    name: 'ゴウカザル',
    genus: 'かえんポケモン'
  },
  {
    pokemon_species_id: 392,
    local_language_id: 12,
    name: '烈焰猴',
    genus: '火焰宝可梦'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 1,
    name: 'ポッチャマ',
    genus: 'ペンギンポケモン'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 2,
    name: 'Pochama',
    genus: ''
  },
  {
    pokemon_species_id: 393,
    local_language_id: 3,
    name: '팽도리',
    genus: '펭귄포켓몬'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 4,
    name: '波加曼',
    genus: '企鵝寶可夢'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 5,
    name: 'Tiplouf',
    genus: 'Pokémon Pingouin'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 6,
    name: 'Plinfa',
    genus: 'Pinguin'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 7,
    name: 'Piplup',
    genus: 'Pokémon Pingüino'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 8,
    name: 'Piplup',
    genus: 'Pokémon Pinguino'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 9,
    name: 'Piplup',
    genus: 'Penguin Pokémon'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 11,
    name: 'ポッチャマ',
    genus: 'ペンギンポケモン'
  },
  {
    pokemon_species_id: 393,
    local_language_id: 12,
    name: '波加曼',
    genus: '企鹅宝可梦'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 1,
    name: 'ポッタイシ',
    genus: 'ペンギンポケモン'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 2,
    name: 'Pottaishi',
    genus: ''
  },
  {
    pokemon_species_id: 394,
    local_language_id: 3,
    name: '팽태자',
    genus: '펭귄포켓몬'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 4,
    name: '波皇子',
    genus: '企鵝寶可夢'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 5,
    name: 'Prinplouf',
    genus: 'Pokémon Pingouin'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 6,
    name: 'Pliprin',
    genus: 'Pinguin'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 7,
    name: 'Prinplup',
    genus: 'Pokémon Pingüino'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 8,
    name: 'Prinplup',
    genus: 'Pokémon Pinguino'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 9,
    name: 'Prinplup',
    genus: 'Penguin Pokémon'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 11,
    name: 'ポッタイシ',
    genus: 'ペンギンポケモン'
  },
  {
    pokemon_species_id: 394,
    local_language_id: 12,
    name: '波皇子',
    genus: '企鹅宝可梦'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 1,
    name: 'エンペルト',
    genus: 'こうていポケモン'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 2,
    name: 'Emperte',
    genus: ''
  },
  {
    pokemon_species_id: 395,
    local_language_id: 3,
    name: '엠페르트',
    genus: '황제포켓몬'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 4,
    name: '帝王拿波',
    genus: '皇帝寶可夢'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 5,
    name: 'Pingoléon',
    genus: 'Pokémon Empereur'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 6,
    name: 'Impoleon',
    genus: 'Kaiser'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 7,
    name: 'Empoleon',
    genus: 'Pokémon Emperador'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 8,
    name: 'Empoleon',
    genus: 'Pokémon Imperatore'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 9,
    name: 'Empoleon',
    genus: 'Emperor Pokémon'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 11,
    name: 'エンペルト',
    genus: 'こうていポケモン'
  },
  {
    pokemon_species_id: 395,
    local_language_id: 12,
    name: '帝王拿波',
    genus: '皇帝宝可梦'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 1,
    name: 'ムックル',
    genus: 'むくどりポケモン'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 2,
    name: 'Mukkuru',
    genus: ''
  },
  {
    pokemon_species_id: 396,
    local_language_id: 3,
    name: '찌르꼬',
    genus: '찌르레기포켓몬'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 4,
    name: '姆克兒',
    genus: '椋鳥寶可夢'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 5,
    name: 'Étourmi',
    genus: 'Pokémon Étourneau'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 6,
    name: 'Staralili',
    genus: 'Star'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 7,
    name: 'Starly',
    genus: 'Pokémon Estornino'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 8,
    name: 'Starly',
    genus: 'Pokémon Storno'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 9,
    name: 'Starly',
    genus: 'Starling Pokémon'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 11,
    name: 'ムックル',
    genus: 'むくどりポケモン'
  },
  {
    pokemon_species_id: 396,
    local_language_id: 12,
    name: '姆克儿',
    genus: '椋鸟宝可梦'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 1,
    name: 'ムクバード',
    genus: 'むくどりポケモン'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 2,
    name: 'Mukubird',
    genus: ''
  },
  {
    pokemon_species_id: 397,
    local_language_id: 3,
    name: '찌르버드',
    genus: '찌르레기포켓몬'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 4,
    name: '姆克鳥',
    genus: '椋鳥寶可夢'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 5,
    name: 'Étourvol',
    genus: 'Pokémon Étourneau'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 6,
    name: 'Staravia',
    genus: 'Star'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 7,
    name: 'Staravia',
    genus: 'Pokémon Estornino'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 8,
    name: 'Staravia',
    genus: 'Pokémon Storno'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 9,
    name: 'Staravia',
    genus: 'Starling Pokémon'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 11,
    name: 'ムクバード',
    genus: 'むくどりポケモン'
  },
  {
    pokemon_species_id: 397,
    local_language_id: 12,
    name: '姆克鸟',
    genus: '椋鸟宝可梦'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 1,
    name: 'ムクホーク',
    genus: 'もうきんポケモン'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 2,
    name: 'Mukuhawk',
    genus: ''
  },
  {
    pokemon_species_id: 398,
    local_language_id: 3,
    name: '찌르호크',
    genus: '맹금포켓몬'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 4,
    name: '姆克鷹',
    genus: '猛禽寶可夢'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 5,
    name: 'Étouraptor',
    genus: 'Pokémon Rapace'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 6,
    name: 'Staraptor',
    genus: 'Raubtier'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 7,
    name: 'Staraptor',
    genus: 'Pokémon Depredador'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 8,
    name: 'Staraptor',
    genus: 'Pokémon Rapace'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 9,
    name: 'Staraptor',
    genus: 'Predator Pokémon'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 11,
    name: 'ムクホーク',
    genus: 'もうきんポケモン'
  },
  {
    pokemon_species_id: 398,
    local_language_id: 12,
    name: '姆克鹰',
    genus: '猛禽宝可梦'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 1,
    name: 'ビッパ',
    genus: 'まるねずみポケモン'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 2,
    name: 'Bipper',
    genus: ''
  },
  {
    pokemon_species_id: 399,
    local_language_id: 3,
    name: '비버니',
    genus: '둥글쥐포켓몬'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 4,
    name: '大牙狸',
    genus: '圓鼠寶可夢'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 5,
    name: 'Keunotor',
    genus: 'Pokémon Souridodue'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 6,
    name: 'Bidiza',
    genus: 'Dickmaus'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 7,
    name: 'Bidoof',
    genus: 'Pokémon Gran Ratón'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 8,
    name: 'Bidoof',
    genus: 'Pokémon Topaffuto'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 9,
    name: 'Bidoof',
    genus: 'Plump Mouse Pokémon'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 11,
    name: 'ビッパ',
    genus: 'まるねずみポケモン'
  },
  {
    pokemon_species_id: 399,
    local_language_id: 12,
    name: '大牙狸',
    genus: '圆鼠宝可梦'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 1,
    name: 'ビーダル',
    genus: 'ビーバーポケモン'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 2,
    name: 'Beadull',
    genus: ''
  },
  {
    pokemon_species_id: 400,
    local_language_id: 3,
    name: '비버통',
    genus: '비버포켓몬'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 4,
    name: '大尾狸',
    genus: '河狸寶可夢'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 5,
    name: 'Castorno',
    genus: 'Pokémon Castor'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 6,
    name: 'Bidifas',
    genus: 'Biber'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 7,
    name: 'Bibarel',
    genus: 'Pokémon Castor'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 8,
    name: 'Bibarel',
    genus: 'Pokémon Castoro'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 9,
    name: 'Bibarel',
    genus: 'Beaver Pokémon'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 11,
    name: 'ビーダル',
    genus: 'ビーバーポケモン'
  },
  {
    pokemon_species_id: 400,
    local_language_id: 12,
    name: '大尾狸',
    genus: '河狸宝可梦'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 1,
    name: 'コロボーシ',
    genus: 'こおろぎポケモン'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 2,
    name: 'Korobohshi',
    genus: ''
  },
  {
    pokemon_species_id: 401,
    local_language_id: 3,
    name: '귀뚤뚜기',
    genus: '귀뚜라미포켓몬'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 4,
    name: '圓法師',
    genus: '蟋蟀寶可夢'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 5,
    name: 'Crikzik',
    genus: 'Pokémon Criquet'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 6,
    name: 'Zirpurze',
    genus: 'Zirper'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 7,
    name: 'Kricketot',
    genus: 'Pokémon Grillo'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 8,
    name: 'Kricketot',
    genus: 'Pokémon Grillo'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 9,
    name: 'Kricketot',
    genus: 'Cricket Pokémon'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 11,
    name: 'コロボーシ',
    genus: 'こおろぎポケモン'
  },
  {
    pokemon_species_id: 401,
    local_language_id: 12,
    name: '圆法师',
    genus: '蟋蟀宝可梦'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 1,
    name: 'コロトック',
    genus: 'こおろぎポケモン'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 2,
    name: 'Korotok',
    genus: ''
  },
  {
    pokemon_species_id: 402,
    local_language_id: 3,
    name: '귀뚤톡크',
    genus: '귀뚜라미포켓몬'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 4,
    name: '音箱蟀',
    genus: '蟋蟀寶可夢'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 5,
    name: 'Mélokrik',
    genus: 'Pokémon Criquet'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 6,
    name: 'Zirpeise',
    genus: 'Zirper'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 7,
    name: 'Kricketune',
    genus: 'Pokémon Grillo'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 8,
    name: 'Kricketune',
    genus: 'Pokémon Grillo'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 9,
    name: 'Kricketune',
    genus: 'Cricket Pokémon'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 11,
    name: 'コロトック',
    genus: 'こおろぎポケモン'
  },
  {
    pokemon_species_id: 402,
    local_language_id: 12,
    name: '音箱蟀',
    genus: '蟋蟀宝可梦'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 1,
    name: 'コリンク',
    genus: 'せんこうポケモン'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 2,
    name: 'Kolink',
    genus: ''
  },
  {
    pokemon_species_id: 403,
    local_language_id: 3,
    name: '꼬링크',
    genus: '섬광포켓몬'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 4,
    name: '小貓怪',
    genus: '閃光寶可夢'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 5,
    name: 'Lixy',
    genus: 'Pokémon Flash'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 6,
    name: 'Sheinux',
    genus: 'Flacker'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 7,
    name: 'Shinx',
    genus: 'Pokémon Flash'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 8,
    name: 'Shinx',
    genus: 'Pokémon Baleno'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 9,
    name: 'Shinx',
    genus: 'Flash Pokémon'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 11,
    name: 'コリンク',
    genus: 'せんこうポケモン'
  },
  {
    pokemon_species_id: 403,
    local_language_id: 12,
    name: '小猫怪',
    genus: '闪光宝可梦'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 1,
    name: 'ルクシオ',
    genus: 'でんこうポケモン'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 2,
    name: 'Luxio',
    genus: ''
  },
  {
    pokemon_species_id: 404,
    local_language_id: 3,
    name: '럭시오',
    genus: '전광포켓몬'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 4,
    name: '勒克貓',
    genus: '電光寶可夢'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 5,
    name: 'Luxio',
    genus: 'Pokémon Étincelle'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 6,
    name: 'Luxio',
    genus: 'Funken'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 7,
    name: 'Luxio',
    genus: 'Pokémon Chispa'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 8,
    name: 'Luxio',
    genus: 'Pokémon Favilla'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 9,
    name: 'Luxio',
    genus: 'Spark Pokémon'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 11,
    name: 'ルクシオ',
    genus: 'でんこうポケモン'
  },
  {
    pokemon_species_id: 404,
    local_language_id: 12,
    name: '勒克猫',
    genus: '电光宝可梦'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 1,
    name: 'レントラー',
    genus: 'がんこうポケモン'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 2,
    name: 'Rentorar',
    genus: ''
  },
  {
    pokemon_species_id: 405,
    local_language_id: 3,
    name: '렌트라',
    genus: '안광포켓몬'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 4,
    name: '倫琴貓',
    genus: '目光寶可夢'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 5,
    name: 'Luxray',
    genus: 'Pokémon Brillœil'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 6,
    name: 'Luxtra',
    genus: 'Glühauge'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 7,
    name: 'Luxray',
    genus: 'Pokémon Chispa Ojos'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 8,
    name: 'Luxray',
    genus: 'Pokémon Occhiluce'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 9,
    name: 'Luxray',
    genus: 'Gleam Eyes Pokémon'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 11,
    name: 'レントラー',
    genus: 'がんこうポケモン'
  },
  {
    pokemon_species_id: 405,
    local_language_id: 12,
    name: '伦琴猫',
    genus: '目光宝可梦'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 1,
    name: 'スボミー',
    genus: 'つぼみポケモン'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 2,
    name: 'Subomie',
    genus: ''
  },
  {
    pokemon_species_id: 406,
    local_language_id: 3,
    name: '꼬몽울',
    genus: '꽃봉오리포켓몬'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 4,
    name: '含羞苞',
    genus: '花苞寶可夢'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 5,
    name: 'Rozbouton',
    genus: 'Pokémon Bourgeon'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 6,
    name: 'Knospi',
    genus: 'Knospe'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 7,
    name: 'Budew',
    genus: 'Pokémon Brote'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 8,
    name: 'Budew',
    genus: 'Pokémon Germoglio'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 9,
    name: 'Budew',
    genus: 'Bud Pokémon'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 11,
    name: 'スボミー',
    genus: 'つぼみポケモン'
  },
  {
    pokemon_species_id: 406,
    local_language_id: 12,
    name: '含羞苞',
    genus: '花苞宝可梦'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 1,
    name: 'ロズレイド',
    genus: 'ブーケポケモン'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 2,
    name: 'Roserade',
    genus: ''
  },
  {
    pokemon_species_id: 407,
    local_language_id: 3,
    name: '로즈레이드',
    genus: '부케포켓몬'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 4,
    name: '羅絲雷朵',
    genus: '花束寶可夢'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 5,
    name: 'Roserade',
    genus: 'Pokémon Bouquet'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 6,
    name: 'Roserade',
    genus: 'Blumenstrauß'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 7,
    name: 'Roserade',
    genus: 'Pokémon Ramillete'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 8,
    name: 'Roserade',
    genus: 'Pokémon Floreale'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 9,
    name: 'Roserade',
    genus: 'Bouquet Pokémon'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 11,
    name: 'ロズレイド',
    genus: 'ブーケポケモン'
  },
  {
    pokemon_species_id: 407,
    local_language_id: 12,
    name: '罗丝雷朵',
    genus: '花束宝可梦'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 1,
    name: 'ズガイドス',
    genus: 'ずつきポケモン'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 2,
    name: 'Zugaidos',
    genus: ''
  },
  {
    pokemon_species_id: 408,
    local_language_id: 3,
    name: '두개도스',
    genus: '박치기포켓몬'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 4,
    name: '頭蓋龍',
    genus: '頭錘寶可夢'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 5,
    name: 'Kranidos',
    genus: 'Pokémon Coud’Boule'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 6,
    name: 'Koknodon',
    genus: 'Kopfstoß'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 7,
    name: 'Cranidos',
    genus: 'Pokémon Cabezazo'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 8,
    name: 'Cranidos',
    genus: 'Pokémon Cranioso'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 9,
    name: 'Cranidos',
    genus: 'Head Butt Pokémon'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 11,
    name: 'ズガイドス',
    genus: 'ずつきポケモン'
  },
  {
    pokemon_species_id: 408,
    local_language_id: 12,
    name: '头盖龙',
    genus: '头锤宝可梦'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 1,
    name: 'ラムパルド',
    genus: 'ずつきポケモン'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 2,
    name: 'Rampard',
    genus: ''
  },
  {
    pokemon_species_id: 409,
    local_language_id: 3,
    name: '램펄드',
    genus: '박치기포켓몬'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 4,
    name: '戰槌龍',
    genus: '頭錘寶可夢'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 5,
    name: 'Charkos',
    genus: 'Pokémon Coud’Boule'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 6,
    name: 'Rameidon',
    genus: 'Kopfstoß'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 7,
    name: 'Rampardos',
    genus: 'Pokémon Cabezazo'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 8,
    name: 'Rampardos',
    genus: 'Pokémon Cranioso'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 9,
    name: 'Rampardos',
    genus: 'Head Butt Pokémon'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 11,
    name: 'ラムパルド',
    genus: 'ずつきポケモン'
  },
  {
    pokemon_species_id: 409,
    local_language_id: 12,
    name: '战槌龙',
    genus: '头锤宝可梦'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 1,
    name: 'タテトプス',
    genus: 'シールドポケモン'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 2,
    name: 'Tatetops',
    genus: ''
  },
  {
    pokemon_species_id: 410,
    local_language_id: 3,
    name: '방패톱스',
    genus: '실드포켓몬'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 4,
    name: '盾甲龍',
    genus: '護盾寶可夢'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 5,
    name: 'Dinoclier',
    genus: 'Pokémon Bouclier'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 6,
    name: 'Schilterus',
    genus: 'Schutzschild'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 7,
    name: 'Shieldon',
    genus: 'Pokémon Escudo'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 8,
    name: 'Shieldon',
    genus: 'Pokémon Schermo'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 9,
    name: 'Shieldon',
    genus: 'Shield Pokémon'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 11,
    name: 'タテトプス',
    genus: 'シールドポケモン'
  },
  {
    pokemon_species_id: 410,
    local_language_id: 12,
    name: '盾甲龙',
    genus: '护盾宝可梦'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 1,
    name: 'トリデプス',
    genus: 'シールドポケモン'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 2,
    name: 'Trideps',
    genus: ''
  },
  {
    pokemon_species_id: 411,
    local_language_id: 3,
    name: '바리톱스',
    genus: '실드포켓몬'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 4,
    name: '護城龍',
    genus: '護盾寶可夢'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 5,
    name: 'Bastiodon',
    genus: 'Pokémon Bouclier'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 6,
    name: 'Bollterus',
    genus: 'Schutzschild'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 7,
    name: 'Bastiodon',
    genus: 'Pokémon Escudo'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 8,
    name: 'Bastiodon',
    genus: 'Pokémon Schermo'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 9,
    name: 'Bastiodon',
    genus: 'Shield Pokémon'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 11,
    name: 'トリデプス',
    genus: 'シールドポケモン'
  },
  {
    pokemon_species_id: 411,
    local_language_id: 12,
    name: '护城龙',
    genus: '护盾宝可梦'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 1,
    name: 'ミノムッチ',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 2,
    name: 'Minomucchi',
    genus: ''
  },
  {
    pokemon_species_id: 412,
    local_language_id: 3,
    name: '도롱충이',
    genus: '도롱이벌레포켓몬'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 4,
    name: '結草兒',
    genus: '蓑衣蟲寶可夢'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 5,
    name: 'Cheniti',
    genus: 'Pokémon Ver Caché'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 6,
    name: 'Burmy',
    genus: 'Beutelwurm'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 7,
    name: 'Burmy',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 8,
    name: 'Burmy',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 9,
    name: 'Burmy',
    genus: 'Bagworm Pokémon'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 11,
    name: 'ミノムッチ',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 412,
    local_language_id: 12,
    name: '结草儿',
    genus: '蓑衣虫宝可梦'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 1,
    name: 'ミノマダム',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 2,
    name: 'Minomadam',
    genus: ''
  },
  {
    pokemon_species_id: 413,
    local_language_id: 3,
    name: '도롱마담',
    genus: '도롱이벌레포켓몬'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 4,
    name: '結草貴婦',
    genus: '蓑衣蟲寶可夢'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 5,
    name: 'Cheniselle',
    genus: 'Pokémon Ver Caché'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 6,
    name: 'Burmadame',
    genus: 'Beutelwurm'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 7,
    name: 'Wormadam',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 8,
    name: 'Wormadam',
    genus: 'Pokémon Larva'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 9,
    name: 'Wormadam',
    genus: 'Bagworm Pokémon'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 11,
    name: 'ミノマダム',
    genus: 'みのむしポケモン'
  },
  {
    pokemon_species_id: 413,
    local_language_id: 12,
    name: '结草贵妇',
    genus: '蓑衣虫宝可梦'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 1,
    name: 'ガーメイル',
    genus: 'ミノガポケモン'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 2,
    name: 'Garmeil',
    genus: ''
  },
  {
    pokemon_species_id: 414,
    local_language_id: 3,
    name: '나메일',
    genus: '나방포켓몬'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 4,
    name: '紳士蛾',
    genus: '蓑衣蛾寶可夢'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 5,
    name: 'Papilord',
    genus: 'Pokémon Phalène'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 6,
    name: 'Moterpel',
    genus: 'Motte'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 7,
    name: 'Mothim',
    genus: 'Pokémon Polilla'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 8,
    name: 'Mothim',
    genus: 'Pokémon Falena'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 9,
    name: 'Mothim',
    genus: 'Moth Pokémon'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 11,
    name: 'ガーメイル',
    genus: 'ミノガポケモン'
  },
  {
    pokemon_species_id: 414,
    local_language_id: 12,
    name: '绅士蛾',
    genus: '蓑衣蛾宝可梦'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 1,
    name: 'ミツハニー',
    genus: 'はちのこポケモン'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 2,
    name: 'Mitsuhoney',
    genus: ''
  },
  {
    pokemon_species_id: 415,
    local_language_id: 3,
    name: '세꿀버리',
    genus: '꼬마벌포켓몬'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 4,
    name: '三蜜蜂',
    genus: '幼蜂寶可夢'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 5,
    name: 'Apitrini',
    genus: 'Pokémon Miniabeille'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 6,
    name: 'Wadribie',
    genus: 'Kleinbiene'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 7,
    name: 'Combee',
    genus: 'Pokémon Abejita'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 8,
    name: 'Combee',
    genus: 'Pokémon Apetta'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 9,
    name: 'Combee',
    genus: 'Tiny Bee Pokémon'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 11,
    name: 'ミツハニー',
    genus: 'はちのこポケモン'
  },
  {
    pokemon_species_id: 415,
    local_language_id: 12,
    name: '三蜜蜂',
    genus: '幼蜂宝可梦'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 1,
    name: 'ビークイン',
    genus: 'はちのすポケモン'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 2,
    name: 'Beequeen',
    genus: ''
  },
  {
    pokemon_species_id: 416,
    local_language_id: 3,
    name: '비퀸',
    genus: '벌집포켓몬'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 4,
    name: '蜂女王',
    genus: '蜂巢寶可夢'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 5,
    name: 'Apireine',
    genus: 'Pokémon Ruche'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 6,
    name: 'Honweisel',
    genus: 'Bienenstock'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 7,
    name: 'Vespiquen',
    genus: 'Pokémon Colmena'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 8,
    name: 'Vespiquen',
    genus: 'Pokémon Alveare'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 9,
    name: 'Vespiquen',
    genus: 'Beehive Pokémon'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 11,
    name: 'ビークイン',
    genus: 'はちのすポケモン'
  },
  {
    pokemon_species_id: 416,
    local_language_id: 12,
    name: '蜂女王',
    genus: '蜂巢宝可梦'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 1,
    name: 'パチリス',
    genus: 'でんきりすポケモン'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 2,
    name: 'Pachirisu',
    genus: ''
  },
  {
    pokemon_species_id: 417,
    local_language_id: 3,
    name: '파치리스',
    genus: '전기다람쥐포켓몬'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 4,
    name: '帕奇利茲',
    genus: '電松鼠寶可夢'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 5,
    name: 'Pachirisu',
    genus: 'Pokémon Écurélec'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 6,
    name: 'Pachirisu',
    genus: 'Elektrohörnchen'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 7,
    name: 'Pachirisu',
    genus: 'Pokémon Ardillalec'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 8,
    name: 'Pachirisu',
    genus: 'Pokémon Elescoiatto'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 9,
    name: 'Pachirisu',
    genus: 'EleSquirrel Pokémon'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 11,
    name: 'パチリス',
    genus: 'でんきりすポケモン'
  },
  {
    pokemon_species_id: 417,
    local_language_id: 12,
    name: '帕奇利兹',
    genus: '电松鼠宝可梦'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 1,
    name: 'ブイゼル',
    genus: 'うみイタチポケモン'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 2,
    name: 'Buoysel',
    genus: ''
  },
  {
    pokemon_species_id: 418,
    local_language_id: 3,
    name: '브이젤',
    genus: '바다족제비포켓몬'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 4,
    name: '泳圈鼬',
    genus: '海鼬寶可夢'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 5,
    name: 'Mustébouée',
    genus: 'Pokémon Aquabelette'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 6,
    name: 'Bamelin',
    genus: 'Meereswiesel'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 7,
    name: 'Buizel',
    genus: 'Pokémon Nutria Mar.'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 8,
    name: 'Buizel',
    genus: 'Pokémon Maridonnola'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 9,
    name: 'Buizel',
    genus: 'Sea Weasel Pokémon'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 11,
    name: 'ブイゼル',
    genus: 'うみイタチポケモン'
  },
  {
    pokemon_species_id: 418,
    local_language_id: 12,
    name: '泳圈鼬',
    genus: '海鼬宝可梦'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 1,
    name: 'フローゼル',
    genus: 'うみイタチポケモン'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 2,
    name: 'Flowsel',
    genus: ''
  },
  {
    pokemon_species_id: 419,
    local_language_id: 3,
    name: '플로젤',
    genus: '바다족제비포켓몬'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 4,
    name: '浮潛鼬',
    genus: '海鼬寶可夢'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 5,
    name: 'Mustéflott',
    genus: 'Pokémon Aquabelette'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 6,
    name: 'Bojelin',
    genus: 'Meereswiesel'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 7,
    name: 'Floatzel',
    genus: 'Pokémon Nutria Mar.'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 8,
    name: 'Floatzel',
    genus: 'Pokémon Maridonnola'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 9,
    name: 'Floatzel',
    genus: 'Sea Weasel Pokémon'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 11,
    name: 'フローゼル',
    genus: 'うみイタチポケモン'
  },
  {
    pokemon_species_id: 419,
    local_language_id: 12,
    name: '浮潜鼬',
    genus: '海鼬宝可梦'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 1,
    name: 'チェリンボ',
    genus: 'さくらんぼポケモン'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 2,
    name: 'Cherinbo',
    genus: ''
  },
  {
    pokemon_species_id: 420,
    local_language_id: 3,
    name: '체리버',
    genus: '버찌포켓몬'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 4,
    name: '櫻花寶',
    genus: '櫻桃寶可夢'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 5,
    name: 'Ceribou',
    genus: 'Pokémon Cerise'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 6,
    name: 'Kikugi',
    genus: 'Kirsche'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 7,
    name: 'Cherubi',
    genus: 'Pokémon Cereza'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 8,
    name: 'Cherubi',
    genus: 'Pokémon Ciliegia'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 9,
    name: 'Cherubi',
    genus: 'Cherry Pokémon'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 11,
    name: 'チェリンボ',
    genus: 'さくらんぼポケモン'
  },
  {
    pokemon_species_id: 420,
    local_language_id: 12,
    name: '樱花宝',
    genus: '樱桃宝可梦'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 1,
    name: 'チェリム',
    genus: 'サクラポケモン'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 2,
    name: 'Cherrim',
    genus: ''
  },
  {
    pokemon_species_id: 421,
    local_language_id: 3,
    name: '체리꼬',
    genus: '벚꽃포켓몬'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 4,
    name: '櫻花兒',
    genus: '櫻花寶可夢'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 5,
    name: 'Ceriflor',
    genus: 'Pokémon Floraison'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 6,
    name: 'Kinoso',
    genus: 'Blüte'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 7,
    name: 'Cherrim',
    genus: 'Pokémon Floración'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 8,
    name: 'Cherrim',
    genus: 'Pokémon Bocciolo'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 9,
    name: 'Cherrim',
    genus: 'Blossom Pokémon'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 11,
    name: 'チェリム',
    genus: 'サクラポケモン'
  },
  {
    pokemon_species_id: 421,
    local_language_id: 12,
    name: '樱花儿',
    genus: '樱花宝可梦'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 1,
    name: 'カラナクシ',
    genus: 'ウミウシポケモン'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 2,
    name: 'Karanakushi',
    genus: ''
  },
  {
    pokemon_species_id: 422,
    local_language_id: 3,
    name: '깝질무',
    genus: '갯민숭달팽이포켓몬'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 4,
    name: '無殼海兔',
    genus: '海兔寶可夢'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 5,
    name: 'Sancoki',
    genus: 'Pokémon Aqualimace'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 6,
    name: 'Schalellos',
    genus: 'Seeschnecke'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 7,
    name: 'Shellos',
    genus: 'Pokémon Babosa Mar.'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 8,
    name: 'Shellos',
    genus: 'Pokémon Lumacomare'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 9,
    name: 'Shellos',
    genus: 'Sea Slug Pokémon'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 11,
    name: 'カラナクシ',
    genus: 'ウミウシポケモン'
  },
  {
    pokemon_species_id: 422,
    local_language_id: 12,
    name: '无壳海兔',
    genus: '海兔宝可梦'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 1,
    name: 'トリトドン',
    genus: 'ウミウシポケモン'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 2,
    name: 'Toritodon',
    genus: ''
  },
  {
    pokemon_species_id: 423,
    local_language_id: 3,
    name: '트리토돈',
    genus: '갯민숭달팽이포켓몬'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 4,
    name: '海兔獸',
    genus: '海兔寶可夢'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 5,
    name: 'Tritosor',
    genus: 'Pokémon Aqualimace'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 6,
    name: 'Gastrodon',
    genus: 'Seeschnecke'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 7,
    name: 'Gastrodon',
    genus: 'Pokémon Babosa Mar.'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 8,
    name: 'Gastrodon',
    genus: 'Pokémon Lumacomare'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 9,
    name: 'Gastrodon',
    genus: 'Sea Slug Pokémon'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 11,
    name: 'トリトドン',
    genus: 'ウミウシポケモン'
  },
  {
    pokemon_species_id: 423,
    local_language_id: 12,
    name: '海兔兽',
    genus: '海兔宝可梦'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 1,
    name: 'エテボース',
    genus: 'おながポケモン'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 2,
    name: 'Eteboth',
    genus: ''
  },
  {
    pokemon_species_id: 424,
    local_language_id: 3,
    name: '겟핸보숭',
    genus: '긴꼬리포켓몬'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 4,
    name: '雙尾怪手',
    genus: '長尾寶可夢'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 5,
    name: 'Capidextre',
    genus: 'Pokémon Longqueue'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 6,
    name: 'Ambidiffel',
    genus: 'Langschweif'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 7,
    name: 'Ambipom',
    genus: 'Pokémon Cola Larga'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 8,
    name: 'Ambipom',
    genus: 'Pokémon Lungacoda'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 9,
    name: 'Ambipom',
    genus: 'Long Tail Pokémon'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 11,
    name: 'エテボース',
    genus: 'おながポケモン'
  },
  {
    pokemon_species_id: 424,
    local_language_id: 12,
    name: '双尾怪手',
    genus: '长尾宝可梦'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 1,
    name: 'フワンテ',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 2,
    name: 'Fuwante',
    genus: ''
  },
  {
    pokemon_species_id: 425,
    local_language_id: 3,
    name: '흔들풍손',
    genus: '풍선포켓몬'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 4,
    name: '飄飄球',
    genus: '氣球寶可夢'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 5,
    name: 'Baudrive',
    genus: 'Pokémon Bouboule'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 6,
    name: 'Driftlon',
    genus: 'Ballon'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 7,
    name: 'Drifloon',
    genus: 'Pokémon Globo'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 8,
    name: 'Drifloon',
    genus: 'Pokémon Pallone'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 9,
    name: 'Drifloon',
    genus: 'Balloon Pokémon'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 11,
    name: 'フワンテ',
    genus: 'ふうせんポケモン'
  },
  {
    pokemon_species_id: 425,
    local_language_id: 12,
    name: '飘飘球',
    genus: '气球宝可梦'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 1,
    name: 'フワライド',
    genus: 'ききゅうポケモン'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 2,
    name: 'Fuwaride',
    genus: ''
  },
  {
    pokemon_species_id: 426,
    local_language_id: 3,
    name: '둥실라이드',
    genus: '기구포켓몬'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 4,
    name: '隨風球',
    genus: '熱氣球寶可夢'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 5,
    name: 'Grodrive',
    genus: 'Pokémon Ballon'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 6,
    name: 'Drifzepeli',
    genus: 'Luftschiff'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 7,
    name: 'Drifblim',
    genus: 'Pokémon Dirigible'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 8,
    name: 'Drifblim',
    genus: 'Pokémon Dirigibile'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 9,
    name: 'Drifblim',
    genus: 'Blimp Pokémon'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 11,
    name: 'フワライド',
    genus: 'ききゅうポケモン'
  },
  {
    pokemon_species_id: 426,
    local_language_id: 12,
    name: '随风球',
    genus: '热气球宝可梦'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 1,
    name: 'ミミロル',
    genus: 'うさぎポケモン'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 2,
    name: 'Mimirol',
    genus: ''
  },
  {
    pokemon_species_id: 427,
    local_language_id: 3,
    name: '이어롤',
    genus: '토끼포켓몬'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 4,
    name: '捲捲耳',
    genus: '兔子寶可夢'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 5,
    name: 'Laporeille',
    genus: 'Pokémon Lapin'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 6,
    name: 'Haspiror',
    genus: 'Hase'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 7,
    name: 'Buneary',
    genus: 'Pokémon Conejo'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 8,
    name: 'Buneary',
    genus: 'Pokémon Coniglio'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 9,
    name: 'Buneary',
    genus: 'Rabbit Pokémon'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 11,
    name: 'ミミロル',
    genus: 'うさぎポケモン'
  },
  {
    pokemon_species_id: 427,
    local_language_id: 12,
    name: '卷卷耳',
    genus: '兔子宝可梦'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 1,
    name: 'ミミロップ',
    genus: 'うさぎポケモン'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 2,
    name: 'Mimilop',
    genus: ''
  },
  {
    pokemon_species_id: 428,
    local_language_id: 3,
    name: '이어롭',
    genus: '토끼포켓몬'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 4,
    name: '長耳兔',
    genus: '兔子寶可夢'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 5,
    name: 'Lockpin',
    genus: 'Pokémon Lapin'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 6,
    name: 'Schlapor',
    genus: 'Hase'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 7,
    name: 'Lopunny',
    genus: 'Pokémon Conejo'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 8,
    name: 'Lopunny',
    genus: 'Pokémon Coniglio'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 9,
    name: 'Lopunny',
    genus: 'Rabbit Pokémon'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 11,
    name: 'ミミロップ',
    genus: 'うさぎポケモン'
  },
  {
    pokemon_species_id: 428,
    local_language_id: 12,
    name: '长耳兔',
    genus: '兔子宝可梦'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 1,
    name: 'ムウマージ',
    genus: 'マジカルポケモン'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 2,
    name: 'Mumage',
    genus: ''
  },
  {
    pokemon_species_id: 429,
    local_language_id: 3,
    name: '무우마직',
    genus: '매지컬포켓몬'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 4,
    name: '夢妖魔',
    genus: '魔法寶可夢'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 5,
    name: 'Magirêve',
    genus: 'Pokémon Magique'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 6,
    name: 'Traunmagil',
    genus: 'Magisch'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 7,
    name: 'Mismagius',
    genus: 'Pokémon Mágico'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 8,
    name: 'Mismagius',
    genus: 'Pokémon Stregone'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 9,
    name: 'Mismagius',
    genus: 'Magical Pokémon'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 11,
    name: 'ムウマージ',
    genus: 'マジカルポケモン'
  },
  {
    pokemon_species_id: 429,
    local_language_id: 12,
    name: '梦妖魔',
    genus: '魔法宝可梦'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 1,
    name: 'ドンカラス',
    genus: 'おおボスポケモン'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 2,
    name: 'Donkarasu',
    genus: ''
  },
  {
    pokemon_species_id: 430,
    local_language_id: 3,
    name: '돈크로우',
    genus: '큰형님포켓몬'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 4,
    name: '烏鴉頭頭',
    genus: '大頭目寶可夢'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 5,
    name: 'Corboss',
    genus: 'Pokémon Big Boss'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 6,
    name: 'Kramshef',
    genus: 'Anführer'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 7,
    name: 'Honchkrow',
    genus: 'Pokémon Gran Jefe'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 8,
    name: 'Honchkrow',
    genus: 'Pokémon Grancapo'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 9,
    name: 'Honchkrow',
    genus: 'Big Boss Pokémon'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 11,
    name: 'ドンカラス',
    genus: 'おおボスポケモン'
  },
  {
    pokemon_species_id: 430,
    local_language_id: 12,
    name: '乌鸦头头',
    genus: '大头目宝可梦'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 1,
    name: 'ニャルマー',
    genus: 'ねこかぶりポケモン'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 2,
    name: 'Nyarmar',
    genus: ''
  },
  {
    pokemon_species_id: 431,
    local_language_id: 3,
    name: '나옹마',
    genus: '내숭포켓몬'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 4,
    name: '魅力喵',
    genus: '裝乖寶可夢'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 5,
    name: 'Chaglam',
    genus: 'Pokémon Chafouin'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 6,
    name: 'Charmian',
    genus: 'Fies'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 7,
    name: 'Glameow',
    genus: 'Pokémon Gastuto'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 8,
    name: 'Glameow',
    genus: 'Pokémon Felide'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 9,
    name: 'Glameow',
    genus: 'Catty Pokémon'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 11,
    name: 'ニャルマー',
    genus: 'ねこかぶりポケモン'
  },
  {
    pokemon_species_id: 431,
    local_language_id: 12,
    name: '魅力喵',
    genus: '装乖宝可梦'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 1,
    name: 'ブニャット',
    genus: 'とらねこポケモン'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 2,
    name: 'Bunyat',
    genus: ''
  },
  {
    pokemon_species_id: 432,
    local_language_id: 3,
    name: '몬냥이',
    genus: '얼룩고양이포켓몬'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 4,
    name: '東施喵',
    genus: '虎斑貓寶可夢'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 5,
    name: 'Chaffreux',
    genus: 'Pokémon Chatigre'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 6,
    name: 'Shnurgarst',
    genus: 'Tigerkatze'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 7,
    name: 'Purugly',
    genus: 'Pokémon Tigre Gato'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 8,
    name: 'Purugly',
    genus: 'Pokémon Gattotigre'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 9,
    name: 'Purugly',
    genus: 'Tiger Cat Pokémon'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 11,
    name: 'ブニャット',
    genus: 'とらねこポケモン'
  },
  {
    pokemon_species_id: 432,
    local_language_id: 12,
    name: '东施喵',
    genus: '虎斑猫宝可梦'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 1,
    name: 'リーシャン',
    genus: 'すずポケモン'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 2,
    name: 'Lisyan',
    genus: ''
  },
  {
    pokemon_species_id: 433,
    local_language_id: 3,
    name: '랑딸랑',
    genus: '방울포켓몬'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 4,
    name: '鈴鐺響',
    genus: '鈴鐺寶可夢'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 5,
    name: 'Korillon',
    genus: 'Pokémon Clochette'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 6,
    name: 'Klingplim',
    genus: 'Glöckchen'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 7,
    name: 'Chingling',
    genus: 'Pokémon Campana'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 8,
    name: 'Chingling',
    genus: 'Pokémon Sonaglio'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 9,
    name: 'Chingling',
    genus: 'Bell Pokémon'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 11,
    name: 'リーシャン',
    genus: 'すずポケモン'
  },
  {
    pokemon_species_id: 433,
    local_language_id: 12,
    name: '铃铛响',
    genus: '铃铛宝可梦'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 1,
    name: 'スカンプー',
    genus: 'スカンクポケモン'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 2,
    name: 'Skunpoo',
    genus: ''
  },
  {
    pokemon_species_id: 434,
    local_language_id: 3,
    name: '스컹뿡',
    genus: '스컹크포켓몬'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 4,
    name: '臭鼬噗',
    genus: '臭鼬寶可夢'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 5,
    name: 'Moufouette',
    genus: 'Pokémon Moufette'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 6,
    name: 'Skunkapuh',
    genus: 'Stinktier'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 7,
    name: 'Stunky',
    genus: 'Pokémon Mofeta'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 8,
    name: 'Stunky',
    genus: 'Pokémon Moffetta'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 9,
    name: 'Stunky',
    genus: 'Skunk Pokémon'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 11,
    name: 'スカンプー',
    genus: 'スカンクポケモン'
  },
  {
    pokemon_species_id: 434,
    local_language_id: 12,
    name: '臭鼬噗',
    genus: '臭鼬宝可梦'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 1,
    name: 'スカタンク',
    genus: 'スカンクポケモン'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 2,
    name: 'Skutank',
    genus: ''
  },
  {
    pokemon_species_id: 435,
    local_language_id: 3,
    name: '스컹탱크',
    genus: '스컹크포켓몬'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 4,
    name: '坦克臭鼬',
    genus: '臭鼬寶可夢'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 5,
    name: 'Moufflair',
    genus: 'Pokémon Moufette'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 6,
    name: 'Skuntank',
    genus: 'Stinktier'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 7,
    name: 'Skuntank',
    genus: 'Pokémon Mofeta'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 8,
    name: 'Skuntank',
    genus: 'Pokémon Moffetta'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 9,
    name: 'Skuntank',
    genus: 'Skunk Pokémon'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 11,
    name: 'スカタンク',
    genus: 'スカンクポケモン'
  },
  {
    pokemon_species_id: 435,
    local_language_id: 12,
    name: '坦克臭鼬',
    genus: '臭鼬宝可梦'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 1,
    name: 'ドーミラー',
    genus: 'せいどうポケモン'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 2,
    name: 'Domirror',
    genus: ''
  },
  {
    pokemon_species_id: 436,
    local_language_id: 3,
    name: '동미러',
    genus: '청동포켓몬'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 4,
    name: '銅鏡怪',
    genus: '青銅寶可夢'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 5,
    name: 'Archéomire',
    genus: 'Pokémon Bronze'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 6,
    name: 'Bronzel',
    genus: 'Bronze'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 7,
    name: 'Bronzor',
    genus: 'Pokémon Bronce'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 8,
    name: 'Bronzor',
    genus: 'Pokémon Bronzo'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 9,
    name: 'Bronzor',
    genus: 'Bronze Pokémon'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 11,
    name: 'ドーミラー',
    genus: 'せいどうポケモン'
  },
  {
    pokemon_species_id: 436,
    local_language_id: 12,
    name: '铜镜怪',
    genus: '青铜宝可梦'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 1,
    name: 'ドータクン',
    genus: 'どうたくポケモン'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 2,
    name: 'Dotakun',
    genus: ''
  },
  {
    pokemon_species_id: 437,
    local_language_id: 3,
    name: '동탁군',
    genus: '동탁포켓몬'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 4,
    name: '青銅鐘',
    genus: '銅鐘寶可夢'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 5,
    name: 'Archéodong',
    genus: 'Pokémon Clochebronze'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 6,
    name: 'Bronzong',
    genus: 'Bronzeglocke'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 7,
    name: 'Bronzong',
    genus: 'Pokémon Cam. Bronce'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 8,
    name: 'Bronzong',
    genus: 'Pokémon Squibronzo'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 9,
    name: 'Bronzong',
    genus: 'Bronze Bell Pokémon'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 11,
    name: 'ドータクン',
    genus: 'どうたくポケモン'
  },
  {
    pokemon_species_id: 437,
    local_language_id: 12,
    name: '青铜钟',
    genus: '铜钟宝可梦'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 1,
    name: 'ウソハチ',
    genus: 'ぼんさいポケモン'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 2,
    name: 'Usohachi',
    genus: ''
  },
  {
    pokemon_species_id: 438,
    local_language_id: 3,
    name: '꼬지지',
    genus: '분재포켓몬'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 4,
    name: '盆才怪',
    genus: '盆栽寶可夢'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 5,
    name: 'Manzaï',
    genus: 'Pokémon Bonsaï'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 6,
    name: 'Mobai',
    genus: 'Bonsai'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 7,
    name: 'Bonsly',
    genus: 'Pokémon Bonsái'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 8,
    name: 'Bonsly',
    genus: 'Pokémon Bonsai'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 9,
    name: 'Bonsly',
    genus: 'Bonsai Pokémon'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 11,
    name: 'ウソハチ',
    genus: 'ぼんさいポケモン'
  },
  {
    pokemon_species_id: 438,
    local_language_id: 12,
    name: '盆才怪',
    genus: '盆栽宝可梦'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 1,
    name: 'マネネ',
    genus: 'マイムポケモン'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 2,
    name: 'Manene',
    genus: ''
  },
  {
    pokemon_species_id: 439,
    local_language_id: 3,
    name: '흉내내',
    genus: '따라하기포켓몬'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 4,
    name: '魔尼尼',
    genus: '默劇寶可夢'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 5,
    name: 'Mime Jr.',
    genus: 'Pokémon Mime'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 6,
    name: 'Pantimimi',
    genus: 'Mime'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 7,
    name: 'Mime Jr.',
    genus: 'Pokémon Mimo'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 8,
    name: 'Mime Jr.',
    genus: 'Pokémon Mimo'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 9,
    name: 'Mime Jr.',
    genus: 'Mime Pokémon'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 11,
    name: 'マネネ',
    genus: 'マイムポケモン'
  },
  {
    pokemon_species_id: 439,
    local_language_id: 12,
    name: '魔尼尼',
    genus: '默剧宝可梦'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 1,
    name: 'ピンプク',
    genus: 'ままごとポケモン'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 2,
    name: 'Pinpuku',
    genus: ''
  },
  {
    pokemon_species_id: 440,
    local_language_id: 3,
    name: '핑복',
    genus: '소꿉놀이포켓몬'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 4,
    name: '小福蛋',
    genus: '家家酒寶可夢'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 5,
    name: 'Ptiravi',
    genus: 'Pokémon Maisonjouet'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 6,
    name: 'Wonneira',
    genus: 'Spielhaus'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 7,
    name: 'Happiny',
    genus: 'Pokémon Casita'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 8,
    name: 'Happiny',
    genus: 'Pokémon Ovettino'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 9,
    name: 'Happiny',
    genus: 'Playhouse Pokémon'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 11,
    name: 'ピンプク',
    genus: 'ままごとポケモン'
  },
  {
    pokemon_species_id: 440,
    local_language_id: 12,
    name: '小福蛋',
    genus: '家家酒宝可梦'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 1,
    name: 'ペラップ',
    genus: 'おんぷポケモン'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 2,
    name: 'Perap',
    genus: ''
  },
  {
    pokemon_species_id: 441,
    local_language_id: 3,
    name: '페라페',
    genus: '음표포켓몬'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 4,
    name: '聒噪鳥',
    genus: '音符寶可夢'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 5,
    name: 'Pijako',
    genus: 'Pokémon Note Musique'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 6,
    name: 'Plaudagei',
    genus: 'Musiknote'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 7,
    name: 'Chatot',
    genus: 'Pokémon Corchea'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 8,
    name: 'Chatot',
    genus: 'Pokémon Musicale'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 9,
    name: 'Chatot',
    genus: 'Music Note Pokémon'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 11,
    name: 'ペラップ',
    genus: 'おんぷポケモン'
  },
  {
    pokemon_species_id: 441,
    local_language_id: 12,
    name: '聒噪鸟',
    genus: '音符宝可梦'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 1,
    name: 'ミカルゲ',
    genus: 'ふういんポケモン'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 2,
    name: 'Mikaruge',
    genus: ''
  },
  {
    pokemon_species_id: 442,
    local_language_id: 3,
    name: '화강돌',
    genus: '봉인포켓몬'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 4,
    name: '花岩怪',
    genus: '封印寶可夢'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 5,
    name: 'Spiritomb',
    genus: 'Pokémon Interdit'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 6,
    name: 'Kryppuk',
    genus: 'Verboten'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 7,
    name: 'Spiritomb',
    genus: 'Pokémon Prohibido'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 8,
    name: 'Spiritomb',
    genus: 'Pokémon Proibito'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 9,
    name: 'Spiritomb',
    genus: 'Forbidden Pokémon'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 11,
    name: 'ミカルゲ',
    genus: 'ふういんポケモン'
  },
  {
    pokemon_species_id: 442,
    local_language_id: 12,
    name: '花岩怪',
    genus: '封印宝可梦'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 1,
    name: 'フカマル',
    genus: 'りくザメポケモン'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 2,
    name: 'Fukamaru',
    genus: ''
  },
  {
    pokemon_species_id: 443,
    local_language_id: 3,
    name: '딥상어동',
    genus: '육지상어포켓몬'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 4,
    name: '圓陸鯊',
    genus: '陸鯊寶可夢'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 5,
    name: 'Griknot',
    genus: 'Pokémon Terrequin'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 6,
    name: 'Kaumalat',
    genus: 'Landhai'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 7,
    name: 'Gible',
    genus: 'Pokémon Terrascualo'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 8,
    name: 'Gible',
    genus: 'Pokémon Squaloterra'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 9,
    name: 'Gible',
    genus: 'Land Shark Pokémon'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 11,
    name: 'フカマル',
    genus: 'りくザメポケモン'
  },
  {
    pokemon_species_id: 443,
    local_language_id: 12,
    name: '圆陆鲨',
    genus: '陆鲨宝可梦'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 1,
    name: 'ガバイト',
    genus: 'ほらあなポケモン'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 2,
    name: 'Gabite',
    genus: ''
  },
  {
    pokemon_species_id: 444,
    local_language_id: 3,
    name: '한바이트',
    genus: '동굴포켓몬'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 4,
    name: '尖牙陸鯊',
    genus: '洞穴寶可夢'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 5,
    name: 'Carmache',
    genus: 'Pokémon Caverne'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 6,
    name: 'Knarksel',
    genus: 'Höhle'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 7,
    name: 'Gabite',
    genus: 'Pokémon Cueva'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 8,
    name: 'Gabite',
    genus: 'Pokémon Grotta'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 9,
    name: 'Gabite',
    genus: 'Cave Pokémon'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 11,
    name: 'ガバイト',
    genus: 'ほらあなポケモン'
  },
  {
    pokemon_species_id: 444,
    local_language_id: 12,
    name: '尖牙陆鲨',
    genus: '洞穴宝可梦'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 1,
    name: 'ガブリアス',
    genus: 'マッハポケモン'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 2,
    name: 'Gablias',
    genus: ''
  },
  {
    pokemon_species_id: 445,
    local_language_id: 3,
    name: '한카리아스',
    genus: '마하포켓몬'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 4,
    name: '烈咬陸鯊',
    genus: '音速寶可夢'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 5,
    name: 'Carchacrok',
    genus: 'Pokémon Supersonic'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 6,
    name: 'Knakrack',
    genus: 'Rasanz'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 7,
    name: 'Garchomp',
    genus: 'Pokémon Mach'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 8,
    name: 'Garchomp',
    genus: 'Pokémon Mach'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 9,
    name: 'Garchomp',
    genus: 'Mach Pokémon'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 11,
    name: 'ガブリアス',
    genus: 'マッハポケモン'
  },
  {
    pokemon_species_id: 445,
    local_language_id: 12,
    name: '烈咬陆鲨',
    genus: '音速宝可梦'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 1,
    name: 'ゴンベ',
    genus: 'おおぐいポケモン'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 2,
    name: 'Gonbe',
    genus: ''
  },
  {
    pokemon_species_id: 446,
    local_language_id: 3,
    name: '먹고자',
    genus: '대식가포켓몬'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 4,
    name: '小卡比獸',
    genus: '大胃王寶可夢'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 5,
    name: 'Goinfrex',
    genus: 'Pokémon Goinfre'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 6,
    name: 'Mampfaxo',
    genus: 'Nimmersatt'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 7,
    name: 'Munchlax',
    genus: 'Pokémon Comilón'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 8,
    name: 'Munchlax',
    genus: 'Pokémon Ghiottone'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 9,
    name: 'Munchlax',
    genus: 'Big Eater Pokémon'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 11,
    name: 'ゴンベ',
    genus: 'おおぐいポケモン'
  },
  {
    pokemon_species_id: 446,
    local_language_id: 12,
    name: '小卡比兽',
    genus: '大胃王宝可梦'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 1,
    name: 'リオル',
    genus: 'はもんポケモン'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 2,
    name: 'Riolu',
    genus: ''
  },
  {
    pokemon_species_id: 447,
    local_language_id: 3,
    name: '리오르',
    genus: '파문포켓몬'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 4,
    name: '利歐路',
    genus: '波紋寶可夢'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 5,
    name: 'Riolu',
    genus: 'Pokémon Émanation'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 6,
    name: 'Riolu',
    genus: 'Wellenspiel'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 7,
    name: 'Riolu',
    genus: 'Pokémon Emanación'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 8,
    name: 'Riolu',
    genus: 'Pokémon Emanazione'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 9,
    name: 'Riolu',
    genus: 'Emanation Pokémon'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 11,
    name: 'リオル',
    genus: 'はもんポケモン'
  },
  {
    pokemon_species_id: 447,
    local_language_id: 12,
    name: '利欧路',
    genus: '波纹宝可梦'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 1,
    name: 'ルカリオ',
    genus: 'はどうポケモン'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 2,
    name: 'Lucario',
    genus: ''
  },
  {
    pokemon_species_id: 448,
    local_language_id: 3,
    name: '루카리오',
    genus: '파동포켓몬'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 4,
    name: '路卡利歐',
    genus: '波導寶可夢'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 5,
    name: 'Lucario',
    genus: 'Pokémon Aura'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 6,
    name: 'Lucario',
    genus: 'Aura'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 7,
    name: 'Lucario',
    genus: 'Pokémon Aura'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 8,
    name: 'Lucario',
    genus: 'Pokémon Aura'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 9,
    name: 'Lucario',
    genus: 'Aura Pokémon'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 11,
    name: 'ルカリオ',
    genus: 'はどうポケモン'
  },
  {
    pokemon_species_id: 448,
    local_language_id: 12,
    name: '路卡利欧',
    genus: '波导宝可梦'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 1,
    name: 'ヒポポタス',
    genus: 'カバポケモン'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 2,
    name: 'Hipopotas',
    genus: ''
  },
  {
    pokemon_species_id: 449,
    local_language_id: 3,
    name: '히포포타스',
    genus: '하마포켓몬'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 4,
    name: '沙河馬',
    genus: '河馬寶可夢'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 5,
    name: 'Hippopotas',
    genus: 'Pokémon Hippo'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 6,
    name: 'Hippopotas',
    genus: 'Flusspferd'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 7,
    name: 'Hippopotas',
    genus: 'Pokémon Hipo'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 8,
    name: 'Hippopotas',
    genus: 'Pokémon Ippo'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 9,
    name: 'Hippopotas',
    genus: 'Hippo Pokémon'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 11,
    name: 'ヒポポタス',
    genus: 'カバポケモン'
  },
  {
    pokemon_species_id: 449,
    local_language_id: 12,
    name: '沙河马',
    genus: '河马宝可梦'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 1,
    name: 'カバルドン',
    genus: 'じゅうりょうポケモン'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 2,
    name: 'Kabarudon',
    genus: ''
  },
  {
    pokemon_species_id: 450,
    local_language_id: 3,
    name: '하마돈',
    genus: '중량포켓몬'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 4,
    name: '河馬獸',
    genus: '重量寶可夢'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 5,
    name: 'Hippodocus',
    genus: 'Pokémon Poids Lourd'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 6,
    name: 'Hippoterus',
    genus: 'Schwergewicht'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 7,
    name: 'Hippowdon',
    genus: 'Pokémon Peso Pesado'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 8,
    name: 'Hippowdon',
    genus: 'Pokémon Grandepeso'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 9,
    name: 'Hippowdon',
    genus: 'Heavyweight Pokémon'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 11,
    name: 'カバルドン',
    genus: 'じゅうりょうポケモン'
  },
  {
    pokemon_species_id: 450,
    local_language_id: 12,
    name: '河马兽',
    genus: '重量宝可梦'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 1,
    name: 'スコルピ',
    genus: 'さそりポケモン'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 2,
    name: 'Scorpi',
    genus: ''
  },
  {
    pokemon_species_id: 451,
    local_language_id: 3,
    name: '스콜피',
    genus: '전갈포켓몬'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 4,
    name: '鉗尾蠍',
    genus: '蠍子寶可夢'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 5,
    name: 'Rapion',
    genus: 'Pokémon Scorpion'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 6,
    name: 'Pionskora',
    genus: 'Skorpion'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 7,
    name: 'Skorupi',
    genus: 'Pokémon Escorpión'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 8,
    name: 'Skorupi',
    genus: 'Pokémon Scorpione'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 9,
    name: 'Skorupi',
    genus: 'Scorpion Pokémon'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 11,
    name: 'スコルピ',
    genus: 'さそりポケモン'
  },
  {
    pokemon_species_id: 451,
    local_language_id: 12,
    name: '钳尾蝎',
    genus: '蝎子宝可梦'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 1,
    name: 'ドラピオン',
    genus: 'ばけさそりポケモン'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 2,
    name: 'Dorapion',
    genus: ''
  },
  {
    pokemon_species_id: 452,
    local_language_id: 3,
    name: '드래피온',
    genus: '요괴전갈포켓몬'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 4,
    name: '龍王蠍',
    genus: '蠍怪寶可夢'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 5,
    name: 'Drascore',
    genus: 'Pokémon Scorpogre'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 6,
    name: 'Piondragi',
    genus: 'Ogerskorpion'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 7,
    name: 'Drapion',
    genus: 'Pokémon Escorpiogro'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 8,
    name: 'Drapion',
    genus: 'Pokémon Scorpiaccio'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 9,
    name: 'Drapion',
    genus: 'Ogre Scorpion Pokémon'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 11,
    name: 'ドラピオン',
    genus: 'ばけさそりポケモン'
  },
  {
    pokemon_species_id: 452,
    local_language_id: 12,
    name: '龙王蝎',
    genus: '蝎怪宝可梦'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 1,
    name: 'グレッグル',
    genus: 'どくづきポケモン'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 2,
    name: 'Gureggru',
    genus: ''
  },
  {
    pokemon_species_id: 453,
    local_language_id: 3,
    name: '삐딱구리',
    genus: '독설포켓몬'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 4,
    name: '不良蛙',
    genus: '毒擊寶可夢'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 5,
    name: 'Cradopaud',
    genus: 'Pokémon Toxique'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 6,
    name: 'Glibunkel',
    genus: 'Giftmund'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 7,
    name: 'Croagunk',
    genus: 'Pokémon Boca Tóxica'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 8,
    name: 'Croagunk',
    genus: 'Pokémon Inveieleno'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 9,
    name: 'Croagunk',
    genus: 'Toxic Mouth Pokémon'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 11,
    name: 'グレッグル',
    genus: 'どくづきポケモン'
  },
  {
    pokemon_species_id: 453,
    local_language_id: 12,
    name: '不良蛙',
    genus: '毒击宝可梦'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 1,
    name: 'ドクロッグ',
    genus: 'どくづきポケモン'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 2,
    name: 'Dokurog',
    genus: ''
  },
  {
    pokemon_species_id: 454,
    local_language_id: 3,
    name: '독개굴',
    genus: '독설포켓몬'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 4,
    name: '毒骷蛙',
    genus: '毒擊寶可夢'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 5,
    name: 'Coatox',
    genus: 'Pokémon Toxique'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 6,
    name: 'Toxiquak',
    genus: 'Giftmund'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 7,
    name: 'Toxicroak',
    genus: 'Pokémon Boca Tóxica'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 8,
    name: 'Toxicroak',
    genus: 'Pokémon Inveieleno'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 9,
    name: 'Toxicroak',
    genus: 'Toxic Mouth Pokémon'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 11,
    name: 'ドクロッグ',
    genus: 'どくづきポケモン'
  },
  {
    pokemon_species_id: 454,
    local_language_id: 12,
    name: '毒骷蛙',
    genus: '毒击宝可梦'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 1,
    name: 'マスキッパ',
    genus: 'むしとりポケモン'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 2,
    name: 'Muskippa',
    genus: ''
  },
  {
    pokemon_species_id: 455,
    local_language_id: 3,
    name: '무스틈니',
    genus: '벌레잡이포켓몬'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 4,
    name: '尖牙籠',
    genus: '捕蟲寶可夢'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 5,
    name: 'Vortente',
    genus: 'Pokémon Chopinsecte'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 6,
    name: 'Venuflibis',
    genus: 'Käfertod'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 7,
    name: 'Carnivine',
    genus: 'Pokémon Caza Bichos'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 8,
    name: 'Carnivine',
    genus: 'Pokémon Insettivoro'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 9,
    name: 'Carnivine',
    genus: 'Bug Catcher Pokémon'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 11,
    name: 'マスキッパ',
    genus: 'むしとりポケモン'
  },
  {
    pokemon_species_id: 455,
    local_language_id: 12,
    name: '尖牙笼',
    genus: '捕虫宝可梦'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 1,
    name: 'ケイコウオ',
    genus: 'はねうおポケモン'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 2,
    name: 'Keikouo',
    genus: ''
  },
  {
    pokemon_species_id: 456,
    local_language_id: 3,
    name: '형광어',
    genus: '비어포켓몬'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 4,
    name: '螢光魚',
    genus: '飛翅魚寶可夢'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 5,
    name: 'Écayon',
    genus: 'Pokémon Poisson Ailé'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 6,
    name: 'Finneon',
    genus: 'Flügelfisch'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 7,
    name: 'Finneon',
    genus: 'Pokémon Pez Ala'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 8,
    name: 'Finneon',
    genus: 'Pokémon Pescealato'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 9,
    name: 'Finneon',
    genus: 'Wing Fish Pokémon'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 11,
    name: 'ケイコウオ',
    genus: 'はねうおポケモン'
  },
  {
    pokemon_species_id: 456,
    local_language_id: 12,
    name: '荧光鱼',
    genus: '飞翅鱼宝可梦'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 1,
    name: 'ネオラント',
    genus: 'ネオンポケモン'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 2,
    name: 'Neolant',
    genus: ''
  },
  {
    pokemon_species_id: 457,
    local_language_id: 3,
    name: '네오라이트',
    genus: '네온포켓몬'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 4,
    name: '霓虹魚',
    genus: '霓虹寶可夢'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 5,
    name: 'Luminéon',
    genus: 'Pokémon Néon'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 6,
    name: 'Lumineon',
    genus: 'Neon'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 7,
    name: 'Lumineon',
    genus: 'Pokémon Neón'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 8,
    name: 'Lumineon',
    genus: 'Pokémon Neon'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 9,
    name: 'Lumineon',
    genus: 'Neon Pokémon'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 11,
    name: 'ネオラント',
    genus: 'ネオンポケモン'
  },
  {
    pokemon_species_id: 457,
    local_language_id: 12,
    name: '霓虹鱼',
    genus: '霓虹宝可梦'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 1,
    name: 'タマンタ',
    genus: 'カイトポケモン'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 2,
    name: 'Tamanta',
    genus: ''
  },
  {
    pokemon_species_id: 458,
    local_language_id: 3,
    name: '타만타',
    genus: '연포켓몬'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 4,
    name: '小球飛魚',
    genus: '風箏寶可夢'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 5,
    name: 'Babimanta',
    genus: 'Pokémon Cervolant'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 6,
    name: 'Mantirps',
    genus: 'Flugrochen'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 7,
    name: 'Mantyke',
    genus: 'Pokémon Milano'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 8,
    name: 'Mantyke',
    genus: 'Pokémon Aquilone'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 9,
    name: 'Mantyke',
    genus: 'Kite Pokémon'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 11,
    name: 'タマンタ',
    genus: 'カイトポケモン'
  },
  {
    pokemon_species_id: 458,
    local_language_id: 12,
    name: '小球飞鱼',
    genus: '风筝宝可梦'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 1,
    name: 'ユキカブリ',
    genus: 'じゅひょうポケモン'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 2,
    name: 'Yukikaburi',
    genus: ''
  },
  {
    pokemon_species_id: 459,
    local_language_id: 3,
    name: '눈쓰개',
    genus: '얼음나무포켓몬'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 4,
    name: '雪笠怪',
    genus: '樹冰寶可夢'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 5,
    name: 'Blizzi',
    genus: 'Pokémon Arbregelé'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 6,
    name: 'Shnebedeck',
    genus: 'Frostbaum'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 7,
    name: 'Snover',
    genus: 'Pokémon Árbol Nieve'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 8,
    name: 'Snover',
    genus: 'Pokémon Albergelo'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 9,
    name: 'Snover',
    genus: 'Frost Tree Pokémon'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 11,
    name: 'ユキカブリ',
    genus: 'じゅひょうポケモン'
  },
  {
    pokemon_species_id: 459,
    local_language_id: 12,
    name: '雪笠怪',
    genus: '树冰宝可梦'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 1,
    name: 'ユキノオー',
    genus: 'じゅひょうポケモン'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 2,
    name: 'Yukinooh',
    genus: ''
  },
  {
    pokemon_species_id: 460,
    local_language_id: 3,
    name: '눈설왕',
    genus: '얼음나무포켓몬'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 4,
    name: '暴雪王',
    genus: '樹冰寶可夢'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 5,
    name: 'Blizzaroi',
    genus: 'Pokémon Arbregelé'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 6,
    name: 'Rexblisar',
    genus: 'Frostbaum'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 7,
    name: 'Abomasnow',
    genus: 'Pokémon Árbol Nieve'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 8,
    name: 'Abomasnow',
    genus: 'Pokémon Albergelo'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 9,
    name: 'Abomasnow',
    genus: 'Frost Tree Pokémon'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 11,
    name: 'ユキノオー',
    genus: 'じゅひょうポケモン'
  },
  {
    pokemon_species_id: 460,
    local_language_id: 12,
    name: '暴雪王',
    genus: '树冰宝可梦'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 1,
    name: 'マニューラ',
    genus: 'かぎづめポケモン'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 2,
    name: 'Manyula',
    genus: ''
  },
  {
    pokemon_species_id: 461,
    local_language_id: 3,
    name: '포푸니라',
    genus: '갈고리손톱포켓몬'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 4,
    name: '瑪狃拉',
    genus: '鉤爪寶可夢'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 5,
    name: 'Dimoret',
    genus: 'Pokémon Grifacérée'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 6,
    name: 'Snibunna',
    genus: 'Stichklaue'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 7,
    name: 'Weavile',
    genus: 'Pokémon Garra Filo'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 8,
    name: 'Weavile',
    genus: 'Pokémon Lamartigli'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 9,
    name: 'Weavile',
    genus: 'Sharp Claw Pokémon'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 11,
    name: 'マニューラ',
    genus: 'かぎづめポケモン'
  },
  {
    pokemon_species_id: 461,
    local_language_id: 12,
    name: '玛狃拉',
    genus: '钩爪宝可梦'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 1,
    name: 'ジバコイル',
    genus: 'じばポケモン'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 2,
    name: 'Jibacoil',
    genus: ''
  },
  {
    pokemon_species_id: 462,
    local_language_id: 3,
    name: '자포코일',
    genus: '자기장포켓몬'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 4,
    name: '自爆磁怪',
    genus: '磁場寶可夢'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 5,
    name: 'Magnézone',
    genus: 'Pokémon Aimant'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 6,
    name: 'Magnezone',
    genus: 'Magnetgebiet'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 7,
    name: 'Magnezone',
    genus: 'Pokémon Magnético'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 8,
    name: 'Magnezone',
    genus: 'Pokémon Magnetico'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 9,
    name: 'Magnezone',
    genus: 'Magnet Area Pokémon'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 11,
    name: 'ジバコイル',
    genus: 'じばポケモン'
  },
  {
    pokemon_species_id: 462,
    local_language_id: 12,
    name: '自爆磁怪',
    genus: '磁场宝可梦'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 1,
    name: 'ベロベルト',
    genus: 'なめまわしポケモン'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 2,
    name: 'Beroberto',
    genus: ''
  },
  {
    pokemon_species_id: 463,
    local_language_id: 3,
    name: '내룸벨트',
    genus: '핥기포켓몬'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 4,
    name: '大舌舔',
    genus: '舔舔寶可夢'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 5,
    name: 'Coudlangue',
    genus: 'Pokémon Lécheur'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 6,
    name: 'Schlurplek',
    genus: 'Schlecker'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 7,
    name: 'Lickilicky',
    genus: 'Pokémon Lametazo'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 8,
    name: 'Lickilicky',
    genus: 'Pokémon Linguaccia'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 9,
    name: 'Lickilicky',
    genus: 'Licking Pokémon'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 11,
    name: 'ベロベルト',
    genus: 'なめまわしポケモン'
  },
  {
    pokemon_species_id: 463,
    local_language_id: 12,
    name: '大舌舔',
    genus: '舔舔宝可梦'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 1,
    name: 'ドサイドン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 2,
    name: 'Dosydon',
    genus: ''
  },
  {
    pokemon_species_id: 464,
    local_language_id: 3,
    name: '거대코뿌리',
    genus: '드릴포켓몬'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 4,
    name: '超甲狂犀',
    genus: '鑽錐寶可夢'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 5,
    name: 'Rhinastoc',
    genus: 'Pokémon Perceur'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 6,
    name: 'Rihornior',
    genus: 'Bohrer'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 7,
    name: 'Rhyperior',
    genus: 'Pokémon Taladro'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 8,
    name: 'Rhyperior',
    genus: 'Pokémon Trapano'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 9,
    name: 'Rhyperior',
    genus: 'Drill Pokémon'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 11,
    name: 'ドサイドン',
    genus: 'ドリルポケモン'
  },
  {
    pokemon_species_id: 464,
    local_language_id: 12,
    name: '超甲狂犀',
    genus: '钻锥宝可梦'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 1,
    name: 'モジャンボ',
    genus: 'ツルじょうポケモン'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 2,
    name: 'Mojumbo',
    genus: ''
  },
  {
    pokemon_species_id: 465,
    local_language_id: 3,
    name: '덩쿠림보',
    genus: '넝쿨포켓몬'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 4,
    name: '巨蔓藤',
    genus: '藤蔓狀寶可夢'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 5,
    name: 'Bouldeneu',
    genus: 'Pokémon Vigne'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 6,
    name: 'Tangoloss',
    genus: 'Ranke'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 7,
    name: 'Tangrowth',
    genus: 'Pokémon Enredadera'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 8,
    name: 'Tangrowth',
    genus: 'Pokémon Liana'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 9,
    name: 'Tangrowth',
    genus: 'Vine Pokémon'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 11,
    name: 'モジャンボ',
    genus: 'ツルじょうポケモン'
  },
  {
    pokemon_species_id: 465,
    local_language_id: 12,
    name: '巨蔓藤',
    genus: '藤蔓状宝可梦'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 1,
    name: 'エレキブル',
    genus: 'らいでんポケモン'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 2,
    name: 'Elekible',
    genus: ''
  },
  {
    pokemon_species_id: 466,
    local_language_id: 3,
    name: '에레키블',
    genus: '뇌전포켓몬'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 4,
    name: '電擊魔獸',
    genus: '雷電寶可夢'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 5,
    name: 'Élekable',
    genus: 'Pokémon Foudrélec'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 6,
    name: 'Elevoltek',
    genus: 'Donnerkeil'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 7,
    name: 'Electivire',
    genus: 'Pokémon Rayo'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 8,
    name: 'Electivire',
    genus: 'Pokémon Saetta'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 9,
    name: 'Electivire',
    genus: 'Thunderbolt Pokémon'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 11,
    name: 'エレキブル',
    genus: 'らいでんポケモン'
  },
  {
    pokemon_species_id: 466,
    local_language_id: 12,
    name: '电击魔兽',
    genus: '雷电宝可梦'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 1,
    name: 'ブーバーン',
    genus: 'ばくえんポケモン'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 2,
    name: 'Booburn',
    genus: ''
  },
  {
    pokemon_species_id: 467,
    local_language_id: 3,
    name: '마그마번',
    genus: '폭염포켓몬'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 4,
    name: '鴨嘴炎獸',
    genus: '爆炎寶可夢'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 5,
    name: 'Maganon',
    genus: 'Pokémon Explosion'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 6,
    name: 'Magbrant',
    genus: 'Detonation'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 7,
    name: 'Magmortar',
    genus: 'Pokémon Explosión'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 8,
    name: 'Magmortar',
    genus: 'Pokémon Esplosivo'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 9,
    name: 'Magmortar',
    genus: 'Blast Pokémon'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 11,
    name: 'ブーバーン',
    genus: 'ばくえんポケモン'
  },
  {
    pokemon_species_id: 467,
    local_language_id: 12,
    name: '鸭嘴炎兽',
    genus: '爆炎宝可梦'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 1,
    name: 'トゲキッス',
    genus: 'しゅくふくポケモン'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 2,
    name: 'Togekiss',
    genus: ''
  },
  {
    pokemon_species_id: 468,
    local_language_id: 3,
    name: '토게키스',
    genus: '축복포켓몬'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 4,
    name: '波克基斯',
    genus: '祝福寶可夢'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 5,
    name: 'Togekiss',
    genus: 'Pokémon Célébration'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 6,
    name: 'Togekiss',
    genus: 'Jubilierer'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 7,
    name: 'Togekiss',
    genus: 'Pokémon Festejo'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 8,
    name: 'Togekiss',
    genus: 'Pokémon Festa'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 9,
    name: 'Togekiss',
    genus: 'Jubilee Pokémon'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 11,
    name: 'トゲキッス',
    genus: 'しゅくふくポケモン'
  },
  {
    pokemon_species_id: 468,
    local_language_id: 12,
    name: '波克基斯',
    genus: '祝福宝可梦'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 1,
    name: 'メガヤンマ',
    genus: 'オニトンボポケモン'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 2,
    name: 'Megayanma',
    genus: ''
  },
  {
    pokemon_species_id: 469,
    local_language_id: 3,
    name: '메가자리',
    genus: '깨비잠자리포켓몬'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 4,
    name: '遠古巨蜓',
    genus: '勾蜓寶可夢'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 5,
    name: 'Yanmega',
    genus: 'Pokémon Libellogre'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 6,
    name: 'Yanmega',
    genus: 'Agrion'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 7,
    name: 'Yanmega',
    genus: 'Pokémon Libélula'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 8,
    name: 'Yanmega',
    genus: 'Pokémon Libellorco'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 9,
    name: 'Yanmega',
    genus: 'Ogre Darner Pokémon'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 11,
    name: 'メガヤンマ',
    genus: 'オニトンボポケモン'
  },
  {
    pokemon_species_id: 469,
    local_language_id: 12,
    name: '远古巨蜓',
    genus: '勾蜓宝可梦'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 1,
    name: 'リーフィア',
    genus: 'しんりょくポケモン'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 2,
    name: 'Leafia',
    genus: ''
  },
  {
    pokemon_species_id: 470,
    local_language_id: 3,
    name: '리피아',
    genus: '심록포켓몬'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 4,
    name: '葉伊布',
    genus: '新綠寶可夢'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 5,
    name: 'Phyllali',
    genus: 'Pokémon Verdoyant'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 6,
    name: 'Folipurba',
    genus: 'Unreif'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 7,
    name: 'Leafeon',
    genus: 'Pokémon Verdor'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 8,
    name: 'Leafeon',
    genus: 'Pokémon Rigoglioso'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 9,
    name: 'Leafeon',
    genus: 'Verdant Pokémon'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 11,
    name: 'リーフィア',
    genus: 'しんりょくポケモン'
  },
  {
    pokemon_species_id: 470,
    local_language_id: 12,
    name: '叶伊布',
    genus: '新绿宝可梦'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 1,
    name: 'グレイシア',
    genus: 'しんせつポケモン'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 2,
    name: 'Glacia',
    genus: ''
  },
  {
    pokemon_species_id: 471,
    local_language_id: 3,
    name: '글레이시아',
    genus: '신설포켓몬'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 4,
    name: '冰伊布',
    genus: '新雪寶可夢'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 5,
    name: 'Givrali',
    genus: 'Pokémon Poudreuse'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 6,
    name: 'Glaziola',
    genus: 'Neuschnee'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 7,
    name: 'Glaceon',
    genus: 'Pokémon Nieve Fresca'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 8,
    name: 'Glaceon',
    genus: 'Pokémon Nevefresca'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 9,
    name: 'Glaceon',
    genus: 'Fresh Snow Pokémon'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 11,
    name: 'グレイシア',
    genus: 'しんせつポケモン'
  },
  {
    pokemon_species_id: 471,
    local_language_id: 12,
    name: '冰伊布',
    genus: '新雪宝可梦'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 1,
    name: 'グライオン',
    genus: 'キバさそりポケモン'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 2,
    name: 'Glion',
    genus: ''
  },
  {
    pokemon_species_id: 472,
    local_language_id: 3,
    name: '글라이온',
    genus: '송곳니전갈포켓몬'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 4,
    name: '天蠍王',
    genus: '牙蠍寶可夢'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 5,
    name: 'Scorvol',
    genus: 'Pokémon Scorpicroc'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 6,
    name: 'Skorgro',
    genus: 'Zahnskorpi'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 7,
    name: 'Gliscor',
    genus: 'Pokémon Colmicorpio'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 8,
    name: 'Gliscor',
    genus: 'Pokémon Scorpidente'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 9,
    name: 'Gliscor',
    genus: 'Fang Scorpion Pokémon'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 11,
    name: 'グライオン',
    genus: 'キバさそりポケモン'
  },
  {
    pokemon_species_id: 472,
    local_language_id: 12,
    name: '天蝎王',
    genus: '牙蝎宝可梦'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 1,
    name: 'マンムー',
    genus: '２ほんキバポケモン'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 2,
    name: 'Mammoo',
    genus: ''
  },
  {
    pokemon_species_id: 473,
    local_language_id: 3,
    name: '맘모꾸리',
    genus: '2개송곳니포켓몬'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 4,
    name: '象牙豬',
    genus: '雙牙寶可夢'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 5,
    name: 'Mammochon',
    genus: 'Pokémon Deudéfenses'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 6,
    name: 'Mamutel',
    genus: 'Doppelstoßzahn'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 7,
    name: 'Mamoswine',
    genus: 'Pokémon Doscolmillos'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 8,
    name: 'Mamoswine',
    genus: 'Pokémon Duezanne'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 9,
    name: 'Mamoswine',
    genus: 'Twin Tusk Pokémon'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 11,
    name: 'マンムー',
    genus: '２ほんキバポケモン'
  },
  {
    pokemon_species_id: 473,
    local_language_id: 12,
    name: '象牙猪',
    genus: '双牙宝可梦'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 1,
    name: 'ポリゴンＺ',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 2,
    name: 'PorygonZ',
    genus: ''
  },
  {
    pokemon_species_id: 474,
    local_language_id: 3,
    name: '폴리곤Z',
    genus: '가상포켓몬'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 4,
    name: '多邊獸Ｚ',
    genus: '虛擬寶可夢'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 5,
    name: 'Porygon-Z',
    genus: 'Pokémon Virtuel'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 6,
    name: 'Porygon-Z',
    genus: 'Virtuell'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 7,
    name: 'Porygon-Z',
    genus: 'Pokémon Virtual'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 8,
    name: 'Porygon-Z',
    genus: 'Pokémon Virtuale'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 9,
    name: 'Porygon-Z',
    genus: 'Virtual Pokémon'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 11,
    name: 'ポリゴンＺ',
    genus: 'バーチャルポケモン'
  },
  {
    pokemon_species_id: 474,
    local_language_id: 12,
    name: '多边兽Ｚ',
    genus: '虚拟宝可梦'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 1,
    name: 'エルレイド',
    genus: 'やいばポケモン'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 2,
    name: 'Erlade',
    genus: ''
  },
  {
    pokemon_species_id: 475,
    local_language_id: 3,
    name: '엘레이드',
    genus: '검포켓몬'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 4,
    name: '艾路雷朵',
    genus: '利刃寶可夢'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 5,
    name: 'Gallame',
    genus: 'Pokémon Lame'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 6,
    name: 'Galagladi',
    genus: 'Klinge'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 7,
    name: 'Gallade',
    genus: 'Pokémon Cuchilla'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 8,
    name: 'Gallade',
    genus: 'Pokémon Lama'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 9,
    name: 'Gallade',
    genus: 'Blade Pokémon'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 11,
    name: 'エルレイド',
    genus: 'やいばポケモン'
  },
  {
    pokemon_species_id: 475,
    local_language_id: 12,
    name: '艾路雷朵',
    genus: '利刃宝可梦'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 1,
    name: 'ダイノーズ',
    genus: 'コンパスポケモン'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 2,
    name: 'Dainose',
    genus: ''
  },
  {
    pokemon_species_id: 476,
    local_language_id: 3,
    name: '대코파스',
    genus: '콤파스포켓몬'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 4,
    name: '大朝北鼻',
    genus: '羅盤寶可夢'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 5,
    name: 'Tarinorme',
    genus: 'Pokémon Boussole'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 6,
    name: 'Voluminas',
    genus: 'Kompass'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 7,
    name: 'Probopass',
    genus: 'Pokémon Brújula'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 8,
    name: 'Probopass',
    genus: 'Pokémon Bussola'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 9,
    name: 'Probopass',
    genus: 'Compass Pokémon'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 11,
    name: 'ダイノーズ',
    genus: 'コンパスポケモン'
  },
  {
    pokemon_species_id: 476,
    local_language_id: 12,
    name: '大朝北鼻',
    genus: '罗盘宝可梦'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 1,
    name: 'ヨノワール',
    genus: 'てづかみポケモン'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 2,
    name: 'Yonoir',
    genus: ''
  },
  {
    pokemon_species_id: 477,
    local_language_id: 3,
    name: '야느와르몽',
    genus: '움켜쥠포켓몬'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 4,
    name: '黑夜魔靈',
    genus: '抓握寶可夢'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 5,
    name: 'Noctunoir',
    genus: 'Pokémon Mainpince'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 6,
    name: 'Zwirrfinst',
    genus: 'Greifer'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 7,
    name: 'Dusknoir',
    genus: 'Pokémon Grilletes'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 8,
    name: 'Dusknoir',
    genus: 'Pokémon Pinza'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 9,
    name: 'Dusknoir',
    genus: 'Gripper Pokémon'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 11,
    name: 'ヨノワール',
    genus: 'てづかみポケモン'
  },
  {
    pokemon_species_id: 477,
    local_language_id: 12,
    name: '黑夜魔灵',
    genus: '抓握宝可梦'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 1,
    name: 'ユキメノコ',
    genus: 'ゆきぐにポケモン'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 2,
    name: 'Yukimenoko',
    genus: ''
  },
  {
    pokemon_species_id: 478,
    local_language_id: 3,
    name: '눈여아',
    genus: '설국포켓몬'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 4,
    name: '雪妖女',
    genus: '雪國寶可夢'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 5,
    name: 'Momartik',
    genus: 'Pokémon Enneigement'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 6,
    name: 'Frosdedje',
    genus: 'Schneegebiet'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 7,
    name: 'Froslass',
    genus: 'Pokémon Tierra Fría'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 8,
    name: 'Froslass',
    genus: 'Pokémon Suolnevoso'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 9,
    name: 'Froslass',
    genus: 'Snow Land Pokémon'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 11,
    name: 'ユキメノコ',
    genus: 'ゆきぐにポケモン'
  },
  {
    pokemon_species_id: 478,
    local_language_id: 12,
    name: '雪妖女',
    genus: '雪国宝可梦'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 1,
    name: 'ロトム',
    genus: 'プラズマポケモン'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 2,
    name: 'Rotom',
    genus: ''
  },
  {
    pokemon_species_id: 479,
    local_language_id: 3,
    name: '로토무',
    genus: '플라스마포켓몬'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 4,
    name: '洛托姆',
    genus: '等離子寶可夢'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 5,
    name: 'Motisma',
    genus: 'Pokémon Plasma'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 6,
    name: 'Rotom',
    genus: 'Plasma'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 7,
    name: 'Rotom',
    genus: 'Pokémon Plasma'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 8,
    name: 'Rotom',
    genus: 'Pokémon Plasma'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 9,
    name: 'Rotom',
    genus: 'Plasma Pokémon'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 11,
    name: 'ロトム',
    genus: 'プラズマポケモン'
  },
  {
    pokemon_species_id: 479,
    local_language_id: 12,
    name: '洛托姆',
    genus: '等离子宝可梦'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 1,
    name: 'ユクシー',
    genus: 'ちしきポケモン'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 2,
    name: 'Yuxie',
    genus: ''
  },
  {
    pokemon_species_id: 480,
    local_language_id: 3,
    name: '유크시',
    genus: '지식포켓몬'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 4,
    name: '由克希',
    genus: '知識寶可夢'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 5,
    name: 'Créhelf',
    genus: 'Pokémon Savoir'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 6,
    name: 'Selfe',
    genus: 'Wissen'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 7,
    name: 'Uxie',
    genus: 'Pokémon Sabiduría'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 8,
    name: 'Uxie',
    genus: 'Pokémon Sapienza'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 9,
    name: 'Uxie',
    genus: 'Knowledge Pokémon'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 11,
    name: 'ユクシー',
    genus: 'ちしきポケモン'
  },
  {
    pokemon_species_id: 480,
    local_language_id: 12,
    name: '由克希',
    genus: '知识宝可梦'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 1,
    name: 'エムリット',
    genus: 'かんじょうポケモン'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 2,
    name: 'Emrit',
    genus: ''
  },
  {
    pokemon_species_id: 481,
    local_language_id: 3,
    name: '엠라이트',
    genus: '감정포켓몬'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 4,
    name: '艾姆利多',
    genus: '感情寶可夢'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 5,
    name: 'Créfollet',
    genus: 'Pokémon Émotion'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 6,
    name: 'Vesprit',
    genus: 'Emotion'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 7,
    name: 'Mesprit',
    genus: 'Pokémon Sensorio'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 8,
    name: 'Mesprit',
    genus: 'Pokémon Emozione'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 9,
    name: 'Mesprit',
    genus: 'Emotion Pokémon'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 11,
    name: 'エムリット',
    genus: 'かんじょうポケモン'
  },
  {
    pokemon_species_id: 481,
    local_language_id: 12,
    name: '艾姆利多',
    genus: '感情宝可梦'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 1,
    name: 'アグノム',
    genus: 'いしポケモン'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 2,
    name: 'Agnome',
    genus: ''
  },
  {
    pokemon_species_id: 482,
    local_language_id: 3,
    name: '아그놈',
    genus: '의지포켓몬'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 4,
    name: '亞克諾姆',
    genus: '意志寶可夢'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 5,
    name: 'Créfadet',
    genus: 'Pokémon Volonté'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 6,
    name: 'Tobutz',
    genus: 'Willenskraft'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 7,
    name: 'Azelf',
    genus: 'Pokémon Voluntad'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 8,
    name: 'Azelf',
    genus: 'Pokémon Volontà'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 9,
    name: 'Azelf',
    genus: 'Willpower Pokémon'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 11,
    name: 'アグノム',
    genus: 'いしポケモン'
  },
  {
    pokemon_species_id: 482,
    local_language_id: 12,
    name: '亚克诺姆',
    genus: '意志宝可梦'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 1,
    name: 'ディアルガ',
    genus: 'じかんポケモン'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 2,
    name: 'Dialga',
    genus: ''
  },
  {
    pokemon_species_id: 483,
    local_language_id: 3,
    name: '디아루가',
    genus: '시간포켓몬'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 4,
    name: '帝牙盧卡',
    genus: '時間寶可夢'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 5,
    name: 'Dialga',
    genus: 'Pokémon Temps'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 6,
    name: 'Dialga',
    genus: 'Zeitweilig'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 7,
    name: 'Dialga',
    genus: 'Pokémon Temporal'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 8,
    name: 'Dialga',
    genus: 'Pokémon Tempo'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 9,
    name: 'Dialga',
    genus: 'Temporal Pokémon'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 11,
    name: 'ディアルガ',
    genus: 'じかんポケモン'
  },
  {
    pokemon_species_id: 483,
    local_language_id: 12,
    name: '帝牙卢卡',
    genus: '时间宝可梦'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 1,
    name: 'パルキア',
    genus: 'くうかんポケモン'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 2,
    name: 'Palkia',
    genus: ''
  },
  {
    pokemon_species_id: 484,
    local_language_id: 3,
    name: '펄기아',
    genus: '공간포켓몬'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 4,
    name: '帕路奇亞',
    genus: '空間寶可夢'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 5,
    name: 'Palkia',
    genus: 'Pokémon Espace'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 6,
    name: 'Palkia',
    genus: 'Räumlich'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 7,
    name: 'Palkia',
    genus: 'Pokémon Espacial'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 8,
    name: 'Palkia',
    genus: 'Pokémon Spazio'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 9,
    name: 'Palkia',
    genus: 'Spatial Pokémon'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 11,
    name: 'パルキア',
    genus: 'くうかんポケモン'
  },
  {
    pokemon_species_id: 484,
    local_language_id: 12,
    name: '帕路奇亚',
    genus: '空间宝可梦'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 1,
    name: 'ヒードラン',
    genus: 'かこうポケモン'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 2,
    name: 'Heatran',
    genus: ''
  },
  {
    pokemon_species_id: 485,
    local_language_id: 3,
    name: '히드런',
    genus: '화구포켓몬'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 4,
    name: '席多藍恩',
    genus: '火山口寶可夢'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 5,
    name: 'Heatran',
    genus: 'Pokémon Caldeira'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 6,
    name: 'Heatran',
    genus: 'Lavadom'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 7,
    name: 'Heatran',
    genus: 'Pokémon Domo Lava'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 8,
    name: 'Heatran',
    genus: 'Pokémon Cratere'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 9,
    name: 'Heatran',
    genus: 'Lava Dome Pokémon'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 11,
    name: 'ヒードラン',
    genus: 'かこうポケモン'
  },
  {
    pokemon_species_id: 485,
    local_language_id: 12,
    name: '席多蓝恩',
    genus: '火山口宝可梦'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 1,
    name: 'レジギガス',
    genus: 'きょだいポケモン'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 2,
    name: 'Regigigas',
    genus: ''
  },
  {
    pokemon_species_id: 486,
    local_language_id: 3,
    name: '레지기가스',
    genus: '거대포켓몬'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 4,
    name: '雷吉奇卡斯',
    genus: '巨大寶可夢'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 5,
    name: 'Regigigas',
    genus: 'Pokémon Prodigieux'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 6,
    name: 'Regigigas',
    genus: 'Kolossal'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 7,
    name: 'Regigigas',
    genus: 'Pokémon Colosal'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 8,
    name: 'Regigigas',
    genus: 'Pokémon Colossale'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 9,
    name: 'Regigigas',
    genus: 'Colossal Pokémon'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 11,
    name: 'レジギガス',
    genus: 'きょだいポケモン'
  },
  {
    pokemon_species_id: 486,
    local_language_id: 12,
    name: '雷吉奇卡斯',
    genus: '巨大宝可梦'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 1,
    name: 'ギラティナ',
    genus: 'はんこつポケモン'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 2,
    name: 'Giratina',
    genus: ''
  },
  {
    pokemon_species_id: 487,
    local_language_id: 3,
    name: '기라티나',
    genus: '반골포켓몬'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 4,
    name: '騎拉帝納',
    genus: '反抗寶可夢'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 5,
    name: 'Giratina',
    genus: 'Pokémon Renégat'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 6,
    name: 'Giratina',
    genus: 'Rebell'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 7,
    name: 'Giratina',
    genus: 'Pokémon Renegado'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 8,
    name: 'Giratina',
    genus: 'Pokémon Ribelle'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 9,
    name: 'Giratina',
    genus: 'Renegade Pokémon'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 11,
    name: 'ギラティナ',
    genus: 'はんこつポケモン'
  },
  {
    pokemon_species_id: 487,
    local_language_id: 12,
    name: '骑拉帝纳',
    genus: '反抗宝可梦'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 1,
    name: 'クレセリア',
    genus: 'みかづきポケモン'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 2,
    name: 'Crecelia',
    genus: ''
  },
  {
    pokemon_species_id: 488,
    local_language_id: 3,
    name: '크레세리아',
    genus: '초승달포켓몬'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 4,
    name: '克雷色利亞',
    genus: '新月寶可夢'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 5,
    name: 'Cresselia',
    genus: 'Pokémon Lunaire'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 6,
    name: 'Cresselia',
    genus: 'Lunar'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 7,
    name: 'Cresselia',
    genus: 'Pokémon Lunar'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 8,
    name: 'Cresselia',
    genus: 'Pokémon Falcato'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 9,
    name: 'Cresselia',
    genus: 'Lunar Pokémon'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 11,
    name: 'クレセリア',
    genus: 'みかづきポケモン'
  },
  {
    pokemon_species_id: 488,
    local_language_id: 12,
    name: '克雷色利亚',
    genus: '新月宝可梦'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 1,
    name: 'フィオネ',
    genus: 'かいようポケモン'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 2,
    name: 'Phione',
    genus: ''
  },
  {
    pokemon_species_id: 489,
    local_language_id: 3,
    name: '피오네',
    genus: '해양포켓몬'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 4,
    name: '霏歐納',
    genus: '海洋寶可夢'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 5,
    name: 'Phione',
    genus: 'Pokémon Dérivenmer'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 6,
    name: 'Phione',
    genus: 'Seedrift'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 7,
    name: 'Phione',
    genus: 'Pokémon Marino'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 8,
    name: 'Phione',
    genus: 'Pokémon Oceanbondo'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 9,
    name: 'Phione',
    genus: 'Sea Drifter Pokémon'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 11,
    name: 'フィオネ',
    genus: 'かいようポケモン'
  },
  {
    pokemon_species_id: 489,
    local_language_id: 12,
    name: '霏欧纳',
    genus: '海洋宝可梦'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 1,
    name: 'マナフィ',
    genus: 'かいゆうポケモン'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 2,
    name: 'Manaphy',
    genus: ''
  },
  {
    pokemon_species_id: 490,
    local_language_id: 3,
    name: '마나피',
    genus: '회유포켓몬'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 4,
    name: '瑪納霏',
    genus: '洄游寶可夢'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 5,
    name: 'Manaphy',
    genus: 'Pokémon Voyagenmer'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 6,
    name: 'Manaphy',
    genus: 'Seefahrer'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 7,
    name: 'Manaphy',
    genus: 'Pokémon Náutico'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 8,
    name: 'Manaphy',
    genus: 'Pokémon Oceandante'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 9,
    name: 'Manaphy',
    genus: 'Seafaring Pokémon'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 11,
    name: 'マナフィ',
    genus: 'かいゆうポケモン'
  },
  {
    pokemon_species_id: 490,
    local_language_id: 12,
    name: '玛纳霏',
    genus: '回游宝可梦'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 1,
    name: 'ダークライ',
    genus: 'あんこくポケモン'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 2,
    name: 'Darkrai',
    genus: ''
  },
  {
    pokemon_species_id: 491,
    local_language_id: 3,
    name: '다크라이',
    genus: '암흑포켓몬'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 4,
    name: '達克萊伊',
    genus: '暗黑寶可夢'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 5,
    name: 'Darkrai',
    genus: 'Pokémon Noirtotal'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 6,
    name: 'Darkrai',
    genus: 'Dunkelnacht'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 7,
    name: 'Darkrai',
    genus: 'Pokémon Oscuridad'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 8,
    name: 'Darkrai',
    genus: 'Pokémon Neropesto'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 9,
    name: 'Darkrai',
    genus: 'Pitch-Black Pokémon'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 11,
    name: 'ダークライ',
    genus: 'あんこくポケモン'
  },
  {
    pokemon_species_id: 491,
    local_language_id: 12,
    name: '达克莱伊',
    genus: '暗黑宝可梦'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 1,
    name: 'シェイミ',
    genus: 'かんしゃポケモン'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 2,
    name: 'Shaymin',
    genus: ''
  },
  {
    pokemon_species_id: 492,
    local_language_id: 3,
    name: '쉐이미',
    genus: '감사포켓몬'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 4,
    name: '謝米',
    genus: '感謝寶可夢'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 5,
    name: 'Shaymin',
    genus: 'Pokémon Gratitude'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 6,
    name: 'Shaymin',
    genus: 'Dankbarkeit'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 7,
    name: 'Shaymin',
    genus: 'Pokémon Gratitud'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 8,
    name: 'Shaymin',
    genus: 'Pokémon Gratitudine'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 9,
    name: 'Shaymin',
    genus: 'Gratitude Pokémon'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 11,
    name: 'シェイミ',
    genus: 'かんしゃポケモン'
  },
  {
    pokemon_species_id: 492,
    local_language_id: 12,
    name: '谢米',
    genus: '感谢宝可梦'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 1,
    name: 'アルセウス',
    genus: 'そうぞうポケモン'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 2,
    name: 'Arceus',
    genus: ''
  },
  {
    pokemon_species_id: 493,
    local_language_id: 3,
    name: '아르세우스',
    genus: '창조포켓몬'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 4,
    name: '阿爾宙斯',
    genus: '創造寶可夢'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 5,
    name: 'Arceus',
    genus: 'Pokémon Alpha'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 6,
    name: 'Arceus',
    genus: 'Alpha'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 7,
    name: 'Arceus',
    genus: 'Pokémon Alfa'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 8,
    name: 'Arceus',
    genus: 'Pokémon Primevo'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 9,
    name: 'Arceus',
    genus: 'Alpha Pokémon'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 11,
    name: 'アルセウス',
    genus: 'そうぞうポケモン'
  },
  {
    pokemon_species_id: 493,
    local_language_id: 12,
    name: '阿尔宙斯',
    genus: '创造宝可梦'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 1,
    name: 'ビクティニ',
    genus: 'しょうりポケモン'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 3,
    name: '비크티니',
    genus: '승리포켓몬'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 4,
    name: '比克提尼',
    genus: '勝利寶可夢'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 5,
    name: 'Victini',
    genus: 'Pokémon Victoire'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 6,
    name: 'Victini',
    genus: 'Triumph'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 7,
    name: 'Victini',
    genus: 'Pokémon Victoria'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 8,
    name: 'Victini',
    genus: 'Pokémon Vittoria'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 9,
    name: 'Victini',
    genus: 'Victory Pokémon'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 11,
    name: 'ビクティニ',
    genus: 'しょうりポケモン'
  },
  {
    pokemon_species_id: 494,
    local_language_id: 12,
    name: '比克提尼',
    genus: '胜利宝可梦'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 1,
    name: 'ツタージャ',
    genus: 'くさへびポケモン'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 3,
    name: '주리비얀',
    genus: '풀뱀포켓몬'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 4,
    name: '藤藤蛇',
    genus: '草蛇寶可夢'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 5,
    name: 'Vipélierre',
    genus: 'Pokémon Serpenterbe'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 6,
    name: 'Serpifeu',
    genus: 'Grasschlange'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 7,
    name: 'Snivy',
    genus: 'Pokémon Serp. Hierba'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 8,
    name: 'Snivy',
    genus: 'Pokémon Serperba'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 9,
    name: 'Snivy',
    genus: 'Grass Snake Pokémon'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 11,
    name: 'ツタージャ',
    genus: 'くさへびポケモン'
  },
  {
    pokemon_species_id: 495,
    local_language_id: 12,
    name: '藤藤蛇',
    genus: '草蛇宝可梦'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 1,
    name: 'ジャノビー',
    genus: 'くさへびポケモン'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 3,
    name: '샤비',
    genus: '풀뱀포켓몬'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 4,
    name: '青藤蛇',
    genus: '草蛇寶可夢'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 5,
    name: 'Lianaja',
    genus: 'Pokémon Serpenterbe'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 6,
    name: 'Efoserp',
    genus: 'Grasschlange'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 7,
    name: 'Servine',
    genus: 'Pokémon Serp. Hierba'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 8,
    name: 'Servine',
    genus: 'Pokémon Serperba'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 9,
    name: 'Servine',
    genus: 'Grass Snake Pokémon'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 11,
    name: 'ジャノビー',
    genus: 'くさへびポケモン'
  },
  {
    pokemon_species_id: 496,
    local_language_id: 12,
    name: '青藤蛇',
    genus: '草蛇宝可梦'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 1,
    name: 'ジャローダ',
    genus: 'ロイヤルポケモン'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 3,
    name: '샤로다',
    genus: '로열포켓몬'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 4,
    name: '君主蛇',
    genus: '皇家寶可夢'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 5,
    name: 'Majaspic',
    genus: 'Pokémon Majestueux'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 6,
    name: 'Serpiroyal',
    genus: 'Hoheit'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 7,
    name: 'Serperior',
    genus: 'Pokémon Realeza'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 8,
    name: 'Serperior',
    genus: 'Pokémon Regale'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 9,
    name: 'Serperior',
    genus: 'Regal Pokémon'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 11,
    name: 'ジャローダ',
    genus: 'ロイヤルポケモン'
  },
  {
    pokemon_species_id: 497,
    local_language_id: 12,
    name: '君主蛇',
    genus: '皇家宝可梦'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 1,
    name: 'ポカブ',
    genus: 'ひぶたポケモン'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 3,
    name: '뚜꾸리',
    genus: '불돼지포켓몬'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 4,
    name: '暖暖豬',
    genus: '火豬寶可夢'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 5,
    name: 'Gruikui',
    genus: 'Pokémon Cochon Feu'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 6,
    name: 'Floink',
    genus: 'Feuerferkel'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 7,
    name: 'Tepig',
    genus: 'Pokémon Cerdo Fuego'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 8,
    name: 'Tepig',
    genus: 'Pokémon Suinfuoco'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 9,
    name: 'Tepig',
    genus: 'Fire Pig Pokémon'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 11,
    name: 'ポカブ',
    genus: 'ひぶたポケモン'
  },
  {
    pokemon_species_id: 498,
    local_language_id: 12,
    name: '暖暖猪',
    genus: '火猪宝可梦'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 1,
    name: 'チャオブー',
    genus: 'ひぶたポケモン'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 3,
    name: '차오꿀',
    genus: '불돼지포켓몬'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 4,
    name: '炒炒豬',
    genus: '火豬寶可夢'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 5,
    name: 'Grotichon',
    genus: 'Pokémon Cochon Feu'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 6,
    name: 'Ferkokel',
    genus: 'Feuerferkel'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 7,
    name: 'Pignite',
    genus: 'Pokémon Cerdo Fuego'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 8,
    name: 'Pignite',
    genus: 'Pokémon Suinfuoco'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 9,
    name: 'Pignite',
    genus: 'Fire Pig Pokémon'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 11,
    name: 'チャオブー',
    genus: 'ひぶたポケモン'
  },
  {
    pokemon_species_id: 499,
    local_language_id: 12,
    name: '炒炒猪',
    genus: '火猪宝可梦'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 1,
    name: 'エンブオー',
    genus: 'おおひぶたポケモン'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 3,
    name: '염무왕',
    genus: '큰불돼지포켓몬'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 4,
    name: '炎武王',
    genus: '大火豬寶可夢'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 5,
    name: 'Roitiflam',
    genus: 'Pokémon Grochon Feu'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 6,
    name: 'Flambirex',
    genus: 'Feuerschwein'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 7,
    name: 'Emboar',
    genus: 'Pokémon Cerdo Ígneo'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 8,
    name: 'Emboar',
    genus: 'Pokémon Suincendio'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 9,
    name: 'Emboar',
    genus: 'Mega Fire Pig Pokémon'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 11,
    name: 'エンブオー',
    genus: 'おおひぶたポケモン'
  },
  {
    pokemon_species_id: 500,
    local_language_id: 12,
    name: '炎武王',
    genus: '大火猪宝可梦'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 1,
    name: 'ミジュマル',
    genus: 'ラッコポケモン'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 3,
    name: '수댕이',
    genus: '해달포켓몬'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 4,
    name: '水水獺',
    genus: '海獺寶可夢'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 5,
    name: 'Moustillon',
    genus: 'Pokémon Loutre'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 6,
    name: 'Ottaro',
    genus: 'Otter'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 7,
    name: 'Oshawott',
    genus: 'Pokémon Nutria'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 8,
    name: 'Oshawott',
    genus: 'Pokémon Lontra'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 9,
    name: 'Oshawott',
    genus: 'Sea Otter Pokémon'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 11,
    name: 'ミジュマル',
    genus: 'ラッコポケモン'
  },
  {
    pokemon_species_id: 501,
    local_language_id: 12,
    name: '水水獭',
    genus: '海獭宝可梦'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 1,
    name: 'フタチマル',
    genus: 'しゅぎょうポケモン'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 3,
    name: '쌍검자비',
    genus: '수행포켓몬'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 4,
    name: '雙刃丸',
    genus: '修行寶可夢'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 5,
    name: 'Mateloutre',
    genus: 'Pokémon Entraînement'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 6,
    name: 'Zwottronin',
    genus: 'Schulung'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 7,
    name: 'Dewott',
    genus: 'Pokémon Superación'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 8,
    name: 'Dewott',
    genus: 'Pokémon Apprendista'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 9,
    name: 'Dewott',
    genus: 'Discipline Pokémon'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 11,
    name: 'フタチマル',
    genus: 'しゅぎょうポケモン'
  },
  {
    pokemon_species_id: 502,
    local_language_id: 12,
    name: '双刃丸',
    genus: '修行宝可梦'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 1,
    name: 'ダイケンキ',
    genus: 'かんろくポケモン'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 3,
    name: '대검귀',
    genus: '관록포켓몬'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 4,
    name: '大劍鬼',
    genus: '威嚴寶可夢'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 5,
    name: 'Clamiral',
    genus: 'Pokémon Dignitaire'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 6,
    name: 'Admurai',
    genus: 'Würde'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 7,
    name: 'Samurott',
    genus: 'Pokémon Majestuoso'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 8,
    name: 'Samurott',
    genus: 'Pokémon Dignità'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 9,
    name: 'Samurott',
    genus: 'Formidable Pokémon'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 11,
    name: 'ダイケンキ',
    genus: 'かんろくポケモン'
  },
  {
    pokemon_species_id: 503,
    local_language_id: 12,
    name: '大剑鬼',
    genus: '威严宝可梦'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 1,
    name: 'ミネズミ',
    genus: 'みはりポケモン'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 3,
    name: '보르쥐',
    genus: '망보기포켓몬'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 4,
    name: '探探鼠',
    genus: '放哨寶可夢'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 5,
    name: 'Ratentif',
    genus: 'Pokémon Espion'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 6,
    name: 'Nagelotz',
    genus: 'Späher'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 7,
    name: 'Patrat',
    genus: 'Pokémon Explorador'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 8,
    name: 'Patrat',
    genus: 'Pokémon Esplorante'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 9,
    name: 'Patrat',
    genus: 'Scout Pokémon'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 11,
    name: 'ミネズミ',
    genus: 'みはりポケモン'
  },
  {
    pokemon_species_id: 504,
    local_language_id: 12,
    name: '探探鼠',
    genus: '放哨宝可梦'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 1,
    name: 'ミルホッグ',
    genus: 'けいかいポケモン'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 3,
    name: '보르그',
    genus: '경계포켓몬'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 4,
    name: '步哨鼠',
    genus: '警戒寶可夢'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 5,
    name: 'Miradar',
    genus: 'Pokémon Vigilant'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 6,
    name: 'Kukmarda',
    genus: 'Wachsamkeit'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 7,
    name: 'Watchog',
    genus: 'Pokémon Alerta'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 8,
    name: 'Watchog',
    genus: 'Pokémon Sentinella'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 9,
    name: 'Watchog',
    genus: 'Lookout Pokémon'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 11,
    name: 'ミルホッグ',
    genus: 'けいかいポケモン'
  },
  {
    pokemon_species_id: 505,
    local_language_id: 12,
    name: '步哨鼠',
    genus: '警戒宝可梦'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 1,
    name: 'ヨーテリー',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 3,
    name: '요테리',
    genus: '강아지포켓몬'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 4,
    name: '小約克',
    genus: '小狗寶可夢'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 5,
    name: 'Ponchiot',
    genus: 'Pokémon Chiot'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 6,
    name: 'Yorkleff',
    genus: 'Hund'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 7,
    name: 'Lillipup',
    genus: 'Pokémon Perrito'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 8,
    name: 'Lillipup',
    genus: 'Pokémon Cagnolino'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 9,
    name: 'Lillipup',
    genus: 'Puppy Pokémon'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 11,
    name: 'ヨーテリー',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 506,
    local_language_id: 12,
    name: '小约克',
    genus: '小狗宝可梦'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 1,
    name: 'ハーデリア',
    genus: 'ちゅうけんポケモン'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 3,
    name: '하데리어',
    genus: '충견포켓몬'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 4,
    name: '哈約克',
    genus: '忠犬寶可夢'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 5,
    name: 'Ponchien',
    genus: 'Pokémon Chien Fidèle'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 6,
    name: 'Terribark',
    genus: 'Treuhund'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 7,
    name: 'Herdier',
    genus: 'Pokémon Leal'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 8,
    name: 'Herdier',
    genus: 'Pokémon Fedeltà'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 9,
    name: 'Herdier',
    genus: 'Loyal Dog Pokémon'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 11,
    name: 'ハーデリア',
    genus: 'ちゅうけんポケモン'
  },
  {
    pokemon_species_id: 507,
    local_language_id: 12,
    name: '哈约克',
    genus: '忠犬宝可梦'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 1,
    name: 'ムーランド',
    genus: 'かんだいポケモン'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 3,
    name: '바랜드',
    genus: '관대포켓몬'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 4,
    name: '長毛狗',
    genus: '寬大寶可夢'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 5,
    name: 'Mastouffe',
    genus: 'Pokémon Magnanime'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 6,
    name: 'Bissbark',
    genus: 'Großmut'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 7,
    name: 'Stoutland',
    genus: 'Pokémon Magnánimo'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 8,
    name: 'Stoutland',
    genus: 'Pokémon Generosità'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 9,
    name: 'Stoutland',
    genus: 'Big-Hearted Pokémon'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 11,
    name: 'ムーランド',
    genus: 'かんだいポケモン'
  },
  {
    pokemon_species_id: 508,
    local_language_id: 12,
    name: '长毛狗',
    genus: '宽大宝可梦'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 1,
    name: 'チョロネコ',
    genus: 'しょうわるポケモン'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 3,
    name: '쌔비냥',
    genus: '성악포켓몬'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 4,
    name: '扒手貓',
    genus: '壞心眼寶可夢'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 5,
    name: 'Chacripan',
    genus: 'Pokémon Scélérat'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 6,
    name: 'Felilou',
    genus: 'Schelm'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 7,
    name: 'Purrloin',
    genus: 'Pokémon Malicioso'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 8,
    name: 'Purrloin',
    genus: 'Pokémon Furbizia'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 9,
    name: 'Purrloin',
    genus: 'Devious Pokémon'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 11,
    name: 'チョロネコ',
    genus: 'しょうわるポケモン'
  },
  {
    pokemon_species_id: 509,
    local_language_id: 12,
    name: '扒手猫',
    genus: '坏心眼宝可梦'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 1,
    name: 'レパルダス',
    genus: 'れいこくポケモン'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 3,
    name: '레파르다스',
    genus: '냉혹포켓몬'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 4,
    name: '酷豹',
    genus: '冷酷寶可夢'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 5,
    name: 'Léopardus',
    genus: 'Pokémon Implacable'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 6,
    name: 'Kleoparda',
    genus: 'Gefühlskälte'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 7,
    name: 'Liepard',
    genus: 'Pokémon Calculador'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 8,
    name: 'Liepard',
    genus: 'Pokémon Sanguefreddo'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 9,
    name: 'Liepard',
    genus: 'Cruel Pokémon'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 11,
    name: 'レパルダス',
    genus: 'れいこくポケモン'
  },
  {
    pokemon_species_id: 510,
    local_language_id: 12,
    name: '酷豹',
    genus: '冷酷宝可梦'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 1,
    name: 'ヤナップ',
    genus: 'くさざるポケモン'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 3,
    name: '야나프',
    genus: '풀원숭이포켓몬'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 4,
    name: '花椰猴',
    genus: '草猴寶可夢'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 5,
    name: 'Feuillajou',
    genus: 'Pokémon Singe Herbe'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 6,
    name: 'Vegimak',
    genus: 'Grasaffe'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 7,
    name: 'Pansage',
    genus: 'Pokémon Mono Hierba'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 8,
    name: 'Pansage',
    genus: 'Pokémon Scimperba'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 9,
    name: 'Pansage',
    genus: 'Grass Monkey Pokémon'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 11,
    name: 'ヤナップ',
    genus: 'くさざるポケモン'
  },
  {
    pokemon_species_id: 511,
    local_language_id: 12,
    name: '花椰猴',
    genus: '草猴宝可梦'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 1,
    name: 'ヤナッキー',
    genus: 'とげざるポケモン'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 3,
    name: '야나키',
    genus: '가시원숭이포켓몬'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 4,
    name: '花椰猿',
    genus: '刺猴寶可夢'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 5,
    name: 'Feuiloutan',
    genus: 'Pokémon Singépine'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 6,
    name: 'Vegichita',
    genus: 'Stachelaffe'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 7,
    name: 'Simisage',
    genus: 'Pokémon Mono Pincho'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 8,
    name: 'Simisage',
    genus: 'Pokémon Spinpanzé'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 9,
    name: 'Simisage',
    genus: 'Thorn Monkey Pokémon'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 11,
    name: 'ヤナッキー',
    genus: 'とげざるポケモン'
  },
  {
    pokemon_species_id: 512,
    local_language_id: 12,
    name: '花椰猿',
    genus: '刺猴宝可梦'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 1,
    name: 'バオップ',
    genus: 'こうおんポケモン'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 3,
    name: '바오프',
    genus: '고온포켓몬'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 4,
    name: '爆香猴',
    genus: '高溫寶可夢'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 5,
    name: 'Flamajou',
    genus: 'Pokémon Brûlant'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 6,
    name: 'Grillmak',
    genus: 'Hitze'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 7,
    name: 'Pansear',
    genus: 'Pokémon Ardiente'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 8,
    name: 'Pansear',
    genus: 'Pokémon Testacalda'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 9,
    name: 'Pansear',
    genus: 'High Temp Pokémon'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 11,
    name: 'バオップ',
    genus: 'こうおんポケモン'
  },
  {
    pokemon_species_id: 513,
    local_language_id: 12,
    name: '爆香猴',
    genus: '高温宝可梦'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 1,
    name: 'バオッキー',
    genus: 'ひのこポケモン'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 3,
    name: '바오키',
    genus: '불티포켓몬'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 4,
    name: '爆香猿',
    genus: '火花寶可夢'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 5,
    name: 'Flamoutan',
    genus: 'Pokémon Braise'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 6,
    name: 'Grillchita',
    genus: 'Funkenregen'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 7,
    name: 'Simisear',
    genus: 'Pokémon Lumbre'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 8,
    name: 'Simisear',
    genus: 'Pokémon Sfavillante'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 9,
    name: 'Simisear',
    genus: 'Ember Pokémon'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 11,
    name: 'バオッキー',
    genus: 'ひのこポケモン'
  },
  {
    pokemon_species_id: 514,
    local_language_id: 12,
    name: '爆香猿',
    genus: '火花宝可梦'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 1,
    name: 'ヒヤップ',
    genus: 'みずかけポケモン'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 3,
    name: '앗차프',
    genus: '물뿌리기포켓몬'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 4,
    name: '冷水猴',
    genus: '潑水寶可夢'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 5,
    name: 'Flotajou',
    genus: 'Pokémon Jet d’Eau'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 6,
    name: 'Sodamak',
    genus: 'Wasserstrahl'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 7,
    name: 'Panpour',
    genus: 'Pokémon Salpicadura'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 8,
    name: 'Panpour',
    genus: 'Pokémon Annaffiatore'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 9,
    name: 'Panpour',
    genus: 'Spray Pokémon'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 11,
    name: 'ヒヤップ',
    genus: 'みずかけポケモン'
  },
  {
    pokemon_species_id: 515,
    local_language_id: 12,
    name: '冷水猴',
    genus: '泼水宝可梦'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 1,
    name: 'ヒヤッキー',
    genus: 'ほうすいポケモン'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 3,
    name: '앗차키',
    genus: '방수포켓몬'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 4,
    name: '冷水猿',
    genus: '放水寶可夢'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 5,
    name: 'Flotoutan',
    genus: 'Pokémon Drainage'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 6,
    name: 'Sodachita',
    genus: 'Drainage'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 7,
    name: 'Simipour',
    genus: 'Pokémon Drenaje'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 8,
    name: 'Simipour',
    genus: 'Pokémon Spruzzacqua'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 9,
    name: 'Simipour',
    genus: 'Geyser Pokémon'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 11,
    name: 'ヒヤッキー',
    genus: 'ほうすいポケモン'
  },
  {
    pokemon_species_id: 516,
    local_language_id: 12,
    name: '冷水猿',
    genus: '放水宝可梦'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 1,
    name: 'ムンナ',
    genus: 'ゆめくいポケモン'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 3,
    name: '몽나',
    genus: '꿈먹기포켓몬'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 4,
    name: '食夢夢',
    genus: '食夢寶可夢'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 5,
    name: 'Munna',
    genus: 'Pokémon Mangerêve'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 6,
    name: 'Somniam',
    genus: 'Traumfresser'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 7,
    name: 'Munna',
    genus: 'Pokémon Comesueños'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 8,
    name: 'Munna',
    genus: 'Pokémon Divorasogni'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 9,
    name: 'Munna',
    genus: 'Dream Eater Pokémon'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 11,
    name: 'ムンナ',
    genus: 'ゆめくいポケモン'
  },
  {
    pokemon_species_id: 517,
    local_language_id: 12,
    name: '食梦梦',
    genus: '食梦宝可梦'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 1,
    name: 'ムシャーナ',
    genus: 'ゆめうつつポケモン'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 3,
    name: '몽얌나',
    genus: '꿈결포켓몬'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 4,
    name: '夢夢蝕',
    genus: '半夢半醒寶可夢'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 5,
    name: 'Mushana',
    genus: 'Pokémon Rêveur'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 6,
    name: 'Somnivora',
    genus: 'Halbschlaf'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 7,
    name: 'Musharna',
    genus: 'Pokémon Duermevela'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 8,
    name: 'Musharna',
    genus: 'Pokémon Dormiveglia'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 9,
    name: 'Musharna',
    genus: 'Drowsing Pokémon'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 11,
    name: 'ムシャーナ',
    genus: 'ゆめうつつポケモン'
  },
  {
    pokemon_species_id: 518,
    local_language_id: 12,
    name: '梦梦蚀',
    genus: '半梦半醒宝可梦'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 1,
    name: 'マメパト',
    genus: 'こばとポケモン'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 3,
    name: '콩둘기',
    genus: '아기비둘기포켓몬'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 4,
    name: '豆豆鴿',
    genus: '小鴿寶可夢'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 5,
    name: 'Poichigeon',
    genus: 'Pokémon Tipigeon'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 6,
    name: 'Dusselgurr',
    genus: 'Täubchen'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 7,
    name: 'Pidove',
    genus: 'Pokémon Pichón'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 8,
    name: 'Pidove',
    genus: 'Pokémon Piccione'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 9,
    name: 'Pidove',
    genus: 'Tiny Pigeon Pokémon'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 11,
    name: 'マメパト',
    genus: 'こばとポケモン'
  },
  {
    pokemon_species_id: 519,
    local_language_id: 12,
    name: '豆豆鸽',
    genus: '小鸽宝可梦'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 1,
    name: 'ハトーボー',
    genus: 'のばとポケモン'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 3,
    name: '유토브',
    genus: '들비둘기포켓몬'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 4,
    name: '咕咕鴿',
    genus: '野鴿寶可夢'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 5,
    name: 'Colombeau',
    genus: 'Pokémon Sauvapigeon'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 6,
    name: 'Navitaub',
    genus: 'Wildtaube'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 7,
    name: 'Tranquill',
    genus: 'Pokémon Torcaz'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 8,
    name: 'Tranquill',
    genus: 'Pokémon Granpiccione'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 9,
    name: 'Tranquill',
    genus: 'Wild Pigeon Pokémon'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 11,
    name: 'ハトーボー',
    genus: 'のばとポケモン'
  },
  {
    pokemon_species_id: 520,
    local_language_id: 12,
    name: '咕咕鸽',
    genus: '野鸽宝可梦'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 1,
    name: 'ケンホロウ',
    genus: 'プライドポケモン'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 3,
    name: '켄호로우',
    genus: '프라이드포켓몬'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 4,
    name: '高傲雉雞',
    genus: '自尊心寶可夢'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 5,
    name: 'Déflaisan',
    genus: 'Pokémon Fier'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 6,
    name: 'Fasasnob',
    genus: 'Stolz'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 7,
    name: 'Unfezant',
    genus: 'Pokémon Altanero'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 8,
    name: 'Unfezant',
    genus: 'Pokémon Orgoglio'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 9,
    name: 'Unfezant',
    genus: 'Proud Pokémon'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 11,
    name: 'ケンホロウ',
    genus: 'プライドポケモン'
  },
  {
    pokemon_species_id: 521,
    local_language_id: 12,
    name: '高傲雉鸡',
    genus: '自尊心宝可梦'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 1,
    name: 'シママ',
    genus: 'たいでんポケモン'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 3,
    name: '줄뮤마',
    genus: '하전포켓몬'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 4,
    name: '斑斑馬',
    genus: '帶電寶可夢'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 5,
    name: 'Zébibron',
    genus: 'Pokémon Étincélec'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 6,
    name: 'Elezeba',
    genus: 'Hochspannung'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 7,
    name: 'Blitzle',
    genus: 'Pokémon Electrizado'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 8,
    name: 'Blitzle',
    genus: 'Pokémon Caricavolt'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 9,
    name: 'Blitzle',
    genus: 'Electrified Pokémon'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 11,
    name: 'シママ',
    genus: 'たいでんポケモン'
  },
  {
    pokemon_species_id: 522,
    local_language_id: 12,
    name: '斑斑马',
    genus: '带电宝可梦'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 1,
    name: 'ゼブライカ',
    genus: 'らいでんポケモン'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 3,
    name: '제브라이카',
    genus: '뇌전포켓몬'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 4,
    name: '雷電斑馬',
    genus: '雷電寶可夢'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 5,
    name: 'Zéblitz',
    genus: 'Pokémon Foudrélec'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 6,
    name: 'Zebritz',
    genus: 'Donnerkeil'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 7,
    name: 'Zebstrika',
    genus: 'Pokémon Rayo'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 8,
    name: 'Zebstrika',
    genus: 'Pokémon Saetta'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 9,
    name: 'Zebstrika',
    genus: 'Thunderbolt Pokémon'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 11,
    name: 'ゼブライカ',
    genus: 'らいでんポケモン'
  },
  {
    pokemon_species_id: 523,
    local_language_id: 12,
    name: '雷电斑马',
    genus: '雷电宝可梦'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 1,
    name: 'ダンゴロ',
    genus: 'マントルポケモン'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 3,
    name: '단굴',
    genus: '맨틀포켓몬'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 4,
    name: '石丸子',
    genus: '地幔寶可夢'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 5,
    name: 'Nodulithe',
    genus: 'Pokémon Manteau'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 6,
    name: 'Kiesling',
    genus: 'Erdmantel'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 7,
    name: 'Roggenrola',
    genus: 'Pokémon Manto'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 8,
    name: 'Roggenrola',
    genus: 'Pokémon Placca'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 9,
    name: 'Roggenrola',
    genus: 'Mantle Pokémon'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 11,
    name: 'ダンゴロ',
    genus: 'マントルポケモン'
  },
  {
    pokemon_species_id: 524,
    local_language_id: 12,
    name: '石丸子',
    genus: '地幔宝可梦'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 1,
    name: 'ガントル',
    genus: 'こうせきポケモン'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 3,
    name: '암트르',
    genus: '광석포켓몬'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 4,
    name: '地幔岩',
    genus: '礦石寶可夢'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 5,
    name: 'Géolithe',
    genus: 'Pokémon Minerai'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 6,
    name: 'Sedimantur',
    genus: 'Erz'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 7,
    name: 'Boldore',
    genus: 'Pokémon Mineral'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 8,
    name: 'Boldore',
    genus: 'Pokémon Minerale'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 9,
    name: 'Boldore',
    genus: 'Ore Pokémon'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 11,
    name: 'ガントル',
    genus: 'こうせきポケモン'
  },
  {
    pokemon_species_id: 525,
    local_language_id: 12,
    name: '地幔岩',
    genus: '矿石宝可梦'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 1,
    name: 'ギガイアス',
    genus: 'こうあつポケモン'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 3,
    name: '기가이어스',
    genus: '고압포켓몬'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 4,
    name: '龐岩怪',
    genus: '高壓寶可夢'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 5,
    name: 'Gigalithe',
    genus: 'Pokémon Surpression'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 6,
    name: 'Brockoloss',
    genus: 'Kompression'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 7,
    name: 'Gigalith',
    genus: 'Pokémon Presurizado'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 8,
    name: 'Gigalith',
    genus: 'Pokémon Pressionalta'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 9,
    name: 'Gigalith',
    genus: 'Compressed Pokémon'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 11,
    name: 'ギガイアス',
    genus: 'こうあつポケモン'
  },
  {
    pokemon_species_id: 526,
    local_language_id: 12,
    name: '庞岩怪',
    genus: '高压宝可梦'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 1,
    name: 'コロモリ',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 3,
    name: '또르박쥐',
    genus: '박쥐포켓몬'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 4,
    name: '滾滾蝙蝠',
    genus: '蝙蝠寶可夢'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 5,
    name: 'Chovsourir',
    genus: 'Pokémon Chovsouris'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 6,
    name: 'Fleknoil',
    genus: 'Fledermaus'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 7,
    name: 'Woobat',
    genus: 'Pokémon Murciélago'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 8,
    name: 'Woobat',
    genus: 'Pokémon Pipistrello'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 9,
    name: 'Woobat',
    genus: 'Bat Pokémon'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 11,
    name: 'コロモリ',
    genus: 'こうもりポケモン'
  },
  {
    pokemon_species_id: 527,
    local_language_id: 12,
    name: '滚滚蝙蝠',
    genus: '蝙蝠宝可梦'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 1,
    name: 'ココロモリ',
    genus: 'きゅうあいポケモン'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 3,
    name: '맘박쥐',
    genus: '구애포켓몬'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 4,
    name: '心蝙蝠',
    genus: '求愛寶可夢'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 5,
    name: 'Rhinolove',
    genus: 'Pokémon Cupidon'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 6,
    name: 'Fletiamo',
    genus: 'Balz'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 7,
    name: 'Swoobat',
    genus: 'Pokémon Galante'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 8,
    name: 'Swoobat',
    genus: 'Pokémon Cercamore'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 9,
    name: 'Swoobat',
    genus: 'Courting Pokémon'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 11,
    name: 'ココロモリ',
    genus: 'きゅうあいポケモン'
  },
  {
    pokemon_species_id: 528,
    local_language_id: 12,
    name: '心蝙蝠',
    genus: '求爱宝可梦'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 1,
    name: 'モグリュー',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 3,
    name: '두더류',
    genus: '두더지포켓몬'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 4,
    name: '螺釘地鼠',
    genus: '鼴鼠寶可夢'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 5,
    name: 'Rototaupe',
    genus: 'Pokémon Taupe'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 6,
    name: 'Rotomurf',
    genus: 'Maulwurf'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 7,
    name: 'Drilbur',
    genus: 'Pokémon Topo'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 8,
    name: 'Drilbur',
    genus: 'Pokémon Talpa'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 9,
    name: 'Drilbur',
    genus: 'Mole Pokémon'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 11,
    name: 'モグリュー',
    genus: 'もぐらポケモン'
  },
  {
    pokemon_species_id: 529,
    local_language_id: 12,
    name: '螺钉地鼠',
    genus: '鼹鼠宝可梦'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 1,
    name: 'ドリュウズ',
    genus: 'ちていポケモン'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 3,
    name: '몰드류',
    genus: '땅밑포켓몬'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 4,
    name: '龍頭地鼠',
    genus: '地底寶可夢'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 5,
    name: 'Minotaupe',
    genus: 'Pokémon Souterrain'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 6,
    name: 'Stalobor',
    genus: 'Untergrund'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 7,
    name: 'Excadrill',
    genus: 'Pokémon Subterráneo'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 8,
    name: 'Excadrill',
    genus: 'Pokémon Sottoterra'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 9,
    name: 'Excadrill',
    genus: 'Subterrene Pokémon'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 11,
    name: 'ドリュウズ',
    genus: 'ちていポケモン'
  },
  {
    pokemon_species_id: 530,
    local_language_id: 12,
    name: '龙头地鼠',
    genus: '地底宝可梦'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 1,
    name: 'タブンネ',
    genus: 'ヒヤリングポケモン'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 3,
    name: '다부니',
    genus: '히어링포켓몬'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 4,
    name: '差不多娃娃',
    genus: '聽力寶可夢'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 5,
    name: 'Nanméouïe',
    genus: 'Pokémon Audition'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 6,
    name: 'Ohrdoch',
    genus: 'Gehör'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 7,
    name: 'Audino',
    genus: 'Pokémon Escucha'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 8,
    name: 'Audino',
    genus: 'Pokémon Ascolto'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 9,
    name: 'Audino',
    genus: 'Hearing Pokémon'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 11,
    name: 'タブンネ',
    genus: 'ヒヤリングポケモン'
  },
  {
    pokemon_species_id: 531,
    local_language_id: 12,
    name: '差不多娃娃',
    genus: '听力宝可梦'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 1,
    name: 'ドッコラー',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 3,
    name: '으랏차',
    genus: '근골포켓몬'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 4,
    name: '搬運小匠',
    genus: '筋骨寶可夢'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 5,
    name: 'Charpenti',
    genus: 'Pokémon Costaud'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 6,
    name: 'Praktibalk',
    genus: 'Muskel'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 7,
    name: 'Timburr',
    genus: 'Pokémon Musculoso'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 8,
    name: 'Timburr',
    genus: 'Pokémon Forzaimmane'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 9,
    name: 'Timburr',
    genus: 'Muscular Pokémon'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 11,
    name: 'ドッコラー',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 532,
    local_language_id: 12,
    name: '搬运小匠',
    genus: '筋骨宝可梦'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 1,
    name: 'ドテッコツ',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 3,
    name: '토쇠골',
    genus: '근골포켓몬'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 4,
    name: '鐵骨土人',
    genus: '筋骨寶可夢'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 5,
    name: 'Ouvrifier',
    genus: 'Pokémon Costaud'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 6,
    name: 'Strepoli',
    genus: 'Muskel'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 7,
    name: 'Gurdurr',
    genus: 'Pokémon Musculoso'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 8,
    name: 'Gurdurr',
    genus: 'Pokémon Forzaimmane'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 9,
    name: 'Gurdurr',
    genus: 'Muscular Pokémon'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 11,
    name: 'ドテッコツ',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 533,
    local_language_id: 12,
    name: '铁骨土人',
    genus: '筋骨宝可梦'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 1,
    name: 'ローブシン',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 3,
    name: '노보청',
    genus: '근골포켓몬'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 4,
    name: '修建老匠',
    genus: '筋骨寶可夢'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 5,
    name: 'Bétochef',
    genus: 'Pokémon Costaud'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 6,
    name: 'Meistagrif',
    genus: 'Muskel'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 7,
    name: 'Conkeldurr',
    genus: 'Pokémon Musculoso'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 8,
    name: 'Conkeldurr',
    genus: 'Pokémon Forzaimmane'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 9,
    name: 'Conkeldurr',
    genus: 'Muscular Pokémon'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 11,
    name: 'ローブシン',
    genus: 'きんこつポケモン'
  },
  {
    pokemon_species_id: 534,
    local_language_id: 12,
    name: '修建老匠',
    genus: '筋骨宝可梦'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 1,
    name: 'オタマロ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 3,
    name: '동챙이',
    genus: '올챙이포켓몬'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 4,
    name: '圓蝌蚪',
    genus: '蝌蚪寶可夢'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 5,
    name: 'Tritonde',
    genus: 'Pokémon Têtard'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 6,
    name: 'Schallquap',
    genus: 'Kaulquappe'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 7,
    name: 'Tympole',
    genus: 'Pokémon Renacuajo'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 8,
    name: 'Tympole',
    genus: 'Pokémon Girino'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 9,
    name: 'Tympole',
    genus: 'Tadpole Pokémon'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 11,
    name: 'オタマロ',
    genus: 'おたまポケモン'
  },
  {
    pokemon_species_id: 535,
    local_language_id: 12,
    name: '圆蝌蚪',
    genus: '蝌蚪宝可梦'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 1,
    name: 'ガマガル',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 3,
    name: '두까비',
    genus: '진동포켓몬'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 4,
    name: '藍蟾蜍',
    genus: '震動寶可夢'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 5,
    name: 'Batracné',
    genus: 'Pokémon Vibration'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 6,
    name: 'Mebrana',
    genus: 'Vibration'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 7,
    name: 'Palpitoad',
    genus: 'Pokémon Vibrante'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 8,
    name: 'Palpitoad',
    genus: 'Pokémon Vibrazione'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 9,
    name: 'Palpitoad',
    genus: 'Vibration Pokémon'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 11,
    name: 'ガマガル',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 536,
    local_language_id: 12,
    name: '蓝蟾蜍',
    genus: '振动宝可梦'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 1,
    name: 'ガマゲロゲ',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 3,
    name: '두빅굴',
    genus: '진동포켓몬'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 4,
    name: '蟾蜍王',
    genus: '震動寶可夢'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 5,
    name: 'Crapustule',
    genus: 'Pokémon Vibration'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 6,
    name: 'Branawarz',
    genus: 'Vibration'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 7,
    name: 'Seismitoad',
    genus: 'Pokémon Vibrante'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 8,
    name: 'Seismitoad',
    genus: 'Pokémon Vibrazione'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 9,
    name: 'Seismitoad',
    genus: 'Vibration Pokémon'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 11,
    name: 'ガマゲロゲ',
    genus: 'しんどうポケモン'
  },
  {
    pokemon_species_id: 537,
    local_language_id: 12,
    name: '蟾蜍王',
    genus: '振动宝可梦'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 1,
    name: 'ナゲキ',
    genus: 'じゅうどうポケモン'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 3,
    name: '던지미',
    genus: '유도포켓몬'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 4,
    name: '投摔鬼',
    genus: '柔道寶可夢'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 5,
    name: 'Judokrak',
    genus: 'Pokémon Judo'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 6,
    name: 'Jiutesto',
    genus: 'Judo'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 7,
    name: 'Throh',
    genus: 'Pokémon Judo'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 8,
    name: 'Throh',
    genus: 'Pokémon Judo'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 9,
    name: 'Throh',
    genus: 'Judo Pokémon'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 11,
    name: 'ナゲキ',
    genus: 'じゅうどうポケモン'
  },
  {
    pokemon_species_id: 538,
    local_language_id: 12,
    name: '投摔鬼',
    genus: '柔道宝可梦'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 1,
    name: 'ダゲキ',
    genus: 'からてポケモン'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 3,
    name: '타격귀',
    genus: '태권도포켓몬'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 4,
    name: '打擊鬼',
    genus: '空手道寶可夢'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 5,
    name: 'Karaclée',
    genus: 'Pokémon Karaté'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 6,
    name: 'Karadonis',
    genus: 'Karate'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 7,
    name: 'Sawk',
    genus: 'Pokémon Kárate'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 8,
    name: 'Sawk',
    genus: 'Pokémon Karate'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 9,
    name: 'Sawk',
    genus: 'Karate Pokémon'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 11,
    name: 'ダゲキ',
    genus: 'からてポケモン'
  },
  {
    pokemon_species_id: 539,
    local_language_id: 12,
    name: '打击鬼',
    genus: '空手道宝可梦'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 1,
    name: 'クルミル',
    genus: 'さいほうポケモン'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 3,
    name: '두르보',
    genus: '재봉포켓몬'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 4,
    name: '蟲寶包',
    genus: '裁縫寶可夢'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 5,
    name: 'Larveyette',
    genus: 'Pokémon Couture'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 6,
    name: 'Strawickl',
    genus: 'Schneider'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 7,
    name: 'Sewaddle',
    genus: 'Pokémon Sastre'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 8,
    name: 'Sewaddle',
    genus: 'Pokémon Grancucito'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 9,
    name: 'Sewaddle',
    genus: 'Sewing Pokémon'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 11,
    name: 'クルミル',
    genus: 'さいほうポケモン'
  },
  {
    pokemon_species_id: 540,
    local_language_id: 12,
    name: '虫宝包',
    genus: '裁缝宝可梦'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 1,
    name: 'クルマユ',
    genus: 'はごもりポケモン'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 3,
    name: '두르쿤',
    genus: '잎숨기포켓몬'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 4,
    name: '寶包繭',
    genus: '足不出葉寶可夢'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 5,
    name: 'Couverdure',
    genus: 'Pokémon Capefeuille'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 6,
    name: 'Folikon',
    genus: 'Wickelblatt'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 7,
    name: 'Swadloon',
    genus: 'Pokémon Arropado'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 8,
    name: 'Swadloon',
    genus: 'Pokémon Coprifoglia'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 9,
    name: 'Swadloon',
    genus: 'Leaf-Wrapped Pokémon'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 11,
    name: 'クルマユ',
    genus: 'はごもりポケモン'
  },
  {
    pokemon_species_id: 541,
    local_language_id: 12,
    name: '宝包茧',
    genus: '足不出叶宝可梦'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 1,
    name: 'ハハコモリ',
    genus: 'こそだてポケモン'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 3,
    name: '모아머',
    genus: '육아포켓몬'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 4,
    name: '保母蟲',
    genus: '育兒寶可夢'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 5,
    name: 'Manternel',
    genus: 'Pokémon Précepteur'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 6,
    name: 'Matrifol',
    genus: 'Kinderpflege'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 7,
    name: 'Leavanny',
    genus: 'Pokémon Cuidador'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 8,
    name: 'Leavanny',
    genus: 'Pokémon Balia'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 9,
    name: 'Leavanny',
    genus: 'Nurturing Pokémon'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 11,
    name: 'ハハコモリ',
    genus: 'こそだてポケモン'
  },
  {
    pokemon_species_id: 542,
    local_language_id: 12,
    name: '保姆虫',
    genus: '育儿宝可梦'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 1,
    name: 'フシデ',
    genus: 'ムカデポケモン'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 3,
    name: '마디네',
    genus: '지네포켓몬'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 4,
    name: '百足蜈蚣',
    genus: '蜈蚣寶可夢'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 5,
    name: 'Venipatte',
    genus: 'Pokémon Chilopode'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 6,
    name: 'Toxiped',
    genus: 'Tausendfüßer'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 7,
    name: 'Venipede',
    genus: 'Pokémon Ciempiés'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 8,
    name: 'Venipede',
    genus: 'Pokémon Centipede'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 9,
    name: 'Venipede',
    genus: 'Centipede Pokémon'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 11,
    name: 'フシデ',
    genus: 'ムカデポケモン'
  },
  {
    pokemon_species_id: 543,
    local_language_id: 12,
    name: '百足蜈蚣',
    genus: '蜈蚣宝可梦'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 1,
    name: 'ホイーガ',
    genus: 'まゆムカデポケモン'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 3,
    name: '휠구',
    genus: '눈썹지네포켓몬'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 4,
    name: '車輪毬',
    genus: '繭蜈蚣寶可夢'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 5,
    name: 'Scobolide',
    genus: 'Pokémon Coconplopode'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 6,
    name: 'Rollum',
    genus: 'Kokonfüßer'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 7,
    name: 'Whirlipede',
    genus: 'Pokémon Pupaciempiés'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 8,
    name: 'Whirlipede',
    genus: 'Pokémon Rotopede'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 9,
    name: 'Whirlipede',
    genus: 'Curlipede Pokémon'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 11,
    name: 'ホイーガ',
    genus: 'まゆムカデポケモン'
  },
  {
    pokemon_species_id: 544,
    local_language_id: 12,
    name: '车轮球',
    genus: '茧蜈蚣宝可梦'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 1,
    name: 'ペンドラー',
    genus: 'メガムカデポケモン'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 3,
    name: '펜드라',
    genus: '메가지네포켓몬'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 4,
    name: '蜈蚣王',
    genus: '巨蜈蚣寶可夢'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 5,
    name: 'Brutapode',
    genus: 'Pokémon Mégaplopode'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 6,
    name: 'Cerapendra',
    genus: 'Riesenfüßer'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 7,
    name: 'Scolipede',
    genus: 'Pokémon Megaciempiés'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 8,
    name: 'Scolipede',
    genus: 'Pokémon Megapede'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 9,
    name: 'Scolipede',
    genus: 'Megapede Pokémon'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 11,
    name: 'ペンドラー',
    genus: 'メガムカデポケモン'
  },
  {
    pokemon_species_id: 545,
    local_language_id: 12,
    name: '蜈蚣王',
    genus: '巨蜈蚣宝可梦'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 1,
    name: 'モンメン',
    genus: 'わたたまポケモン'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 3,
    name: '소미안',
    genus: '솜뭉치포켓몬'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 4,
    name: '木棉球',
    genus: '棉球寶可夢'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 5,
    name: 'Doudouvet',
    genus: 'Pokémon Boule Coton'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 6,
    name: 'Waumboll',
    genus: 'Wattebausch'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 7,
    name: 'Cottonee',
    genus: 'Pokémon Bolalgodón'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 8,
    name: 'Cottonee',
    genus: 'Pokémon Cotonpalla'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 9,
    name: 'Cottonee',
    genus: 'Cotton Puff Pokémon'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 11,
    name: 'モンメン',
    genus: 'わたたまポケモン'
  },
  {
    pokemon_species_id: 546,
    local_language_id: 12,
    name: '木棉球',
    genus: '棉球宝可梦'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 1,
    name: 'エルフーン',
    genus: 'かぜかくれポケモン'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 3,
    name: '엘풍',
    genus: '바람숨기포켓몬'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 4,
    name: '風妖精',
    genus: '風隱寶可夢'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 5,
    name: 'Farfaduvet',
    genus: 'Pokémon Vole Vent'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 6,
    name: 'Elfun',
    genus: 'Windschatten'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 7,
    name: 'Whimsicott',
    genus: 'Pokémon Vuelalviento'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 8,
    name: 'Whimsicott',
    genus: 'Pokémon Spiffero'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 9,
    name: 'Whimsicott',
    genus: 'Windveiled Pokémon'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 11,
    name: 'エルフーン',
    genus: 'かぜかくれポケモン'
  },
  {
    pokemon_species_id: 547,
    local_language_id: 12,
    name: '风妖精',
    genus: '风隐宝可梦'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 1,
    name: 'チュリネ',
    genus: 'ねっこポケモン'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 3,
    name: '치릴리',
    genus: '뿌리포켓몬'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 4,
    name: '百合根娃娃',
    genus: '根莖寶可夢'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 5,
    name: 'Chlorobule',
    genus: 'Pokémon Racine'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 6,
    name: 'Lilminip',
    genus: 'Wurzel'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 7,
    name: 'Petilil',
    genus: 'Pokémon Bulbo'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 8,
    name: 'Petilil',
    genus: 'Pokémon Radice'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 9,
    name: 'Petilil',
    genus: 'Bulb Pokémon'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 11,
    name: 'チュリネ',
    genus: 'ねっこポケモン'
  },
  {
    pokemon_species_id: 548,
    local_language_id: 12,
    name: '百合根娃娃',
    genus: '根茎宝可梦'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 1,
    name: 'ドレディア',
    genus: 'はなかざりポケモン'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 3,
    name: '드레디어',
    genus: '꽃장식포켓몬'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 4,
    name: '裙兒小姐',
    genus: '花飾寶可夢'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 5,
    name: 'Fragilady',
    genus: 'Pokémon Chef-Fleur'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 6,
    name: 'Dressella',
    genus: 'Blumenzier'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 7,
    name: 'Lilligant',
    genus: 'Pokémon Adornofloral'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 8,
    name: 'Lilligant',
    genus: 'Pokémon Fiorfronzolo'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 9,
    name: 'Lilligant',
    genus: 'Flowering Pokémon'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 11,
    name: 'ドレディア',
    genus: 'はなかざりポケモン'
  },
  {
    pokemon_species_id: 549,
    local_language_id: 12,
    name: '裙儿小姐',
    genus: '花饰宝可梦'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 1,
    name: 'バスラオ',
    genus: 'らんぼうポケモン'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 3,
    name: '배쓰나이',
    genus: '흉포포켓몬'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 4,
    name: '野蠻鱸魚',
    genus: '粗暴寶可夢'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 5,
    name: 'Bargantua',
    genus: 'Pokémon Violent'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 6,
    name: 'Barschuft',
    genus: 'Grobheit'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 7,
    name: 'Basculin',
    genus: 'Pokémon Violento'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 8,
    name: 'Basculin',
    genus: 'Pokémon Irruenza'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 9,
    name: 'Basculin',
    genus: 'Hostile Pokémon'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 11,
    name: 'バスラオ',
    genus: 'らんぼうポケモン'
  },
  {
    pokemon_species_id: 550,
    local_language_id: 12,
    name: '野蛮鲈鱼',
    genus: '粗暴宝可梦'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 1,
    name: 'メグロコ',
    genus: 'さばくワニポケモン'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 3,
    name: '깜눈크',
    genus: '사막악어포켓몬'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 4,
    name: '黑眼鱷',
    genus: '沙漠鱷魚寶可夢'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 5,
    name: 'Mascaïman',
    genus: 'Pokémon Croco Sable'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 6,
    name: 'Ganovil',
    genus: 'Wüstenkroko'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 7,
    name: 'Sandile',
    genus: 'Pokémon Desierdrilo'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 8,
    name: 'Sandile',
    genus: 'Pokémon Sabbiadrillo'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 9,
    name: 'Sandile',
    genus: 'Desert Croc Pokémon'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 11,
    name: 'メグロコ',
    genus: 'さばくワニポケモン'
  },
  {
    pokemon_species_id: 551,
    local_language_id: 12,
    name: '黑眼鳄',
    genus: '沙漠鳄鱼宝可梦'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 1,
    name: 'ワルビル',
    genus: 'さばくワニポケモン'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 3,
    name: '악비르',
    genus: '사막악어포켓몬'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 4,
    name: '混混鱷',
    genus: '沙漠鱷魚寶可夢'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 5,
    name: 'Escroco',
    genus: 'Pokémon Croco Sable'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 6,
    name: 'Rokkaiman',
    genus: 'Wüstenkroko'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 7,
    name: 'Krokorok',
    genus: 'Pokémon Desierdrilo'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 8,
    name: 'Krokorok',
    genus: 'Pokémon Sabbiadrillo'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 9,
    name: 'Krokorok',
    genus: 'Desert Croc Pokémon'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 11,
    name: 'ワルビル',
    genus: 'さばくワニポケモン'
  },
  {
    pokemon_species_id: 552,
    local_language_id: 12,
    name: '混混鳄',
    genus: '沙漠鳄鱼宝可梦'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 1,
    name: 'ワルビアル',
    genus: 'いかくポケモン'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 3,
    name: '악비아르',
    genus: '위협포켓몬'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 4,
    name: '流氓鱷',
    genus: '威嚇寶可夢'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 5,
    name: 'Crocorible',
    genus: 'Pokémon Intimidation'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 6,
    name: 'Rabigator',
    genus: 'Abschreckung'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 7,
    name: 'Krookodile',
    genus: 'Pokémon Amenazador'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 8,
    name: 'Krookodile',
    genus: 'Pokémon Minaccia'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 9,
    name: 'Krookodile',
    genus: 'Intimidation Pokémon'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 11,
    name: 'ワルビアル',
    genus: 'いかくポケモン'
  },
  {
    pokemon_species_id: 553,
    local_language_id: 12,
    name: '流氓鳄',
    genus: '威吓宝可梦'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 1,
    name: 'ダルマッカ',
    genus: 'だるまポケモン'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 3,
    name: '달막화',
    genus: '달마포켓몬'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 4,
    name: '火紅不倒翁',
    genus: '不倒翁寶可夢'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 5,
    name: 'Darumarond',
    genus: 'Pokémon Daruma'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 6,
    name: 'Flampion',
    genus: 'Lampion'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 7,
    name: 'Darumaka',
    genus: 'Pokémon Daruma'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 8,
    name: 'Darumaka',
    genus: 'Pokémon Daruma'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 9,
    name: 'Darumaka',
    genus: 'Zen Charm Pokémon'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 11,
    name: 'ダルマッカ',
    genus: 'だるまポケモン'
  },
  {
    pokemon_species_id: 554,
    local_language_id: 12,
    name: '火红不倒翁',
    genus: '不倒翁宝可梦'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 1,
    name: 'ヒヒダルマ',
    genus: 'えんじょうポケモン'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 3,
    name: '불비달마',
    genus: '염상포켓몬'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 4,
    name: '達摩狒狒',
    genus: '爆燃寶可夢'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 5,
    name: 'Darumacho',
    genus: 'Pokémon Enflammé'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 6,
    name: 'Flampivian',
    genus: 'Lichterloh'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 7,
    name: 'Darmanitan',
    genus: 'Pokémon Candente'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 8,
    name: 'Darmanitan',
    genus: 'Pokémon Altefiamme'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 9,
    name: 'Darmanitan',
    genus: 'Blazing Pokémon'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 11,
    name: 'ヒヒダルマ',
    genus: 'えんじょうポケモン'
  },
  {
    pokemon_species_id: 555,
    local_language_id: 12,
    name: '达摩狒狒',
    genus: '爆燃宝可梦'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 1,
    name: 'マラカッチ',
    genus: 'サボテンポケモン'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 3,
    name: '마라카치',
    genus: '선인장포켓몬'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 4,
    name: '沙鈴仙人掌',
    genus: '仙人掌寶可夢'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 5,
    name: 'Maracachi',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 6,
    name: 'Maracamba',
    genus: 'Kaktus'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 7,
    name: 'Maractus',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 8,
    name: 'Maractus',
    genus: 'Pokémon Cactus'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 9,
    name: 'Maractus',
    genus: 'Cactus Pokémon'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 11,
    name: 'マラカッチ',
    genus: 'サボテンポケモン'
  },
  {
    pokemon_species_id: 556,
    local_language_id: 12,
    name: '沙铃仙人掌',
    genus: '仙人掌宝可梦'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 1,
    name: 'イシズマイ',
    genus: 'いしやどポケモン'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 3,
    name: '돌살이',
    genus: '돌집포켓몬'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 4,
    name: '石居蟹',
    genus: '石居寶可夢'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 5,
    name: 'Crabicoque',
    genus: 'Pokémon Lithicole'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 6,
    name: 'Lithomith',
    genus: 'Steinhaus'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 7,
    name: 'Dwebble',
    genus: 'Pokémon Casapiedra'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 8,
    name: 'Dwebble',
    genus: 'Pokémon Pietracasa'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 9,
    name: 'Dwebble',
    genus: 'Rock Inn Pokémon'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 11,
    name: 'イシズマイ',
    genus: 'いしやどポケモン'
  },
  {
    pokemon_species_id: 557,
    local_language_id: 12,
    name: '石居蟹',
    genus: '石居宝可梦'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 1,
    name: 'イワパレス',
    genus: 'いわやどポケモン'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 3,
    name: '암팰리스',
    genus: '바위집포켓몬'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 4,
    name: '岩殿居蟹',
    genus: '岩居寶可夢'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 5,
    name: 'Crabaraque',
    genus: 'Pokémon Lapidicole'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 6,
    name: 'Castellith',
    genus: 'Felshaus'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 7,
    name: 'Crustle',
    genus: 'Pokémon Casarroca'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 8,
    name: 'Crustle',
    genus: 'Pokémon Scogliocasa'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 9,
    name: 'Crustle',
    genus: 'Stone Home Pokémon'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 11,
    name: 'イワパレス',
    genus: 'いわやどポケモン'
  },
  {
    pokemon_species_id: 558,
    local_language_id: 12,
    name: '岩殿居蟹',
    genus: '岩居宝可梦'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 1,
    name: 'ズルッグ',
    genus: 'だっぴポケモン'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 3,
    name: '곤율랭',
    genus: '탈피포켓몬'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 4,
    name: '滑滑小子',
    genus: '蛻皮寶可夢'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 5,
    name: 'Baggiguane',
    genus: 'Pokémon Mue'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 6,
    name: 'Zurrokex',
    genus: 'Hautwechsel'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 7,
    name: 'Scraggy',
    genus: 'Pokémon Mudapiel'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 8,
    name: 'Scraggy',
    genus: 'Pokémon Mutapelle'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 9,
    name: 'Scraggy',
    genus: 'Shedding Pokémon'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 11,
    name: 'ズルッグ',
    genus: 'だっぴポケモン'
  },
  {
    pokemon_species_id: 559,
    local_language_id: 12,
    name: '滑滑小子',
    genus: '蜕皮宝可梦'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 1,
    name: 'ズルズキン',
    genus: 'あくとうポケモン'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 3,
    name: '곤율거니',
    genus: '악당포켓몬'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 4,
    name: '頭巾混混',
    genus: '惡黨寶可夢'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 5,
    name: 'Baggaïd',
    genus: 'Pokémon Gang'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 6,
    name: 'Irokex',
    genus: 'Halunke'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 7,
    name: 'Scrafty',
    genus: 'Pokémon Gamberro'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 8,
    name: 'Scrafty',
    genus: 'Pokémon Furfante'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 9,
    name: 'Scrafty',
    genus: 'Hoodlum Pokémon'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 11,
    name: 'ズルズキン',
    genus: 'あくとうポケモン'
  },
  {
    pokemon_species_id: 560,
    local_language_id: 12,
    name: '头巾混混',
    genus: '恶党宝可梦'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 1,
    name: 'シンボラー',
    genus: 'とりもどきポケモン'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 3,
    name: '심보러',
    genus: '흡사새포켓몬'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 4,
    name: '象徵鳥',
    genus: '似鳥寶可夢'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 5,
    name: 'Cryptéro',
    genus: 'Pokémon Similoiseau'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 6,
    name: 'Symvolara',
    genus: 'Vogelgleich'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 7,
    name: 'Sigilyph',
    genus: 'Pokémon Pseudopájaro'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 8,
    name: 'Sigilyph',
    genus: 'Pokémon Pseuduccello'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 9,
    name: 'Sigilyph',
    genus: 'Avianoid Pokémon'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 11,
    name: 'シンボラー',
    genus: 'とりもどきポケモン'
  },
  {
    pokemon_species_id: 561,
    local_language_id: 12,
    name: '象征鸟',
    genus: '似鸟宝可梦'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 1,
    name: 'デスマス',
    genus: 'たましいポケモン'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 3,
    name: '데스마스',
    genus: '영혼포켓몬'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 4,
    name: '哭哭面具',
    genus: '魂寶可夢'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 5,
    name: 'Tutafeh',
    genus: 'Pokémon Âme'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 6,
    name: 'Makabaja',
    genus: 'Seele'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 7,
    name: 'Yamask',
    genus: 'Pokémon Espíritu'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 8,
    name: 'Yamask',
    genus: 'Pokémon Fatuanima'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 9,
    name: 'Yamask',
    genus: 'Spirit Pokémon'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 11,
    name: 'デスマス',
    genus: 'たましいポケモン'
  },
  {
    pokemon_species_id: 562,
    local_language_id: 12,
    name: '哭哭面具',
    genus: '魂宝可梦'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 1,
    name: 'デスカーン',
    genus: 'かんおけポケモン'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 3,
    name: '데스니칸',
    genus: '관포켓몬'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 4,
    name: '死神棺',
    genus: '棺木寶可夢'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 5,
    name: 'Tutankafer',
    genus: 'Pokémon Cercueil'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 6,
    name: 'Echnatoll',
    genus: 'Sarkophag'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 7,
    name: 'Cofagrigus',
    genus: 'Pokémon Sepultura'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 8,
    name: 'Cofagrigus',
    genus: 'Pokémon Bara'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 9,
    name: 'Cofagrigus',
    genus: 'Coffin Pokémon'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 11,
    name: 'デスカーン',
    genus: 'かんおけポケモン'
  },
  {
    pokemon_species_id: 563,
    local_language_id: 12,
    name: '死神棺',
    genus: '棺木宝可梦'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 1,
    name: 'プロトーガ',
    genus: 'こだいがめポケモン'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 3,
    name: '프로토가',
    genus: '옛날거북포켓몬'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 4,
    name: '原蓋海龜',
    genus: '古代龜寶可夢'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 5,
    name: 'Carapagos',
    genus: 'Pokémon Tortantique'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 6,
    name: 'Galapaflos',
    genus: 'Urzeitkröte'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 7,
    name: 'Tirtouga',
    genus: 'Pokémon Pretortuga'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 8,
    name: 'Tirtouga',
    genus: 'Pokémon Ancestruga'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 9,
    name: 'Tirtouga',
    genus: 'Prototurtle Pokémon'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 11,
    name: 'プロトーガ',
    genus: 'こだいがめポケモン'
  },
  {
    pokemon_species_id: 564,
    local_language_id: 12,
    name: '原盖海龟',
    genus: '古代龟宝可梦'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 1,
    name: 'アバゴーラ',
    genus: 'こだいがめポケモン'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 3,
    name: '늑골라',
    genus: '옛날거북포켓몬'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 4,
    name: '肋骨海龜',
    genus: '古代龜寶可夢'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 5,
    name: 'Mégapagos',
    genus: 'Pokémon Tortantique'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 6,
    name: 'Karippas',
    genus: 'Urzeitkröte'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 7,
    name: 'Carracosta',
    genus: 'Pokémon Pretortuga'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 8,
    name: 'Carracosta',
    genus: 'Pokémon Ancestruga'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 9,
    name: 'Carracosta',
    genus: 'Prototurtle Pokémon'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 11,
    name: 'アバゴーラ',
    genus: 'こだいがめポケモン'
  },
  {
    pokemon_species_id: 565,
    local_language_id: 12,
    name: '肋骨海龟',
    genus: '古代龟宝可梦'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 1,
    name: 'アーケン',
    genus: 'さいこどりポケモン'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 3,
    name: '아켄',
    genus: '최초새포켓몬'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 4,
    name: '始祖小鳥',
    genus: '遠古鳥寶可夢'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 5,
    name: 'Arkéapti',
    genus: 'Pokémon Oisancien'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 6,
    name: 'Flapteryx',
    genus: 'Urzeitvogel'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 7,
    name: 'Archen',
    genus: 'Pokémon Protopájaro'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 8,
    name: 'Archen',
    genus: 'Pokémon Paleouccello'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 9,
    name: 'Archen',
    genus: 'First Bird Pokémon'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 11,
    name: 'アーケン',
    genus: 'さいこどりポケモン'
  },
  {
    pokemon_species_id: 566,
    local_language_id: 12,
    name: '始祖小鸟',
    genus: '远古鸟宝可梦'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 1,
    name: 'アーケオス',
    genus: 'さいこどりポケモン'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 3,
    name: '아케오스',
    genus: '최초새포켓몬'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 4,
    name: '始祖大鳥',
    genus: '遠古鳥寶可夢'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 5,
    name: 'Aéroptéryx',
    genus: 'Pokémon Oisancien'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 6,
    name: 'Aeropteryx',
    genus: 'Urzeitvogel'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 7,
    name: 'Archeops',
    genus: 'Pokémon Protopájaro'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 8,
    name: 'Archeops',
    genus: 'Pokémon Paleouccello'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 9,
    name: 'Archeops',
    genus: 'First Bird Pokémon'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 11,
    name: 'アーケオス',
    genus: 'さいこどりポケモン'
  },
  {
    pokemon_species_id: 567,
    local_language_id: 12,
    name: '始祖大鸟',
    genus: '远古鸟宝可梦'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 1,
    name: 'ヤブクロン',
    genus: 'ゴミぶくろポケモン'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 3,
    name: '깨봉이',
    genus: '쓰레기봉투포켓몬'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 4,
    name: '破破袋',
    genus: '垃圾袋寶可夢'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 5,
    name: 'Miamiasme',
    genus: 'Pokémon Sac Poubelle'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 6,
    name: 'Unratütox',
    genus: 'Mülltüte'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 7,
    name: 'Trubbish',
    genus: 'Pokémon Bolsa Basura'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 8,
    name: 'Trubbish',
    genus: 'Pokémon Spazzatura'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 9,
    name: 'Trubbish',
    genus: 'Trash Bag Pokémon'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 11,
    name: 'ヤブクロン',
    genus: 'ゴミぶくろポケモン'
  },
  {
    pokemon_species_id: 568,
    local_language_id: 12,
    name: '破破袋',
    genus: '垃圾袋宝可梦'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 1,
    name: 'ダストダス',
    genus: 'ゴミすてばポケモン'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 3,
    name: '더스트나',
    genus: '쓰레기장포켓몬'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 4,
    name: '灰塵山',
    genus: '垃圾場寶可夢'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 5,
    name: 'Miasmax',
    genus: 'Pokémon Dépotoir'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 6,
    name: 'Deponitox',
    genus: 'Müllhalde'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 7,
    name: 'Garbodor',
    genus: 'Pokémon Vertedero'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 8,
    name: 'Garbodor',
    genus: 'Pokémon Discarica'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 9,
    name: 'Garbodor',
    genus: 'Trash Heap Pokémon'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 11,
    name: 'ダストダス',
    genus: 'ゴミすてばポケモン'
  },
  {
    pokemon_species_id: 569,
    local_language_id: 12,
    name: '灰尘山',
    genus: '垃圾场宝可梦'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 1,
    name: 'ゾロア',
    genus: 'わるぎつねポケモン'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 3,
    name: '조로아',
    genus: '나쁜여우포켓몬'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 4,
    name: '索羅亞',
    genus: '惡狐寶可夢'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 5,
    name: 'Zorua',
    genus: 'Pokémon Sombrenard'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 6,
    name: 'Zorua',
    genus: 'Lausefuchs'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 7,
    name: 'Zorua',
    genus: 'Pokémon Zorro Pillo'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 8,
    name: 'Zorua',
    genus: 'Pokémon Malavolpe'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 9,
    name: 'Zorua',
    genus: 'Tricky Fox Pokémon'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 11,
    name: 'ゾロア',
    genus: 'わるぎつねポケモン'
  },
  {
    pokemon_species_id: 570,
    local_language_id: 12,
    name: '索罗亚',
    genus: '恶狐宝可梦'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 1,
    name: 'ゾロアーク',
    genus: 'ばけぎつねポケモン'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 3,
    name: '조로아크',
    genus: '요괴여우포켓몬'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 4,
    name: '索羅亞克',
    genus: '妖狐寶可夢'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 5,
    name: 'Zoroark',
    genus: 'Pokémon Polymorfox'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 6,
    name: 'Zoroark',
    genus: 'Polymorfuchs'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 7,
    name: 'Zoroark',
    genus: 'Pokémon Disfrazorro'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 8,
    name: 'Zoroark',
    genus: 'Pokémon Mutevolpe'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 9,
    name: 'Zoroark',
    genus: 'Illusion Fox Pokémon'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 11,
    name: 'ゾロアーク',
    genus: 'ばけぎつねポケモン'
  },
  {
    pokemon_species_id: 571,
    local_language_id: 12,
    name: '索罗亚克',
    genus: '妖狐宝可梦'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 1,
    name: 'チラーミィ',
    genus: 'チンチラポケモン'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 3,
    name: '치라미',
    genus: '친칠라포켓몬'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 4,
    name: '泡沫栗鼠',
    genus: '栗鼠寶可夢'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 5,
    name: 'Chinchidou',
    genus: 'Pokémon Chinchilla'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 6,
    name: 'Picochilla',
    genus: 'Chinchilla'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 7,
    name: 'Minccino',
    genus: 'Pokémon Chinchilla'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 8,
    name: 'Minccino',
    genus: 'Pokémon Cincillà'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 9,
    name: 'Minccino',
    genus: 'Chinchilla Pokémon'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 11,
    name: 'チラーミィ',
    genus: 'チンチラポケモン'
  },
  {
    pokemon_species_id: 572,
    local_language_id: 12,
    name: '泡沫栗鼠',
    genus: '栗鼠宝可梦'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 1,
    name: 'チラチーノ',
    genus: 'スカーフポケモン'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 3,
    name: '치라치노',
    genus: '스카프포켓몬'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 4,
    name: '奇諾栗鼠',
    genus: '圍巾寶可夢'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 5,
    name: 'Pashmilla',
    genus: 'Pokémon Écharpe'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 6,
    name: 'Chillabell',
    genus: 'Schal'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 7,
    name: 'Cinccino',
    genus: 'Pokémon Estola'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 8,
    name: 'Cinccino',
    genus: 'Pokémon Sciarpa'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 9,
    name: 'Cinccino',
    genus: 'Scarf Pokémon'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 11,
    name: 'チラチーノ',
    genus: 'スカーフポケモン'
  },
  {
    pokemon_species_id: 573,
    local_language_id: 12,
    name: '奇诺栗鼠',
    genus: '围巾宝可梦'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 1,
    name: 'ゴチム',
    genus: 'ぎょうしポケモン'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 3,
    name: '고디탱',
    genus: '응시포켓몬'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 4,
    name: '哥德寶寶',
    genus: '凝視寶可夢'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 5,
    name: 'Scrutella',
    genus: 'Pokémon Dévisageur'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 6,
    name: 'Mollimorba',
    genus: 'Glotz'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 7,
    name: 'Gothita',
    genus: 'Pokémon Inquisitivo'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 8,
    name: 'Gothita',
    genus: 'Pokémon Fissosguardo'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 9,
    name: 'Gothita',
    genus: 'Fixation Pokémon'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 11,
    name: 'ゴチム',
    genus: 'ぎょうしポケモン'
  },
  {
    pokemon_species_id: 574,
    local_language_id: 12,
    name: '哥德宝宝',
    genus: '凝视宝可梦'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 1,
    name: 'ゴチミル',
    genus: 'あやつりポケモン'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 3,
    name: '고디보미',
    genus: '조작포켓몬'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 4,
    name: '哥德小童',
    genus: '操縱寶可夢'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 5,
    name: 'Mesmérella',
    genus: 'Pokémon Magouilleur'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 6,
    name: 'Hypnomorba',
    genus: 'Manipulator'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 7,
    name: 'Gothorita',
    genus: 'Pokémon Manipulador'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 8,
    name: 'Gothorita',
    genus: 'Pokémon Raggiro'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 9,
    name: 'Gothorita',
    genus: 'Manipulate Pokémon'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 11,
    name: 'ゴチミル',
    genus: 'あやつりポケモン'
  },
  {
    pokemon_species_id: 575,
    local_language_id: 12,
    name: '哥德小童',
    genus: '操纵宝可梦'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 1,
    name: 'ゴチルゼル',
    genus: 'てんたいポケモン'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 3,
    name: '고디모아젤',
    genus: '천체포켓몬'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 4,
    name: '哥德小姐',
    genus: '天體寶可夢'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 5,
    name: 'Sidérella',
    genus: 'Pokémon Cosmique'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 6,
    name: 'Morbitesse',
    genus: 'Gestirn'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 7,
    name: 'Gothitelle',
    genus: 'Pokémon Astro'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 8,
    name: 'Gothitelle',
    genus: 'Pokémon Corpoceleste'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 9,
    name: 'Gothitelle',
    genus: 'Astral Body Pokémon'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 11,
    name: 'ゴチルゼル',
    genus: 'てんたいポケモン'
  },
  {
    pokemon_species_id: 576,
    local_language_id: 12,
    name: '哥德小姐',
    genus: '天体宝可梦'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 1,
    name: 'ユニラン',
    genus: 'さいぼうポケモン'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 3,
    name: '유니란',
    genus: '세포포켓몬'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 4,
    name: '單卵細胞球',
    genus: '細胞寶可夢'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 5,
    name: 'Nucléos',
    genus: 'Pokémon Cellule'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 6,
    name: 'Monozyto',
    genus: 'Zelle'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 7,
    name: 'Solosis',
    genus: 'Pokémon Célula'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 8,
    name: 'Solosis',
    genus: 'Pokémon Cellula'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 9,
    name: 'Solosis',
    genus: 'Cell Pokémon'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 11,
    name: 'ユニラン',
    genus: 'さいぼうポケモン'
  },
  {
    pokemon_species_id: 577,
    local_language_id: 12,
    name: '单卵细胞球',
    genus: '细胞宝可梦'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 1,
    name: 'ダブラン',
    genus: 'ぶんかつポケモン'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 3,
    name: '듀란',
    genus: '분할포켓몬'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 4,
    name: '雙卵細胞球',
    genus: '分割寶可夢'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 5,
    name: 'Méios',
    genus: 'Pokémon Divisé'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 6,
    name: 'Mitodos',
    genus: 'Zellteilung'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 7,
    name: 'Duosion',
    genus: 'Pokémon Mitosis'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 8,
    name: 'Duosion',
    genus: 'Pokémon Scissione'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 9,
    name: 'Duosion',
    genus: 'Mitosis Pokémon'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 11,
    name: 'ダブラン',
    genus: 'ぶんかつポケモン'
  },
  {
    pokemon_species_id: 578,
    local_language_id: 12,
    name: '双卵细胞球',
    genus: '分割宝可梦'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 1,
    name: 'ランクルス',
    genus: 'ぞうふくポケモン'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 3,
    name: '란쿨루스',
    genus: '증폭포켓몬'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 4,
    name: '人造細胞卵',
    genus: '增幅寶可夢'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 5,
    name: 'Symbios',
    genus: 'Pokémon Multiplié'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 6,
    name: 'Zytomega',
    genus: 'Vermehrung'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 7,
    name: 'Reuniclus',
    genus: 'Pokémon Ampliación'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 8,
    name: 'Reuniclus',
    genus: 'Pokémon Espansione'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 9,
    name: 'Reuniclus',
    genus: 'Multiplying Pokémon'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 11,
    name: 'ランクルス',
    genus: 'ぞうふくポケモン'
  },
  {
    pokemon_species_id: 579,
    local_language_id: 12,
    name: '人造细胞卵',
    genus: '增幅宝可梦'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 1,
    name: 'コアルヒー',
    genus: 'みずどりポケモン'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 3,
    name: '꼬지보리',
    genus: '물새포켓몬'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 4,
    name: '鴨寶寶',
    genus: '水鳥寶可夢'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 5,
    name: 'Couaneton',
    genus: 'Pokémon Oiseaudo'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 6,
    name: 'Piccolente',
    genus: 'Wasservogel'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 7,
    name: 'Ducklett',
    genus: 'Pokémon Ave Agua'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 8,
    name: 'Ducklett',
    genus: 'Pokémon Alacquatico'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 9,
    name: 'Ducklett',
    genus: 'Water Bird Pokémon'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 11,
    name: 'コアルヒー',
    genus: 'みずどりポケモン'
  },
  {
    pokemon_species_id: 580,
    local_language_id: 12,
    name: '鸭宝宝',
    genus: '水鸟宝可梦'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 1,
    name: 'スワンナ',
    genus: 'しらとりポケモン'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 3,
    name: '스완나',
    genus: '백조포켓몬'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 4,
    name: '舞天鵝',
    genus: '白鳥寶可夢'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 5,
    name: 'Lakmécygne',
    genus: 'Pokémon Cygne'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 6,
    name: 'Swaroness',
    genus: 'Schwan'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 7,
    name: 'Swanna',
    genus: 'Pokémon Cisne'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 8,
    name: 'Swanna',
    genus: 'Pokémon Biancuccello'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 9,
    name: 'Swanna',
    genus: 'White Bird Pokémon'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 11,
    name: 'スワンナ',
    genus: 'しらとりポケモン'
  },
  {
    pokemon_species_id: 581,
    local_language_id: 12,
    name: '舞天鹅',
    genus: '白鸟宝可梦'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 1,
    name: 'バニプッチ',
    genus: 'しんせつポケモン'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 3,
    name: '바닐프티',
    genus: '신설포켓몬'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 4,
    name: '迷你冰',
    genus: '新雪寶可夢'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 5,
    name: 'Sorbébé',
    genus: 'Pokémon Poudreuse'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 6,
    name: 'Gelatini',
    genus: 'Neuschnee'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 7,
    name: 'Vanillite',
    genus: 'Pokémon Nieve Fresca'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 8,
    name: 'Vanillite',
    genus: 'Pokémon Nevefresca'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 9,
    name: 'Vanillite',
    genus: 'Fresh Snow Pokémon'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 11,
    name: 'バニプッチ',
    genus: 'しんせつポケモン'
  },
  {
    pokemon_species_id: 582,
    local_language_id: 12,
    name: '迷你冰',
    genus: '新雪宝可梦'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 1,
    name: 'バニリッチ',
    genus: 'ひょうせつポケモン'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 3,
    name: '바닐리치',
    genus: '빙설포켓몬'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 4,
    name: '多多冰',
    genus: '冰雪寶可夢'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 5,
    name: 'Sorboul',
    genus: 'Pokémon Grêle'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 6,
    name: 'Gelatroppo',
    genus: 'Firn'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 7,
    name: 'Vanillish',
    genus: 'Pokémon Nieve Helada'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 8,
    name: 'Vanillish',
    genus: 'Pokémon Geloneve'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 9,
    name: 'Vanillish',
    genus: 'Icy Snow Pokémon'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 11,
    name: 'バニリッチ',
    genus: 'ひょうせつポケモン'
  },
  {
    pokemon_species_id: 583,
    local_language_id: 12,
    name: '多多冰',
    genus: '冰雪宝可梦'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 1,
    name: 'バイバニラ',
    genus: 'ブリザードポケモン'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 3,
    name: '배바닐라',
    genus: '블리자드포켓몬'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 4,
    name: '雙倍多多冰',
    genus: '暴風雪寶可夢'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 5,
    name: 'Sorbouboul',
    genus: 'Pokémon Congère'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 6,
    name: 'Gelatwino',
    genus: 'Schneesturm'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 7,
    name: 'Vanilluxe',
    genus: 'Pokémon Nieve Gélida'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 8,
    name: 'Vanilluxe',
    genus: 'Pokémon Bufera'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 9,
    name: 'Vanilluxe',
    genus: 'Snowstorm Pokémon'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 11,
    name: 'バイバニラ',
    genus: 'ブリザードポケモン'
  },
  {
    pokemon_species_id: 584,
    local_language_id: 12,
    name: '双倍多多冰',
    genus: '暴风雪宝可梦'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 1,
    name: 'シキジカ',
    genus: 'きせつポケモン'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 3,
    name: '사철록',
    genus: '계절포켓몬'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 4,
    name: '四季鹿',
    genus: '季節寶可夢'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 5,
    name: 'Vivaldaim',
    genus: 'Pokémon Saison'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 6,
    name: 'Sesokitz',
    genus: 'Jahreszeit'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 7,
    name: 'Deerling',
    genus: 'Pokémon Estacional'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 8,
    name: 'Deerling',
    genus: 'Pokémon Stagione'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 9,
    name: 'Deerling',
    genus: 'Season Pokémon'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 11,
    name: 'シキジカ',
    genus: 'きせつポケモン'
  },
  {
    pokemon_species_id: 585,
    local_language_id: 12,
    name: '四季鹿',
    genus: '季节宝可梦'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 1,
    name: 'メブキジカ',
    genus: 'きせつポケモン'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 3,
    name: '바라철록',
    genus: '계절포켓몬'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 4,
    name: '萌芽鹿',
    genus: '季節寶可夢'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 5,
    name: 'Haydaim',
    genus: 'Pokémon Saison'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 6,
    name: 'Kronjuwild',
    genus: 'Jahreszeit'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 7,
    name: 'Sawsbuck',
    genus: 'Pokémon Estacional'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 8,
    name: 'Sawsbuck',
    genus: 'Pokémon Stagione'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 9,
    name: 'Sawsbuck',
    genus: 'Season Pokémon'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 11,
    name: 'メブキジカ',
    genus: 'きせつポケモン'
  },
  {
    pokemon_species_id: 586,
    local_language_id: 12,
    name: '萌芽鹿',
    genus: '季节宝可梦'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 1,
    name: 'エモンガ',
    genus: 'モモンガポケモン'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 3,
    name: '에몽가',
    genus: '하늘다람쥐포켓몬'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 4,
    name: '電飛鼠',
    genus: '飛鼠寶可夢'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 5,
    name: 'Emolga',
    genus: 'Pokémon Pteromys'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 6,
    name: 'Emolga',
    genus: 'Flughörnchen'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 7,
    name: 'Emolga',
    genus: 'Pokémon Vuelardilla'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 8,
    name: 'Emolga',
    genus: 'Pokémon Petauro'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 9,
    name: 'Emolga',
    genus: 'Sky Squirrel Pokémon'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 11,
    name: 'エモンガ',
    genus: 'モモンガポケモン'
  },
  {
    pokemon_species_id: 587,
    local_language_id: 12,
    name: '电飞鼠',
    genus: '飞鼠宝可梦'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 1,
    name: 'カブルモ',
    genus: 'かぶりつきポケモン'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 3,
    name: '딱정곤',
    genus: '덥석물기포켓몬'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 4,
    name: '蓋蓋蟲',
    genus: '啃咬寶可夢'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 5,
    name: 'Carabing',
    genus: 'Pokémon Carabe'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 6,
    name: 'Laukaps',
    genus: 'Schnappbiss'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 7,
    name: 'Karrablast',
    genus: 'Pokémon Bocado'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 8,
    name: 'Karrablast',
    genus: 'Pokémon Addentatore'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 9,
    name: 'Karrablast',
    genus: 'Clamping Pokémon'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 11,
    name: 'カブルモ',
    genus: 'かぶりつきポケモン'
  },
  {
    pokemon_species_id: 588,
    local_language_id: 12,
    name: '盖盖虫',
    genus: '啃咬宝可梦'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 1,
    name: 'シュバルゴ',
    genus: 'きへいポケモン'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 3,
    name: '슈바르고',
    genus: '기병포켓몬'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 4,
    name: '騎士蝸牛',
    genus: '騎兵寶可夢'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 5,
    name: 'Lançargot',
    genus: 'Pokémon Chevalier'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 6,
    name: 'Cavalanzas',
    genus: 'Kavallerie'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 7,
    name: 'Escavalier',
    genus: 'Pokémon Soldado'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 8,
    name: 'Escavalier',
    genus: 'Pokémon Cavaliere'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 9,
    name: 'Escavalier',
    genus: 'Cavalry Pokémon'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 11,
    name: 'シュバルゴ',
    genus: 'きへいポケモン'
  },
  {
    pokemon_species_id: 589,
    local_language_id: 12,
    name: '骑士蜗牛',
    genus: '骑兵宝可梦'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 1,
    name: 'タマゲタケ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 3,
    name: '깜놀버슬',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 4,
    name: '哎呀球菇',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 5,
    name: 'Trompignon',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 6,
    name: 'Tarnpignon',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 7,
    name: 'Foongus',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 8,
    name: 'Foongus',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 9,
    name: 'Foongus',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 11,
    name: 'タマゲタケ',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 590,
    local_language_id: 12,
    name: '哎呀球菇',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 1,
    name: 'モロバレル',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 3,
    name: '뽀록나',
    genus: '버섯포켓몬'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 4,
    name: '敗露球菇',
    genus: '蘑菇寶可夢'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 5,
    name: 'Gaulet',
    genus: 'Pokémon Champignon'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 6,
    name: 'Hutsassa',
    genus: 'Pilz'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 7,
    name: 'Amoonguss',
    genus: 'Pokémon Hongo'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 8,
    name: 'Amoonguss',
    genus: 'Pokémon Fungo'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 9,
    name: 'Amoonguss',
    genus: 'Mushroom Pokémon'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 11,
    name: 'モロバレル',
    genus: 'きのこポケモン'
  },
  {
    pokemon_species_id: 591,
    local_language_id: 12,
    name: '败露球菇',
    genus: '蘑菇宝可梦'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 1,
    name: 'プルリル',
    genus: 'ふゆうポケモン'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 3,
    name: '탱그릴',
    genus: '부유포켓몬'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 4,
    name: '輕飄飄',
    genus: '漂浮寶可夢'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 5,
    name: 'Viskuse',
    genus: 'Pokémon Flottaison'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 6,
    name: 'Quabbel',
    genus: 'Gleit'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 7,
    name: 'Frillish',
    genus: 'Pokémon Ingrávido'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 8,
    name: 'Frillish',
    genus: 'Pokémon Fluttuante'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 9,
    name: 'Frillish',
    genus: 'Floating Pokémon'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 11,
    name: 'プルリル',
    genus: 'ふゆうポケモン'
  },
  {
    pokemon_species_id: 592,
    local_language_id: 12,
    name: '轻飘飘',
    genus: '漂浮宝可梦'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 1,
    name: 'ブルンゲル',
    genus: 'ふゆうポケモン'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 3,
    name: '탱탱겔',
    genus: '부유포켓몬'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 4,
    name: '胖嘟嘟',
    genus: '漂浮寶可夢'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 5,
    name: 'Moyade',
    genus: 'Pokémon Flottaison'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 6,
    name: 'Apoquallyp',
    genus: 'Gleit'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 7,
    name: 'Jellicent',
    genus: 'Pokémon Ingrávido'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 8,
    name: 'Jellicent',
    genus: 'Pokémon Fluttuante'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 9,
    name: 'Jellicent',
    genus: 'Floating Pokémon'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 11,
    name: 'ブルンゲル',
    genus: 'ふゆうポケモン'
  },
  {
    pokemon_species_id: 593,
    local_language_id: 12,
    name: '胖嘟嘟',
    genus: '漂浮宝可梦'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 1,
    name: 'ママンボウ',
    genus: 'かいほうポケモン'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 3,
    name: '맘복치',
    genus: '돌보기포켓몬'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 4,
    name: '保母曼波',
    genus: '看護寶可夢'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 5,
    name: 'Mamanbo',
    genus: 'Pokémon Soigneur'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 6,
    name: 'Mamolida',
    genus: 'Fürsorge'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 7,
    name: 'Alomomola',
    genus: 'Pokémon Socorrista'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 8,
    name: 'Alomomola',
    genus: 'Pokémon Assistenza'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 9,
    name: 'Alomomola',
    genus: 'Caring Pokémon'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 11,
    name: 'ママンボウ',
    genus: 'かいほうポケモン'
  },
  {
    pokemon_species_id: 594,
    local_language_id: 12,
    name: '保姆曼波',
    genus: '看护宝可梦'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 1,
    name: 'バチュル',
    genus: 'くっつきポケモン'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 3,
    name: '파쪼옥',
    genus: '들러붙기포켓몬'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 4,
    name: '電電蟲',
    genus: '吸附寶可夢'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 5,
    name: 'Statitik',
    genus: 'Pokémon Crampon'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 6,
    name: 'Wattzapf',
    genus: 'Kleben'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 7,
    name: 'Joltik',
    genus: 'Pokémon Lapa'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 8,
    name: 'Joltik',
    genus: 'Pokémon Appiccicante'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 9,
    name: 'Joltik',
    genus: 'Attaching Pokémon'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 11,
    name: 'バチュル',
    genus: 'くっつきポケモン'
  },
  {
    pokemon_species_id: 595,
    local_language_id: 12,
    name: '电电虫',
    genus: '吸附宝可梦'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 1,
    name: 'デンチュラ',
    genus: 'でんきグモポケモン'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 3,
    name: '전툴라',
    genus: '전기거미포켓몬'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 4,
    name: '電蜘蛛',
    genus: '電蜘蛛寶可夢'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 5,
    name: 'Mygavolt',
    genus: 'Pokémon Araclectrik'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 6,
    name: 'Voltula',
    genus: 'Stromspinne'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 7,
    name: 'Galvantula',
    genus: 'Pokémon Electroaraña'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 8,
    name: 'Galvantula',
    genus: 'Pokémon Elettroragno'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 9,
    name: 'Galvantula',
    genus: 'EleSpider Pokémon'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 11,
    name: 'デンチュラ',
    genus: 'でんきグモポケモン'
  },
  {
    pokemon_species_id: 596,
    local_language_id: 12,
    name: '电蜘蛛',
    genus: '电蜘蛛宝可梦'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 1,
    name: 'テッシード',
    genus: 'とげのみポケモン'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 3,
    name: '철시드',
    genus: '가시열매포켓몬'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 4,
    name: '種子鐵球',
    genus: '刺果寶可夢'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 5,
    name: 'Grindur',
    genus: 'Pokémon Graine Épine'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 6,
    name: 'Kastadur',
    genus: 'Dornfrucht'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 7,
    name: 'Ferroseed',
    genus: 'Pokémon Fruto Espina'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 8,
    name: 'Ferroseed',
    genus: 'Pokémon Spinaseme'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 9,
    name: 'Ferroseed',
    genus: 'Thorn Seed Pokémon'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 11,
    name: 'テッシード',
    genus: 'とげのみポケモン'
  },
  {
    pokemon_species_id: 597,
    local_language_id: 12,
    name: '种子铁球',
    genus: '刺果宝可梦'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 1,
    name: 'ナットレイ',
    genus: 'とげだまポケモン'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 3,
    name: '너트령',
    genus: '가시공포켓몬'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 4,
    name: '堅果啞鈴',
    genus: '刺球寶可夢'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 5,
    name: 'Noacier',
    genus: 'Pokémon Boule Épine'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 6,
    name: 'Tentantel',
    genus: 'Dornkugel'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 7,
    name: 'Ferrothorn',
    genus: 'Pokémon Bola Espina'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 8,
    name: 'Ferrothorn',
    genus: 'Pokémon Spinasfere'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 9,
    name: 'Ferrothorn',
    genus: 'Thorn Pod Pokémon'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 11,
    name: 'ナットレイ',
    genus: 'とげだまポケモン'
  },
  {
    pokemon_species_id: 598,
    local_language_id: 12,
    name: '坚果哑铃',
    genus: '刺球宝可梦'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 1,
    name: 'ギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 3,
    name: '기어르',
    genus: '톱니바퀴포켓몬'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 4,
    name: '齒輪兒',
    genus: '齒輪寶可夢'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 5,
    name: 'Tic',
    genus: 'Pokémon Engrenage'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 6,
    name: 'Klikk',
    genus: 'Getriebe'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 7,
    name: 'Klink',
    genus: 'Pokémon Engranaje'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 8,
    name: 'Klink',
    genus: 'Pokémon Ingranaggio'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 9,
    name: 'Klink',
    genus: 'Gear Pokémon'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 11,
    name: 'ギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 599,
    local_language_id: 12,
    name: '齿轮儿',
    genus: '齿轮宝可梦'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 1,
    name: 'ギギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 3,
    name: '기기어르',
    genus: '톱니바퀴포켓몬'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 4,
    name: '齒輪組',
    genus: '齒輪寶可夢'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 5,
    name: 'Clic',
    genus: 'Pokémon Engrenage'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 6,
    name: 'Kliklak',
    genus: 'Getriebe'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 7,
    name: 'Klang',
    genus: 'Pokémon Engranaje'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 8,
    name: 'Klang',
    genus: 'Pokémon Ingranaggio'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 9,
    name: 'Klang',
    genus: 'Gear Pokémon'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 11,
    name: 'ギギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 600,
    local_language_id: 12,
    name: '齿轮组',
    genus: '齿轮宝可梦'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 1,
    name: 'ギギギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 3,
    name: '기기기어르',
    genus: '톱니바퀴포켓몬'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 4,
    name: '齒輪怪',
    genus: '齒輪寶可夢'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 5,
    name: 'Cliticlic',
    genus: 'Pokémon Engrenage'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 6,
    name: 'Klikdiklak',
    genus: 'Getriebe'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 7,
    name: 'Klinklang',
    genus: 'Pokémon Engranaje'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 8,
    name: 'Klinklang',
    genus: 'Pokémon Ingranaggio'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 9,
    name: 'Klinklang',
    genus: 'Gear Pokémon'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 11,
    name: 'ギギギアル',
    genus: 'はぐるまポケモン'
  },
  {
    pokemon_species_id: 601,
    local_language_id: 12,
    name: '齿轮怪',
    genus: '齿轮宝可梦'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 1,
    name: 'シビシラス',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 3,
    name: '저리어',
    genus: '전기물고기포켓몬'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 4,
    name: '麻麻小魚',
    genus: '電魚寶可夢'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 5,
    name: 'Anchwatt',
    genus: 'Pokémon Électrophore'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 6,
    name: 'Zapplardin',
    genus: 'Stromfisch'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 7,
    name: 'Tynamo',
    genus: 'Pokémon Electropez'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 8,
    name: 'Tynamo',
    genus: 'Pokémon Elettropesce'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 9,
    name: 'Tynamo',
    genus: 'EleFish Pokémon'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 11,
    name: 'シビシラス',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 602,
    local_language_id: 12,
    name: '麻麻小鱼',
    genus: '电鱼宝可梦'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 1,
    name: 'シビビール',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 3,
    name: '저리릴',
    genus: '전기물고기포켓몬'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 4,
    name: '麻麻鰻',
    genus: '電魚寶可夢'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 5,
    name: 'Lampéroie',
    genus: 'Pokémon Électrophore'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 6,
    name: 'Zapplalek',
    genus: 'Stromfisch'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 7,
    name: 'Eelektrik',
    genus: 'Pokémon Electropez'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 8,
    name: 'Eelektrik',
    genus: 'Pokémon Elettropesce'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 9,
    name: 'Eelektrik',
    genus: 'EleFish Pokémon'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 11,
    name: 'シビビール',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 603,
    local_language_id: 12,
    name: '麻麻鳗',
    genus: '电鱼宝可梦'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 1,
    name: 'シビルドン',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 3,
    name: '저리더프',
    genus: '전기물고기포켓몬'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 4,
    name: '麻麻鰻魚王',
    genus: '電魚寶可夢'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 5,
    name: 'Ohmassacre',
    genus: 'Pokémon Électrophore'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 6,
    name: 'Zapplarang',
    genus: 'Stromfisch'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 7,
    name: 'Eelektross',
    genus: 'Pokémon Electropez'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 8,
    name: 'Eelektross',
    genus: 'Pokémon Elettropesce'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 9,
    name: 'Eelektross',
    genus: 'EleFish Pokémon'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 11,
    name: 'シビルドン',
    genus: 'でんきうおポケモン'
  },
  {
    pokemon_species_id: 604,
    local_language_id: 12,
    name: '麻麻鳗鱼王',
    genus: '电鱼宝可梦'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 1,
    name: 'リグレー',
    genus: 'ブレインポケモン'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 3,
    name: '리그레',
    genus: '브레인포켓몬'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 4,
    name: '小灰怪',
    genus: '腦寶可夢'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 5,
    name: 'Lewsor',
    genus: 'Pokémon Cerveau'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 6,
    name: 'Pygraulon',
    genus: 'Grips'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 7,
    name: 'Elgyem',
    genus: 'Pokémon Cerebro'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 8,
    name: 'Elgyem',
    genus: 'Pokémon Cervello'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 9,
    name: 'Elgyem',
    genus: 'Cerebral Pokémon'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 11,
    name: 'リグレー',
    genus: 'ブレインポケモン'
  },
  {
    pokemon_species_id: 605,
    local_language_id: 12,
    name: '小灰怪',
    genus: '脑宝可梦'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 1,
    name: 'オーベム',
    genus: 'ブレインポケモン'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 3,
    name: '벰크',
    genus: '브레인포켓몬'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 4,
    name: '大宇怪',
    genus: '腦寶可夢'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 5,
    name: 'Neitram',
    genus: 'Pokémon Cerveau'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 6,
    name: 'Megalon',
    genus: 'Grips'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 7,
    name: 'Beheeyem',
    genus: 'Pokémon Cerebro'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 8,
    name: 'Beheeyem',
    genus: 'Pokémon Cervello'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 9,
    name: 'Beheeyem',
    genus: 'Cerebral Pokémon'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 11,
    name: 'オーベム',
    genus: 'ブレインポケモン'
  },
  {
    pokemon_species_id: 606,
    local_language_id: 12,
    name: '大宇怪',
    genus: '脑宝可梦'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 1,
    name: 'ヒトモシ',
    genus: 'ろうそくポケモン'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 3,
    name: '불켜미',
    genus: '양초포켓몬'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 4,
    name: '燭光靈',
    genus: '蠟燭寶可夢'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 5,
    name: 'Funécire',
    genus: 'Pokémon Chandelle'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 6,
    name: 'Lichtel',
    genus: 'Kerze'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 7,
    name: 'Litwick',
    genus: 'Pokémon Vela'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 8,
    name: 'Litwick',
    genus: 'Pokémon Candela'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 9,
    name: 'Litwick',
    genus: 'Candle Pokémon'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 11,
    name: 'ヒトモシ',
    genus: 'ろうそくポケモン'
  },
  {
    pokemon_species_id: 607,
    local_language_id: 12,
    name: '烛光灵',
    genus: '蜡烛宝可梦'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 1,
    name: 'ランプラー',
    genus: 'ランプポケモン'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 3,
    name: '램프라',
    genus: '램프포켓몬'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 4,
    name: '燈火幽靈',
    genus: '油燈寶可夢'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 5,
    name: 'Mélancolux',
    genus: 'Pokémon Lampe'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 6,
    name: 'Laternecto',
    genus: 'Lampe'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 7,
    name: 'Lampent',
    genus: 'Pokémon Farolillo'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 8,
    name: 'Lampent',
    genus: 'Pokémon Lanterna'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 9,
    name: 'Lampent',
    genus: 'Lamp Pokémon'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 11,
    name: 'ランプラー',
    genus: 'ランプポケモン'
  },
  {
    pokemon_species_id: 608,
    local_language_id: 12,
    name: '灯火幽灵',
    genus: '油灯宝可梦'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 1,
    name: 'シャンデラ',
    genus: 'いざないポケモン'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 3,
    name: '샹델라',
    genus: '권유포켓몬'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 4,
    name: '水晶燈火靈',
    genus: '引誘寶可夢'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 5,
    name: 'Lugulabre',
    genus: 'Pokémon Invitation'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 6,
    name: 'Skelabra',
    genus: 'Geleit'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 7,
    name: 'Chandelure',
    genus: 'Pokémon Señuelo'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 8,
    name: 'Chandelure',
    genus: 'Pokémon Attiranime'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 9,
    name: 'Chandelure',
    genus: 'Luring Pokémon'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 11,
    name: 'シャンデラ',
    genus: 'いざないポケモン'
  },
  {
    pokemon_species_id: 609,
    local_language_id: 12,
    name: '水晶灯火灵',
    genus: '引诱宝可梦'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 1,
    name: 'キバゴ',
    genus: 'キバポケモン'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 3,
    name: '터검니',
    genus: '이빨포켓몬'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 4,
    name: '牙牙',
    genus: '牙寶可夢'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 5,
    name: 'Coupenotte',
    genus: 'Pokémon Crocs'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 6,
    name: 'Milza',
    genus: 'Stoßzahn'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 7,
    name: 'Axew',
    genus: 'Pokémon Colmillo'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 8,
    name: 'Axew',
    genus: 'Pokémon Zanna'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 9,
    name: 'Axew',
    genus: 'Tusk Pokémon'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 11,
    name: 'キバゴ',
    genus: 'キバポケモン'
  },
  {
    pokemon_species_id: 610,
    local_language_id: 12,
    name: '牙牙',
    genus: '牙宝可梦'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 1,
    name: 'オノンド',
    genus: 'あごオノポケモン'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 3,
    name: '액슨도',
    genus: '도끼턱포켓몬'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 4,
    name: '斧牙龍',
    genus: '顎斧寶可夢'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 5,
    name: 'Incisache',
    genus: 'Pokémon Hachomenton'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 6,
    name: 'Sharfax',
    genus: 'Beilkiefer'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 7,
    name: 'Fraxure',
    genus: 'Pokémon Boca Hacha'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 8,
    name: 'Fraxure',
    genus: 'Pokémon Mascellascia'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 9,
    name: 'Fraxure',
    genus: 'Axe Jaw Pokémon'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 11,
    name: 'オノンド',
    genus: 'あごオノポケモン'
  },
  {
    pokemon_species_id: 611,
    local_language_id: 12,
    name: '斧牙龙',
    genus: '颚斧宝可梦'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 1,
    name: 'オノノクス',
    genus: 'あごオノポケモン'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 3,
    name: '액스라이즈',
    genus: '도끼턱포켓몬'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 4,
    name: '雙斧戰龍',
    genus: '顎斧寶可夢'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 5,
    name: 'Tranchodon',
    genus: 'Pokémon Hachomenton'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 6,
    name: 'Maxax',
    genus: 'Beilkiefer'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 7,
    name: 'Haxorus',
    genus: 'Pokémon Boca Hacha'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 8,
    name: 'Haxorus',
    genus: 'Pokémon Mascellascia'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 9,
    name: 'Haxorus',
    genus: 'Axe Jaw Pokémon'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 11,
    name: 'オノノクス',
    genus: 'あごオノポケモン'
  },
  {
    pokemon_species_id: 612,
    local_language_id: 12,
    name: '双斧战龙',
    genus: '颚斧宝可梦'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 1,
    name: 'クマシュン',
    genus: 'ひょうけつポケモン'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 3,
    name: '코고미',
    genus: '빙결포켓몬'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 4,
    name: '噴嚏熊',
    genus: '結冰寶可夢'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 5,
    name: 'Polarhume',
    genus: 'Pokémon Gelé'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 6,
    name: 'Petznief',
    genus: 'Eisscholle'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 7,
    name: 'Cubchoo',
    genus: 'Pokémon Congelación'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 8,
    name: 'Cubchoo',
    genus: 'Pokémon Freddo'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 9,
    name: 'Cubchoo',
    genus: 'Chill Pokémon'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 11,
    name: 'クマシュン',
    genus: 'ひょうけつポケモン'
  },
  {
    pokemon_species_id: 613,
    local_language_id: 12,
    name: '喷嚏熊',
    genus: '结冰宝可梦'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 1,
    name: 'ツンベアー',
    genus: 'とうけつポケモン'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 3,
    name: '툰베어',
    genus: '동결포켓몬'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 4,
    name: '凍原熊',
    genus: '凍結寶可夢'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 5,
    name: 'Polagriffe',
    genus: 'Pokémon Congelé'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 6,
    name: 'Siberio',
    genus: 'Packeis'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 7,
    name: 'Beartic',
    genus: 'Pokémon Glaciación'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 8,
    name: 'Beartic',
    genus: 'Pokémon Glaciale'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 9,
    name: 'Beartic',
    genus: 'Freezing Pokémon'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 11,
    name: 'ツンベアー',
    genus: 'とうけつポケモン'
  },
  {
    pokemon_species_id: 614,
    local_language_id: 12,
    name: '冻原熊',
    genus: '冻结宝可梦'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 1,
    name: 'フリージオ',
    genus: 'けっしょうポケモン'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 3,
    name: '프리지오',
    genus: '결정포켓몬'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 4,
    name: '幾何雪花',
    genus: '結晶寶可夢'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 5,
    name: 'Hexagel',
    genus: 'Pokémon Cristal'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 6,
    name: 'Frigometri',
    genus: 'Kristall'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 7,
    name: 'Cryogonal',
    genus: 'Pokémon Cristal'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 8,
    name: 'Cryogonal',
    genus: 'Pokémon Cristallo'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 9,
    name: 'Cryogonal',
    genus: 'Crystallizing Pokémon'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 11,
    name: 'フリージオ',
    genus: 'けっしょうポケモン'
  },
  {
    pokemon_species_id: 615,
    local_language_id: 12,
    name: '几何雪花',
    genus: '结晶宝可梦'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 1,
    name: 'チョボマキ',
    genus: 'マイマイポケモン'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 3,
    name: '쪼마리',
    genus: '달팽이포켓몬'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 4,
    name: '小嘴蝸',
    genus: '蝸牛寶可夢'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 5,
    name: 'Escargaume',
    genus: 'Pokémon Escargot'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 6,
    name: 'Schnuthelm',
    genus: 'Schnecke'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 7,
    name: 'Shelmet',
    genus: 'Pokémon Caracol'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 8,
    name: 'Shelmet',
    genus: 'Pokémon Lumachina'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 9,
    name: 'Shelmet',
    genus: 'Snail Pokémon'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 11,
    name: 'チョボマキ',
    genus: 'マイマイポケモン'
  },
  {
    pokemon_species_id: 616,
    local_language_id: 12,
    name: '小嘴蜗',
    genus: '蜗牛宝可梦'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 1,
    name: 'アギルダー',
    genus: 'からぬけポケモン'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 3,
    name: '어지리더',
    genus: '탈껍질포켓몬'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 4,
    name: '敏捷蟲',
    genus: '脫殼寶可夢'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 5,
    name: 'Limaspeed',
    genus: 'Pokémon Exuviateur'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 6,
    name: 'Hydragil',
    genus: 'Entschalung'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 7,
    name: 'Accelgor',
    genus: 'Pokémon Sincaparazón'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 8,
    name: 'Accelgor',
    genus: 'Pokémon Sgusciato'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 9,
    name: 'Accelgor',
    genus: 'Shell Out Pokémon'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 11,
    name: 'アギルダー',
    genus: 'からぬけポケモン'
  },
  {
    pokemon_species_id: 617,
    local_language_id: 12,
    name: '敏捷虫',
    genus: '脱壳宝可梦'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 1,
    name: 'マッギョ',
    genus: 'トラップポケモン'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 3,
    name: '메더',
    genus: '트랩포켓몬'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 4,
    name: '泥巴魚',
    genus: '陷阱寶可夢'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 5,
    name: 'Limonde',
    genus: 'Pokémon Piège'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 6,
    name: 'Flunschlik',
    genus: 'Falle'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 7,
    name: 'Stunfisk',
    genus: 'Pokémon Trampa'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 8,
    name: 'Stunfisk',
    genus: 'Pokémon Trappola'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 9,
    name: 'Stunfisk',
    genus: 'Trap Pokémon'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 11,
    name: 'マッギョ',
    genus: 'トラップポケモン'
  },
  {
    pokemon_species_id: 618,
    local_language_id: 12,
    name: '泥巴鱼',
    genus: '陷阱宝可梦'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 1,
    name: 'コジョフー',
    genus: 'ぶじゅつポケモン'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 3,
    name: '비조푸',
    genus: '무술포켓몬'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 4,
    name: '功夫鼬',
    genus: '武術寶可夢'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 5,
    name: 'Kungfouine',
    genus: 'Pokémon Art Martial'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 6,
    name: 'Lin-Fu',
    genus: 'Kampfkünste'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 7,
    name: 'Mienfoo',
    genus: 'Pokémon Arte Marcial'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 8,
    name: 'Mienfoo',
    genus: 'Pokémon Marziale'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 9,
    name: 'Mienfoo',
    genus: 'Martial Arts Pokémon'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 11,
    name: 'コジョフー',
    genus: 'ぶじゅつポケモン'
  },
  {
    pokemon_species_id: 619,
    local_language_id: 12,
    name: '功夫鼬',
    genus: '武术宝可梦'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 1,
    name: 'コジョンド',
    genus: 'ぶじゅつポケモン'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 3,
    name: '비조도',
    genus: '무술포켓몬'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 4,
    name: '師父鼬',
    genus: '武術寶可夢'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 5,
    name: 'Shaofouine',
    genus: 'Pokémon Art Martial'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 6,
    name: 'Wie-Shu',
    genus: 'Kampfkünste'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 7,
    name: 'Mienshao',
    genus: 'Pokémon Arte Marcial'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 8,
    name: 'Mienshao',
    genus: 'Pokémon Marziale'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 9,
    name: 'Mienshao',
    genus: 'Martial Arts Pokémon'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 11,
    name: 'コジョンド',
    genus: 'ぶじゅつポケモン'
  },
  {
    pokemon_species_id: 620,
    local_language_id: 12,
    name: '师父鼬',
    genus: '武术宝可梦'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 1,
    name: 'クリムガン',
    genus: 'ほらあなポケモン'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 3,
    name: '크리만',
    genus: '동굴포켓몬'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 4,
    name: '赤面龍',
    genus: '洞穴寶可夢'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 5,
    name: 'Drakkarmin',
    genus: 'Pokémon Caverne'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 6,
    name: 'Shardrago',
    genus: 'Höhle'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 7,
    name: 'Druddigon',
    genus: 'Pokémon Cueva'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 8,
    name: 'Druddigon',
    genus: 'Pokémon Grotta'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 9,
    name: 'Druddigon',
    genus: 'Cave Pokémon'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 11,
    name: 'クリムガン',
    genus: 'ほらあなポケモン'
  },
  {
    pokemon_species_id: 621,
    local_language_id: 12,
    name: '赤面龙',
    genus: '洞穴宝可梦'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 1,
    name: 'ゴビット',
    genus: 'ゴーレムポケモン'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 3,
    name: '골비람',
    genus: '골렘포켓몬'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 4,
    name: '泥偶小人',
    genus: '魔像寶可夢'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 5,
    name: 'Gringolem',
    genus: 'Pokémon Golem Ancien'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 6,
    name: 'Golbit',
    genus: 'Urgolem'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 7,
    name: 'Golett',
    genus: 'Pokémon Autómata'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 8,
    name: 'Golett',
    genus: 'Pokémon Statuanimata'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 9,
    name: 'Golett',
    genus: 'Automaton Pokémon'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 11,
    name: 'ゴビット',
    genus: 'ゴーレムポケモン'
  },
  {
    pokemon_species_id: 622,
    local_language_id: 12,
    name: '泥偶小人',
    genus: '魔像宝可梦'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 1,
    name: 'ゴルーグ',
    genus: 'ゴーレムポケモン'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 3,
    name: '골루그',
    genus: '골렘포켓몬'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 4,
    name: '泥偶巨人',
    genus: '魔像寶可夢'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 5,
    name: 'Golemastoc',
    genus: 'Pokémon Golem Ancien'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 6,
    name: 'Golgantes',
    genus: 'Urgolem'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 7,
    name: 'Golurk',
    genus: 'Pokémon Autómata'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 8,
    name: 'Golurk',
    genus: 'Pokémon Statuanimata'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 9,
    name: 'Golurk',
    genus: 'Automaton Pokémon'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 11,
    name: 'ゴルーグ',
    genus: 'ゴーレムポケモン'
  },
  {
    pokemon_species_id: 623,
    local_language_id: 12,
    name: '泥偶巨人',
    genus: '魔像宝可梦'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 1,
    name: 'コマタナ',
    genus: 'はものポケモン'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 3,
    name: '자망칼',
    genus: '날붙이포켓몬'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 4,
    name: '駒刀小兵',
    genus: '利器寶可夢'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 5,
    name: 'Scalpion',
    genus: 'Pokémon Coupant'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 6,
    name: 'Gladiantri',
    genus: 'Stahlklinge'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 7,
    name: 'Pawniard',
    genus: 'Pokémon Tajo'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 8,
    name: 'Pawniard',
    genus: 'Pokémon Lamaffilata'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 9,
    name: 'Pawniard',
    genus: 'Sharp Blade Pokémon'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 11,
    name: 'コマタナ',
    genus: 'はものポケモン'
  },
  {
    pokemon_species_id: 624,
    local_language_id: 12,
    name: '驹刀小兵',
    genus: '利器宝可梦'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 1,
    name: 'キリキザン',
    genus: 'とうじんポケモン'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 3,
    name: '절각참',
    genus: '도인포켓몬'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 4,
    name: '劈斬司令',
    genus: '刀刃寶可夢'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 5,
    name: 'Scalproie',
    genus: 'Pokémon Tranchant'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 6,
    name: 'Caesurio',
    genus: 'Schwertklinge'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 7,
    name: 'Bisharp',
    genus: 'Pokémon Filo'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 8,
    name: 'Bisharp',
    genus: 'Pokémon Fildilama'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 9,
    name: 'Bisharp',
    genus: 'Sword Blade Pokémon'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 11,
    name: 'キリキザン',
    genus: 'とうじんポケモン'
  },
  {
    pokemon_species_id: 625,
    local_language_id: 12,
    name: '劈斩司令',
    genus: '刀刃宝可梦'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 1,
    name: 'バッフロン',
    genus: 'ずつきうしポケモン'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 3,
    name: '버프론',
    genus: '박치기소포켓몬'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 4,
    name: '爆炸頭水牛',
    genus: '頭錘牛寶可夢'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 5,
    name: 'Frison',
    genus: 'Pokémon Coup d’Bœuf'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 6,
    name: 'Bisofank',
    genus: 'Kopfstoßrind'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 7,
    name: 'Bouffalant',
    genus: 'Pokémon Torocabezazo'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 8,
    name: 'Bouffalant',
    genus: 'Pokémon Sfondatoro'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 9,
    name: 'Bouffalant',
    genus: 'Bash Buffalo Pokémon'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 11,
    name: 'バッフロン',
    genus: 'ずつきうしポケモン'
  },
  {
    pokemon_species_id: 626,
    local_language_id: 12,
    name: '爆炸头水牛',
    genus: '头锤牛宝可梦'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 1,
    name: 'ワシボン',
    genus: 'ヒナわしポケモン'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 3,
    name: '수리둥보',
    genus: '새끼독수리포켓몬'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 4,
    name: '毛頭小鷹',
    genus: '雛鷹寶可夢'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 5,
    name: 'Furaiglon',
    genus: 'Pokémon Aiglon'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 6,
    name: 'Geronimatz',
    genus: 'Adlerküken'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 7,
    name: 'Rufflet',
    genus: 'Pokémon Aguilucho'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 8,
    name: 'Rufflet',
    genus: 'Pokémon Aquilotto'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 9,
    name: 'Rufflet',
    genus: 'Eaglet Pokémon'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 11,
    name: 'ワシボン',
    genus: 'ヒナわしポケモン'
  },
  {
    pokemon_species_id: 627,
    local_language_id: 12,
    name: '毛头小鹰',
    genus: '雏鹰宝可梦'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 1,
    name: 'ウォーグル',
    genus: 'ゆうもうポケモン'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 3,
    name: '워글',
    genus: '용맹포켓몬'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 4,
    name: '勇士雄鷹',
    genus: '勇猛寶可夢'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 5,
    name: 'Gueriaigle',
    genus: 'Pokémon Vaillant'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 6,
    name: 'Washakwil',
    genus: 'Kühnheit'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 7,
    name: 'Braviary',
    genus: 'Pokémon Aguerrido'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 8,
    name: 'Braviary',
    genus: 'Pokémon Baldanza'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 9,
    name: 'Braviary',
    genus: 'Valiant Pokémon'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 11,
    name: 'ウォーグル',
    genus: 'ゆうもうポケモン'
  },
  {
    pokemon_species_id: 628,
    local_language_id: 12,
    name: '勇士雄鹰',
    genus: '勇猛宝可梦'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 1,
    name: 'バルチャイ',
    genus: 'おむつポケモン'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 3,
    name: '벌차이',
    genus: '기저귀포켓몬'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 4,
    name: '禿鷹丫頭',
    genus: '尿布寶可夢'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 5,
    name: 'Vostourno',
    genus: 'Pokémon Couche'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 6,
    name: 'Skallyk',
    genus: 'Windel'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 7,
    name: 'Vullaby',
    genus: 'Pokémon Pañal'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 8,
    name: 'Vullaby',
    genus: 'Pokémon Pannolino'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 9,
    name: 'Vullaby',
    genus: 'Diapered Pokémon'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 11,
    name: 'バルチャイ',
    genus: 'おむつポケモン'
  },
  {
    pokemon_species_id: 629,
    local_language_id: 12,
    name: '秃鹰丫头',
    genus: '尿布宝可梦'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 1,
    name: 'バルジーナ',
    genus: 'ほねわしポケモン'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 3,
    name: '버랜지나',
    genus: '뼈독수리포켓몬'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 4,
    name: '禿鷹娜',
    genus: '骨鷹寶可夢'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 5,
    name: 'Vaututrice',
    genus: 'Pokémon Vostour'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 6,
    name: 'Grypheldis',
    genus: 'Knochenadler'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 7,
    name: 'Mandibuzz',
    genus: 'Pokémon Águila Hueso'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 8,
    name: 'Mandibuzz',
    genus: 'Pokémon Ossaquila'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 9,
    name: 'Mandibuzz',
    genus: 'Bone Vulture Pokémon'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 11,
    name: 'バルジーナ',
    genus: 'ほねわしポケモン'
  },
  {
    pokemon_species_id: 630,
    local_language_id: 12,
    name: '秃鹰娜',
    genus: '骨鹰宝可梦'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 1,
    name: 'クイタラン',
    genus: 'アリクイポケモン'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 3,
    name: '앤티골',
    genus: '개미핥기포켓몬'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 4,
    name: '熔蟻獸',
    genus: '食蟻獸寶可夢'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 5,
    name: 'Aflamanoir',
    genus: 'Pokémon Tamanoir'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 6,
    name: 'Furnifraß',
    genus: 'Ameisenbär'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 7,
    name: 'Heatmor',
    genus: 'Pokémon Hormiguero'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 8,
    name: 'Heatmor',
    genus: 'Pokémon Formichiere'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 9,
    name: 'Heatmor',
    genus: 'Anteater Pokémon'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 11,
    name: 'クイタラン',
    genus: 'アリクイポケモン'
  },
  {
    pokemon_species_id: 631,
    local_language_id: 12,
    name: '熔蚁兽',
    genus: '食蚁兽宝可梦'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 1,
    name: 'アイアント',
    genus: 'てつアリポケモン'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 3,
    name: '아이앤트',
    genus: '철개미포켓몬'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 4,
    name: '鐵蟻',
    genus: '鐵蟻寶可夢'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 5,
    name: 'Fermite',
    genus: 'Pokémon Fourmi Dure'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 6,
    name: 'Fermicula',
    genus: 'Eisenameise'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 7,
    name: 'Durant',
    genus: 'Pokémon Hormigacero'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 8,
    name: 'Durant',
    genus: 'Pokémon Ferformica'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 9,
    name: 'Durant',
    genus: 'Iron Ant Pokémon'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 11,
    name: 'アイアント',
    genus: 'てつアリポケモン'
  },
  {
    pokemon_species_id: 632,
    local_language_id: 12,
    name: '铁蚁',
    genus: '铁蚁宝可梦'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 1,
    name: 'モノズ',
    genus: 'そぼうポケモン'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 3,
    name: '모노두',
    genus: '폭거포켓몬'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 4,
    name: '單首龍',
    genus: '粗魯寶可夢'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 5,
    name: 'Solochi',
    genus: 'Pokémon Rude'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 6,
    name: 'Kapuno',
    genus: 'Haudrauf'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 7,
    name: 'Deino',
    genus: 'Pokémon Tosco'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 8,
    name: 'Deino',
    genus: 'Pokémon Impeto'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 9,
    name: 'Deino',
    genus: 'Irate Pokémon'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 11,
    name: 'モノズ',
    genus: 'そぼうポケモン'
  },
  {
    pokemon_species_id: 633,
    local_language_id: 12,
    name: '单首龙',
    genus: '粗鲁宝可梦'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 1,
    name: 'ジヘッド',
    genus: 'らんぼうポケモン'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 3,
    name: '디헤드',
    genus: '흉포포켓몬'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 4,
    name: '雙首暴龍',
    genus: '粗暴寶可夢'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 5,
    name: 'Diamat',
    genus: 'Pokémon Violent'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 6,
    name: 'Duodino',
    genus: 'Grobheit'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 7,
    name: 'Zweilous',
    genus: 'Pokémon Violento'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 8,
    name: 'Zweilous',
    genus: 'Pokémon Irruenza'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 9,
    name: 'Zweilous',
    genus: 'Hostile Pokémon'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 11,
    name: 'ジヘッド',
    genus: 'らんぼうポケモン'
  },
  {
    pokemon_species_id: 634,
    local_language_id: 12,
    name: '双首暴龙',
    genus: '粗暴宝可梦'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 1,
    name: 'サザンドラ',
    genus: 'きょうぼうポケモン'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 3,
    name: '삼삼드래',
    genus: '난폭포켓몬'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 4,
    name: '三首惡龍',
    genus: '凶暴寶可夢'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 5,
    name: 'Trioxhydre',
    genus: 'Pokémon Brutal'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 6,
    name: 'Trikephalo',
    genus: 'Brutal'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 7,
    name: 'Hydreigon',
    genus: 'Pokémon Voraz'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 8,
    name: 'Hydreigon',
    genus: 'Pokémon Brutale'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 9,
    name: 'Hydreigon',
    genus: 'Brutal Pokémon'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 11,
    name: 'サザンドラ',
    genus: 'きょうぼうポケモン'
  },
  {
    pokemon_species_id: 635,
    local_language_id: 12,
    name: '三首恶龙',
    genus: '凶暴宝可梦'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 1,
    name: 'メラルバ',
    genus: 'たいまつポケモン'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 3,
    name: '활화르바',
    genus: '횃불포켓몬'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 4,
    name: '燃燒蟲',
    genus: '火炬寶可夢'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 5,
    name: 'Pyronille',
    genus: 'Pokémon Torche'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 6,
    name: 'Ignivor',
    genus: 'Fackel'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 7,
    name: 'Larvesta',
    genus: 'Pokémon Antorcha'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 8,
    name: 'Larvesta',
    genus: 'Pokémon Torcia'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 9,
    name: 'Larvesta',
    genus: 'Torch Pokémon'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 11,
    name: 'メラルバ',
    genus: 'たいまつポケモン'
  },
  {
    pokemon_species_id: 636,
    local_language_id: 12,
    name: '燃烧虫',
    genus: '火炬宝可梦'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 1,
    name: 'ウルガモス',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 3,
    name: '불카모스',
    genus: '태양포켓몬'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 4,
    name: '火神蛾',
    genus: '太陽寶可夢'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 5,
    name: 'Pyrax',
    genus: 'Pokémon Soleil'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 6,
    name: 'Ramoth',
    genus: 'Sonne'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 7,
    name: 'Volcarona',
    genus: 'Pokémon Sol'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 8,
    name: 'Volcarona',
    genus: 'Pokémon Sole'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 9,
    name: 'Volcarona',
    genus: 'Sun Pokémon'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 11,
    name: 'ウルガモス',
    genus: 'たいようポケモン'
  },
  {
    pokemon_species_id: 637,
    local_language_id: 12,
    name: '火神蛾',
    genus: '太阳宝可梦'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 1,
    name: 'コバルオン',
    genus: 'てっしんポケモン'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 3,
    name: '코바르온',
    genus: '철심포켓몬'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 4,
    name: '勾帕路翁',
    genus: '鐵心寶可夢'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 5,
    name: 'Cobaltium',
    genus: 'Pokémon Cœur de Fer'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 6,
    name: 'Kobalium',
    genus: 'Eisenkern'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 7,
    name: 'Cobalion',
    genus: 'Pokémon Tesón Acero'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 8,
    name: 'Cobalion',
    genus: 'Pokémon Metalcuore'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 9,
    name: 'Cobalion',
    genus: 'Iron Will Pokémon'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 11,
    name: 'コバルオン',
    genus: 'てっしんポケモン'
  },
  {
    pokemon_species_id: 638,
    local_language_id: 12,
    name: '勾帕路翁',
    genus: '铁心宝可梦'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 1,
    name: 'テラキオン',
    genus: 'がんくつポケモン'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 3,
    name: '테라키온',
    genus: '암굴포켓몬'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 4,
    name: '代拉基翁',
    genus: '岩窟寶可夢'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 5,
    name: 'Terrakium',
    genus: 'Pokémon Grotte'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 6,
    name: 'Terrakium',
    genus: 'Felsenhöhle'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 7,
    name: 'Terrakion',
    genus: 'Pokémon Gruta'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 8,
    name: 'Terrakion',
    genus: 'Pokémon Caverna'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 9,
    name: 'Terrakion',
    genus: 'Cavern Pokémon'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 11,
    name: 'テラキオン',
    genus: 'がんくつポケモン'
  },
  {
    pokemon_species_id: 639,
    local_language_id: 12,
    name: '代拉基翁',
    genus: '岩窟宝可梦'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 1,
    name: 'ビリジオン',
    genus: 'そうげんポケモン'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 3,
    name: '비리디온',
    genus: '초원포켓몬'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 4,
    name: '畢力吉翁',
    genus: '草原寶可夢'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 5,
    name: 'Viridium',
    genus: 'Pokémon Plaine Verte'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 6,
    name: 'Viridium',
    genus: 'Wiese'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 7,
    name: 'Virizion',
    genus: 'Pokémon Prado'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 8,
    name: 'Virizion',
    genus: 'Pokémon Prateria'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 9,
    name: 'Virizion',
    genus: 'Grassland Pokémon'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 11,
    name: 'ビリジオン',
    genus: 'そうげんポケモン'
  },
  {
    pokemon_species_id: 640,
    local_language_id: 12,
    name: '毕力吉翁',
    genus: '草原宝可梦'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 1,
    name: 'トルネロス',
    genus: 'せんぷうポケモン'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 3,
    name: '토네로스',
    genus: '선풍포켓몬'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 4,
    name: '龍捲雲',
    genus: '旋風寶可夢'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 5,
    name: 'Boréas',
    genus: 'Pokémon Tornade'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 6,
    name: 'Boreos',
    genus: 'Wirbelsturm'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 7,
    name: 'Tornadus',
    genus: 'Pokémon Torbellino'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 8,
    name: 'Tornadus',
    genus: 'Pokémon Turbinio'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 9,
    name: 'Tornadus',
    genus: 'Cyclone Pokémon'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 11,
    name: 'トルネロス',
    genus: 'せんぷうポケモン'
  },
  {
    pokemon_species_id: 641,
    local_language_id: 12,
    name: '龙卷云',
    genus: '旋风宝可梦'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 1,
    name: 'ボルトロス',
    genus: 'らいげきポケモン'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 3,
    name: '볼트로스',
    genus: '뇌격포켓몬'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 4,
    name: '雷電雲',
    genus: '雷擊寶可夢'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 5,
    name: 'Fulguris',
    genus: 'Pokémon Foudroyeur'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 6,
    name: 'Voltolos',
    genus: 'Torpedo'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 7,
    name: 'Thundurus',
    genus: 'Pokémon Centella'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 8,
    name: 'Thundurus',
    genus: 'Pokémon Fulminante'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 9,
    name: 'Thundurus',
    genus: 'Bolt Strike Pokémon'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 11,
    name: 'ボルトロス',
    genus: 'らいげきポケモン'
  },
  {
    pokemon_species_id: 642,
    local_language_id: 12,
    name: '雷电云',
    genus: '雷击宝可梦'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 1,
    name: 'レシラム',
    genus: 'はくようポケモン'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 3,
    name: '레시라무',
    genus: '백양포켓몬'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 4,
    name: '萊希拉姆',
    genus: '白陽寶可夢'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 5,
    name: 'Reshiram',
    genus: 'Pokémon Blanc Réel'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 6,
    name: 'Reshiram',
    genus: 'Wahres Weiß'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 7,
    name: 'Reshiram',
    genus: 'Pokémon Blanco Veraz'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 8,
    name: 'Reshiram',
    genus: 'Pokémon Bianco Verità'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 9,
    name: 'Reshiram',
    genus: 'Vast White Pokémon'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 11,
    name: 'レシラム',
    genus: 'はくようポケモン'
  },
  {
    pokemon_species_id: 643,
    local_language_id: 12,
    name: '莱希拉姆',
    genus: '白阳宝可梦'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 1,
    name: 'ゼクロム',
    genus: 'こくいんポケモン'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 3,
    name: '제크로무',
    genus: '흑음포켓몬'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 4,
    name: '捷克羅姆',
    genus: '黑陰寶可夢'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 5,
    name: 'Zekrom',
    genus: 'Pokémon Noir Idéal'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 6,
    name: 'Zekrom',
    genus: 'Reines Schwarz'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 7,
    name: 'Zekrom',
    genus: 'Pokémon Negro Puro'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 8,
    name: 'Zekrom',
    genus: 'Pokémon Nero Ideale'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 9,
    name: 'Zekrom',
    genus: 'Deep Black Pokémon'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 11,
    name: 'ゼクロム',
    genus: 'こくいんポケモン'
  },
  {
    pokemon_species_id: 644,
    local_language_id: 12,
    name: '捷克罗姆',
    genus: '黑阴宝可梦'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 1,
    name: 'ランドロス',
    genus: 'ほうじょうポケモン'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 3,
    name: '랜드로스',
    genus: '풍요포켓몬'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 4,
    name: '土地雲',
    genus: '豐饒寶可夢'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 5,
    name: 'Démétéros',
    genus: 'Pokémon Fertilité'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 6,
    name: 'Demeteros',
    genus: 'Reichtum'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 7,
    name: 'Landorus',
    genus: 'Pokémon Fertilidad'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 8,
    name: 'Landorus',
    genus: 'Pokémon Fertilità'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 9,
    name: 'Landorus',
    genus: 'Abundance Pokémon'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 11,
    name: 'ランドロス',
    genus: 'ほうじょうポケモン'
  },
  {
    pokemon_species_id: 645,
    local_language_id: 12,
    name: '土地云',
    genus: '丰饶宝可梦'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 1,
    name: 'キュレム',
    genus: 'きょうかいポケモン'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 3,
    name: '큐레무',
    genus: '경계포켓몬'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 4,
    name: '酋雷姆',
    genus: '境界寶可夢'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 5,
    name: 'Kyurem',
    genus: 'Pokémon Frontière'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 6,
    name: 'Kyurem',
    genus: 'Schwelle'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 7,
    name: 'Kyurem',
    genus: 'Pokémon Frontera'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 8,
    name: 'Kyurem',
    genus: 'Pokémon Confine'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 9,
    name: 'Kyurem',
    genus: 'Boundary Pokémon'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 11,
    name: 'キュレム',
    genus: 'きょうかいポケモン'
  },
  {
    pokemon_species_id: 646,
    local_language_id: 12,
    name: '酋雷姆',
    genus: '境界宝可梦'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 1,
    name: 'ケルディオ',
    genus: 'わかごまポケモン'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 3,
    name: '케르디오',
    genus: '망아지포켓몬'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 4,
    name: '凱路迪歐',
    genus: '幼馬寶可夢'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 5,
    name: 'Keldeo',
    genus: 'Pokémon Poulain'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 6,
    name: 'Keldeo',
    genus: 'Fohlen'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 7,
    name: 'Keldeo',
    genus: 'Pokémon Potro'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 8,
    name: 'Keldeo',
    genus: 'Pokémon Puledro'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 9,
    name: 'Keldeo',
    genus: 'Colt Pokémon'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 11,
    name: 'ケルディオ',
    genus: 'わかごまポケモン'
  },
  {
    pokemon_species_id: 647,
    local_language_id: 12,
    name: '凯路迪欧',
    genus: '幼马宝可梦'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 1,
    name: 'メロエッタ',
    genus: 'せんりつポケモン'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 3,
    name: '메로엣타',
    genus: '선율포켓몬'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 4,
    name: '美洛耶塔',
    genus: '旋律寶可夢'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 5,
    name: 'Meloetta',
    genus: 'Pokémon Mélodie'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 6,
    name: 'Meloetta',
    genus: 'Melodie'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 7,
    name: 'Meloetta',
    genus: 'Pokémon Melodía'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 8,
    name: 'Meloetta',
    genus: 'Pokémon Melodia'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 9,
    name: 'Meloetta',
    genus: 'Melody Pokémon'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 11,
    name: 'メロエッタ',
    genus: 'せんりつポケモン'
  },
  {
    pokemon_species_id: 648,
    local_language_id: 12,
    name: '美洛耶塔',
    genus: '旋律宝可梦'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 1,
    name: 'ゲノセクト',
    genus: 'こせいだいポケモン'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 3,
    name: '게노세크트',
    genus: '고생대포켓몬'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 4,
    name: '蓋諾賽克特',
    genus: '古生代寶可夢'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 5,
    name: 'Genesect',
    genus: 'Pokémon Paléozoïque'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 6,
    name: 'Genesect',
    genus: 'Paläozoikum'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 7,
    name: 'Genesect',
    genus: 'Pokémon Paleozoico'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 8,
    name: 'Genesect',
    genus: 'Pokémon Paleozoico'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 9,
    name: 'Genesect',
    genus: 'Paleozoic Pokémon'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 11,
    name: 'ゲノセクト',
    genus: 'こせいだいポケモン'
  },
  {
    pokemon_species_id: 649,
    local_language_id: 12,
    name: '盖诺赛克特',
    genus: '古生代宝可梦'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 1,
    name: 'ハリマロン',
    genus: 'いがぐりポケモン'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 3,
    name: '도치마론',
    genus: '밤송이포켓몬'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 4,
    name: '哈力栗',
    genus: '刺栗寶可夢'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 5,
    name: 'Marisson',
    genus: 'Pokémon Bogue'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 6,
    name: 'Igamaro',
    genus: 'Stachelkopf'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 7,
    name: 'Chespin',
    genus: 'Pokémon Erizo'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 8,
    name: 'Chespin',
    genus: 'Pokémon Castanriccio'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 9,
    name: 'Chespin',
    genus: 'Spiny Nut Pokémon'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 11,
    name: 'ハリマロン',
    genus: 'いがぐりポケモン'
  },
  {
    pokemon_species_id: 650,
    local_language_id: 12,
    name: '哈力栗',
    genus: '刺栗宝可梦'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 1,
    name: 'ハリボーグ',
    genus: 'とげよろいポケモン'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 3,
    name: '도치보구',
    genus: '가시갑옷포켓몬'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 4,
    name: '胖胖哈力',
    genus: '刺鎧寶可夢'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 5,
    name: 'Boguérisse',
    genus: 'Pokémon Épinarmure'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 6,
    name: 'Igastarnish',
    genus: 'Spitzpanzer'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 7,
    name: 'Quilladin',
    genus: 'Pokémon Corazaespín'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 8,
    name: 'Quilladin',
    genus: 'Pokémon Spincorazza'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 9,
    name: 'Quilladin',
    genus: 'Spiny Armor Pokémon'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 11,
    name: 'ハリボーグ',
    genus: 'とげよろいポケモン'
  },
  {
    pokemon_species_id: 651,
    local_language_id: 12,
    name: '胖胖哈力',
    genus: '刺铠宝可梦'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 1,
    name: 'ブリガロン',
    genus: 'とげよろいポケモン'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 3,
    name: '브리가론',
    genus: '가시갑옷포켓몬'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 4,
    name: '布里卡隆',
    genus: '刺鎧寶可夢'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 5,
    name: 'Blindépique',
    genus: 'Pokémon Épinarmure'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 6,
    name: 'Brigaron',
    genus: 'Spitzpanzer'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 7,
    name: 'Chesnaught',
    genus: 'Pokémon Corazaespín'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 8,
    name: 'Chesnaught',
    genus: 'Pokémon Spincorazza'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 9,
    name: 'Chesnaught',
    genus: 'Spiny Armor Pokémon'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 11,
    name: 'ブリガロン',
    genus: 'とげよろいポケモン'
  },
  {
    pokemon_species_id: 652,
    local_language_id: 12,
    name: '布里卡隆',
    genus: '刺铠宝可梦'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 1,
    name: 'フォッコ',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 3,
    name: '푸호꼬',
    genus: '여우포켓몬'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 4,
    name: '火狐狸',
    genus: '狐狸寶可夢'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 5,
    name: 'Feunnec',
    genus: 'Pokémon Renard'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 6,
    name: 'Fynx',
    genus: 'Fuchs'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 7,
    name: 'Fennekin',
    genus: 'Pokémon Zorro'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 8,
    name: 'Fennekin',
    genus: 'Pokémon Volpe'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 9,
    name: 'Fennekin',
    genus: 'Fox Pokémon'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 11,
    name: 'フォッコ',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 653,
    local_language_id: 12,
    name: '火狐狸',
    genus: '狐狸宝可梦'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 1,
    name: 'テールナー',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 3,
    name: '테르나',
    genus: '여우포켓몬'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 4,
    name: '長尾火狐',
    genus: '狐狸寶可夢'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 5,
    name: 'Roussil',
    genus: 'Pokémon Renard'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 6,
    name: 'Rutena',
    genus: 'Fuchs'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 7,
    name: 'Braixen',
    genus: 'Pokémon Zorro'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 8,
    name: 'Braixen',
    genus: 'Pokémon Volpe'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 9,
    name: 'Braixen',
    genus: 'Fox Pokémon'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 11,
    name: 'テールナー',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 654,
    local_language_id: 12,
    name: '长尾火狐',
    genus: '狐狸宝可梦'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 1,
    name: 'マフォクシー',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 3,
    name: '마폭시',
    genus: '여우포켓몬'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 4,
    name: '妖火紅狐',
    genus: '狐狸寶可夢'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 5,
    name: 'Goupelin',
    genus: 'Pokémon Renard'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 6,
    name: 'Fennexis',
    genus: 'Fuchs'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 7,
    name: 'Delphox',
    genus: 'Pokémon Zorro'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 8,
    name: 'Delphox',
    genus: 'Pokémon Volpe'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 9,
    name: 'Delphox',
    genus: 'Fox Pokémon'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 11,
    name: 'マフォクシー',
    genus: 'キツネポケモン'
  },
  {
    pokemon_species_id: 655,
    local_language_id: 12,
    name: '妖火红狐',
    genus: '狐狸宝可梦'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 1,
    name: 'ケロマツ',
    genus: 'あわがえるポケモン'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 3,
    name: '개구마르',
    genus: '거품개구리포켓몬'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 4,
    name: '呱呱泡蛙',
    genus: '泡蛙寶可夢'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 5,
    name: 'Grenousse',
    genus: 'Pokémon Crapobulle'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 6,
    name: 'Froxy',
    genus: 'Blubbfrosch'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 7,
    name: 'Froakie',
    genus: 'Pokémon Burburrana'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 8,
    name: 'Froakie',
    genus: 'Pokémon Schiumorana'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 9,
    name: 'Froakie',
    genus: 'Bubble Frog Pokémon'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 11,
    name: 'ケロマツ',
    genus: 'あわがえるポケモン'
  },
  {
    pokemon_species_id: 656,
    local_language_id: 12,
    name: '呱呱泡蛙',
    genus: '泡蛙宝可梦'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 1,
    name: 'ゲコガシラ',
    genus: 'あわがえるポケモン'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 3,
    name: '개굴반장',
    genus: '거품개구리포켓몬'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 4,
    name: '呱頭蛙',
    genus: '泡蛙寶可夢'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 5,
    name: 'Croâporal',
    genus: 'Pokémon Crapobulle'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 6,
    name: 'Amphizel',
    genus: 'Blubbfrosch'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 7,
    name: 'Frogadier',
    genus: 'Pokémon Burburrana'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 8,
    name: 'Frogadier',
    genus: 'Pokémon Schiumorana'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 9,
    name: 'Frogadier',
    genus: 'Bubble Frog Pokémon'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 11,
    name: 'ゲコガシラ',
    genus: 'あわがえるポケモン'
  },
  {
    pokemon_species_id: 657,
    local_language_id: 12,
    name: '呱头蛙',
    genus: '泡蛙宝可梦'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 1,
    name: 'ゲッコウガ',
    genus: 'しのびポケモン'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 3,
    name: '개굴닌자',
    genus: '시노비포켓몬'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 4,
    name: '甲賀忍蛙',
    genus: '忍者寶可夢'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 5,
    name: 'Amphinobi',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 6,
    name: 'Quajutsu',
    genus: 'Ninja'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 7,
    name: 'Greninja',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 8,
    name: 'Greninja',
    genus: 'Pokémon Ninja'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 9,
    name: 'Greninja',
    genus: 'Ninja Pokémon'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 11,
    name: 'ゲッコウガ',
    genus: 'しのびポケモン'
  },
  {
    pokemon_species_id: 658,
    local_language_id: 12,
    name: '甲贺忍蛙',
    genus: '忍者宝可梦'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 1,
    name: 'ホルビー',
    genus: 'あなほりポケモン'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 3,
    name: '파르빗',
    genus: '땅구멍파기포켓몬'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 4,
    name: '掘掘兔',
    genus: '挖洞寶可夢'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 5,
    name: 'Sapereau',
    genus: 'Pokémon Fouisseur'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 6,
    name: 'Scoppel',
    genus: 'Baugräber'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 7,
    name: 'Bunnelby',
    genus: 'Pokémon Excavador'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 8,
    name: 'Bunnelby',
    genus: 'Pokémon Scavabuche'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 9,
    name: 'Bunnelby',
    genus: 'Digging Pokémon'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 11,
    name: 'ホルビー',
    genus: 'あなほりポケモン'
  },
  {
    pokemon_species_id: 659,
    local_language_id: 12,
    name: '掘掘兔',
    genus: '挖洞宝可梦'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 1,
    name: 'ホルード',
    genus: 'あなほりポケモン'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 3,
    name: '파르토',
    genus: '땅구멍파기포켓몬'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 4,
    name: '掘地兔',
    genus: '挖洞寶可夢'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 5,
    name: 'Excavarenne',
    genus: 'Pokémon Fouisseur'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 6,
    name: 'Grebbit',
    genus: 'Baugräber'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 7,
    name: 'Diggersby',
    genus: 'Pokémon Excavador'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 8,
    name: 'Diggersby',
    genus: 'Pokémon Scavabuche'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 9,
    name: 'Diggersby',
    genus: 'Digging Pokémon'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 11,
    name: 'ホルード',
    genus: 'あなほりポケモン'
  },
  {
    pokemon_species_id: 660,
    local_language_id: 12,
    name: '掘地兔',
    genus: '挖洞宝可梦'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 1,
    name: 'ヤヤコマ',
    genus: 'コマドリポケモン'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 3,
    name: '화살꼬빈',
    genus: '울새포켓몬'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 4,
    name: '小箭雀',
    genus: '知更鳥寶可夢'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 5,
    name: 'Passerouge',
    genus: 'Pokémon Rougegorge'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 6,
    name: 'Dartiri',
    genus: 'Rotkehlchen'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 7,
    name: 'Fletchling',
    genus: 'Pokémon Petirrojo'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 8,
    name: 'Fletchling',
    genus: 'Pokémon Pettirosso'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 9,
    name: 'Fletchling',
    genus: 'Tiny Robin Pokémon'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 11,
    name: 'ヤヤコマ',
    genus: 'コマドリポケモン'
  },
  {
    pokemon_species_id: 661,
    local_language_id: 12,
    name: '小箭雀',
    genus: '知更鸟宝可梦'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 1,
    name: 'ヒノヤコマ',
    genus: 'ひのこポケモン'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 3,
    name: '불화살빈',
    genus: '불티포켓몬'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 4,
    name: '火箭雀',
    genus: '火花寶可夢'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 5,
    name: 'Braisillon',
    genus: 'Pokémon Braise'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 6,
    name: 'Dartignis',
    genus: 'Funkenregen'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 7,
    name: 'Fletchinder',
    genus: 'Pokémon Lumbre'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 8,
    name: 'Fletchinder',
    genus: 'Pokémon Sfavillante'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 9,
    name: 'Fletchinder',
    genus: 'Ember Pokémon'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 11,
    name: 'ヒノヤコマ',
    genus: 'ひのこポケモン'
  },
  {
    pokemon_species_id: 662,
    local_language_id: 12,
    name: '火箭雀',
    genus: '火花宝可梦'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 1,
    name: 'ファイアロー',
    genus: 'れっかポケモン'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 3,
    name: '파이어로',
    genus: '열화포켓몬'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 4,
    name: '烈箭鷹',
    genus: '烈火寶可夢'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 5,
    name: 'Flambusard',
    genus: 'Pokémon Fournaise'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 6,
    name: 'Fiaro',
    genus: 'Stichflamme'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 7,
    name: 'Talonflame',
    genus: 'Pokémon Flamígero'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 8,
    name: 'Talonflame',
    genus: 'Pokémon Ardifiamma'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 9,
    name: 'Talonflame',
    genus: 'Scorching Pokémon'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 11,
    name: 'ファイアロー',
    genus: 'れっかポケモン'
  },
  {
    pokemon_species_id: 663,
    local_language_id: 12,
    name: '烈箭鹰',
    genus: '烈火宝可梦'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 1,
    name: 'コフキムシ',
    genus: 'こなふきポケモン'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 3,
    name: '분이벌레',
    genus: '가루뿜기포켓몬'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 4,
    name: '粉蝶蟲',
    genus: '噴粉寶可夢'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 5,
    name: 'Lépidonille',
    genus: 'Pokémon Exhalécaille'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 6,
    name: 'Purmel',
    genus: 'Puderinsekt'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 7,
    name: 'Scatterbug',
    genus: 'Pokémon Tiraescamas'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 8,
    name: 'Scatterbug',
    genus: 'Pokémon Tirascaglie'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 9,
    name: 'Scatterbug',
    genus: 'Scatterdust Pokémon'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 11,
    name: 'コフキムシ',
    genus: 'こなふきポケモン'
  },
  {
    pokemon_species_id: 664,
    local_language_id: 12,
    name: '粉蝶虫',
    genus: '喷粉宝可梦'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 1,
    name: 'コフーライ',
    genus: 'こなふきポケモン'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 3,
    name: '분떠도리',
    genus: '가루뿜기포켓몬'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 4,
    name: '粉蝶蛹',
    genus: '噴粉寶可夢'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 5,
    name: 'Pérégrain',
    genus: 'Pokémon Exhalécaille'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 6,
    name: 'Puponcho',
    genus: 'Puderinsekt'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 7,
    name: 'Spewpa',
    genus: 'Pokémon Tiraescamas'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 8,
    name: 'Spewpa',
    genus: 'Pokémon Tirascaglie'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 9,
    name: 'Spewpa',
    genus: 'Scatterdust Pokémon'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 11,
    name: 'コフーライ',
    genus: 'こなふきポケモン'
  },
  {
    pokemon_species_id: 665,
    local_language_id: 12,
    name: '粉蝶蛹',
    genus: '喷粉宝可梦'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 1,
    name: 'ビビヨン',
    genus: 'りんぷんポケモン'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 3,
    name: '비비용',
    genus: '인분포켓몬'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 4,
    name: '彩粉蝶',
    genus: '鱗粉寶可夢'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 5,
    name: 'Prismillon',
    genus: 'Pokémon Lépidécaille'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 6,
    name: 'Vivillon',
    genus: 'Flügelstaub'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 7,
    name: 'Vivillon',
    genus: 'Pokémon Escamaposa'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 8,
    name: 'Vivillon',
    genus: 'Pokémon Farfascaglia'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 9,
    name: 'Vivillon',
    genus: 'Scale Pokémon'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 11,
    name: 'ビビヨン',
    genus: 'りんぷんポケモン'
  },
  {
    pokemon_species_id: 666,
    local_language_id: 12,
    name: '彩粉蝶',
    genus: '鳞粉宝可梦'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 1,
    name: 'シシコ',
    genus: 'わかじしポケモン'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 3,
    name: '레오꼬',
    genus: '어린사자포켓몬'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 4,
    name: '小獅獅',
    genus: '幼獅寶可夢'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 5,
    name: 'Hélionceau',
    genus: 'Pokémon Lionceau'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 6,
    name: 'Leufeo',
    genus: 'Junglöwe'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 7,
    name: 'Litleo',
    genus: 'Pokémon Leoncito'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 8,
    name: 'Litleo',
    genus: 'Pokémon Leoncino'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 9,
    name: 'Litleo',
    genus: 'Lion Cub Pokémon'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 11,
    name: 'シシコ',
    genus: 'わかじしポケモン'
  },
  {
    pokemon_species_id: 667,
    local_language_id: 12,
    name: '小狮狮',
    genus: '幼狮宝可梦'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 1,
    name: 'カエンジシ',
    genus: 'おうじゃポケモン'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 3,
    name: '화염레오',
    genus: '임금포켓몬'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 4,
    name: '火炎獅',
    genus: '王者寶可夢'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 5,
    name: 'Némélios',
    genus: 'Pokémon Royal'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 6,
    name: 'Pyroleo',
    genus: 'Monarch'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 7,
    name: 'Pyroar',
    genus: 'Pokémon Regio'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 8,
    name: 'Pyroar',
    genus: 'Pokémon Reale'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 9,
    name: 'Pyroar',
    genus: 'Royal Pokémon'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 11,
    name: 'カエンジシ',
    genus: 'おうじゃポケモン'
  },
  {
    pokemon_species_id: 668,
    local_language_id: 12,
    name: '火炎狮',
    genus: '王者宝可梦'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 1,
    name: 'フラベベ',
    genus: 'いちりんポケモン'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 3,
    name: '플라베베',
    genus: '한송이포켓몬'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 4,
    name: '花蓓蓓',
    genus: '單朵寶可夢'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 5,
    name: 'Flabébé',
    genus: 'Pokémon Uniflore'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 6,
    name: 'Flabébé',
    genus: 'Einblütler'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 7,
    name: 'Flabébé',
    genus: 'Pokémon Monoflor'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 8,
    name: 'Flabébé',
    genus: 'Pokémon Monofiore'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 9,
    name: 'Flabébé',
    genus: 'Single Bloom Pokémon'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 11,
    name: 'フラベベ',
    genus: 'いちりんポケモン'
  },
  {
    pokemon_species_id: 669,
    local_language_id: 12,
    name: '花蓓蓓',
    genus: '单朵宝可梦'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 1,
    name: 'フラエッテ',
    genus: 'いちりんポケモン'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 3,
    name: '플라엣테',
    genus: '한송이포켓몬'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 4,
    name: '花葉蒂',
    genus: '單朵寶可夢'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 5,
    name: 'Floette',
    genus: 'Pokémon Uniflore'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 6,
    name: 'Floette',
    genus: 'Einblütler'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 7,
    name: 'Floette',
    genus: 'Pokémon Monoflor'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 8,
    name: 'Floette',
    genus: 'Pokémon Monofiore'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 9,
    name: 'Floette',
    genus: 'Single Bloom Pokémon'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 11,
    name: 'フラエッテ',
    genus: 'いちりんポケモン'
  },
  {
    pokemon_species_id: 670,
    local_language_id: 12,
    name: '花叶蒂',
    genus: '单朵宝可梦'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 1,
    name: 'フラージェス',
    genus: 'ガーデンポケモン'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 3,
    name: '플라제스',
    genus: '가든포켓몬'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 4,
    name: '花潔夫人',
    genus: '花園寶可夢'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 5,
    name: 'Florges',
    genus: 'Pokémon Jardin'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 6,
    name: 'Florges',
    genus: 'Garten'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 7,
    name: 'Florges',
    genus: 'Pokémon Jardín'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 8,
    name: 'Florges',
    genus: 'Pokémon Giardino'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 9,
    name: 'Florges',
    genus: 'Garden Pokémon'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 11,
    name: 'フラージェス',
    genus: 'ガーデンポケモン'
  },
  {
    pokemon_species_id: 671,
    local_language_id: 12,
    name: '花洁夫人',
    genus: '花园宝可梦'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 1,
    name: 'メェークル',
    genus: 'ライドポケモン'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 3,
    name: '메이클',
    genus: '라이드포켓몬'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 4,
    name: '坐騎小羊',
    genus: '坐騎寶可夢'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 5,
    name: 'Cabriolaine',
    genus: 'Pokémon Monture'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 6,
    name: 'Mähikel',
    genus: 'Ritt'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 7,
    name: 'Skiddo',
    genus: 'Pokémon Montura'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 8,
    name: 'Skiddo',
    genus: 'Pokémon Cavalcatura'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 9,
    name: 'Skiddo',
    genus: 'Mount Pokémon'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 11,
    name: 'メェークル',
    genus: 'ライドポケモン'
  },
  {
    pokemon_species_id: 672,
    local_language_id: 12,
    name: '坐骑小羊',
    genus: '坐骑宝可梦'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 1,
    name: 'ゴーゴート',
    genus: 'ライドポケモン'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 3,
    name: '고고트',
    genus: '라이드포켓몬'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 4,
    name: '坐騎山羊',
    genus: '坐騎寶可夢'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 5,
    name: 'Chevroum',
    genus: 'Pokémon Monture'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 6,
    name: 'Chevrumm',
    genus: 'Ritt'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 7,
    name: 'Gogoat',
    genus: 'Pokémon Montura'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 8,
    name: 'Gogoat',
    genus: 'Pokémon Cavalcatura'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 9,
    name: 'Gogoat',
    genus: 'Mount Pokémon'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 11,
    name: 'ゴーゴート',
    genus: 'ライドポケモン'
  },
  {
    pokemon_species_id: 673,
    local_language_id: 12,
    name: '坐骑山羊',
    genus: '坐骑宝可梦'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 1,
    name: 'ヤンチャム',
    genus: 'やんちゃポケモン'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 3,
    name: '판짱',
    genus: '개구쟁이포켓몬'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 4,
    name: '頑皮熊貓',
    genus: '頑皮寶可夢'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 5,
    name: 'Pandespiègle',
    genus: 'Pokémon Garnement'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 6,
    name: 'Pam-Pam',
    genus: 'Verspielt'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 7,
    name: 'Pancham',
    genus: 'Pokémon Juguetón'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 8,
    name: 'Pancham',
    genus: 'Pokémon Briccone'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 9,
    name: 'Pancham',
    genus: 'Playful Pokémon'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 11,
    name: 'ヤンチャム',
    genus: 'やんちゃポケモン'
  },
  {
    pokemon_species_id: 674,
    local_language_id: 12,
    name: '顽皮熊猫',
    genus: '顽皮宝可梦'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 1,
    name: 'ゴロンダ',
    genus: 'こわもてポケモン'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 3,
    name: '부란다',
    genus: '무서운얼굴포켓몬'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 4,
    name: '流氓熊貓',
    genus: '惡顏寶可夢'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 5,
    name: 'Pandarbare',
    genus: 'Pokémon Patibulaire'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 6,
    name: 'Pandagro',
    genus: 'Gaunerblick'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 7,
    name: 'Pangoro',
    genus: 'Pokémon Rostro Fiero'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 8,
    name: 'Pangoro',
    genus: 'Pokémon Occhiotruce'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 9,
    name: 'Pangoro',
    genus: 'Daunting Pokémon'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 11,
    name: 'ゴロンダ',
    genus: 'こわもてポケモン'
  },
  {
    pokemon_species_id: 675,
    local_language_id: 12,
    name: '流氓熊猫',
    genus: '恶颜宝可梦'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 1,
    name: 'トリミアン',
    genus: 'プードルポケモン'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 3,
    name: '트리미앙',
    genus: '푸들포켓몬'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 4,
    name: '多麗米亞',
    genus: '貴賓犬寶可夢'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 5,
    name: 'Couafarel',
    genus: 'Pokémon Caniche'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 6,
    name: 'Coiffwaff',
    genus: 'Pudel'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 7,
    name: 'Furfrou',
    genus: 'Pokémon Caniche'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 8,
    name: 'Furfrou',
    genus: 'Pokémon Barboncino'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 9,
    name: 'Furfrou',
    genus: 'Poodle Pokémon'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 11,
    name: 'トリミアン',
    genus: 'プードルポケモン'
  },
  {
    pokemon_species_id: 676,
    local_language_id: 12,
    name: '多丽米亚',
    genus: '贵宾犬宝可梦'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 1,
    name: 'ニャスパー',
    genus: 'じせいポケモン'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 3,
    name: '냐스퍼',
    genus: '자제포켓몬'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 4,
    name: '妙喵',
    genus: '自制寶可夢'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 5,
    name: 'Psystigri',
    genus: 'Pokémon Retenue'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 6,
    name: 'Psiau',
    genus: 'Zügelung'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 7,
    name: 'Espurr',
    genus: 'Pokémon Moderación'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 8,
    name: 'Espurr',
    genus: 'Pokémon Moderazione'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 9,
    name: 'Espurr',
    genus: 'Restraint Pokémon'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 11,
    name: 'ニャスパー',
    genus: 'じせいポケモン'
  },
  {
    pokemon_species_id: 677,
    local_language_id: 12,
    name: '妙喵',
    genus: '自制宝可梦'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 1,
    name: 'ニャオニクス',
    genus: 'よくせいポケモン'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 3,
    name: '냐오닉스',
    genus: '억제포켓몬'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 4,
    name: '超能妙喵',
    genus: '抑制寶可夢'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 5,
    name: 'Mistigrix',
    genus: 'Pokémon SelfContrôle'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 6,
    name: 'Psiaugon',
    genus: 'Fassung'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 7,
    name: 'Meowstic',
    genus: 'Pokémon Autocontrol'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 8,
    name: 'Meowstic',
    genus: 'Pokémon Temperanza'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 9,
    name: 'Meowstic',
    genus: 'Constraint Pokémon'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 11,
    name: 'ニャオニクス',
    genus: 'よくせいポケモン'
  },
  {
    pokemon_species_id: 678,
    local_language_id: 12,
    name: '超能妙喵',
    genus: '抑制宝可梦'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 1,
    name: 'ヒトツキ',
    genus: 'とうけんポケモン'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 3,
    name: '단칼빙',
    genus: '도검포켓몬'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 4,
    name: '獨劍鞘',
    genus: '刀劍寶可夢'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 5,
    name: 'Monorpale',
    genus: 'Pokémon Glaive'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 6,
    name: 'Gramokles',
    genus: 'Klingenkraft'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 7,
    name: 'Honedge',
    genus: 'Pokémon Tizona'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 8,
    name: 'Honedge',
    genus: 'Pokémon Armabianca'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 9,
    name: 'Honedge',
    genus: 'Sword Pokémon'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 11,
    name: 'ヒトツキ',
    genus: 'とうけんポケモン'
  },
  {
    pokemon_species_id: 679,
    local_language_id: 12,
    name: '独剑鞘',
    genus: '刀剑宝可梦'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 1,
    name: 'ニダンギル',
    genus: 'とうけんポケモン'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 3,
    name: '쌍검킬',
    genus: '도검포켓몬'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 4,
    name: '雙劍鞘',
    genus: '刀劍寶可夢'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 5,
    name: 'Dimoclès',
    genus: 'Pokémon Glaive'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 6,
    name: 'Duokles',
    genus: 'Klingenkraft'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 7,
    name: 'Doublade',
    genus: 'Pokémon Tizona'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 8,
    name: 'Doublade',
    genus: 'Pokémon Armabianca'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 9,
    name: 'Doublade',
    genus: 'Sword Pokémon'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 11,
    name: 'ニダンギル',
    genus: 'とうけんポケモン'
  },
  {
    pokemon_species_id: 680,
    local_language_id: 12,
    name: '双剑鞘',
    genus: '刀剑宝可梦'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 1,
    name: 'ギルガルド',
    genus: 'おうけんポケモン'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 3,
    name: '킬가르도',
    genus: '왕검포켓몬'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 4,
    name: '堅盾劍怪',
    genus: '王劍寶可夢'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 5,
    name: 'Exagide',
    genus: 'Pokémon Noble Lame'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 6,
    name: 'Durengard',
    genus: 'Königsklinge'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 7,
    name: 'Aegislash',
    genus: 'Pokémon Espada Real'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 8,
    name: 'Aegislash',
    genus: 'Pokémon Spadareale'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 9,
    name: 'Aegislash',
    genus: 'Royal Sword Pokémon'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 11,
    name: 'ギルガルド',
    genus: 'おうけんポケモン'
  },
  {
    pokemon_species_id: 681,
    local_language_id: 12,
    name: '坚盾剑怪',
    genus: '王剑宝可梦'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 1,
    name: 'シュシュプ',
    genus: 'こうすいポケモン'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 3,
    name: '슈쁘',
    genus: '향수포켓몬'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 4,
    name: '粉香香',
    genus: '香水寶可夢'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 5,
    name: 'Fluvetin',
    genus: 'Pokémon Fragrance'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 6,
    name: 'Parfi',
    genus: 'Parfüm'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 7,
    name: 'Spritzee',
    genus: 'Pokémon Aroma'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 8,
    name: 'Spritzee',
    genus: 'Pokémon Profumo'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 9,
    name: 'Spritzee',
    genus: 'Perfume Pokémon'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 11,
    name: 'シュシュプ',
    genus: 'こうすいポケモン'
  },
  {
    pokemon_species_id: 682,
    local_language_id: 12,
    name: '粉香香',
    genus: '香水宝可梦'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 1,
    name: 'フレフワン',
    genus: 'ほうこうポケモン'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 3,
    name: '프레프티르',
    genus: '방향포켓몬'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 4,
    name: '芳香精',
    genus: '芳香寶可夢'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 5,
    name: 'Cocotine',
    genus: 'Pokémon Parfum'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 6,
    name: 'Parfinesse',
    genus: 'Duft'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 7,
    name: 'Aromatisse',
    genus: 'Pokémon Fragancia'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 8,
    name: 'Aromatisse',
    genus: 'Pokémon Fragranza'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 9,
    name: 'Aromatisse',
    genus: 'Fragrance Pokémon'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 11,
    name: 'フレフワン',
    genus: 'ほうこうポケモン'
  },
  {
    pokemon_species_id: 683,
    local_language_id: 12,
    name: '芳香精',
    genus: '芳香宝可梦'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 1,
    name: 'ペロッパフ',
    genus: 'わたあめポケモン'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 3,
    name: '나룸퍼프',
    genus: '솜사탕포켓몬'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 4,
    name: '綿綿泡芙',
    genus: '棉花糖寶可夢'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 5,
    name: 'Sucroquin',
    genus: 'Pokémon Confiserie'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 6,
    name: 'Flauschling',
    genus: 'Zuckerwatte'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 7,
    name: 'Swirlix',
    genus: 'Pokémon Chuchería'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 8,
    name: 'Swirlix',
    genus: 'Pokémon Zuccherino'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 9,
    name: 'Swirlix',
    genus: 'Cotton Candy Pokémon'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 11,
    name: 'ペロッパフ',
    genus: 'わたあめポケモン'
  },
  {
    pokemon_species_id: 684,
    local_language_id: 12,
    name: '绵绵泡芙',
    genus: '棉花糖宝可梦'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 1,
    name: 'ペロリーム',
    genus: 'ホイップポケモン'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 3,
    name: '나루림',
    genus: '휩포켓몬'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 4,
    name: '胖甜妮',
    genus: '泡沫奶油寶可夢'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 5,
    name: 'Cupcanaille',
    genus: 'Pokémon Mousseline'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 6,
    name: 'Sabbaione',
    genus: 'Schlagsahne'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 7,
    name: 'Slurpuff',
    genus: 'Pokémon Nata'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 8,
    name: 'Slurpuff',
    genus: 'Pokémon Panna'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 9,
    name: 'Slurpuff',
    genus: 'Meringue Pokémon'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 11,
    name: 'ペロリーム',
    genus: 'ホイップポケモン'
  },
  {
    pokemon_species_id: 685,
    local_language_id: 12,
    name: '胖甜妮',
    genus: '泡沫奶油宝可梦'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 1,
    name: 'マーイーカ',
    genus: 'かいてんポケモン'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 3,
    name: '오케이징',
    genus: '회전포켓몬'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 4,
    name: '好啦魷',
    genus: '回轉寶可夢'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 5,
    name: 'Sepiatop',
    genus: 'Pokémon Rotation'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 6,
    name: 'Iscalar',
    genus: 'Rotation'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 7,
    name: 'Inkay',
    genus: 'Pokémon Rotación'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 8,
    name: 'Inkay',
    genus: 'Pokémon Volteggio'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 9,
    name: 'Inkay',
    genus: 'Revolving Pokémon'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 11,
    name: 'マーイーカ',
    genus: 'かいてんポケモン'
  },
  {
    pokemon_species_id: 686,
    local_language_id: 12,
    name: '好啦鱿',
    genus: '回转宝可梦'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 1,
    name: 'カラマネロ',
    genus: 'ぎゃくてんポケモン'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 3,
    name: '칼라마네로',
    genus: '역전포켓몬'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 4,
    name: '烏賊王',
    genus: '倒轉寶可夢'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 5,
    name: 'Sepiatroce',
    genus: 'Pokémon Révolution'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 6,
    name: 'Calamanero',
    genus: 'Inversion'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 7,
    name: 'Malamar',
    genus: 'Pokémon Revolución'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 8,
    name: 'Malamar',
    genus: 'Pokémon Giravolta'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 9,
    name: 'Malamar',
    genus: 'Overturning Pokémon'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 11,
    name: 'カラマネロ',
    genus: 'ぎゃくてんポケモン'
  },
  {
    pokemon_species_id: 687,
    local_language_id: 12,
    name: '乌贼王',
    genus: '倒转宝可梦'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 1,
    name: 'カメテテ',
    genus: 'ふたてポケモン'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 3,
    name: '거북손손',
    genus: '두손포켓몬'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 4,
    name: '龜腳腳',
    genus: '雙手寶可夢'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 5,
    name: 'Opermine',
    genus: 'Pokémon Bimane'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 6,
    name: 'Bithora',
    genus: 'Krallenduo'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 7,
    name: 'Binacle',
    genus: 'Pokémon Dos Manos'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 8,
    name: 'Binacle',
    genus: 'Pokémon Bimano'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 9,
    name: 'Binacle',
    genus: 'Two-Handed Pokémon'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 11,
    name: 'カメテテ',
    genus: 'ふたてポケモン'
  },
  {
    pokemon_species_id: 688,
    local_language_id: 12,
    name: '龟脚脚',
    genus: '双手宝可梦'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 1,
    name: 'ガメノデス',
    genus: 'しゅうごうポケモン'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 3,
    name: '거북손데스',
    genus: '집합포켓몬'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 4,
    name: '龜足巨鎧',
    genus: '集合寶可夢'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 5,
    name: 'Golgopathe',
    genus: 'Pokémon Assemblage'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 6,
    name: 'Thanathora',
    genus: 'Ballung'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 7,
    name: 'Barbaracle',
    genus: 'Pokémon Combinación'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 8,
    name: 'Barbaracle',
    genus: 'Pokémon Aggregato'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 9,
    name: 'Barbaracle',
    genus: 'Collective Pokémon'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 11,
    name: 'ガメノデス',
    genus: 'しゅうごうポケモン'
  },
  {
    pokemon_species_id: 689,
    local_language_id: 12,
    name: '龟足巨铠',
    genus: '集合宝可梦'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 1,
    name: 'クズモー',
    genus: 'クサモドキポケモン'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 3,
    name: '수레기',
    genus: '풀모방포켓몬'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 4,
    name: '垃垃藻',
    genus: '似草寶可夢'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 5,
    name: 'Venalgue',
    genus: 'Pokémon Simulalgue'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 6,
    name: 'Algitt',
    genus: 'Tangmimikry'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 7,
    name: 'Skrelp',
    genus: 'Pokémon Pseudoalga'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 8,
    name: 'Skrelp',
    genus: 'Pokémon Similalga'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 9,
    name: 'Skrelp',
    genus: 'Mock Kelp Pokémon'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 11,
    name: 'クズモー',
    genus: 'クサモドキポケモン'
  },
  {
    pokemon_species_id: 690,
    local_language_id: 12,
    name: '垃垃藻',
    genus: '似草宝可梦'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 1,
    name: 'ドラミドロ',
    genus: 'クサモドキポケモン'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 3,
    name: '드래캄',
    genus: '풀모방포켓몬'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 4,
    name: '毒藻龍',
    genus: '似草寶可夢'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 5,
    name: 'Kravarech',
    genus: 'Pokémon Simulalgue'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 6,
    name: 'Tandrak',
    genus: 'Tangmimikry'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 7,
    name: 'Dragalge',
    genus: 'Pokémon Pseudoalga'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 8,
    name: 'Dragalge',
    genus: 'Pokémon Similalga'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 9,
    name: 'Dragalge',
    genus: 'Mock Kelp Pokémon'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 11,
    name: 'ドラミドロ',
    genus: 'クサモドキポケモン'
  },
  {
    pokemon_species_id: 691,
    local_language_id: 12,
    name: '毒藻龙',
    genus: '似草宝可梦'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 1,
    name: 'ウデッポウ',
    genus: 'みずでっぽうポケモン'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 3,
    name: '완철포',
    genus: '물대포포켓몬'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 4,
    name: '鐵臂槍蝦',
    genus: '水槍寶可夢'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 5,
    name: 'Flingouste',
    genus: 'Pokémon Lance à Eau'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 6,
    name: 'Scampisto',
    genus: 'Aquapistole'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 7,
    name: 'Clauncher',
    genus: 'Pokémon Proyectagua'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 8,
    name: 'Clauncher',
    genus: 'Pokémon Zampillo'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 9,
    name: 'Clauncher',
    genus: 'Water Gun Pokémon'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 11,
    name: 'ウデッポウ',
    genus: 'みずでっぽうポケモン'
  },
  {
    pokemon_species_id: 692,
    local_language_id: 12,
    name: '铁臂枪虾',
    genus: '水枪宝可梦'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 1,
    name: 'ブロスター',
    genus: 'ランチャーポケモン'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 3,
    name: '블로스터',
    genus: '런처포켓몬'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 4,
    name: '鋼砲臂蝦',
    genus: '發射器寶可夢'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 5,
    name: 'Gamblast',
    genus: 'Pokémon Blaster'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 6,
    name: 'Wummer',
    genus: 'Aquawumme'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 7,
    name: 'Clawitzer',
    genus: 'Pokémon Lanzachorro'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 8,
    name: 'Clawitzer',
    genus: 'Pokémon Acqualancio'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 9,
    name: 'Clawitzer',
    genus: 'Howitzer Pokémon'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 11,
    name: 'ブロスター',
    genus: 'ランチャーポケモン'
  },
  {
    pokemon_species_id: 693,
    local_language_id: 12,
    name: '钢炮臂虾',
    genus: '发射器宝可梦'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 1,
    name: 'エリキテル',
    genus: 'はつでんポケモン'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 3,
    name: '목도리키텔',
    genus: '발전포켓몬'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 4,
    name: '傘電蜥',
    genus: '發電寶可夢'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 5,
    name: 'Galvaran',
    genus: 'Pokémon Générateur'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 6,
    name: 'Eguana',
    genus: 'Generator'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 7,
    name: 'Helioptile',
    genus: 'Pokémon Generador'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 8,
    name: 'Helioptile',
    genus: 'Pokémon Generatore'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 9,
    name: 'Helioptile',
    genus: 'Generator Pokémon'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 11,
    name: 'エリキテル',
    genus: 'はつでんポケモン'
  },
  {
    pokemon_species_id: 694,
    local_language_id: 12,
    name: '伞电蜥',
    genus: '发电宝可梦'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 1,
    name: 'エレザード',
    genus: 'はつでんポケモン'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 3,
    name: '일레도리자드',
    genus: '발전포켓몬'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 4,
    name: '光電傘蜥',
    genus: '發電寶可夢'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 5,
    name: 'Iguolta',
    genus: 'Pokémon Générateur'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 6,
    name: 'Elezard',
    genus: 'Generator'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 7,
    name: 'Heliolisk',
    genus: 'Pokémon Generador'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 8,
    name: 'Heliolisk',
    genus: 'Pokémon Generatore'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 9,
    name: 'Heliolisk',
    genus: 'Generator Pokémon'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 11,
    name: 'エレザード',
    genus: 'はつでんポケモン'
  },
  {
    pokemon_species_id: 695,
    local_language_id: 12,
    name: '光电伞蜥',
    genus: '发电宝可梦'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 1,
    name: 'チゴラス',
    genus: 'ようくんポケモン'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 3,
    name: '티고라스',
    genus: '유군포켓몬'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 4,
    name: '寶寶暴龍',
    genus: '幼君寶可夢'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 5,
    name: 'Ptyranidur',
    genus: 'Pokémon Prince'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 6,
    name: 'Balgoras',
    genus: 'Kronprinz'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 7,
    name: 'Tyrunt',
    genus: 'Pokémon Heredero'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 8,
    name: 'Tyrunt',
    genus: 'Pokémon Principino'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 9,
    name: 'Tyrunt',
    genus: 'Royal Heir Pokémon'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 11,
    name: 'チゴラス',
    genus: 'ようくんポケモン'
  },
  {
    pokemon_species_id: 696,
    local_language_id: 12,
    name: '宝宝暴龙',
    genus: '幼君宝可梦'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 1,
    name: 'ガチゴラス',
    genus: 'ぼうくんポケモン'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 3,
    name: '견고라스',
    genus: '폭군포켓몬'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 4,
    name: '怪顎龍',
    genus: '暴君寶可夢'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 5,
    name: 'Rexillius',
    genus: 'Pokémon Tyran'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 6,
    name: 'Monargoras',
    genus: 'Tyrann'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 7,
    name: 'Tyrantrum',
    genus: 'Pokémon Tirano'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 8,
    name: 'Tyrantrum',
    genus: 'Pokémon Tiranno'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 9,
    name: 'Tyrantrum',
    genus: 'Despot Pokémon'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 11,
    name: 'ガチゴラス',
    genus: 'ぼうくんポケモン'
  },
  {
    pokemon_species_id: 697,
    local_language_id: 12,
    name: '怪颚龙',
    genus: '暴君宝可梦'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 1,
    name: 'アマルス',
    genus: 'ツンドラポケモン'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 3,
    name: '아마루스',
    genus: '툰드라포켓몬'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 4,
    name: '冰雪龍',
    genus: '凍原寶可夢'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 5,
    name: 'Amagara',
    genus: 'Pokémon Toundra'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 6,
    name: 'Amarino',
    genus: 'Tundra'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 7,
    name: 'Amaura',
    genus: 'Pokémon Tundra'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 8,
    name: 'Amaura',
    genus: 'Pokémon Tundra'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 9,
    name: 'Amaura',
    genus: 'Tundra Pokémon'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 11,
    name: 'アマルス',
    genus: 'ツンドラポケモン'
  },
  {
    pokemon_species_id: 698,
    local_language_id: 12,
    name: '冰雪龙',
    genus: '冻原宝可梦'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 1,
    name: 'アマルルガ',
    genus: 'ツンドラポケモン'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 3,
    name: '아마루르가',
    genus: '툰드라포켓몬'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 4,
    name: '冰雪巨龍',
    genus: '凍原寶可夢'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 5,
    name: 'Dragmara',
    genus: 'Pokémon Toundra'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 6,
    name: 'Amagarga',
    genus: 'Tundra'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 7,
    name: 'Aurorus',
    genus: 'Pokémon Tundra'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 8,
    name: 'Aurorus',
    genus: 'Pokémon Tundra'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 9,
    name: 'Aurorus',
    genus: 'Tundra Pokémon'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 11,
    name: 'アマルルガ',
    genus: 'ツンドラポケモン'
  },
  {
    pokemon_species_id: 699,
    local_language_id: 12,
    name: '冰雪巨龙',
    genus: '冻原宝可梦'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 1,
    name: 'ニンフィア',
    genus: 'むすびつきポケモン'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 3,
    name: '님피아',
    genus: '연결포켓몬'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 4,
    name: '仙子伊布',
    genus: '連結寶可夢'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 5,
    name: 'Nymphali',
    genus: 'Pokémon Attachant'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 6,
    name: 'Feelinara',
    genus: 'Bindung'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 7,
    name: 'Sylveon',
    genus: 'Pokémon Vínculo'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 8,
    name: 'Sylveon',
    genus: 'Pokémon Legame'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 9,
    name: 'Sylveon',
    genus: 'Intertwining Pokémon'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 11,
    name: 'ニンフィア',
    genus: 'むすびつきポケモン'
  },
  {
    pokemon_species_id: 700,
    local_language_id: 12,
    name: '仙子伊布',
    genus: '连结宝可梦'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 1,
    name: 'ルチャブル',
    genus: 'レスリングポケモン'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 3,
    name: '루차불',
    genus: '레슬링포켓몬'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 4,
    name: '摔角鷹人',
    genus: '摔角寶可夢'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 5,
    name: 'Brutalibré',
    genus: 'Pokémon Catcheur'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 6,
    name: 'Resladero',
    genus: 'Wrestling'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 7,
    name: 'Hawlucha',
    genus: 'Pokémon Lucha Libre'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 8,
    name: 'Hawlucha',
    genus: 'Pokémon Lottalibera'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 9,
    name: 'Hawlucha',
    genus: 'Wrestling Pokémon'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 11,
    name: 'ルチャブル',
    genus: 'レスリングポケモン'
  },
  {
    pokemon_species_id: 701,
    local_language_id: 12,
    name: '摔角鹰人',
    genus: '摔角宝可梦'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 1,
    name: 'デデンネ',
    genus: 'アンテナポケモン'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 3,
    name: '데덴네',
    genus: '안테나포켓몬'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 4,
    name: '咚咚鼠',
    genus: '天線寶可夢'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 5,
    name: 'Dedenne',
    genus: 'Pokémon Antenne'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 6,
    name: 'Dedenne',
    genus: 'Antennen'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 7,
    name: 'Dedenne',
    genus: 'Pokémon Antenas'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 8,
    name: 'Dedenne',
    genus: 'Pokémon Antenna'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 9,
    name: 'Dedenne',
    genus: 'Antenna Pokémon'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 11,
    name: 'デデンネ',
    genus: 'アンテナポケモン'
  },
  {
    pokemon_species_id: 702,
    local_language_id: 12,
    name: '咚咚鼠',
    genus: '天线宝可梦'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 1,
    name: 'メレシー',
    genus: 'ほうせきポケモン'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 3,
    name: '멜리시',
    genus: '보석포켓몬'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 4,
    name: '小碎鑽',
    genus: '寶石寶可夢'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 5,
    name: 'Strassie',
    genus: 'Pokémon Joyau'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 6,
    name: 'Rocara',
    genus: 'Edelstein'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 7,
    name: 'Carbink',
    genus: 'Pokémon Joya'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 8,
    name: 'Carbink',
    genus: 'Pokémon Gemma'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 9,
    name: 'Carbink',
    genus: 'Jewel Pokémon'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 11,
    name: 'メレシー',
    genus: 'ほうせきポケモン'
  },
  {
    pokemon_species_id: 703,
    local_language_id: 12,
    name: '小碎钻',
    genus: '宝石宝可梦'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 1,
    name: 'ヌメラ',
    genus: 'なんたいポケモン'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 3,
    name: '미끄메라',
    genus: '연체포켓몬'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 4,
    name: '黏黏寶',
    genus: '軟體生物寶可夢'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 5,
    name: 'Mucuscule',
    genus: 'Pokémon Mollusque'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 6,
    name: 'Viscora',
    genus: 'Schneckedei'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 7,
    name: 'Goomy',
    genus: 'Pokémon Molusco'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 8,
    name: 'Goomy',
    genus: 'Pokémon Mollusco'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 9,
    name: 'Goomy',
    genus: 'Soft Tissue Pokémon'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 11,
    name: 'ヌメラ',
    genus: 'なんたいポケモン'
  },
  {
    pokemon_species_id: 704,
    local_language_id: 12,
    name: '黏黏宝',
    genus: '软体生物宝可梦'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 1,
    name: 'ヌメイル',
    genus: 'なんたいポケモン'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 3,
    name: '미끄네일',
    genus: '연체포켓몬'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 4,
    name: '黏美兒',
    genus: '軟體生物寶可夢'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 5,
    name: 'Colimucus',
    genus: 'Pokémon Mollusque'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 6,
    name: 'Viscargot',
    genus: 'Schneckedei'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 7,
    name: 'Sliggoo',
    genus: 'Pokémon Molusco'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 8,
    name: 'Sliggoo',
    genus: 'Pokémon Mollusco'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 9,
    name: 'Sliggoo',
    genus: 'Soft Tissue Pokémon'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 11,
    name: 'ヌメイル',
    genus: 'なんたいポケモン'
  },
  {
    pokemon_species_id: 705,
    local_language_id: 12,
    name: '黏美儿',
    genus: '软体生物宝可梦'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 1,
    name: 'ヌメルゴン',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 3,
    name: '미끄래곤',
    genus: '드래곤포켓몬'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 4,
    name: '黏美龍',
    genus: '龍寶可夢'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 5,
    name: 'Muplodocus',
    genus: 'Pokémon Dragon'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 6,
    name: 'Viscogon',
    genus: 'Drache'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 7,
    name: 'Goodra',
    genus: 'Pokémon Dragón'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 8,
    name: 'Goodra',
    genus: 'Pokémon Drago'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 9,
    name: 'Goodra',
    genus: 'Dragon Pokémon'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 11,
    name: 'ヌメルゴン',
    genus: 'ドラゴンポケモン'
  },
  {
    pokemon_species_id: 706,
    local_language_id: 12,
    name: '黏美龙',
    genus: '龙宝可梦'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 1,
    name: 'クレッフィ',
    genus: 'かぎたばポケモン'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 3,
    name: '클레피',
    genus: '열쇠꾸러미포켓몬'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 4,
    name: '鑰圈兒',
    genus: '鑰匙串寶可夢'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 5,
    name: 'Trousselin',
    genus: 'Pokémon Trousseau'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 6,
    name: 'Clavion',
    genus: 'Schlüssel'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 7,
    name: 'Klefki',
    genus: 'Pokémon Llavero'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 8,
    name: 'Klefki',
    genus: 'Pokémon Portachiavi'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 9,
    name: 'Klefki',
    genus: 'Key Ring Pokémon'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 11,
    name: 'クレッフィ',
    genus: 'かぎたばポケモン'
  },
  {
    pokemon_species_id: 707,
    local_language_id: 12,
    name: '钥圈儿',
    genus: '钥匙串宝可梦'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 1,
    name: 'ボクレー',
    genus: 'きりかぶポケモン'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 3,
    name: '나목령',
    genus: '그루터기포켓몬'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 4,
    name: '小木靈',
    genus: '樹樁寶可夢'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 5,
    name: 'Brocélôme',
    genus: 'Pokémon Souche'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 6,
    name: 'Paragoni',
    genus: 'Baumstumpf'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 7,
    name: 'Phantump',
    genus: 'Pokémon Tocón'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 8,
    name: 'Phantump',
    genus: 'Pokémon Ceppo'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 9,
    name: 'Phantump',
    genus: 'Stump Pokémon'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 11,
    name: 'ボクレー',
    genus: 'きりかぶポケモン'
  },
  {
    pokemon_species_id: 708,
    local_language_id: 12,
    name: '小木灵',
    genus: '树桩宝可梦'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 1,
    name: 'オーロット',
    genus: 'ろうぼくポケモン'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 3,
    name: '대로트',
    genus: '고목포켓몬'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 4,
    name: '朽木妖',
    genus: '老樹寶可夢'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 5,
    name: 'Desséliande',
    genus: 'Pokémon Vieillarbre'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 6,
    name: 'Trombork',
    genus: 'Urgehölz'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 7,
    name: 'Trevenant',
    genus: 'Pokémon Árbol Viejo'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 8,
    name: 'Trevenant',
    genus: 'Pokémon Alberantico'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 9,
    name: 'Trevenant',
    genus: 'Elder Tree Pokémon'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 11,
    name: 'オーロット',
    genus: 'ろうぼくポケモン'
  },
  {
    pokemon_species_id: 709,
    local_language_id: 12,
    name: '朽木妖',
    genus: '老树宝可梦'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 1,
    name: 'バケッチャ',
    genus: 'かぼちゃポケモン'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 3,
    name: '호바귀',
    genus: '호박포켓몬'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 4,
    name: '南瓜精',
    genus: '南瓜寶可夢'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 5,
    name: 'Pitrouille',
    genus: 'Pokémon Citrouille'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 6,
    name: 'Irrbis',
    genus: 'Kürbis'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 7,
    name: 'Pumpkaboo',
    genus: 'Pokémon Calabaza'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 8,
    name: 'Pumpkaboo',
    genus: 'Pokémon Zucca'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 9,
    name: 'Pumpkaboo',
    genus: 'Pumpkin Pokémon'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 11,
    name: 'バケッチャ',
    genus: 'かぼちゃポケモン'
  },
  {
    pokemon_species_id: 710,
    local_language_id: 12,
    name: '南瓜精',
    genus: '南瓜宝可梦'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 1,
    name: 'パンプジン',
    genus: 'かぼちゃポケモン'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 3,
    name: '펌킨인',
    genus: '호박포켓몬'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 4,
    name: '南瓜怪人',
    genus: '南瓜寶可夢'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 5,
    name: 'Banshitrouye',
    genus: 'Pokémon Citrouille'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 6,
    name: 'Pumpdjinn',
    genus: 'Kürbis'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 7,
    name: 'Gourgeist',
    genus: 'Pokémon Calabaza'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 8,
    name: 'Gourgeist',
    genus: 'Pokémon Zucca'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 9,
    name: 'Gourgeist',
    genus: 'Pumpkin Pokémon'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 11,
    name: 'パンプジン',
    genus: 'かぼちゃポケモン'
  },
  {
    pokemon_species_id: 711,
    local_language_id: 12,
    name: '南瓜怪人',
    genus: '南瓜宝可梦'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 1,
    name: 'カチコール',
    genus: 'ひょうかいポケモン'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 3,
    name: '꽁어름',
    genus: '얼음덩이포켓몬'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 4,
    name: '冰寶',
    genus: '冰塊寶可夢'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 5,
    name: 'Grelaçon',
    genus: 'Pokémon Glaçon'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 6,
    name: 'Arktip',
    genus: 'Eisklumpen'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 7,
    name: 'Bergmite',
    genus: 'Pokémon Témpano'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 8,
    name: 'Bergmite',
    genus: 'Pokémon Ghiacciolo'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 9,
    name: 'Bergmite',
    genus: 'Ice Chunk Pokémon'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 11,
    name: 'カチコール',
    genus: 'ひょうかいポケモン'
  },
  {
    pokemon_species_id: 712,
    local_language_id: 12,
    name: '冰宝',
    genus: '冰块宝可梦'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 1,
    name: 'クレベース',
    genus: 'ひょうざんポケモン'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 3,
    name: '크레베이스',
    genus: '빙산포켓몬'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 4,
    name: '冰岩怪',
    genus: '冰山寶可夢'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 5,
    name: 'Séracrawl',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 6,
    name: 'Arktilas',
    genus: 'Eisberg'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 7,
    name: 'Avalugg',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 8,
    name: 'Avalugg',
    genus: 'Pokémon Iceberg'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 9,
    name: 'Avalugg',
    genus: 'Iceberg Pokémon'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 11,
    name: 'クレベース',
    genus: 'ひょうざんポケモン'
  },
  {
    pokemon_species_id: 713,
    local_language_id: 12,
    name: '冰岩怪',
    genus: '冰山宝可梦'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 1,
    name: 'オンバット',
    genus: 'おんぱポケモン'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 3,
    name: '음뱃',
    genus: '음파포켓몬'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 4,
    name: '嗡蝠',
    genus: '音波寶可夢'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 5,
    name: 'Sonistrelle',
    genus: 'Pokémon Ondes'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 6,
    name: 'eF-eM',
    genus: 'Schallwellen'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 7,
    name: 'Noibat',
    genus: 'Pokémon Onda Sónica'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 8,
    name: 'Noibat',
    genus: 'Pokémon Ondasonora'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 9,
    name: 'Noibat',
    genus: 'Sound Wave Pokémon'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 11,
    name: 'オンバット',
    genus: 'おんぱポケモン'
  },
  {
    pokemon_species_id: 714,
    local_language_id: 12,
    name: '嗡蝠',
    genus: '音波宝可梦'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 1,
    name: 'オンバーン',
    genus: 'おんぱポケモン'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 3,
    name: '음번',
    genus: '음파포켓몬'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 4,
    name: '音波龍',
    genus: '音波寶可夢'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 5,
    name: 'Bruyverne',
    genus: 'Pokémon Ondes'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 6,
    name: 'UHaFnir',
    genus: 'Schallwellen'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 7,
    name: 'Noivern',
    genus: 'Pokémon Onda Sónica'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 8,
    name: 'Noivern',
    genus: 'Pokémon Ondasonora'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 9,
    name: 'Noivern',
    genus: 'Sound Wave Pokémon'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 11,
    name: 'オンバーン',
    genus: 'おんぱポケモン'
  },
  {
    pokemon_species_id: 715,
    local_language_id: 12,
    name: '音波龙',
    genus: '音波宝可梦'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 1,
    name: 'ゼルネアス',
    genus: 'せいめいポケモン'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 3,
    name: '제르네아스',
    genus: '생명포켓몬'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 4,
    name: '哲爾尼亞斯',
    genus: '生命寶可夢'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 5,
    name: 'Xerneas',
    genus: 'Pokémon Existence'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 6,
    name: 'Xerneas',
    genus: 'Leben'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 7,
    name: 'Xerneas',
    genus: 'Pokémon Creación'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 8,
    name: 'Xerneas',
    genus: 'Pokémon Creazione'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 9,
    name: 'Xerneas',
    genus: 'Life Pokémon'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 11,
    name: 'ゼルネアス',
    genus: 'せいめいポケモン'
  },
  {
    pokemon_species_id: 716,
    local_language_id: 12,
    name: '哲尔尼亚斯',
    genus: '生命宝可梦'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 1,
    name: 'イベルタル',
    genus: 'はかいポケモン'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 3,
    name: '이벨타르',
    genus: '파괴포켓몬'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 4,
    name: '伊裴爾塔爾',
    genus: '破壞寶可夢'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 5,
    name: 'Yveltal',
    genus: 'Pokémon Annihilation'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 6,
    name: 'Yveltal',
    genus: 'Zerstörung'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 7,
    name: 'Yveltal',
    genus: 'Pokémon Destrucción'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 8,
    name: 'Yveltal',
    genus: 'Pokémon Distruzione'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 9,
    name: 'Yveltal',
    genus: 'Destruction Pokémon'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 11,
    name: 'イベルタル',
    genus: 'はかいポケモン'
  },
  {
    pokemon_species_id: 717,
    local_language_id: 12,
    name: '伊裴尔塔尔',
    genus: '破坏宝可梦'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 1,
    name: 'ジガルデ',
    genus: 'ちつじょポケモン'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 3,
    name: '지가르데',
    genus: '질서포켓몬'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 4,
    name: '基格爾德',
    genus: '秩序寶可夢'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 5,
    name: 'Zygarde',
    genus: 'Pokémon Équilibre'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 6,
    name: 'Zygarde',
    genus: 'Ordnung'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 7,
    name: 'Zygarde',
    genus: 'Pokémon Equilibrio'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 8,
    name: 'Zygarde',
    genus: 'Pokémon Equilibrio'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 9,
    name: 'Zygarde',
    genus: 'Order Pokémon'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 11,
    name: 'ジガルデ',
    genus: 'ちつじょポケモン'
  },
  {
    pokemon_species_id: 718,
    local_language_id: 12,
    name: '基格尔德',
    genus: '秩序宝可梦'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 1,
    name: 'ディアンシー',
    genus: 'ほうせきポケモン'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 3,
    name: '디안시',
    genus: '보석포켓몬'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 4,
    name: '蒂安希',
    genus: '寶石寶可夢'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 5,
    name: 'Diancie',
    genus: 'Pokémon Joyau'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 6,
    name: 'Diancie',
    genus: 'Edelstein'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 7,
    name: 'Diancie',
    genus: 'Pokémon Joya'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 8,
    name: 'Diancie',
    genus: 'Pokémon Gemma'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 9,
    name: 'Diancie',
    genus: 'Jewel Pokémon'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 11,
    name: 'ディアンシー',
    genus: 'ほうせきポケモン'
  },
  {
    pokemon_species_id: 719,
    local_language_id: 12,
    name: '蒂安希',
    genus: '宝石宝可梦'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 1,
    name: 'フーパ',
    genus: 'いたずらポケモン'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 3,
    name: '후파',
    genus: '장난포켓몬'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 4,
    name: '胡帕',
    genus: '頑童寶可夢'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 5,
    name: 'Hoopa',
    genus: 'Pokémon Chenapan'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 6,
    name: 'Hoopa',
    genus: 'Schabernack'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 7,
    name: 'Hoopa',
    genus: 'Pokémon Travesura'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 8,
    name: 'Hoopa',
    genus: 'Pokémon Birba'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 9,
    name: 'Hoopa',
    genus: 'Mischief Pokémon'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 11,
    name: 'フーパ',
    genus: 'いたずらポケモン'
  },
  {
    pokemon_species_id: 720,
    local_language_id: 12,
    name: '胡帕',
    genus: '顽童宝可梦'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 1,
    name: 'ボルケニオン',
    genus: 'スチームポケモン'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 3,
    name: '볼케니온',
    genus: '스팀포켓몬'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 4,
    name: '波爾凱尼恩',
    genus: '蒸汽寶可夢'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 5,
    name: 'Volcanion',
    genus: 'Pokémon Vapeur'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 6,
    name: 'Volcanion',
    genus: 'Dampf'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 7,
    name: 'Volcanion',
    genus: 'Pokémon Vapor'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 8,
    name: 'Volcanion',
    genus: 'Pokémon Vapore'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 9,
    name: 'Volcanion',
    genus: 'Steam Pokémon'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 11,
    name: 'ボルケニオン',
    genus: 'スチームポケモン'
  },
  {
    pokemon_species_id: 721,
    local_language_id: 12,
    name: '波尔凯尼恩',
    genus: '蒸汽宝可梦'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 1,
    name: 'モクロー',
    genus: 'くさばねポケモン'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 3,
    name: '나몰빼미',
    genus: '풀깃포켓몬'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 4,
    name: '木木梟',
    genus: '草羽寶可夢'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 5,
    name: 'Brindibou',
    genus: 'Pokémon Plumefeuille'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 6,
    name: 'Bauz',
    genus: 'Laubflügel'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 7,
    name: 'Rowlet',
    genus: 'Pokémon Pluma Hoja'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 8,
    name: 'Rowlet',
    genus: 'Pokémon Aliderba'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 9,
    name: 'Rowlet',
    genus: 'Grass Quill Pokémon'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 11,
    name: 'モクロー',
    genus: 'くさばねポケモン'
  },
  {
    pokemon_species_id: 722,
    local_language_id: 12,
    name: '木木枭',
    genus: '草羽宝可梦'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 1,
    name: 'フクスロー',
    genus: 'はばねポケモン'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 3,
    name: '빼미스로우',
    genus: '칼날깃포켓몬'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 4,
    name: '投羽梟',
    genus: '刃羽寶可夢'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 5,
    name: 'Efflèche',
    genus: 'Pokémon Plum’acérée'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 6,
    name: 'Arboretoss',
    genus: 'Flügelklinge'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 7,
    name: 'Dartrix',
    genus: 'Pokémon Pluma Filo'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 8,
    name: 'Dartrix',
    genus: 'Pokémon Piumaffilata'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 9,
    name: 'Dartrix',
    genus: 'Blade Quill Pokémon'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 11,
    name: 'フクスロー',
    genus: 'はばねポケモン'
  },
  {
    pokemon_species_id: 723,
    local_language_id: 12,
    name: '投羽枭',
    genus: '刃羽宝可梦'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 1,
    name: 'ジュナイパー',
    genus: 'やばねポケモン'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 3,
    name: '모크나이퍼',
    genus: '화살깃포켓몬'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 4,
    name: '狙射樹梟',
    genus: '箭羽寶可夢'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 5,
    name: 'Archéduc',
    genus: 'Pokémon Plumeflèche'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 6,
    name: 'Silvarro',
    genus: 'Pfeilflügel'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 7,
    name: 'Decidueye',
    genus: 'Pokémon Pluma Flecha'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 8,
    name: 'Decidueye',
    genus: 'Pokémon Alifreccia'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 9,
    name: 'Decidueye',
    genus: 'Arrow Quill Pokémon'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 11,
    name: 'ジュナイパー',
    genus: 'やばねポケモン'
  },
  {
    pokemon_species_id: 724,
    local_language_id: 12,
    name: '狙射树枭',
    genus: '箭羽宝可梦'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 1,
    name: 'ニャビー',
    genus: 'ひねこポケモン'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 3,
    name: '냐오불',
    genus: '불고양이포켓몬'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 4,
    name: '火斑喵',
    genus: '火貓寶可夢'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 5,
    name: 'Flamiaou',
    genus: 'Pokémon Chat Feu'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 6,
    name: 'Flamiau',
    genus: 'Feuerkatze'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 7,
    name: 'Litten',
    genus: 'Pokémon Gato Fuego'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 8,
    name: 'Litten',
    genus: 'Pokémon Pirofelino'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 9,
    name: 'Litten',
    genus: 'Fire Cat Pokémon'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 11,
    name: 'ニャビー',
    genus: 'ひねこポケモン'
  },
  {
    pokemon_species_id: 725,
    local_language_id: 12,
    name: '火斑喵',
    genus: '火猫宝可梦'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 1,
    name: 'ニャヒート',
    genus: 'ひねこポケモン'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 3,
    name: '냐오히트',
    genus: '불고양이포켓몬'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 4,
    name: '炎熱喵',
    genus: '火貓寶可夢'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 5,
    name: 'Matoufeu',
    genus: 'Pokémon Chat Feu'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 6,
    name: 'Miezunder',
    genus: 'Feuerkatze'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 7,
    name: 'Torracat',
    genus: 'Pokémon Gato Fuego'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 8,
    name: 'Torracat',
    genus: 'Pokémon Pirofelino'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 9,
    name: 'Torracat',
    genus: 'Fire Cat Pokémon'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 11,
    name: 'ニャヒート',
    genus: 'ひねこポケモン'
  },
  {
    pokemon_species_id: 726,
    local_language_id: 12,
    name: '炎热喵',
    genus: '火猫宝可梦'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 1,
    name: 'ガオガエン',
    genus: 'ヒールポケモン'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 3,
    name: '어흥염',
    genus: '힐포켓몬'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 4,
    name: '熾焰咆哮虎',
    genus: '反派寶可夢'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 5,
    name: 'Félinferno',
    genus: 'Pokémon Vil Catcheur'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 6,
    name: 'Fuegro',
    genus: 'Fiesling'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 7,
    name: 'Incineroar',
    genus: 'Pokémon Rudo'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 8,
    name: 'Incineroar',
    genus: 'Pokémon Colpibassi'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 9,
    name: 'Incineroar',
    genus: 'Heel Pokémon'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 11,
    name: 'ガオガエン',
    genus: 'ヒールポケモン'
  },
  {
    pokemon_species_id: 727,
    local_language_id: 12,
    name: '炽焰咆哮虎',
    genus: '反派宝可梦'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 1,
    name: 'アシマリ',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 3,
    name: '누리공',
    genus: '강치포켓몬'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 4,
    name: '球球海獅',
    genus: '海獅寶可夢'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 5,
    name: 'Otaquin',
    genus: 'Pokémon Otarie'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 6,
    name: 'Robball',
    genus: 'Seehund'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 7,
    name: 'Popplio',
    genus: 'Pokémon León Marino'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 8,
    name: 'Popplio',
    genus: 'Pokémon Otaria'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 9,
    name: 'Popplio',
    genus: 'Sea Lion Pokémon'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 11,
    name: 'アシマリ',
    genus: 'あしかポケモン'
  },
  {
    pokemon_species_id: 728,
    local_language_id: 12,
    name: '球球海狮',
    genus: '海狮宝可梦'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 1,
    name: 'オシャマリ',
    genus: 'アイドルポケモン'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 3,
    name: '키요공',
    genus: '아이돌포켓몬'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 4,
    name: '花漾海獅',
    genus: '偶像寶可夢'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 5,
    name: 'Otarlette',
    genus: 'Pokémon Starlette'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 6,
    name: 'Marikeck',
    genus: 'Popsternchen'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 7,
    name: 'Brionne',
    genus: 'Pokémon Fama'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 8,
    name: 'Brionne',
    genus: 'Pokémon Pop Star'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 9,
    name: 'Brionne',
    genus: 'Pop Star Pokémon'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 11,
    name: 'オシャマリ',
    genus: 'アイドルポケモン'
  },
  {
    pokemon_species_id: 729,
    local_language_id: 12,
    name: '花漾海狮',
    genus: '偶像宝可梦'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 1,
    name: 'アシレーヌ',
    genus: 'ソリストポケモン'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 3,
    name: '누리레느',
    genus: '솔리스트포켓몬'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 4,
    name: '西獅海壬',
    genus: '獨唱者寶可夢'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 5,
    name: 'Oratoria',
    genus: 'Pokémon Soliste'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 6,
    name: 'Primarene',
    genus: 'Solist'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 7,
    name: 'Primarina',
    genus: 'Pokémon Solista'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 8,
    name: 'Primarina',
    genus: 'Pokémon Solista'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 9,
    name: 'Primarina',
    genus: 'Soloist Pokémon'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 11,
    name: 'アシレーヌ',
    genus: 'ソリストポケモン'
  },
  {
    pokemon_species_id: 730,
    local_language_id: 12,
    name: '西狮海壬',
    genus: '独唱者宝可梦'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 1,
    name: 'ツツケラ',
    genus: 'きつつきポケモン'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 3,
    name: '콕코구리',
    genus: '딱따구리포켓몬'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 4,
    name: '小篤兒',
    genus: '啄木鳥寶可夢'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 5,
    name: 'Picassaut',
    genus: 'Pokémon Pivert'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 6,
    name: 'Peppeck',
    genus: 'Specht'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 7,
    name: 'Pikipek',
    genus: 'Pokémon Carpintero'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 8,
    name: 'Pikipek',
    genus: 'Pokémon Picchio'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 9,
    name: 'Pikipek',
    genus: 'Woodpecker Pokémon'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 11,
    name: 'ツツケラ',
    genus: 'きつつきポケモン'
  },
  {
    pokemon_species_id: 731,
    local_language_id: 12,
    name: '小笃儿',
    genus: '啄木鸟宝可梦'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 1,
    name: 'ケララッパ',
    genus: 'ラッパぐちポケモン'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 3,
    name: '크라파',
    genus: '나팔입포켓몬'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 4,
    name: '喇叭啄鳥',
    genus: '喇叭喙寶可夢'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 5,
    name: 'Piclairon',
    genus: 'Pokémon Bec Clairon'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 6,
    name: 'Trompeck',
    genus: 'Trompete'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 7,
    name: 'Trumbeak',
    genus: 'Pokémon Trompeta'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 8,
    name: 'Trumbeak',
    genus: 'Pokémon Trombecco'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 9,
    name: 'Trumbeak',
    genus: 'Bugle Beak Pokémon'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 11,
    name: 'ケララッパ',
    genus: 'ラッパぐちポケモン'
  },
  {
    pokemon_species_id: 732,
    local_language_id: 12,
    name: '喇叭啄鸟',
    genus: '喇叭喙宝可梦'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 1,
    name: 'ドデカバシ',
    genus: 'おおづつポケモン'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 3,
    name: '왕큰부리',
    genus: '대포포켓몬'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 4,
    name: '銃嘴大鳥',
    genus: '銃炮寶可夢'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 5,
    name: 'Bazoucan',
    genus: 'Pokémon Canon'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 6,
    name: 'Tukanon',
    genus: 'Kanone'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 7,
    name: 'Toucannon',
    genus: 'Pokémon Cañón'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 8,
    name: 'Toucannon',
    genus: 'Pokémon Cannone'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 9,
    name: 'Toucannon',
    genus: 'Cannon Pokémon'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 11,
    name: 'ドデカバシ',
    genus: 'おおづつポケモン'
  },
  {
    pokemon_species_id: 733,
    local_language_id: 12,
    name: '铳嘴大鸟',
    genus: '铳炮宝可梦'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 1,
    name: 'ヤングース',
    genus: 'うろつきポケモン'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 3,
    name: '영구스',
    genus: '순회포켓몬'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 4,
    name: '貓鼬少',
    genus: '巡迴寶可夢'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 5,
    name: 'Manglouton',
    genus: 'Pokémon Patrouille'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 6,
    name: 'Mangunior',
    genus: 'Patrouille'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 7,
    name: 'Yungoos',
    genus: 'Pokémon Patrulla'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 8,
    name: 'Yungoos',
    genus: 'Pokémon Pattuglia'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 9,
    name: 'Yungoos',
    genus: 'Loitering Pokémon'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 11,
    name: 'ヤングース',
    genus: 'うろつきポケモン'
  },
  {
    pokemon_species_id: 734,
    local_language_id: 12,
    name: '猫鼬少',
    genus: '巡回宝可梦'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 1,
    name: 'デカグース',
    genus: 'はりこみポケモン'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 3,
    name: '형사구스',
    genus: '잠복포켓몬'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 4,
    name: '貓鼬探長',
    genus: '監視寶可夢'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 5,
    name: 'Argouste',
    genus: 'Pokémon Filature'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 6,
    name: 'Manguspektor',
    genus: 'Beschattung'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 7,
    name: 'Gumshoos',
    genus: 'Pokémon Vigilante'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 8,
    name: 'Gumshoos',
    genus: 'Pokémon Sorveglianza'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 9,
    name: 'Gumshoos',
    genus: 'Stakeout Pokémon'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 11,
    name: 'デカグース',
    genus: 'はりこみポケモン'
  },
  {
    pokemon_species_id: 735,
    local_language_id: 12,
    name: '猫鼬探长',
    genus: '蹲守宝可梦'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 1,
    name: 'アゴジムシ',
    genus: 'ようちゅうポケモン'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 3,
    name: '턱지충이',
    genus: '유충포켓몬'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 4,
    name: '強顎雞母蟲',
    genus: '幼蟲寶可夢'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 5,
    name: 'Larvibule',
    genus: 'Pokémon Larve'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 6,
    name: 'Mabula',
    genus: 'Larve'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 7,
    name: 'Grubbin',
    genus: 'Pokémon Pupa'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 8,
    name: 'Grubbin',
    genus: 'Pokémon Coleolarva'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 9,
    name: 'Grubbin',
    genus: 'Larva Pokémon'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 11,
    name: 'アゴジムシ',
    genus: 'ようちゅうポケモン'
  },
  {
    pokemon_species_id: 736,
    local_language_id: 12,
    name: '强颚鸡母虫',
    genus: '幼虫宝可梦'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 1,
    name: 'デンヂムシ',
    genus: 'バッテリーポケモン'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 3,
    name: '전지충이',
    genus: '배터리포켓몬'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 4,
    name: '蟲電寶',
    genus: '蓄電池寶可夢'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 5,
    name: 'Chrysapile',
    genus: 'Pokémon Batterie'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 6,
    name: 'Akkup',
    genus: 'Batterie'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 7,
    name: 'Charjabug',
    genus: 'Pokémon Batería'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 8,
    name: 'Charjabug',
    genus: 'Pokémon Batteria'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 9,
    name: 'Charjabug',
    genus: 'Battery Pokémon'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 11,
    name: 'デンヂムシ',
    genus: 'バッテリーポケモン'
  },
  {
    pokemon_species_id: 737,
    local_language_id: 12,
    name: '虫电宝',
    genus: '蓄电池宝可梦'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 1,
    name: 'クワガノン',
    genus: 'くわがたポケモン'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 3,
    name: '투구뿌논',
    genus: '뿔집게포켓몬'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 4,
    name: '鍬農砲蟲',
    genus: '鍬形蟲寶可夢'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 5,
    name: 'Lucanon',
    genus: 'Pokémon Scarabée'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 6,
    name: 'Donarion',
    genus: 'Kneifkäfer'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 7,
    name: 'Vikavolt',
    genus: 'Pokémon Escarabajo'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 8,
    name: 'Vikavolt',
    genus: 'Pokémon Cervolante'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 9,
    name: 'Vikavolt',
    genus: 'Stag Beetle Pokémon'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 11,
    name: 'クワガノン',
    genus: 'くわがたポケモン'
  },
  {
    pokemon_species_id: 738,
    local_language_id: 12,
    name: '锹农炮虫',
    genus: '锹形虫宝可梦'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 1,
    name: 'マケンカニ',
    genus: 'けんとうポケモン'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 3,
    name: '오기지게',
    genus: '권투포켓몬'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 4,
    name: '好勝蟹',
    genus: '拳鬥寶可夢'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 5,
    name: 'Crabagarre',
    genus: 'Pokémon Boxeur'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 6,
    name: 'Krabbox',
    genus: 'Boxkampf'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 7,
    name: 'Crabrawler',
    genus: 'Pokémon Púgil'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 8,
    name: 'Crabrawler',
    genus: 'Pokémon Pugile'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 9,
    name: 'Crabrawler',
    genus: 'Boxing Pokémon'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 11,
    name: 'マケンカニ',
    genus: 'けんとうポケモン'
  },
  {
    pokemon_species_id: 739,
    local_language_id: 12,
    name: '好胜蟹',
    genus: '拳斗宝可梦'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 1,
    name: 'ケケンカニ',
    genus: 'けがにポケモン'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 3,
    name: '모단단게',
    genus: '털게포켓몬'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 4,
    name: '好勝毛蟹',
    genus: '毛蟹寶可夢'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 5,
    name: 'Crabominable',
    genus: 'Pokémon Crabe Velu'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 6,
    name: 'Krawell',
    genus: 'Fellkrabbe'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 7,
    name: 'Crabominable',
    genus: 'Pokémon Cangrejopelo'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 8,
    name: 'Crabominable',
    genus: 'Pokémon Peligranchio'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 9,
    name: 'Crabominable',
    genus: 'Woolly Crab Pokémon'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 11,
    name: 'ケケンカニ',
    genus: 'けがにポケモン'
  },
  {
    pokemon_species_id: 740,
    local_language_id: 12,
    name: '好胜毛蟹',
    genus: '毛蟹宝可梦'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 1,
    name: 'オドリドリ',
    genus: 'ダンスポケモン'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 3,
    name: '춤추새',
    genus: '댄스포켓몬'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 4,
    name: '花舞鳥',
    genus: '舞蹈寶可夢'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 5,
    name: 'Plumeline',
    genus: 'Pokémon Danse'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 6,
    name: 'Choreogel',
    genus: 'Tanz'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 7,
    name: 'Oricorio',
    genus: 'Pokémon Danza'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 8,
    name: 'Oricorio',
    genus: 'Pokémon Danza'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 9,
    name: 'Oricorio',
    genus: 'Dancing Pokémon'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 11,
    name: 'オドリドリ',
    genus: 'ダンスポケモン'
  },
  {
    pokemon_species_id: 741,
    local_language_id: 12,
    name: '花舞鸟',
    genus: '舞蹈宝可梦'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 1,
    name: 'アブリー',
    genus: 'ツリアブポケモン'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 3,
    name: '에블리',
    genus: '재니등에포켓몬'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 4,
    name: '萌虻',
    genus: '蜂虻寶可夢'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 5,
    name: 'Bombydou',
    genus: 'Pokémon Bombyle'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 6,
    name: 'Wommel',
    genus: 'Hummelfliege'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 7,
    name: 'Cutiefly',
    genus: 'Pokémon Mosca Abeja'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 8,
    name: 'Cutiefly',
    genus: 'Pokémon Bombilide'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 9,
    name: 'Cutiefly',
    genus: 'Bee Fly Pokémon'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 11,
    name: 'アブリー',
    genus: 'ツリアブポケモン'
  },
  {
    pokemon_species_id: 742,
    local_language_id: 12,
    name: '萌虻',
    genus: '蜂虻宝可梦'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 1,
    name: 'アブリボン',
    genus: 'ツリアブポケモン'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 3,
    name: '에리본',
    genus: '재니등에포켓몬'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 4,
    name: '蝶結萌虻',
    genus: '蜂虻寶可夢'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 5,
    name: 'Rubombelle',
    genus: 'Pokémon Bombyle'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 6,
    name: 'Bandelby',
    genus: 'Hummelfliege'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 7,
    name: 'Ribombee',
    genus: 'Pokémon Mosca Abeja'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 8,
    name: 'Ribombee',
    genus: 'Pokémon Bombilide'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 9,
    name: 'Ribombee',
    genus: 'Bee Fly Pokémon'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 11,
    name: 'アブリボン',
    genus: 'ツリアブポケモン'
  },
  {
    pokemon_species_id: 743,
    local_language_id: 12,
    name: '蝶结萌虻',
    genus: '蜂虻宝可梦'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 1,
    name: 'イワンコ',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 3,
    name: '암멍이',
    genus: '강아지포켓몬'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 4,
    name: '岩狗狗',
    genus: '小狗寶可夢'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 5,
    name: 'Rocabot',
    genus: 'Pokémon Chiot'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 6,
    name: 'Wuffels',
    genus: 'Hund'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 7,
    name: 'Rockruff',
    genus: 'Pokémon Perrito'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 8,
    name: 'Rockruff',
    genus: 'Pokémon Cagnolino'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 9,
    name: 'Rockruff',
    genus: 'Puppy Pokémon'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 11,
    name: 'イワンコ',
    genus: 'こいぬポケモン'
  },
  {
    pokemon_species_id: 744,
    local_language_id: 12,
    name: '岩狗狗',
    genus: '小狗宝可梦'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 1,
    name: 'ルガルガン',
    genus: 'オオカミポケモン'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 3,
    name: '루가루암',
    genus: '늑대포켓몬'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 4,
    name: '鬃岩狼人',
    genus: '狼寶可夢'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 5,
    name: 'Lougaroc',
    genus: 'Pokémon Loup'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 6,
    name: 'Wolwerock',
    genus: 'Wolf'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 7,
    name: 'Lycanroc',
    genus: 'Pokémon Lobo'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 8,
    name: 'Lycanroc',
    genus: 'Pokémon Lupo'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 9,
    name: 'Lycanroc',
    genus: 'Wolf Pokémon'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 11,
    name: 'ルガルガン',
    genus: 'オオカミポケモン'
  },
  {
    pokemon_species_id: 745,
    local_language_id: 12,
    name: '鬃岩狼人',
    genus: '狼宝可梦'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 1,
    name: 'ヨワシ',
    genus: 'こざかなポケモン'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 3,
    name: '약어리',
    genus: '잔물고기포켓몬'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 4,
    name: '弱丁魚',
    genus: '小魚寶可夢'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 5,
    name: 'Froussardine',
    genus: 'Pokémon Minipoisson'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 6,
    name: 'Lusardin',
    genus: 'Kleinfisch'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 7,
    name: 'Wishiwashi',
    genus: 'Pokémon Pececillo'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 8,
    name: 'Wishiwashi',
    genus: 'Pokémon Pesciolino'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 9,
    name: 'Wishiwashi',
    genus: 'Small Fry Pokémon'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 11,
    name: 'ヨワシ',
    genus: 'こざかなポケモン'
  },
  {
    pokemon_species_id: 746,
    local_language_id: 12,
    name: '弱丁鱼',
    genus: '小鱼宝可梦'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 1,
    name: 'ヒドイデ',
    genus: 'ヒトデナシポケモン'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 3,
    name: '시마사리',
    genus: '깨비사리포켓몬'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 4,
    name: '好壞星',
    genus: '非星寶可夢'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 5,
    name: 'Vorastérie',
    genus: 'Pokémon Cruel'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 6,
    name: 'Garstella',
    genus: 'Quäl-Stern'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 7,
    name: 'Mareanie',
    genus: 'Pokémon Estrellatroz'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 8,
    name: 'Mareanie',
    genus: 'Pokémon Stellatroce'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 9,
    name: 'Mareanie',
    genus: 'Brutal Star Pokémon'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 11,
    name: 'ヒドイデ',
    genus: 'ヒトデナシポケモン'
  },
  {
    pokemon_species_id: 747,
    local_language_id: 12,
    name: '好坏星',
    genus: '非星宝可梦'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 1,
    name: 'ドヒドイデ',
    genus: 'ヒトデナシポケモン'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 3,
    name: '더시마사리',
    genus: '깨비사리포켓몬'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 4,
    name: '超壞星',
    genus: '非星寶可夢'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 5,
    name: 'Prédastérie',
    genus: 'Pokémon Cruel'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 6,
    name: 'Aggrostella',
    genus: 'Quäl-Stern'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 7,
    name: 'Toxapex',
    genus: 'Pokémon Estrellatroz'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 8,
    name: 'Toxapex',
    genus: 'Pokémon Stellatroce'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 9,
    name: 'Toxapex',
    genus: 'Brutal Star Pokémon'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 11,
    name: 'ドヒドイデ',
    genus: 'ヒトデナシポケモン'
  },
  {
    pokemon_species_id: 748,
    local_language_id: 12,
    name: '超坏星',
    genus: '非星宝可梦'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 1,
    name: 'ドロバンコ',
    genus: 'うさぎうまポケモン'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 3,
    name: '머드나기',
    genus: '당나귀포켓몬'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 4,
    name: '泥驢仔',
    genus: '驢寶可夢'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 5,
    name: 'Tiboudet',
    genus: 'Pokémon Âne'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 6,
    name: 'Pampuli',
    genus: 'Packesel'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 7,
    name: 'Mudbray',
    genus: 'Pokémon Asno'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 8,
    name: 'Mudbray',
    genus: 'Pokémon Ciuconiglio'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 9,
    name: 'Mudbray',
    genus: 'Donkey Pokémon'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 11,
    name: 'ドロバンコ',
    genus: 'うさぎうまポケモン'
  },
  {
    pokemon_species_id: 749,
    local_language_id: 12,
    name: '泥驴仔',
    genus: '驴宝可梦'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 1,
    name: 'バンバドロ',
    genus: 'ばんばポケモン'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 3,
    name: '만마드',
    genus: '만마포켓몬'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 4,
    name: '重泥挽馬',
    genus: '挽馬寶可夢'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 5,
    name: 'Bourrinos',
    genus: 'Pokémon Cheval Trait'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 6,
    name: 'Pampross',
    genus: 'Zugpferd'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 7,
    name: 'Mudsdale',
    genus: 'Pokémon Caballo Tiro'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 8,
    name: 'Mudsdale',
    genus: 'Pokémon Fortequino'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 9,
    name: 'Mudsdale',
    genus: 'Draft Horse Pokémon'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 11,
    name: 'バンバドロ',
    genus: 'ばんばポケモン'
  },
  {
    pokemon_species_id: 750,
    local_language_id: 12,
    name: '重泥挽马',
    genus: '挽马宝可梦'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 1,
    name: 'シズクモ',
    genus: 'すいほうポケモン'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 3,
    name: '물거미',
    genus: '수포포켓몬'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 4,
    name: '滴蛛',
    genus: '水泡寶可夢'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 5,
    name: 'Araqua',
    genus: 'Pokémon Aquabulle'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 6,
    name: 'Araqua',
    genus: 'Wasserblase'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 7,
    name: 'Dewpider',
    genus: 'Pokémon Pompa'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 8,
    name: 'Dewpider',
    genus: 'Pokémon Bolladacqua'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 9,
    name: 'Dewpider',
    genus: 'Water Bubble Pokémon'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 11,
    name: 'シズクモ',
    genus: 'すいほうポケモン'
  },
  {
    pokemon_species_id: 751,
    local_language_id: 12,
    name: '滴蛛',
    genus: '水泡宝可梦'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 1,
    name: 'オニシズクモ',
    genus: 'すいほうポケモン'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 3,
    name: '깨비물거미',
    genus: '수포포켓몬'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 4,
    name: '滴蛛霸',
    genus: '水泡寶可夢'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 5,
    name: 'Tarenbulle',
    genus: 'Pokémon Aquabulle'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 6,
    name: 'Aranestro',
    genus: 'Wasserblase'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 7,
    name: 'Araquanid',
    genus: 'Pokémon Pompa'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 8,
    name: 'Araquanid',
    genus: 'Pokémon Bolladacqua'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 9,
    name: 'Araquanid',
    genus: 'Water Bubble Pokémon'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 11,
    name: 'オニシズクモ',
    genus: 'すいほうポケモン'
  },
  {
    pokemon_species_id: 752,
    local_language_id: 12,
    name: '滴蛛霸',
    genus: '水泡宝可梦'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 1,
    name: 'カリキリ',
    genus: 'かまくさポケモン'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 3,
    name: '짜랑랑',
    genus: '풀사마귀포켓몬'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 4,
    name: '偽螳草',
    genus: '鐮草寶可夢'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 5,
    name: 'Mimantis',
    genus: 'Pokémon Fauch’Herbe'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 6,
    name: 'Imantis',
    genus: 'Grassichel'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 7,
    name: 'Fomantis',
    genus: 'Pokémon Filo Hoja'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 8,
    name: 'Fomantis',
    genus: 'Pokémon Mantiderba'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 9,
    name: 'Fomantis',
    genus: 'Sickle Grass Pokémon'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 11,
    name: 'カリキリ',
    genus: 'かまくさポケモン'
  },
  {
    pokemon_species_id: 753,
    local_language_id: 12,
    name: '伪螳草',
    genus: '镰草宝可梦'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 1,
    name: 'ラランテス',
    genus: 'はなかまポケモン'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 3,
    name: '라란티스',
    genus: '꽃사마귀포켓몬'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 4,
    name: '蘭螳花',
    genus: '花鐮寶可夢'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 5,
    name: 'Floramantis',
    genus: 'Pokémon Fauch’Fleur'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 6,
    name: 'Mantidea',
    genus: 'Blumensichel'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 7,
    name: 'Lurantis',
    genus: 'Pokémon Filo Flor'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 8,
    name: 'Lurantis',
    genus: 'Pokémon Mantifiore'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 9,
    name: 'Lurantis',
    genus: 'Bloom Sickle Pokémon'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 11,
    name: 'ラランテス',
    genus: 'はなかまポケモン'
  },
  {
    pokemon_species_id: 754,
    local_language_id: 12,
    name: '兰螳花',
    genus: '花镰宝可梦'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 1,
    name: 'ネマシュ',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 3,
    name: '자마슈',
    genus: '발광포켓몬'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 4,
    name: '睡睡菇',
    genus: '發光寶可夢'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 5,
    name: 'Spododo',
    genus: 'Pokémon Luminescent'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 6,
    name: 'Bubungus',
    genus: 'Lumineszenz'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 7,
    name: 'Morelull',
    genus: 'Pokémon Luminiscente'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 8,
    name: 'Morelull',
    genus: 'Pokémon Luminescenza'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 9,
    name: 'Morelull',
    genus: 'Illuminating Pokémon'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 11,
    name: 'ネマシュ',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 755,
    local_language_id: 12,
    name: '睡睡菇',
    genus: '发光宝可梦'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 1,
    name: 'マシェード',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 3,
    name: '마셰이드',
    genus: '발광포켓몬'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 4,
    name: '燈罩夜菇',
    genus: '發光寶可夢'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 5,
    name: 'Lampignon',
    genus: 'Pokémon Luminescent'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 6,
    name: 'Lamellux',
    genus: 'Lumineszenz'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 7,
    name: 'Shiinotic',
    genus: 'Pokémon Luminiscente'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 8,
    name: 'Shiinotic',
    genus: 'Pokémon Luminescenza'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 9,
    name: 'Shiinotic',
    genus: 'Illuminating Pokémon'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 11,
    name: 'マシェード',
    genus: 'はっこうポケモン'
  },
  {
    pokemon_species_id: 756,
    local_language_id: 12,
    name: '灯罩夜菇',
    genus: '发光宝可梦'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 1,
    name: 'ヤトウモリ',
    genus: 'どくトカゲポケモン'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 3,
    name: '야도뇽',
    genus: '독도마뱀포켓몬'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 4,
    name: '夜盜火蜥',
    genus: '毒蜥寶可夢'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 5,
    name: 'Tritox',
    genus: 'Pokémon Toxilézard'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 6,
    name: 'Molunk',
    genus: 'Giftechse'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 7,
    name: 'Salandit',
    genus: 'Pokémon Lagartoxina'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 8,
    name: 'Salandit',
    genus: 'Pokémon Lucertossina'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 9,
    name: 'Salandit',
    genus: 'Toxic Lizard Pokémon'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 11,
    name: 'ヤトウモリ',
    genus: 'どくトカゲポケモン'
  },
  {
    pokemon_species_id: 757,
    local_language_id: 12,
    name: '夜盗火蜥',
    genus: '毒蜥宝可梦'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 1,
    name: 'エンニュート',
    genus: 'どくトカゲポケモン'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 3,
    name: '염뉴트',
    genus: '독도마뱀포켓몬'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 4,
    name: '焰后蜥',
    genus: '毒蜥寶可夢'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 5,
    name: 'Malamandre',
    genus: 'Pokémon Toxilézard'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 6,
    name: 'Amfira',
    genus: 'Giftechse'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 7,
    name: 'Salazzle',
    genus: 'Pokémon Lagartoxina'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 8,
    name: 'Salazzle',
    genus: 'Pokémon Lucertossina'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 9,
    name: 'Salazzle',
    genus: 'Toxic Lizard Pokémon'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 11,
    name: 'エンニュート',
    genus: 'どくトカゲポケモン'
  },
  {
    pokemon_species_id: 758,
    local_language_id: 12,
    name: '焰后蜥',
    genus: '毒蜥宝可梦'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 1,
    name: 'ヌイコグマ',
    genus: 'じたばたポケモン'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 3,
    name: '포곰곰',
    genus: '바둥바둥포켓몬'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 4,
    name: '童偶熊',
    genus: '抓狂寶可夢'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 5,
    name: 'Nounourson',
    genus: 'Pokémon Gigoteur'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 6,
    name: 'Velursi',
    genus: 'Wildfang'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 7,
    name: 'Stufful',
    genus: 'Pokémon Rabieta'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 8,
    name: 'Stufful',
    genus: 'Pokémon Bizzoso'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 9,
    name: 'Stufful',
    genus: 'Flailing Pokémon'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 11,
    name: 'ヌイコグマ',
    genus: 'じたばたポケモン'
  },
  {
    pokemon_species_id: 759,
    local_language_id: 12,
    name: '童偶熊',
    genus: '抓狂宝可梦'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 1,
    name: 'キテルグマ',
    genus: 'ごうわんポケモン'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 3,
    name: '이븐곰',
    genus: '강한완력포켓몬'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 4,
    name: '穿著熊',
    genus: '強臂寶可夢'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 5,
    name: 'Chelours',
    genus: 'Pokémon Biscoteaux'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 6,
    name: 'Kosturso',
    genus: 'Kraftarme'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 7,
    name: 'Bewear',
    genus: 'Pokémon Brazo Fuerte'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 8,
    name: 'Bewear',
    genus: 'Pokémon Fortebraccio'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 9,
    name: 'Bewear',
    genus: 'Strong Arm Pokémon'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 11,
    name: 'キテルグマ',
    genus: 'ごうわんポケモン'
  },
  {
    pokemon_species_id: 760,
    local_language_id: 12,
    name: '穿着熊',
    genus: '强臂宝可梦'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 1,
    name: 'アマカジ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 3,
    name: '달콤아',
    genus: '후르츠포켓몬'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 4,
    name: '甜竹竹',
    genus: '水果寶可夢'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 5,
    name: 'Croquine',
    genus: 'Pokémon Fruit'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 6,
    name: 'Frubberl',
    genus: 'Obst'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 7,
    name: 'Bounsweet',
    genus: 'Pokémon Fruto'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 8,
    name: 'Bounsweet',
    genus: 'Pokémon Frutto'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 9,
    name: 'Bounsweet',
    genus: 'Fruit Pokémon'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 11,
    name: 'アマカジ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 761,
    local_language_id: 12,
    name: '甜竹竹',
    genus: '水果宝可梦'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 1,
    name: 'アママイコ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 3,
    name: '달무리나',
    genus: '후르츠포켓몬'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 4,
    name: '甜舞妮',
    genus: '水果寶可夢'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 5,
    name: 'Candine',
    genus: 'Pokémon Fruit'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 6,
    name: 'Frubaila',
    genus: 'Obst'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 7,
    name: 'Steenee',
    genus: 'Pokémon Fruto'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 8,
    name: 'Steenee',
    genus: 'Pokémon Frutto'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 9,
    name: 'Steenee',
    genus: 'Fruit Pokémon'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 11,
    name: 'アママイコ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 762,
    local_language_id: 12,
    name: '甜舞妮',
    genus: '水果宝可梦'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 1,
    name: 'アマージョ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 3,
    name: '달코퀸',
    genus: '후르츠포켓몬'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 4,
    name: '甜冷美后',
    genus: '水果寶可夢'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 5,
    name: 'Sucreine',
    genus: 'Pokémon Fruit'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 6,
    name: 'Fruyal',
    genus: 'Obst'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 7,
    name: 'Tsareena',
    genus: 'Pokémon Fruto'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 8,
    name: 'Tsareena',
    genus: 'Pokémon Frutto'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 9,
    name: 'Tsareena',
    genus: 'Fruit Pokémon'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 11,
    name: 'アマージョ',
    genus: 'フルーツポケモン'
  },
  {
    pokemon_species_id: 763,
    local_language_id: 12,
    name: '甜冷美后',
    genus: '水果宝可梦'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 1,
    name: 'キュワワー',
    genus: 'はなつみポケモン'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 3,
    name: '큐아링',
    genus: '꽃따기포켓몬'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 4,
    name: '花療環環',
    genus: '摘花寶可夢'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 5,
    name: 'Guérilande',
    genus: 'Pokémon Tressefleur'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 6,
    name: 'Curelei',
    genus: 'Blumenkranz'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 7,
    name: 'Comfey',
    genus: 'Pokémon Recogeflores'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 8,
    name: 'Comfey',
    genus: 'Pokémon Ghirlanda'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 9,
    name: 'Comfey',
    genus: 'Posy Picker Pokémon'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 11,
    name: 'キュワワー',
    genus: 'はなつみポケモン'
  },
  {
    pokemon_species_id: 764,
    local_language_id: 12,
    name: '花疗环环',
    genus: '摘花宝可梦'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 1,
    name: 'ヤレユータン',
    genus: 'けんじゃポケモン'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 3,
    name: '하랑우탄',
    genus: '현자포켓몬'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 4,
    name: '智揮猩',
    genus: '賢者寶可夢'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 5,
    name: 'Gouroutan',
    genus: 'Pokémon Grand Sage'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 6,
    name: 'Kommandutan',
    genus: 'Weisheit'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 7,
    name: 'Oranguru',
    genus: 'Pokémon Sabio'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 8,
    name: 'Oranguru',
    genus: 'Pokémon Saggio'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 9,
    name: 'Oranguru',
    genus: 'Sage Pokémon'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 11,
    name: 'ヤレユータン',
    genus: 'けんじゃポケモン'
  },
  {
    pokemon_species_id: 765,
    local_language_id: 12,
    name: '智挥猩',
    genus: '贤者宝可梦'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 1,
    name: 'ナゲツケサル',
    genus: 'れんけいポケモン'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 3,
    name: '내던숭이',
    genus: '연계포켓몬'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 4,
    name: '投擲猴',
    genus: '配合寶可夢'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 5,
    name: 'Quartermac',
    genus: 'Pokémon Coopération'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 6,
    name: 'Quartermak',
    genus: 'Teamwork'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 7,
    name: 'Passimian',
    genus: 'Pokémon Cooperación'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 8,
    name: 'Passimian',
    genus: 'Pokémon Giocosquadra'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 9,
    name: 'Passimian',
    genus: 'Teamwork Pokémon'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 11,
    name: 'ナゲツケサル',
    genus: 'れんけいポケモン'
  },
  {
    pokemon_species_id: 766,
    local_language_id: 12,
    name: '投掷猴',
    genus: '配合宝可梦'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 1,
    name: 'コソクムシ',
    genus: 'そうこうポケモン'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 3,
    name: '꼬시레',
    genus: '주행포켓몬'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 4,
    name: '膽小蟲',
    genus: '疾行寶可夢'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 5,
    name: 'Sovkipou',
    genus: 'Pokémon Cavaleur'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 6,
    name: 'Reißlaus',
    genus: 'Laufschritt'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 7,
    name: 'Wimpod',
    genus: 'Pokémon Huidizo'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 8,
    name: 'Wimpod',
    genus: 'Pokémon Lestopode'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 9,
    name: 'Wimpod',
    genus: 'Turn Tail Pokémon'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 11,
    name: 'コソクムシ',
    genus: 'そうこうポケモン'
  },
  {
    pokemon_species_id: 767,
    local_language_id: 12,
    name: '胆小虫',
    genus: '疾行宝可梦'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 1,
    name: 'グソクムシャ',
    genus: 'そうこうポケモン'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 3,
    name: '갑주무사',
    genus: '장갑포켓몬'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 4,
    name: '具甲武者',
    genus: '裝甲寶可夢'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 5,
    name: 'Sarmuraï',
    genus: 'Pokémon Blindé'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 6,
    name: 'Tectass',
    genus: 'Rüstung'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 7,
    name: 'Golisopod',
    genus: 'Pokémon Blindaje'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 8,
    name: 'Golisopod',
    genus: 'Pokémon Blindato'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 9,
    name: 'Golisopod',
    genus: 'Hard Scale Pokémon'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 11,
    name: 'グソクムシャ',
    genus: 'そうこうポケモン'
  },
  {
    pokemon_species_id: 768,
    local_language_id: 12,
    name: '具甲武者',
    genus: '装甲宝可梦'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 1,
    name: 'スナバァ',
    genus: 'すなやまポケモン'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 3,
    name: '모래꿍',
    genus: '모래산포켓몬'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 4,
    name: '沙丘娃',
    genus: '沙丘寶可夢'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 5,
    name: 'Bacabouh',
    genus: 'Pokémon Pâtéd’Sable'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 6,
    name: 'Sankabuh',
    genus: 'Sandhaufen'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 7,
    name: 'Sandygast',
    genus: 'Pokémon Montearena'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 8,
    name: 'Sandygast',
    genus: 'Pokémon Montesabbia'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 9,
    name: 'Sandygast',
    genus: 'Sand Heap Pokémon'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 11,
    name: 'スナバァ',
    genus: 'すなやまポケモン'
  },
  {
    pokemon_species_id: 769,
    local_language_id: 12,
    name: '沙丘娃',
    genus: '沙丘宝可梦'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 1,
    name: 'シロデスナ',
    genus: 'すなのしろポケモン'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 3,
    name: '모래성이당',
    genus: '모래성포켓몬'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 4,
    name: '噬沙堡爺',
    genus: '沙堡寶可夢'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 5,
    name: 'Trépassable',
    genus: 'Pokémon Châtod’Sable'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 6,
    name: 'Colossand',
    genus: 'Sandschloss'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 7,
    name: 'Palossand',
    genus: 'Pokémon Castiarena'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 8,
    name: 'Palossand',
    genus: 'Pokémon Castelsabbia'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 9,
    name: 'Palossand',
    genus: 'Sand Castle Pokémon'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 11,
    name: 'シロデスナ',
    genus: 'すなのしろポケモン'
  },
  {
    pokemon_species_id: 770,
    local_language_id: 12,
    name: '噬沙堡爷',
    genus: '沙堡宝可梦'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 1,
    name: 'ナマコブシ',
    genus: 'なまこポケモン'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 3,
    name: '해무기',
    genus: '해삼포켓몬'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 4,
    name: '拳海參',
    genus: '海參寶可夢'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 5,
    name: 'Concombaffe',
    genus: 'Pokémon Holothurie'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 6,
    name: 'Gufa',
    genus: 'Seegurke'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 7,
    name: 'Pyukumuku',
    genus: 'Pokémon Pepino Mar'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 8,
    name: 'Pyukumuku',
    genus: 'Pokémon Oloturia'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 9,
    name: 'Pyukumuku',
    genus: 'Sea Cucumber Pokémon'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 11,
    name: 'ナマコブシ',
    genus: 'なまこポケモン'
  },
  {
    pokemon_species_id: 771,
    local_language_id: 12,
    name: '拳海参',
    genus: '海参宝可梦'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 1,
    name: 'タイプ：ヌル',
    genus: 'じんこうポケモン'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 3,
    name: '타입:널',
    genus: '인공포켓몬'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 4,
    name: '屬性：空',
    genus: '人工寶可夢'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 5,
    name: 'Type:0',
    genus: 'Pokémon Multigénome'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 6,
    name: 'Typ:Null',
    genus: 'Modifikation'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 7,
    name: 'Código Cero',
    genus: 'Pokémon Multigénico'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 8,
    name: 'Tipo Zero',
    genus: 'Pokémon Multigene'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 9,
    name: 'Type: Null',
    genus: 'Synthetic Pokémon'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 11,
    name: 'タイプ：ヌル',
    genus: 'じんこうポケモン'
  },
  {
    pokemon_species_id: 772,
    local_language_id: 12,
    name: '属性：空',
    genus: '人工宝可梦'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 1,
    name: 'シルヴァディ',
    genus: 'じんこうポケモン'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 3,
    name: '실버디',
    genus: '인공포켓몬'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 4,
    name: '銀伴戰獸',
    genus: '人工寶可夢'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 5,
    name: 'Silvallié',
    genus: 'Pokémon Multigénome'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 6,
    name: 'Amigento',
    genus: 'Modifikation'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 7,
    name: 'Silvally',
    genus: 'Pokémon Multigénico'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 8,
    name: 'Silvally',
    genus: 'Pokémon Multigene'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 9,
    name: 'Silvally',
    genus: 'Synthetic Pokémon'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 11,
    name: 'シルヴァディ',
    genus: 'じんこうポケモン'
  },
  {
    pokemon_species_id: 773,
    local_language_id: 12,
    name: '银伴战兽',
    genus: '人工宝可梦'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 1,
    name: 'メテノ',
    genus: 'ながれぼしポケモン'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 3,
    name: '메테노',
    genus: '유성포켓몬'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 4,
    name: '小隕星',
    genus: '流星寶可夢'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 5,
    name: 'Météno',
    genus: 'Pokémon Météore'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 6,
    name: 'Meteno',
    genus: 'Meteor'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 7,
    name: 'Minior',
    genus: 'Pokémon Meteoro'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 8,
    name: 'Minior',
    genus: 'Pokémon Meteora'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 9,
    name: 'Minior',
    genus: 'Meteor Pokémon'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 11,
    name: 'メテノ',
    genus: 'ながれぼしポケモン'
  },
  {
    pokemon_species_id: 774,
    local_language_id: 12,
    name: '小陨星',
    genus: '流星宝可梦'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 1,
    name: 'ネッコアラ',
    genus: 'ゆめうつつポケモン'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 3,
    name: '자말라',
    genus: '꿈결포켓몬'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 4,
    name: '樹枕尾熊',
    genus: '半夢半醒寶可夢'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 5,
    name: 'Dodoala',
    genus: 'Pokémon Rêveur'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 6,
    name: 'Koalelu',
    genus: 'Halbschlaf'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 7,
    name: 'Komala',
    genus: 'Pokémon Duermevela'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 8,
    name: 'Komala',
    genus: 'Pokémon Dormiveglia'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 9,
    name: 'Komala',
    genus: 'Drowsing Pokémon'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 11,
    name: 'ネッコアラ',
    genus: 'ゆめうつつポケモン'
  },
  {
    pokemon_species_id: 775,
    local_language_id: 12,
    name: '树枕尾熊',
    genus: '半梦半醒宝可梦'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 1,
    name: 'バクガメス',
    genus: 'ばくはつがめポケモン'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 3,
    name: '폭거북스',
    genus: '폭발거북포켓몬'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 4,
    name: '爆焰龜獸',
    genus: '爆炸龜寶可夢'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 5,
    name: 'Boumata',
    genus: 'Pokémon Tortue Boum'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 6,
    name: 'Tortunator',
    genus: 'Knallkröte'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 7,
    name: 'Turtonator',
    genus: 'Pokémon Tortugabomba'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 8,
    name: 'Turtonator',
    genus: 'Pokémon Tartabomba'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 9,
    name: 'Turtonator',
    genus: 'Blast Turtle Pokémon'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 11,
    name: 'バクガメス',
    genus: 'ばくはつがめポケモン'
  },
  {
    pokemon_species_id: 776,
    local_language_id: 12,
    name: '爆焰龟兽',
    genus: '爆炸龟宝可梦'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 1,
    name: 'トゲデマル',
    genus: 'まるまりポケモン'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 3,
    name: '토게데마루',
    genus: '동글동글포켓몬'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 4,
    name: '托戈德瑪爾',
    genus: '蜷縮寶可夢'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 5,
    name: 'Togedemaru',
    genus: 'Pokémon Roulenboule'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 6,
    name: 'Togedemaru',
    genus: 'Einigler'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 7,
    name: 'Togedemaru',
    genus: 'Pokémon Bolita'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 8,
    name: 'Togedemaru',
    genus: 'Pokémon Ricciopalla'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 9,
    name: 'Togedemaru',
    genus: 'Roly-Poly Pokémon'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 11,
    name: 'トゲデマル',
    genus: 'まるまりポケモン'
  },
  {
    pokemon_species_id: 777,
    local_language_id: 12,
    name: '托戈德玛尔',
    genus: '蜷缩宝可梦'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 1,
    name: 'ミミッキュ',
    genus: 'ばけのかわポケモン'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 3,
    name: '따라큐',
    genus: '탈포켓몬'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 4,
    name: '謎擬Ｑ',
    genus: '畫皮寶可夢'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 5,
    name: 'Mimiqui',
    genus: 'Pokémon Fantômasque'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 6,
    name: 'Mimigma',
    genus: 'Kostümspuk'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 7,
    name: 'Mimikyu',
    genus: 'Pokémon Disfraz'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 8,
    name: 'Mimikyu',
    genus: 'Pokémon Fantasmanto'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 9,
    name: 'Mimikyu',
    genus: 'Disguise Pokémon'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 11,
    name: 'ミミッキュ',
    genus: 'ばけのかわポケモン'
  },
  {
    pokemon_species_id: 778,
    local_language_id: 12,
    name: '谜拟Ｑ',
    genus: '画皮宝可梦'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 1,
    name: 'ハギギシリ',
    genus: 'はぎしりポケモン'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 3,
    name: '치갈기',
    genus: '이갈기포켓몬'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 4,
    name: '磨牙彩皮魚',
    genus: '磨牙寶可夢'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 5,
    name: 'Denticrisse',
    genus: 'Pokémon Grincedent'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 6,
    name: 'Knirfish',
    genus: 'Knirschzahn'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 7,
    name: 'Bruxish',
    genus: 'Pokémon Rechinante'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 8,
    name: 'Bruxish',
    genus: 'Pokémon Sfregadenti'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 9,
    name: 'Bruxish',
    genus: 'Gnash Teeth Pokémon'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 11,
    name: 'ハギギシリ',
    genus: 'はぎしりポケモン'
  },
  {
    pokemon_species_id: 779,
    local_language_id: 12,
    name: '磨牙彩皮鱼',
    genus: '磨牙宝可梦'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 1,
    name: 'ジジーロン',
    genus: 'ゆうゆうポケモン'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 3,
    name: '할비롱',
    genus: '느긋누긋포켓몬'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 4,
    name: '老翁龍',
    genus: '悠遊寶可夢'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 5,
    name: 'Draïeul',
    genus: 'Pokémon Nonchalant'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 6,
    name: 'Sen-Long',
    genus: 'Gelassenheit'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 7,
    name: 'Drampa',
    genus: 'Pokémon Sosiego'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 8,
    name: 'Drampa',
    genus: 'Pokémon Tuttacalma'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 9,
    name: 'Drampa',
    genus: 'Placid Pokémon'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 11,
    name: 'ジジーロン',
    genus: 'ゆうゆうポケモン'
  },
  {
    pokemon_species_id: 780,
    local_language_id: 12,
    name: '老翁龙',
    genus: '悠游宝可梦'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 1,
    name: 'ダダリン',
    genus: 'もくずポケモン'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 3,
    name: '타타륜',
    genus: '해초조각포켓몬'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 4,
    name: '破破舵輪',
    genus: '碎藻寶可夢'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 5,
    name: 'Sinistrail',
    genus: 'Pokémon Varech'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 6,
    name: 'Moruda',
    genus: 'Seetang'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 7,
    name: 'Dhelmise',
    genus: 'Pokémon Alga Ancla'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 8,
    name: 'Dhelmise',
    genus: 'Pokémon Brandellalga'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 9,
    name: 'Dhelmise',
    genus: 'Sea Creeper Pokémon'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 11,
    name: 'ダダリン',
    genus: 'もくずポケモン'
  },
  {
    pokemon_species_id: 781,
    local_language_id: 12,
    name: '破破舵轮',
    genus: '碎藻宝可梦'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 1,
    name: 'ジャラコ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 3,
    name: '짜랑꼬',
    genus: '비늘포켓몬'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 4,
    name: '心鱗寶',
    genus: '鱗片寶可夢'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 5,
    name: 'Bébécaille',
    genus: 'Pokémon Écailles'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 6,
    name: 'Miniras',
    genus: 'Schuppentier'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 7,
    name: 'Jangmo-o',
    genus: 'Pokémon Escamas'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 8,
    name: 'Jangmo-o',
    genus: 'Pokémon Squama'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 9,
    name: 'Jangmo-o',
    genus: 'Scaly Pokémon'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 11,
    name: 'ジャラコ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 782,
    local_language_id: 12,
    name: '心鳞宝',
    genus: '鳞片宝可梦'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 1,
    name: 'ジャランゴ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 3,
    name: '짜랑고우',
    genus: '비늘포켓몬'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 4,
    name: '鱗甲龍',
    genus: '鱗片寶可夢'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 5,
    name: 'Écaïd',
    genus: 'Pokémon Écailles'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 6,
    name: 'Mediras',
    genus: 'Schuppentier'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 7,
    name: 'Hakamo-o',
    genus: 'Pokémon Escamas'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 8,
    name: 'Hakamo-o',
    genus: 'Pokémon Squama'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 9,
    name: 'Hakamo-o',
    genus: 'Scaly Pokémon'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 11,
    name: 'ジャランゴ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 783,
    local_language_id: 12,
    name: '鳞甲龙',
    genus: '鳞片宝可梦'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 1,
    name: 'ジャラランガ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 3,
    name: '짜랑고우거',
    genus: '비늘포켓몬'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 4,
    name: '杖尾鱗甲龍',
    genus: '鱗片寶可夢'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 5,
    name: 'Ékaïser',
    genus: 'Pokémon Écailles'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 6,
    name: 'Grandiras',
    genus: 'Schuppentier'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 7,
    name: 'Kommo-o',
    genus: 'Pokémon Escamas'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 8,
    name: 'Kommo-o',
    genus: 'Pokémon Squama'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 9,
    name: 'Kommo-o',
    genus: 'Scaly Pokémon'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 11,
    name: 'ジャラランガ',
    genus: 'うろこポケモン'
  },
  {
    pokemon_species_id: 784,
    local_language_id: 12,
    name: '杖尾鳞甲龙',
    genus: '鳞片宝可梦'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 1,
    name: 'カプ・コケコ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 3,
    name: '카푸꼬꼬꼭',
    genus: '토속신포켓몬'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 4,
    name: '卡璞・鳴鳴',
    genus: '土地神寶可夢'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 5,
    name: 'Tokorico',
    genus: 'Pokémon Tutélaire'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 6,
    name: 'Kapu-Riki',
    genus: 'Schutzpatron'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 7,
    name: 'Tapu Koko',
    genus: 'Pokémon Dios Nativo'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 8,
    name: 'Tapu Koko',
    genus: 'Pokémon Nume Locale'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 9,
    name: 'Tapu Koko',
    genus: 'Land Spirit Pokémon'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 11,
    name: 'カプ・コケコ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 785,
    local_language_id: 12,
    name: '卡璞・鸣鸣',
    genus: '土地神宝可梦'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 1,
    name: 'カプ・テテフ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 3,
    name: '카푸나비나',
    genus: '토속신포켓몬'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 4,
    name: '卡璞・蝶蝶',
    genus: '土地神寶可夢'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 5,
    name: 'Tokopiyon',
    genus: 'Pokémon Tutélaire'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 6,
    name: 'Kapu-Fala',
    genus: 'Schutzpatron'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 7,
    name: 'Tapu Lele',
    genus: 'Pokémon Dios Nativo'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 8,
    name: 'Tapu Lele',
    genus: 'Pokémon Nume Locale'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 9,
    name: 'Tapu Lele',
    genus: 'Land Spirit Pokémon'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 11,
    name: 'カプ・テテフ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 786,
    local_language_id: 12,
    name: '卡璞・蝶蝶',
    genus: '土地神宝可梦'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 1,
    name: 'カプ・ブルル',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 3,
    name: '카푸브루루',
    genus: '토속신포켓몬'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 4,
    name: '卡璞・哞哞',
    genus: '土地神寶可夢'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 5,
    name: 'Tokotoro',
    genus: 'Pokémon Tutélaire'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 6,
    name: 'Kapu-Toro',
    genus: 'Schutzpatron'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 7,
    name: 'Tapu Bulu',
    genus: 'Pokémon Dios Nativo'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 8,
    name: 'Tapu Bulu',
    genus: 'Pokémon Nume Locale'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 9,
    name: 'Tapu Bulu',
    genus: 'Land Spirit Pokémon'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 11,
    name: 'カプ・ブルル',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 787,
    local_language_id: 12,
    name: '卡璞・哞哞',
    genus: '土地神宝可梦'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 1,
    name: 'カプ・レヒレ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 3,
    name: '카푸느지느',
    genus: '토속신포켓몬'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 4,
    name: '卡璞・鰭鰭',
    genus: '土地神寶可夢'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 5,
    name: 'Tokopisco',
    genus: 'Pokémon Tutélaire'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 6,
    name: 'Kapu-Kime',
    genus: 'Schutzpatron'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 7,
    name: 'Tapu Fini',
    genus: 'Pokémon Dios Nativo'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 8,
    name: 'Tapu Fini',
    genus: 'Pokémon Nume Locale'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 9,
    name: 'Tapu Fini',
    genus: 'Land Spirit Pokémon'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 11,
    name: 'カプ・レヒレ',
    genus: 'とちがみポケモン'
  },
  {
    pokemon_species_id: 788,
    local_language_id: 12,
    name: '卡璞・鳍鳍',
    genus: '土地神宝可梦'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 1,
    name: 'コスモッグ',
    genus: 'せいうんポケモン'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 3,
    name: '코스모그',
    genus: '성운포켓몬'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 4,
    name: '科斯莫古',
    genus: '星雲寶可夢'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 5,
    name: 'Cosmog',
    genus: 'Pokémon Nébuleuse'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 6,
    name: 'Cosmog',
    genus: 'Nebula'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 7,
    name: 'Cosmog',
    genus: 'Pokémon Nebulosa'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 8,
    name: 'Cosmog',
    genus: 'Pokémon Nebulosa'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 9,
    name: 'Cosmog',
    genus: 'Nebula Pokémon'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 11,
    name: 'コスモッグ',
    genus: 'せいうんポケモン'
  },
  {
    pokemon_species_id: 789,
    local_language_id: 12,
    name: '科斯莫古',
    genus: '星云宝可梦'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 1,
    name: 'コスモウム',
    genus: 'げんしせいポケモン'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 3,
    name: '코스모움',
    genus: '원시성포켓몬'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 4,
    name: '科斯莫姆',
    genus: '原始星寶可夢'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 5,
    name: 'Cosmovum',
    genus: 'Pokémon Proto-Étoile'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 6,
    name: 'Cosmovum',
    genus: 'Urgestirn'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 7,
    name: 'Cosmoem',
    genus: 'Pokémon Protostrella'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 8,
    name: 'Cosmoem',
    genus: 'Pokémon Protostella'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 9,
    name: 'Cosmoem',
    genus: 'Protostar Pokémon'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 11,
    name: 'コスモウム',
    genus: 'げんしせいポケモン'
  },
  {
    pokemon_species_id: 790,
    local_language_id: 12,
    name: '科斯莫姆',
    genus: '原始星宝可梦'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 1,
    name: 'ソルガレオ',
    genus: 'にちりんポケモン'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 3,
    name: '솔가레오',
    genus: '일륜포켓몬'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 4,
    name: '索爾迦雷歐',
    genus: '日輪寶可夢'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 5,
    name: 'Solgaleo',
    genus: 'Pokémon Halo Solaire'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 6,
    name: 'Solgaleo',
    genus: 'Sonnenkreis'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 7,
    name: 'Solgaleo',
    genus: 'Pokémon Corona Solar'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 8,
    name: 'Solgaleo',
    genus: 'Pokémon Solare'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 9,
    name: 'Solgaleo',
    genus: 'Sunne Pokémon'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 11,
    name: 'ソルガレオ',
    genus: 'にちりんポケモン'
  },
  {
    pokemon_species_id: 791,
    local_language_id: 12,
    name: '索尔迦雷欧',
    genus: '日轮宝可梦'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 1,
    name: 'ルナアーラ',
    genus: 'がちりんポケモン'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 3,
    name: '루나아라',
    genus: '월륜포켓몬'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 4,
    name: '露奈雅拉',
    genus: '月輪寶可夢'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 5,
    name: 'Lunala',
    genus: 'Pokémon Halo Lunaire'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 6,
    name: 'Lunala',
    genus: 'Mondscheibe'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 7,
    name: 'Lunala',
    genus: 'Pokémon Corona Lunar'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 8,
    name: 'Lunala',
    genus: 'Pokémon Lunare'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 9,
    name: 'Lunala',
    genus: 'Moone Pokémon'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 11,
    name: 'ルナアーラ',
    genus: 'がちりんポケモン'
  },
  {
    pokemon_species_id: 792,
    local_language_id: 12,
    name: '露奈雅拉',
    genus: '月轮宝可梦'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 1,
    name: 'ウツロイド',
    genus: 'きせいポケモン'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 3,
    name: '텅비드',
    genus: '기생포켓몬'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 4,
    name: '虛吾伊德',
    genus: '寄生寶可夢'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 5,
    name: 'Zéroïd',
    genus: 'Pokémon Parasite'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 6,
    name: 'Anego',
    genus: 'Parasit'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 7,
    name: 'Nihilego',
    genus: 'Pokémon Parásito'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 8,
    name: 'Nihilego',
    genus: 'Pokémon Parassita'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 9,
    name: 'Nihilego',
    genus: 'Parasite Pokémon'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 11,
    name: 'ウツロイド',
    genus: 'きせいポケモン'
  },
  {
    pokemon_species_id: 793,
    local_language_id: 12,
    name: '虛吾伊德',
    genus: '寄生宝可梦'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 1,
    name: 'マッシブーン',
    genus: 'ぼうちょうポケモン'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 3,
    name: '매시붕',
    genus: '팽창포켓몬'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 4,
    name: '爆肌蚊',
    genus: '膨脹寶可夢'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 5,
    name: 'Mouscoto',
    genus: 'Pokémon Enflé'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 6,
    name: 'Masskito',
    genus: 'Ausdehnung'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 7,
    name: 'Buzzwole',
    genus: 'Pokémon Hinchado'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 8,
    name: 'Buzzwole',
    genus: 'Pokémon Gonfiacorpo'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 9,
    name: 'Buzzwole',
    genus: 'Swollen Pokémon'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 11,
    name: 'マッシブーン',
    genus: 'ぼうちょうポケモン'
  },
  {
    pokemon_species_id: 794,
    local_language_id: 12,
    name: '爆肌蚊',
    genus: '膨胀宝可梦'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 1,
    name: 'フェローチェ',
    genus: 'えんびポケモン'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 3,
    name: '페로코체',
    genus: '염미포켓몬'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 4,
    name: '費洛美螂',
    genus: '美艷寶可夢'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 5,
    name: 'Cancrelove',
    genus: 'Pokémon Gracile'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 6,
    name: 'Schabelle',
    genus: 'Eleganz'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 7,
    name: 'Pheromosa',
    genus: 'Pokémon Elegancia'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 8,
    name: 'Pheromosa',
    genus: 'Pokémon Leggiadria'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 9,
    name: 'Pheromosa',
    genus: 'Lissome Pokémon'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 11,
    name: 'フェローチェ',
    genus: 'えんびポケモン'
  },
  {
    pokemon_species_id: 795,
    local_language_id: 12,
    name: '费洛美螂',
    genus: '美艳宝可梦'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 1,
    name: 'デンジュモク',
    genus: 'でんしょくポケモン'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 3,
    name: '전수목',
    genus: '전기장식포켓몬'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 4,
    name: '電束木',
    genus: '燈飾寶可夢'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 5,
    name: 'Câblifère',
    genus: 'Pokémon Luminaire'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 6,
    name: 'Voltriant',
    genus: 'Illumination'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 7,
    name: 'Xurkitree',
    genus: 'Pokémon Luminaria'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 8,
    name: 'Xurkitree',
    genus: 'Pokémon Luminaria'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 9,
    name: 'Xurkitree',
    genus: 'Glowing Pokémon'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 11,
    name: 'デンジュモク',
    genus: 'でんしょくポケモン'
  },
  {
    pokemon_species_id: 796,
    local_language_id: 12,
    name: '电束木',
    genus: '灯饰宝可梦'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 1,
    name: 'テッカグヤ',
    genus: 'うちあげポケモン'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 3,
    name: '철화구야',
    genus: '쏴올리기포켓몬'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 4,
    name: '鐵火輝夜',
    genus: '發射寶可夢'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 5,
    name: 'Bamboiselle',
    genus: 'Pokémon Décollage'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 6,
    name: 'Kaguron',
    genus: 'Raketenstart'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 7,
    name: 'Celesteela',
    genus: 'Pokémon Lanzamiento'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 8,
    name: 'Celesteela',
    genus: 'Pokémon Decollo'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 9,
    name: 'Celesteela',
    genus: 'Launch Pokémon'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 11,
    name: 'テッカグヤ',
    genus: 'うちあげポケモン'
  },
  {
    pokemon_species_id: 797,
    local_language_id: 12,
    name: '铁火辉夜',
    genus: '发射宝可梦'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 1,
    name: 'カミツルギ',
    genus: 'ばっとうポケモン'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 3,
    name: '종이신도',
    genus: '발도포켓몬'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 4,
    name: '紙御劍',
    genus: '拔刀寶可夢'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 5,
    name: 'Katagami',
    genus: 'Pokémon Battô'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 6,
    name: 'Katagami',
    genus: 'Schwertkunst'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 7,
    name: 'Kartana',
    genus: 'Pokémon Desenvaine'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 8,
    name: 'Kartana',
    genus: 'Pokémon Spadatratta'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 9,
    name: 'Kartana',
    genus: 'Drawn Sword Pokémon'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 11,
    name: 'カミツルギ',
    genus: 'ばっとうポケモン'
  },
  {
    pokemon_species_id: 798,
    local_language_id: 12,
    name: '纸御剑',
    genus: '拔刀宝可梦'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 1,
    name: 'アクジキング',
    genus: 'あくじきポケモン'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 3,
    name: '악식킹',
    genus: '악식성포켓몬'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 4,
    name: '惡食大王',
    genus: '異食寶可夢'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 5,
    name: 'Engloutyran',
    genus: 'Pokémon Bizarrovore'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 6,
    name: 'Schlingking',
    genus: 'Gaumenfolter'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 7,
    name: 'Guzzlord',
    genus: 'Pokémon Tragaldabas'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 8,
    name: 'Guzzlord',
    genus: 'Pokémon Divoratutto'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 9,
    name: 'Guzzlord',
    genus: 'Junkivore Pokémon'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 11,
    name: 'アクジキング',
    genus: 'あくじきポケモン'
  },
  {
    pokemon_species_id: 799,
    local_language_id: 12,
    name: '恶食大王',
    genus: '异食宝可梦'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 1,
    name: 'ネクロズマ',
    genus: 'プリズムポケモン'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 3,
    name: '네크로즈마',
    genus: '프리즘포켓몬'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 4,
    name: '奈克洛茲瑪',
    genus: '稜鏡寶可夢'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 5,
    name: 'Necrozma',
    genus: 'Pokémon Prisme'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 6,
    name: 'Necrozma',
    genus: 'Prisma'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 7,
    name: 'Necrozma',
    genus: 'Pokémon Prisma'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 8,
    name: 'Necrozma',
    genus: 'Pokémon Prisma'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 9,
    name: 'Necrozma',
    genus: 'Prism Pokémon'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 11,
    name: 'ネクロズマ',
    genus: 'プリズムポケモン'
  },
  {
    pokemon_species_id: 800,
    local_language_id: 12,
    name: '奈克洛兹玛',
    genus: '棱镜宝可梦'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 1,
    name: 'マギアナ',
    genus: 'じんぞうポケモン'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 3,
    name: '마기아나',
    genus: '인조포켓몬'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 4,
    name: '瑪機雅娜',
    genus: '人造寶可夢'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 5,
    name: 'Magearna',
    genus: 'Pokémon Artificiel'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 6,
    name: 'Magearna',
    genus: 'Fabrikat'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 7,
    name: 'Magearna',
    genus: 'Pokémon Artificial'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 8,
    name: 'Magearna',
    genus: 'Pokémon Artificiale'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 9,
    name: 'Magearna',
    genus: 'Artificial Pokémon'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 11,
    name: 'マギアナ',
    genus: 'じんぞうポケモン'
  },
  {
    pokemon_species_id: 801,
    local_language_id: 12,
    name: '玛机雅娜',
    genus: '人造宝可梦'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 1,
    name: 'マーシャドー',
    genus: 'かげすみポケモン'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 3,
    name: '마샤도',
    genus: '그림자살이포켓몬'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 4,
    name: '瑪夏多',
    genus: '棲影寶可夢'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 5,
    name: 'Marshadow',
    genus: 'Pokémon Ombrefuge'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 6,
    name: 'Marshadow',
    genus: 'Dunkelwesen'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 7,
    name: 'Marshadow',
    genus: 'Pokémon Morasombra'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 8,
    name: 'Marshadow',
    genus: 'Pokémon Vivinombra'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 9,
    name: 'Marshadow',
    genus: 'Gloomdweller Pokémon'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 11,
    name: 'マーシャドー',
    genus: 'かげすみポケモン'
  },
  {
    pokemon_species_id: 802,
    local_language_id: 12,
    name: '玛夏多',
    genus: '栖影宝可梦'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 1,
    name: 'ベベノム',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 3,
    name: '베베놈',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 4,
    name: '毒貝比',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 5,
    name: 'Vémini',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 6,
    name: 'Venicro',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 7,
    name: 'Poipole',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 8,
    name: 'Poipole',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 9,
    name: 'Poipole',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 11,
    name: 'ベベノム',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 803,
    local_language_id: 12,
    name: '毒贝比',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 1,
    name: 'アーゴヨン',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 3,
    name: '아고용',
    genus: '독침포켓몬'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 4,
    name: '四顎針龍',
    genus: '毒針寶可夢'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 5,
    name: 'Mandrillon',
    genus: 'Pokémon Vénépic'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 6,
    name: 'Agoyon',
    genus: 'Giftdorn'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 7,
    name: 'Naganadel',
    genus: 'Pokémon Pin Veneno'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 8,
    name: 'Naganadel',
    genus: 'Pokémon Velenago'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 9,
    name: 'Naganadel',
    genus: 'Poison Pin Pokémon'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 11,
    name: 'アーゴヨン',
    genus: 'どくばりポケモン'
  },
  {
    pokemon_species_id: 804,
    local_language_id: 12,
    name: '四颚针龙',
    genus: '毒针宝可梦'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 1,
    name: 'ツンデツンデ',
    genus: 'いしがきポケモン'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 3,
    name: '차곡차곡',
    genus: '돌담포켓몬'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 4,
    name: '石',
    genus: '石牆寶可夢'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 5,
    name: 'Ama-Ama',
    genus: 'Pokémon Muraille'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 6,
    name: 'Muramura',
    genus: 'Steinmauer'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 7,
    name: 'Stakataka',
    genus: 'Pokémon Muro'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 8,
    name: 'Stakataka',
    genus: 'Pokémon Bastione'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 9,
    name: 'Stakataka',
    genus: 'Rampart Pokémon'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 11,
    name: 'ツンデツンデ',
    genus: 'いしがきポケモン'
  },
  {
    pokemon_species_id: 805,
    local_language_id: 12,
    name: '石',
    genus: '石墙宝可梦'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 1,
    name: 'ズガドーン',
    genus: 'はなびポケモン'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 3,
    name: '두파팡',
    genus: '불꽃놀이포켓몬'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 4,
    name: '頭小',
    genus: '煙火寶可夢'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 5,
    name: 'Pierroteknik',
    genus: 'Pokémon Artificier'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 6,
    name: 'Kopplosio',
    genus: 'Feuerwerk'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 7,
    name: 'Blacephalon',
    genus: 'Pokémon Pirotecnia'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 8,
    name: 'Blacephalon',
    genus: 'Pokémon Pirotecnico'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 9,
    name: 'Blacephalon',
    genus: 'Fireworks Pokémon'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 11,
    name: 'ズガドーン',
    genus: 'はなびポケモン'
  },
  {
    pokemon_species_id: 806,
    local_language_id: 12,
    name: '头小丑',
    genus: '烟火宝可梦'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 1,
    name: 'ゼラオラ',
    genus: 'じんらいポケモン'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 3,
    name: '제라오라',
    genus: '신뢰포켓몬'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 4,
    name: '捷拉拉',
    genus: '奔雷寶可夢'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 5,
    name: 'Zeraora',
    genus: 'Pokémon Vif Éclair'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 6,
    name: 'Zeraora',
    genus: 'Blitzsturm'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 7,
    name: 'Zeraora',
    genus: 'Pokémon Fulgor'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 8,
    name: 'Zeraora',
    genus: 'Pokémon Fulmirapido'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 9,
    name: 'Zeraora',
    genus: 'Thunderclap Pokémon'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 11,
    name: 'ゼラオラ',
    genus: 'じんらいポケモン'
  },
  {
    pokemon_species_id: 807,
    local_language_id: 12,
    name: '捷拉拉',
    genus: '奔雷宝可梦'
  }
];

export default pokemonSpeciesData;