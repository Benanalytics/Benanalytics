
import React from 'react';
import IconCard from '../../components/cards/IconCard';
import data from '../../data/iconCards';
import GlideComponent from '../../components/carousel/GlideComponent';
import { Card, CardBody } from 'reactstrap';

const IconCardsCarousel = ({ className = 'icon-cards-row' }) => {
  return (
    <div className={className}>
      <Card>
        <CardBody>
          <GlideComponent
            settings={{
              gap: 5,
              perView: 4,
              type: 'carousel',
              breakpoints: {
                320: { perView: 1 },
                576: { perView: 2 },
                1600: { perView: 4 },
                1800: { perView: 4 },
              },
              hideNav: true,
            }}
          >
            {data.map((item, index) => {
              return (
                <div className="text-center">
                  <div key={`icon_card_${index}`}>
                    <IconCard {...item} className="mb-4" />
                  </div>
                </div>
              );
            })}
          </GlideComponent>
        </CardBody>
      </Card>
    </div>
  );
};
export default IconCardsCarousel;
