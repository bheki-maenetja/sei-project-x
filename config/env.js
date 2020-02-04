const port = 4000
const dbURI = 'mongodb://localhost/mobster-api'
const secret = 'I made him an offer he couldn\'t refuse'

const userObjs = [
  {
    'username': 'user',
    'email': 'user@email.com',
    'password': 'pass',
    'passwordConfirmation': 'pass'
  },
  {
    'username': 'user2',
    'email': 'user2@email.com',
    'password': 'pass2',
    'passwordConfirmation': 'pass2'
  },
  {
    'username': 'user3',
    'email': 'user3@email.com',
    'password': 'pass3',
    'passwordConfirmation': 'pass3'
  }
]

const orgObjs = [
  {
    name: 'The Corleone Crime Family',
    slug: 'godfather-12',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/2XO0Msc.jpg',
    business: ['politics', 'extortion', 'money laundering', 'gambling'],
    countries_of_operation: ['United States of America', 'Italy'],
    base: []
  },
  {
    name: 'The Medillin Cartel',
    slug: 'escobar-98',
    type: 'drug cartel',
    imageURL: 'https://i.imgur.com/9G63FB3.jpg',
    business: ['money laundering', 'narcotics'],
    countries_of_operation: ['United States of America', 'Mexico', 'Columbia'],
    base: []
  },
  {
    name: 'The Chicago Outfit',
    slug: 'chicago-31',
    type: 'crime syndicate',
    imageURL: 'https://i.imgur.com/cMPly6h.jpg',
    business: ['politics', 'extortion', 'money laundering', 'gambling'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'The Goodfellas',
    slug: 'goodfellas-90',
    type: 'gang',
    imageURL: 'https://i.imgur.com/XjynKEX.jpg',
    business: ['extortion', 'money laundering'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'The Teamsters Union',
    slug: 'teamster-75',
    type: 'labour union',
    imageURL: 'https://i.imgur.com/Eb29Rst.jpg',
    business: ['politics', 'extortion', 'money laundering'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'The Gambino Crime Family',
    slug: 'gambino-29',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/A80bcyp.png',
    business: ['politics', 'extortion', 'money laundering', 'gambling'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'The Gentlemen',
    slug: 'gentleman-20',
    type: 'gang',
    imageURL: 'https://i.imgur.com/yA2aPLa.jpg',
    business: ['extortion', 'money laundering', 'hit-jobs'],
    countries_of_operation: ['United Kingdon', 'United States of America'],
    base: []
  },
  {
    name: 'Spectre',
    slug: 'spectre-007',
    type: 'crime syndicate',
    imageURL: 'https://i.imgur.com/pDZy6R5.jpg?1',
    business: ['extortion', 'hit-jobs', 'terrorism', 'money-laundering'],
    countries_of_operation: ['United States of America', 'United Kingdom', 'Morocco'],
    base: []
  },
  {
    name: 'The Apostles',
    slug: 'apostle-06',
    type: 'crime syndicate',
    imageURL: 'https://i.imgur.com/uVkvtiT.jpg',
    business: ['extortion', 'terrorism'],
    countries_of_operation: ['United States of America', 'United Kingdom', 'Russia', 'China', 'France'],
    base: []
  },
  {
    name: 'The Sopranos',
    slug: 'soprano-17',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/uxJb4w7.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name1',
    slug: 'org-handle1',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name2',
    slug: 'org-handle2',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name3',
    slug: 'org-handle3',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name4',
    slug: 'org-handle4',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name5',
    slug: 'org-handle5',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name6',
    slug: 'org-handle6',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name7',
    slug: 'org-handle7',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  },
  {
    name: 'Company Name8',
    slug: 'org-handle8',
    type: 'crime family',
    imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
    business: ['extortion', 'money laundering', 'narcotics'],
    countries_of_operation: ['United States of America'],
    base: []
  }
  // {
  //   name: 'Company Name',
  //   slug: 'org-handle',
  //   type: 'crime family',
  //   imageURL: 'https://i.imgur.com/QJgqeo0.jpg',
  //   business: ['extortion', 'money laundering', 'narcotics'],
  //   countries_of_operation: ['United States of America'],
  //   base: []
  // },
]

const personObjs = [
  {
    name: 'Vito Corleone',
    alias: 'The Godfather',
    handle: 'vito-12',
    gender: 'male',
    business: ['politics', 'extortion', 'money laundering', 'illegal gambling'],
    imageURL: 'https://i.imgur.com/Ppf8Nrz.jpg',
    contact_details: { phone: '0117833675', email: 'godfather@gmail.com' },
    affiliations: 'godfather-12',
    rank: ['Don', 1]
  },
  {
    name: 'Tony Soprano',
    alias: 'Big Tony',
    handle: 'tony-27',
    gender: 'male',
    business: ['extortion', 'money laundering', 'narcotics'],
    imageURL: 'https://i.imgur.com/bFuR6fP.jpg',
    contact_details: { email: 'tony@outlook.com' },
    affiliations: 'soprano-17',
    rank: ['Don', 1]
  },
  {
    name: 'Jimmy Conway',
    alias: 'The Gent',
    handle: 'conway-45',
    gender: 'male',
    business: ['money laundering', 'bank robbery'],
    imageURL: 'https://i.imgur.com/OoGziSu.jpg',
    contact_details: { tel: '0116739090' },
    affiliations: 'goodfellas-90',
    rank: ['Underboss', 2]
  },
  {
    name: 'Frank Sheeran',
    alias: 'The Irishman',
    handle: 'irish-19',
    gender: 'male',
    business: ['hit-jobs'],
    imageURL: 'https://i.imgur.com/pWl0V0y.jpg',
    contact_details: { tel: '0116765690' },
    affiliations: 'teamster-75',
    rank: ['Capo', 3]
  },
  {
    name: 'Al Capone',
    alias: 'Scarface',
    handle: 'capone-31',
    gender: 'male',
    business: ['money laundering', 'hit-jobs', 'extortion'],
    imageURL: 'https://i.imgur.com/l2VuIPc.jpg',
    contact_details: { tel: '0566739090' },
    affiliations: 'chicago-31',
    rank: ['Don', 1]
  },
  {
    name: 'Tommy de Vito',
    alias: 'Tommy Loud Mouth',
    handle: 'tommy-90',
    gender: 'male',
    business: ['bank robbery', 'illegal gambling'],
    imageURL: 'https://i.imgur.com/mGWhDeJ.jpg',
    contact_details: { tel: '011664639090', email: 'deVito@goodmail.com' },
    affiliations: 'goodfellas-90',
    rank: ['Underboss', 2]
  },
  {
    name: 'Michael Corleone',
    alias: 'Quiet Michael',
    handle: 'michael-58',
    gender: 'male',
    business: ['money laundering', 'illegal gambling', 'extortion'],
    imageURL: 'https://i.imgur.com/yB5TaTQ.jpg',
    contact_details: { fax: '0116739090', tel: '029387282', email: 'godfather@gmail.com' },
    affiliations: 'godfather-12',
    rank: ['Underboss', 2]
  },
  {
    name: 'Fredo Corleone',
    alias: 'The Dummy',
    handle: 'fredo-69',
    gender: 'male',
    business: [],
    imageURL: 'https://i.imgur.com/nojcLEY.jpg',
    contact_details: { tel: '0116756090', email: 'fredo@email.com' },
    affiliations: 'godfather-12',
    rank: ['Soldier', 3]
  },
  {
    name: 'Henry Hill',
    alias: 'Henry Hillbilly',
    handle: 'henry-28',
    gender: 'male',
    business: ['bank robbery', 'narcotics'],
    imageURL: 'https://i.imgur.com/0TJfOwg.jpg',
    contact_details: { tel: '01164649090', email: 'herny@witnessprotection.com' },
    affiliations: 'goodfellas-90',
    rank: ['Soldier', 3]
  },
  {
    name: 'Jimmy Hoffa',
    alias: 'The Hoff',
    handle: 'hoffa-75',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/pOOH5RY.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'teamster-75',
    rank: ['Boss', 1]
  },
  {
    name: 'Name1',
    alias: 'Alias1',
    handle: 'twitter handle1',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name2',
    alias: 'Alias2',
    handle: 'twitter handle2',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name3',
    alias: 'Alias3',
    handle: 'twitter handle3',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name4',
    alias: 'Alias4',
    handle: 'twitter handle4',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name5',
    alias: 'Alias5',
    handle: 'twitter handle5',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name6',
    alias: 'Alias6',
    handle: 'twitter handle6',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'godfather-12',
    rank: ['Boss', 1]
  },
  {
    name: 'Name7',
    alias: 'Alias7',
    handle: 'twitter handle7',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'escobar-98',
    rank: ['Boss', 1]
  },
  {
    name: 'Name8',
    alias: 'Alias8',
    handle: 'twitter handle8',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'escobar-98',
    rank: ['Boss', 1]
  },
  {
    name: 'Name9',
    alias: 'Alias9',
    handle: 'twitter handle9',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'escobar-98',
    rank: ['Boss', 1]
  },
  {
    name: 'Name10',
    alias: 'Alias10',
    handle: 'twitter handle10',
    gender: 'male',
    business: ['money laundering', 'politics'],
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
    affiliations: 'escobar-98',
    rank: ['Boss', 1]
  }
  // {
  //   name: 'Name',
  //   alias: 'Alias',
  //   handle: 'twitter handle',
  //   gender: 'male',
  //   business: ['money laundering', 'politics'],
  //   imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
  //   contact_details: { tel: '0116739090', email: 'hoffa@jimmy.com' },
  //   affiliations: 'godfather-12',
  //   rank: ['Boss', 1]
  // },
]

const jobObjs = [
  {
    name: 'The Kennedy Contract',
    imageURL: 'https://i.imgur.com/gh9B1Vp.jpg',
    type: 'assasination',
    value: 10000000,
    issued_by: 'vito-12',
    description: 'We need you to wack the president',
    terms_of_contract: 'Simple hit job. When you\'re done, head to Cuba to collect your payment'
  },
  {
    name: 'American Made',
    imageURL: 'https://i.imgur.com/r6Hzxm2.jpg',
    type: 'smuggling',
    value: 500000,
    issued_by: 'tony-27',
    description: 'Run a drug smuggling operation from Columbia to the USA',
    terms_of_contract: 'You need to smuggle a half ton of powder per week.'
  },
  {
    name: 'High Street Heist',
    imageURL: 'https://i.imgur.com/hRB62MY.jpg',
    type: 'bank robbery',
    value: 2500000,
    issued_by: 'conway-45',
    description: 'Rob every major bank in the city. Drop off the cash at a safe house downtown',
    terms_of_contract: 'You get paid $2m per bank that you successfully hit plus 10% of the total loot'
  },
  {
    name: 'The Hoffa Hit',
    imageURL: 'https://i.imgur.com/bOJqi4L.jpg',
    type: 'assasination',
    value: 25000,
    issued_by: 'tommy-90',
    description: 'Things have gotten out of hand with this union boss. Take care of it.',
    terms_of_contract: '$25 000 for the hit plus 5k if you get rid of the body.'
  },
  {
    name: 'A Valentines Day to Forget',
    imageURL: 'https://i.imgur.com/CHnLLjs.jpg',
    type: 'multi hit-job',
    value: 12000,
    issued_by: 'capone-31',
    description: 'Take out 7 guys from a rival gang',
    terms_of_contract: 'You get paid 12k plus 5% for every extra kill'
  },
  {
    name: 'A Made Man',
    imageURL: 'https://i.imgur.com/0ZLVKcK.jpg',
    type: 'hit-job',
    value: 5000,
    issued_by: 'hoffa-75',
    description: 'Tommy de Vito\'s been running his mouth for a bit too long. Someone needs to shut him up.',
    terms_of_contract: '5k for the hit. Get rid of the body or you don\'t get paid.'
  },
  {
    name: 'Grand Automatic Theft',
    imageURL: 'https://i.imgur.com/kvfehyt.jpg',
    type: 'heists',
    value: 180000,
    issued_by: 'irish-19',
    description: 'Pull off 3 major heists worth billions of dollars',
    terms_of_contract: '180k per heist that you pull off, plus 20% of the total loot'
  },
  {
    name: 'No Big Deal',
    imageURL: 'https://i.imgur.com/3nqysp8.jpg',
    type: 'double drive-by',
    value: 50000,
    issued_by: 'tony-27',
    description: 'Two guys that need to go away, nuff said',
    terms_of_contract: '25k per hit. If you miss one you don\'t get paid'
  },
  {
    name: 'Roll of the Dice',
    imageURL: 'https://i.imgur.com/YwbtwwZ.jpg',
    type: 'illegal gambling',
    value: 30000,
    issued_by: 'michael-58',
    description: 'Go from town to town swindling casinos out of cash. You need to raise 50k in 2 days',
    terms_of_contract: 'You get paid 30k plus 10% of the money'
  },
  {
    name: 'The House Always Wins',
    imageURL: 'https://i.imgur.com/WT5LGkN.jpg',
    type: 'politics',
    value: 15000,
    issued_by: 'vito-12',
    description: 'One of our guys is having trouble with the feds. We need you to butt heads and knock some sense into people...by any means neccessary',
    terms_of_contract: '15k if our guy walks free. Plus, you we\'ll protect you if you ever get into trouble'
  },
  {
    name: 'Job Name1',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name2',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name3',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name4',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name5',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name6',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name7',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name8',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name9',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name10',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  },
  {
    name: 'Job Name11',
    imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
    type: 'Job Type',
    value: 15000,
    issued_by: 'vito-12',
    description: 'Description',
    terms_of_contract: 'Terms of Contract'
  }
  // {
  //   name: 'Job Name',
  //   imageURL: 'https://i.imgur.com/JWUuCLf.jpg',
  //   type: 'Job Type',
  //   value: 15000,
  //   issued_by: 'vito-12',
  //   description: 'Description',
  //   terms_of_contract: 'Terms of Contract'
  // },
]

module.exports = { port, dbURI, secret, personObjs, orgObjs, jobObjs, userObjs }