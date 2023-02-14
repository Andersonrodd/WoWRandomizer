import React, { useState } from "react";

const raceClassMap = {
  Human: [
    "Warrior",
    "Paladin",
    "Hunter",
    "Rogue",
    "Priest",
    "Mage",
    "Warlock",
    "Monk",
    "Death Knight",
  ],
  Dwarf: [
    "Warrior",
    "Paladin",
    "Hunter",
    "Rogue",
    "Priest",
    "Shaman",
    "Mage",
    "Warlock",
    "Death Knight",
  ],
  "Night Elf": [
    "Warrior",
    "Hunter",
    "Rogue",
    "Priest",
    "Mage",
    "Monk",
    "Demon Hunter",
    "Death Knight",
  ],
  Gnome: ["Warrior", "Rogue", "Priest", "Mage", "Warlock", "Death Knight"],
  Draenei: [
    "Warrior",
    "Paladin",
    "Hunter",
    "Priest",
    "Shaman",
    "Mage",
    "Death Knight",
  ],
  Worgen: [
    "Warrior",
    "Hunter",
    "Rogue",
    "Priest",
    "Mage",
    "Druid",
    "Death Knight",
  ],
  Pandaren: [
    "Warrior",
    "Hunter",
    "Priest",
    "Shaman",
    "Mage",
    "Monk",
    "Death Knight",
  ],
  "Void Elf": ["Hunter", "Priest", "Mage", "Warlock", "Death Knight"],
  "Lightforged Draenei": [
    "Warrior",
    "Paladin",
    "Hunter",
    "Priest",
    "Mage",
    "Death Knight",
  ],
  "Dark Iron Dwarf": [
    "Warrior",
    "Paladin",
    "Hunter",
    "Rogue",
    "Priest",
    "Shaman",
    "Mage",
    "Warlock",
    "Monk",
    "Death Knight",
  ],
  "Kul Tiran": ["Warrior", "Druid", "Shaman", "Mage", "Death Knight"],
  Mechagnome: ["Hunter", "Rogue", "Priest", "Mage", "Death Knight"],
  Dracthyr: ["Evoker"],
};

const classes = [
  "Warrior",
  "Paladin",
  "Hunter",
  "Rogue",
  "Priest",
  "Death Knight",
  "Shaman",
  "Mage",
  "Warlock",
  "Monk",
  "Druid",
  "Demon Hunter",
  "Evoker",
];

const specs = {
  Warrior: ["Arms", "Fury", "Protection"],
  Paladin: ["Holy", "Protection", "Retribution"],
  Hunter: ["Beast Mastery", "Marksmanship", "Survival"],
  Rogue: ["Assassination", "Outlaw", "Subtlety"],
  Priest: ["Discipline", "Holy", "Shadow"],
  "Death Knight": ["Blood", "Frost", "Unholy"],
  Shaman: ["Elemental", "Enhancement", "Restoration"],
  Mage: ["Arcane", "Fire", "Frost"],
  Warlock: ["Affliction", "Demonology", "Destruction"],
  Monk: ["Brewmaster", "Mistweaver", "Windwalker"],
  Druid: ["Balance", "Feral", "Guardian", "Restoration"],
  "Demon Hunter": ["Havoc", "Vengeance"],
  Evoker: ["Devastation", "Preservation"],
};

function App() {
  const [race, setRace] = useState("");
  const [classSpec, setClassSpec] = useState("");

  function handleClick() {
    const availableRaces = Object.keys(raceClassMap);
    const randomRace =
      availableRaces[Math.floor(Math.random() * availableRaces.length)];
    setRace(randomRace);

    const availableClasses = raceClassMap[randomRace];
    const randomClass =
      availableClasses[Math.floor(Math.random() * availableClasses.length)];
    setClassSpec(randomClass);

    const availableSpecs = specs[randomClass];
    const randomSpec =
      availableSpecs[Math.floor(Math.random() * availableSpecs.length)];
    setClassSpec(randomClass + " - " + randomSpec);
  }

  return (
    <div className="container-fluid text-center vh-100">
      <div className="row justify-content-center">
        <div className="col-md-5 col-8">
          <div className="card mt-5">
            <header className="card-header">
              <h1 className="h1 text-center text-primary">
                World of Warcraft Randomizer
              </h1>
            </header>

            <button
              className="btn btn-primary text-white"
              onClick={handleClick}
            >
              Randomize!
            </button>
            <div className="card-body text-primary">
              {race && <p>Race: {race}</p>}
              {classSpec && <p>Class/Spec: {classSpec}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
