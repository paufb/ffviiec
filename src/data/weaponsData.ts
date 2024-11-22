import { CommandAbility } from '../models/CommandAbility.ts';
import { UltimateCommandAbility } from '../models/UltimateCommandAbility.ts';
import { UltimateWeapon } from '../models/UltimateWeapon.ts';
import { Weapon } from '../models/Weapon.ts';
import { Weapons } from '../types.ts';
import { charactersData } from './charactersData.ts';
import { reinforcementAbilitiesData } from './reinforcementAbilitiesData.ts';

export const weaponsData: Weapons = {
  "Buster Sword": new Weapon({
    id: 1001,
    name: 'Buster Sword',
    character: charactersData[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100101,
      name: 'Braver',
      atbCost: 4,
      sigil: 'cross',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, when matching sigils are destroyed, x1.5 damage.`,
      valuesByOverboostLevel: {
        damage: ['400', '', '', '', '', '', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 252,
      mAtk: 220,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[11001]
    ]
  }),
  "Iron Blade": new Weapon({
    id: 1002,
    name: 'Iron Blade',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Hardedge": new Weapon({
    id: 1003,
    name: 'Hardedge',
    character: charactersData[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10100301,
      name: 'Armor Break',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '450', '450', '450', '450', '510'],
        pDefDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['20', '', '', '', '', '', '22', '22', '22', '22', '25'],
        pDefDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 262,
      mAtk: 220,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30701]
    ]
  }),
  "Mythril Saber": new Weapon({
    id: 1004,
    name: 'Mythril Saber',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Butterfly Edge": new Weapon({
    id: 1006,
    name: 'Butterfly Edge',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Murasame": new Weapon({
    id: 1007,
    name: 'Murasame',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Organics": new Weapon({
    id: 1008,
    name: 'Organics',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Crystal Sword": new Weapon({
    id: 1009,
    name: 'Crystal Sword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30501]
    ]
  }),
  "Enhance Sword": new Weapon({
    id: 1012,
    name: 'Enhance Sword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Nail Bat": new Weapon({
    id: 1013,
    name: 'Nail Bat',
    character: charactersData[1],
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
      reinforcementAbilitiesData[30201],
      reinforcementAbilitiesData[51801]
    ]
  }),
  "Apocalypse": new Weapon({
    id: 1015,
    name: 'Apocalypse',
    character: charactersData[1],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Maritime Sword": new Weapon({
    id: 1020,
    name: 'Maritime Sword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Shiva's Blade": new Weapon({
    id: 1024,
    name: 'Shiva\'s Blade',
    character: charactersData[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10102401,
      name: 'Blizzara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 233,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30201],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Bandaged Sword": new Weapon({
    id: 1025,
    name: 'Bandaged Sword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Skysplitter": new Weapon({
    id: 1028,
    name: 'Skysplitter',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Zidane's Sword": new Weapon({
    id: 1029,
    name: 'Zidane\'s Sword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Holiday Cheer": new Weapon({
    id: 1030,
    name: 'Holiday Cheer',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Stream Saber": new Weapon({
    id: 1031,
    name: 'Stream Saber',
    character: charactersData[1],
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
      reinforcementAbilitiesData[11201],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Igneous Saber": new Weapon({
    id: 1032,
    name: 'Igneous Saber',
    character: charactersData[1],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Glavenus Sword": new Weapon({
    id: 1033,
    name: 'Glavenus Sword',
    character: charactersData[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10103301,
      name: 'Fierce Charged Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase('PATK', undefined, 'Self', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['530', '', '', '', '', '', '740', '740', '740', '740', '850'],
        pDefDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10'],
        pAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['25', '', '', '', '', '', '30', '30', '30', '30', '35'],
        pAtkIncreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '7'],
        pAtkIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 288,
      mAtk: 220,
      heal: 151
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Rune Blade": new Weapon({
    id: 1034,
    name: 'Rune Blade',
    character: charactersData[1],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10103401,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 220,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Burning Oar": new Weapon({
    id: 1035,
    name: 'Burning Oar',
    character: charactersData[1],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10103501,
      name: 'Fira Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 225,
      mAtk: 204,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Bahamut Greatsword": new Weapon({
    id: 1036,
    name: 'Bahamut Greatsword',
    character: charactersData[1],
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
      reinforcementAbilitiesData[11201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Ultimate Buster Sword": new UltimateWeapon({
    id: 1037,
    name: 'Ultimate Buster Sword',
    character: charactersData[1],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10103701,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Locke's Sword": new Weapon({
    id: null,
    name: 'Locke\'s Sword',
    character: charactersData[1],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Gatling Gun": new Weapon({
    id: 2001,
    name: 'Gatling Gun',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10200101,
      name: 'Blitz Beat',
      atbCost: 4,
      sigil: 'cross',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['400', '', '', '', '', '', '620', '620', '620', '620', '750']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 254,
      mAtk: 218,
      heal: 181
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[30601]
    ]
  }),
  "Assault Gun": new Weapon({
    id: 2002,
    name: 'Assault Gun',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Heavy Vulcan": new Weapon({
    id: 2007,
    name: 'Heavy Vulcan',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Microlaser": new Weapon({
    id: 2008,
    name: 'Microlaser',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "W Machine": new Weapon({
    id: 2010,
    name: 'W Machine',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Solid Bazooka": new Weapon({
    id: 2011,
    name: 'Solid Bazooka',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Enemy Launcher": new Weapon({
    id: 2012,
    name: 'Enemy Launcher',
    character: charactersData[2],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Max Ray": new Weapon({
    id: 2013,
    name: 'Max Ray',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Flame Projector": new Weapon({
    id: 2015,
    name: 'Flame Projector',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Heavy Hauser": new Weapon({
    id: 2018,
    name: 'Heavy Hauser',
    character: charactersData[2],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Lefko Kypseli": new Weapon({
    id: 2019,
    name: 'Lefko Kypseli',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10201901,
      name: 'Solid Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreaseDur: ['30', '', '', '', '', '', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '', '', '', '', '', '11', '11', '11', '11', '12'],
        pDefIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '', '', '', '', '', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 201,
      mAtk: 205,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Rocket Punch": new Weapon({
    id: 2020,
    name: 'Rocket Punch',
    character: charactersData[2],
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
      reinforcementAbilitiesData[30501],
      reinforcementAbilitiesData[11401]
    ]
  }),
  "Shiva Cannon": new Weapon({
    id: 2022,
    name: 'Shiva Cannon',
    character: charactersData[2],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10202201,
      name: 'Blizzara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 222,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30201],
      reinforcementAbilitiesData[11001]
    ]
  }),
  "Hell House Cannon": new Weapon({
    id: 2024,
    name: 'Hell House Cannon',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10202401,
      name: 'Manara Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '350', '350', '350', '350', '360'],
        mDefDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '28'],
        mDefDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 214,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Siege Cannon": new Weapon({
    id: 2025,
    name: 'Siege Cannon',
    character: charactersData[2],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10202501,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 215,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Electrocannon": new Weapon({
    id: 2017,
    name: 'Electrocannon',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Leviathan Buster": new Weapon({
    id: 2027,
    name: 'Leviathan Buster',
    character: charactersData[2],
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
      reinforcementAbilitiesData[30401],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Sharkslayer": new Weapon({
    id: 2021,
    name: 'Sharkslayer',
    character: charactersData[2],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Ultimate Gatling Gun": new UltimateWeapon({
    id: 2031,
    name: 'Ultimate Gatling Gun',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10203101,
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Rhad Cannon": new Weapon({
    id: 2029,
    name: 'Rhad Cannon',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Escutcheon Cannon": new Weapon({
    id: 2032,
    name: 'Escutcheon Cannon',
    character: charactersData[2],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10203201,
      name: 'Zone of Protection',
      atbCost: 4,
      sigil: null,
      description: `${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${conditionHP('Self', '70', 'more')}, ${increase('MATK', undefined, 'All Allies', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
      valuesByOverboostLevel: {
        mDefIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mDefIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        mDefIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        mAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mAtkIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        mAtkIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        heal: ['5', '', '', '', '', '', '7', '7', '7', '7', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 254,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Leather Gloves": new Weapon({
    id: 3001,
    name: 'Leather Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Grand Gloves": new Weapon({
    id: 3005,
    name: 'Grand Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Sonic Striker": new Weapon({
    id: 3006,
    name: 'Sonic Striker',
    character: charactersData[3],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30601]
    ]
  }),
  "Tiger Fangs": new Weapon({
    id: 3007,
    name: 'Tiger Fangs',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Crystal Gloves": new Weapon({
    id: 3010,
    name: 'Crystal Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Motor Drive": new Weapon({
    id: 3011,
    name: 'Motor Drive',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Kaiser Knuckles": new Weapon({
    id: 3013,
    name: 'Kaiser Knuckles',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Work Gloves": new Weapon({
    id: 3014,
    name: 'Work Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[51801]
    ]
  }),
  "Powersoul": new Weapon({
    id: 3015,
    name: 'Powersoul',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Lifeguard Wraps": new Weapon({
    id: 3019,
    name: 'Lifeguard Wraps',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "Feathered Gloves": new Weapon({
    id: 3020,
    name: 'Feathered Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Bahamut Knuckles": new Weapon({
    id: 3024,
    name: 'Bahamut Knuckles',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Holy Flame Gloves": new Weapon({
    id: 3025,
    name: 'Holy Flame Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Amarant's Claws": new Weapon({
    id: 3027,
    name: 'Amarant\'s Claws',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Bunny Gloves": new Weapon({
    id: 3028,
    name: 'Bunny Gloves',
    character: charactersData[3],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10302801,
      name: 'Aqua Splash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase('MATK', 'Low', 'Self', null, undefined, undefined, undefined)}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Oven Mitts": new Weapon({
    id: 3029,
    name: 'Oven Mitts',
    character: charactersData[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10302901,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '', '', '', '', '', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '', '', '', '', '', '13', '13', '13', '13', '14'],
        regenDur: ['9', '', '', '', '', '', '12', '12', '12', '12', '15'],
        heal: ['9', '', '', '', '', '', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 222,
      mAtk: 212,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Turks' Gloves": new Weapon({
    id: 3030,
    name: 'Turks\' Gloves',
    character: charactersData[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Armora Breach Surge',
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
      pAtk: 226,
      mAtk: 207,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Guide Gloves": new Weapon({
    id: 3031,
    name: 'Guide Gloves',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Kirin Gloves": new Weapon({
    id: 3032,
    name: 'Kirin Gloves',
    character: charactersData[3],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10303201,
      name: 'Spiral Levin Strike',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase('MATK', undefined, 'Self', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940'],
        mAtkIncreasePot: ['Low', '', '', '', '', '', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mAtkIncreaseDur: ['25', '', '', '', '', '', '30', '30', '30', '30', '35'],
        mAtkIncreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '7']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 283,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Shell Knuckles": new Weapon({
    id: 3033,
    name: 'Shell Knuckles',
    character: charactersData[3],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10303301,
      name: 'Spinning Fervor',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '810', '810', '810', '810', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 275,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Steward Gloves": new Weapon({
    id: 3034,
    name: 'Steward Gloves',
    character: charactersData[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Debravera Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 218,
      mAtk: 222,
      heal: 154
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Bahamut Fangs": new Weapon({
    id: 3035,
    name: 'Bahamut Fangs',
    character: charactersData[3],
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
      reinforcementAbilitiesData[11301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Ultimate Leather Gloves": new UltimateWeapon({
    id: 3037,
    name: 'Ultimate Leather Gloves',
    character: charactersData[3],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10303701,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Black Cat's Paws": new Weapon({
    id: 3036,
    name: 'Black Cat\'s Paws',
    character: charactersData[3],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Sabin's Claws": new Weapon({
    id: null,
    name: 'Sabin\'s Claws',
    character: charactersData[3],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Guard Stick": new Weapon({
    id: 4001,
    name: 'Guard Stick',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Silver Staff": new Weapon({
    id: 4002,
    name: 'Silver Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Striking Staff": new Weapon({
    id: 4003,
    name: 'Striking Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Mythril Rod": new Weapon({
    id: 4004,
    name: 'Mythril Rod',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Full Metal Staff": new Weapon({
    id: 4005,
    name: 'Full Metal Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Prism Rod": new Weapon({
    id: 4007,
    name: 'Prism Rod',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Fairy Tale": new Weapon({
    id: 4008,
    name: 'Fairy Tale',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30501]
    ]
  }),
  "Wizard Staff": new Weapon({
    id: 4009,
    name: 'Wizard Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Wizer Staff": new Weapon({
    id: 4010,
    name: 'Wizer Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Sun Umbrella": new Weapon({
    id: 4014,
    name: 'Sun Umbrella',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Floral Wand": new Weapon({
    id: 4015,
    name: 'Floral Wand',
    character: charactersData[4],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Umbrella": new Weapon({
    id: 4016,
    name: 'Umbrella',
    character: charactersData[4],
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
      reinforcementAbilitiesData[30401],
      reinforcementAbilitiesData[11501]
    ]
  }),
  "Chocobo Staff": new Weapon({
    id: 4019,
    name: 'Chocobo Staff',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Snowflake": new Weapon({
    id: 4020,
    name: 'Snowflake',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Ramuh's Staff": new Weapon({
    id: 4021,
    name: 'Ramuh\'s Staff',
    character: charactersData[4],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10402101,
      name: 'Thundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['340', '', '', '', '', '', '460', '460', '460', '460', '480']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 226,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30601],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Garnet's Rod": new Weapon({
    id: 4022,
    name: 'Garnet\'s Rod',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Egg Staff": new Weapon({
    id: 4023,
    name: 'Egg Staff',
    character: charactersData[4],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10402301,
      name: 'Helical Flame',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}\nAlso, against a single target, x1.3 damage.`,
      valuesByOverboostLevel: {
        damage: ['340', '', '', '', '', '', '530', '530', '530', '530', '630']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 278,
      heal: 182
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Dawn's Prayers": new Weapon({
    id: 4024,
    name: 'Dawn\'s Prayers',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Kamura Wand": new Weapon({
    id: 4025,
    name: 'Kamura Wand',
    character: charactersData[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10402501,
      name: 'Spiritual Harmony',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, when [Rng.: Self]'s HP is 70% or more, ${increase('MDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\n${heal(undefined, 'Mag.', 'All Allies')}`,
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Radrod": new Weapon({
    id: 4026,
    name: 'Radrod',
    character: charactersData[4],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 222,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Hell House Rod": new Weapon({
    id: 4027,
    name: 'Hell House Rod',
    character: charactersData[4],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 226,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Citric Wand": new Weapon({
    id: 4028,
    name: 'Citric Wand',
    character: charactersData[4],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Bahamut Rod": new Weapon({
    id: 4029,
    name: 'Bahamut Rod',
    character: charactersData[4],
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
      reinforcementAbilitiesData[11301],
      reinforcementAbilitiesData[10601]
    ]
  }),
  "Ultimate Guard Stick": new UltimateWeapon({
    id: 4030,
    name: 'Ultimate Guard Stick',
    character: charactersData[4],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10403001,
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Terra's Rod": new Weapon({
    id: 4031,
    name: 'Terra\'s Rod',
    character: charactersData[4],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10403101,
      name: 'Riot Blade',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}\n${decrease('Ice Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}\n${decrease('Thunder Resist.', undefined, 'All Enemies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['470', '', '', '', '', '', '660', '660', '660', '660', '750'],
        fireResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        fireResistDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '35'],
        fireResistDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '11'],
        iceResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '35'],
        iceResistDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '11'],
        lightningResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '35'],
        lightningResistDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '11']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 186,
      mAtk: 275,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Princess Guard": new UltimateWeapon({
    id: 4036,
    name: 'Princess Guard',
    character: charactersData[4],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10403601,
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[53901]
    ]
  }),
  "Sleek Collar": new Weapon({
    id: 5001,
    name: 'Sleek Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[30701]
    ]
  }),
  "Gold Collar": new Weapon({
    id: 5005,
    name: 'Gold Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[30501]
    ]
  }),
  "Platinum Collar": new Weapon({
    id: 5009,
    name: 'Platinum Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Noble Collar": new Weapon({
    id: 5016,
    name: 'Noble Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Rage Collar": new Weapon({
    id: 5018,
    name: 'Rage Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Leather Collar": new Weapon({
    id: 5019,
    name: 'Leather Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Rubber Collar": new Weapon({
    id: 5020,
    name: 'Rubber Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Junk Collar": new Weapon({
    id: 5021,
    name: 'Junk Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "Canyon Collar": new Weapon({
    id: 5023,
    name: 'Canyon Collar',
    character: charactersData[5],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10502301,
      name: 'Canyon Gale',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('MDEF', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Iron Collar": new Weapon({
    id: 5026,
    name: 'Iron Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Headphones": new Weapon({
    id: 5027,
    name: 'Headphones',
    character: charactersData[5],
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
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[11501]
    ]
  }),
  "Seaside Collar": new Weapon({
    id: 5028,
    name: 'Seaside Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Hell House Collar": new Weapon({
    id: 5031,
    name: 'Hell House Collar',
    character: charactersData[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10503101,
      name: 'Manara Breach Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '350', '350', '350', '350', '360'],
        mDefDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '28'],
        mDefDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 220,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Flame Dragon's Band": new Weapon({
    id: 5032,
    name: 'Flame Dragon\'s Band',
    character: charactersData[5],
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
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Egg Collar": new Weapon({
    id: 5033,
    name: 'Egg Collar',
    character: charactersData[5],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Ivy Collar": new Weapon({
    id: 5017,
    name: 'Ivy Collar',
    character: charactersData[5],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Amethyst Collar": new Weapon({
    id: 5034,
    name: 'Amethyst Collar',
    character: charactersData[5],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10503401,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 191,
      mAtk: 222,
      heal: 177
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Silver Collar": new Weapon({
    id: 5004,
    name: 'Silver Collar',
    character: charactersData[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10500401,
      name: 'Rolling Claw',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('Wind Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['200', '', '', '', '', '', '280', '280', '280', '280', '320'],
        windResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        windResistDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        windResistDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8'],
        waterResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        waterResistDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        waterResistDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 231,
      heal: 215
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Steward Collar": new Weapon({
    id: 5035,
    name: 'Steward Collar',
    character: charactersData[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Ultimate Leather Collar": new UltimateWeapon({
    id: 5036,
    name: 'Ultimate Leather Collar',
    character: charactersData[5],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10503601,
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Pilot's Collar": new Weapon({
    id: 5024,
    name: 'Pilot\'s Collar',
    character: charactersData[5],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10502401,
      name: 'Healing Howl',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'All Allies')}\nAlso, ${increase('MDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        heal: ['42', '', '', '', '', '', '54', '54', '54', '54', '59'],
        mDefIncreaseDur: ['10', '', '', '', '', '', '12', '14', '14', '14', '14'],
        mDefIncreaseExt: ['3', '', '', '', '', '', '4', '4', '4', '4', '4'],
        mDefIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 193,
      mAtk: 215,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Kefka's Collar": new Weapon({
    id: null,
    name: 'Kefka\'s Collar',
    character: charactersData[5],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "4-Point Shuriken": new Weapon({
    id: 6001,
    name: '4-Point Shuriken',
    character: charactersData[6],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10600101,
      name: 'Shuriken Throw',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', undefined, 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['220', '', '', '', '', '', '310', '310', '310', '310', '350'],
        pAtkDecreasePot: ['Low', '', '', '', '', '', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        pAtkDecreaseDur: ['20', '', '', '', '', '', '22', '22', '22', '22', '25'],
        pAtkDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 249,
      mAtk: 218,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Boomerang": new Weapon({
    id: 6002,
    name: 'Boomerang',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Pinwheel": new Weapon({
    id: 6003,
    name: 'Pinwheel',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Razor Ring": new Weapon({
    id: 6004,
    name: 'Razor Ring',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Hawkeye": new Weapon({
    id: 6005,
    name: 'Hawkeye',
    character: charactersData[6],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10600501,
      name: 'Earth Ninjutsu',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Earth', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Crystal Cross": new Weapon({
    id: 6006,
    name: 'Crystal Cross',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Wind Slash": new Weapon({
    id: 6007,
    name: 'Wind Slash',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Twin Viper": new Weapon({
    id: 6008,
    name: 'Twin Viper',
    character: charactersData[6],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Spiral Shuriken": new Weapon({
    id: 6009,
    name: 'Spiral Shuriken',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Magic Shuriken": new Weapon({
    id: 6010,
    name: 'Magic Shuriken',
    character: charactersData[6],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Diner Tray": new Weapon({
    id: 6014,
    name: 'Diner Tray',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Arctic Star": new Weapon({
    id: 6015,
    name: 'Arctic Star',
    character: charactersData[6],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Bamboo Ring": new Weapon({
    id: 6016,
    name: 'Bamboo Ring',
    character: charactersData[6],
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
      reinforcementAbilitiesData[30701],
      reinforcementAbilitiesData[51801]
    ]
  }),
  "Chariot Wheel": new Weapon({
    id: 6022,
    name: 'Chariot Wheel',
    character: charactersData[6],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10602201,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 212,
      heal: 172
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Leviathan Cutter": new Weapon({
    id: 6024,
    name: 'Leviathan Cutter',
    character: charactersData[6],
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
      reinforcementAbilitiesData[30401],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Striped Moogle Float": new Weapon({
    id: 6026,
    name: 'Striped Moogle Float',
    character: charactersData[6],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 10602601,
      name: 'Explosion',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'All Enemies', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase('Fire Damage', 'Low', 'Self', null, undefined, undefined, undefined)}`,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Cactuar Fan": new Weapon({
    id: 6027,
    name: 'Cactuar Fan',
    character: charactersData[6],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 225,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Bahamut Cutter": new Weapon({
    id: 6028,
    name: 'Bahamut Cutter',
    character: charactersData[6],
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
      reinforcementAbilitiesData[11201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Ultimate 4-Point Shuriken": new UltimateWeapon({
    id: 6029,
    name: 'Ultimate 4-Point Shuriken',
    character: charactersData[6],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10602901,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Little Red Wreath": new Weapon({
    id: 6019,
    name: 'Little Red Wreath',
    character: charactersData[6],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 10601901,
      name: 'Icebound',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'Single Enemy', null)}\nAlso, when Debuff is granted to Target, x1.2 damage.`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Yellow Megaphone": new Weapon({
    id: 7001,
    name: 'Yellow Megaphone',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700101,
      name: 'Sonic Meow',
      atbCost: 5,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 30)}\nAlso, when hitting critical, x3 damage.`,
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Green Megaphone": new Weapon({
    id: 7002,
    name: 'Green Megaphone',
    character: charactersData[7],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 10702201,
      name: 'Bloomin\' Spray',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Blue Megaphone": new Weapon({
    id: 7003,
    name: 'Blue Megaphone',
    character: charactersData[7],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Red Megaphone": new Weapon({
    id: 7004,
    name: 'Red Megaphone',
    character: charactersData[7],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Crystal Megaphone": new Weapon({
    id: 7005,
    name: 'Crystal Megaphone',
    character: charactersData[7],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Silver Megaphone": new Weapon({
    id: 7008,
    name: 'Silver Megaphone',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10700801,
      name: 'Spinning Punch',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 20)}\nAlso, ${decrease('PDEF', 'Low', 'Single Enemy', null, undefined, undefined, 'Low')}\nWhen hitting critical, ${decrease('PDEF', 'High', 'Affected Targets', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '450', '450', '450', '450', '510'],
        pDefDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        pDefDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 233,
      mAtk: 228,
      heal: 189
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Gold Megaphone": new Weapon({
    id: 7009,
    name: 'Gold Megaphone',
    character: charactersData[7],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Battle Trumpet": new Weapon({
    id: 7010,
    name: 'Battle Trumpet',
    character: charactersData[7],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Trumpet Shell": new Weapon({
    id: 7011,
    name: 'Trumpet Shell',
    character: charactersData[7],
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
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[11501]
    ]
  }),
  "Marching Horn": new Weapon({
    id: 7014,
    name: 'Marching Horn',
    character: charactersData[7],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Flower Vase": new Weapon({
    id: 7022,
    name: 'Flower Vase',
    character: charactersData[7],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Humus Megaphone": new Weapon({
    id: 7024,
    name: 'Humus Megaphone',
    character: charactersData[7],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10702401,
      name: 'Aerora Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Wind', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 222,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Catsmegaphone": new Weapon({
    id: 7023,
    name: 'Catsmegaphone',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Solid Bravery',
      atbCost: 4,
      sigil: null,
      description: `${increase('PATK', 'Low', 'Single Ally', null, undefined, undefined, 'Mid')}\nAlso, ${regen('Single Ally', undefined, 3)}\n${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pAtkIncreaseDur: ['34', '', '', '', '', '', '40', '40', '40', '40', '44'],
        pAtkIncreaseExt: ['11', '', '', '', '', '', '13', '13', '13', '13', '14'],
        regenDur: ['9', '', '', '', '', '', '12', '12', '12', '12', '15'],
        heal: ['9', '', '', '', '', '', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 201,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Fireworks Megaphone": new Weapon({
    id: 7025,
    name: 'Fireworks Megaphone',
    character: charactersData[7],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Blizzara Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Ice', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 228,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Quina Megaphone": new Weapon({
    id: 7029,
    name: 'Quina Megaphone',
    character: charactersData[7],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Alba Megaphone": new Weapon({
    id: 7026,
    name: 'Alba Megaphone',
    character: charactersData[7],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Ultimate Yellow Megaphone": new UltimateWeapon({
    id: 7028,
    name: 'Ultimate Yellow Megaphone',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10702801,
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
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "HP Shout": new UltimateWeapon({
    id: 7032,
    name: 'HP Shout',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10703201,
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
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[53801]
    ]
  }),
  "Witch's Broom": new Weapon({
    id: 7019,
    name: 'Witch\'s Broom',
    character: charactersData[7],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10701901,
      name: 'Tumbling Tackle',
      atbCost: 3,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('MDEF', 'Mid', 'Single Enemy', null, undefined, undefined, 'Mid')}\n${conditionHP('Self', '50', 'more')}, ${decrease('Thunder Resist.', undefined, 'Single Enemy', null, undefined, undefined, undefined)}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '360', '360', '360', '360', '420'],
        mDefDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        mDefDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8'],
        lightningResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        lightningResistDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        lightningResistDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8'],
        lightningResistDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 256,
      mAtk: 243,
      heal: 158
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Icebolt Megaphone": new Weapon({
    id: 7027,
    name: 'Icebolt Megaphone',
    character: charactersData[7],
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
      reinforcementAbilitiesData[30201],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Cath Palug": new Weapon({
    id: 8002,
    name: 'Cath Palug',
    character: charactersData[8],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Gilded Age": new Weapon({
    id: 8003,
    name: 'Gilded Age',
    character: charactersData[8],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "S1976C": new Weapon({
    id: 8004,
    name: 'S1976C',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800401,
      name: 'Spellgun Shower',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('PATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\n${decrease('MATK', 'Mid', 'All Enemies', null, undefined, undefined, undefined)}\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['340', '', '', '', '', '', '480', '480', '480', '480', '540'],
        pAtkDecreaseDur: ['18', '', '', '', '', '', '20', '20', '20', '20', '25'],
        pAtkDecreaseExt: ['6', '', '', '', '', '', '6', '6', '6', '6', '8'],
        pAtkDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        mAtkDecreaseDur: ['18', '', '', '', '', '', '20', '20', '20', '20', '25'],
        mAtkDecreaseExt: ['6', '', '', '', '', '', '6', '6', '6', '6', '8'],
        mAtkDecreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        limitGaugeIncreasePot: ['2', '', '', '', '', '', '3', '3', '3', '3', '3']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 231,
      mAtk: 260,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Shortbarrel": new Weapon({
    id: 8005,
    name: 'Shortbarrel',
    character: charactersData[8],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 10800501,
      name: 'Stormround',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}\nThe higher your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['220', '', '', '', '', '', '340', '340', '340', '340', '400'],
        limitGaugeIncreasePot: ['3', '', '', '', '', '', '4', '4', '4', '4', '4']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 268,
      mAtk: 226,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "T03 Model N": new Weapon({
    id: 8007,
    name: 'T03 Model N',
    character: charactersData[8],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Sawed-Off GS": new Weapon({
    id: 8008,
    name: 'Sawed-Off GS',
    character: charactersData[8],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Chiron": new Weapon({
    id: 8009,
    name: 'Chiron',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10800901,
      name: 'Sageshot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\n${increaseLimitGauge(undefined, 'Self')}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Double Stem E": new Weapon({
    id: 8010,
    name: 'Double Stem E',
    character: charactersData[8],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "White Dog": new Weapon({
    id: 8012,
    name: 'White Dog',
    character: charactersData[8],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 10801201,
      name: 'Sludge Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}\nAlso, when Debuff is granted to Target, x1.2 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940'],
        limitGaugeIncreasePot: ['4', '', '', '', '', '', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 278,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11301],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Silver Rifle": new Weapon({
    id: 8014,
    name: 'Silver Rifle',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801401,
      name: 'Gunspinner Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, when Debuff is granted to Target, x1.5 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
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
      reinforcementAbilitiesData[30601],
      reinforcementAbilitiesData[51801]
    ]
  }),
  "Hugin & Munin": new Weapon({
    id: 8015,
    name: 'Hugin & Munin',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 10801501,
      name: 'Pentaburst Shot',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increaseLimitGauge(undefined, 'Self')}`,
      valuesByOverboostLevel: {
        damage: ['650', '', '', '', '', '', '1,140', '1,140', '1,140', '1,140', '1,300'],
        limitGaugeIncreasePot: ['4', '', '', '', '', '', '5', '5', '5', '5', '5']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 285,
      heal: 164
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Quicksilver": new Weapon({
    id: 8017,
    name: 'Quicksilver',
    character: charactersData[8],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Ultimate Quicksilver": new UltimateWeapon({
    id: 8019,
    name: 'Ultimate Quicksilver',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 10801901,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Crow Familiar": new Weapon({
    id: 8016,
    name: 'Crow Familiar',
    character: charactersData[8],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 10801601,
      name: 'Shadow Swoop',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}\nAlso, when Buff is granted to [Rng.: Self], x1.2 damage.\n${increaseLimitGauge(undefined, 'Self')}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Icebolt Shooter": new Weapon({
    id: 8018,
    name: 'Icebolt Shooter',
    character: charactersData[8],
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
      reinforcementAbilitiesData[30601],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Rhad Gun": new Weapon({
    id: 8020,
    name: 'Rhad Gun',
    character: charactersData[8],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Eligor Gun": new Weapon({
    id: null,
    name: 'Eligor Gun',
    character: charactersData[8],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Type-99 Longsword": new Weapon({
    id: 20001,
    name: 'Type-99 Longsword',
    character: charactersData[20],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Beach Parasol": new Weapon({
    id: 20003,
    name: 'Beach Parasol',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Enhance Sword (Z)": new Weapon({
    id: 20004,
    name: 'Enhance Sword (Z)',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Defender": new Weapon({
    id: 20005,
    name: 'Defender',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Crystal Sword (Z)": new Weapon({
    id: 20006,
    name: 'Crystal Sword (Z)',
    character: charactersData[20],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Falchion": new Weapon({
    id: 20007,
    name: 'Falchion',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Zweihander": new Weapon({
    id: 20008,
    name: 'Zweihander',
    character: charactersData[20],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "Arc Sword": new Weapon({
    id: 20009,
    name: 'Arc Sword',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[30601]
    ]
  }),
  "Cutlass": new Weapon({
    id: 20010,
    name: 'Cutlass',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Ceremonial Sword (Z)": new Weapon({
    id: 20011,
    name: 'Ceremonial Sword (Z)',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Bouquet": new Weapon({
    id: 20013,
    name: 'Bouquet',
    character: charactersData[20],
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
      reinforcementAbilitiesData[30201],
      reinforcementAbilitiesData[11401]
    ]
  }),
  "Pressure Ridge": new Weapon({
    id: 20014,
    name: 'Pressure Ridge',
    character: charactersData[20],
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 12001401,
      name: 'Freezing Cleave',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Ice', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('Ice Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        damage: ['390', '', '', '', '', '', '550', '550', '550', '550', '620'],
        iceResistDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        iceResistDecreaseDur: ['20', '', '', '', '', '', '26', '26', '26', '26', '30'],
        iceResistDecreaseExt: ['6', '', '', '', '', '', '8', '8', '8', '8', '10']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 275,
      mAtk: 205,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Iron Greatsword": new Weapon({
    id: 20015,
    name: 'Iron Greatsword',
    character: charactersData[20],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Ifrit's Sword": new Weapon({
    id: 20016,
    name: 'Ifrit\'s Sword',
    character: charactersData[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12001601,
      name: 'Fira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 212,
      heal: 174
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Twinkling Star": new Weapon({
    id: 20018,
    name: 'Twinkling Star',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Black Whiskers": new Weapon({
    id: 20019,
    name: 'Black Whiskers',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Stream Guard": new Weapon({
    id: 20020,
    name: 'Stream Guard',
    character: charactersData[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 12002001,
      name: 'Igniting Stream',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
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
      reinforcementAbilitiesData[11301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Zinogre Blade": new Weapon({
    id: 20023,
    name: 'Zinogre Blade',
    character: charactersData[20],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 12002301,
      name: 'Lightning Edge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Lightning', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 278,
      mAtk: 222,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Carrot Sword": new Weapon({
    id: 20024,
    name: 'Carrot Sword',
    character: charactersData[20],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 225,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Alba Blade": new Weapon({
    id: 20025,
    name: 'Alba Blade',
    character: charactersData[20],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Beatrix Sword": new Weapon({
    id: 20027,
    name: 'Beatrix Sword',
    character: charactersData[20],
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 12002701,
      name: 'Gale Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Wind', 'Single Enemy', null)}\nAlso, when Debuff is granted to Target, x1.2 damage.`,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Ultimate Type-99 Longsword": new UltimateWeapon({
    id: 20026,
    name: 'Ultimate Type-99 Longsword',
    character: charactersData[20],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 12002601,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Nameless": new Weapon({
    id: 49001,
    name: 'Nameless',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Edged Wings": new Weapon({
    id: 49002,
    name: 'Edged Wings',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Glaireid": new Weapon({
    id: 49003,
    name: 'Glaireid',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Aonibi": new Weapon({
    id: 49004,
    name: 'Aonibi',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Northern Lights": new Weapon({
    id: 49005,
    name: 'Northern Lights',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "Prototype Crimson Blade": new Weapon({
    id: 49006,
    name: 'Prototype Crimson Blade',
    character: charactersData[49],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "CC Alloy Sword": new Weapon({
    id: 49007,
    name: 'CC Alloy Sword',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Mythril Type-0 Katana": new Weapon({
    id: 49008,
    name: 'Mythril Type-0 Katana',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Shinra Blade: Model I": new Weapon({
    id: 49009,
    name: 'Shinra Blade: Model I',
    character: charactersData[49],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Torn Wing": new Weapon({
    id: 49012,
    name: 'Torn Wing',
    character: charactersData[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14901201,
      name: 'Solid Barrier',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', 'Mid', 'Single Ally', null, undefined, undefined, undefined)}\nAlso, ${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        pDefIncreaseDur: ['30', '', '', '', '', '', '34', '34', '34', '34', '38'],
        pDefIncreaseExt: ['10', '', '', '', '', '', '11', '11', '11', '11', '12'],
        pDefIncreaseMaxPot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        heal: ['9', '', '', '', '', '', '12', '12', '12', '12', '13']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 207,
      heal: 178
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "World Tree Bough": new Weapon({
    id: 49013,
    name: 'World Tree Bough',
    character: charactersData[49],
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
      reinforcementAbilitiesData[30501],
      reinforcementAbilitiesData[51801]
    ]
  }),
  "Dark Heavens": new Weapon({
    id: 49015,
    name: 'Dark Heavens',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Kuja's Spirit Blade": new Weapon({
    id: 49016,
    name: 'Kuja\'s Spirit Blade',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Radiant Edge": new Weapon({
    id: 49017,
    name: 'Radiant Edge',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Protector's Blade": new Weapon({
    id: 49018,
    name: 'Protector\'s Blade',
    character: charactersData[49],
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
      reinforcementAbilitiesData[11301],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Flame Dragon Blade": new Weapon({
    id: 49019,
    name: 'Flame Dragon Blade',
    character: charactersData[49],
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
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Ashura": new Weapon({
    id: 49020,
    name: 'Ashura',
    character: charactersData[49],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 14902001,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 204,
      mAtk: 218,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Shinra Military Sword": new Weapon({
    id: 49011,
    name: 'Shinra Military Sword',
    character: charactersData[49],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Shinra Wyvern Blade": new Weapon({
    id: 49023,
    name: 'Shinra Wyvern Blade',
    character: charactersData[49],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 14902301,
      name: 'Defira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Non-elem.', 'All Enemies', 10)}\nAlso, ${decrease('Fire Resist.', 'Low', 'All Enemies', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['180', '', '', '', '', '', '240', '240', '240', '240', '250'],
        fireResistDecreaseDur: ['20', '', '', '', '', '', '30', '30', '30', '30', '35'],
        fireResistDecreaseExt: ['5', '', '', '', '', '', '7', '7', '7', '7', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 218,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Tempest": new Weapon({
    id: 49010,
    name: 'Tempest',
    character: charactersData[49],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 14901001,
      name: 'Torrential Thrust',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Water', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('Water Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Blue Bramble": new Weapon({
    id: 49024,
    name: 'Blue Bramble',
    character: charactersData[49],
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 14902401,
      name: 'Sandsplitter',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Earth', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('Earth Resist.', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Ultimate Nameless": new UltimateWeapon({
    id: 49026,
    name: 'Ultimate Nameless',
    character: charactersData[49],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 14902601,
      name: 'Ult. Sweeping Slash',
      sigil: null,
      description: `${damage('1,500', 'Phys./Mag. Non-elem.', 'Single Enemy', null)}\nAlso, when Debuff is granted to Target, x2 damage.\n${chargeAndUses(30, null, 1)}`
    }),
    maxRarityStats: {
      pAtk: 183,
      mAtk: 171,
      heal: 122
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Genji Blade": new UltimateWeapon({
    id: 49027,
    name: 'Genji Blade',
    character: charactersData[49],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 14902701,
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
      reinforcementAbilitiesData[51301],
      reinforcementAbilitiesData[53601]
    ]
  }),
  "Edgar's Coiled Blade": new Weapon({
    id: 49028,
    name: 'Edgar\'s Coiled Blade',
    character: charactersData[49],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 14902801,
      name: 'Royal Shock',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'Single Enemy', null)}\nAlso, when Debuff is granted to Target, x1.2 damage.`,
      valuesByOverboostLevel: {
        damage: ['520', '', '', '', '', '', '780', '780', '780', '780', '940']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 289,
      heal: 160
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Personal Style": new Weapon({
    id: 50001,
    name: 'Personal Style',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Crewkicker": new Weapon({
    id: 50002,
    name: 'Crewkicker',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Jiggy Fam": new Weapon({
    id: 50003,
    name: 'Jiggy Fam',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Hardcore Squad": new Weapon({
    id: 50004,
    name: 'Hardcore Squad',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Rest in Peace": new Weapon({
    id: 50005,
    name: 'Rest in Peace',
    character: charactersData[50],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30701]
    ]
  }),
  "Ultimatic": new Weapon({
    id: 50007,
    name: 'Ultimatic',
    character: charactersData[50],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Piece of Cake": new Weapon({
    id: 50008,
    name: 'Piece of Cake',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Shockbuster": new Weapon({
    id: 50010,
    name: 'Shockbuster',
    character: charactersData[50],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Apology in Hell": new Weapon({
    id: 50011,
    name: 'Apology in Hell',
    character: charactersData[50],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30301]
    ]
  }),
  "Squeaky Hammer": new Weapon({
    id: 50014,
    name: 'Squeaky Hammer',
    character: charactersData[50],
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
      reinforcementAbilitiesData[30601],
      reinforcementAbilitiesData[11401]
    ]
  }),
  "Inferno Grave": new Weapon({
    id: 50015,
    name: 'Inferno Grave',
    character: charactersData[50],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15001501,
      name: 'Fira Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 215,
      heal: 165
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30301],
      reinforcementAbilitiesData[11001]
    ]
  }),
  "Pumpkin Lamppost": new Weapon({
    id: 50016,
    name: 'Pumpkin Lamppost',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Thousand Waves": new Weapon({
    id: 50018,
    name: 'Thousand Waves',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Steiner's Blade": new Weapon({
    id: 50019,
    name: 'Steiner\'s Blade',
    character: charactersData[50],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15001901,
      name: 'Power Break',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PATK', 'Low', 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '350', '350', '350', '350', '360'],
        pAtkDecreaseDur: ['20', '', '', '', '', '', '25', '25', '25', '25', '28'],
        pAtkDecreaseExt: ['6', '', '', '', '', '', '7', '7', '7', '7', '9']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 197,
      mAtk: 186,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Stream Slasher": new Weapon({
    id: 50020,
    name: 'Stream Slasher',
    character: charactersData[50],
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
      reinforcementAbilitiesData[11201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Best Wishes": new Weapon({
    id: 50021,
    name: 'Best Wishes',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Radglaive": new Weapon({
    id: 50022,
    name: 'Radglaive',
    character: charactersData[50],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Watera Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 215,
      heal: 168
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Silver Sol Buster": new Weapon({
    id: 50023,
    name: 'Silver Sol Buster',
    character: charactersData[50],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 207,
      mAtk: 214,
      heal: 170
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Slay the Day": new Weapon({
    id: 50006,
    name: 'Slay the Day',
    character: charactersData[50],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Ultimate Personal Style": new UltimateWeapon({
    id: 50024,
    name: 'Ultimate Personal Style',
    character: charactersData[50],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 15002401,
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
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10101]
    ]
  }),
  "Broadsword: Axis": new Weapon({
    id: 51001,
    name: 'Broadsword: Axis',
    character: charactersData[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100101,
      name: 'Shoot & Slash',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['480', '', '', '', '', '', '750', '750', '750', '750', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 243,
      heal: 205
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Orthodox Raven": new Weapon({
    id: 51002,
    name: 'Orthodox Raven',
    character: charactersData[51],
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 15100201,
      name: 'Waterga A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Water', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['290', '', '', '', '', '', '450', '450', '450', '450', '540']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 254,
      heal: 191
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Absolute Royal": new Weapon({
    id: 51003,
    name: 'Absolute Royal',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Prime Number": new Weapon({
    id: 51004,
    name: 'Prime Number',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Espee Rapiere Next-G": new Weapon({
    id: 51005,
    name: 'Espee Rapiere Next-G',
    character: charactersData[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15100501,
      name: 'First Aid',
      atbCost: 5,
      sigil: null,
      description: `${heal(undefined, 'Mag.', 'Single Ally')}`,
      valuesByOverboostLevel: {
        heal: ['106', '', '', '', '', '', '138', '138', '138', '138', '148']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 199,
      mAtk: 210,
      heal: 232
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[51501]
    ]
  }),
  "Core Defender": new Weapon({
    id: 51006,
    name: 'Core Defender',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[30601]
    ]
  }),
  "Centipede": new Weapon({
    id: 51007,
    name: 'Centipede',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Stingray": new Weapon({
    id: 51008,
    name: 'Stingray',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[30701]
    ]
  }),
  "Killer Hornet": new Weapon({
    id: 51009,
    name: 'Killer Hornet',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Bramble Spine": new Weapon({
    id: 51010,
    name: 'Bramble Spine',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Syringe Rapier": new Weapon({
    id: 51012,
    name: 'Syringe Rapier',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Foam Sword": new Weapon({
    id: 51013,
    name: 'Foam Sword',
    character: charactersData[51],
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
      reinforcementAbilitiesData[30401],
      reinforcementAbilitiesData[11501]
    ]
  }),
  "Slick Beetle": new Weapon({
    id: 51015,
    name: 'Slick Beetle',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Bahamut Rapier": new Weapon({
    id: 51016,
    name: 'Bahamut Rapier',
    character: charactersData[51],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15101601,
      name: 'Ruinra Surge',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 189,
      mAtk: 226,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10501],
      reinforcementAbilitiesData[10301]
    ]
  }),
  "Holiday Cane": new Weapon({
    id: 51017,
    name: 'Holiday Cane',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Giant Fork": new Weapon({
    id: 51018,
    name: 'Giant Fork',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Humus Rapier": new Weapon({
    id: 51020,
    name: 'Humus Rapier',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Firefish": new Weapon({
    id: 51022,
    name: 'Firefish',
    character: charactersData[51],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15102201,
      name: 'Fira Impact',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Phys. Fire', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['320', '', '', '', '', '', '430', '430', '430', '430', '450']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 215,
      mAtk: 199,
      heal: 175
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Ultimate Broadsword: Axis": new UltimateWeapon({
    id: 51024,
    name: 'Ultimate Broadsword: Axis',
    character: charactersData[51],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 15102401,
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Candle Rapier": new Weapon({
    id: 51025,
    name: 'Candle Rapier',
    character: charactersData[51],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "V39": new Weapon({
    id: 52001,
    name: 'V39',
    character: charactersData[52],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[30201]
    ]
  }),
  "Pulse Gun": new Weapon({
    id: 52002,
    name: 'Pulse Gun',
    character: charactersData[52],
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
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[20701]
    ]
  }),
  "Serpent Eater": new Weapon({
    id: 52003,
    name: 'Serpent Eater',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Thunderbird": new Weapon({
    id: 52004,
    name: 'Thunderbird',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Tranquilizer Gun": new Weapon({
    id: 52005,
    name: 'Tranquilizer Gun',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "SSR1976": new Weapon({
    id: 52006,
    name: 'SSR1976',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Mad Minute": new Weapon({
    id: 52007,
    name: 'Mad Minute',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Bald Eagle": new Weapon({
    id: 52009,
    name: 'Bald Eagle',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20301]
    ]
  }),
  "Black Rifle": new Weapon({
    id: 52010,
    name: 'Black Rifle',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[10801]
    ]
  }),
  "Rubber Band Gun": new Weapon({
    id: 52014,
    name: 'Rubber Band Gun',
    character: charactersData[52],
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
      reinforcementAbilitiesData[30701],
      reinforcementAbilitiesData[11401]
    ]
  }),
  "Featherscatter": new Weapon({
    id: 52015,
    name: 'Featherscatter',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Barn Swallow": new Weapon({
    id: 52016,
    name: 'Barn Swallow',
    character: charactersData[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201601,
      name: 'Striking Quintet',
      atbCost: 4,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Phys. Non-elem.', 'Single Enemy', 10)}`,
      valuesByOverboostLevel: {
        damage: ['420', '', '', '', '', '', '660', '660', '660', '660', '790']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 264,
      mAtk: 204,
      heal: 184
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[30401]
    ]
  }),
  "Pumpkin Blaster": new Weapon({
    id: 52017,
    name: 'Pumpkin Blaster',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10601],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Rifle of Levin": new Weapon({
    id: 52019,
    name: 'Rifle of Levin',
    character: charactersData[52],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15201901,
      name: 'Thundara Surge',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['300', '', '', '', '', '', '410', '410', '410', '410', '420']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 205,
      mAtk: 220,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[30601],
      reinforcementAbilitiesData[11001]
    ]
  }),
  "Holiday Revolver": new Weapon({
    id: 52020,
    name: 'Holiday Revolver',
    character: charactersData[52],
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Vivi's Magical Gun": new Weapon({
    id: 52021,
    name: 'Vivi\'s Magical Gun',
    character: charactersData[52],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15202101,
      name: 'Fira Surge A',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'All Enemies', null)}`,
      valuesByOverboostLevel: {
        damage: ['210', '', '', '', '', '', '280', '280', '280', '280', '290']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 184,
      mAtk: 199,
      heal: 150
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[11001],
      reinforcementAbilitiesData[51701]
    ]
  }),
  "Rose Musket": new Weapon({
    id: 52022,
    name: 'Rose Musket',
    character: charactersData[52],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 15202201,
      name: 'Blazing Rose',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Fire', 'Single Enemy', null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}`,
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
      reinforcementAbilitiesData[51501],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Turks' Rifle": new Weapon({
    id: 52023,
    name: 'Turks\' Rifle',
    character: charactersData[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: null,
      name: 'Armora Breach Surge',
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
      pAtk: 222,
      mAtk: 215,
      heal: 157
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Marine Shooter": new Weapon({
    id: 52025,
    name: 'Marine Shooter',
    character: charactersData[52],
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
      reinforcementAbilitiesData[51401],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Nightjar": new Weapon({
    id: 52013,
    name: 'Nightjar',
    character: charactersData[52],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15201301,
      name: 'Nightglint',
      atbCost: 3,
      sigil: 'rhombus',
      description: `${damage(undefined, 'Mag. Non-elem.', 'Single Enemy', 10)}\nAlso, ${decrease('PDEF', undefined, 'Single Enemy', null, undefined, undefined, 'High')}\nWhen Buff is granted to [Rng.: Self], ${decrease('MDEF', undefined, 'Single Enemy', null, undefined, undefined, 'Mid')}`,
      valuesByOverboostLevel: {
        damage: ['260', '', '', '', '', '', '360', '360', '360', '360', '420'],
        pDefDecreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pDefDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        pDefDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8'],
        mDefDecreasePot: ['Low', '', '', '', '', '', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid'],
        mDefDecreaseDur: ['16', '', '', '', '', '', '20', '20', '20', '20', '24'],
        mDefDecreaseExt: ['5', '', '', '', '', '', '6', '6', '6', '6', '8']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 247,
      mAtk: 247,
      heal: 161
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Ultimate V39": new UltimateWeapon({
    id: 52026,
    name: 'Ultimate V39',
    character: charactersData[52],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 15202601,
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
      reinforcementAbilitiesData[51901],
      reinforcementAbilitiesData[10401]
    ]
  }),
  "Type-90 Longsword": new Weapon({
    id: 56001,
    name: 'Type-90 Longsword',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Greatsword (A)": new Weapon({
    id: 56002,
    name: 'Greatsword (A)',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51401]
    ]
  }),
  "Type-91 Two-Hander": new Weapon({
    id: 56003,
    name: 'Type-91 Two-Hander',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51301]
    ]
  }),
  "Shinra Greatsword: Model I": new Weapon({
    id: 56004,
    name: 'Shinra Greatsword: Model I',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "CC Alloy Greatsword": new Weapon({
    id: 56005,
    name: 'CC Alloy Greatsword',
    character: charactersData[56],
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 15600501,
      name: 'Thundaga Burst',
      atbCost: 4,
      sigil: null,
      description: `${damage(undefined, 'Mag. Lightning', 'Single Enemy', null)}`,
      valuesByOverboostLevel: {
        damage: ['500', '', '', '', '', '', '740', '740', '740', '740', '900']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 212,
      mAtk: 277,
      heal: 167
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20401]
    ]
  }),
  "Stalwart Integrity": new Weapon({
    id: 56006,
    name: 'Stalwart Integrity',
    character: charactersData[56],
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 15600601,
      name: 'Fortress Guard',
      atbCost: 4,
      sigil: null,
      description: `${increase('PDEF', undefined, 'All Allies', null, undefined, undefined, 'High')}\nAlso, ${heal(undefined, 'Mag.', 'All Allies')}\n${conditionHP('Self', '70', 'more')}, ${increase('PATK', undefined, 'All Allies', null, undefined, undefined, 'High')}`,
      valuesByOverboostLevel: {
        pDefIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pDefIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        pDefIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6'],
        heal: ['5', '', '', '', '', '', '6', '6', '6', '6', '7'],
        pAtkIncreasePot: ['Mid', '', '', '', '', '', 'High', 'High', 'High', 'High', 'High'],
        pAtkIncreaseDur: ['12', '', '', '', '', '', '16', '16', '16', '16', '20'],
        pAtkIncreaseExt: ['4', '', '', '', '', '', '5', '5', '5', '5', '6']
      }
    }),
    maxRarityLevel: 5,
    maxRarityStats: {
      pAtk: 220,
      mAtk: 214,
      heal: 212
    },
    reinforcementAbilities: [
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51901]
    ]
  }),
  "Innocent Warrior": new Weapon({
    id: 56007,
    name: 'Innocent Warrior',
    character: charactersData[56],
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: null,
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
      reinforcementAbilitiesData[10301],
      reinforcementAbilitiesData[20201]
    ]
  }),
  "Gargantuan Monolith": new Weapon({
    id: 56008,
    name: 'Gargantuan Monolith',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Sequoiadendron": new Weapon({
    id: 56009,
    name: 'Sequoiadendron',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10201],
      reinforcementAbilitiesData[20501]
    ]
  }),
  "Tranquility": new Weapon({
    id: 56010,
    name: 'Tranquility',
    character: charactersData[56],
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
      reinforcementAbilitiesData[11201],
      reinforcementAbilitiesData[20601]
    ]
  }),
  "Orchard Shovel": new Weapon({
    id: 56011,
    name: 'Orchard Shovel',
    character: charactersData[56],
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
      reinforcementAbilitiesData[30501],
      reinforcementAbilitiesData[11401]
    ]
  }),
  "Ultimate Type-90 Longsword": new UltimateWeapon({
    id: 56012,
    name: 'Ultimate Type-90 Longsword',
    character: charactersData[56],
    element: 'Non-elemental',
    commandAbility: new UltimateCommandAbility({
      id: 15601201,
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
      reinforcementAbilitiesData[10401],
      reinforcementAbilitiesData[10501]
    ]
  }),
  "Cyan's Blade": new Weapon({
    id: 56013,
    name: 'Cyan\'s Blade',
    character: charactersData[56],
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
      reinforcementAbilitiesData[10101],
      reinforcementAbilitiesData[51401]
    ]
  })
};

