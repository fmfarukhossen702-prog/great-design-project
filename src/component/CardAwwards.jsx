import React from 'react'

const CardAwwards = () => {
     const data = [
        {
          id: 1,
          title: "1ST WINNER CREATIVE DESIGN CHAMPIONSHIP",
          heading: "For most favorited design voted by NY City Style customers",
        },
    
        {
          id: 2,
          title: "BEST 5 BRANDING PROJECT OF NOMINATIONS",
          heading: "For best creative & usable health care mobile app design",
        },
    
        {
          id: 3,
          title: "8 Years of Membership",
          heading: "Has been part of the Envato Community for over 8 years",
        },
    
        {
          id: 4,
          title: "Exclusive Author",
          heading: "Sells items exclusively on Envato Market",
        },
      ];
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li className="py-10 flex items-center pl-15 border-b border-b-borderPrimary last:border-b-0">
              <span className=" w-21 h-21 bg-textPrimary inline-block  "></span>
              <span className=" text-[22px] w-97.5 px-14 uppercase ">
                {item.title}
              </span>
              <span className=" w-92.5 text-[15px] "> {item.heading} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardAwwards
