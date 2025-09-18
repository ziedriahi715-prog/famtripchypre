import { Workshop } from '@/app/utils/workshop';
import React from 'react';

const Table = () => {
  return (
    <div>
      <table className="w-full rounded-[20px]">
        <thead className="border-primary bg-primary/30 border font-semibold text-gray-900">
          <tr>
            <td className="hidden p-2 md:block">Agence</td>
            <td className="p-2">Prénom</td>
            <td className="p-2">Nom</td>
            <td className="p-2">Groupe</td>
          </tr>
        </thead>
        <tbody>
          {Workshop &&
            Workshop.sort((a: any, b: any) => a.nom.localeCompare(b.nom)).map(
              (workshop: any, k: any) => (
                <tr key={k} className="border-accent/50 border-b">
                  <td className="hidden p-2 md:block">{workshop.agence}</td>
                  <td className="p-2">{workshop.prenom}</td>
                  <td className="p-2">{workshop.nom}</td>
                  <td className="p-2 text-base">{workshop.groupe}</td>
                </tr>
              ),
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
