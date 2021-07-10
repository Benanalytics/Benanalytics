import React from 'react';
import IconCard from '../../components/cards/IconCard';
import GlideComponent from '../../components/carousel/GlideComponent';
const data = [
  // Order Status
  { title: 'On Hold', icon: 'iconsminds-clock', value: 14 },
  {
    title: 'Completed',
    icon: 'iconsminds-basket-coins',
    value: 32,
  },
  {
    title: 'Ongoing',
    icon: 'iconsminds-arrow-refresh',
    value: 74,
  },
  { title: 'Cancelled', icon: 'iconsminds-mail-read', value: 25 },
];
export default data;
const ActivityStatusBoard = ({ className = 'icon-cards-row' }) => {
  return (
    <div className={className}>
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
            <div key={`icon_card_${index}`}>
              <IconCard {...item} className="mb-4" />
            </div>
          );
        })}
      </GlideComponent>
    </div>
  );
};
export default ActivityStatusBoard;
