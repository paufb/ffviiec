import { CommandAbility } from '../types.ts';

export const cAbilitiesData: { [key: string]: CommandAbility } = {
  "Braver": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when matching sigils are destroyed, x1.5 damage.`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Blast Wave": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Armor Break": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Blade Burst": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Stalwart Barrier": {
    atbCost: 4,
    description: `${increase("PDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Thunderstrike": {
    atbCost: 4,
    description: `${damage("Phys. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Shock Slice": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Stun", "Single Enemy", undefined, 5, 2)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"],
      stunRate: ["20", "", "", "", "", "", "30", "30", "30", "30", "30"]
    }
  },
  "Healing Wave": {
    atbCost: 5,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["50", "60", "60", "60", "60", "60", "65", "65", "65", "65", "71"]
    }
  },
  "Blizzaga A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Disorder": {
    atbCost: 5,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nNo boosts to limit and summon gauges when using this ability.`,
    valuesByOverboost: {
      damage: ["850", "", "", "", "", "", "1,320", "1,320", "1,320", "1,320", "1,600"]
    }
  },
  "Bloody End": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Seasplitter": {
    atbCost: 4,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Blizzara Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Sanctuary": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Blazing Strike": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Free Energy": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "", "", "", "", "", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Quakera Surge A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Freezing Stream": {
    atbCost: 4,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "740", "740", "740", "740", "900"]
    }
  },
  "Fira Surge A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Fierce Charged Slash": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Impact (1)": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Blitz Beat": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Agitation": {
    atbCost: 4,
    description: `${increase("PDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Phys.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["10", "", "", "", "", "", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "", "", "", "", "", "4", "4", "4", "4", "4"],
      heal: ["4", "", "", "", "", "", "6", "6", "6", "6", "6"]
    }
  },
  "Stalwart Manaward (1)": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Stalwart Faith (1)": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Doom Impact": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Chain Bomber": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["350", "420", "420", "420", "420", "420", "550", "550", "550", "550", "650"]
    }
  },
  "Energy Laser": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Firaga A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Pyroball": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Solid Barrier (1)": {
    atbCost: 4,
    description: `${increase("PDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      pDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Jet Fists": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The lower your HP, the higher the ability pot. (max: x3).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Blizzara Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Manara Breach Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Watera Surge A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Energization": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Dorsal Fin Shot": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Vigor": {
    atbCost: 5,
    description: `${heal("Phys.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Silence", "Self")}`,
    valuesByOverboost: {
      heal: ["93", "112", "112", "112", "112", "112", "121", "121", "121", "121", "130"]
    }
  },
  "Divekick": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["530", "640", "640", "640", "640", "640", "830", "830", "830", "830", "990"]
    }
  },
  "Uppershot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Thundaga A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"]
    }
  },
  "Sonic Spiral": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"]
    }
  },
  "Chi Trap": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["300", "350", "350", "350", "350", "350", "420", "420", "420", "420", "480"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Wall of Will": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Healing Waves": {
    atbCost: 4,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["38", "46", "46", "46", "46", "46", "49", "49", "49", "49", "54"]
    }
  },
  "Featherstrike": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Freezing Blow": {
    atbCost: 4,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "No Mercy": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Low", "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"],
      mAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      mAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Solid Bravery (1)": {
    atbCost: 4,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Armora Breach Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Zangan Fist": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "780", "780", "780", "780", "780", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Spiral Levin Strike": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", undefined, "Self", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"],
      mAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"]
    }
  },
  "Spinning Fervor": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "810", "810", "810", "810", "940"]
    }
  },
  "Debravera Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Stalwart Manaward (2)": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["10", "13", "13", "13", "13", "13", "13", "13", "13", "13", "15"]
    }
  },
  "Blizzaga A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Tempest Force": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Saving Grace": {
    atbCost: 5,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "290", "290", "290", "290", "340"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Raging Sphere": {
    atbCost: 4,
    description: `${damage("Mag. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Curaga A": {
    atbCost: 5,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["53", "63", "63", "63", "63", "63", "69", "69", "69", "69", "74"]
    }
  },
  "Thundaga A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Quaga A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Nightbloom": {
    atbCost: 4,
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
    atbCost: 3,
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
    atbCost: 4,
    description: `${remove("Phys. Attack Down, Mag. Attack Down", "Single Ally")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["77", "", "", "", "", "", "100", "100", "100", "100", "108"]
    }
  },
  "Solid Manaward (1)": {
    atbCost: 4,
    description: `${increase("MDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      mDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Snowspell": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Thundara Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "460", "460", "460", "460", "480"]
    }
  },
  "Healing Pulse": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}\nAlso, against a single target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "530", "530", "530", "530", "630"]
    }
  },
  "Armora Breach Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Spiritual Harmony": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Blizzara Surge A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fruitful Energy": {
    atbCost: 3,
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
  "Manaward A": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Eternal Storm": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("MDEF", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Therapeutic Touch": {
    atbCost: 5,
    description: `${heal("Mag.", "All Allies")}\nAlso, ${regen("All Allies", undefined, undefined)}`,
    valuesByOverboost: {
      heal: ["8", "9", "9", "9", "9", "9", "10", "10", "10", "10", "11"],
      regenDur: ["9", "12", "12", "12", "12", "12", "15", "15", "15", "15", "18"],
      regenExt: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "6"]
    }
  },
  "Waterga A (1)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Blaze Rush": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Sonic Fangs": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Mystic Flow": {
    atbCost: 5,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["81", "97", "97", "97", "97", "97", "105", "105", "105", "105", "113"]
    }
  },
  "Frenzied Fang": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Canyon Gale": {
    atbCost: 4,
    description: `${damage("Mag. Wind", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", "Mid", "All Enemies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["270", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Spiral Swing (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Wild Howling": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${remove("Mag. Defense Up", "All Enemies")}`,
    valuesByOverboost: {
      damage: ["290", "", "", "", "", "", "450", "450", "450", "450", "540"]
    }
  },
  "Power Fang": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}\n${regen("Self", 3, 3)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["15", "18", "18", "18", "18", "18", "18", "18", "18", "18", "21"],
      lightningResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7"]
    }
  },
  "Manara Breach Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Defira Surge (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Growing Ivy": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Rolling Claw": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Shuriken Throw": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", undefined, "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "", "", "", "", "", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Flurry of Steel": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Sweeping Spin": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      iceResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      iceResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Quaga A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Earth Ninjutsu": {
    atbCost: 4,
    description: `${damage("Phys. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Stalwart Faith (2)": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      lightningResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Venomstrike": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Poison", "Single Enemy", undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      poisonRate: ["50", "50", "50", "50", "50", "50", "70", "70", "70", "70", "70"],
      poisonDur: ["24", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30"],
      poisonExt: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7"]
    }
  },
  "Ice Ninjutsu": {
    atbCost: 4,
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Wind Ninjutsu": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Twister": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Feisty Spirit": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The higher your HP, the higher the ability pot. (max: x2).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Watera Surge A (3)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Watera Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Explosion": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("Fire Damage", "Low", "Self", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["390", "530", "530", "530", "530", "530", "620", "620", "620", "620", "700"],
      fireDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      fireDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      fireDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Blizzara Surge A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Sonic Meow": {
    atbCost: 5,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 30)}\nAlso, when hitting critical, x3 damage.`,
    valuesByOverboost: {
      damage: ["380", "460", "460", "460", "460", "460", "590", "590", "590", "590", "700"]
    }
  },
  "Bloomin' Spray": {
    atbCost: 4,
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "450", "450", "450", "450", "450", "550", "550", "550", "550", "620"],
      waterResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Blizzaga A (3)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "", "", "", "", "", "440", "440", "440", "440", "520"]
    }
  },
  "Firaga A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Instant Barrier": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Low")}\nWhen hitting critical, ${decrease("PDEF", "High", "Affected Targets", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Fat Cat Attack": {
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Solid Bravery (2)": {
    atbCost: 4,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Blizzara Surge A (5)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Comforting Cuisine": {
    atbCost: 4,
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
  "Blizzaga A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Gilded Spirit": {
    atbCost: 4,
    description: `${increaseLimitGauge(undefined, "Self")}\nAlso, ${heal("Mag.", "Self")}\n${regen("Self", undefined, 3)}`,
    valuesByOverboost: {
      limitGaugeIncreasePot: ["5", "", "", "", "", "", "8", "8", "8", "8", "10"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"]
    }
  },
  "Spellgun Shower": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Wind", "Single Enemy", null)}\nThe higher your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["220", "", "", "", "", "", "340", "340", "340", "340", "400"],
      limitGaugeIncreasePot: ["3", "", "", "", "", "", "4", "4", "4", "4", "4"]
    }
  },
  "Quick Draw": {
    atbCost: 2,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x3).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["160", "190", "190", "190", "190", "190", "250", "250", "250", "250", "300"],
      limitGaugeIncreasePot: ["1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2"]
    }
  },
  "Wardshot": {
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${increaseLimitGauge(undefined, "Self")}\nWhen [Rng.: Self]'s HP is 30% or less, ${apply("Ailment: Poison", "All Enemies", null, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"],
      limitGaugeIncreasePot: ["2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3"],
      poisonDur: ["12", "16", "16", "16", "16", "16", "20", "20", "20", "20", "25"],
      poisonExt: ["3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "6"]
    }
  },
  "Sludge Shot": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "Single Enemy", null)}\nAlso, when Debuff is granted to Target, x1.2 damage.\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"],
      limitGaugeIncreasePot: ["4", "", "", "", "", "", "5", "5", "5", "5", "5"]
    }
  },
  "Gunspinner Shot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when Debuff is granted to Target, x1.5 damage.\n${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"],
      limitGaugeIncreasePot: ["2", "", "", "", "", "", "3", "3", "3", "3", "3"]
    }
  },
  "Pentaburst Shot": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["650", "", "", "", "", "", "1,140", "1,140", "1,140", "1,140", "1,300"],
      limitGaugeIncreasePot: ["4", "", "", "", "", "", "5", "5", "5", "5", "5"]
    }
  },
  "Spinning Pentashot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x1.5).\nAlso, ${increaseLimitGauge(undefined, "Self")}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"],
      limitGaugeIncreasePot: ["3", "", "", "", "", "", "5", "5", "5", "5", "5"]
    }
  },
  "Rapid Slash": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Magic Ray (1)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "460", "460", "460", "460", "460", "540", "540", "540", "540", "560"]
    }
  },
  "Healing Vortex": {
    atbCost: 5,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["101", "121", "121", "121", "121", "121", "131", "131", "131", "131", "141"]
    }
  },
  "Spirit Burst": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Gale Blast": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Slashing Thrust": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Homing Blast": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Destructive Swipe": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Ceremonial Slice": {
    atbCost: 5,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", undefined, "Self", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["700", "840", "840", "840", "840", "840", "1,220", "1,220", "1,220", "1,220", "1,400"],
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"]
    }
  },
  "Floral Flourish": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe higher your HP, the higher the ability pot. (max: x3).`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "330", "330", "330", "330", "400"]
    }
  },
  "Freezing Cleave": {
    atbCost: 4,
    description: `${damage("Phys. Ice", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "", "", "", "", "", "550", "550", "550", "550", "620"],
      iceResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      iceResistDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Spiral Swing (2)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge (4)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Dual Onslaught": {
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["480", "", "", "", "", "", "710", "710", "710", "710", "850"]
    }
  },
  "Lightning Edge": {
    atbCost: 4,
    description: `${damage("Phys. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"]
    }
  },
  "Fira Surge A (3)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Ruinra Impact A": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "380", "380", "380", "380", "390"]
    }
  },
  "Gale Slash": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "Single Enemy", null)}\nAlso, when Debuff is granted to Target, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"]
    }
  },
  "Telluric Fury": {
    atbCost: 2,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["150", "170", "170", "170", "170", "170", "210", "210", "210", "210", "240"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["11", "13", "13", "13", "13", "13", "13", "13", "13", "13", "14"],
      mDefDecreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
    }
  },
  "Aerial Frostblade": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Sweeping Slash": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["350", "420", "420", "420", "420", "420", "550", "550", "550", "550", "650"]
    }
  },
  "Frenzied Stance": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Firaga A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Thundaga A (3)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Steadfast Stance": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Solid Barrier (2)": {
    atbCost: 4,
    description: `${increase("PDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      pDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Heavenly Grasp": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, with Command Gauge max in Attack Stance: x1.5 damage.`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"]
    }
  },
  "Gale Strike": {
    atbCost: 4,
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Flare Star": {
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, against a single target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ["500", "", "", "", "", "", "740", "740", "740", "740", "900"]
    }
  },
  "Defira Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", undefined, "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Theatrical Strike": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("Fire Resist.", "Low", "All Enemies", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["180", "", "", "", "", "", "240", "240", "240", "240", "250"],
      fireResistDecreaseDur: ["20", "", "", "", "", "", "30", "30", "30", "30", "35"],
      fireResistDecreaseExt: ["5", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Torrential Thrust": {
    atbCost: 4,
    description: `${damage("Phys. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["440", "510", "510", "510", "510", "510", "620", "620", "620", "620", "700"],
      waterResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Sandsplitter": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Earth Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["440", "510", "510", "510", "510", "510", "620", "620", "620", "620", "700"],
      earthResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      earthResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      earthResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Mad Bull": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Spinning Blaze": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Quaga A (3)": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Good Vibes": {
    atbCost: 5,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Skullknocker": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["520", "620", "620", "620", "620", "620", "910", "910", "910", "910", "1,040"]
    }
  },
  "Dual Slash": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Thundaga A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Twin Hell": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Crushing Jump": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nThe lower your HP, the higher the ability pot. (max: x2).`,
    valuesByOverboost: {
      damage: ["370", "", "", "", "", "", "570", "570", "570", "570", "700"]
    }
  },
  "Fira Surge (5)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Stalwart Bravery (2)": {
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "460", "460", "460", "460", "460", "540", "540", "540", "540", "560"]
    }
  },
  "Power Break": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Flooding Stream": {
    atbCost: 4,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "740", "740", "740", "740", "900"]
    }
  },
  "Armora Breach Surge (3)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Watera Surge A (4)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Surge A (5)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Rising Strike": {
    atbCost: 3,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "", "", "", "", "", "750", "750", "750", "750", "900"]
    }
  },
  "Waterga A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "", "", "", "", "", "450", "450", "450", "450", "540"]
    }
  },
  "Snowstorm": {
    atbCost: 4,
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Healing Showers": {
    atbCost: 5,
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["53", "63", "63", "63", "63", "63", "69", "69", "69", "69", "74"]
    }
  },
  "First Aid": {
    atbCost: 5,
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["106", "", "", "", "", "", "138", "138", "138", "138", "148"]
    }
  },
  "Amulet Tribute": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "All Allies", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["5", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7"]
    }
  },
  "Recovery Circle": {
    atbCost: 5,
    description: `${heal("Mag.", "All Allies")}\nAlso, ${increase("PDEF", "Mid", "All Allies", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      heal: ["42", "50", "50", "50", "50", "50", "54", "54", "54", "54", "59"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      pDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Core Sting": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Killing Slash": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["380", "460", "460", "460", "460", "460", "590", "590", "590", "590", "720"]
    }
  },
  "Stalwart Bravery (3)": {
    atbCost: 4,
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
    atbCost: 4,
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
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${remove("Phys. Defense Up", "Single Enemy")}`,
    valuesByOverboost: {
      damage: ["330", "400", "400", "400", "400", "400", "510", "510", "510", "510", "620"]
    }
  },
  "X-Shot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["300", "350", "350", "350", "350", "350", "420", "420", "420", "420", "480"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Ruinra Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Quakera Surge A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Solid Bravery (3)": {
    atbCost: 4,
    description: `${increase("PATK", "Low", "Single Ally", null, undefined, undefined, "Mid")}\nAlso, ${regen("Single Ally", undefined, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "36", "36", "36", "36", "36", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "12", "12", "12", "12", "12", "13", "13", "13", "13", "14"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Aerora Surge A (2)": {
    atbCost: 4,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Impact (2)": {
    atbCost: 4,
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Pineapple Shot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["370", "440", "440", "440", "440", "440", "580", "580", "580", "580", "690"]
    }
  },
  "Aeroga A": {
    atbCost: 4,
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["270", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"]
    }
  },
  "Hydroshot": {
    atbCost: 4,
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"]
    }
  },
  "Laser Spark": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, undefined, undefined, undefined)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Potion Volley": {
    atbCost: 5,
    description: `${heal("Mag.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Darkness", "Self")}`,
    valuesByOverboost: {
      heal: ["117", "140", "140", "140", "140", "140", "152", "152", "152", "152", "163"]
    }
  },
  "Stalwart Manaward (3)": {
    atbCost: 4,
    description: `${increase("MDEF", undefined, "Single Ally", null, undefined, undefined, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Barrage": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Diving Burst": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      iceResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      iceResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Quietude": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Silence", "Single Enemy", undefined, 5, 2)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"],
      silenceRate: ["20", "20", "20", "20", "20", "20", "30", "30", "30", "30", "30"]
    }
  },
  "Parading Shot": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increaseCommandGauge(20)}`,
    valuesByOverboost: {
      damage: ["330", "", "", "", "", "", "510", "510", "510", "510", "620"]
    }
  },
  "Debravera Surge (3)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Striking Quintet": {
    atbCost: 4,
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["420", "", "", "", "", "", "660", "660", "660", "660", "790"]
    }
  },
  "Solid Manaward (2)": {
    atbCost: 4,
    description: `${increase("MDEF", "Mid", "Single Ally", null, undefined, undefined, undefined)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      mDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Thundara Surge (2)": {
    atbCost: 4,
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["300", "", "", "", "", "", "410", "410", "410", "410", "420"]
    }
  },
  "Rock Blast": {
    atbCost: 4,
    description: `${damage("Mag. Earth", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Fira Surge A (6)": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Blazing Rose": {
    atbCost: 4,
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", undefined, "Single Enemy", null, undefined, undefined, "High")}`,
    valuesByOverboost: {
      damage: ["390", "450", "450", "450", "450", "450", "550", "550", "550", "550", "620"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Armora Breach Surge (4)": {
    atbCost: 4,
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, undefined, undefined, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Bullet Hail": {
    atbCost: 4,
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
    atbCost: 3,
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

type Range = 'Single Enemy' | 'All Enemies' | 'Single Ally' | 'All Allies' | 'Self' | 'Affected Targets' | null;
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
    'Haste': "haste"
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
