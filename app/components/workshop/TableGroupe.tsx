import React from 'react';

interface Workshop {
  filteredWorkShop: any;
  selectedGroup: string;
  filteredEvents: any;
}
const TableGroupe: React.FC<Workshop> = ({ filteredWorkShop, selectedGroup, filteredEvents }) => {
  return (
    <div>
      <div className="border-accent/60 mb-5 rounded-[20px] border">
        <h3 className="text-primary p-3 text-center text-xl font-semibold">{selectedGroup}</h3>
        <div className="space-y-2 border-t border-gray-600 p-3">
          {filteredWorkShop &&
            filteredWorkShop.map((workshop: any, k: any) => (
              <p key={k}>
                <span>
                  {workshop.prenom} {workshop.nom}
                </span>{' '}
                - <b>{workshop.agence}</b>
              </p>
            ))}
        </div>
      </div>
      <table className="table_workshop grid w-full grid-cols-2 overflow-auto rounded-[20px]">
        <thead>
          <tr>
            <td>14h </td>
            <td>14h15</td>
            <td>14h30</td>
            <td>14h45</td>
            <td className="mb-5">15h</td>
            <td className="border-accent/40 border-t">15h15</td>
            <td>15h30</td>
            <td>15h45</td>
            <td>16h</td>
            <td className="mb-5">16h15</td>
            <td className="border-accent/40 border-t">16h30</td>
            <td>16h45</td>
            <td>17h</td>
            <td>17h15</td>
            <td>17h30</td>
          </tr>
        </thead>
        <tbody>
          {filteredEvents &&
            filteredEvents.map((event: any, k: any) => (
              <tr key={k}>
                <td>{event.programme['14h00']}</td>
                <td>{event.programme['14h15']}</td>
                <td>{event.programme['14h30']}</td>
                <td>{event.programme['14h45']}</td>
                <td className="mb-5">{event.programme['15h00']}</td>
                <td className="border-accent/40 border-t">{event.programme['15h15']}</td>
                <td>{event.programme['15h30']}</td>
                <td>{event.programme['15h45']}</td>
                <td>{event.programme['16h00']}</td>
                <td className="mb-5">{event.programme['16h15']}</td>
                <td className="border-accent/40 border-t">{event.programme['16h30']}</td>
                <td>{event.programme['16h45']}</td>
                <td>{event.programme['17h00']}</td>
                <td>{event.programme['17h15']}</td>
                <td>{event.programme['17h30']}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGroupe;
