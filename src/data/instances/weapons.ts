import { CommandAbility } from '../classes/CommandAbility.ts';
import { UltimateCommandAbility } from '../classes/UltimateCommandAbility.ts';
import { UltimateWeapon } from '../classes/UltimateWeapon.ts';
import { Weapon } from '../classes/Weapon.ts';
import { characters } from './characters.ts';
import { reinforcementAbilities } from './reinforcementAbilities.ts';

export const weapons: { [key: string]: Weapon | UltimateWeapon } = {
  "Buster Sword": new Weapon({
    id: 1001,
    name: 'Buster Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100101,
      name: 'Braver',
      atbCost: 4,
      sigil: 'cross',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, When matching sigils are destroyed, x1.5 damage.`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 220,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost ATK"]
    ]
  }),
  "Iron Blade": new Weapon({
    id: 1002,
    name: 'Iron Blade',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100201,
      name: 'Blast Wave',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['220', '250', '250', '250', '250', '250', '310', '310', '310', '310', '350'],
        pAtkDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 210,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Hardedge": new Weapon({
    id: 1003,
    name: 'Hardedge',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100301,
      name: 'Armor Break',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 220,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Resist."]
    ]
  }),
  "Mythril Saber": new Weapon({
    id: 1004,
    name: 'Mythril Saber',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100401,
      name: 'Blade Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 252,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Butterfly Edge": new Weapon({
    id: 1006,
    name: 'Butterfly Edge',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100601,
      name: 'Stalwart Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 210,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Murasame": new Weapon({
    id: 1007,
    name: 'Murasame',
    character: characters[1],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10100701,
      name: 'Thunderstrike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 278,
      mAtk: 205,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Organics": new Weapon({
    id: 1008,
    name: 'Organics',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100801,
      name: 'Shock Slice',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${apply('Ailment: Stun', null, 'Single Enemy', undefined, 5, 2)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750'],
        stunRate: ['20', '20', '20', '20', '20', '20', '30', '30', '30', '30', '30']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 212,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Crystal Sword": new Weapon({
    id: 1009,
    name: 'Crystal Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100901,
      name: 'Healing Wave',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        heal: ['50', '60', '60', '60', '60', '60', '65', '65', '65', '65', '71']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 207,
      heal: 213
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Earth Resist."]
    ]
  }),
  "Enhance Sword": new Weapon({
    id: 1012,
    name: 'Enhance Sword',
    character: characters[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10101201,
      name: 'Blizzaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 262,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Nail Bat": new Weapon({
    id: 1013,
    name: 'Nail Bat',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10101301,
      name: 'Disorder',
      atbCost: 5,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nNo boosts to limit and summon gauges when using this ability.`,
      valuesByOverboostLevel: {
        damage: ['850', '1,020', '1,020', '1,020', '1,020', '1,020', '1,320', '1,320', '1,320', '1,320', '1,600']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 199,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Resist."],
      reinforcementAbilities["ATB Boost"]
    ]
  }),
  "Apocalypse": new Weapon({
    id: 1015,
    name: 'Apocalypse',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10101501,
      name: 'Bloody End',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 212,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Maritime Sword": new Weapon({
    id: 1020,
    name: 'Maritime Sword',
    character: characters[1],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10102001,
      name: 'Seasplitter',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 215,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Shiva's Blade": new Weapon({
    id: 1024,
    name: 'Shiva\'s Blade',
    character: characters[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10102401,
      name: 'Blizzara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 233,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Bandaged Sword": new Weapon({
    id: 1025,
    name: 'Bandaged Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10102501,
      name: 'Sanctuary',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['4', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 218,
      mAtk: 252,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Skysplitter": new Weapon({
    id: 1028,
    name: 'Skysplitter',
    character: characters[1],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10102801,
      name: 'Blazing Strike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '710', '710', '710', '710', '850']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 281,
      mAtk: 205,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Zidane's Sword": new Weapon({
    id: 1029,
    name: 'Zidane\'s Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10102901,
      name: 'Free Energy',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['650', '', '', '', '', '', '1,140', '1,140', '1,140', '1,140', '1,300']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 218,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Holiday Cheer": new Weapon({
    id: 1030,
    name: 'Holiday Cheer',
    character: characters[1],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10103001,
      name: 'Quakera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 214,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Stream Saber": new Weapon({
    id: 1031,
    name: 'Stream Saber',
    character: characters[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10103101,
      name: 'Freezing Stream',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '740', '740', '740', '740', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 204,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK (All Allies)"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Igneous Saber": new Weapon({
    id: 1032,
    name: 'Igneous Saber',
    character: characters[1],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10103201,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 218,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Glavenus Sword": new Weapon({
    id: 1033,
    name: 'Glavenus Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10103301,
      name: 'Fierce Charged Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('PATK', undefined, 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['530', '610', '610', '610', '610', '610', '740', '740', '740', '740', '850'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        pAtkIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        pAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 288,
      mAtk: 220,
      heal: 151
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Rune Blade": new Weapon({
    id: 1034,
    name: 'Rune Blade',
    character: characters[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10103401,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 220,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Burning Oar": new Weapon({
    id: 1035,
    name: 'Burning Oar',
    character: characters[1],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10103501,
      name: 'Fira Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 204,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Bahamut Greatsword": new Weapon({
    id: 1036,
    name: 'Bahamut Greatsword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10103601,
      name: 'Fierce Claw',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, [Condition: First use] ${apply('Haste', null, 'Self', null, undefined, undefined)}\n${conditionHP('Self', '50', 'more')}, ${additionalDamage('Non-elem.', 'Phys.', 'All Enemies')}`,
      valuesByOverboostLevel: {
        damage: ['430', '520', '520', '520', '520', '520', '670', '670', '670', '670', '800'],
        hasteDur: ['20', '20', '20', '20', '20', '20', '25', '25', '25', '25', '30'],
        hasteExt: ['6', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        additionalDamage: ['10000', '20000', '20000', '20000', '20000', '20000', '30000', '30000', '30000', '30000', '40000']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 291,
      mAtk: 218,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK (All Allies)"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Ultimate Buster Sword": new UltimateWeapon({
    id: 1037,
    name: 'Ultimate Buster Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Braver',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${decrease('PATK', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${decrease('MATK', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 172,
      mAtk: 172,
      heal: 129
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Locke's Sword": new Weapon({
    id: 1038,
    name: 'Locke\'s Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10103801,
      name: 'Slashing Rush',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('Fire Damage', 'Mid', 'Self', null, undefined, undefined, undefined)}\n${increase('Ice Damage', 'Mid', 'Self', null, undefined, undefined, undefined)}\n${increase('Lightning Damage', 'Mid', 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['630', '', '', '', '', '', '880', '880', '880', '880', '1,010'],
        fireDamageIncreaseDur: ['30', '', '', '', '', '', '45', '45', '45', '45', '55'],
        fireDamageIncreaseExt: ['6', '', '', '', '', '', '9', '9', '9', '9', '11'],
        fireDamageIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        iceDamageIncreaseDur: ['30', '', '', '', '', '', '45', '45', '45', '45', '55'],
        iceDamageIncreaseExt: ['6', '', '', '', '', '', '9', '9', '9', '9', '11'],
        iceDamageIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        lightningDamageIncreaseDur: ['30', '', '', '', '', '', '45', '45', '45', '45', '55'],
        lightningDamageIncreaseExt: ['6', '', '', '', '', '', '9', '9', '9', '9', '11'],
        lightningDamageIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 285,
      mAtk: 225,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Holiday Blade": new Weapon({
    id: 1039,
    name: 'Holiday Blade',
    character: characters[1],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10103901,
      name: 'Twister Blade',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 289,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Chocobo Paddle": new Weapon({
    id: 1040,
    name: 'Chocobo Paddle',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10104001,
      name: 'Defira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        fireResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        fireResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 218,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Sleek Saber": new Weapon({
    id: 1042,
    name: 'Sleek Saber',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10104201,
      name: 'Armora Breach Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PDEF', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        pDefDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        pDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 218,
      mAtk: 218,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Mystic Sword": new Weapon({
    id: 1022,
    name: 'Mystic Sword',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10102201,
      name: 'Forcestream',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', undefined, 'Single Enemy', null, undefined, undefined, undefined)}\n${conditionHP('Self', '70', 'more')}, ${decrease('PATK', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        mAtkDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        mAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        pAtkDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 228,
      mAtk: 277,
      heal: 153
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Umbral Blade": new Weapon({
    id: 1046,
    name: 'Umbral Blade',
    character: characters[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10104601,
      name: 'Scratch',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${additionalDamage('Non-elem.', 'Phys.', 'All Enemies')}`,
      valuesByOverboostLevel: {
        damage: ['310', '360', '360', '360', '360', '360', '420', '420', '420', '420', '430'],
        additionalDamage: ['5000', '6000', '6000', '6000', '6000', '6000', '8000', '8000', '8000', '8000', '10000']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 239,
      mAtk: 201,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Gatling Gun": new Weapon({
    id: 2001,
    name: 'Gatling Gun',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10200101,
      name: 'Blitz Beat',
      atbCost: 4,
      sigil: 'cross',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 218,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Water Resist."]
    ]
  }),
  "Assault Gun": new Weapon({
    id: 2002,
    name: 'Assault Gun',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10200201,
      name: 'Agitation',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Phys.', 'All Allies')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        pDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['4', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 210,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Heavy Vulcan": new Weapon({
    id: 2007,
    name: 'Heavy Vulcan',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10200701,
      name: 'Stalwart Manaward',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 194,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Microlaser": new Weapon({
    id: 2008,
    name: 'Microlaser',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202601,
      name: 'Stalwart Faith',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 249,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "W Machine": new Weapon({
    id: 2010,
    name: 'W Machine',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201001,
      name: 'Quick Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 214,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Solid Bazooka": new Weapon({
    id: 2011,
    name: 'Solid Bazooka',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201101,
      name: 'Doom Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 210,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Enemy Launcher": new Weapon({
    id: 2012,
    name: 'Enemy Launcher',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201201,
      name: 'Chain Bomber',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}`,
      valuesByOverboostLevel: {
        damage: ['350', '420', '420', '420', '420', '420', '550', '550', '550', '550', '650']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 267,
      mAtk: 212,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Max Ray": new Weapon({
    id: 2013,
    name: 'Max Ray',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201301,
      name: 'Energy Laser',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 252,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Flame Projector": new Weapon({
    id: 2015,
    name: 'Flame Projector',
    character: characters[2],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10201501,
      name: 'Firaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 243,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Heavy Hauser": new Weapon({
    id: 2018,
    name: 'Heavy Hauser',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201801,
      name: 'Pyroball',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 214,
      heal: 185
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Lefko Kypseli": new Weapon({
    id: 2019,
    name: 'Lefko Kypseli',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201901,
      name: 'Solid Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        pDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 205,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Rocket Punch": new Weapon({
    id: 2020,
    name: 'Rocket Punch',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202001,
      name: 'Jet Fists',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)} The lower your HP, the higher the ability pot. (max: x3).`,
      valuesByOverboostLevel: {
        damage: ['270', '320', '320', '320', '320', '320', '420', '420', '420', '420', '500']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 191,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Earth Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Shiva Cannon": new Weapon({
    id: 2022,
    name: 'Shiva Cannon',
    character: characters[2],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10202201,
      name: 'Blizzara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 222,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Resist."],
      reinforcementAbilities["Boost ATK"]
    ]
  }),
  "Hell House Cannon": new Weapon({
    id: 2024,
    name: 'Hell House Cannon',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202401,
      name: 'Manara Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 214,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Siege Cannon": new Weapon({
    id: 2025,
    name: 'Siege Cannon',
    character: characters[2],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10202501,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 215,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Electrocannon": new Weapon({
    id: 2017,
    name: 'Electrocannon',
    character: characters[2],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10201701,
      name: 'Energization',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}\nAlso, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('MATK', 'Mid', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 277,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Leviathan Buster": new Weapon({
    id: 2027,
    name: 'Leviathan Buster',
    character: characters[2],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10202701,
      name: 'Watera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 226,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Lightning Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Sharkslayer": new Weapon({
    id: 2021,
    name: 'Sharkslayer',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202101,
      name: 'Dorsal Fin Shot',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        fireResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        waterResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        waterResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 235,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Ultimate Gatling Gun": new UltimateWeapon({
    id: 2031,
    name: 'Ultimate Gatling Gun',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Agitation',
      sigil: null,
      description: `${increase('PDEF', 'High', 'All Allies', null, 20, 20, 'High')}\nAlso, ${heal(5, 'Phys.', 'All Allies')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 169,
      mAtk: 175,
      heal: 130
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Rhad Cannon": new Weapon({
    id: 2029,
    name: 'Rhad Cannon',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202901,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '36', '36', '36', '36', '36', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '12', '12', '12', '12', '12', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 218,
      mAtk: 199,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Escutcheon Cannon": new Weapon({
    id: 2032,
    name: 'Escutcheon Cannon',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10203201,
      name: 'Zone of Protection',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${conditionHP('Self', '70', 'more')}, ${increase('MATK', undefined, 'All Allies', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        mDefIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        mAtkIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 254,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Missing Score": new UltimateWeapon({
    id: 2036,
    name: 'Missing Score',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Guardian Aura',
      sigil: null,
      description: `${increase('Physical Resistance', '+50%', 'All Allies', null, 15, 0, null)}\nAlso, ${increase('Magic Resistance', '+50%', 'All Allies', null, 15, 0, null)}\n${heal(5, 'Mag.', 'All Allies')}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 196,
      mAtk: 191,
      heal: 136
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Enhanced Interruption (Veil)"]
    ]
  }),
  "Fafnir Rifle": new Weapon({
    id: 2035,
    name: 'Fafnir Rifle',
    character: characters[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10203501,
      name: 'Dragon\'s Roar',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${apply('Provoke', null, 'Self', null, 60, 0)}\n${apply('Veil', undefined, 'Self', null, undefined, undefined)}\n${conditionHP('Self', '70', 'more')}, ${increase('PDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        veilPot: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        veilDur: ['40', '45', '45', '45', '45', '45', '50', '50', '50', '50', '60'],
        veilExt: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '12'],
        pDefIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        pDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 233,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Leather Gloves": new Weapon({
    id: 3001,
    name: 'Leather Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10300601,
      name: 'Omnistrike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 236,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Grand Gloves": new Weapon({
    id: 3005,
    name: 'Grand Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10300501,
      name: 'Vigor',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Phys.', 'Self')}\nAlso, ${remove('Ailment: Poison, Ailment: Silence', 'Self')}`,
      valuesByOverboostLevel: {
        heal: ['93', '112', '112', '112', '112', '112', '121', '121', '121', '121', '130']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 214,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Sonic Striker": new Weapon({
    id: 3006,
    name: 'Sonic Striker',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10300101,
      name: 'Divekick',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['530', '640', '640', '640', '640', '640', '830', '830', '830', '830', '990']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 256,
      mAtk: 220,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Water Resist."]
    ]
  }),
  "Tiger Fangs": new Weapon({
    id: 3007,
    name: 'Tiger Fangs',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10300701,
      name: 'Uppershot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 215,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Crystal Gloves": new Weapon({
    id: 3010,
    name: 'Crystal Gloves',
    character: characters[3],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10301001,
      name: 'Thundaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '320', '320', '320', '320', '320', '420', '420', '420', '420', '500']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 256,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Motor Drive": new Weapon({
    id: 3011,
    name: 'Motor Drive',
    character: characters[3],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10301101,
      name: 'Sonic Spiral',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['420', '500', '500', '500', '500', '500', '660', '660', '660', '660', '790']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 222,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Kaiser Knuckles": new Weapon({
    id: 3013,
    name: 'Kaiser Knuckles',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10301301,
      name: 'Chi Trap',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['300', '350', '350', '350', '350', '350', '420', '420', '420', '420', '480'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 273,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Work Gloves": new Weapon({
    id: 3014,
    name: 'Work Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10301401,
      name: 'Wall of Will',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Self', null, undefined, undefined, 'High')}\nAlso, ${increase('PATK', undefined, 'Self', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'Self')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['25', '30', '30', '30', '30', '30', '30', '30', '30', '30', '35'],
        pDefIncreaseExt: ['8', '10', '10', '10', '10', '10', '10', '10', '10', '10', '11'],
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['25', '30', '30', '30', '30', '30', '30', '30', '30', '30', '35'],
        pAtkIncreaseExt: ['8', '10', '10', '10', '10', '10', '10', '10', '10', '10', '11'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 197,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["ATB Boost"]
    ]
  }),
  "Powersoul": new Weapon({
    id: 3015,
    name: 'Powersoul',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10301501,
      name: 'Savage Blast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '750', '750', '750', '750', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 228,
      mAtk: 267,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Lifeguard Wraps": new Weapon({
    id: 3019,
    name: 'Lifeguard Wraps',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10301901,
      name: 'Healing Waves',
      atbCost: 4,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        heal: ['38', '46', '46', '46', '46', '46', '49', '49', '49', '49', '54']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 231,
      heal: 198
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "Feathered Gloves": new Weapon({
    id: 3020,
    name: 'Feathered Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10302001,
      name: 'Featherstrike',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng: Self]'s HP is 50% or more, ${increase('Water Damage', undefined, 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        mDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        mDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        waterDamageIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterDamageIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        waterDamageIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        waterDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 262,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Bahamut Knuckles": new Weapon({
    id: 3024,
    name: 'Bahamut Knuckles',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10302401,
      name: 'Ruinra Surge',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 225,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Holy Flame Gloves": new Weapon({
    id: 3025,
    name: 'Holy Flame Gloves',
    character: characters[3],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10302501,
      name: 'Freezing Blow',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 278,
      mAtk: 201,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Amarant's Claws": new Weapon({
    id: 3027,
    name: 'Amarant\'s Claws',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10302701,
      name: 'No Mercy',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('PATK', undefined, 'Self', null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('MATK', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['360', '', '', '', '', '', '630', '630', '630', '630', '720'],
        pAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['25', '', '', '', '', '', '36', '36', '36', '36', '40'],
        pAtkIncreaseExt: ['5', '', '', '', '', '', '7', '7', '7', '7', '8'],
        pAtkIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        mAtkDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        mAtkDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 220,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Bunny Gloves": new Weapon({
    id: 3028,
    name: 'Bunny Gloves',
    character: characters[3],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10302801,
      name: 'Aqua Splash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${increase('MATK', 'Low', 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '710', '710', '710', '710', '850'],
        mAtkIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        mAtkIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 281,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Oven Mitts": new Weapon({
    id: 3029,
    name: 'Oven Mitts',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10302901,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '36', '36', '36', '36', '36', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '12', '12', '12', '12', '12', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 212,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Turks' Gloves": new Weapon({
    id: 3030,
    name: 'Turks\' Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303001,
      name: 'Armora Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 207,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Guide Gloves": new Weapon({
    id: 3031,
    name: 'Guide Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303101,
      name: 'Zangan Fist',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['650', '780', '780', '780', '780', '780', '1,140', '1,140', '1,140', '1,140', '1,300']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 214,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Kirin Gloves": new Weapon({
    id: 3032,
    name: 'Kirin Gloves',
    character: characters[3],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10303201,
      name: 'Spiral Levin Strike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${increase('MATK', undefined, 'Self', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        mAtkIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mAtkIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        mAtkIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 283,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Shell Knuckles": new Weapon({
    id: 3033,
    name: 'Shell Knuckles',
    character: characters[3],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10303301,
      name: 'Spinning Fervor',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '70', 'more')}, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '810', '810', '810', '810', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 275,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Steward Gloves": new Weapon({
    id: 3034,
    name: 'Steward Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303401,
      name: 'Debravera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 218,
      mAtk: 222,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Bahamut Fangs": new Weapon({
    id: 3035,
    name: 'Bahamut Fangs',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303501,
      name: 'Dark Strike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, [Condition: First use] ${apply('Haste', null, 'Self', null, undefined, undefined)}\n${increase('MATK', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['600', '720', '720', '720', '720', '720', '1,000', '1,000', '1,000', '1,000', '1,100'],
        hasteDur: ['20', '20', '20', '20', '20', '20', '25', '25', '25', '25', '30'],
        hasteExt: ['6', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        mAtkIncreaseDur: ['15', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        mAtkIncreaseExt: ['5', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 291,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Ultimate Leather Gloves": new UltimateWeapon({
    id: 3037,
    name: 'Ultimate Leather Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Tornado Shot',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${increase('PATK', 'Mid', 'All Allies', null, 30, 30, 'Mid')}\n${increase('MATK', 'Mid', 'All Allies', null, 30, 30, 'Mid')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 179,
      mAtk: 175,
      heal: 122
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Black Cat's Paws": new Weapon({
    id: 3036,
    name: 'Black Cat\'s Paws',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303601,
      name: 'Thundara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['220', '230', '230', '230', '230', '230', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 226,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Sabin's Claws": new Weapon({
    id: 3038,
    name: 'Sabin\'s Claws',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303801,
      name: 'Aura Cannon',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${increase('PATK', 'Low', 'Self', null, undefined, undefined, undefined)}\n${increase('MATK', 'Low', 'Self', null, undefined, undefined, undefined)}\n${conditionHP('Self', '50', 'more')}, ${additionalDamage('Non-elem.', 'Phys.', 'All Enemies')}`,
      valuesByOverboostLevel: {
        damage: ['430', '', '', '', '', '', '670', '670', '670', '670', '800'],
        pAtkIncreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '30'],
        pAtkIncreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        pAtkIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '30'],
        mAtkIncreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        mAtkIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        additionalDamage: ['10000', '', '', '', '', '', '30000', '30000', '30000', '30000', '40000']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 281,
      mAtk: 212,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Blue Daffodil Gloves": new Weapon({
    id: 3039,
    name: 'Blue Daffodil Gloves',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10303901,
      name: 'Blue Florescent Fury',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${exploitWeakness('Self', undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['600', '720', '720', '720', '720', '720', '1,000', '1,000', '1,000', '1,000', '1,100'],
        exploitWeaknessPot: ['25', '25', '25', '25', '25', '25', '40', '40', '40', '40', '40'],
        exploitWeaknessDur: ['45', '50', '50', '50', '50', '50', '50', '50', '50', '50', '70'],
        exploitWeaknessExt: ['9', '10', '10', '10', '10', '10', '10', '10', '10', '10', '14']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 241,
      heal: 137
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Premium Heart": new UltimateWeapon({
    id: 3040,
    name: 'Premium Heart',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ravaging Axe Kick',
      sigil: null,
      description: `${damage('2,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${apply('Haste', null, 'Self', null, 30, 30)}\n${chargeAndUses(50, 15, 3)}`
    }),
    maxRarityStats: {
      pAtk: 205,
      mAtk: 198,
      heal: 123
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Attack Boost"]
    ]
  }),
  "Járngreipr": new Weapon({
    id: 3043,
    name: 'Járngreipr',
    character: characters[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Armora Breach Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PDEF', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        pDefDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        pDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8'],
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 220,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Guard Stick": new Weapon({
    id: 4001,
    name: 'Guard Stick',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10400101,
      name: 'Stalwart Manaward',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        heal: ['10', '13', '13', '13', '13', '13', '13', '13', '13', '13', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 241,
      heal: 206
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Silver Staff": new Weapon({
    id: 4002,
    name: 'Silver Staff',
    character: characters[4],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10400201,
      name: 'Blizzaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 273,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Striking Staff": new Weapon({
    id: 4003,
    name: 'Striking Staff',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10400301,
      name: 'Tempest Force',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '750', '750', '750', '750', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 246,
      mAtk: 215,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Mythril Rod": new Weapon({
    id: 4004,
    name: 'Mythril Rod',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10400401,
      name: 'Saving Grace',
      atbCost: 5,
      sigil: null,
      description: `${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\nAlso, ${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        pDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        mDefIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['7', '8', '8', '8', '8', '8', '9', '9', '9', '9', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 231,
      heal: 220
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Full Metal Staff": new Weapon({
    id: 4005,
    name: 'Full Metal Staff',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10400501,
      name: 'Heavenly Spike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '290', '290', '290', '290', '340'],
        pAtkDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 212,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Prism Rod": new Weapon({
    id: 4007,
    name: 'Prism Rod',
    character: characters[4],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10401201,
      name: 'Raging Sphere',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 268,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Fairy Tale": new Weapon({
    id: 4008,
    name: 'Fairy Tale',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10400801,
      name: 'Curaga A',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        heal: ['53', '63', '63', '63', '63', '63', '69', '69', '69', '69', '74']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 220,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Earth Resist."]
    ]
  }),
  "Wizard Staff": new Weapon({
    id: 4009,
    name: 'Wizard Staff',
    character: characters[4],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10401001,
      name: 'Thundaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 256,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Wizer Staff": new Weapon({
    id: 4010,
    name: 'Wizer Staff',
    character: characters[4],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10400901,
      name: 'Quaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 262,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Sun Umbrella": new Weapon({
    id: 4014,
    name: 'Sun Umbrella',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10401401,
      name: 'Nightbloom',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}\n${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pDefDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        mDefDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 257,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Floral Wand": new Weapon({
    id: 4015,
    name: 'Floral Wand',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10401501,
      name: 'Floral Flare',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Wind Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        pDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        pDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        windResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'High', 'High', 'High', 'High', 'High'],
        windResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        windResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        windResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 186,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Umbrella": new Weapon({
    id: 4016,
    name: 'Umbrella',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10401601,
      name: 'Cleansing Rain',
      atbCost: 4,
      sigil: null,
      description: `${remove('Phys. Attack Down, Mag. Attack Down', 'Single Ally')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        heal: ['77', '92', '92', '92', '92', '92', '100', '100', '100', '100', '108']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 199,
      heal: 196
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Lightning Resist."],
      reinforcementAbilities["Boost MDEF (All Allies)"]
    ]
  }),
  "Chocobo Staff": new Weapon({
    id: 4019,
    name: 'Chocobo Staff',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10401901,
      name: 'Solid Manaward',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 184,
      mAtk: 186,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Snowflake": new Weapon({
    id: 4020,
    name: 'Snowflake',
    character: characters[4],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10402001,
      name: 'Snowspell',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}\nAlso, ${decrease('MDEF', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 264,
      heal: 192
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Ramuh's Staff": new Weapon({
    id: 4021,
    name: 'Ramuh\'s Staff',
    character: characters[4],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10402101,
      name: 'Thundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '460', '460', '460', '460', '480']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 226,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Water Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Garnet's Rod": new Weapon({
    id: 4022,
    name: 'Garnet\'s Rod',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402201,
      name: 'Healing Pulse',
      atbCost: 3,
      sigil: null,
      description: `${increase('MATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['30', '', '', '', '', '', '34', '34', '34', '34', '38'],
        mAtkIncreaseExt: ['10', '', '', '', '', '', '11', '11', '11', '11', '12'],
        regenDur: ['9', '', '', '', '', '', '12', '12', '12', '12', '15'],
        heal: ['9', '', '', '', '', '', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 233,
      heal: 219
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Egg Staff": new Weapon({
    id: 4023,
    name: 'Egg Staff',
    character: characters[4],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10402301,
      name: 'Helical Flame',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}\nAlso, against a single target, x1.3 damage.`,
      valuesByOverboostLevel: {
        damage: ['340', '410', '410', '410', '410', '410', '530', '530', '530', '530', '630']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 278,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Dawn's Prayers": new Weapon({
    id: 4024,
    name: 'Dawn\'s Prayers',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402401,
      name: 'Armora Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 212,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Kamura Wand": new Weapon({
    id: 4025,
    name: 'Kamura Wand',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402501,
      name: 'Spiritual Harmony',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${conditionHP('Self', '70', 'more')}, ${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        pAtkIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        mDefIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        mDefIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        heal: ['5', '', '', '', '', '', '7', '7', '7', '7', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 204,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Radrod": new Weapon({
    id: 4026,
    name: 'Radrod',
    character: characters[4],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10402601,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 222,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Hell House Rod": new Weapon({
    id: 4027,
    name: 'Hell House Rod',
    character: characters[4],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10402701,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 226,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Citric Wand": new Weapon({
    id: 4028,
    name: 'Citric Wand',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402801,
      name: 'Fruitful Energy',
      atbCost: 3,
      sigil: null,
      description: `${increase('Ice Damage', undefined, 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('MATK', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        iceDamageIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceDamageIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        iceDamageIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        iceDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['7', '8', '8', '8', '8', '8', '9', '9', '9', '9', '9'],
        mAtkIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        mAtkIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 243,
      heal: 208
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Bahamut Rod": new Weapon({
    id: 4029,
    name: 'Bahamut Rod',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402901,
      name: 'Blessed Aura',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\n${conditionHP('Self', undefined, 'less')}, ${increaseATBGauge(1, 'Ally (Excluding Self)')}`,
      valuesByOverboostLevel: {
        heal: ['42', '50', '50', '50', '50', '50', '54', '54', '54', '54', '59'],
        pDefIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pDefIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5'],
        conditionHPThreshold: ['40', '50', '50', '50', '50', '50', '70', '70', '70', '70', '90']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 212,
      heal: 237
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Boost HEAL"]
    ]
  }),
  "Ultimate Guard Stick": new UltimateWeapon({
    id: 4030,
    name: 'Ultimate Guard Stick',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Fos Temenos',
      sigil: null,
      description: `${heal(50, 'Mag.', 'All Allies')}\nAlso, ${regen('All Allies', 3, 3)}\n${remove('Phys. Attack Down, Mag. Attack Down', 'All Allies')}\n${chargeAndUses(40, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 154,
      mAtk: 157,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Terra's Rod": new Weapon({
    id: 4031,
    name: 'Terra\'s Rod',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10403101,
      name: 'Riot Blade',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}\n${decrease('Ice Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}\n${decrease('Thunder Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['470', '540', '540', '540', '540', '540', '660', '660', '660', '660', '750'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '35'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '11'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '35'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '11'],
        lightningResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '35'],
        lightningResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '11']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 186,
      mAtk: 275,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Princess Guard": new UltimateWeapon({
    id: 4036,
    name: 'Princess Guard',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Jubilation',
      sigil: null,
      description: `${restoreMaxHP(30, 'Mag.', 'All Allies')}\nAlso, ${increaseATBGauge(3, 'All Allies')}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 169,
      mAtk: 161,
      heal: 183
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Regen Boost"]
    ]
  }),
  "Titan Rod": new Weapon({
    id: 4032,
    name: 'Titan Rod',
    character: characters[4],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10403201,
      name: 'Quakera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 222,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Crimson Staff": new Weapon({
    id: 4033,
    name: 'Crimson Staff',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10403301,
      name: 'Crimson Florescence',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${increase('MATK', undefined, 'All Allies', null, undefined, undefined, undefined)}\n${conditionHP('Self', '70', 'more')}, ${decrease('MDEF', undefined, 'All Enemies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['470', '540', '540', '540', '540', '540', '660', '660', '660', '660', '750'],
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        mAtkIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '35'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '11'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 281,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Gambanteinn": new Weapon({
    id: 4034,
    name: 'Gambanteinn',
    character: characters[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10403401,
      name: 'Paeon',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${increase('PATK', undefined, 'All Allies', null, undefined, undefined, undefined)}\n${conditionHP('Self', undefined, 'less')}, ${increaseATBGauge(1, 'Ally (Excluding Self)')}`,
      valuesByOverboostLevel: {
        heal: ['42', '50', '50', '50', '50', '50', '54', '54', '54', '54', '59'],
        pAtkIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkIncreaseDur: ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '16'],
        pAtkIncreaseExt: ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5'],
        pAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        conditionHPThreshold: ['40', '50', '50', '50', '50', '50', '70', '70', '70', '70', '90']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 214,
      heal: 234
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Sleek Collar": new Weapon({
    id: 5001,
    name: 'Sleek Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10500101,
      name: 'Manaward A',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['4', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 252,
      heal: 198
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Wind Resist."]
    ]
  }),
  "Gold Collar": new Weapon({
    id: 5005,
    name: 'Gold Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10500901,
      name: 'Eternal Storm',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('MDEF', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['220', '250', '250', '250', '250', '250', '310', '310', '310', '310', '350'],
        mDefDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 222,
      heal: 220
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Resist."]
    ]
  }),
  "Platinum Collar": new Weapon({
    id: 5009,
    name: 'Platinum Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10500501,
      name: 'Therapeutic Touch',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${regen('All Allies', undefined, undefined)}`,
      valuesByOverboostLevel: {
        heal: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '11'],
        regenDur: ['9', '12', '12', '12', '12', '12', '15', '15', '15', '15', '18'],
        regenExt: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 283,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Noble Collar": new Weapon({
    id: 5016,
    name: 'Noble Collar',
    character: characters[5],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10501601,
      name: 'Waterga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 268,
      heal: 192
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Rage Collar": new Weapon({
    id: 5018,
    name: 'Rage Collar',
    character: characters[5],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10501801,
      name: 'Blaze Rush',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 257,
      heal: 195
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Leather Collar": new Weapon({
    id: 5019,
    name: 'Leather Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10501901,
      name: 'Sonic Fangs',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 222,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Rubber Collar": new Weapon({
    id: 5020,
    name: 'Rubber Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502001,
      name: 'Mystic Flow',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        heal: ['81', '97', '97', '97', '97', '97', '105', '105', '105', '105', '113']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 225,
      heal: 223
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Junk Collar": new Weapon({
    id: 5021,
    name: 'Junk Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502101,
      name: 'Frenzied Fang',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 246,
      mAtk: 225,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "Canyon Collar": new Weapon({
    id: 5023,
    name: 'Canyon Collar',
    character: characters[5],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10502301,
      name: 'Canyon Gale',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('MDEF', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['270', '320', '320', '320', '320', '320', '420', '420', '420', '420', '500'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 281,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Iron Collar": new Weapon({
    id: 5026,
    name: 'Iron Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502601,
      name: 'Spiral Swing',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 215,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Headphones": new Weapon({
    id: 5027,
    name: 'Headphones',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502701,
      name: 'Wild Howling',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${remove('Mag. Defense Up', 'All Enemies')}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 241,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost MDEF (All Allies)"]
    ]
  }),
  "Seaside Collar": new Weapon({
    id: 5028,
    name: 'Seaside Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502801,
      name: 'Power Fang',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${regen('Self', 3, 3)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        lightningResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['15', '18', '18', '18', '18', '18', '18', '18', '18', '18', '21'],
        lightningResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 246,
      mAtk: 226,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Hell House Collar": new Weapon({
    id: 5031,
    name: 'Hell House Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10503101,
      name: 'Manara Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 220,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Flame Dragon's Band": new Weapon({
    id: 5032,
    name: 'Flame Dragon\'s Band',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10503201,
      name: 'Defira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        fireResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 235,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Egg Collar": new Weapon({
    id: 5033,
    name: 'Egg Collar',
    character: characters[5],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10503301,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 218,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Ivy Collar": new Weapon({
    id: 5017,
    name: 'Ivy Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10501701,
      name: 'Growing Ivy',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        fireResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        iceResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 243,
      mAtk: 235,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Amethyst Collar": new Weapon({
    id: 5034,
    name: 'Amethyst Collar',
    character: characters[5],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10503401,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 222,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Silver Collar": new Weapon({
    id: 5004,
    name: 'Silver Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10500401,
      name: 'Rolling Claw',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Wind Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['200', '230', '230', '230', '230', '230', '280', '280', '280', '280', '320'],
        windResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        windResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        windResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        waterResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        waterResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 231,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Steward Collar": new Weapon({
    id: 5035,
    name: 'Steward Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10503501,
      name: 'Debravera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 220,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Ultimate Leather Collar": new UltimateWeapon({
    id: 5036,
    name: 'Ultimate Leather Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Therapeutic Touch',
      sigil: null,
      description: `${heal(27, 'Mag.', 'All Allies')}\nAlso, ${regen('All Allies', 12, 12)}\n${chargeAndUses(40, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 161,
      mAtk: 161,
      heal: 149
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Pilot's Collar": new Weapon({
    id: 5024,
    name: 'Pilot\'s Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502401,
      name: 'Healing Howl',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${increase('MDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        heal: ['42', '50', '50', '50', '50', '50', '54', '54', '54', '54', '59'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '14', '14', '14', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 215,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Kefka's Collar": new Weapon({
    id: 5037,
    name: 'Kefka\'s Collar',
    character: characters[5],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10503701,
      name: 'Thundara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 228,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Brilliant Collar": new Weapon({
    id: 5038,
    name: 'Brilliant Collar',
    character: characters[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10503801,
      name: 'Brilliant Sault',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'All Allies', null, undefined, undefined, undefined)}\nAlso, ${conditionHP('Self', '70', 'more')}, ${increase('Wind Damage', undefined, 'All Allies', null, undefined, undefined, undefined)}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mAtkIncreaseDur: ['16', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        mAtkIncreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        windDamageIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        windDamageIncreaseDur: ['16', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        windDamageIncreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        windDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 236,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost HEAL"]
    ]
  }),
  "4-Point Shuriken": new Weapon({
    id: 6001,
    name: '4-Point Shuriken',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600101,
      name: 'Shuriken Throw',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['220', '250', '250', '250', '250', '250', '310', '310', '310', '310', '350'],
        pAtkDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 249,
      mAtk: 218,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Boomerang": new Weapon({
    id: 6002,
    name: 'Boomerang',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600201,
      name: 'Flurry of Steel',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 267,
      mAtk: 205,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Pinwheel": new Weapon({
    id: 6003,
    name: 'Pinwheel',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600301,
      name: 'Sweeping Spin',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 220,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Razor Ring": new Weapon({
    id: 6004,
    name: 'Razor Ring',
    character: characters[6],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10600401,
      name: 'Quaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 228,
      mAtk: 256,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Hawkeye": new Weapon({
    id: 6005,
    name: 'Hawkeye',
    character: characters[6],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10600501,
      name: 'Earth Ninjutsu',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Earth', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '70', 'more')}, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '710', '710', '710', '710', '850']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 270,
      mAtk: 201,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Crystal Cross": new Weapon({
    id: 6006,
    name: 'Crystal Cross',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600601,
      name: 'Stalwart Faith',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 256,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Wind Slash": new Weapon({
    id: 6007,
    name: 'Wind Slash',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600701,
      name: 'Nimble Wind Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        lightningResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        lightningResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 218,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Twin Viper": new Weapon({
    id: 6008,
    name: 'Twin Viper',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600801,
      name: 'Venomstrike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${apply('Ailment: Poison', null, 'Single Enemy', undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        poisonRate: ['50', '50', '50', '50', '50', '50', '70', '70', '70', '70', '70'],
        poisonDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        poisonExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 267,
      mAtk: 204,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Spiral Shuriken": new Weapon({
    id: 6009,
    name: 'Spiral Shuriken',
    character: characters[6],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10600901,
      name: 'Ice Ninjutsu',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 212,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Magic Shuriken": new Weapon({
    id: 6010,
    name: 'Magic Shuriken',
    character: characters[6],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10601001,
      name: 'Wind Ninjutsu',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 225,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Diner Tray": new Weapon({
    id: 6014,
    name: 'Diner Tray',
    character: characters[6],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10602301,
      name: 'Twister',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '710', '710', '710', '710', '850']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 267,
      mAtk: 204,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Arctic Star": new Weapon({
    id: 6015,
    name: 'Arctic Star',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10601501,
      name: 'Feisty Spirit',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}\n${increase('PATK', 'Mid', 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        pAtkIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13'],
        pAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 270,
      mAtk: 207,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Bamboo Ring": new Weapon({
    id: 6016,
    name: 'Bamboo Ring',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10601601,
      name: 'Baddies Begone',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)} The higher your HP, the higher the ability pot. (max: x2).`,
      valuesByOverboostLevel: {
        damage: ['270', '320', '320', '320', '320', '320', '420', '420', '420', '420', '500']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 191,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Resist."],
      reinforcementAbilities["ATB Boost"]
    ]
  }),
  "Chariot Wheel": new Weapon({
    id: 6022,
    name: 'Chariot Wheel',
    character: characters[6],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10602201,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 212,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Leviathan Cutter": new Weapon({
    id: 6024,
    name: 'Leviathan Cutter',
    character: characters[6],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10602401,
      name: 'Watera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 218,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Lightning Resist."],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Striped Moogle Float": new Weapon({
    id: 6026,
    name: 'Striped Moogle Float',
    character: characters[6],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10602601,
      name: 'Explosion',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'All Enemies', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${increase('Fire Damage', 'Low', 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['390', '530', '530', '530', '530', '530', '620', '620', '620', '620', '700'],
        fireDamageIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        fireDamageIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        fireDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 285,
      mAtk: 189,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Cactuar Fan": new Weapon({
    id: 6027,
    name: 'Cactuar Fan',
    character: characters[6],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10602701,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 225,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Bahamut Cutter": new Weapon({
    id: 6028,
    name: 'Bahamut Cutter',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10602801,
      name: 'Razor Wings',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('MDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}\nWhen Debuff is granted to Target, x1.3 damage.`,
      valuesByOverboostLevel: {
        damage: ['540', '650', '650', '650', '650', '650', '950', '950', '950', '950', '1,080'],
        mDefIncreaseDur: ['15', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        mDefIncreaseExt: ['5', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 289,
      mAtk: 191,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK (All Allies)"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Ultimate 4-Point Shuriken": new UltimateWeapon({
    id: 6029,
    name: 'Ultimate 4-Point Shuriken',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Euphoric Dance',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${increase('PATK', 'High', 'Self', null, 30, 30, 'High')}\n${increase('MATK', 'High', 'Self', null, 30, 30, 'High')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 175,
      mAtk: 169,
      heal: 130
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Little Red Wreath": new Weapon({
    id: 6019,
    name: 'Little Red Wreath',
    character: characters[6],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10601901,
      name: 'Icebound',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 285,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Holiday Bell": new Weapon({
    id: 6030,
    name: 'Holiday Bell',
    character: characters[6],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10603001,
      name: 'Song of Wind',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'Single Enemy', null)}\nAlso, ${decrease('Wind Resist.', 'Low', 'Single Enemy', null, undefined, undefined, undefined)}\n${decrease('MDEF', 'Low', 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        windResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '30'],
        windResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        windResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '30'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 291,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Conformer": new UltimateWeapon({
    id: 6032,
    name: 'Conformer',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ferocity',
      sigil: null,
      description: `${damage('2,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${decrease('PDEF', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${decrease('MDEF', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${increaseATBGauge(7, 'Self')}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 198,
      mAtk: 198,
      heal: 129
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["ATB Boost Arcanum"]
    ]
  }),
  "Mallet of Luck": new Weapon({
    id: 6031,
    name: 'Mallet of Luck',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10603101,
      name: 'Defira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        fireResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        fireResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 220,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Bird of Prey": new Weapon({
    id: 6033,
    name: 'Bird of Prey',
    character: characters[6],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10603301,
      name: 'Raging Torrent',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}\nAlso, ${apply('Exploit Weakness', undefined, 'Self', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        exploitWeaknessPot: ['20', '20', '20', '20', '20', '20', '30', '30', '30', '30', '30'],
        exploitWeaknessDur: ['30', '35', '35', '35', '35', '35', '35', '35', '35', '35', '45'],
        exploitWeaknessExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 288,
      mAtk: 212,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Risanautr": new Weapon({
    id: 6034,
    name: 'Risanautr',
    character: characters[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10603401,
      name: 'Dequakera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        earthResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        earthResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        earthResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 225,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Yellow Megaphone": new Weapon({
    id: 7001,
    name: 'Yellow Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700101,
      name: 'Sonic Meow',
      atbCost: 5,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 30)}\nAlso, When hitting critical, x3 damage.`,
      valuesByOverboostLevel: {
        damage: ['380', '460', '460', '460', '460', '460', '590', '590', '590', '590', '700']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 215,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Green Megaphone": new Weapon({
    id: 7002,
    name: 'Green Megaphone',
    character: characters[7],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10702201,
      name: 'Bloomin\' Spray',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        waterResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        waterResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 277,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Blue Megaphone": new Weapon({
    id: 7003,
    name: 'Blue Megaphone',
    character: characters[7],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10700301,
      name: 'Blizzaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 267,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Red Megaphone": new Weapon({
    id: 7004,
    name: 'Red Megaphone',
    character: characters[7],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10700401,
      name: 'Firaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 262,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Crystal Megaphone": new Weapon({
    id: 7005,
    name: 'Crystal Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700501,
      name: 'Instant Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['8', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 218,
      heal: 219
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Silver Megaphone": new Weapon({
    id: 7008,
    name: 'Silver Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700801,
      name: 'Spinning Punch',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 20)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Low')}\nWhen hitting critical, ${decrease('PDEF', 'High', 'Affected Targets', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 228,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Gold Megaphone": new Weapon({
    id: 7009,
    name: 'Gold Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700901,
      name: 'Fat Cat Attack',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 20)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen hitting critical, ${decrease('MATK', undefined, 'Affected Targets', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['40', '44', '44', '44', '44', '44', '52', '52', '52', '52', '60'],
        mAtkDecreaseExt: ['13', '14', '14', '14', '14', '14', '17', '17', '17', '17', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 231,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Battle Trumpet": new Weapon({
    id: 7010,
    name: 'Battle Trumpet',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10701001,
      name: 'Battle Drum',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 20)}\nAlso, ${decrease('MATK', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}\nWhen hitting critical, ${decrease('PATK', undefined, 'Affected Targets', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['220', '250', '250', '250', '250', '250', '310', '310', '310', '310', '350'],
        mAtkDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        pAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['40', '44', '44', '44', '44', '44', '52', '52', '52', '52', '60'],
        pAtkDecreaseExt: ['13', '14', '14', '14', '14', '14', '17', '17', '17', '17', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 246,
      mAtk: 228,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Trumpet Shell": new Weapon({
    id: 7011,
    name: 'Trumpet Shell',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10701101,
      name: 'Shellmanship',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\n${increase('MATK', undefined, 'All Allies', 20, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pAtkIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7'],
        mAtkIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mAtkIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        mAtkIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 197,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost MDEF (All Allies)"]
    ]
  }),
  "Marching Horn": new Weapon({
    id: 7014,
    name: 'Marching Horn',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10701401,
      name: 'Stalwart Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 212,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Flower Vase": new Weapon({
    id: 7022,
    name: 'Flower Vase',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700201,
      name: 'Hang in There',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}\n${apply('Haste', null, 'Single Ally', 20, undefined, 5)}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13'],
        hasteDur: ['10', '10', '10', '10', '10', '10', '15', '15', '15', '15', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 218,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Humus Megaphone": new Weapon({
    id: 7024,
    name: 'Humus Megaphone',
    character: characters[7],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10702401,
      name: 'Aerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 222,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Catsmegaphone": new Weapon({
    id: 7023,
    name: 'Catsmegaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10702301,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '36', '36', '36', '36', '36', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '12', '12', '12', '12', '12', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 201,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Fireworks Megaphone": new Weapon({
    id: 7025,
    name: 'Fireworks Megaphone',
    character: characters[7],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10702501,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 228,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Quina Megaphone": new Weapon({
    id: 7029,
    name: 'Quina Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10702901,
      name: 'Comforting Cuisine',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\nWhen [Rng.: Self]'s HP is 70% or more, ${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        pAtkIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        heal: ['5', '', '', '', '', '', '7', '7', '7', '7', '7'],
        pDefIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 204,
      heal: 192
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Alba Megaphone": new Weapon({
    id: 7026,
    name: 'Alba Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10702601,
      name: 'Ruinra Impact A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}`,
      valuesByOverboostLevel: {
        damage: ['280', '320', '320', '320', '320', '320', '380', '380', '380', '380', '390']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 205,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Ultimate Yellow Megaphone": new UltimateWeapon({
    id: 7028,
    name: 'Ultimate Yellow Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Super Spirit',
      sigil: null,
      description: `${increaseLimitGauge(30, 'Single Ally')}\nAlso, ${heal(5, 'Mag.', 'Single Ally')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 171,
      mAtk: 163,
      heal: 138
    },
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "HP Shout": new UltimateWeapon({
    id: 7032,
    name: 'HP Shout',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Heavenly Cheer',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${apply('Haste', null, 'All Allies', null, 20, 20)}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 187,
      mAtk: 187,
      heal: 145
    },
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Interruption ATB Boost"]
    ]
  }),
  "Witch's Broom": new Weapon({
    id: 7019,
    name: 'Witch\'s Broom',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10701901,
      name: 'Tumbling Tackle',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\n${conditionHP('Self', '50', 'more')}, ${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        mDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        mDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        lightningResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        lightningResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        lightningResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 256,
      mAtk: 243,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Icebolt Megaphone": new Weapon({
    id: 7027,
    name: 'Icebolt Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10702701,
      name: 'Deblizzara & Dethundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}\n${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['240', '280', '280', '280', '280', '280', '320', '320', '320', '320', '340'],
        iceResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        lightningResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        lightningResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        lightningResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 215,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Stilva Megaphone": new Weapon({
    id: 7031,
    name: 'Stilva Megaphone',
    character: characters[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10703101,
      name: 'Deblizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Ice Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        iceResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        iceResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 226,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Cath Palug": new Weapon({
    id: 8002,
    name: 'Cath Palug',
    character: characters[8],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10800201,
      name: 'Blizzaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 268,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Gilded Age": new Weapon({
    id: 8003,
    name: 'Gilded Age',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800301,
      name: 'Gilded Spirit',
      atbCost: 4,
      sigil: null,
      description: `${increaseLimitGauge(undefined, 'Self')}\nAlso, ${heal(undefined, 'Mag.', 'Self')}\n${regen('Self', undefined, 3)}`,
      valuesByOverboostLevel: {
        limitGaugeIncreasePot: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 220,
      heal: 206
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "S1976C": new Weapon({
    id: 8004,
    name: 'S1976C',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800401,
      name: 'Spellgun Shower',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\n${decrease('MATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pAtkDecreaseDur: ['18', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        pAtkDecreaseExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['18', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        mAtkDecreaseExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        mAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        limitGaugeIncreasePot: ['2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 260,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Shortbarrel": new Weapon({
    id: 8005,
    name: 'Shortbarrel',
    character: characters[8],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10800501,
      name: 'Stormround',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}\nThe higher your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['220', '260', '260', '260', '260', '260', '340', '340', '340', '340', '400'],
        limitGaugeIncreasePot: ['3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 226,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "T03 Model N": new Weapon({
    id: 8007,
    name: 'T03 Model N',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800701,
      name: 'Quick Draw',
      atbCost: 2,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nThe lower your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['160', '190', '190', '190', '190', '190', '250', '250', '250', '250', '300'],
        limitGaugeIncreasePot: ['1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 264,
      mAtk: 236,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Sawed-Off GS": new Weapon({
    id: 8008,
    name: 'Sawed-Off GS',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800801,
      name: 'Wardshot',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'Self', null, undefined, undefined, 'High')}\nAlso, ${increase('MDEF', undefined, 'Self', null, undefined, undefined, 'High')}\n${increaseLimitGauge(undefined, 'Self')}\n${heal(undefined, 'Mag.', 'Self')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        limitGaugeIncreasePot: ['2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3'],
        heal: ['11', '13', '13', '13', '13', '13', '14', '14', '14', '14', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 225,
      heal: 203
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Chiron": new Weapon({
    id: 8009,
    name: 'Chiron',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800901,
      name: 'Sageshot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        earthResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        earthResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        earthResistDecreaseExt: ['6', '8', '8', '8', '8', '8', '10', '10', '10', '10', '11'],
        limitGaugeIncreasePot: ['2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 243,
      mAtk: 243,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Double Stem E": new Weapon({
    id: 8010,
    name: 'Double Stem E',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801001,
      name: 'Poison Sphere',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${increaseLimitGauge(undefined, 'Self')}\nWhen [Rng.: Self]'s HP is 30% or less, ${apply('Ailment: Poison', null, 'All Enemies', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520'],
        limitGaugeIncreasePot: ['2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3'],
        poisonDur: ['12', '16', '16', '16', '16', '16', '20', '20', '20', '20', '25'],
        poisonExt: ['3', '4', '4', '4', '4', '4', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 273,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "White Dog": new Weapon({
    id: 8012,
    name: 'White Dog',
    character: characters[8],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10801201,
      name: 'Sludge Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        limitGaugeIncreasePot: ['4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 278,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Silver Rifle": new Weapon({
    id: 8014,
    name: 'Silver Rifle',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801401,
      name: 'Gunspinner Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, When Debuff is granted to Target, x1.5 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['370', '440', '440', '440', '440', '440', '570', '570', '570', '570', '700'],
        limitGaugeIncreasePot: ['2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 205,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Water Resist."],
      reinforcementAbilities["ATB Boost"]
    ]
  }),
  "Hugin & Munin": new Weapon({
    id: 8015,
    name: 'Hugin & Munin',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801501,
      name: 'Pentaburst Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['650', '780', '780', '780', '780', '780', '1,140', '1,140', '1,140', '1,140', '1,300'],
        limitGaugeIncreasePot: ['4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 285,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Quicksilver": new Weapon({
    id: 8017,
    name: 'Quicksilver',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800101,
      name: 'Spinning Pentashot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nThe lower your HP, the higher the ability pot. (max: x1.5).\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750'],
        limitGaugeIncreasePot: ['3', '3', '3', '3', '3', '3', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 228,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Ultimate Quicksilver": new UltimateWeapon({
    id: 8019,
    name: 'Ultimate Quicksilver',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Spinning Pentashot',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${increaseLimitGauge(40, 'Self')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 176,
      mAtk: 183,
      heal: 118
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Crow Familiar": new Weapon({
    id: 8016,
    name: 'Crow Familiar',
    character: characters[8],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10801601,
      name: 'Shadow Swoop',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}\nAlso, When Buff is granted to [Rng.: Self], x1.2 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        limitGaugeIncreasePot: ['4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 277,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Icebolt Shooter": new Weapon({
    id: 8018,
    name: 'Icebolt Shooter',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801801,
      name: 'Deblizzara & Dethundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}\n${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['240', '280', '280', '280', '280', '280', '320', '320', '320', '320', '340'],
        iceResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
        lightningResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        lightningResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        lightningResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 220,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Water Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Rhad Gun": new Weapon({
    id: 8020,
    name: 'Rhad Gun',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10802001,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '36', '36', '36', '36', '36', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '12', '12', '12', '12', '12', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 197,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Eligor Gun": new Weapon({
    id: 8021,
    name: 'Eligor Gun',
    character: characters[8],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10802101,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290'],
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 226,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Holiday Garm": new Weapon({
    id: 8022,
    name: 'Holiday Garm',
    character: characters[8],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10802201,
      name: 'Hellhound Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.\n${increaseLimitGauge(5, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        limitGaugeIncreasePot: ['4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 288,
      mAtk: 204,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Kugelblitz": new Weapon({
    id: 8013,
    name: 'Kugelblitz',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801301,
      name: 'Lightblast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('MDEF', undefined, 'All Enemies', null, undefined, undefined, undefined)}\n${conditionHP('Self', '70', 'more')}, ${increase('Earth Damage', undefined, 'Self', null, undefined, undefined, undefined)}\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['470', '540', '540', '540', '540', '540', '660', '660', '660', '660', '750'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '25', '25', '25', '25', '25', '25', '25', '25', '25', '35'],
        mDefDecreaseExt: ['6', '8', '8', '8', '8', '8', '8', '8', '8', '8', '11'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        earthDamageIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        earthDamageIncreaseDur: ['30', '35', '35', '35', '35', '35', '35', '35', '35', '35', '45'],
        earthDamageIncreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9'],
        earthDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        limitGaugeIncreasePot: ['4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 281,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Death Penalty": new UltimateWeapon({
    id: 8025,
    name: 'Death Penalty',
    character: characters[8],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Invisible Shot',
      sigil: null,
      description: `${damage('2,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${ampAbilities('Phys.', 'All Allies', '40', 60, 0)}\n${ampAbilities('Mag.', 'All Allies', '40', 60, 0)}\n${increaseLimitGauge(20, 'Self')}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 198,
      mAtk: 210,
      heal: 119
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Stream Phase ATB Boost"]
    ]
  }),
  "Spear": new Weapon({
    id: 9001,
    name: 'Spear',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900101,
      name: 'Quadspike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, [Condition: First use] ${apply('Status Ailment: Stop', null, 'Single Enemy', null, undefined, 3)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750'],
        stopDur: ['3', '4', '4', '4', '4', '4', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 218,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Slash Lance": new Weapon({
    id: 9002,
    name: 'Slash Lance',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900201,
      name: 'Thunder Slam',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${increase('PDEF', undefined, 'All Enemies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 193,
      heal: 203
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Trident": new Weapon({
    id: 9003,
    name: 'Trident',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900301,
      name: 'Rising Harpoon',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${conditionHP('Self', '70', 'more')}, ${apply('Ailment: Poison', null, 'Single Enemy', null, undefined, undefined)}\n[Condition: First use] ${apply('Status Ailment: Stop', null, 'Single Enemy', null, undefined, 3)}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        poisonDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        poisonExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7'],
        stopDur: ['3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 233,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Pole Axe": new Weapon({
    id: 9004,
    name: 'Pole Axe',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900401,
      name: 'Sharp Sonic',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\n${decrease('MATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pAtkDecreaseDur: ['18', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        pAtkDecreaseExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['18', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
        mAtkDecreaseExt: ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        mAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 249,
      mAtk: 243,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Partisan": new Weapon({
    id: 9005,
    name: 'Partisan',
    character: characters[9],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Aeroga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 267,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Viper Halberd": new Weapon({
    id: 9006,
    name: 'Viper Halberd',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900601,
      name: 'Imposing Stance',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Self', null, undefined, undefined, 'High')}\nAlso, ${increase('MDEF', undefined, 'Self', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'Self')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        heal: ['11', '13', '13', '13', '13', '13', '14', '14', '14', '14', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 212,
      heal: 212
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Radiant Lance": new Weapon({
    id: 9008,
    name: 'Radiant Lance',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10900801,
      name: 'Flying Spiral',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increaseCommandGauge(undefined)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750'],
        commandGaugeIncreasePot: ['10', '10', '10', '10', '10', '10', '20', '20', '20', '20', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 218,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Scimitar": new Weapon({
    id: 9011,
    name: 'Scimitar',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10901101,
      name: 'Dragon\'s Spirit',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${increase('MATK', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\n${increase('Ice Damage', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        pAtkIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        pAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        mAtkIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceDamageIncreaseDur: ['24', '26', '26', '26', '26', '26', '26', '26', '26', '26', '30'],
        iceDamageIncreaseExt: ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '10'],
        iceDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 212,
      heal: 220
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Flayer": new Weapon({
    id: 9012,
    name: 'Flayer',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10901201,
      name: 'Heavy Swing',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, [Condition: First use] ${apply('Status Ailment: Stop', null, 'Single Enemy', null, undefined, 3)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        stopDur: ['3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 270,
      mAtk: 218,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Rocket Lance": new Weapon({
    id: 9015,
    name: 'Rocket Lance',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10901501,
      name: 'Cosmic Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${apply('Status Ailment: Enfeeble', null, 'Single Enemy', null, undefined, undefined)}\n${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        enfeebleDur: ['40', '45', '45', '45', '45', '45', '50', '50', '50', '50', '70'],
        enfeebleExt: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '14'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '25', '25', '25', '25', '35'],
        iceResistDecreaseExt: ['6', '8', '8', '8', '8', '8', '8', '8', '8', '8', '11'],
        iceResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 256,
      mAtk: 268,
      heal: 137
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Mop": new Weapon({
    id: 9016,
    name: 'Mop',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10901601,
      name: 'Cleaning Mop',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, [Condition: First use] ${apply('Status Ailment: Stop', null, 'All Enemies', null, undefined, 3)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        stopDur: ['3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 212,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Earth Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Ultimate Spear": new UltimateWeapon({
    id: 9018,
    name: 'Ultimate Spear',
    character: characters[9],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Dragon\'s Spirit',
      sigil: null,
      description: `${increaseLimitGauge(20, 'Single Ally')}\nAlso, ${increase('PATK', 'High', 'Single Ally', null, 30, 30, 'High')}\n${heal(5, 'Mag.', 'Single Ally')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 159,
      mAtk: 161,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Type-99 Longsword": new Weapon({
    id: 20001,
    name: 'Type-99 Longsword',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000101,
      name: 'Rapid Slash',
      atbCost: 4,
      sigil: 'circle',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 210,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Beach Parasol": new Weapon({
    id: 20003,
    name: 'Beach Parasol',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000301,
      name: 'Magic Ray',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '460', '460', '460', '460', '460', '540', '540', '540', '540', '560']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 183,
      mAtk: 193,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Enhance Sword (Z)": new Weapon({
    id: 20004,
    name: 'Enhance Sword (Z)',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000601,
      name: 'Healing Vortex',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        heal: ['101', '121', '121', '121', '121', '121', '131', '131', '131', '131', '141']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 236,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Defender": new Weapon({
    id: 20005,
    name: 'Defender',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000501,
      name: 'Spirit Burst',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['6', '6', '6', '6', '6', '6', '9', '9', '9', '9', '9'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 189,
      heal: 206
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Crystal Sword (Z)": new Weapon({
    id: 20006,
    name: 'Crystal Sword (Z)',
    character: characters[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12000401,
      name: 'Firaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 212,
      heal: 223
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Falchion": new Weapon({
    id: 20007,
    name: 'Falchion',
    character: characters[20],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 12000701,
      name: 'Gale Blast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 204,
      heal: 198
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Zweihander": new Weapon({
    id: 20008,
    name: 'Zweihander',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000801,
      name: 'Slashing Thrust',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 199,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "Arc Sword": new Weapon({
    id: 20009,
    name: 'Arc Sword',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000901,
      name: 'Homing Blast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 262,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Resist."]
    ]
  }),
  "Cutlass": new Weapon({
    id: 20010,
    name: 'Cutlass',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001001,
      name: 'Destructive Swipe',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 225,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Ceremonial Sword (Z)": new Weapon({
    id: 20011,
    name: 'Ceremonial Sword (Z)',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001101,
      name: 'Ceremonial Slice',
      atbCost: 5,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('PATK', undefined, 'Self', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['700', '840', '840', '840', '840', '840', '1,220', '1,220', '1,220', '1,220', '1,400'],
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        pAtkIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 193,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Bouquet": new Weapon({
    id: 20013,
    name: 'Bouquet',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001301,
      name: 'Floral Flourish',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nThe higher your HP, the higher the ability pot. (max: x3).`,
      valuesByOverboostLevel: {
        damage: ['210', '250', '250', '250', '250', '250', '330', '330', '330', '330', '400']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 201,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Fire Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Pressure Ridge": new Weapon({
    id: 20014,
    name: 'Pressure Ridge',
    character: characters[20],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 12001401,
      name: 'Freezing Cleave',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 205,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Iron Greatsword": new Weapon({
    id: 20015,
    name: 'Iron Greatsword',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001501,
      name: 'Spiral Swing',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 214,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Ifrit's Sword": new Weapon({
    id: 20016,
    name: 'Ifrit\'s Sword',
    character: characters[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12001601,
      name: 'Fira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 212,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Twinkling Star": new Weapon({
    id: 20018,
    name: 'Twinkling Star',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001201,
      name: 'Dual Onslaught',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        mAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        pDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 257,
      mAtk: 201,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Black Whiskers": new Weapon({
    id: 20019,
    name: 'Black Whiskers',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12001901,
      name: 'Swirl Drop',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\n${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        waterResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        waterResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        waterResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        waterResistDecreaseMaxPot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 201,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Stream Guard": new Weapon({
    id: 20020,
    name: 'Stream Guard',
    character: characters[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12002001,
      name: 'Igniting Stream',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '70', 'more')}, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['480', '', '', '', '', '', '710', '710', '710', '710', '850']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 277,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Zinogre Blade": new Weapon({
    id: 20023,
    name: 'Zinogre Blade',
    character: characters[20],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 12002301,
      name: 'Lightning Edge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Lightning', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '70', 'more')}, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 278,
      mAtk: 222,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Carrot Sword": new Weapon({
    id: 20024,
    name: 'Carrot Sword',
    character: characters[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12002401,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 225,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Alba Blade": new Weapon({
    id: 20025,
    name: 'Alba Blade',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12002501,
      name: 'Ruinra Impact A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}`,
      valuesByOverboostLevel: {
        damage: ['280', '320', '320', '320', '320', '320', '380', '380', '380', '380', '390']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 204,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Beatrix Sword": new Weapon({
    id: 20027,
    name: 'Beatrix Sword',
    character: characters[20],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 12002701,
      name: 'Gale Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 220,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Ultimate Type-99 Longsword": new UltimateWeapon({
    id: 20026,
    name: 'Ultimate Type-99 Longsword',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Slashing Thrust',
      sigil: null,
      description: `${damage('1,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${decrease('PDEF', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${decrease('MDEF', 'High', 'Single Enemy', null, 30, 30, 'High')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 178,
      mAtk: 171,
      heal: 126
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Buster Sword Origin": new Weapon({
    id: 20002,
    name: 'Buster Sword Origin',
    character: characters[20],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 12000201,
      name: 'High Braver',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '710', '710', '710', '710', '860']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 207,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "White Tree": new Weapon({
    id: 20029,
    name: 'White Tree',
    character: characters[20],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 12002901,
      name: 'Aerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 226,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Nameless": new Weapon({
    id: 49001,
    name: 'Nameless',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900301,
      name: 'Telluric Fury',
      atbCost: 2,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['150', '170', '170', '170', '170', '170', '210', '210', '210', '210', '240'],
        mDefDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefDecreaseDur: ['11', '13', '13', '13', '13', '13', '13', '13', '13', '13', '14'],
        mDefDecreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 228,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Edged Wings": new Weapon({
    id: 49002,
    name: 'Edged Wings',
    character: characters[49],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 14900201,
      name: 'Aerial Frostblade',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 267,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Glaireid": new Weapon({
    id: 49003,
    name: 'Glaireid',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900101,
      name: 'Sweeping Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}`,
      valuesByOverboostLevel: {
        damage: ['350', '420', '420', '420', '420', '420', '550', '550', '550', '550', '650']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 214,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Aonibi": new Weapon({
    id: 49004,
    name: 'Aonibi',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900401,
      name: 'Frenzied Stance',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', undefined, 'Self', null, undefined, undefined, 'High')}\nAlso, ${regen('Self', undefined, 3)}\n${heal(undefined, 'Mag.', 'Self')}`,
      valuesByOverboostLevel: {
        mAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['36', '40', '40', '40', '40', '40', '40', '40', '40', '40', '44'],
        mAtkIncreaseExt: ['12', '13', '13', '13', '13', '13', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['11', '13', '13', '13', '13', '13', '14', '14', '14', '14', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 222,
      heal: 208
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Northern Lights": new Weapon({
    id: 49005,
    name: 'Northern Lights',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900501,
      name: 'Radiant Aurora',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 249,
      mAtk: 214,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "Prototype Crimson Blade": new Weapon({
    id: 49006,
    name: 'Prototype Crimson Blade',
    character: characters[49],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 14900601,
      name: 'Firaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 260,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "CC Alloy Sword": new Weapon({
    id: 49007,
    name: 'CC Alloy Sword',
    character: characters[49],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 14900701,
      name: 'Thundaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 256,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Mythril Type-0 Katana": new Weapon({
    id: 49008,
    name: 'Mythril Type-0 Katana',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900801,
      name: 'Steadfast Stance',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'Self', null, undefined, undefined, 'High')}\nAlso, ${regen('Self', undefined, 3)}\n${heal(undefined, 'Phys.', 'Self')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['36', '40', '40', '40', '40', '40', '40', '40', '40', '40', '44'],
        pDefIncreaseExt: ['12', '13', '13', '13', '13', '13', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['11', '13', '13', '13', '13', '13', '14', '14', '14', '14', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 220,
      heal: 213
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Shinra Blade: Model I": new Weapon({
    id: 49009,
    name: 'Shinra Blade: Model I',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14900901,
      name: 'Shock Blast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 228,
      mAtk: 257,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Torn Wing": new Weapon({
    id: 49012,
    name: 'Torn Wing',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901201,
      name: 'Solid Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        pDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 207,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "World Tree Bough": new Weapon({
    id: 49013,
    name: 'World Tree Bough',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901301,
      name: 'Heavenly Grasp',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, with Command Gauge max in Attack Stance: x1.5 damage.`,
      valuesByOverboostLevel: {
        damage: ['370', '440', '440', '440', '440', '440', '570', '570', '570', '570', '700']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 235,
      mAtk: 193,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Earth Resist."],
      reinforcementAbilities["ATB Boost"]
    ]
  }),
  "Dark Heavens": new Weapon({
    id: 49015,
    name: 'Dark Heavens',
    character: characters[49],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 14901501,
      name: 'Gale Strike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 212,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Kuja's Spirit Blade": new Weapon({
    id: 49016,
    name: 'Kuja\'s Spirit Blade',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901601,
      name: 'Flare Star',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('MATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '', '', '', '', '', '480', '480', '480', '480', '540'],
        mAtkDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        mAtkDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        mAtkDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        pAtkDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        pAtkDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 264,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Radiant Edge": new Weapon({
    id: 49017,
    name: 'Radiant Edge',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901701,
      name: 'Iai',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        fireResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        fireResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 212,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Protector's Blade": new Weapon({
    id: 49018,
    name: 'Protector\'s Blade',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901801,
      name: 'Protector\'s Blow',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, against a single target, x1.3 damage.`,
      valuesByOverboostLevel: {
        damage: ['500', '', '', '', '', '', '740', '740', '740', '740', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 278,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK (All Allies)"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Flame Dragon Blade": new Weapon({
    id: 49019,
    name: 'Flame Dragon Blade',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901901,
      name: 'Defira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        fireResistDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 226,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Ashura": new Weapon({
    id: 49020,
    name: 'Ashura',
    character: characters[49],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 14902001,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 218,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Shinra Military Sword": new Weapon({
    id: 49011,
    name: 'Shinra Military Sword',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901101,
      name: 'Theatrical Strike',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('PATK', 'Mid', 'Self', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('Wind Damage', undefined, 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        pAtkIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        pAtkIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        windDamageIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        windDamageIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        windDamageIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        windDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 201,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Shinra Wyvern Blade": new Weapon({
    id: 49023,
    name: 'Shinra Wyvern Blade',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14902301,
      name: 'Defira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        fireResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        fireResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 218,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Tempest": new Weapon({
    id: 49010,
    name: 'Tempest',
    character: characters[49],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 14901001,
      name: 'Torrential Thrust',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['440', '510', '510', '510', '510', '510', '620', '620', '620', '620', '700'],
        waterResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        waterResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 277,
      mAtk: 214,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Blue Bramble": new Weapon({
    id: 49024,
    name: 'Blue Bramble',
    character: characters[49],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 14902401,
      name: 'Sandsplitter',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['440', '510', '510', '510', '510', '510', '620', '620', '620', '620', '700'],
        earthResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        earthResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        earthResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 281,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Ultimate Nameless": new UltimateWeapon({
    id: 49026,
    name: 'Ultimate Nameless',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Sweeping Slash',
      sigil: null,
      description: `${damage('1,500', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x2 damage.\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 183,
      mAtk: 171,
      heal: 122
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Genji Blade": new UltimateWeapon({
    id: 49027,
    name: 'Genji Blade',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Flash of Steel',
      sigil: null,
      description: `${damage('2,000', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, ${increase('PATK', 'Extra High', 'Self', null, 30, 30, 'Extra High')}\n${increase('MATK', 'Extra High', 'Self', null, 30, 30, 'Extra High')}\n${chargeAndUses(60, 20, 2)}`
    }),
    maxRarityStats: {
      pAtk: 203,
      mAtk: 196,
      heal: 126
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ability Pot."],
      reinforcementAbilities["Interruption Mastery"]
    ]
  }),
  "Edgar's Coiled Blade": new Weapon({
    id: 49028,
    name: 'Edgar\'s Coiled Blade',
    character: characters[49],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 14902801,
      name: 'Royal Shock',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, When Debuff is granted to Target, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 289,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Wintercrest Blade": new Weapon({
    id: 49029,
    name: 'Wintercrest Blade',
    character: characters[49],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 14902901,
      name: 'Aerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 222,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Withering Blaze": new Weapon({
    id: 49031,
    name: 'Withering Blaze',
    character: characters[49],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 14903101,
      name: 'Blazing Ignis',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Fire Resist.', 'Low', 'Single Enemy', null, undefined, undefined, undefined)}\nWhen Buff is granted to [Rng.: Self], x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['440', '510', '510', '510', '510', '510', '620', '620', '620', '620', '700'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        fireResistDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 285,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Humus Saber": new Weapon({
    id: 49022,
    name: 'Humus Saber',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14902201,
      name: 'Deaerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Wind Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['170', '200', '200', '200', '200', '200', '230', '230', '230', '230', '240'],
        windResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        windResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8'],
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 220,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Blade of the Worthy": new Weapon({
    id: 49030,
    name: 'Blade of the Worthy',
    character: characters[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14903001,
      name: 'Diving Scourge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${additionalDamage('Non-elem.', 'Mag.', 'All Enemies')}\n${exploitWeakness('Self', undefined, undefined, undefined)} ${conditionHP('Self', '50', 'more')}`,
      valuesByOverboostLevel: {
        damage: ['540', '650', '650', '650', '650', '650', '840', '840', '840', '840', '1,010'],
        additionalDamage: ['10000', '20000', '20000', '20000', '20000', '20000', '30000', '30000', '30000', '30000', '40000'],
        exploitWeaknessPot: ['25', '25', '25', '25', '25', '25', '35', '35', '35', '35', '40'],
        exploitWeaknessDur: ['30', '35', '35', '35', '35', '35', '45', '45', '45', '45', '60'],
        exploitWeaknessExt: ['10', '12', '12', '12', '12', '12', '15', '15', '15', '15', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 277,
      heal: 126
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK (All Allies)"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Personal Style": new Weapon({
    id: 50001,
    name: 'Personal Style',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000101,
      name: 'Mad Bull',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 256,
      mAtk: 218,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Crewkicker": new Weapon({
    id: 50002,
    name: 'Crewkicker',
    character: characters[50],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15000201,
      name: 'Spinning Blaze',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 214,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Jiggy Fam": new Weapon({
    id: 50003,
    name: 'Jiggy Fam',
    character: characters[50],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 15000301,
      name: 'Quaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 228,
      mAtk: 239,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Hardcore Squad": new Weapon({
    id: 50004,
    name: 'Hardcore Squad',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000401,
      name: 'Good Vibes',
      atbCost: 5,
      sigil: null,
      description: `${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\nAlso, ${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'Mid')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        pDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        mDefIncreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 241,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Rest in Peace": new Weapon({
    id: 50005,
    name: 'Rest in Peace',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000501,
      name: 'Hell\'s Penalty',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 205,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Resist."]
    ]
  }),
  "Ultimatic": new Weapon({
    id: 50007,
    name: 'Ultimatic',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000701,
      name: 'Skullknocker',
      atbCost: 4,
      sigil: 'circle',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '910', '910', '910', '910', '1,040']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 199,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Piece of Cake": new Weapon({
    id: 50008,
    name: 'Piece of Cake',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000801,
      name: 'Dual Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '450', '450', '450', '450', '510'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 212,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Shockbuster": new Weapon({
    id: 50010,
    name: 'Shockbuster',
    character: characters[50],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15001001,
      name: 'Thundaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 239,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Apology in Hell": new Weapon({
    id: 50011,
    name: 'Apology in Hell',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001101,
      name: 'Twin Hell',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 249,
      mAtk: 225,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Ice Resist."]
    ]
  }),
  "Squeaky Hammer": new Weapon({
    id: 50014,
    name: 'Squeaky Hammer',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001401,
      name: 'Crushing Jump',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nThe lower your HP, the higher the ability pot. (max: x2).`,
      valuesByOverboostLevel: {
        damage: ['370', '440', '440', '440', '440', '440', '570', '570', '570', '570', '700']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 243,
      mAtk: 201,
      heal: 151
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Water Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Inferno Grave": new Weapon({
    id: 50015,
    name: 'Inferno Grave',
    character: characters[50],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15001501,
      name: 'Fira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 215,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Ice Resist."],
      reinforcementAbilities["Boost ATK"]
    ]
  }),
  "Pumpkin Lamppost": new Weapon({
    id: 50016,
    name: 'Pumpkin Lamppost',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001601,
      name: 'Stalwart Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 226,
      heal: 208
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Thousand Waves": new Weapon({
    id: 50018,
    name: 'Thousand Waves',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001801,
      name: 'Magic Ray',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '460', '460', '460', '460', '460', '540', '540', '540', '540', '560']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 191,
      heal: 153
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Steiner's Blade": new Weapon({
    id: 50019,
    name: 'Steiner\'s Blade',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001901,
      name: 'Power Break',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 186,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Stream Slasher": new Weapon({
    id: 50020,
    name: 'Stream Slasher',
    character: characters[50],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15002001,
      name: 'Flooding Stream',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '740', '740', '740', '740', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 281,
      mAtk: 214,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK (All Allies)"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Best Wishes": new Weapon({
    id: 50021,
    name: 'Best Wishes',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15002101,
      name: 'Armora Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 215,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Radglaive": new Weapon({
    id: 50022,
    name: 'Radglaive',
    character: characters[50],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15002201,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 215,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Silver Sol Buster": new Weapon({
    id: 50023,
    name: 'Silver Sol Buster',
    character: characters[50],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15002301,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 214,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Slay the Day": new Weapon({
    id: 50006,
    name: 'Slay the Day',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15000601,
      name: 'Rising Strike',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('Water Damage', undefined, 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        pDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        pDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        waterDamageIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        waterDamageIncreaseDur: ['25', '28', '28', '28', '28', '28', '30', '30', '30', '30', '35'],
        waterDamageIncreaseExt: ['5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '7'],
        waterDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 277,
      mAtk: 220,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Ultimate Personal Style": new UltimateWeapon({
    id: 50024,
    name: 'Ultimate Personal Style',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Fire Up',
      sigil: null,
      description: `${increase('MDEF', 'High', 'All Allies', null, 20, 20, 'High')}\nAlso, ${heal(5, 'Mag.', 'All Allies')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 184,
      mAtk: 175,
      heal: 118
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost HP"]
    ]
  }),
  "Stilva Glaive": new Weapon({
    id: 50026,
    name: 'Stilva Glaive',
    character: characters[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15002601,
      name: 'Deblizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Ice Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        iceResistDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        iceResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 220,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Blade of Ruin": new Weapon({
    id: 50013,
    name: 'Blade of Ruin',
    character: characters[50],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 15001301,
      name: 'Frost Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}\nAlso, ${apply('Provoke', null, 'Self', null, 60, 0)}\n${increaseCommandGauge(undefined)}`,
      valuesByOverboostLevel: {
        damage: ['520', '620', '620', '620', '620', '620', '780', '780', '780', '780', '940'],
        commandGaugeIncreasePot: ['10', '10', '10', '10', '10', '10', '20', '20', '20', '20', '20']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 218,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Broadsword: Axis": new Weapon({
    id: 51001,
    name: 'Broadsword: Axis',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100101,
      name: 'Shoot & Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['480', '580', '580', '580', '580', '580', '750', '750', '750', '750', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 243,
      heal: 205
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Orthodox Raven": new Weapon({
    id: 51002,
    name: 'Orthodox Raven',
    character: characters[51],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15100201,
      name: 'Waterga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 254,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Absolute Royal": new Weapon({
    id: 51003,
    name: 'Absolute Royal',
    character: characters[51],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 15100301,
      name: 'Snowstorm',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '350', '350', '350', '350', '350', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 210,
      mAtk: 246,
      heal: 195
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Prime Number": new Weapon({
    id: 51004,
    name: 'Prime Number',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100401,
      name: 'Healing Showers',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        heal: ['53', '63', '63', '63', '63', '63', '69', '69', '69', '69', '74']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 215,
      heal: 220
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Espee Rapiere Next-G": new Weapon({
    id: 51005,
    name: 'Espee Rapiere Next-G',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100501,
      name: 'First Aid',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        heal: ['106', '127', '127', '127', '127', '127', '138', '138', '138', '138', '148']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 210,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Core Defender": new Weapon({
    id: 51006,
    name: 'Core Defender',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100601,
      name: 'Amulet Tribute',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 273,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Water Resist."]
    ]
  }),
  "Centipede": new Weapon({
    id: 51007,
    name: 'Centipede',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100701,
      name: 'Recovery Circle',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${increase('PDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        heal: ['42', '50', '50', '50', '50', '50', '54', '54', '54', '54', '59'],
        pDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        pDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        pDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 207,
      heal: 229
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Stingray": new Weapon({
    id: 51008,
    name: 'Stingray',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100801,
      name: 'Core Sting',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 267,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Wind Resist."]
    ]
  }),
  "Killer Hornet": new Weapon({
    id: 51009,
    name: 'Killer Hornet',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100901,
      name: 'Killing Slash',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['380', '460', '460', '460', '460', '460', '590', '590', '590', '590', '720']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 267,
      mAtk: 225,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Bramble Spine": new Weapon({
    id: 51010,
    name: 'Bramble Spine',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101101,
      name: 'Stalwart Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        pAtkIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 260,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Syringe Rapier": new Weapon({
    id: 51012,
    name: 'Syringe Rapier',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101201,
      name: 'Defending Jab',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('PDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        mDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        mDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7'],
        pDefIncreaseDur: ['10', '12', '12', '12', '12', '12', '12', '12', '12', '12', '14'],
        pDefIncreaseExt: ['3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        pDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 214,
      heal: 222
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Foam Sword": new Weapon({
    id: 51013,
    name: 'Foam Sword',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101301,
      name: 'Swing',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${remove('Phys. Defense Up', 'Single Enemy')}`,
      valuesByOverboostLevel: {
        damage: ['330', '400', '400', '400', '400', '400', '510', '510', '510', '510', '620']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 226,
      mAtk: 189,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Lightning Resist."],
      reinforcementAbilities["Boost MDEF (All Allies)"]
    ]
  }),
  "Slick Beetle": new Weapon({
    id: 51015,
    name: 'Slick Beetle',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101501,
      name: 'X-Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['300', '350', '350', '350', '350', '350', '420', '420', '420', '420', '480'],
        pAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 212,
      heal: 185
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Bahamut Rapier": new Weapon({
    id: 51016,
    name: 'Bahamut Rapier',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101601,
      name: 'Ruinra Surge',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 226,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MDEF"],
      reinforcementAbilities["Boost MATK"]
    ]
  }),
  "Holiday Cane": new Weapon({
    id: 51017,
    name: 'Holiday Cane',
    character: characters[51],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 15101701,
      name: 'Quakera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 215,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Giant Fork": new Weapon({
    id: 51018,
    name: 'Giant Fork',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101801,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '36', '36', '36', '36', '36', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '12', '12', '12', '12', '12', '13', '13', '13', '13', '14'],
        regenDur: ['9', '12', '12', '12', '12', '12', '12', '12', '12', '12', '15'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 214,
      mAtk: 207,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Humus Rapier": new Weapon({
    id: 51020,
    name: 'Humus Rapier',
    character: characters[51],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 15102001,
      name: 'Aerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 220,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Firefish": new Weapon({
    id: 51022,
    name: 'Firefish',
    character: characters[51],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15102201,
      name: 'Fira Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 199,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Ultimate Broadsword: Axis": new UltimateWeapon({
    id: 51024,
    name: 'Ultimate Broadsword: Axis',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Ult. Healing Showers',
      sigil: null,
      description: `${restoreMaxHP(25, 'Mag.', 'All Allies')}\nAlso, ${regen('All Allies', 3, 3)}\n${remove('Phys. Defense Down, Mag. Defense Down', 'All Allies')}\n${chargeAndUses(40, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 179,
      mAtk: 176,
      heal: 121
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Candle Rapier": new Weapon({
    id: 51025,
    name: 'Candle Rapier',
    character: characters[51],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15102501,
      name: 'Thundara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['220', '230', '230', '230', '230', '230', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 228,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Luminary Sword": new Weapon({
    id: 51026,
    name: 'Luminary Sword',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15102601,
      name: 'Luminary Glow',
      atbCost: 4,
      sigil: null,
      description: `${increase('MATK', 'Low', 'All Allies', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\n${conditionHP('Self', '70', 'more')}, ${increase('Fire Damage', 'Low', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        mAtkIncreaseDur: ['16', '20', '20', '20', '20', '20', '24', '24', '24', '24', '30'],
        mAtkIncreaseExt: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        mAtkIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7'],
        fireDamageIncreaseDur: ['16', '20', '20', '20', '20', '20', '24', '24', '24', '24', '30'],
        fireDamageIncreaseExt: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        fireDamageIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 214,
      heal: 226
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Nautilus Spiral": new Weapon({
    id: 51021,
    name: 'Nautilus Spiral',
    character: characters[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15102101,
      name: 'Spiral Edge',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${conditionHP('Self', '50', 'more')}, ${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        iceResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        lightningResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        lightningResistDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 215,
      heal: 216
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "V39": new Weapon({
    id: 52001,
    name: 'V39',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15200101,
      name: 'Pineapple Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}`,
      valuesByOverboostLevel: {
        damage: ['370', '440', '440', '440', '440', '440', '580', '580', '580', '580', '690']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 225,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Fire Resist."]
    ]
  }),
  "Pulse Gun": new Weapon({
    id: 52002,
    name: 'Pulse Gun',
    character: characters[52],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 15200301,
      name: 'Aeroga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['270', '320', '320', '320', '320', '320', '420', '420', '420', '420', '500']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 225,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Wind Pot."]
    ]
  }),
  "Serpent Eater": new Weapon({
    id: 52003,
    name: 'Serpent Eater',
    character: characters[52],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15200201,
      name: 'Hydroshot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['420', '500', '500', '500', '500', '500', '660', '660', '660', '660', '790']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 256,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Thunderbird": new Weapon({
    id: 52004,
    name: 'Thunderbird',
    character: characters[52],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15200401,
      name: 'Laser Spark',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}\nAlso, ${decrease('MDEF', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        mDefDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 281,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Tranquilizer Gun": new Weapon({
    id: 52005,
    name: 'Tranquilizer Gun',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15200501,
      name: 'Potion Volley',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'Self')}\nAlso, ${remove('Ailment: Poison, Ailment: Darkness', 'Self')}`,
      valuesByOverboostLevel: {
        heal: ['117', '140', '140', '140', '140', '140', '152', '152', '152', '152', '163']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 205,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "SSR1976": new Weapon({
    id: 52006,
    name: 'SSR1976',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15200601,
      name: 'Stalwart Manaward',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'Single Ally', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 262,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Mad Minute": new Weapon({
    id: 52007,
    name: 'Mad Minute',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15200701,
      name: 'Barrage',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MATK', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        mAtkDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        mAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 243,
      mAtk: 226,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Bald Eagle": new Weapon({
    id: 52009,
    name: 'Bald Eagle',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15200901,
      name: 'Diving Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        iceResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '22', '22', '22', '22', '25'],
        iceResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 264,
      mAtk: 199,
      heal: 188
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Black Rifle": new Weapon({
    id: 52010,
    name: 'Black Rifle',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201001,
      name: 'Quietude',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${apply('Ailment: Silence', null, 'Single Enemy', undefined, 5, 2)}`,
      valuesByOverboostLevel: {
        damage: ['420', '500', '500', '500', '500', '500', '660', '660', '660', '660', '790'],
        silenceRate: ['20', '20', '20', '20', '20', '20', '30', '30', '30', '30', '30']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 273,
      mAtk: 207,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Crit. Pot."]
    ]
  }),
  "Rubber Band Gun": new Weapon({
    id: 52014,
    name: 'Rubber Band Gun',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201401,
      name: 'Parading Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increaseCommandGauge(20)}`,
      valuesByOverboostLevel: {
        damage: ['330', '400', '400', '400', '400', '400', '510', '510', '510', '510', '620']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 199,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Featherscatter": new Weapon({
    id: 52015,
    name: 'Featherscatter',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201501,
      name: 'Debravera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 215,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Barn Swallow": new Weapon({
    id: 52016,
    name: 'Barn Swallow',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201601,
      name: 'Striking Quintet',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['420', '500', '500', '500', '500', '500', '660', '660', '660', '660', '790']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 264,
      mAtk: 204,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Resist."]
    ]
  }),
  "Pumpkin Blaster": new Weapon({
    id: 52017,
    name: 'Pumpkin Blaster',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201701,
      name: 'Solid Manaward',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        mDefIncreaseDur: ['30', '34', '34', '34', '34', '34', '34', '34', '34', '34', '38'],
        mDefIncreaseExt: ['10', '11', '11', '11', '11', '11', '11', '11', '11', '11', '12'],
        mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '11', '11', '11', '11', '11', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 180,
      mAtk: 193,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HEAL"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Rifle of Levin": new Weapon({
    id: 52019,
    name: 'Rifle of Levin',
    character: characters[52],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15201901,
      name: 'Thundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['300', '350', '350', '350', '350', '350', '410', '410', '410', '410', '420']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 220,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Water Resist."],
      reinforcementAbilities["Boost ATK"]
    ]
  }),
  "Holiday Revolver": new Weapon({
    id: 52020,
    name: 'Holiday Revolver',
    character: characters[52],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 15202001,
      name: 'Rock Blast',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['440', '530', '530', '530', '530', '530', '660', '660', '660', '660', '800']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 275,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Vivi's Magical Gun": new Weapon({
    id: 52021,
    name: 'Vivi\'s Magical Gun',
    character: characters[52],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15202101,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 184,
      mAtk: 199,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost ATK"],
      reinforcementAbilities["Boost Limit Break Pot."]
    ]
  }),
  "Rose Musket": new Weapon({
    id: 52022,
    name: 'Rose Musket',
    character: characters[52],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15202201,
      name: 'Blazing Rose',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        mDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        mDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 210,
      mAtk: 275,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Mag. Ability Pot."],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Turks' Rifle": new Weapon({
    id: 52023,
    name: 'Turks\' Rifle',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15202301,
      name: 'Armora Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '350', '350', '350', '350', '360'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '25', '25', '25', '25', '28'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 215,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Marine Shooter": new Weapon({
    id: 52025,
    name: 'Marine Shooter',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15202501,
      name: 'Bullet Hail',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', null)}\nAlso, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Fire Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['350', '400', '400', '400', '400', '400', '490', '490', '490', '490', '560'],
        pAtkDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pAtkDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 277,
      mAtk: 212,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Phys. Ability Pot."],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Nightjar": new Weapon({
    id: 52013,
    name: 'Nightjar',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201301,
      name: 'Nightglint',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen Buff is granted to [Rng.: Self], ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        pDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        mDefDecreasePot: ['Low', 'Low', 'Low', 'Low', 'Low', 'Low', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        mDefDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 247,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Ultimate V39": new UltimateWeapon({
    id: 52026,
    name: 'Ultimate V39',
    character: characters[52],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Boost Volley',
      sigil: null,
      description: `${increase('PATK', 'High', 'Single Ally', null, 30, 30, 'High')}\nAlso, ${increase('MATK', 'High', 'Single Ally', null, 30, 30, 'High')}\n${heal(5, 'Mag.', 'Single Ally')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 164,
      mAtk: 164,
      heal: 143
    },
    reinforcementAbilities: [
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"],
      reinforcementAbilities["Boost PDEF"]
    ]
  }),
  "Eligor Rifle": new Weapon({
    id: 52027,
    name: 'Eligor Rifle',
    character: characters[52],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 15202701,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '240', '240', '240', '240', '240', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 194,
      mAtk: 222,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ice Pot."]
    ]
  }),
  "Type-90 Longsword": new Weapon({
    id: 56001,
    name: 'Type-90 Longsword',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600101,
      name: 'Rapid Blade',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${apply('Provoke', null, 'Self', null, 60, 0)}\n${regen('Self', undefined, 3)}`,
      valuesByOverboostLevel: {
        damage: ['400', '480', '480', '480', '480', '480', '620', '620', '620', '620', '750'],
        regenDur: ['3', '3', '3', '3', '3', '3', '6', '6', '6', '6', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 225,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Greatsword (A)": new Weapon({
    id: 56002,
    name: 'Greatsword (A)',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600201,
      name: 'Crushing Swing',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PDEF', undefined, 'All Enemies', null, undefined, undefined, 'High')}\n${apply('Veil', undefined, 'Self', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['340', '390', '390', '390', '390', '390', '480', '480', '480', '480', '540'],
        pDefDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        veilPot: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        veilDur: ['40', '45', '45', '45', '45', '45', '50', '50', '50', '50', '60'],
        veilExt: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '12']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 260,
      mAtk: 235,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Type-91 Two-Hander": new Weapon({
    id: 56003,
    name: 'Type-91 Two-Hander',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600301,
      name: 'Flash Thrust',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Mid', 'Single Enemy', null, undefined, undefined, undefined)}\n${conditionHP('Self', '50', 'more')}, ${decrease('MATK', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '300', '300', '300', '300', '300', '360', '360', '360', '360', '420'],
        pAtkDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        pAtkDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8'],
        pAtkDecreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['16', '18', '18', '18', '18', '18', '20', '20', '20', '20', '24'],
        mAtkDecreaseExt: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 264,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Ability Pot."]
    ]
  }),
  "Shinra Greatsword: Model I": new Weapon({
    id: 56004,
    name: 'Shinra Greatsword: Model I',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600401,
      name: 'Shock Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${apply('Veil', undefined, 'Self', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        earthResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        earthResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        earthResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        veilPot: ['5', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
        veilDur: ['40', '45', '45', '45', '45', '45', '50', '50', '50', '50', '60'],
        veilExt: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '12']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 207,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "CC Alloy Greatsword": new Weapon({
    id: 56005,
    name: 'CC Alloy Greatsword',
    character: characters[56],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15600501,
      name: 'Thundaga Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['500', '600', '600', '600', '600', '600', '740', '740', '740', '740', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 277,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Lightning Pot."]
    ]
  }),
  "Stalwart Integrity": new Weapon({
    id: 56006,
    name: 'Stalwart Integrity',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600601,
      name: 'Fortress Guard',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\n${conditionHP('Self', '70', 'more')}, ${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6'],
        heal: ['5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7'],
        pAtkIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['12', '16', '16', '16', '16', '16', '16', '16', '16', '16', '20'],
        pAtkIncreaseExt: ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 214,
      heal: 212
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Buff/Debuff Extension (Stats/Pot./Res.)"]
    ]
  }),
  "Innocent Warrior": new Weapon({
    id: 56007,
    name: 'Innocent Warrior',
    character: characters[56],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15600701,
      name: 'Firaga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['280', '340', '340', '340', '340', '340', '440', '440', '440', '440', '520']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 254,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost MATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Gargantuan Monolith": new Weapon({
    id: 56008,
    name: 'Gargantuan Monolith',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600801,
      name: 'Mark of Bravery',
      atbCost: 4,
      sigil: null,
      description: `${apply('Provoke', null, 'Self', null, 60, 0)}\nAlso, ${increase('MDEF', undefined, 'Self', null, undefined, undefined, 'High')}\n${heal(undefined, 'Phys.', 'Self')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['36', '40', '40', '40', '40', '40', '40', '40', '40', '40', '44'],
        mDefIncreaseExt: ['12', '13', '13', '13', '13', '13', '13', '13', '13', '13', '14'],
        heal: ['11', '13', '13', '13', '13', '13', '14', '14', '14', '14', '15']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 214,
      heal: 203
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Sequoiadendron": new Weapon({
    id: 56009,
    name: 'Sequoiadendron',
    character: characters[56],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 15600901,
      name: 'Earthly Horn',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Earth', 'Single Enemy', null)} The lower your HP, the higher the ability pot. (max: x2).`,
      valuesByOverboostLevel: {
        damage: ['320', '380', '380', '380', '380', '380', '500', '500', '500', '500', '600']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 270,
      mAtk: 201,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Earth Pot."]
    ]
  }),
  "Tranquility": new Weapon({
    id: 56010,
    name: 'Tranquility',
    character: characters[56],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15601001,
      name: 'Smashing Splash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}\nAlso, ${apply('Provoke', null, 'Self', null, 60, 0)}\n${apply('Veil', undefined, 'Self', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940'],
        veilPot: ['5', '', '', '', '', '', '8', '8', '8', '8', '10'],
        veilDur: ['40', '', '', '', '', '', '50', '50', '50', '50', '60'],
        veilExt: ['8', '', '', '', '', '', '10', '10', '10', '10', '12']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 285,
      mAtk: 199,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK (All Allies)"],
      reinforcementAbilities["Boost Water Pot."]
    ]
  }),
  "Orchard Shovel": new Weapon({
    id: 56011,
    name: 'Orchard Shovel',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15601101,
      name: 'Good Harvest',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)} The lower your HP, the higher the ability pot. (max: x3).\nAlso, ${apply('Provoke', null, 'Self', null, 60, 0)}`,
      valuesByOverboostLevel: {
        damage: ['210', '260', '260', '260', '260', '260', '370', '370', '370', '370', '490']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 236,
      mAtk: 186,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Earth Resist."],
      reinforcementAbilities["Boost PDEF (All Allies)"]
    ]
  }),
  "Ultimate Type-90 Longsword": new UltimateWeapon({
    id: 56012,
    name: 'Ultimate Type-90 Longsword',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: null,
      name: 'Unyielding Keeper',
      sigil: null,
      description: `${increase('PDEF', 'Mid', 'All Allies', null, 20, 20, 'High')}\nAlso, ${increase('MDEF', 'Mid', 'All Allies', null, 20, 20, 'High')}\n${heal(5, 'Mag.', 'All Allies')}\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 171,
      mAtk: 172,
      heal: 130
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PDEF"],
      reinforcementAbilities["Boost MDEF"]
    ]
  }),
  "Cyan's Blade": new Weapon({
    id: 56013,
    name: 'Cyan\'s Blade',
    character: characters[56],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 15601301,
      name: 'Blizzara Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 199,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Phys. Ability Pot."]
    ]
  }),
  "Volcanic Heat": new Weapon({
    id: 56015,
    name: 'Volcanic Heat',
    character: characters[56],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15601501,
      name: 'Volcanic Swing',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}\nAlso, ${conditionHP('Self', '50', 'more')}, ${decrease('Fire Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${apply('Veil', 5, 'Self', null, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['390', '450', '450', '450', '450', '450', '550', '550', '550', '550', '620'],
        fireResistDecreasePot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '22', '22', '22', '22', '22', '26', '26', '26', '26', '30'],
        fireResistDecreaseExt: ['6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '10'],
        veilDur: ['40', '45', '45', '45', '45', '45', '50', '50', '50', '50', '60'],
        veilExt: ['8', '9', '9', '9', '9', '9', '10', '10', '10', '10', '12']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 283,
      mAtk: 207,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost PATK"],
      reinforcementAbilities["Boost Fire Pot."]
    ]
  }),
  "Turks' Blade": new Weapon({
    id: 56017,
    name: 'Turks\' Blade',
    character: characters[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15601701,
      name: 'Debravera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '210', '210', '210', '210', '210', '240', '240', '240', '240', '250'],
        pAtkDecreaseDur: ['20', '25', '25', '25', '25', '25', '30', '30', '30', '30', '35'],
        pAtkDecreaseExt: ['5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 220,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost HP"],
      reinforcementAbilities["Boost Mag. Ability Pot."]
    ]
  }),
  "Titan Blade": new Weapon({
    id: 56016,
    name: 'Titan Blade',
    character: characters[56],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 15601601,
      name: 'Quakera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '370', '370', '370', '370', '370', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 225,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilities["Boost Wind Resist."],
      reinforcementAbilities["Boost PDEF"]
    ]
  })
};

type Range = 'Single Enemy' | 'All Enemies' | 'Single Ally' | 'All Allies' | 'Self' | 'Affected Targets' | 'Ally (Excluding Self)' | null;
type CriticalRate = number | null;
type Effect = 'Ailment: Stun' | 'Ailment: Poison' | 'Ailment: Silence' | 'Haste' | 'Provoke' | 'Veil' | 'Exploit Weakness' | 'Status Ailment: Stop' | 'Status Ailment: Enfeeble';
type Attribute = 'PATK' | 'MATK' | 'PDEF' | 'MDEF' | 'Fire Resist.' | 'Ice Resist.' | 'Thunder Resist.' | 'Earth Resist.' | 'Water Resist.' | 'Wind Resist.' | 'Fire Damage' | 'Ice Damage' | 'Lightning Damage' | 'Earth Damage' | 'Water Damage' | 'Wind Damage' | 'Physical Resistance' | 'Magic Resistance';
type Element = 'Non-elem.' | 'Fire' | 'Ice' | 'Lightning' | 'Earth' | 'Water' | 'Wind';
type Damage = string | undefined;
type DamageType = `Phys. ${Element}` | `Mag. ${Element}` | `Phys./Mag. ${Element}`;
type Heal = number | undefined;
type HealType = 'Mag.' | 'Phys.';
type Potency = 'Low' | 'Mid' | 'High' | 'Extra High' | `+${number}%` | undefined;
type Rate = number | undefined | null;
type Duration = number | undefined;
type Extension = number | undefined;
type AdditionalDamageType = 'Phys.' | 'Mag.';
type AmpAbilitiesType = 'Phys.' | 'Mag.';
type Quantifier = 'less' | 'more';

function getAttributeKey(attribute: Attribute) {
  const attributeMap: { [K in Attribute]: string } = {
    'PATK': 'pAtk',
    'MATK': 'mAtk',
    'PDEF': 'pDef',
    'MDEF': 'mDef',
    'Fire Resist.': 'fireResist',
    'Ice Resist.': 'iceResist',
    'Thunder Resist.': 'lightningResist',
    'Earth Resist.': 'earthResist',
    'Water Resist.': 'waterResist',
    'Wind Resist.': 'windResist',
    'Fire Damage': 'fireDamage',
    'Ice Damage': 'iceDamage',
    'Lightning Damage': 'lightningDamage',
    'Earth Damage': 'earthDamage',
    'Water Damage': 'waterDamage',
    'Wind Damage': 'windDamage',
    'Physical Resistance': 'physicalResistance',
    'Magic Resistance': 'magicResistance'
  };
  return attributeMap[attribute];
}

function damage(damage: Damage, type: DamageType, range: Range, critRate: CriticalRate) {
  const dmg = damage ? damage : `{{damage}}`;
  const critRateString = critRate === null      ? ''                              :
                         critRate === undefined ? ` ([Crit rate: {{critRate}}%])` :
                                                  ` ([Crit rate: ${critRate}%])`  ;
  return `Deal ${dmg}% ${type} damage [Rng.: ${range}]${critRateString}.`;
}

function decrease(attribute: Attribute, potency: Potency, range: Range, rate: Rate, duration: Duration, extension: Extension, maxPotency: Potency) {
  const attributeKey = getAttributeKey(attribute);
  const pot = potency ? potency : `{{${attributeKey}DecreasePot}}`;
  const rateString = rate === null      ? ''                                          :
                     rate === undefined ? ` [Rate: {{${attributeKey}DecreaseRate}}%]` :
                                          ` [Rate: ${rate}%]`                         ;
  const dur = duration ? duration : `{{${attributeKey}DecreaseDur}}`;
  const ext = extension ? extension : `{{${attributeKey}DecreaseExt}}`;
  const maxPot = maxPotency ? maxPotency : `{{${attributeKey}DecreaseMaxPot}}`;
  return `${attribute} is decreased. [Pot.: ${pot}]${rateString} [Rng.: ${range}] [Dur.: ${dur}s]. [Ext.: +${ext}s] [Max. pot.: ${maxPot}]`;
}

function increase(attribute: Attribute, potency: Potency, range: Range, rate: Rate, duration: Duration, extension: Extension, maxPotency: Potency | null) {
  const attributeKey = getAttributeKey(attribute);
  const pot = potency ? potency : `{{${attributeKey}IncreasePot}}`;
  const rateString = rate === null      ? ''                                          :
                     rate === undefined ? ` [Rate: {{${attributeKey}IncreaseRate}}%]` :
                                          ` [Rate: ${rate}%]`                         ;
  const dur = duration ? duration : `{{${attributeKey}IncreaseDur}}`;
  const ext = typeof extension === 'number' ? extension : `{{${attributeKey}IncreaseExt}}`;
  const maxPotString = maxPotency === null      ?  ''                                               :
                       maxPotency === undefined ? ` [Max. pot.: {{${attributeKey}IncreaseMaxPot}}]` :
                                                  ` [Max. pot.: ${maxPotency}]`                     ;
  return `${attribute} is increased. [Pot.: ${pot}]${rateString} [Rng.: ${range}] [Dur.: ${dur}s]. [Ext.: +${ext}s]${maxPotString}`;
}

function heal(heal: Heal, type: HealType, range: Range) {
  const hl = heal ? heal : `{{heal}}`;
  return `${type} heal is cast. [Pot.: ${hl}% of Healing Pot.] [Rng.: ${range}]`;
}

function regen(range: Range, duration: Duration, extension: Extension) {
  const dur = duration ? duration : '{{regenDur}}';
  const ext = extension ? extension : '{{regenExt}}';
  return `Regen is applied [Rng.: ${range}]. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function apply(effect: Effect, potency: number | null | undefined, range: Range, rate: Rate, duration: Duration, extension: Extension) {
  const effectMap: { [K in Effect]: string } = {
    'Ailment: Stun': 'stun',
    'Ailment: Poison': 'poison',
    'Ailment: Silence': 'silence',
    'Haste': 'haste',
    'Provoke': 'provoke',
    'Veil': 'veil',
    'Exploit Weakness': 'exploitWeakness',
    'Status Ailment: Stop': 'stop',
    'Status Ailment: Enfeeble': 'enfeeble'
  }
  const effectKey = effectMap[effect];
  const rateString = rate === null      ? ''                               :
                     rate === undefined ? ` [Rate: {{${effectKey}Rate}}%]` :
                                          ` [Rate: ${rate}%]`              ;
  const potencyString = potency === null      ? '' :
                        potency === undefined ? ` [Pot.: {{${effectKey}Pot}}%${effect === 'Veil' ? ' of max HP of the affected' : ''}]` :
                                                ` [Pot.: ${potency}%${effect === 'Veil' ? ' of max HP of the affected' : ''}]` ;
  const dur = duration === undefined ? `{{${effectKey}Dur}}` : duration;
  const ext = extension === undefined ? `{{${effectKey}Ext}}` : extension;
  return `${effect}${potencyString} is applied [Rng.: ${range}]${rateString}. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function remove(effect: string, range: Range) {
  return `Removes ${effect} [Rng.: ${range}].`;
}

function increaseLimitGauge(potency: number | undefined, range: Range) {
  const pot = potency ? potency : '{{limitGaugeIncreasePot}}';
  return `Increases Limit Gauge [Pot.: ${pot}%] [Rng.: ${range}].`;
}

function increaseCommandGauge(potency: number | undefined) {
  const pot = potency ? potency : '{{commandGaugeIncreasePot}}';
  return `Increases Command Gauge [Pot.: ${pot}%]`;
}

function additionalDamage(element: Element, type: AdditionalDamageType, range: Range) {
  return `deals {{additionalDamage}} additional ${element} ${type} pot. damage [Rng.: ${range}].`;
}

function increaseATBGauge(increase: number, range: Range) {
  return `+${increase} ATB Gauge [Rng.: ${range}].`;
}

function conditionHP(range: Range, threshold: string | undefined, quantifier: Quantifier) {
  const thr = threshold ? threshold : '{{conditionHPThreshold}}';
  return `When [Rng.: ${range}]'s HP is ${thr}% or ${quantifier}`;
}

function chargeAndUses(charge: number, initial: number | null, uses: number) {
  const ini = initial === null ? '' :
                                 ` (Initial: ${initial}s)` ;
  return `Charge: ${charge}s${ini}/Uses: ${uses}`;
}

function restoreMaxHP(percentage: number, type: HealType, range: Range) {
  const pct = percentage ? percentage : '{{restorePercentage}}';
  return `Restores ${pct}% of max HP [${type}] [Rng.: ${range}].`
}

function exploitWeakness(range: Range, potency: Potency, duration: Duration, extension: Extension) {
  const pot = potency === undefined ? '{{exploitWeaknessPot}}' : potency;
  const dur = duration === undefined ? '{{exploitWeaknessDur}}' : duration;
  const ext = extension === undefined ? '{{exploitWeaknessExt}}' : extension;
  return `Applies Exploit Weakness [Rng.: ${range}] [Pot.: ${pot}%] [Dur.: ${dur}s] [Dur. Ext.: +${ext}s]`;
}

function ampAbilities(type: AmpAbilitiesType, range: Range, abilityDamage: string | undefined, duration: Duration, extension: Extension) {
  const abilityDmg = abilityDamage === undefined ? '{{ampPhysAbilitiesAbilityDmg}}' : abilityDamage;
  const dur = duration === undefined ? '{{ampPhysAbilitiesDur}}' : duration;
  const ext = extension === undefined ? '{{ampPhysAbilitiesExt}}' : extension;
  return `Applies Amp. ${type} Abilities [Rng.: ${range}] [Next ${type} C./UC. Ability: Dmg +${abilityDmg}%] [Dur.: ${dur}s] [Ext.: ${ext}s]`;
}
