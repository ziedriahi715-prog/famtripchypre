import Calendar from '@/app/components/icons/Calendar';
import Item from '@/app/components/programme/Item';
import React from 'react';

const page = () => {
  return (
    <div className="mx-auto p-6 md:max-w-4xl">
      <h2 className="flex items-center space-x-3">
        <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
          <Calendar className="fill-primary h-7 w-7" />
        </div>
        <span className="text-primary text-xl font-semibold">Programme</span>
      </h2>

      <Item
        initialDate={14}
        title="Bienvenue dans la Secret Destination !"
        month="Mars"
        content={
          <>
            <ul className="list-disc space-y-3 py-2 pl-5">
              <li className="space-x-2">
                <b>16h50 :</b>
                <span>arrivée et transfert vers votre premier hôtel</span>
              </li>
              <li className="space-x-2">
                <b>18h30 :</b>
                <span>check in et installation en chambre</span>
              </li>
              <li className="space-x-2">
                <b>20h00 :</b>
                <span>cocktail dinatoire à l&apos;hôtel</span>
              </li>
            </ul>
          </>
        }
      />

      <Item
        initialDate={15}
        month="Mars"
        title="Activité exclusive, Workshop & Glow party"
        content={
          <>
            <ul className="list-disc space-y-2 py-2 pl-5">
              <li className="space-x-2">
                <b>06h00 :</b>
                <span>
                  rendez-vous dans le lobby de l&apos;hôtel, départ pour une activité exclusive
                </span>
              </li>
              <li className="text-secondary italic">Dress code : doudoune, gant et bonnet</li>
            </ul>

            <ul className="list-disc space-y-2 py-2 pl-4">
              <li className="space-x-2">
                <b>08h00 :</b>
                <span>retour et petit déjeuner à l&apos;hotel, puis check out</span>
              </li>
              <li className="text-secondary italic">
                NB: votre deuxième nuitée aura lieu dans hébergement atypique
              </li>
            </ul>

            <ul className="my-2 list-disc space-y-2 pl-4">
              <li className="space-x-2">
                <b>10h00 :</b>
                <span>départ pour une visite incontournable</span>
              </li>
              <li className="space-x-2">
                <b>12h00 :</b>
                <span>déjeuner</span>
              </li>
              <li>Transfert à pied pour votre deuxième hôtel</li>
              <li className="space-x-2">
                <b>De 14h00 à 18h00 :</b>
                <span>workshop</span>
              </li>
              <li className="text-secondary italic">
                NB : consultez votre groupe et votre planning dans la section Workshop
              </li>

              <li>Check in et temps libre pour se changer</li>
              <li className="space-x-2">
                <b>20h00 :</b>
                <span>rendez-vous dans le lobby de l&apos;hôtel, départ pour la Glow party</span>
              </li>
              <li className="text-secondary italic">
                Dress code : tenue élégante avec un accessoire brillant ou scintillant
              </li>
            </ul>

            <ul className="mt-2 list-disc space-y-2 pl-4">
              <li className="space-x-2">
                <b>02h00 :</b>
                <span>transfert retour à l&apos;hôtel</span>
              </li>
              <li className="text-secondary italic">
                NB : pour les couches tôt des navettes seront prévues
              </li>
            </ul>
          </>
        }
      />

      <Item
        initialDate={16}
        month="Mars"
        title="See you soon !"
        content={
          <>
            <ul className="list-disc space-y-3 py-2 pl-5">
              <li className="space-x-2">
                <b>09h00 :</b>
                <span>check out et transfert vers l&apos;aéroport</span>
              </li>
              <li className="space-x-2">
                <b>12h00 :</b>
                <span>envol vers Paris</span>
              </li>
              <li className="space-x-2">
                <b>14h00 :</b>
                <span>arrivée Paris CDG</span>
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default page;
