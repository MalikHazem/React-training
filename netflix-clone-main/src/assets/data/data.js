let series = [
  {
    id: 1,
    no: 8,
    name: "The Witcher: Blood Origin",
    about:
      "Set more than a thousand years before the world of The Witcher, seven outcasts in the elf world unite in a quest against an unstoppable power.",
    isNetflixSeries: true,
    seasons: 1,
    episodes: {
      s1: 4,
    },
    genre: ["fantasy", "drama", "action"],
    rate: 9,
    isMovie: false,
    cast: [
      "Michelle Yeoh",
      "Sophia Brown",
      "Jacob Collins-Levy",
      "Laurence O'Fuarain",
      "Jodie Turner-Smith",
    ],
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BYTYxZjhlZjQtYTlmYi00OWM0LWI4YzgtNjAxZmJkNjM1MTQzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    landscapeImg:
      "https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-10-at-12.09.28-PM.png?w=681&h=383&crop=1",
  },
  {
    id: 2,
    no: 9,
    name: "Emily in Paris",
    about:
      "Emily in Paris is an American-French romantic comedy television series created by Darren Star for Netflix. Set and filmed in Paris, the series stars Lily Collins as aspiring marketing executive Emily Cooper, an American who moves to France to provide an American point of view to Savoir, a French marketing firm.",
    isNetflixSeries: true,
    seasons: 2,
    episodes: {
      s1: 10,
      s2: 10,
    },
    genre: ["comedy", "drama"],
    rate: 6.9,
    isMovie: false,
    cast: [
      "Lily Collins",
      "Lucas Bravo",
      "Philippine Leory-Beauliew",
      "Ashley Park",
    ],
    portaitImage: "https://flxt.tmsimg.com/assets/p18761121_b_h8_ak.jpg",
    landscapeImg:
      "https://fangirlish.com/wp-content/uploads/2021/12/EIP_210_Unit_02921R-scaled-1.jpeg",
  },
  {
    id: 3,
    no: 10,
    name: "The Queen's Gambit",
    about:
      "Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess the player in the world.",
    isNetflixSeries: true,
    seasons: 1,
    episodes: {
      s1: 7,
    },
    genre: ["history", "drama"],
    rate: 8.6,
    isMovie: false,
    cast: [
      "Anya Taylor-Joy",
      "Thomas Brodie-Sangster",
      "Harry Melling",
      "Jacob Fortune-Lloyd",
      "Moses Ingram",
      "Marielle Heller",
    ],
    portaitImage:
      "https://assets.vogue.com/photos/5fb52f5b71ab829af01992b9/3:4/w_2400,h_3200,c_limit/The-Queens-Gambit-vogue-171120-courtesy-Netflix-4.jpg",
    landscapeImg:
      "https://m.media-amazon.com/images/M/MV5BOWE4ZjY1MTktYTdhMy00OWMzLWIzMGMtYWNmMjhmMmFlYWQ4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    id: 4,
    no: 11,
    name: "Friends",
    about:
      "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures that make their lives both troublesome and happening.",
    isNetflixSeries: false,
    seasons: 10,
    episodes: {
      s1: 24,
      s2: 24,
      s3: 25,
      s4: 24,
      s5: 24,
      s6: 25,
      s7: 24,
      s8: 24,
      s9: 24,
      s10: 17,
    },
    genre: ["romance", "Comedy"],
    rate: 8.9,
    isMovie: false,
    cast: [
      "Jennifer Aniston",
      "Lisa Kudrow",
      "David Schwimmer",
      "Matthew Perry",
      "Courteney Cox",
      "Matt LeBlanc",
    ],
    portaitImage:
      "https://www.tvguide.com/a/img/catalog/provider/1/1/1-9006171376.jpg",
    landscapeImg:
      "https://m.media-amazon.com/images/M/MV5BZDc2NTg5YWUtZGZlZC00Y2VmLTgwZjEtZDUxM2QyNGRmYjZlXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg",
  },
  {
    id: 5,
    no: 12,
    name: "Goblin",
    about:
      "Kim Shin, an immortal goblin, goes to find a human bride to remove an invisible sword from his chest and end his life. One day, school student Ji Eun-Tak confesses to him that she is the chosen one.",
    isNetflixSeries: false,
    seasons: 1,
    episodes: {
      s1: 16,
    },
    genre: ["romance", "drama"],
    rate: 9.7,
    isMovie: false,
    cast: ["Gong Yoo", "Lee Dong-Wook", " Kim Go-eun", "Yoo In-na"],
    portaitImage: "https://static.tvtropes.org/pmwiki/pub/images/kim_shin.jpg",
    landscapeImg:
      "https://www.slashfilm.com/img/gallery/the-daily-stream-its-time-to-ring-in-cozy-gong-yoo-season-with-the-wintry-fantasy-k-drama-goblin/l-intro-1633407397.jpg",
  },
  {
    id: 6,
    no: 13,
    name: "Peaky Blinders",
    about:
      "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
    isNetflixSeries: false,
    seasons: 6,
    episodes: {
      s1: 6,
      s2: 6,
      s3: 6,
      s4: 6,
      s5: 6,
      s6: 6,
    },
    genre: ["history", "crime", "drama"],
    rate: 9.7,
    isMovie: false,
    cast: ["Cillian Murphy", "Paul Anderson", "Tom Hardy"],
    portaitImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peaky-blinders-1-1565292784.jpg",
    landscapeImg:
      "https://metro.co.uk/wp-content/uploads/2022/01/AD_147011810.jpg?quality=90&strip=all&crop=0px%2C73px%2C2500px%2C1314px&resize=1200%2C630",
  },
  {
    id: 7,
    no: 14,
    name: "The Witcher",
    about:
      "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
    isNetflixSeries: true,
    seasons: 2,
    episodes: {
      s1: 8,
      s2: 8,
    },
    genre: ["fantasy", "action", "drama"],
    rate: 10,
    isMovie: false,
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    portaitImage:
      "https://cdn.vox-cdn.com/thumbor/o0ABfz2s16RsMFYLUt-K_s-bjfM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19481973/TheWitcher_101_Unit_06900_RT.fk3ph4dhp.jpg",
    landscapeImg:
      "https://media.cnn.com/api/v1/images/stellar/prod/221216035327-01-henry-cavill-the-witcher.jpg?c=original",
  },
  {
    id: 8,
    no: 15,
    name: "The Crown",
    about:
      "Based on an award-winning play ('The Audience') by showrunner Peter Morgan, this lavish, Netflix-original drama chronicles the life of Queen Elizabeth II from the 1940s to modern times. The series begins with an inside look at the early reign of the queen, who ascended the throne at age 25 after the death of her father, King George VI. As the decades pass, personal intrigues, romances, and political rivalries are revealed that played a big role in events that shaped the later years of the 20th century.",
    isNetflixSeries: true,
    seasons: 5,
    episodes: {
      s1: 10,
      s2: 10,
      s3: 10,
      s4: 10,
      s5: 10,
    },
    genre: ["history", "drama"],
    rate: 5.7,
    isMovie: false,
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton", "Matt Smith"],
    landscapeImg:
      "https://occ-0-116-3647.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbc5tb-7_Cpneg-lPxm4NZRaLvxk_WqgJQV2lo-0o_sOiQPqfiqxrf5LBHVFZuTwDzUL0busvQywgDJ2yUeZYag7BgCHjSFvmPPs.jpg?r=244",
    portaitImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/The_Crown_season_2.jpeg/220px-The_Crown_season_2.jpeg",
  },
  {
    id: 9,
    no: 16,
    name: "Lupin",
    about:
      "A retelling of the classic French story about Arsène Lupin, the world-famous gentleman thief and master of disguise.",
    isNetflixSeries: true,
    seasons: 2,
    episodes: {
      s1: 5,
      s2: 5,
    },
    genre: ["action", "crime", "mystery", "thriller"],
    rate: 7.5,
    isMovie: false,
    cast: ["Omar Sy", "Shirine Boutella", "Ludivine Sagnier", "Clotilde Hesme"],
    landscapeImg:
      "https://occ-0-1123-2186.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW3_GJZCwyR_ZE4KK4I7RZI1hXyxHDhXU0FzSoKbVCSaNw2dYPi6-7B2H0UbOSmI4x-roP2IhGT-HiPd3-vqa1uUorPlyKo8oL1W.jpg?r=e47",
    portaitImage:
      "https://static.displate.com/857x1200/displate/2021-04-07/91f7c1a0c352f04c8d20a71a9b2a30a3_75ff3cc729dc8f919cac3e89c32986b5.jpg",
  },
  {
    id: 10,
    no: 17,
    name: "Man Vs Bee",
    about:
      "A homeless man looking for work is mistaken by a business woman for her new house sitter. Wacky hi-jinks ensue as he tries to take care of this house while pursued by a mischievous bee.",
    isNetflixSeries: true,
    seasons: 1,
    episodes: {
      s1: 9,
    },
    genre: ["comedy", "drama"],
    rate: 6.7,
    isMovie: false,
    cast: ["Rowan Atkinson", "Claudie Blakley", "India Fowler"],
    landscapeImg:
      "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQejREi0RuhcLSV6DYMG8UOyJ54UTFWFGtKjPyMSFt4rEv01AXPZgpQCKCTFPNE4DOeFKwwZfwvbWpLvRd67AOMt3aGgxUKvAH5z_cxk3sHDZ-s_8XgPfZS4TpHtV9NnP0vXochpFKBspXfy2ZHt-eV4rTeQ.jpg?r=4d5",
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_.jpg",
  },
];
let movies = [
  {
    id: 11,
    no: 1,
    name: "The Gray Man",
    about:
      "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.",
    isNetflixSeries: true,
    genre: ["thriller", "action"],
    Duration: "2h 2m",
    rate: 6.5,
    isMovie: true,
    cast: ["Ryan Gosling", "Chris Evans", "Ana de Armas"],
    portaitImage:
      "https://static.metacritic.com/images/products/movies/9/f62b27bb506139ad7bb5ce70fca025b9.jpg",
    landscapeImg:
      "https://occ-0-999-3211.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdy-faTwQD7YK6tirPkhmsovv6blu05YcjEwFCYGa_ToIxtusZGR-edOY-bHfyYNyVo5w46tWCW3IV5Cgx4G196M-V6d-b5FMRNZ.jpg?r=d7f",
  },
  {
    id: 12,
    no: 2,
    name: "Enola Holmes",
    about:
      "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
    isNetflixSeries: true,
    genre: ["mystery", "adevnture", "crime", "drama", "action"],
    Duration: "2h 5m",
    rate: 6.6,
    isMovie: true,
    cast: ["Millie Bobby Brown", "Louis Partridge", "Henry Cavill"],
    portaitImage: "https://m.media-amazon.com/images/I/51Pk5CMy9CL.jpg",
    landscapeImg:
      "https://occ-0-1380-1432.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaqnFL7AryVgxeUDe2Vfy6L3-exIaIcYfxt3nb1U9nrE1Ib7oULnmcxe8arkmlZlqHH9DLCS8ocYyGtw9jQbqZRO9CAJq5fPW8Av.jpg?r=ce4",
  },
  {
    id: 13,
    no: 3,
    name: "Enola Holmes 2",
    about:
      "Enola Holmes takes on her first case as a detective, but to unravel the mystery of a missing girl, she'll need some help from friends -- and brother Sherlock.",
    isNetflixSeries: true,
    genre: ["mystery", "adevnture", "crime", "drama", "action"],
    Duration: "2h 9m",
    rate: 6.8,
    isMovie: true,
    cast: ["Millie Bobby Brown", "Louis Partridge", "Henry Cavill"],
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BMDI1NWM1ZDItNDFhMi00YWRhLTg1YzItNTNhY2M2N2QzY2FkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    landscapeImg:
      "https://occ-0-3211-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSsyqG8G9AU-ed8d1sstdq3cWsMhpbPTb2An5mTz1lskFZXkIu16p_L_cKQRRxv3vyvlTPy91QwmjFXIXqteGuGLHInHRYOax7Ca.jpg?r=e63",
  },
  {
    id: 14,
    no: 4,
    name: "Lou",
    about:
      "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
    isNetflixSeries: true,
    genre: ["thriller", "crime", "action"],
    Duration: "1h 49m",
    rate: 6.1,
    isMovie: true,
    cast: ["Allison Janney", "Logan Marshall-Green", "Jurnee Smollett"],
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDViYTktM2QyZS00ZGNmLWFlMTctYTliZTUwMWM3YTMwXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
    landscapeImg:
      "https://occ-0-2186-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWG7_S5Ld3jMW0vCHIcaTLDPdC1OyfE6-mAoejvuqxMoxs1vXbjACK04UGruKf8IT9PcTcqq2ikzhJ0-T66V_AabLN6It0r0ySm8.jpg?r=9b1",
  },
  {
    id: 15,
    no: 5,
    name: "Jumanji: The Next Level",
    about:
      "When Spencer goes missing, his group of friends return to Jumanji to travel unexplored territories and help him escape the world's most dangerous game.",
    isNetflixSeries: false,
    genre: ["comedy", "thriller", "fantasy"],
    Duration: "1h 49m",
    rate: 6.7,
    isMovie: true,
    cast: ["Dwayne Johnson", "Kevin Hart", "Karen Gillan", "Jack Black"],
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    landscapeImg:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/Jumanji-Cover-1_1200x630.jpeg",
  },
  {
    id: 16,
    no: 6,
    name: "The Witcher: Nightmare of the Wolf ",
    about:
      "Vesemir, a cocky young witcher, delights in slaying monsters for coin. When a dangerous new power rises on the Continent, Vesemir learns that some witchering jobs are about more than just money.",
    isNetflixSeries: true,
    genre: ["fantasy", "adventure", "action"],
    Duration: "1h 49m",
    rate: 7.2,
    isMovie: true,
    cast: ["Graham McTavish", "Theo James", "Lara Pulver"],
    portaitImage:
      "https://honadrama.us/wp-content/uploads/2021/08/MV5BY2IwNjM0ODktYTZkNy00ZTA0LWEzMWYtMDE3ZDg0YmI3YzQ3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_-.jpg_UY1200-.jpg",
    landscapeImg:
      "https://occ-0-64-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfhLu21hMpCtB8CvwuVTciBQIeLdQ_pwiFSoiAG_bNUtsBMwGuHBLZxC6ohYSMNIB1PHCQLm80Kx1tXJrRJaBRCKABOmumbYGjq7.jpg?r=c76",
  },
  {
    id: 17,
    no: 7,

    name: "Slumberland",
    about:
      "A young girl discovers a secret map to the dreamworld of Slumberland, and with the help of an eccentric outlaw, she traverses dreams and flees nightmares, with the hope that she will be able to see her late father again.",
    isNetflixSeries: true,
    genre: ["thriller", "comedy", "fantasy"],
    Duration: "1h 49m",
    rate: 10,
    isMovie: true,
    cast: ["Marlow Barkley", "Jason Momoa", "Jason Momoa"],
    portaitImage:
      "https://m.media-amazon.com/images/M/MV5BNDUzMzE3NDktN2JmOC00ZjJmLTg0NmMtODE0NDkzNDE5OGYwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    landscapeImg:
      "https://occ-0-2186-1432.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdJ70H9zKV8LB8_PkPevTVpLrqFOmmLqZ9gQthfOet7kBWaHAamldUlI7JSWWP4if1x20fw6jkZc4YZYjsuQ8gCfDOsKqAb5iKRD.jpg?r=358",
  },
];
export { movies, series };
