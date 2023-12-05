import React, { useState } from 'react';
import './style.css';
const DeadByDaylightPerks = () => {
  const [randomSurvivorPerks, setRandomSurvivorPerks] = useState([]);
  const [randomKillerPerks, setRandomKillerPerks] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  const generateRandomPerks = async (role) => {
    try {
      const response = await fetch(`https://dbd-proxy.vercel.app/api/randomPerks?role=${role}`);
      const data = await response.json();

      console.log(`${role} Perks:`, data);

      if (Array.isArray(data.body)) {
        if (role === 'survivor') {
          setRandomSurvivorPerks(data.body);
          setRandomKillerPerks([]);
        } else if (role === 'killer') {
          setRandomKillerPerks(data.body);
          setRandomSurvivorPerks([]);
        }
        setSelectedRole(role);
      } else {
        console.error(`Invalid data format for ${role} perks:`, data);
      }
    } catch (error) {
      console.error(`Error fetching ${role} perks:`, error);
    }
  };

  const renderDescription = (description) => {
    return { __html: description };
  };

  return (
    <div>
      <h1 className='center'>Dead by Daylight Perks</h1>
      {selectedRole && (
        <p className='center'>Selected Role - {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</p>
      )}
      <button className='btn' onClick={() => generateRandomPerks('survivor')}>Generate Random Survivor Perks</button>
      <ul className='list'>
        {randomSurvivorPerks.map((perk, index) => (
          <li className='list-item' key={index}>
            <strong>{perk.name}:</strong>
            <div dangerouslySetInnerHTML={renderDescription(perk.description)} />
          </li>
        ))}
      </ul>

      <button className='btn' onClick={() => generateRandomPerks('killer')}>Generate Random Killer Perks</button>
      <ul className='list'>
        {randomKillerPerks.map((perk, index) => (
          <li className='list-item' key={index}>
            <strong>{perk.name}:</strong>
            <div dangerouslySetInnerHTML={renderDescription(perk.description)} />
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default DeadByDaylightPerks;
