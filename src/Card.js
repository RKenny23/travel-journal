import React from 'react';
import LocationIcon from './loc-icon.svg';

export default function Card(props) {
  const capitalized = props.location.toUpperCase();

  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img" />
      <div class="card-info">
        <div class="card-location">
          <img src={LocationIcon} className="loc-icon" />
          <h3>{capitalized}</h3>
          <a href={props.googleMapsUrl} className="card-mapview">
            <u>View on Google Maps</u>
          </a>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <h3 className="card-dates">
          {props.startDate} - {props.endDate}
        </h3>
        <p className="card-descr">{props.description}</p>
      </div>
    </div>
  );
}

// title: 'Mount Fuji',
// location: 'Japan',
// googleMapsUrl: 'https://goo.gl/maps/1DGM5WrWnATgkSNB8',
// startDate: '12 Jan, 2021',
// endDate: '24 Jan, 2021',
// description:
//   'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
// imageUrl: 'https://source.unsplash.com/WLxQvbMyfas',
