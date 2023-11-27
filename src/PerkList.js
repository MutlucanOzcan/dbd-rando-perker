import React, { useState } from 'react';

const DeadByDaylightPerks = () => {
  const allPerks = [
    {
      name: "Self-Care",
      effect: "Allows you to heal yourself without a medkit at 50% of the normal healing speed.",
    },
    {
      name: "Sprint Burst",
      effect: "When starting to run, break into a sprint at 150% of your normal running speed for a maximum of 3 seconds.",
    },
    {
      name: "Borrowed Time",
      effect: "When unhooking a Survivor, the unhooked Survivor and the Killer are protected by the Endurance status effect for 20 seconds.",
    },
    {
      name: "Decisive Strike",
      effect: "When the Killer downs you, you have a chance to strike back, stunning the Killer for a short duration if you succeed.",
    },
    {
      name: "Adrenaline",
      effect: "When the exit gates are powered, you and all other Survivors within a certain range are instantly healed, and you gain a speed boost for a short duration.",
    },
  ];

  const [randomPerks, setRandomPerks] = useState([]);

  const generateRandomPerks = () => {
    const shuffledPerks = [...allPerks].sort(() => Math.random() - 0.5);
    const selectedPerks = shuffledPerks.slice(0, 4);
    setRandomPerks(selectedPerks);
  };

  return (
    <div>
      <h1>Dead by Daylight Perks</h1>
      <button onClick={generateRandomPerks}>Generate Random Perks</button>
      <ul>
        {randomPerks.map((perk, index) => (
          <li key={index}>
            <strong>{perk.name}:</strong> {perk.effect}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeadByDaylightPerks;
