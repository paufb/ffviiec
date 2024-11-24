import { Gear } from '../models/Gear.ts';
import { charactersData } from './charactersData.ts';
import { reinforcementAbilitiesData } from './reinforcementAbilitiesData.ts';

export const gearData = {
  "Ex-SOLDIER: First Class": new Gear({
    id: 1001,
    name: 'Ex-SOLDIER: First Class',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Murasame Battle Garb": new Gear({
    id: 1002,
    name: 'Murasame Battle Garb',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20403]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Battlefield Garb": new Gear({
    id: 1003,
    name: 'Battlefield Garb',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Maritime Sailor": new Gear({
    id: 1004,
    name: 'Maritime Sailor',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20602]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bandaged Coat": new Gear({
    id: 1007,
    name: 'Bandaged Coat',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10601]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Official Festive Garb": new Gear({
    id: 1008,
    name: 'Official Festive Garb',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20203]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Zidane's Outfit": new Gear({
    id: 1009,
    name: 'Zidane\'s Outfit',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Saber Style": new Gear({
    id: 1010,
    name: 'Saber Style',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20303]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Glavenus Armor": new Gear({
    id: 1011,
    name: 'Glavenus Armor',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[52501]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Garb": new Gear({
    id: 1012,
    name: 'Bahamut Garb',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[12001],
      reinforcementAbilitiesData[53501]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Locke's Outfit": new Gear({
    id: null,
    name: 'Locke\'s Outfit',
    character: charactersData[1],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53303],
      reinforcementAbilitiesData[52501]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Avalanche Leader": new Gear({
    id: 2001,
    name: 'Avalanche Leader',
    character: charactersData[2],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Fiery Cape": new Gear({
    id: 2002,
    name: 'Fiery Cape',
    character: charactersData[2],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Electroarmor": new Gear({
    id: 2003,
    name: 'Electroarmor',
    character: charactersData[2],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[53001]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Scrap Armor": new Gear({
    id: 2004,
    name: 'Scrap Armor',
    character: charactersData[2],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10201]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Seventh Heaven Bartender": new Gear({
    id: 3001,
    name: 'Seventh Heaven Bartender',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Metalfoot": new Gear({
    id: 3002,
    name: 'Metalfoot',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Lifeguard": new Gear({
    id: 3004,
    name: 'Lifeguard',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10601]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Amarant's Guise": new Gear({
    id: 3010,
    name: 'Amarant\'s Guise',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Fairy of the Holy Flame": new Gear({
    id: 3009,
    name: 'Fairy of the Holy Flame',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20303]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Guide Uniform": new Gear({
    id: 3012,
    name: 'Guide Uniform',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[52501]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bunny Bustier": new Gear({
    id: 3011,
    name: 'Bunny Bustier',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51501],
      reinforcementAbilitiesData[20603]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Feather Style": new Gear({
    id: 3006,
    name: 'Feather Style',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Kirin Suit": new Gear({
    id: 3013,
    name: 'Kirin Suit',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51501],
      reinforcementAbilitiesData[20403]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Passion Mermaid": new Gear({
    id: 3014,
    name: 'Passion Mermaid',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53201],
      reinforcementAbilitiesData[20203]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Suit": new Gear({
    id: 3015,
    name: 'Bahamut Suit',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[12001],
      reinforcementAbilitiesData[53503]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Sabin's Style": new Gear({
    id: null,
    name: 'Sabin\'s Style',
    character: charactersData[3],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53303],
      reinforcementAbilitiesData[52501]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "The Slums' Flower Girl": new Gear({
    id: 4001,
    name: 'The Slums\' Flower Girl',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Prism Dress": new Gear({
    id: 4002,
    name: 'Prism Dress',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20703]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Rosy Battle Suit": new Gear({
    id: 4003,
    name: 'Rosy Battle Suit',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Sunny Robe": new Gear({
    id: 4004,
    name: 'Sunny Robe',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10301]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Floral Gown": new Gear({
    id: 4005,
    name: 'Floral Gown',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Fairy of Snowfall": new Gear({
    id: 4007,
    name: 'Fairy of Snowfall',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20302]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Chocobo Suit": new Gear({
    id: 4008,
    name: 'Chocobo Suit',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Garnet's Gown": new Gear({
    id: 4009,
    name: 'Garnet\'s Gown',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10601]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Classic Coney": new Gear({
    id: 4010,
    name: 'Classic Coney',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51501],
      reinforcementAbilitiesData[20203]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Kamura Dress": new Gear({
    id: 4011,
    name: 'Kamura Dress',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Citric Dress": new Gear({
    id: 4012,
    name: 'Citric Dress',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53301],
      reinforcementAbilitiesData[52601]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Robe": new Gear({
    id: 4013,
    name: 'Bahamut Robe',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[12001],
      reinforcementAbilitiesData[53502]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Terra's Garb": new Gear({
    id: 4014,
    name: 'Terra\'s Garb',
    character: charactersData[4],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53303],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Hojo's Specimen": new Gear({
    id: 5001,
    name: 'Hojo\'s Specimen',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Rubber Harness": new Gear({
    id: 5002,
    name: 'Rubber Harness',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Seaside Aloha": new Gear({
    id: 5005,
    name: 'Seaside Aloha',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10201]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Canyon Duds": new Gear({
    id: 5003,
    name: 'Canyon Duds',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[52102]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "The Hellhound": new Gear({
    id: 5006,
    name: 'The Hellhound',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[52701]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Pilot's Jacket": new Gear({
    id: 5004,
    name: 'Pilot\'s Jacket',
    character: charactersData[5],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Amazing Materia Hunter": new Gear({
    id: 6001,
    name: 'Amazing Materia Hunter',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Puckish Lion": new Gear({
    id: 6003,
    name: 'Puckish Lion',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Winter Moogle": new Gear({
    id: 6005,
    name: 'Winter Moogle',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Sparkling Skater": new Gear({
    id: 6004,
    name: 'Sparkling Skater',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20703]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Shinobi Hawk": new Gear({
    id: 6002,
    name: 'Shinobi Hawk',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51401],
      reinforcementAbilitiesData[20503]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Summer Moogle": new Gear({
    id: 6008,
    name: 'Summer Moogle',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53201],
      reinforcementAbilitiesData[20203]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Mantle": new Gear({
    id: 6009,
    name: 'Bahamut Mantle',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[12001],
      reinforcementAbilitiesData[53501]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Nanaki Mantle": new Gear({
    id: 6006,
    name: 'Nanaki Mantle',
    character: charactersData[6],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53701],
      reinforcementAbilitiesData[20303]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Self-Professed Fortune-Teller": new Gear({
    id: 7001,
    name: 'Self-Professed Fortune-Teller',
    character: charactersData[7],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Marching Jacket": new Gear({
    id: 7002,
    name: 'Marching Jacket',
    character: charactersData[7],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Party Jacket": new Gear({
    id: 7008,
    name: 'Party Jacket',
    character: charactersData[7],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[10803]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Felyne Kamura Garb": new Gear({
    id: 7009,
    name: 'Felyne Kamura Garb',
    character: charactersData[7],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Pumpkin Jacket": new Gear({
    id: 7006,
    name: 'Pumpkin Jacket',
    character: charactersData[7],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53701],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Mournful Former Turk": new Gear({
    id: 8001,
    name: 'Mournful Former Turk',
    character: charactersData[8],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Bouncer Suit": new Gear({
    id: 8002,
    name: 'Bouncer Suit',
    character: charactersData[8],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Stray Dog": new Gear({
    id: 8003,
    name: 'Stray Dog',
    character: charactersData[8],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53101],
      reinforcementAbilitiesData[20503]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Formal Attire": new Gear({
    id: 8005,
    name: 'Formal Attire',
    character: charactersData[8],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53301],
      reinforcementAbilitiesData[52601]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Crowmaster Suit": new Gear({
    id: 8006,
    name: 'Crowmaster Suit',
    character: charactersData[8],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53701],
      reinforcementAbilitiesData[20403]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "SOLDIER: Second Class Future Hero": new Gear({
    id: 20001,
    name: 'SOLDIER: Second Class Future Hero',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Valiant Suit": new Gear({
    id: 20004,
    name: 'Valiant Suit',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Tropical Beach": new Gear({
    id: 20006,
    name: 'Tropical Beach',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Black Hound": new Gear({
    id: 20010,
    name: 'Black Hound',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10201]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Holiday Suit": new Gear({
    id: 20009,
    name: 'Holiday Suit',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Shinra Full Dress Uniform": new Gear({
    id: 20005,
    name: 'Shinra Full Dress Uniform',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Guardian Style": new Gear({
    id: 20011,
    name: 'Guardian Style',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20203]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Glacier Armor": new Gear({
    id: 20008,
    name: 'Glacier Armor',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[20303]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Zinogre Armor": new Gear({
    id: 20012,
    name: 'Zinogre Armor',
    character: charactersData[20],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51401],
      reinforcementAbilitiesData[20403]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Shinra's Hero": new Gear({
    id: 49001,
    name: 'Shinra\'s Hero',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Aeroglider": new Gear({
    id: 49005,
    name: 'Aeroglider',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Edged Wings Training Garb": new Gear({
    id: 49002,
    name: 'Edged Wings Training Garb',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20303]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Dark Harbinger": new Gear({
    id: 49006,
    name: 'Dark Harbinger',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20702]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Kuja's Attire": new Gear({
    id: 49008,
    name: 'Kuja\'s Attire',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51501]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Celebratory Garb": new Gear({
    id: 49007,
    name: 'Celebratory Garb',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20202]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Lethal Style": new Gear({
    id: 49009,
    name: 'Lethal Style',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[52601]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Shinra Formal Uniform": new Gear({
    id: 49004,
    name: 'Shinra Formal Uniform',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[20702]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Natant Jacket": new Gear({
    id: 49003,
    name: 'Natant Jacket',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[20603]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Dark Attire": new Gear({
    id: 49010,
    name: 'Dark Attire',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53301],
      reinforcementAbilitiesData[20503]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Edgar's Attire": new Gear({
    id: 49011,
    name: 'Edgar\'s Attire',
    character: charactersData[49],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53303],
      reinforcementAbilitiesData[20603]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Unprecedented P0 SOLDIER": new Gear({
    id: 50001,
    name: 'Unprecedented P0 SOLDIER',
    character: charactersData[50],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Doom Dodger": new Gear({
    id: 50003,
    name: 'Doom Dodger',
    character: charactersData[50],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Cake Breaker": new Gear({
    id: 50002,
    name: 'Cake Breaker',
    character: charactersData[50],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Pumpkinmare": new Gear({
    id: 50006,
    name: 'Pumpkinmare',
    character: charactersData[50],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10201]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Vanguard Style": new Gear({
    id: 50007,
    name: 'Vanguard Style',
    character: charactersData[50],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20603]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Intellectual P0 SOLDIER": new Gear({
    id: 51001,
    name: 'Intellectual P0 SOLDIER',
    character: charactersData[51],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Professor": new Gear({
    id: 51005,
    name: 'Professor',
    character: charactersData[51],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Elite Uniform": new Gear({
    id: 51002,
    name: 'Elite Uniform',
    character: charactersData[51],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Killer Attire": new Gear({
    id: 51003,
    name: 'Killer Attire',
    character: charactersData[51],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10201]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Aidman's White Coat": new Gear({
    id: 51004,
    name: 'Aidman\'s White Coat',
    character: charactersData[51],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10601]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Disciplined P0 SOLDIER": new Gear({
    id: 52001,
    name: 'Disciplined P0 SOLDIER',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Marksqueen": new Gear({
    id: 52005,
    name: 'Marksqueen',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Black Stealth": new Gear({
    id: 52002,
    name: 'Black Stealth',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Vivi's Garb": new Gear({
    id: 52007,
    name: 'Vivi\'s Garb',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Holiday Coat": new Gear({
    id: 52006,
    name: 'Holiday Coat',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20503]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Gothic Bunny": new Gear({
    id: 52008,
    name: 'Gothic Bunny',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[52901]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Beach Agent": new Gear({
    id: 52009,
    name: 'Beach Agent',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[53201],
      reinforcementAbilitiesData[51903]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Entrapment Gown": new Gear({
    id: 52004,
    name: 'Entrapment Gown',
    character: charactersData[52],
    reinforcementAbilities: [
      reinforcementAbilitiesData[40101],
      reinforcementAbilitiesData[53401]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Genial SOLDIER: Second Class": new Gear({
    id: 56001,
    name: 'Genial SOLDIER: Second Class',
    character: charactersData[56],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Shinra Expedition Wear": new Gear({
    id: 56002,
    name: 'Shinra Expedition Wear',
    character: charactersData[56],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Honorable Training Garb": new Gear({
    id: 56003,
    name: 'Honorable Training Garb',
    character: charactersData[56],
    reinforcementAbilities: [
      reinforcementAbilitiesData[11901],
      reinforcementAbilitiesData[20603]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Cyan's Attire": new Gear({
    id: 56004,
    name: 'Cyan\'s Attire',
    character: charactersData[56],
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  })
};
