import React, { useState, useEffect } from 'react';
import jsonData from '../assets/appartment.json';

function AppartmentCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div id='appartment-carousel'>
        {data.map((item, index) => (
            <figure key={index} className="appartment-card">
                <a href={`/rental/${item.id}`}>
                        <img src={item.cover} alt={item.title} />
                        <h4>{item.title}</h4>
                    </a>
            </figure>
        ))}
    </div>
  );
}

export default AppartmentCarousel;
