import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './homeCarousel.css'

const items = [
  {
    
    src: 'https://edito.seloger.com/sites/default/files/article/image/deco_cabane.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
//   {
//     src: 'https://edito.seloger.com/sites/default/files/article/image/deco_cabane.jpg',
//     altText: '',
//     caption: '',
//     header: '',
//     key: '2'
//   },
//   {
//     src: 'https://www.maison-travaux.fr/wp-content/uploads/sites/8/2020/12/gettyimages-972026560-e1609251278572.jpg',
//     altText: '',
//     caption: '',
//     header: '',
//     key: '3'
//   }
];

const HomeCarousel = () => <div className="carosell"><UncontrolledCarousel items={items} /></div>;

export default HomeCarousel;