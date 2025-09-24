"use client";

import Calendar from "@/app/components/icons/Calendar";
import React from "react";
import Navbar from "../navbar/Navbar";

type DayProgramme = {
  key: string;
  label: string;
  title: string;
  content: React.ReactNode;
};

const days: DayProgramme[] = [
  {
    key: "2025-09-26",
    label: "Vendredi 26 septembre",
    title: "Vendredi 26 septembre : Bienvenue à Chypre!",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>17h50 :</b>
            <span>Arrivée à Larnaca.</span>
          </li>
          <li className="space-x-2">
            <span>Transfert vers votre hôtel.</span>
          </li>
          <li className="space-x-2">
            <b>19h30 :</b>
            <span>Check in, verre de bienvenue et installation à l'hôtel.</span>
          </li>
          <li className="space-x-2">
            <b>20h15 :</b>
            <span>
              Cocktail de bienvenue et présentation par Cyprus Airways.
            </span>
          </li>
          <li className="space-x-2">
            <b>21h00 :</b>
            <span>Dîner au restaurant Anaïs.</span>
          </li>
          <li className="space-x-2">
            <span>Nuit à l’hôtel casino, City of Dreams Mediterranean.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-09-27",
    label: "Samedi 27 septembre",
    title: "Samedi 27 septembre : Escapade chypriote !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>9h00 :</b>
            <span>Visite de l'hôtel City of Dreams Mediterranean.</span>
          </li>
          <li className="space-x-2">
            <b>10h00 :</b>
            <span>
              Journée aventure à la découverte de la campagne chypriote, avec
              déjeuner dans un village.
            </span>
          </li>

          <li className="space-x-2">
            <b>18h00 :</b>
            <span>
              Installation et temps libre pour se rafraîchir, à l'hôtel Cap St
              Georges.
            </span>
          </li>

          <li className="space-x-2">
            <b>19h30 :</b>
            <span>Dîner avec une vue à couper le souffle.</span>
          </li>
          <li className="space-x-2">
            <span>Nuit à l'hôtel Cap St Georges.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-09-28",
    label: "Dimanche 28 septembre",
    title: "Dimanche 28 septembre : Immersion & Blue Lagoon !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>09h00 :</b>
            <span>Petit-déjeuner.</span>
          </li>
          <li className="space-x-2">
            <b>10h00 :</b>
            <span>Visite de l'hôtel Cap St Georges. </span>
          </li>
          <li className="space-x-2">
            <b>11h00 :</b>
            <span>Check out et départ de l'hôtel.</span>
          </li>
          <li className="space-x-2">
            <b>11h40 :</b>
            <span>
              Activité artistique « éphémère » sur la plage de l'hôtel Anassa.
            </span>
          </li>
          <li className="space-x-2">
            <b>12h40 :</b>
            <span>Brunch à l'hôtel Anassa.</span>
          </li>
          <li className="space-x-2">
            <b>14h00 :</b>
            <span>
              Croisière vers le Blue Lagoon, avec déjeuner pique-nique surprise.
            </span>
          </li>
          <li className="space-x-2">
            <b>17h00:</b>
            <span>Transfert retour à Limassol.</span>
          </li>
          <li className="space-x-2">
            <b>19h00 :</b>
            <span>
              Check-in, verre de bienvenue et installation à l’hôtel Parklane.
            </span>
          </li>
          <li className="space-x-2">
            <b>20h00 :</b>
            <span>Visite de l'hôtel Parklane.</span>
          </li>
          <li className="space-x-2">
            <b>21h00 :</b>
            <span>Dîner et soirée festive à Nammos.</span>
          </li>
          <li className="space-x-2">
            <span>Nuit à l'hôtel Parklane.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-09-29",
    label: "Lundi 29 septembre",
    title: "Lundi 29 septembre : Ta léme sýntoma !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>05h00 :</b>
            <span>Petit-déjeuner matinal. </span>
          </li>
          <li className="space-x-2">
            <b>06h00 :</b>
            <span>Check-out et transfert vers l'aéroport. </span>
          </li>
          <li className="space-x-2">
            <b>08h00 :</b>
            <span>Envol vers Paris. </span>
          </li>
          <li className="space-x-2">
            <b>11h40 :</b>
            <span>Arrivée à Paris CDG. </span>
          </li>
        </ul>
      </>
    ),
  },
];

const Programme = () => {
  const [activeKey, setActiveKey] = React.useState<string>(days[0].key);
  const activeDay = React.useMemo(
    () => days.find((d) => d.key === activeKey)!,
    [activeKey]
  );

  return (
    <>
      <Navbar text="PROGRAMME" />
      <div className="mx-auto md:max-w-4xl">
        <div className="overflow-hidden">
          <div
            role="tablist"
            aria-label="Programme par jour"
            className="grid grid-cols-3 "
          >
            {days.map((day) => {
              const selected = day.key === activeKey;
              return (
                <button
                  key={day.key}
                  role="tab"
                  aria-selected={selected}
                  className={`border border-white text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center transition-colors whitespace-nowrap ${
                    selected
                      ? "bg-[#6B7280] text-white font-semibold"
                      : "bg-[#D1D5DB] hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveKey(day.key)}
                >
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">
                    {day.label.split(" ")[1]} {day.label.split(" ")[2]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-4 sm:mt-6 mx-2 sm:mx-4">
          <p className="text-[#6A9360] mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            {activeDay.title}
          </p>
          <div className="text-sm sm:text-base">{activeDay.content}</div>
        </div>
      </div>
    </>
  );
};

export default Programme;
