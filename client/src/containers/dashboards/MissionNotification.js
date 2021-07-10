
import React from 'react';
import IconCard from '../../components/cards/IconCard';
import GlideComponent from '../../components/carousel/GlideComponent';

const MissionNotification = ({ className = 'icon-cards-row' }) => {
  const data = [
  // Order Status
  { title: 'Mission Notification', icon: 'iconsminds-clock', value: 14 },
  {title: 'Mission Notification',icon: 'iconsminds-clock',    value: 18,}, 
];
  return (
    <div className={className}>
      <GlideComponent
        settings={{
          gap: 5,
          perView: 2,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
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
export default MissionNotification;
