import { CommandAbility } from '../models/CommandAbility.ts';
import { Materia } from '../models/Materia.ts';

export const materiaData = {
  2101001: new Materia({
    id: 2101001,
    name: 'Ruin',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2101001,
      name: 'Ruin',
      atbCost: 3,
      sigil: null,
      description: 'Deal 250% Mag. Non-elem. damage [Rng.: Single Enemy].'
    })
  }),
  2101003: new Materia({
    id: 2101003,
    name: 'Ruin Blow',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2101003,
      name: 'Ruin Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 250% Phys. Non-elem. damage [Rng.: Single Enemy].'
    })
  }),
  2111001: new Materia({
    id: 2111001,
    name: 'Fire',
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 2111001,
      name: 'Fire',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Fire damage [Rng.: Single Enemy].'
    })
  }),
  2111003: new Materia({
    id: 2111003,
    name: 'Fire Blow',
    element: 'Fire',
    commandAbility: new CommandAbility({
      id: 2111003,
      name: 'Fire Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Fire damage [Rng.: Single Enemy].'
    })
  }),
  2121001: new Materia({
    id: 2121001,
    name: 'Blizzard',
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 2121001,
      name: 'Blizzard',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Ice damage [Rng.: Single Enemy].'
    })
  }),
  2121003: new Materia({
    id: 2121003,
    name: 'Blizzard Blow',
    element: 'Ice',
    commandAbility: new CommandAbility({
      id: 2121003,
      name: 'Blizzard Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Ice damage [Rng.: Single Enemy].'
    })
  }),
  2131001: new Materia({
    id: 2131001,
    name: 'Thunder',
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 2131001,
      name: 'Thunder',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Lightning damage [Rng.: Single Enemy].'
    })
  }),
  2131003: new Materia({
    id: 2131003,
    name: 'Thunder Blow',
    element: 'Lightning',
    commandAbility: new CommandAbility({
      id: 2131003,
      name: 'Thunder Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Lightning damage [Rng.: Single Enemy].'
    })
  }),
  2141001: new Materia({
    id: 2141001,
    name: 'Quake',
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 2141001,
      name: 'Quake',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Earth damage [Rng.: Single Enemy].'
    })
  }),
  2141002: new Materia({
    id: 2141002,
    name: 'Quake Blow',
    element: 'Earth',
    commandAbility: new CommandAbility({
      id: 2141002,
      name: 'Quake Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Earth damage [Rng.: Single Enemy].'
    })
  }),
  2151001: new Materia({
    id: 2151001,
    name: 'Water',
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 2151001,
      name: 'Water',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Water damage [Rng.: Single Enemy].'
    })
  }),
  2151002: new Materia({
    id: 2151002,
    name: 'Water Blow',
    element: 'Water',
    commandAbility: new CommandAbility({
      id: 2151002,
      name: 'Water Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Water damage [Rng.: Single Enemy].'
    })
  }),
  2161001: new Materia({
    id: 2161001,
    name: 'Aero',
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 2161001,
      name: 'Aero',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Mag. Wind damage [Rng.: Single Enemy].'
    })
  }),
  2161002: new Materia({
    id: 2161002,
    name: 'Aero Blow',
    element: 'Wind',
    commandAbility: new CommandAbility({
      id: 2161002,
      name: 'Aero Blow',
      atbCost: 3,
      sigil: null,
      description: 'Deal 200% Phys. Wind damage [Rng.: Single Enemy].'
    })
  }),
  2200001: new Materia({
    id: 2200001,
    name: 'Cure',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2200001,
      name: 'Cure',
      atbCost: 5,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 67% of Healing Pot.] [Rng.: Single Ally]'
    })
  }),
  2300001: new Materia({
    id: 2300001,
    name: 'Barrier',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2300001,
      name: 'Barrier',
      atbCost: 3,
      sigil: null,
      description: 'PDEF is increased. [Pot.: Low] [Rng.: Single Ally] [Dur.: 20s]. [Ext.: +5s] [Max. pot.: Low]\nAlso, Mag. heal is cast. [Pot.: 5% of Healing Pot.] [Rng.: Single Ally]'
    })
  }),
  2300002: new Materia({
    id: 2300002,
    name: 'Manaward',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2300002,
      name: 'Manaward',
      atbCost: 3,
      sigil: null,
      description: 'MDEF is increased. [Pot.: Low] [Rng.: Single Ally] [Dur.: 20s]. [Ext.: +5s] [Max. pot.: Low]\nAlso, Mag. heal is cast. [Pot.: 5% of Healing Pot.] [Rng.: Single Ally]'
    })
  }),
  2400001: new Materia({
    id: 2400001,
    name: 'Healing Esuna (Potion)',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2400001,
      name: 'Healing Esuna (Potion)',
      atbCost: 3,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 40% of Healing Pot.] [Rng.: Single Ally]\nAlso, Removes Poison [Rng.: Single Ally].'
    })
  }),
  2400002: new Materia({
    id: 2400002,
    name: 'Healing Esuna (Darkness)',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2400002,
      name: 'Healing Esuna (Darkness)',
      atbCost: 3,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 40% of Healing Pot.] [Rng.: Single Ally]\nAlso, Removes Darkness [Rng.: Single Ally].'
    })
  }),
  2400003: new Materia({
    id: 2400003,
    name: 'Healing Esuna (Silence)',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2400003,
      name: 'Healing Esuna (Silence)',
      atbCost: 3,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 40% of Healing Pot.] [Rng.: Single Ally]\nAlso, Removes Silence [Rng.: Single Ally].'
    })
  }),
  2400004: new Materia({
    id: 2400004,
    name: 'Healing Esuna (Fatigue)',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2400004,
      name: 'Healing Esuna (Fatigue)',
      atbCost: 3,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 40% of Healing Pot.] [Rng.: Single Ally]\nAlso, Removes Fatigue [Rng.: Single Ally].'
    })
  }),
  2400005: new Materia({
    id: 2400005,
    name: 'Healing Esuna (Fog)',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2400005,
      name: 'Healing Esuna (Fog)',
      atbCost: 3,
      sigil: null,
      description: 'Mag. heal is cast. [Pot.: 40% of Healing Pot.] [Rng.: Single Ally]\nAlso, Removes Fog [Rng.: Single Ally].'
    })
  }),
  2501001: new Materia({
    id: 2501001,
    name: 'Bio',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2501001,
      name: 'Bio',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, Ailment: Poison is applied [Rng.: Single Enemy] [Rate: 40%]. [Dur.: 30s] [Ext.: +10s]'
    })
  }),
  2601001: new Materia({
    id: 2601001,
    name: 'Debrave',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601001,
      name: 'Debrave',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, PATK is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601002: new Materia({
    id: 2601002,
    name: 'Defaith',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601002,
      name: 'Defaith',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, MATK is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601003: new Materia({
    id: 2601003,
    name: 'Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601003,
      name: 'Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, PDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601004: new Materia({
    id: 2601004,
    name: 'Mana Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601004,
      name: 'Mana Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, MDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601005: new Materia({
    id: 2601005,
    name: 'Fire Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601005,
      name: 'Fire Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, Fire Resist. is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601006: new Materia({
    id: 2601006,
    name: 'Ice Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601006,
      name: 'Ice Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, Ice Resist. is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601007: new Materia({
    id: 2601007,
    name: 'Lightning Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601007,
      name: 'Lightning Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, Lightning Resist. is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  }),
  2601008: new Materia({
    id: 2601008,
    name: 'Water Breach',
    element: 'Non-elemental',
    commandAbility: new CommandAbility({
      id: 2601008,
      name: 'Water Breach',
      atbCost: 3,
      sigil: null,
      description: 'Deal 160% Mag. Non-elem. damage [Rng.: Single Enemy].\nAlso, Water Resist. is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: 14s]. [Ext.: +3s] [Max. pot.: Low]'
    })
  })
};
