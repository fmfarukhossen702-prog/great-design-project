const CardExperience = ({ icon, date, title, description, image,classNameLi=" " }) => {
  return (
    <ul className="">
      <li
        className={` ${classNameLi} flex gap-47 items-center border-b-2 border-b-borderPrimary  pl-15  py-14 `}
      >
        <div className=" flex gap-26 items-center ">
          <div>
            <div>{icon}</div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>

          <div>
            <h6 className=" text-[15px] text-[#8a8a8aa8]  "> {date} </h6>
            <h6 className=" text-[22px] leading-4 uppercase ">{title}</h6>
          </div>
        </div>
        <p className="w-94  text-[15px] leading-4 ">{description}</p>
      </li>
    </ul>
  );
};

export default CardExperience;
