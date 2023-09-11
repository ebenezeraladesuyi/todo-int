
import React, { useEffect, useState } from 'react';
import LargePreview from '../largeScreen/LargePreview';
import { iPaginated } from '../../types/interface';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PreviewwTask from '../smallScreen/PreviewwTask';
import { useAppSelector } from '../../hooks/Store';
import { useQuery } from '@tanstack/react-query';
import { getOneUser } from '../../utils/Apis';
// import PreviewwTask from '../mobiles/PreviewwTask';

 

const Tasks = () => {
  const [pre, setPre] = React.useState(false);
  const openPre = () => {
    setPre(!pre);
  };

  
  const [pres, setPres] = React.useState(false);
  const openPres = () => {
    setPres(!pres);
  };

  const itemPerPage = 10;

  const [users, setUsers] = useState<iPaginated[]>([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const allUsers = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setUsers(allUsers.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(0);

  // Handle page change
  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  // Calculate the items to display on the current page
  const offset = currentPage * itemPerPage;
  const currentPageItems = users.slice(offset, offset + itemPerPage);

  // Calculate the number of pages
  const pageCount = Math.ceil(users.length / itemPerPage);

  // In your component or CSS file
const paginationClasses = {
    containerClassName: 'flex justify-center items-center mt-7 mb-7',
    pageClassName: 'mx-1',
    previousClassName: 'mx-1 text-[13px] lg:text-[15px] text-[#0E31F2]',
    nextClassName: 'mx-1 text-[13px] lg:text-[15px] text-[#0E31F2]',
    breakClassName: 'mx-1',
    activeClassName: 'bg-[#0E31F2] text-white font-bold px-3 py-2 rounded',
    disabledClassName: 'text-gray-400 cursor-not-allowed',
  };

  const user =  useAppSelector((state) => state?.currentUser);

  const data  = useQuery({
    queryKey: ['to-do'],
    queryFn: () => getOneUser(user)
  })

  console.log(data.data)
  



  return (
    <div className="h-[100%] mt-[15px]">
      <h5 className="text-[14px] font-bold mb-[0px] fixed bg-white z-10 pb-5 lg:pb-[2px] w-full h-[30px]">
        My Tasks
      </h5>


{/* map from my All Task api */}
  {data?.data?.tasks?.map((el: any) => 
      <div className="pt-[30px] pb-[15px]" 
      key={el.id}
      >
        
          {/* Render your user data */}
          <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[-30px] hover:bg-gray-300 cursor-pointer h-[70px]">
            <div className="flex gap-4">
              <input type="checkbox" />
              <div 
              onClick={ () => {
                          openPre;
                          openPres
                          }}
              >
                <h4 className="text-[12px] lg:text-[15px] font-bold">{el.title}</h4>
                <h4 className="text-gray-400 text-[12px] lg:text-[13px]">{el.startTime} - {el.endTime}</h4>
              </div>
            </div>
            <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">{el.date}</h4>
          </div>

        </div>
         )}


{/* mapped fron json api */}
      {currentPageItems.map((e) => (
        <div className="pt-[30px] pb-[15px]" key={e.id}>
          {/* Render your user data */}
          <div className="bg-[#f9fafb] flex p-[10px] pr-4 pl-4 justify-between items-center rounded shadow-md mb-[-30px] hover:bg-gray-300 cursor-pointer h-[70px]">
            <div className="flex gap-4">
              <input type="checkbox" />
              <div onClick={ () => {
                          openPre;
                          openPres
                          }}>
                <h4 className="text-[12px] lg:text-[15px] font-bold">{e.title}</h4>
                <h4 className="text-gray-400 text-[12px] lg:text-[13px]">10:30am - 11:30am</h4>
              </div>
            </div>
            <h4 className="text-[13px] lg:text-[15px] font-bold text-gray-400">Today</h4>
          </div>
        </div>
      ))}

      {pre ? (
        <>
          <div className="w-full lg:hidden ">
            <PreviewwTask />
          </div>

        </>
      ) : null}

      

      {pres ? (
        <>

          <div className="hidden lg:block top-[155px] right-[5%] z-50 mr-[2px] fixed">
            <LargePreview />
          </div>
        </>

      ) : null}

      {/* Render the pagination component */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={paginationClasses.containerClassName}
        pageClassName={paginationClasses.pageClassName}
        previousClassName={paginationClasses.previousClassName}
        nextClassName={paginationClasses.nextClassName}
        breakClassName={paginationClasses.breakClassName}
        activeClassName={paginationClasses.activeClassName}
        disabledClassName={paginationClasses.disabledClassName}
      />
    </div>
  );
};

export default Tasks;
