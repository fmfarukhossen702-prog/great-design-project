import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { pageActiveReducer } from "../redux/dataStore";

const Navbar = () => {
  //   const dispatch = useDispatch();

  //   const pageActive = useSelector((state) => state.dataStore.pageActive);

  return (
    <nav className=" h-22  bg-bgPrimary text-textPrimary  border-b-2 border-b-borderPrimary  ">
      <div className=" h-full flex items-center justify-between">
        <h1 className="w-20 shrink-0 border-r-2 border-r-[#b4afa128] text-4xl text-textPrimary flex h-full items-center justify-center">
          P
        </h1>{" "}
        <div className="min-w-0 flex-1 self-stretch flex justify-between items-center">
          <div className="w-[27%] self-stretch border-r-2 border-r-borderPrimary flex items-center gap-7.5 px-7 text-lg *:cursor-pointer">
            <FaFacebookF />
            <IoLogoTwitter />
            <FaLinkedin />
          </div>
          <div className=" w-[73%] pl-5 flex items-center justify-between ">
            <ul className=" flex uppercase text-sm gap-15 *:cursor-pointer ">
              <li>
                {" "}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "text-btnPrimary" : ""
                  }
                >
                  home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/project"
                  end
                  className={({ isActive }) =>
                    isActive ? " text-btnPrimary" : ""
                  }
                >
                  Projects
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/awwards"
                  end
                  className={({ isActive }) =>
                    isActive ? " text-btnPrimary" : " "
                  }
                >
                  {" "}
                  awwards
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/testimonials"
                  end
                  className={({ isActive }) =>
                    isActive ? " text-btnPrimary " : " "
                  }
                >
                  testimonials
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/experience"
                  end
                  className={({ isActive }) =>
                    isActive ? " text-btnPrimary " : " "
                  }
                >
                  experience
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/blog"
                  end
                  className={({ isActive }) =>
                    isActive ? "text-btnPrimary" : " "
                  }
                >
                  blog
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/contact"
                  end
                  className={({ isActive }) =>
                    isActive ? "text-btnPrimary" : " "
                  }
                >
                  CONTACT
                </NavLink>{" "}
              </li>
            </ul>
            <div>
              <div className="pr-6">
                <select
                  className=" text-[15px] cursor-pointer   bg-bgPrimary text-textPrimary border-none  "
                  name=""
                  id=""
                >
                  <option value="">+2(315) 590 83 68</option>
                  <option value="">+2(315) 590 83 68</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
