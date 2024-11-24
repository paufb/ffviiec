import { ReinforcementAbility } from '../models/ReinforcementAbility.ts';

export const reinforcementAbilitiesData = {
  10101: new ReinforcementAbility({
    id: 10101,
    name: 'Boost HP',
    effect: 'HP +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      flat: [25, 50, 150, 250, 250, 250, 250, 250, 250, 250],
      percent: [5, 15, 30, 45, 60, 70, 80, 90, 95, 100]
    }
  }),
  10201: new ReinforcementAbility({
    id: 10201,
    name: 'Boost PATK',
    effect: 'Phys. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      flat: [10, 20, 60, 100, 100, 100, 100],
      percent: [5, 10, 15, 20, 30, 40, 50]
    }
  }),
  10301: new ReinforcementAbility({
    id: 10301,
    name: 'Boost MATK',
    effect: 'Mag. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      flat: [10, 20, 60, 100, 100, 100, 100],
      percent: [5, 10, 15, 20, 30, 40, 50]
    }
  }),
  10401: new ReinforcementAbility({
    id: 10401,
    name: 'Boost PDEF',
    effect: 'Phys. Defense +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 15, 30, 45, 60, 70, 80]
    }
  }),
  10501: new ReinforcementAbility({
    id: 10501,
    name: 'Boost MDEF',
    effect: 'Mag. Defense +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 15, 30, 45, 60, 70, 80]
    }
  }),
  10601: new ReinforcementAbility({
    id: 10601,
    name: 'Boost HEAL',
    effect: 'Healing Pot. +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      flat: [5, 10, 30, 50, 50, 50, 50, 50, 50, 50],
      percent: [5, 15, 30, 45, 60, 70, 80, 90, 95, 100]
    }
  }),
  10801: new ReinforcementAbility({
    id: 10801,
    name: 'Boost Crit. Pot.',
    effect: 'Crit. Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 20, 40, 60, 80, 100, 120]
    }
  }),
  10803: new ReinforcementAbility({
    id: 10803,
    name: 'Critical Pot. Arcanum',
    effect: 'Crit. Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [50]
    }
  }),
  11001: new ReinforcementAbility({
    id: 11001,
    name: 'Boost ATK',
    effect: 'Phys. Attack +{{flat}} / +{{percent}}%\nMag. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      flat: [5, 10, 30, 50, 50, 50, 50],
      percent: [3, 5, 7, 10, 15, 20, 25]
    }
  }),
  11201: new ReinforcementAbility({
    id: 11201,
    name: 'Boost PATK (All Allies)',
    effect: 'All Allies\' Phys. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      flat: [10, 20, 40, 60, 60, 60, 60],
      percent: [5, 10, 14, 18, 22, 25, 28]
    }
  }),
  11301: new ReinforcementAbility({
    id: 11301,
    name: 'Boost MATK (All Allies)',
    effect: 'All Allies\' Mag. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      flat: [10, 20, 40, 60, 60, 60, 60],
      percent: [5, 10, 14, 18, 22, 25, 28]
    }
  }),
  11401: new ReinforcementAbility({
    id: 11401,
    name: 'Boost PDEF (All Allies)',
    effect: 'All Allies\' Phys. Defense +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35],
    levelValues: {
      percent: [5, 10, 20, 30, 40]
    }
  }),
  11501: new ReinforcementAbility({
    id: 11501,
    name: 'Boost MDEF (All Allies)',
    effect: 'All Allies\' Mag. Defense +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35],
    levelValues: {
      percent: [5, 10, 20, 30, 40]
    }
  }),
  12001: new ReinforcementAbility({
    id: 12001,
    name: 'Boost ATK (All Allies)',
    effect: 'All Allies\' Phys. Attack +{{flat}} / +{{percent}}%\nAll Allies\' Mag. Attack +{{flat}} / +{{percent}}%',
    reqPts: [1, 5],
    levelValues: {
      flat: [5, 10],
      percent: [3, 5]
    }
  }),
  20201: new ReinforcementAbility({
    id: 20201,
    name: 'Boost Fire Pot.',
    effect: 'Fire Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20202: new ReinforcementAbility({
    id: 20202,
    name: 'Fire Mastery',
    effect: 'Fire Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [20]
    }
  }),
  20203: new ReinforcementAbility({
    id: 20203,
    name: 'Flameblade Arcanum',
    effect: 'Fire Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  20301: new ReinforcementAbility({
    id: 20301,
    name: 'Boost Ice Pot.',
    effect: 'Ice Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20302: new ReinforcementAbility({
    id: 20302,
    name: 'Ice Mastery',
    effect: 'Ice Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [20]
    }
  }),
  20303: new ReinforcementAbility({
    id: 20303,
    name: 'Frostblade Arcanum',
    effect: 'Ice Ability Damage +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  20401: new ReinforcementAbility({
    id: 20401,
    name: 'Boost Lightning Pot.',
    effect: 'Lightning Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20403: new ReinforcementAbility({
    id: 20403,
    name: 'Levinblade Arcanum',
    effect: 'Lightning Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  20501: new ReinforcementAbility({
    id: 20501,
    name: 'Boost Earth Pot.',
    effect: 'Earth Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20503: new ReinforcementAbility({
    id: 20503,
    name: 'Earthblade Arcanum',
    effect: 'Earth Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  20601: new ReinforcementAbility({
    id: 20601,
    name: 'Boost Water Pot.',
    effect: 'Water Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20602: new ReinforcementAbility({
    id: 20602,
    name: 'Water Mastery',
    effect: 'Water Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [20]
    }
  }),
  20603: new ReinforcementAbility({
    id: 20603,
    name: 'Waterblade Arcanum',
    effect: 'Water Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  20701: new ReinforcementAbility({
    id: 20701,
    name: 'Boost Wind Pot.',
    effect: 'Wind Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55, 65, 80, 100],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85, 100, 110, 120]
    }
  }),
  20702: new ReinforcementAbility({
    id: 20702,
    name: 'Wind Mastery',
    effect: 'Wind Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [20]
    }
  }),
  20703: new ReinforcementAbility({
    id: 20703,
    name: 'Windstrike Arcanum',
    effect: 'Wind Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [35]
    }
  }),
  30201: new ReinforcementAbility({
    id: 30201,
    name: 'Boost Fire Resist.',
    effect: 'Fire Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  30301: new ReinforcementAbility({
    id: 30301,
    name: 'Boost Ice Resist.',
    effect: 'Ice Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  30401: new ReinforcementAbility({
    id: 30401,
    name: 'Boost Lightning Resist.',
    effect: 'Lightning Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  30501: new ReinforcementAbility({
    id: 30501,
    name: 'Boost Earth Resist.',
    effect: 'Earth Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  30601: new ReinforcementAbility({
    id: 30601,
    name: 'Boost Water Resist.',
    effect: 'Water Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  30701: new ReinforcementAbility({
    id: 30701,
    name: 'Boost Wind Resist.',
    effect: 'Wind Resist. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 10, 20, 30, 40, 45, 50]
    }
  }),
  40101: new ReinforcementAbility({
    id: 40101,
    name: 'Boost Poison Resist.',
    effect: 'Poison Resist. +{{percent}}%',
    reqPts: [1, 5, 15],
    levelValues: {
      percent: [25, 50, 100]
    }
  }),
  51301: new ReinforcementAbility({
    id: 51301,
    name: 'Boost Ability Pot.',
    effect: 'Attack Stance Cmd. Gauge Max.: Mag. Ability Dmg. +{{percent}}%\nAttack Stance Cmd. Gauge Max.: Phys. Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [3, 8, 15, 22, 30, 35, 40]
    }
  }),
  51401: new ReinforcementAbility({
    id: 51401,
    name: 'Boost Phys. Ability Pot.',
    effect: 'Attack Stance Cmd. Gauge Max.: Phys. Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 15, 30, 45, 60, 70, 80]
    }
  }),
  51501: new ReinforcementAbility({
    id: 51501,
    name: 'Boost Mag. Ability Pot.',
    effect: 'Attack Stance Cmd. Gauge Max.: Mag. Ability Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [5, 15, 30, 45, 60, 70, 80]
    }
  }),
  51701: new ReinforcementAbility({
    id: 51701,
    name: 'Boost Limit Break Pot.',
    effect: 'Limit Break Dmg. +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [6, 15, 25, 40, 55, 70, 85]
    }
  }),
  51801: new ReinforcementAbility({
    id: 51801,
    name: 'ATB Boost',
    effect: 'ATB +{{flat}} at battle start',
    reqPts: [1, 5, 15, 25, 35],
    levelValues: {
      flat: [2, 2.5, 3, 3.5, 4]
    }
  }),
  51901: new ReinforcementAbility({
    id: 51901,
    name: 'Buff/Debuff Extension (Stats/Pot./Res.)',
    effect: 'Buff/Debuff (Stats/Pot./Res.) Effect Duration +{{percent}}%',
    reqPts: [1, 5, 15, 25, 35, 45, 55],
    levelValues: {
      percent: [10, 40, 80, 120, 150, 180, 200]
    }
  }),
  51903: new ReinforcementAbility({
    id: 51903,
    name: 'Buff/Debuff Extension+ (Stats/Pot./Res.)',
    effect: 'Buff/Debuff (Stats/Pot./Res.) Effect Duration Extension +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [60]
    }
  }),
  52102: new ReinforcementAbility({
    id: 52102,
    name: 'Debuff Extension (Stats/Pot./Res.) Mastery',
    effect: 'Debuff (Stats/Pot./Res.) Effect Duration +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [60]
    }
  }),
  52501: new ReinforcementAbility({
    id: 52501,
    name: 'Physical Ability Mastery',
    effect: 'Attack Stance Cmd. Gauge Max.: Phys. Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [15]
    }
  }),
  52601: new ReinforcementAbility({
    id: 52601,
    name: 'Magic Ability Mastery',
    effect: 'Attack Stance Cmd. Gauge Max.: Mag. Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [15]
    }
  }),
  52701: new ReinforcementAbility({
    id: 52701,
    name: 'Flamefrost Fangs',
    effect: 'Fire/Ice Resist. +{{percentResist}}%\nFire/Ice Ability Dmg. +{{percentDmg}}%',
    reqPts: [10],
    levelValues: {
      percentResist: [20],
      percentDmg: [15]
    }
  }),
  52901: new ReinforcementAbility({
    id: 52901,
    name: 'Flamefrost Rabbit Ears',
    effect: 'Fire/Ice Resist. +{{percentResist}}%\nFire/Ice Ability Dmg. +{{percentDmg}}%',
    reqPts: [10],
    levelValues: {
      percentResist: [20],
      percentDmg: [15]
    }
  }),
  53001: new ReinforcementAbility({
    id: 53001,
    name: 'Indomitable Soul',
    effect: 'Phys. & Mag. Defence +{{percentDefense}}%\nPhys. & Mag. Attack +{{percentAttack}}%',
    reqPts: [10],
    levelValues: {
      percentDefense: [20],
      percentAttack: [10]
    }
  }),
  53101: new ReinforcementAbility({
    id: 53101,
    name: 'Reprieve',
    effect: 'Applied Reprieve to self when battle begins (Effect Dur.: 999s / Effect Dur. Ext.: +0s)\nWhen triggered: restores {{restore}}% of max HP and grants Invincible (Effect Dur.: {{invincibleDur}}s / Effect Dur. Ext.: +0s)',
    reqPts: [1, 5, 15],
    levelValues: {
      restore: [5, 15, 25],
      invincibleDur: [1, 5, 10]
    }
  }),
  53201: new ReinforcementAbility({
    id: 53201,
    name: 'Sun\'s Favor',
    effect: 'HP +{{percentHP}}% / Phys. Defense +{{percentDef}}%',
    reqPts: [10],
    levelValues: {
      percentHP: [5],
      percentDef: [15]
    }
  }),
  53301: new ReinforcementAbility({
    id: 53301,
    name: 'Magic Ward',
    effect: 'HP +{{percentHP}}%\nMag. Defense +{{percentMDef}}%',
    reqPts: [10],
    levelValues: {
      percentHP: [5],
      percentMDef: [15]
    }
  }),
  53401: new ReinforcementAbility({
    id: 53401,
    name: 'Alluring Ploy',
    effect: 'Phys. & Mag. Defence +{{percentDef}}%\nPhys. & Mag. Attack +{{percentAtk}}%',
    reqPts: [10],
    levelValues: {
      percentDef: [20],
      percentAtk: [10]
    }
  }),
  53501: new ReinforcementAbility({
    id: 53501,
    name: 'Bahamut\'s Bite',
    effect: 'Phys, Ability Dmg. +{{percentPDmg}}%\nPhys. Attack +{{percentPAtk}}%',
    reqPts: [10],
    levelValues: {
      percentPDmg: [10],
      percentPAtk: [5]
    }
  }),
  53502: new ReinforcementAbility({
    id: 53502,
    name: 'Bahamut\'s Protection',
    effect: 'Phys. & Mag. Defence +{{percentDef}}%\nHealing Pot. +{{percentHeal}}%',
    reqPts: [10],
    levelValues: {
      percentDef: [20],
      percentHeal: [10]
    }
  }),
  53503: new ReinforcementAbility({
    id: 53503,
    name: 'Bahamut\'s Whisper',
    effect: 'Mag. Attack +{{percent}}%\nAttack Stance Cmd. Gauge Max.: Mag. Ability Dmg. +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [10]
    }
  }),
  53601: new ReinforcementAbility({
    id: 53601,
    name: 'Interruption Mastery',
    effect: 'Enemy Interrupted: Ability Pot. +{{percent}}%',
    reqPts: [1, 5, 15, 25],
    levelValues: {
      percent: [10, 20, 40, 60]
    }
  }),
  53801: new ReinforcementAbility({
    id: 53801,
    name: 'Interruption ATB Boost',
    effect: 'All Allies\' ATB +{{flat}} when interrupting enemy',
    reqPts: [1, 5, 15, 25],
    levelValues: {
      flat: [0.5, 1, 1.5, 2]
    }
  }),
  53901: new ReinforcementAbility({
    id: 53901,
    name: 'Regen Boost',
    effect: 'Applies Regen to all allies when battle begins\n(Effect Dur.: {{flat}}s / Effect Dur. Ext.: +0s)',
    reqPts: [1, 5, 15, 25],
    levelValues: {
      flat: [15, 30, 45, 60]
    }
  }),
  53303: new ReinforcementAbility({
    id: 53303,
    name: 'Physical & Magic Ward',
    effect: 'Phys. & Mag. Defence +{{percent}}%',
    reqPts: [10],
    levelValues: {
      percent: [15]
    }
  }),
  53701: new ReinforcementAbility({
    id: 53701,
    name: 'Eerie Mask',
    effect: 'HP +{{hpPercent}}%\nMag. Defense +{{magDefensePercent}}%',
    reqPts: [10],
    levelValues: {
      hpPercent: [5],
      magDefensePercent: [15]
    }
  }),
  11901: new ReinforcementAbility({
    id: 11901,
    name: 'Boost DEF (All Allies)',
    effect: 'All Allies\' Phys. Defense +{{percent}}%\nAll Allies\' Mag. Defense +{{percent}}%',
    reqPts: [1, 5],
    levelValues: {
      percent: [3, 5]
    }
  })
}
