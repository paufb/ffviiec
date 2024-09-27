import PATKIcon from '../assets/stats/PATK.webp';
import MATKIcon from '../assets/stats/MATK.webp';
import HEALIcon from '../assets/stats/HEAL.webp';
import { useEffect, useRef, useState } from 'react';
import { ATBBarCost } from '../components/ATBBarCost.tsx';
import { CharacterDiamond } from '../components/CharacterDiamond.tsx';
import { CAbilityIcon } from '../components/CAbilityIcon.tsx';
import { ElementIcon } from '../components/ElementIcon.tsx';
import { OverboostStars } from '../components/OverboostStars.tsx';
import { SigilIcon } from '../components/SigilIcon.tsx';
import { WeaponIcon } from '../components/WeaponIcon.tsx';
import { WeaponModal } from '../components/WeaponModal.tsx';
import { sigils, Characters, CommandAbilities, Elements, SigilType, Weapon, Weapons } from '../types.ts';
import styles from './WeaponsPage.module.css';

export function WeaponsPage({ isViewportNarrow }: { isViewportNarrow: boolean }) {
  type Column = 'weapon' | keyof Weapon['fiveStarLevel120'] | 'atbCost';
  type SortConfig = { column: null | Column; direction: null | 'asc' | 'desc'; }
  type Layout = 'table' | 'grid';
  type IsDropdownVisible = { [key in 'overboost' | 'characters' | 'elements' | 'sigils']: boolean };

  const [weapons, setWeapons] = useState<Weapons>({});
  const [elements, setElements] = useState<Elements>({});
  const [characters, setCharacters] = useState<Characters>({});
  const [cAbilities, setCAbilities] = useState<CommandAbilities>({});
  const [filteredWeapons, setFilteredWeapons] = useState<Weapons>({});
  const [nameQuery, setNameQuery] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState<(keyof Characters)[]>([]);
  const [selectedElements, setSelectedElements] = useState<(keyof Elements)[]>([]);
  const [selectedSigils, setSelectedSigils] = useState<(SigilType)[]>([]);
  const [selectedWeaponLevel, setSelectedWeaponLevel] = useState(120);
  const [selectedOverboostLevel, setSelectedOverboostLevel] = useState(10);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ column: null, direction: null });
  const [layout, setLayout] = useState<Layout>('grid');
  const [selectedWeaponForModal, setSelectedWeaponForModal] = useState<keyof Weapons | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<IsDropdownVisible>({ overboost: false, characters: false, elements: false, sigils: false });
  const dropdownRefs = {
    overboost: { menu: useRef<HTMLDivElement>(null), button: useRef<HTMLButtonElement>(null) },
    characters: { menu: useRef<HTMLDivElement>(null), button: useRef<HTMLButtonElement>(null) },
    elements: { menu: useRef<HTMLDivElement>(null), button: useRef<HTMLButtonElement>(null) },
    sigils: { menu: useRef<HTMLDivElement>(null), button: useRef<HTMLButtonElement>(null) }
  };

  useEffect(() => {
    Promise.all([
      import('../data/weaponsData.ts'),
      import('../data/elementsData.ts'),
      import('../data/charactersData.ts'),
      import('../data/cAbilitiesData.ts')
    ]).then(([weaponsModule, elementsModule, charactersModule, cAbilitiesModule]) => {
      setWeapons(weaponsModule.weaponsData);
      setElements(elementsModule.elementsData);
      setCharacters(charactersModule.charactersData);
      setCAbilities(cAbilitiesModule.cAbilitiesData);
    });
  }, []);

  useEffect(() => {
    const lowerCaseNameQuery = nameQuery.toLowerCase();
    const hasSelectedCharacters = selectedCharacters.length > 0;
    const hasSelectedElements = selectedElements.length > 0;
    const hasSelectedSigils = selectedSigils.length > 0;
    let filteredEntries = Object.entries(weapons).filter(([weaponName, weapon]: [string, Weapon]) =>
      weaponName.toLowerCase().includes(lowerCaseNameQuery)
      && (!hasSelectedCharacters || selectedCharacters.includes(weapon.character))
      && (!hasSelectedElements || selectedElements.includes(weapon.element))
      && (!hasSelectedSigils || selectedSigils.includes(cAbilities[weapon.cAbility].sigil))
    );
    if (sortConfig.column && sortConfig.direction) {
      filteredEntries = filteredEntries.sort(([weaponNameA, weaponA]: [string, Weapon], [weaponNameB, weaponB]: [string, Weapon]) => {
        if (sortConfig.column && ['pAtk', 'mAtk', 'heal'].includes(sortConfig.column)) {
          const diff = weaponA.fiveStarLevel120[sortConfig.column as keyof Weapon['fiveStarLevel120']] - weaponB.fiveStarLevel120[sortConfig.column as keyof Weapon['fiveStarLevel120']];
          return sortConfig.direction === 'asc' ? diff : -diff;
        } else if (sortConfig.column === 'weapon') {
          const comparison = weaponNameA.localeCompare(weaponNameB, 'en', { sensitivity: 'base' });
          return sortConfig.direction === 'asc' ? comparison : -comparison;
        } else if (sortConfig.column === 'atbCost') {
          const diff = cAbilities[weaponA.cAbility].atbCost - cAbilities[weaponB.cAbility].atbCost;
          return sortConfig.direction === 'asc' ? diff : -diff;
        }
        return 0;
      });
    }
    setFilteredWeapons(Object.fromEntries(filteredEntries));
  }, [weapons, nameQuery, selectedCharacters, selectedElements, selectedSigils, sortConfig, cAbilities]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      (Object.keys(dropdownRefs) as Array<keyof typeof dropdownRefs>).forEach(dropdownName => {
        const menuRef = dropdownRefs[dropdownName].menu.current;
        const buttonRef = dropdownRefs[dropdownName].button.current;
        if (!menuRef?.contains(event.target as HTMLElement) && !buttonRef?.contains(event.target as HTMLElement)) {
          setIsDropdownVisible(prevState => ({
            ...prevState,
            [dropdownName]: false
          }));
        }
      });
    };
    if (Object.values(isDropdownVisible).some(isVisible => isVisible)) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownVisible]);

  function handleNameQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setNameQuery(query);
  }

  function handleSelectedOverboostLevelChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedLevel = parseInt(event.target.value);
    setSelectedOverboostLevel(selectedLevel);
    setIsDropdownVisible(prevState => ({...prevState, overboost: !prevState.overboost}));
  }

  function handleSelectedCharactersChange(event: React.ChangeEvent<HTMLInputElement>) {
    const characterName = event.target.value;
    setSelectedCharacters(prevState =>
      event.target.checked
        ? [...prevState, characterName]
        : prevState.filter(c => c !== characterName)
    );
  }

  function handleSelectedElementsChange(event: React.ChangeEvent<HTMLInputElement>) {
    const elementName = event.target.value;
    setSelectedElements(prevState =>
      event.target.checked
        ? [...prevState, elementName]
        : prevState.filter(e => e !== elementName)
    );
  }

  function handleSelectedSigilsChange(event: React.ChangeEvent<HTMLInputElement>) {
    const sigilName = event.target.value;
    setSelectedSigils(prevState =>
      event.target.checked
        ? [...prevState, sigilName]
        : prevState.filter(s => s !== sigilName)
    );
  }

  function handleOnClickColumnSorting(column: Column) {
    if (!column) return;
    let direction: SortConfig['direction'] = 'desc';
    if (sortConfig.column === column) {
        direction = sortConfig.direction === 'desc' ? 'asc' :
                    sortConfig.direction === 'asc'  ? null  :
                                                      'desc';
    }
    setSortConfig({ column, direction });
  }

  function renderColumnSortIcon(column: string) {
    if (sortConfig.column !== column) return <span style={{ marginLeft: '0.25rem' }} className="arrow-up-down" />;
    return sortConfig.direction === 'desc' ? <span style={{ marginLeft: '0.25rem' }} className="arrow-down" />    :
           sortConfig.direction === 'asc'  ? <span style={{ marginLeft: '0.25rem' }} className="arrow-up" />      :
                                             <span style={{ marginLeft: '0.25rem' }} className="arrow-up-down" /> ;
  }

  function getWeaponPAtk(weapon: Weapon, overboostLevel: number) {
    const overboostLevelMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
    const basePAtk = weapon.fiveStarLevel120.pAtk;
    let additionalPAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalPAtk += basePAtk * overboostLevelMultipliers[i];
    }
    return Math.floor(basePAtk + additionalPAtk);
  }

  function getWeaponMAtk(weapon: Weapon, overboostLevel: number) {
    const overboostLevelMultipliers = [0, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05];
    const baseMAtk = weapon.fiveStarLevel120.mAtk;
    let additionalMAtk = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalMAtk += baseMAtk * overboostLevelMultipliers[i];
    }
    return Math.floor(baseMAtk + additionalMAtk);
  }

  function getWeaponHeal(weapon: Weapon, overboostLevel: number) {
    const overboostLevelMultipliers = [0, 0.1, 0.05, 0.05, 0.04, 0.04, 0.04, 0.02, 0.02, 0.02, 0.02];
    const baseHeal = weapon.fiveStarLevel120.heal;
    let additionalHeal = 0;
    for (let i = 0; i <= overboostLevel; i++) {
      additionalHeal += baseHeal * overboostLevelMultipliers[i];
    }
    return Math.floor(baseHeal + additionalHeal);
  }

  function getWeaponCAbility(weapon: Weapon, overboostLevel: number) {
    const { description, valuesByOverboost } = cAbilities[weapon.cAbility];
    return description.replace(/\{\{(\w+)\}\}/g, (_, key) => valuesByOverboost[key][overboostLevel]);
  }

  function openWeaponModal(weaponName: keyof Weapons) {
    setSelectedWeaponForModal(weaponName);
    setTimeout(() => {
      (document.querySelector('#weapon-modal') as HTMLDialogElement)?.showModal();
    }, 0);
  }

  function closeWeaponModal() {
    const modal = document.querySelector('#weapon-modal') as HTMLDialogElement;
    modal.setAttribute('closing', '');
    modal.addEventListener('animationend', () => {
      modal.removeAttribute('closing');
      modal.close();
      setSelectedWeaponForModal(null);
    }, { once: true });
  }

  return (
    <div className={styles["page"]}>
      <div className={styles["filters-container"]}>
        <div className={`${styles["filters-container-row"]} ${isViewportNarrow ? styles["filters-container-row--narrow"] : ""}`}>
          <div className={styles["filters-container-column"]}>
            <div className={styles["filter-name"]}>
              <svg width="24px" height="24px" viewBox="0 -960 960 960" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              <input type="text" onChange={handleNameQueryChange} placeholder="Search by name" />
            </div>
          </div>
          <div className={styles["level-and-overboost-container"]}>
            <div className={styles["filters-container-column"]}>
              <div className={styles['selector-group']}>
                <button
                  ref={dropdownRefs.overboost.button}
                  className={`${styles['selector-button']} ${styles['downscale-on-click']}`}
                  onClick={() => setIsDropdownVisible(prevState => ({...prevState, overboost: !prevState.overboost}))}
                >
                  {selectedOverboostLevel}
                  <div style={{ display: 'flex' }}>
                    <OverboostStars level={selectedOverboostLevel} />
                  </div>
                  <span className="arrow-down" />
                </button>
                <div ref={dropdownRefs.overboost.menu} className={`${styles['selector']} ${isDropdownVisible.overboost ? styles['selector--visible'] : ''}`}>
                  {[0, 6, 10].map(level => (
                    <label className={`${styles['selectable-button']} ${styles['selectable-button--overboost']} ${level === selectedOverboostLevel ? styles['selectable-button--selected'] : ''} ${styles['downscale-on-click']}`} key={level}>
                      <input
                        type="checkbox"
                        value={level}
                        onChange={handleSelectedOverboostLevelChange}
                        style={{ display: 'none' }}
                      />
                      {level}
                      <div style={{ display: 'flex' }}>
                        <OverboostStars level={level} />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["filters-container-row"]}>
          <div className={styles['dropdown-group']}>
            <button
              ref={dropdownRefs.characters.button}
              className={`${styles['dropdown-button']} ${styles['downscale-on-click']}`}
              onClick={() => setIsDropdownVisible(prevState => ({...prevState, characters: !prevState.characters}))}
            >
              <img src={new URL(`../assets/ui/filter_${selectedCharacters.length ? 'on' : 'off'}.png`, import.meta.url).href} alt="" />
              Characters
              <span className="arrow-down" />
            </button>
            <div ref={dropdownRefs.characters.menu} className={`${styles['dropdown']} ${isDropdownVisible.characters ? styles['dropdown--visible'] : ''}`}>
              {Object.entries(characters).map(([characterName, character]) => (
                <label className={`${styles['togglable-button']} ${styles['togglable-button--character']} ${selectedCharacters.includes(characterName) ? styles['togglable-button--toggled'] : ''} ${styles['downscale-on-click']}`} key={characterName}>
                  <input
                    type="checkbox"
                    value={characterName}
                    onChange={handleSelectedCharactersChange}
                    style={{ display: 'none' }}
                  />
                  <CharacterDiamond character={character} width="32px" />
                  {characterName}
                </label>
              ))}
            </div>
          </div>
          <div className={styles['dropdown-group']}>
            <button
              ref={dropdownRefs.elements.button}
              className={`${styles['dropdown-button']} ${styles['downscale-on-click']}`}
              onClick={() => setIsDropdownVisible(prevState => ({...prevState, elements: !prevState.elements}))}
            >
              <img src={new URL(`../assets/ui/filter_${selectedElements.length ? 'on' : 'off'}.png`, import.meta.url).href} alt="" />
              Elements
              <span className="arrow-down" />
            </button>
            <div ref={dropdownRefs.elements.menu} className={`${styles['dropdown']} ${isDropdownVisible.elements ? styles['dropdown--visible'] : ''}`}>
              {Object.entries(elements).map(([elementName, _]) => (
                <label className={`${styles['togglable-button']} ${styles['togglable-button--element']} ${selectedElements.includes(elementName) ? styles['togglable-button--toggled'] : ''} ${styles['downscale-on-click']}`} key={elementName}>
                  <input
                    type="checkbox"
                    value={elementName}
                    onChange={handleSelectedElementsChange}
                    style={{ display: 'none' }}
                  />
                  <span
                    title={elementName}
                    style={{ backgroundImage: `url(${new URL(`../assets/elements/${elementName}.webp`, import.meta.url).href})` }}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className={styles['dropdown-group']}>
            <button
              ref={dropdownRefs.sigils.button}
              className={`${styles['dropdown-button']} ${styles['downscale-on-click']}`}
              onClick={() => setIsDropdownVisible(prevState => ({...prevState, sigils: !prevState.sigils}))}
            >
              <img src={new URL(`../assets/ui/filter_${selectedSigils.length ? 'on' : 'off'}.png`, import.meta.url).href} alt="" />
              Sigils
              <span className="arrow-down" />
            </button>
            <div ref={dropdownRefs.sigils.menu} className={`${styles['dropdown']} ${isDropdownVisible.sigils ? styles['dropdown--visible'] : ''}`}>
              {sigils.map(sigil => (
                <label className={`${styles['togglable-button']} ${styles['togglable-button--sigil']} ${selectedSigils.includes(sigil) ? styles['togglable-button--toggled'] : ''} ${styles['downscale-on-click']}`} key={sigil}>
                  <input
                    type="checkbox"
                    value={sigil}
                    onChange={handleSelectedSigilsChange}
                    style={{ display: 'none' }}
                  />
                  <span
                    title={sigil}
                    style={{ backgroundImage: `url(${new URL(`../assets/sigils/${sigil}.png`, import.meta.url).href})` }}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className={styles["filter"]}>
            <div className={styles["filter-layout"]}>
              <div className={`${styles["layout-grid"]} ${layout === "grid" ? styles["layout-grid--selected"] : ""}`} onClick={() => setLayout("grid")}>
                <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
              </div>
              <div className={`${styles["layout-table"]} ${layout === "table" ? styles["layout-table--selected"] : ""}`} onClick={() => setLayout("table")}>
                <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
              </div>
            </div>
          </div>
          <div className={styles["statistic"]}>
            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/></svg>
            {Object.keys(weapons).length}
          </div>
        </div>
      </div>
      {selectedWeaponForModal && <WeaponModal
        weaponName={selectedWeaponForModal}
        weapon={weapons[selectedWeaponForModal]}
        character={characters[weapons[selectedWeaponForModal].character]}
        cAbility={cAbilities[weapons[selectedWeaponForModal].cAbility]}
        selectedOverboostLevel={selectedOverboostLevel}
        selectedWeaponLevel={selectedWeaponLevel}
        getWeaponPAtk={getWeaponPAtk}
        getWeaponMAtk={getWeaponMAtk}
        getWeaponHeal={getWeaponHeal}
        getWeaponCAbility={getWeaponCAbility}
        closeWeaponModal={closeWeaponModal}
      />}
      <div className={styles["table-decoration"]}>
        {layout === "table" && (
          <div className={styles["table-container"]}>
            <table className={styles["table"]}>
              <thead>
                <tr className={styles["table-head-row"]}>
                  <th onClick={() => handleOnClickColumnSorting("weapon")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      Weapon {renderColumnSortIcon("weapon")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("pAtk")} className={styles["table-header--sortable"]}>
                    <div className={`${styles["table-header-cell"]} ${styles['table-header-cell-patk']}`}>
                      <img src={new URL('../assets/stats/PATK.webp', import.meta.url).href} />
                      {renderColumnSortIcon("pAtk")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("mAtk")} className={styles["table-header--sortable"]}>
                    <div className={`${styles["table-header-cell"]} ${styles['table-header-cell-matk']}`}>
                      <img src={new URL('../assets/stats/MATK.webp', import.meta.url).href} />
                      {renderColumnSortIcon("mAtk")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("heal")} className={styles["table-header--sortable"]}>
                    <div className={`${styles["table-header-cell"]} ${styles['table-header-cell-heal']}`}>
                      <img src={new URL('../assets/stats/HEAL.webp', import.meta.url).href} />
                      {renderColumnSortIcon("heal")}
                    </div>
                  </th>
                  <th onClick={() => handleOnClickColumnSorting("atbCost")} className={styles["table-header--sortable"]}>
                    <div className={styles["table-header-cell"]}>
                      C. Ability {renderColumnSortIcon("atbCost")}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(filteredWeapons).map(([weaponName, weapon]) => (
                  <tr className={styles["table-row"]} key={weaponName} onClick={() => openWeaponModal(weaponName)}>
                    <td className={`${styles["table-data"]} ${styles["table-data--nowrap"]}`}>
                      <div className={styles["table-data-weapon-container-row"]}>
                        <div className={styles["table-data-weapon-container-column"]}>
                          <CharacterDiamond character={characters[weapon.character]} height="64px" />
                        </div>
                        <div className={styles["table-data-weapon-container-column"]}>
                          <div>
                            {weaponName}
                          </div>
                          <div>
                            <OverboostStars level={selectedOverboostLevel} />
                          </div>
                          <div className={styles['table-data-weapon-container-icons']}>
                            <CAbilityIcon cAbility={cAbilities[weapon.cAbility]} />
                            <ElementIcon element={weapon.element} />
                            <SigilIcon sigil={cAbilities[weapon.cAbility].sigil} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponPAtk(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponMAtk(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={`${styles["table-data"]} ${styles["table-data--centered"]}`}>
                      {getWeaponHeal(weapon, selectedOverboostLevel)}
                    </td>
                    <td className={styles["table-data"]}>
                      <div className={styles["c-ability-container"]}>
                        <div className={styles["c-ability-header"]}>
                          <ATBBarCost cost={cAbilities[weapon.cAbility].atbCost} />
                          {weapon.cAbility}
                        </div>
                        <div className={styles["c-ability-separator"]} />
                        <div className={styles["table-data-c-ability"]}>
                          {getWeaponCAbility(weapon, selectedOverboostLevel)}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {layout === "grid" && (
          <div className={styles["grid-container"]}>
            {Object.entries(filteredWeapons).map(([weaponName, weapon]) => (
              <div key={weaponName} className={styles["grid-entry"]} onClick={() => openWeaponModal(weaponName)}>
                <div className={styles["grid-image-container"]}>
                  <WeaponIcon weapon={weapon} />
                  <div className={styles["grid-image-overboost-stars"]}>
                    <OverboostStars level={selectedOverboostLevel} />
                  </div>
                </div>
                <div className={styles['grid-entry-body']}>
                  {weaponName}
                  <div className={styles['grid-entry-body-row']}>
                    <div className={styles["grid-entry-column-1"]}>
                      <div className={styles['grid-entry-column-row-1']}>
                        <img src={PATKIcon} alt="" />
                        <div>{getWeaponPAtk(weapon, selectedOverboostLevel)}</div>
                      </div>
                      <div className={styles['grid-entry-column-row-1']}>
                        <img src={MATKIcon} alt="" />
                        <div>{getWeaponMAtk(weapon, selectedOverboostLevel)}</div>
                      </div>
                      <div className={styles['grid-entry-column-row-1']}>
                        <img src={HEALIcon} alt="" />
                        <div>{getWeaponHeal(weapon, selectedOverboostLevel)}</div>
                      </div>
                    </div>
                    <div className={styles["grid-entry-column-2"]}>
                      <div className={styles['ability-icons']}>
                        <CAbilityIcon cAbility={cAbilities[weapon.cAbility]} />
                        <ElementIcon element={weapon.element} />
                        <SigilIcon sigil={cAbilities[weapon.cAbility].sigil} />
                      </div>
                      <ATBBarCost cost={cAbilities[weapon.cAbility].atbCost} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
