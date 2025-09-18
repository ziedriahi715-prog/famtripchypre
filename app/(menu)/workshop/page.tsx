'use client';
import { useEffect, useState } from 'react';
import Presentation from '@/app/components/icons/Presentation';
import WorkshopModal from '@/app/components/workshop/WorkshopModal';
import { ChevronDown } from 'lucide-react';
import { Workshop, WorkshopEvents } from '@/app/utils/workshop';
import Table from '@/app/components/workshop/Table';
import TableGroupe from '@/app/components/workshop/TableGroupe';

const Page = () => {
  const [seletedGroup, setSelectedGroup] = useState<any>('Liste Alpha');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const [filteredWorkShop, setFilteredWorkShop] = useState<any>([]);
  const [filteredEvents, setfilteredEvent] = useState<any>([]);

  const HandleModal = (data: boolean) => {
    setOpenModal(data);
  };

  const handleMenu = (data: string) => {
    setSelectedGroup(data);
  };

  useEffect(() => {
    setFilteredWorkShop(Workshop.filter((data) => data.groupe === seletedGroup));
    setfilteredEvent(WorkshopEvents.filter((data) => data.groupe === seletedGroup));
  }, [seletedGroup]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center space-x-3">
          <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
            <Presentation className="fill-primary h-7 w-7" />
          </div>
          <span className="text-primary text-xl font-semibold">Workshop</span>
        </h2>

        <button
          onClick={() => setOpenModal(true)}
          className="flex cursor-pointer items-center space-x-2"
        >
          <span>{seletedGroup}</span> <ChevronDown />
        </button>
      </div>
      <div className="mt-5 overflow-x-hidden">
        {seletedGroup === 'Liste Alpha' ? (
          <Table />
        ) : (
          <TableGroupe
            filteredWorkShop={filteredWorkShop}
            selectedGroup={seletedGroup}
            filteredEvents={filteredEvents}
          />
        )}
      </div>

      <WorkshopModal
        selectedGroup={seletedGroup}
        handleMenu={handleMenu}
        handleModal={HandleModal}
        isOpenModal={isOpenModal}
      />
    </div>
  );
};

export default Page;
