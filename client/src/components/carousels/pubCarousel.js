import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './pubCarousel.css'

const items = [
  {
    
    src: 'https://eshop.tunisietelecom.tn/img/cms/banner-waffi-interne_1.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
//   {
//     src: '',
//     altText: '',
//     caption: '',
//     header: '',
//     key: '2'
//   },
//   {
//     src: '',
//     altText: '',
//     caption: '',
//     header: '',
//     key: '3'
//   }
];

const PubCarousel = () => <div ><UncontrolledCarousel className="carosell" items={items} /></div>;

export default PubCarousel;