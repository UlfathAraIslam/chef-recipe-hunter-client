
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Chefs = () => {
  
  const [chef, setChef] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/chefs`)
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div>
      <h2>Chef name: {chef.name}</h2>
      <p>Chef bio: {chef.bio}</p>
    </div>
  );
};

export default Chefs;
