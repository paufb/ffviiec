import { Gear } from '../classes/Gear';
import { characters } from './characters';
import { reinforcementAbilities } from './reinforcementAbilities';

export const gear = {
  "Ex-SOLDIER: First Class": new Gear({
    id: 1001,
    name: 'Ex-SOLDIER: First Class',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Murasame Battle Garb": new Gear({
    id: 1002,
    name: 'Murasame Battle Garb',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Levinblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Battlefield Garb": new Gear({
    id: 1003,
    name: 'Battlefield Garb',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Maritime Sailor": new Gear({
    id: 1004,
    name: 'Maritime Sailor',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Water Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bandaged Coat": new Gear({
    id: 1007,
    name: 'Bandaged Coat',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost HEAL"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Official Festive Garb": new Gear({
    id: 1008,
    name: 'Official Festive Garb',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Zidane's Outfit": new Gear({
    id: 1009,
    name: 'Zidane\'s Outfit',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Saber Style": new Gear({
    id: 1010,
    name: 'Saber Style',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Glavenus Armor": new Gear({
    id: 1011,
    name: 'Glavenus Armor',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Physical Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Garb": new Gear({
    id: 1012,
    name: 'Bahamut Garb',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Bahamut's Bite"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Locke's Outfit": new Gear({
    id: 1013,
    name: 'Locke\'s Outfit',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Physical Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Holiday Outfit": new Gear({
    id: 1014,
    name: 'Holiday Outfit',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Pot."],
      reinforcementAbilities["Windstrike Arcanum"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "New Year's Battle Garb": new Gear({
    id: 1017,
    name: 'New Year\'s Battle Garb',
    character: characters[1],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Flamefrost Celebration"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Avalanche Leader": new Gear({
    id: 2001,
    name: 'Avalanche Leader',
    character: characters[2],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Fiery Cape": new Gear({
    id: 2002,
    name: 'Fiery Cape',
    character: characters[2],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Electroarmor": new Gear({
    id: 2003,
    name: 'Electroarmor',
    character: characters[2],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Indomitable Soul"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Scrap Armor": new Gear({
    id: 2004,
    name: 'Scrap Armor',
    character: characters[2],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PATK"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Seventh Heaven Bartender": new Gear({
    id: 3001,
    name: 'Seventh Heaven Bartender',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Metalfoot": new Gear({
    id: 3002,
    name: 'Metalfoot',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Lifeguard": new Gear({
    id: 3004,
    name: 'Lifeguard',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost HEAL"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Amarant's Guise": new Gear({
    id: 3010,
    name: 'Amarant\'s Guise',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Fairy of the Holy Flame": new Gear({
    id: 3009,
    name: 'Fairy of the Holy Flame',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Guide Uniform": new Gear({
    id: 3012,
    name: 'Guide Uniform',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Physical Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bunny Bustier": new Gear({
    id: 3011,
    name: 'Bunny Bustier',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Mag. Ability Pot."],
      reinforcementAbilities["Waterblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Feather Style": new Gear({
    id: 3006,
    name: 'Feather Style',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Kirin Suit": new Gear({
    id: 3013,
    name: 'Kirin Suit',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Mag. Ability Pot."],
      reinforcementAbilities["Levinblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Passion Mermaid": new Gear({
    id: 3014,
    name: 'Passion Mermaid',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Sun's Favor"],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Suit": new Gear({
    id: 3015,
    name: 'Bahamut Suit',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Bahamut's Whisper"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Sabin's Style": new Gear({
    id: 3016,
    name: 'Sabin\'s Style',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Physical Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Festive Blue Daffodil Attire": new Gear({
    id: 3017,
    name: 'Festive Blue Daffodil Attire',
    character: characters[3],
    reinforcementAbilities: [
      reinforcementAbilities["Reprieve"],
      reinforcementAbilities["New Year's Mastery"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "The Slums' Flower Girl": new Gear({
    id: 4001,
    name: 'The Slums\' Flower Girl',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Prism Dress": new Gear({
    id: 4002,
    name: 'Prism Dress',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Windstrike Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Rosy Battle Suit": new Gear({
    id: 4003,
    name: 'Rosy Battle Suit',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Sunny Robe": new Gear({
    id: 4004,
    name: 'Sunny Robe',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MATK"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Floral Gown": new Gear({
    id: 4005,
    name: 'Floral Gown',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Fairy of Snowfall": new Gear({
    id: 4007,
    name: 'Fairy of Snowfall',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Ice Mastery"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Chocobo Suit": new Gear({
    id: 4008,
    name: 'Chocobo Suit',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Garnet's Gown": new Gear({
    id: 4009,
    name: 'Garnet\'s Gown',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost HEAL"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Classic Coney": new Gear({
    id: 4010,
    name: 'Classic Coney',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Mag. Ability Pot."],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Kamura Dress": new Gear({
    id: 4011,
    name: 'Kamura Dress',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Citric Dress": new Gear({
    id: 4012,
    name: 'Citric Dress',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Magic Ward"],
      reinforcementAbilities["Magic Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Robe": new Gear({
    id: 4013,
    name: 'Bahamut Robe',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Bahamut's Protection"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Terra's Garb": new Gear({
    id: 4014,
    name: 'Terra\'s Garb',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Festive Crimson Attire": new Gear({
    id: 4015,
    name: 'Festive Crimson Attire',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["Reprieve"],
      reinforcementAbilities["New Year's Protection"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Loveless Songstress": new Gear({
    id: 4016,
    name: 'Loveless Songstress',
    character: characters[4],
    reinforcementAbilities: [
      reinforcementAbilities["ATB Boost"],
      reinforcementAbilities["Soothing Song"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Hojo's Specimen": new Gear({
    id: 5001,
    name: 'Hojo\'s Specimen',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Rubber Harness": new Gear({
    id: 5002,
    name: 'Rubber Harness',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Seaside Aloha": new Gear({
    id: 5005,
    name: 'Seaside Aloha',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PATK"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Canyon Duds": new Gear({
    id: 5003,
    name: 'Canyon Duds',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Debuff Extension (Stats/Pot./Res.) Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "The Hellhound": new Gear({
    id: 5006,
    name: 'The Hellhound',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Flamefrost Fangs"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Pilot's Jacket": new Gear({
    id: 5004,
    name: 'Pilot\'s Jacket',
    character: characters[5],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Amazing Materia Hunter": new Gear({
    id: 6001,
    name: 'Amazing Materia Hunter',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Puckish Lion": new Gear({
    id: 6003,
    name: 'Puckish Lion',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Winter Moogle": new Gear({
    id: 6005,
    name: 'Winter Moogle',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Sparkling Skater": new Gear({
    id: 6004,
    name: 'Sparkling Skater',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Windstrike Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Shinobi Hawk": new Gear({
    id: 6002,
    name: 'Shinobi Hawk',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Phys. Ability Pot."],
      reinforcementAbilities["Earthblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Summer Moogle": new Gear({
    id: 6008,
    name: 'Summer Moogle',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Sun's Favor"],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Bahamut Mantle": new Gear({
    id: 6009,
    name: 'Bahamut Mantle',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Bahamut's Bite"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Nanaki Mantle": new Gear({
    id: 6006,
    name: 'Nanaki Mantle',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Eerie Mask"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Holiday Cheer Reindeer": new Gear({
    id: 6010,
    name: 'Holiday Cheer Reindeer',
    character: characters[6],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Pot."],
      reinforcementAbilities["Windstrike Arcanum"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Self-Professed Fortune-Teller": new Gear({
    id: 7001,
    name: 'Self-Professed Fortune-Teller',
    character: characters[7],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Marching Jacket": new Gear({
    id: 7002,
    name: 'Marching Jacket',
    character: characters[7],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Party Jacket": new Gear({
    id: 7008,
    name: 'Party Jacket',
    character: characters[7],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Critical Pot. Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Felyne Kamura Garb": new Gear({
    id: 7009,
    name: 'Felyne Kamura Garb',
    character: characters[7],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Pumpkin Jacket": new Gear({
    id: 7006,
    name: 'Pumpkin Jacket',
    character: characters[7],
    reinforcementAbilities: [
      reinforcementAbilities["Eerie Mask"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Mournful Former Turk": new Gear({
    id: 8001,
    name: 'Mournful Former Turk',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Bouncer Suit": new Gear({
    id: 8002,
    name: 'Bouncer Suit',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Stray Dog": new Gear({
    id: 8003,
    name: 'Stray Dog',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Reprieve"],
      reinforcementAbilities["Earthblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Formal Attire": new Gear({
    id: 8005,
    name: 'Formal Attire',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Magic Ward"],
      reinforcementAbilities["Magic Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Crowmaster Suit": new Gear({
    id: 8006,
    name: 'Crowmaster Suit',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Eerie Mask"],
      reinforcementAbilities["Levinblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Holiday Formal Wear": new Gear({
    id: 8007,
    name: 'Holiday Formal Wear',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Pot."],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Devil Gunner's Coat": new Gear({
    id: 8004,
    name: 'Devil Gunner\'s Coat',
    character: characters[8],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Sky-Loving Pilot": new Gear({
    id: 9001,
    name: 'Sky-Loving Pilot',
    character: characters[9],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Flying Captain": new Gear({
    id: 9002,
    name: 'Flying Captain',
    character: characters[9],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Astronaut": new Gear({
    id: 9003,
    name: 'Astronaut',
    character: characters[9],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (All Allies)"],
      reinforcementAbilities["Cosmic Protection"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "SOLDIER: Second Class Future Hero": new Gear({
    id: 20001,
    name: 'SOLDIER: Second Class Future Hero',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Valiant Suit": new Gear({
    id: 20004,
    name: 'Valiant Suit',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Tropical Beach": new Gear({
    id: 20006,
    name: 'Tropical Beach',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Black Hound": new Gear({
    id: 20010,
    name: 'Black Hound',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PATK"]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Holiday Suit": new Gear({
    id: 20009,
    name: 'Holiday Suit',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Shinra Full Dress Uniform": new Gear({
    id: 20005,
    name: 'Shinra Full Dress Uniform',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Guardian Style": new Gear({
    id: 20011,
    name: 'Guardian Style',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Flameblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Glacier Armor": new Gear({
    id: 20008,
    name: 'Glacier Armor',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Zinogre Armor": new Gear({
    id: 20012,
    name: 'Zinogre Armor',
    character: characters[20],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Phys. Ability Pot."],
      reinforcementAbilities["Levinblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Shinra's Hero": new Gear({
    id: 49001,
    name: 'Shinra\'s Hero',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Aeroglider": new Gear({
    id: 49005,
    name: 'Aeroglider',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Edged Wings Training Garb": new Gear({
    id: 49002,
    name: 'Edged Wings Training Garb',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Dark Harbinger": new Gear({
    id: 49006,
    name: 'Dark Harbinger',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Wind Mastery"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Kuja's Attire": new Gear({
    id: 49008,
    name: 'Kuja\'s Attire',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Celebratory Garb": new Gear({
    id: 49007,
    name: 'Celebratory Garb',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Fire Mastery"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Lethal Style": new Gear({
    id: 49009,
    name: 'Lethal Style',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Magic Ability Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Shinra Formal Uniform": new Gear({
    id: 49004,
    name: 'Shinra Formal Uniform',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Wind Mastery"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Natant Jacket": new Gear({
    id: 49003,
    name: 'Natant Jacket',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Waterblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Dark Attire": new Gear({
    id: 49010,
    name: 'Dark Attire',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Magic Ward"],
      reinforcementAbilities["Earthblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Edgar's Attire": new Gear({
    id: 49011,
    name: 'Edgar\'s Attire',
    character: characters[49],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Waterblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Unprecedented P0 SOLDIER": new Gear({
    id: 50001,
    name: 'Unprecedented P0 SOLDIER',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Doom Dodger": new Gear({
    id: 50003,
    name: 'Doom Dodger',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Cake Breaker": new Gear({
    id: 50002,
    name: 'Cake Breaker',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Pumpkinmare": new Gear({
    id: 50006,
    name: 'Pumpkinmare',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PATK"]
    ],
    reinforcementAbilitiesPoints: [15, 15]
  }),
  "Vanguard Style": new Gear({
    id: 50007,
    name: 'Vanguard Style',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Waterblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Training Garb of Ruin": new Gear({
    id: 50005,
    name: 'Training Garb of Ruin',
    character: characters[50],
    reinforcementAbilities: [
      reinforcementAbilities["Beads of Protection"],
      reinforcementAbilities["Frostblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Intellectual P0 SOLDIER": new Gear({
    id: 51001,
    name: 'Intellectual P0 SOLDIER',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Professor": new Gear({
    id: 51005,
    name: 'Professor',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Elite Uniform": new Gear({
    id: 51002,
    name: 'Elite Uniform',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Killer Attire": new Gear({
    id: 51003,
    name: 'Killer Attire',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PATK"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Aidman's White Coat": new Gear({
    id: 51004,
    name: 'Aidman\'s White Coat',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost HEAL"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Holiday Helper": new Gear({
    id: 51007,
    name: 'Holiday Helper',
    character: characters[51],
    reinforcementAbilities: [
      reinforcementAbilities["Physical & Magic Ward"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Disciplined P0 SOLDIER": new Gear({
    id: 52001,
    name: 'Disciplined P0 SOLDIER',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Marksqueen": new Gear({
    id: 52005,
    name: 'Marksqueen',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Black Stealth": new Gear({
    id: 52002,
    name: 'Black Stealth',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Vivi's Garb": new Gear({
    id: 52007,
    name: 'Vivi\'s Garb',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Holiday Coat": new Gear({
    id: 52006,
    name: 'Holiday Coat',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Earthblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Gothic Bunny": new Gear({
    id: 52008,
    name: 'Gothic Bunny',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Flamefrost Rabbit Ears"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Beach Agent": new Gear({
    id: 52009,
    name: 'Beach Agent',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Sun's Favor"],
      reinforcementAbilities["Buff/Debuff Extension+ (Stats/Pot./Res.)"]
    ],
    reinforcementAbilitiesPoints: [10, 10]
  }),
  "Entrapment Gown": new Gear({
    id: 52004,
    name: 'Entrapment Gown',
    character: characters[52],
    reinforcementAbilities: [
      reinforcementAbilities["Boost Poison Resist."],
      reinforcementAbilities["Alluring Ploy"]
    ],
    reinforcementAbilitiesPoints: [15, 10]
  }),
  "Genial SOLDIER: Second Class": new Gear({
    id: 56001,
    name: 'Genial SOLDIER: Second Class',
    character: characters[56],
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ],
    reinforcementAbilitiesPoints: [4, 4]
  }),
  "Shinra Expedition Wear": new Gear({
    id: 56002,
    name: 'Shinra Expedition Wear',
    character: characters[56],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  }),
  "Honorable Training Garb": new Gear({
    id: 56003,
    name: 'Honorable Training Garb',
    character: characters[56],
    reinforcementAbilities: [
      reinforcementAbilities["Boost DEF (All Allies)"],
      reinforcementAbilities["Waterblade Arcanum"]
    ],
    reinforcementAbilitiesPoints: [5, 10]
  }),
  "Cyan's Attire": new Gear({
    id: 56004,
    name: 'Cyan\'s Attire',
    character: characters[56],
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ],
    reinforcementAbilitiesPoints: [8, 8]
  })
};
