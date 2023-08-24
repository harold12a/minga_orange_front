import newRole from "../assets/images/NewRole.png";
import logo from "../assets/images/Frame 34648.png";
import vector from "../assets/images/Vector.png";
import authorRole from "../assets/images/authorRole.png";
import companyRole from "../assets/images/companyRole.png"
import { useNavigate } from "react-router-dom";

export default function NewRole() {
  const navigate = useNavigate()
  const author = () => {
    setTimeout(() => navigate("/author-form"), 1000)
  }
  const company = () => {
    setTimeout(() => navigate("/cia-form"), 1000)
  }

  return (
    <main className="w-full min-h-screen flex justify-center bg-white pb-[0px]">
      <div className="w-1/2 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#4338CA] text-[20px]">Change role to</p>
          <img src={logo} alt="" className="mt-2" />
        </div>
        <form action="" className="mt-5 flex flex-col w-full items-center justify-center">
        
          <label
            onClick={author}
            htmlFor=""
            className="group flex justify-center items-center w-[80%] rounded-lg hover:cursor-pointer hover:bg-gradient-to-r from-[#4338CA] to-[#4338CA] p-1 border-2"
          >
            <input type="radio" name="author" id="" className="hidden" />
            <div className="bg-white flex p-2 w-full justify-between">
              <div className="flex w-full">
                <img src={authorRole} alt="" className="w-[103px] h-[45px]" />
                <div className="flex flex-col ms-[4%] ">
                  <p className="font-bold text-[20] text-[#4338CA]">Join as an Author!</p>
                  <p className="text-[#4338CA]">I'm a reader writting a manga</p>
                </div>
              </div>

              <div className="flex items-center justify-center border-2 group-hover:bg-[#4338CA] rounded-full h-[25px] w-[25px]">
                <img src={vector} className="w-[15px] h-[11px]" alt="" />
              </div>
            </div>
          </label>
          
      
          <label
            onClick={company}
            htmlFor=""
            className="group flex mt-5 justify-center items-center w-[80%] rounded-lg hover:cursor-pointer hover:bg-gradient-to-r from-[#4338CA] to-[#4338CA] p-1 border-2"
          >
            <input type="radio" name="author" id="" className="hidden" />
            <div className="bg-white flex p-2 w-full justify-between">
              <div className="flex w-full">
                <img src={companyRole} alt="" className="w-[103px] h-[45px]" />
                <div className="flex flex-col ms-[4%] ">
                  <p className="font-bold text-[20] text-[#4338CA]">Join as a Company!</p>
                  <p className="text-[#4338CA]">I'm a company and I want to publish my comics</p>
                </div>
              </div>

              <div className="flex items-center justify-center border-2 group-hover:bg-[#4338CA] rounded-full h-[25px] w-[25px]">
                <img src={vector} className="w-[15px] h-[11px]" alt="" />
              </div>
            </div>
          </label>

        </form>
      </div>

      <img
        className="hidden lg:block min-h-[924px] max-h-screen w-1/2 object-cover "
        src={newRole}
        alt="newRole"
      />
    </main>
  );
}


