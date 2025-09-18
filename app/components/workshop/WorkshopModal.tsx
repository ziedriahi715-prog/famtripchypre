'use client';
import React, { useEffect, useRef } from 'react';
import { WorkshopGroup } from '../../utils/workshop';
import { Check, X } from 'lucide-react';

interface WorkshopMoodal {
  isOpenModal: boolean;
  selectedGroup: string;
  handleMenu: (data: string) => void;
  handleModal: (data: boolean) => void;
}

const WorkshopModal: React.FC<WorkshopMoodal> = ({
  isOpenModal,
  selectedGroup,
  handleMenu,
  handleModal,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const disableScroll = () => {
    return (document.body.style.overflow = isOpenModal ? 'hidden' : 'auto');
  };

  useEffect(() => {
    disableScroll();
  }, [isOpenModal]);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        handleModal(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  });

  return (
    <div
      className={`${isOpenModal ? '' : 'hidden'} absolute top-0 right-0 bottom-0 left-0 h-[100vh] bg-black/15 p-6`}
    >
      <div ref={ref} className="rounded-xl bg-white p-3">
        <div className="flex items-center justify-between p-2">
          <h3 className="text-xl font-semibold">Groupes</h3>
          <X onClick={() => handleModal(false)} className="h-7 w-7" />
        </div>
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3">
          {WorkshopGroup &&
            WorkshopGroup.map((group: any, i) => (
              <li
                onClick={() => {
                  handleMenu(group), handleModal(false);
                }}
                key={i}
                className={`${selectedGroup === group ? 'border' : 'border-b'} border-primary/30 flex cursor-pointer items-center space-x-2 p-2 text-center`}
              >
                <span className={selectedGroup === group ? 'visible' : 'invisible'}>
                  <Check className="text-primary" />
                </span>
                <span>{group}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkshopModal;