type Range = 'Single Enemy' | 'All Enemies' | 'Single Ally' | 'All Allies' | 'Self' | 'Affected Targets' | 'Ally (Excluding Self)' | null;
type CriticalRate = number | null;
type Effect = 'Ailment: Stun' | 'Ailment: Poison' | 'Ailment: Silence' | 'Haste' | 'Provoke' | 'Veil';
type Attribute = 'PATK' | 'MATK' | 'PDEF' | 'MDEF' | 'Fire Resist.' | 'Ice Resist.' | 'Thunder Resist.' | 'Earth Resist.' | 'Water Resist.' | 'Wind Resist.' | 'Fire Damage' | 'Ice Damage' | 'Lightning Damage' | 'Earth Damage' | 'Water Damage' | 'Wind Damage';
type Element = 'Non-elem.' | 'Fire' | 'Ice' | 'Lightning' | 'Earth' | 'Water' | 'Wind';
type Damage = string | undefined;
type DamageType = `Phys. ${Element}` | `Mag. ${Element}` | `Phys./Mag. ${Element}`;
type Heal = number | undefined;
type HealType = 'Mag.' | 'Phys.';
type Potency = 'Low' | 'Mid' | 'High' | 'Extra High' | undefined;
type Rate = number | undefined | null;
type Duration = number | undefined;
type Extension = number | undefined;
type AdditionalDamageType = 'Phys.' | 'Mag.';
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
    'Wind Damage': 'windDamage'
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

function increase(attribute: Attribute, potency: Potency, range: Range, rate: Rate, duration: Duration, extension: Extension, maxPotency: Potency) {
  const attributeKey = getAttributeKey(attribute);
  const pot = potency ? potency : `{{${attributeKey}IncreasePot}}`;
  const rateString = rate === null      ? ''                                          :
                     rate === undefined ? ` [Rate: {{${attributeKey}IncreaseRate}}%]` :
                                          ` [Rate: ${rate}%]`                         ;
  const dur = duration ? duration : `{{${attributeKey}IncreaseDur}}`;
  const ext = extension ? extension : `{{${attributeKey}IncreaseExt}}`;
  const maxPot = maxPotency ? maxPotency : `{{${attributeKey}IncreaseMaxPot}}`;
  return `${attribute} is increased. [Pot.: ${pot}]${rateString} [Rng.: ${range}] [Dur.: ${dur}s]. [Ext.: +${ext}s] [Max. pot.: ${maxPot}]`;
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
    'Veil': 'veil'
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

function increaseCommandGauge(potency: number) {
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
