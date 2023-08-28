import { useEffect } from "react";
import AdminAuthor from "../assets/images/user.png"
import { useDispatch, useSelector } from "react-redux";
import authorActions from "../store/actions/authors"

export default function AdminAuthors() {
  const { saveAuthors, updateActive } = authorActions
  const dispatch = useDispatch()
  const activeTrue = useSelector(store => store.authors.authors.active_true)
  console.log(activeTrue)
  const activeFalse = useSelector(store => store.authors.authors.active_false)
  console.log(activeFalse)
  useEffect(() => {
    dispatch(saveAuthors())
  }, [])
  function handleActive(id,change) {
    dispatch(updateActive({id,change}))
  }
  return (
    <div className="flex justify-center items-center w-[90%]">
      <table className="-mt-[5.1px] flex flex-col items-center justify-center w-[80%]">
        <tbody className="border-t-2 border-[#4338CA] rounded-b-lg w-full">
          {activeTrue?.map((item, index) => (
            // console.log(item)
            <tr key={index} className="w-full" >
              <th className="border-b-2 border-slate-400 w-1/5"><img src={AdminAuthor} className="ms-7" alt="" /></th>
              <th className="text-left font-roboto border-b-2 border-slate-400 w-1/5">
                <p>{item.name + " "}
                  {item.last_name}</p>
              </th>
              {/* <th className="border-b-2 border-slate-400">
              <p className="md:ms-10 lg:ms-14">{item.createdAt}</p>
            </th> */}
              <th className="border-b-2 border-slate-400 w-2/5">
                <p className="md:ms-10 lg:ms-14">{item.city}</p>
              </th>
              <th className="border-b-2 border-slate-400 w-1/5">
                <img src={item.photo} className="w-[25px] h-[25px] rounded-full md:ms-10 lg:ms-14" alt="" />
              </th>
              <th className="border-b-2 border-slate-400 w-1/5">
                <input
                  onChange={() => handleActive(item.user_id,item.active)}
                  className=" right-0 md:ms-10 lg:ms-14 mr-2 mt-[0] h-4 w-8 appearance-none rounded-full after:absolute after:mt-[1px] after:h-3 after:w-3 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_2px_0_rgb(0_0_0_/_7%),_0_1px_1px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s]   checked:after:absolute  checked:after:mt-[1px] checked:after:ml-[1.0625rem] hover:cursor-pointer dark:bg-neutral-400 dark:after:bg-white dark:checked:bg-[#4338CA] dark:checked:after:bg-white"
                  type="checkbox"
                  role="switch"
                  defaultChecked={item.active} />
              </th>
            </tr>
          ))}
          {activeFalse?.map((item, index) => (
            // console.log(item)
            <tr key={index} className="w-full" >
              <th className="border-b-2 border-slate-400 w-1/5"><img src={AdminAuthor} className="ms-7" alt="" /></th>
              <th className="text-left font-roboto border-b-2 border-slate-400 w-1/5">
                <p>{item.name + " "}
                  {item.last_name}</p>
              </th>
              {/* <th className="border-b-2 border-slate-400">
              <p className="md:ms-10 lg:ms-14">{item.createdAt}</p>
            </th> */}
              <th className="border-b-2 border-slate-400 w-2/5">
                <p className="md:ms-10 lg:ms-14">{item.city}</p>
              </th>
              <th className="border-b-2 border-slate-400 w-1/5">
                <img src={item.photo} className="w-[25px] h-[25px] rounded-full md:ms-10 lg:ms-14" alt="" />
              </th>
              <th className="border-b-2 border-slate-400 w-1/5">
                <input
                  onChange={() => handleActive(item.user_id,item.active)}
                  className=" right-0 md:ms-10 lg:ms-14 mr-2 mt-[0] h-4 w-8 appearance-none rounded-full after:absolute after:mt-[1px] after:h-3 after:w-3 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_2px_0_rgb(0_0_0_/_7%),_0_1px_1px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s]   checked:after:absolute  checked:after:mt-[1px] checked:after:ml-[1.0625rem] hover:cursor-pointer dark:bg-neutral-400 dark:after:bg-white dark:checked:bg-[#4338CA] dark:checked:after:bg-white"
                  type="checkbox"
                  role="switch"
                  defaultChecked={item.active} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  )
}
