import { CommandAbility } from '../types.ts';

export const cAbilitiesData: { [key: string]: CommandAbility } = {
  "Braver": {
    id: 10100101,
    atbCost: 4,
    sigil: 'cross',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when matching sigils are destroyed, x1.5 damage.`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Blast Wave": {
    id: 10100201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Armor Break": {
    id: 10100301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Blade Burst": {
    id: 10100401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Stalwart Barrier": {
    id: 10100601,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Thunderstrike": {
    id: 10100701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Shock Slice": {
    id: 10100801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Stun", "Single Enemy", undefined, 5, 2)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"],
      stunRate: ["20", "", "", "", "", "", "30", "30", "30", "30", "30"]
    }
  },
  "Healing Wave": {
    id: 10100901,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["50", "60", "60", "60", "60", "60", "65", "65", "65", "65", "71"]
    }
  },
  "Blizzaga A (1)": {
    id: 10101201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Disorder": {
    id: 10101301,
    atbCost: 5,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nNo boosts to limit and summon gauges when using this ability.`,
    valuesByOverboost: {
      damage: ["850", "1,020", "1,020", "1,020", "1,020", "1,020", "1,320", "1,320", "1,320", "1,320", "1,600"]
    }
  },
  "Bloody End": {
    id: 10101501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Seasplitter": {
    id: 10102001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Blizzara Surge (1)": {
    id: 10102401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Sanctuary": {
    id: 10102501,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Blazing Strike": {
    id: 10102801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Free Energy": {
    id: 10102901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "", "", "", "", "", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Quakera Surge A (1)": {
    id: 10103001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Freezing Stream": {
    id: 10103101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "740", "740", "740", "740", "900"]
    }
  },
  "Fira Surge A (1)": {
    id: 10103201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Fierce Charged Slash": {
    id: 10103301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("PATK", undefined, "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["530", "", "", "", "", "", "740", "740", "740", "740", "850"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"],
      pAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Blizzara Surge A (1)": {
    id: 10103401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Impact (1)": {
    id: 10103501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Fierce Claw": {
    id: 10103601,
    atbCost: 4,
    sigil: null,
    description: `${damage('Phys. Non-elem.', 'All Enemies', 10)}\nAlso, [Condition: First use] ${apply('Haste', 'Self', null, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${additionalDamage('Non-elem.', 'Phys.', 'All Enemies')}`,
    valuesByOverboost: {
      damage: ['430', '520', '520', '520', '520', '520', '670', '670', '670', '670', '800'],
      hasteDur: ['20', '20', '20', '20', '20', '20', '25', '25', '25', '25', '30'],
      hasteExt: ['6', '6', '6', '6', '6', '6', '8', '8', '8', '8', '10'],
      additionalDamage: ['10000', '20000', '20000', '20000', '20000', '20000', '30000', '30000', '30000', '30000', '40000']
    }
  },
  "Blitz Beat": {
    id: 10200101,
    atbCost: 4,
    sigil: 'cross',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Agitation": {
    id: 10200201,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Phys.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["10", "", "", "", "", "", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "", "", "", "", "", "4", "4", "4", "4", "4"],
      heal: ["4", "", "", "", "", "", "6", "6", "6", "6", "6"]
    }
  },
  "Stalwart Manaward (1)": {
    id: 10200701,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Stalwart Faith (1)": {
    id: 10202601,
    atbCost: 4,
    sigil: null,
    description: `${increase("MATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Quick Burst": {
    id: 10201001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Doom Impact": {
    id: 10201101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Chain Bomber": {
    id: 10201201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["350", "420", "420", "420", "420", "420", "550", "550", "550", "550", "650"]
    }
  },
  "Energy Laser": {
    id: 10201301,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Firaga A (1)": {
    id: 10201501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Pyroball": {
    id: 10201801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Solid Barrier (1)": {
    id: 10201901,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      pDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Jet Fists": {
    id: 10202001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The lower your HP, the higher the ability pot. (max: x3).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Blizzara Surge (2)": {
    id: 10202201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Manara Breach Surge (1)": {
    id: 10202401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Watera Surge A (1)": {
    id: 10202501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Energization": {
    id: 10201701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "All Enemies", null)}\nAlso, ${decrease("PATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "480", "480", "480", "480", "540"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      pAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Watera Surge (1)": {
    id: 10202701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Dorsal Fin Shot": {
    id: 10202101,
    atbCost: 3,
    sigil: 'rhombus',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "360", "360", "360", "360", "420"],
      fireResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      fireResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      waterResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      waterResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  },
  "Omnistrike": {
    id: 10300601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Vigor": {
    id: 10300501,
    atbCost: 5,
    sigil: null,
    description: `${heal("Phys.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Silence", "Self")}`,
    valuesByOverboost: {
      heal: ["93", "112", "112", "112", "112", "112", "121", "121", "121", "121", "130"]
    }
  },
  "Divekick": {
    id: 10300101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["530", "640", "640", "640", "640", "640", "830", "830", "830", "830", "990"]
    }
  },
  "Uppershot": {
    id: 10300701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Thundaga A (1)": {
    id: 10301001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"]
    }
  },
  "Sonic Spiral": {
    id: 10301101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"]
    }
  },
  "Chi Trap": {
    id: 10301301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["300", "350", "350", "350", "350", "350", "420", "420", "420", "420", "480"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Wall of Will": {
    id: 10301401,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "Self", null, undefined, undefined, "High")}\nAlso, ${increase("PATK", undefined, "Self", null, undefined, undefined, "High")}\n${heal("Mag.", "Self")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pDefIncreaseExt: ["8", "", "", "", "", "", "10", "10", "10", "10", "11"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["8", "", "", "", "", "", "10", "10", "10", "10", "11"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Savage Blast": {
    id: 10301501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Healing Waves": {
    id: 10301901,
    atbCost: 4,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["38", "46", "46", "46", "46", "46", "49", "49", "49", "49", "54"]
    }
  },
  "Featherstrike": {
    id: 10302001,
    atbCost: 3,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\nWhen [Rng: Self]'s HP is 50% or more, ${increase("Water Damage", undefined, "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      mDefDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      mDefDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      waterDamageIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      waterDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      waterDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Ruinra Surge (1)": {
    id: 10302401,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Freezing Blow": {
    id: 10302501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "No Mercy": {
    id: 10302701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", undefined, "Self", null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["360", "", "", "", "", "", "630", "630", "630", "630", "720"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "36", "36", "36", "36", "40"],
      pAtkIncreaseExt: ["5", "", "", "", "", "", "7", "7", "7", "7", "8"],
      pAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      mAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Aqua Splash": {
    id: 10302801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Low", "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"],
      mAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      mAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Solid Bravery (1)": {
    id: 10302901,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Armora Breach Surge (1)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Zangan Fist": {
    id: 10303101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "780", "780", "780", "780", "780", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Spiral Levin Strike": {
    id: 10303201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", undefined, "Self", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"],
      mAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"]
    }
  },
  "Spinning Fervor": {
    id: 10303301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "810", "810", "810", "810", "940"]
    }
  },
  "Debravera Surge (1)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Dark Strike": {
    id: 10303501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, [Condition: First use] ${apply('Haste', 'Self', null, undefined, undefined)}\n${increase("MATK", "Mid", "All Allies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["600", "720", "720", "720", "720", "720", "1,000", "1,000", "1,000", "1,000", "1,100"],
      hasteDur: ["20", "20", "20", "20", "20", "20", "25", "25", "25", "25", "30"],
      hasteExt: ["6", "6", "6", "6", "6", "6", "8", "8", "8", "8", "10"],
      mAtkIncreaseDur: ["15", "20", "20", "20", "20", "20", "20", "20", "20", "20", "25"],
      mAtkIncreaseExt: ["5", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      mAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Stalwart Manaward (2)": {
    id: 10400101,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["10", "13", "13", "13", "13", "13", "13", "13", "13", "13", "15"]
    }
  },
  "Blizzaga A (2)": {
    id: 10400201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Tempest Force": {
    id: 10400301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Saving Grace": {
    id: 10400401,
    atbCost: 5,
    sigil: null,
    description: `${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "Mid")}\nAlso, ${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "Mid")}\n${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      mDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["7", "8", "8", "8", "8", "8", "9", "9", "9", "9", "9"]
    }
  },
  "Heavenly Spike": {
    id: 10400501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "290", "290", "290", "290", "340"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Raging Sphere": {
    id: 10401201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Curaga A": {
    id: 10400801,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["53", "63", "63", "63", "63", "63", "69", "69", "69", "69", "74"]
    }
  },
  "Thundaga A (2)": {
    id: 10401001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Quaga A (1)": {
    id: 10400901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Nightbloom": {
    id: 10401401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "Mid")}\n${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Floral Flare": {
    id: 10401501,
    atbCost: 3,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Wind Resist.", undefined, "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      pDefDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      pDefDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      windResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High"],
      windResistDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      windResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      windResistDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Cleansing Rain": {
    id: 10401601,
    atbCost: 4,
    sigil: null,
    description: `${remove("Phys. Attack Down, Mag. Attack Down", "Single Ally")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["77", "", "", "", "", "", "100", "100", "100", "100", "108"]
    }
  },
  "Solid Manaward (1)": {
    id: 10401901,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      mDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Snowspell": {
    id: 10402001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Thundara Surge (1)": {
    id: 10402101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "460", "460", "460", "460", "480"]
    }
  },
  "Healing Pulse": {
    id: 10402201,
    atbCost: 3,
    sigil: null,
    description: `${increase("MATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Helical Flame": {
    id: 10402301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}\nAlso, against a single target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "530", "530", "530", "530", "630"]
    }
  },
  "Armora Breach Surge (2)": {
    id: 10402401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Spiritual Harmony": {
    id: 10402501,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, when [Rng.: Self]'s HP is 70% or more, ${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\n${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      mDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      mDefIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"]
    }
  },
  "Watera Surge A (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Blizzara Surge A (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fruitful Energy": {
    id: 10402801,
    atbCost: 3,
    sigil: null,
    description: `${increase("Ice Damage", undefined, "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Mid", "Single Ally", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      iceDamageIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceDamageIncreaseDur: ["24", "", "", "", "", "", "26", "26", "26", "26", "30"],
      iceDamageIncreaseExt: ["8", "", "", "", "", "", "8", "8", "8", "8", "10"],
      iceDamageIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["7", "", "", "", "", "", "9", "9", "9", "9", "9"],
      mAtkIncreaseDur: ["24", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkIncreaseExt: ["8", "", "", "", "", "", "8", "8", "8", "8", "10"],
      mAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Blessed Aura": {
    id: 10402901,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}\nAlso, ${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "Mid")}\n${conditionHP("Self", undefined, "less")}, ${increaseATBGauge(1, "Ally (Excluding Self)")}`,
    valuesByOverboost: {
      heal: ["42", "50", "50", "50", "50", "50", "54", "54", "54", "54", "59"],
      pDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefIncreaseDur: ["12", "16", "16", "16", "16", "16", "16", "16", "16", "16", "20"],
      pDefIncreaseExt: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5"],
      conditionHPThreshold: ["40", "50", "50", "50", "50", "50", "70", "70", "70", "70", "90"]
    }
  },
  "Manaward A": {
    id: 10500101,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Eternal Storm": {
    id: 10500901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("MDEF", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Therapeutic Touch": {
    id: 10500501,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}\nAlso, ${regen("All Allies", undefined, undefined)}`,
    valuesByOverboost: {
      heal: ["8", "9", "9", "9", "9", "9", "10", "10", "10", "10", "11"],
      regenDur: ["9", "12", "12", "12", "12", "12", "15", "15", "15", "15", "18"],
      regenExt: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "6"]
    }
  },
  "Waterga A (1)": {
    id: 10501601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Blaze Rush": {
    id: 10501801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Sonic Fangs": {
    id: 10501901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Mystic Flow": {
    id: 10502001,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["81", "97", "97", "97", "97", "97", "105", "105", "105", "105", "113"]
    }
  },
  "Frenzied Fang": {
    id: 10502101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Canyon Gale": {
    id: 10502301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Wind", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", "Mid", "All Enemies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["270", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Spiral Swing (1)": {
    id: 10502601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Wild Howling": {
    id: 10502701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${remove("Mag. Defense Up", "All Enemies")}`,
    valuesByOverboost: {
      damage: ["290", "", "", "", "", "", "450", "450", "450", "450", "540"]
    }
  },
  "Power Fang": {
    id: 10502801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\n${regen("Self", 3, 3)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["15", "18", "18", "18", "18", "18", "18", "18", "18", "18", "21"],
      lightningResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7"]
    }
  },
  "Manara Breach Surge (2)": {
    id: 10503101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Defira Surge (1)": {
    id: 10503201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge A (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Growing Ivy": {
    id: 10501701,
    atbCost: 3,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\n${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      fireResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      iceResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      iceResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"]
    }
  },
  "Blizzara Surge A (3)": {
    id: 10503401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Rolling Claw": {
    id: 10500401,
    atbCost: 3,
    sigil: 'rhombus',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Wind Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["200", "", "", "", "", "", "280", "280", "280", "280", "320"],
      windResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      windResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      windResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      waterResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      waterResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  },
  "Debravera Surge (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Shuriken Throw": {
    id: 10600101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "", "", "", "", "", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Flurry of Steel": {
    id: 10600201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Sweeping Spin": {
    id: 10600301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      iceResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      iceResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Quaga A (2)": {
    id: 10600401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Earth Ninjutsu": {
    id: 10600501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Stalwart Faith (2)": {
    id: 10600601,
    atbCost: 4,
    sigil: null,
    description: `${increase("MATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Nimble Wind Slash": {
    id: 10600701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      lightningResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Venomstrike": {
    id: 10600801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Poison", "Single Enemy", undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      poisonRate: ["50", "50", "50", "50", "50", "50", "70", "70", "70", "70", "70"],
      poisonDur: ["24", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30"],
      poisonExt: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7"]
    }
  },
  "Ice Ninjutsu": {
    id: 10600901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Wind Ninjutsu": {
    id: 10601001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Twister": {
    id: 10602301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Feisty Spirit": {
    id: 10601501,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}\n${increase("PATK", "Mid", "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["24", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30"],
      pAtkIncreaseExt: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "10"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"],
      pAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Baddies Begone": {
    id: 10601601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The higher your HP, the higher the ability pot. (max: x2).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Watera Surge A (3)": {
    id: 10602201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Watera Surge (2)": {
    id: 10602401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Explosion": {
    id: 10602601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("Fire Damage", "Low", "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["390", "530", "530", "530", "530", "530", "620", "620", "620", "620", "700"],
      fireDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      fireDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      fireDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Blizzara Surge A (4)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Razor Wings": {
    id: 10602801,
    atbCost: 4,
    sigil: null,
    description: `${damage('Phys. Non-elem.', 'Single Enemy', 10)}\nAlso, ${increase('MDEF', 'Mid', 'All Allies', null, undefined, undefined, undefined)}\nWhen Debuff is granted to Target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ['540', '650', '650', '650', '650', '650', '950', '950', '950', '950', '1,080'],
      mDefIncreaseDur: ['15', '20', '20', '20', '20', '20', '20', '20', '20', '20', '25'],
      mDefIncreaseExt: ['5', '7', '7', '7', '7', '7', '7', '7', '7', '7', '8'],
      mDefIncreaseMaxPot: ['Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'Mid', 'High', 'High', 'High', 'High', 'High']
    }
  },
  "Sonic Meow": {
    id: 10700101,
    atbCost: 5,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 30)}\nAlso, when hitting critical, x3 damage.`,
    valuesByOverboost: {
      damage: ["380", "460", "460", "460", "460", "460", "590", "590", "590", "590", "700"]
    }
  },
  "Bloomin' Spray": {
    id: 10702201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "450", "450", "450", "450", "450", "550", "550", "550", "550", "620"],
      waterResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Blizzaga A (3)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "", "", "", "", "", "440", "440", "440", "440", "520"]
    }
  },
  "Firaga A (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Instant Barrier": {
    id: 10700501,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["8", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Spinning Punch": {
    id: 10700801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Low")}\nWhen hitting critical, ${decrease("PDEF", "High", "Affected Targets", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Fat Cat Attack": {
    id: 10700901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\nWhen hitting critical, ${decrease("MATK", undefined, "Affected Targets", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["40", "44", "44", "44", "44", "44", "52", "52", "52", "52", "60"],
      mAtkDecreaseExt: ["13", "14", "14", "14", "14", "14", "17", "17", "17", "17", "20"]
    }
  },
  "Battle Drum": {
    id: 10701001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 20)}\nAlso, ${decrease("MATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}\nWhen hitting critical, ${decrease("PATK", undefined, "Affected Targets", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      mAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["40", "44", "44", "44", "44", "44", "52", "52", "52", "52", "60"],
      pAtkDecreaseExt: ["13", "14", "14", "14", "14", "14", "17", "17", "17", "17", "20"]
    }
  },
  "Shellmanship": {
    id: 10701101,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "All Allies", null, undefined, undefined, "Mid")}\nAlso, ${heal("Mag.", "All Allies")}\n${increase("MATK", undefined, "All Allies", 20, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"],
      mAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      mAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"]
    }
  },
  "Stalwart Bravery (1)": {
    id: 10701401,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Hang in There": {
    id: 10700201,
    atbCost: 4,
    sigil: null,
    description: `${increase("MATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}\n${apply("Haste", "Single Ally", 20, undefined, 5)}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"],
      hasteDur: ["10", "", "", "", "", "", "15", "15", "15", "15", "20"]
    }
  },
  "Aerora Surge A (1)": {
    id: 10702401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Solid Bravery (2)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Blizzara Surge A (5)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Comforting Cuisine": {
    id: 10702901,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}\nWhen [Rng.: Self]'s HP is 70% or more, ${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"],
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pDefIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"]
    }
  },
  "Ruinra Impact A (1)": {
    id: 10702601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "380", "380", "380", "380", "390"]
    }
  },
  "Blizzaga A (4)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Gilded Spirit": {
    id: 10800301,
    atbCost: 4,
    sigil: null,
    description: `${increaseLimitGauge(undefined, "Self")}\nAlso, ${heal("Mag.", "Self")}\n${regen("Self", undefined, 3)}`,
    valuesByOverboost: {
      limitGaugeIncreasePot: ["5", "6", "6", "6", "6", "6", "8", "8", "8", "8", "10"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"]
    }
  },
  "Spellgun Shower": {
    id: 10800401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}\n${decrease("MATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "480", "480", "480", "480", "540"],
      pAtkDecreaseDur: ["18", "", "", "", "", "", "20", "20", "20", "20", "25"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "6", "6", "6", "6", "8"],
      pAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["18", "", "", "", "", "", "20", "20", "20", "20", "25"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "6", "6", "6", "6", "8"],
      mAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      limitGaugeIncreasePot: ["2", "", "", "", "", "", "3", "3", "3", "3", "3"]
    }
  },
  "Stormround": {
    id: 10800501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "Single Enemy", null)}\nThe higher your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["220", "", "", "", "", "", "340", "340", "340", "340", "400"],
      limitGaugeIncreasePot: ["3", "", "", "", "", "", "4", "4", "4", "4", "4"]
    }
  },
  "Quick Draw": {
    id: 10800701,
    atbCost: 2,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["160", "190", "190", "190", "190", "190", "250", "250", "250", "250", "300"],
      limitGaugeIncreasePot: ["1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2"]
    }
  },
  "Wardshot": {
    id: 10800801,
    atbCost: 4,
    sigil: null,
    description: `${increase("MATK", undefined, "Self", null, undefined, undefined, "High")}\nAlso, ${increase("MDEF", undefined, "Self", null, undefined, undefined, "High")}\n${increaseLimitGauge(undefined, "Self")}\n${heal("Mag.", "Self")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      limitGaugeIncreasePot: ["2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3"],
      heal: ["11", "13", "13", "13", "13", "13", "14", "14", "14", "14", "15"]
    }
  },
  "Sageshot": {
    id: 10800901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Earth Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      earthResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      earthResistDecreaseDur: ["20", "25", "25", "25", "25", "25", "30", "30", "30", "30", "35"],
      earthResistDecreaseExt: ["6", "8", "8", "8", "8", "8", "10", "10", "10", "10", "11"],
      limitGaugeIncreasePot: ["2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3"]
    }
  },
  "Poison Sphere": {
    id: 10801001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${increaseLimitGauge(undefined, "Self")}\nWhen [Rng.: Self]'s HP is 30% or less, ${apply("Ailment: Poison", "All Enemies", null, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"],
      limitGaugeIncreasePot: ["2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3"],
      poisonDur: ["12", "16", "16", "16", "16", "16", "20", "20", "20", "20", "25"],
      poisonExt: ["3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "6"]
    }
  },
  "Sludge Shot": {
    id: 10801201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "Single Enemy", null)}\nAlso, when Debuff is granted to Target, x1.2 damage.\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"],
      limitGaugeIncreasePot: ["4", "", "", "", "", "", "5", "5", "5", "5", "5"]
    }
  },
  "Gunspinner Shot": {
    id: 10801401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when Debuff is granted to Target, x1.5 damage.\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"],
      limitGaugeIncreasePot: ["2", "", "", "", "", "", "3", "3", "3", "3", "3"]
    }
  },
  "Pentaburst Shot": {
    id: 10801501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["650", "", "", "", "", "", "1,140", "1,140", "1,140", "1,140", "1,300"],
      limitGaugeIncreasePot: ["4", "", "", "", "", "", "5", "5", "5", "5", "5"]
    }
  },
  "Spinning Pentashot": {
    id: 10800101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x1.5).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"],
      limitGaugeIncreasePot: ["3", "3", "3", "3", "3", "3", "5", "5", "5", "5", "5"]
    }
  },
  "Rapid Slash": {
    id: 12000101,
    atbCost: 4,
    sigil: 'circle',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Magic Ray (1)": {
    id: 12000301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "460", "460", "460", "460", "460", "540", "540", "540", "540", "560"]
    }
  },
  "Healing Vortex": {
    id: 12000601,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["101", "121", "121", "121", "121", "121", "131", "131", "131", "131", "141"]
    }
  },
  "Spirit Burst": {
    id: 12000501,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["6", "6", "6", "6", "6", "6", "9", "9", "9", "9", "9"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Firaga A (3)": {
    id: 12000401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Gale Blast": {
    id: 12000701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Slashing Thrust": {
    id: 12000801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Homing Blast": {
    id: 12000901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Destructive Swipe": {
    id: 12001001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Ceremonial Slice": {
    id: 12001101,
    atbCost: 5,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", undefined, "Self", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["700", "840", "840", "840", "840", "840", "1,220", "1,220", "1,220", "1,220", "1,400"],
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"]
    }
  },
  "Floral Flourish": {
    id: 12001301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe higher your HP, the higher the ability pot. (max: x3).`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "330", "330", "330", "330", "400"]
    }
  },
  "Freezing Cleave": {
    id: 12001401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Ice", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "", "", "", "", "", "550", "550", "550", "550", "620"],
      iceResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      iceResistDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Spiral Swing (2)": {
    id: 12001501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge (4)": {
    id: 12001601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Dual Onslaught": {
    id: 12001201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", "Mid", "Single Enemy", null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mAtkDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      pDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Swirl Drop": {
    id: 12001901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\n${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      waterResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      waterResistDecreaseMaxPot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "High"]
    }
  },
  "Igniting Stream": {
    id: 12002001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["480", "", "", "", "", "", "710", "710", "710", "710", "850"]
    }
  },
  "Lightning Edge": {
    id: 12002301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"]
    }
  },
  "Fira Surge A (3)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Ruinra Impact A (2)": {
    id: 12002501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "380", "380", "380", "380", "390"]
    }
  },
  "Gale Slash": {
    id: 12002701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "Single Enemy", null)}\nAlso, when Debuff is granted to Target, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"]
    }
  },
  "Telluric Fury": {
    id: 14900301,
    atbCost: 2,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["150", "170", "170", "170", "170", "170", "210", "210", "210", "210", "240"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["11", "13", "13", "13", "13", "13", "13", "13", "13", "13", "14"],
      mDefDecreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    }
  },
  "Aerial Frostblade": {
    id: 14900201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Sweeping Slash": {
    id: 14900101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["350", "420", "420", "420", "420", "420", "550", "550", "550", "550", "650"]
    }
  },
  "Frenzied Stance": {
    id: 14900401,
    atbCost: 4,
    sigil: null,
    description: `${increase("MATK", undefined, "Self", null, undefined, undefined, "High")}\nAlso, ${regen("Self", undefined, 3)}\n${heal("Mag.", "Self")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["36", "40", "40", "40", "40", "40", "40", "40", "40", "40", "44"],
      mAtkIncreaseExt: ["12", "13", "13", "13", "13", "13", "13", "13", "13", "13", "14"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["11", "13", "13", "13", "13", "13", "14", "14", "14", "14", "15"]
    }
  },
  "Radiant Aurora": {
    id: 14900501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Firaga A (4)": {
    id: 14900601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Thundaga A (3)": {
    id: 14900701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Steadfast Stance": {
    id: 14900801,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", undefined, "Self", null, undefined, undefined, "High")}\nAlso, ${regen("Self", undefined, 3)}\n${heal("Phys.", "Self")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["36", "40", "40", "40", "40", "40", "40", "40", "40", "40", "44"],
      pDefIncreaseExt: ["12", "13", "13", "13", "13", "13", "13", "13", "13", "13", "14"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["11", "13", "13", "13", "13", "13", "14", "14", "14", "14", "15"]
    }
  },
  "Shock Blast": {
    id: 14900901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Solid Barrier (2)": {
    id: 14901201,
    atbCost: 4,
    sigil: null,
    description: `${increase("PDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      pDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Heavenly Grasp": {
    id: 14901301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, with Command Gauge max in Attack Stance: x1.5 damage.`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"]
    }
  },
  "Gale Strike": {
    id: 14901501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Flare Star": {
    id: 14901601,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("MATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("PATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "480", "480", "480", "480", "540"],
      mAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      mAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      pAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Iai": {
    id: 14901701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      fireResistDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Protector's Blow": {
    id: 14901801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, against a single target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ["500", "", "", "", "", "", "740", "740", "740", "740", "900"]
    }
  },
  "Defira Surge (2)": {
    id: 14901901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge A (4)": {
    id: 14902001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Theatrical Strike": {
    id: 14901101,
    atbCost: 3,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", "Mid", "Self", null, undefined, undefined, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("Wind Damage", undefined, "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      pAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      windDamageIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      windDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      windDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      windDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Defira Surge A": {
    id: 14902301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("Fire Resist.", "Low", "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["180", "", "", "", "", "", "240", "240", "240", "240", "250"],
      fireResistDecreaseDur: ["20", "", "", "", "", "", "30", "30", "30", "30", "35"],
      fireResistDecreaseExt: ["5", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Torrential Thrust": {
    id: 14901001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["440", "510", "510", "510", "510", "510", "620", "620", "620", "620", "700"],
      waterResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Sandsplitter": {
    id: 14902401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Earth Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["440", "510", "510", "510", "510", "510", "620", "620", "620", "620", "700"],
      earthResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      earthResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      earthResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Mad Bull": {
    id: 15000101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Spinning Blaze": {
    id: 15000201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Quaga A (3)": {
    id: 15000301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Good Vibes": {
    id: 15000401,
    atbCost: 5,
    sigil: null,
    description: `${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "Mid")}\nAlso, ${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "Mid")}\n${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      mDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "9"]
    }
  },
  "Hell's Penalty": {
    id: 15000501,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Skullknocker": {
    id: 15000701,
    atbCost: 4,
    sigil: 'circle',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["520", "620", "620", "620", "620", "620", "910", "910", "910", "910", "1,040"]
    }
  },
  "Dual Slash": {
    id: 15000801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Thundaga A (4)": {
    id: 15001001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Twin Hell": {
    id: 15001101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Crushing Jump": {
    id: 15001401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x2).`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"]
    }
  },
  "Fira Surge (5)": {
    id: 15001501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Stalwart Bravery (2)": {
    id: 15001601,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Magic Ray (2)": {
    id: 15001801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "460", "460", "460", "460", "460", "540", "540", "540", "540", "560"]
    }
  },
  "Power Break": {
    id: 15001901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Flooding Stream": {
    id: 15002001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "740", "740", "740", "740", "900"]
    }
  },
  "Armora Breach Surge (3)": {
    id: 15002101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Watera Surge A (4)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Surge A (5)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Rising Strike": {
    id: 15000601,
    atbCost: 3,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, undefined, undefined, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("Water Damage", undefined, "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      pDefDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      pDefDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      waterDamageIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      waterDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      waterDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Shoot & Slash": {
    id: 15100101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "", "", "", "", "", "750", "750", "750", "750", "900"]
    }
  },
  "Waterga A (2)": {
    id: 15100201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "", "", "", "", "", "450", "450", "450", "450", "540"]
    }
  },
  "Snowstorm": {
    id: 15100301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Healing Showers": {
    id: 15100401,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["53", "63", "63", "63", "63", "63", "69", "69", "69", "69", "74"]
    }
  },
  "First Aid": {
    id: 15100501,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["106", "", "", "", "", "", "138", "138", "138", "138", "148"]
    }
  },
  "Amulet Tribute": {
    id: 15100601,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["5", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7"]
    }
  },
  "Recovery Circle": {
    id: 15100701,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "All Allies")}\nAlso, ${increase("PDEF", "Mid", "All Allies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      heal: ["42", "50", "50", "50", "50", "50", "54", "54", "54", "54", "59"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      pDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Core Sting": {
    id: 15100801,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Killing Slash": {
    id: 15100901,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["380", "460", "460", "460", "460", "460", "590", "590", "590", "590", "720"]
    }
  },
  "Stalwart Bravery (3)": {
    id: 15101101,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Defending Jab": {
    id: 15101201,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", "Mid", "All Allies", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "All Allies")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("PDEF", "Mid", "All Allies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      mDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      heal: ["5", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      pDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Swing": {
    id: 15101301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${remove("Phys. Defense Up", "Single Enemy")}`,
    valuesByOverboost: {
      damage: ["330", "400", "400", "400", "400", "400", "510", "510", "510", "510", "620"]
    }
  },
  "X-Shot": {
    id: 15101501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["300", "350", "350", "350", "350", "350", "420", "420", "420", "420", "480"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Ruinra Surge (2)": {
    id: 15101601,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Quakera Surge A (2)": {
    id: 15101701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Solid Bravery (3)": {
    id: 15101801,
    atbCost: 4,
    sigil: null,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "36", "36", "36", "36", "36", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "12", "12", "12", "12", "12", "13", "13", "13", "13", "14"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Aerora Surge A (2)": {
    id: 15102001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Impact (2)": {
    id: 15102201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Pineapple Shot": {
    id: 15200101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["370", "440", "440", "440", "440", "440", "580", "580", "580", "580", "690"]
    }
  },
  "Aeroga A": {
    id: 15200301,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["270", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"]
    }
  },
  "Hydroshot": {
    id: 15200201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"]
    }
  },
  "Laser Spark": {
    id: 15200401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Potion Volley": {
    id: 15200501,
    atbCost: 5,
    sigil: null,
    description: `${heal("Mag.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Darkness", "Self")}`,
    valuesByOverboost: {
      heal: ["117", "140", "140", "140", "140", "140", "152", "152", "152", "152", "163"]
    }
  },
  "Stalwart Manaward (3)": {
    id: 15200601,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Barrage": {
    id: 15200701,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Diving Burst": {
    id: 15200901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      iceResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      iceResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Quietude": {
    id: 15201001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Silence", "Single Enemy", undefined, 5, 2)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"],
      silenceRate: ["20", "20", "20", "20", "20", "20", "30", "30", "30", "30", "30"]
    }
  },
  "Parading Shot": {
    id: 15201401,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increaseCommandGauge(20)}`,
    valuesByOverboost: {
      damage: ["330", "", "", "", "", "", "510", "510", "510", "510", "620"]
    }
  },
  "Debravera Surge (3)": {
    id: 15201501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Striking Quintet": {
    id: 15201601,
    atbCost: 4,
    sigil: 'rhombus',
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["420", "", "", "", "", "", "660", "660", "660", "660", "790"]
    }
  },
  "Solid Manaward (2)": {
    id: 15201701,
    atbCost: 4,
    sigil: null,
    description: `${increase("MDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      mDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Thundara Surge (2)": {
    id: 15201901,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["300", "", "", "", "", "", "410", "410", "410", "410", "420"]
    }
  },
  "Rock Blast": {
    id: 15202001,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Earth", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Fira Surge A (6)": {
    id: 15202101,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Blazing Rose": {
    id: 15202201,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "450", "450", "450", "450", "450", "550", "550", "550", "550", "620"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Armora Breach Surge (4)": {
    id: null,
    atbCost: 4,
    sigil: null,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Bullet Hail": {
    id: 15202501,
    atbCost: 4,
    sigil: null,
    description: `${damage("Phys. Non-elem.", "All Enemies", null)}\nAlso, ${decrease("PATK", "Mid", "All Enemies", null, undefined, undefined, undefined)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Fire Resist.", undefined, "All Enemies", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["350", "400", "400", "400", "400", "400", "490", "490", "490", "490", "560"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      pAtkDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Nightglint": {
    id: 15201301,
    atbCost: 3,
    sigil: 'rhombus',
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}\nWhen Buff is granted to [Rng.: Self], ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "360", "360", "360", "360", "420"],
      pDefDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      pDefDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      mDefDecreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      mDefDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  }
};

type Range = 'Single Enemy' | 'All Enemies' | 'Single Ally' | 'All Allies' | 'Self' | 'Affected Targets' | 'Ally (Excluding Self)' | null;
type CriticalRate = number | null;
type Effect = 'Ailment: Stun' | 'Ailment: Poison' | 'Ailment: Silence' | 'Haste';
type Attribute = 'PATK' | 'MATK' | 'PDEF' | 'MDEF' | 'Fire Resist.' | 'Ice Resist.' | 'Thunder Resist.' | 'Earth Resist.' | 'Water Resist.' | 'Wind Resist.' | 'Fire Damage' | 'Ice Damage' | 'Thunder Damage' | 'Earth Damage' | 'Water Damage' | 'Wind Damage';
type Element = 'Non-elem.' | 'Fire' | 'Ice' | 'Lightning' | 'Earth' | 'Water' | 'Wind';
type DamageType = `Phys. ${Element}` | `Mag. ${Element}`;
type HealType = 'Mag.' | 'Phys.';
type Potency = 'Low' | 'Mid' | 'High' | undefined;
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
    'Thunder Damage': 'lightningDamage',
    'Earth Damage': 'earthDamage',
    'Water Damage': 'waterDamage',
    'Wind Damage': 'windDamage'
  };
  return attributeMap[attribute];
}

function damage(type: DamageType, range: Range, critRate: CriticalRate) {
  const critRateString = critRate === null      ? ''                              :
                         critRate === undefined ? ` ([Crit rate: {{critRate}}%])` :
                                                  ` ([Crit rate: ${critRate}%])`  ;
  return `Deal {{damage}}% ${type} damage [Rng.: ${range}]${critRateString}.`;
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

function heal(type: HealType, range: Range) {
  return `${type} heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: ${range}]`;
}

function regen(range: Range, duration: Duration, extension: Extension) {
  const dur = duration ? duration : '{{regenDur}}';
  const ext = extension ? extension : '{{regenExt}}';
  return `Regen is applied [Rng.: ${range}]. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function apply(effect: Effect, range: Range, rate: Rate, duration: Duration, extension: Extension) {
  const effectMap: { [K in Effect]: string } = {
    'Ailment: Stun': 'stun',
    'Ailment: Poison': 'poison',
    'Ailment: Silence': 'silence',
    'Haste': 'haste'
  }
  const effectKey = effectMap[effect];
  const rateString = rate === null      ? ''                               :
                     rate === undefined ? ` [Rate: {{${effectKey}Rate}}%]` :
                                          ` [Rate: ${rate}%]`              ;
  const dur = duration ? duration : `{{${effectKey}Dur}}`;
  const ext = extension ? extension : `{{${effectKey}Ext}}`;
  return `${effect} is applied [Rng.: ${range}]${rateString}. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function remove(effect: string, range: Range) {
  return `Removes ${effect} [Rng.: ${range}].`;
}

function increaseLimitGauge(potency: Potency, range: Range) {
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
