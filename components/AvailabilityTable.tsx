import React from "react";
import type { AvailabilityUnit } from "../types";

const units: AvailabilityUnit[] = [
  {
    unit: "A5",
    rooms: "3 + Estudio",
    area: 165,
    parking: 2,
    price: "$416,000",
  },
  { unit: "B5", rooms: "2", area: 102, parking: 2, price: "$263,000" },
  { unit: "C5", rooms: "2", area: 93, parking: 2, price: "$243,000" },
  {
    unit: "D5",
    rooms: "2 + Estudio",
    area: 121,
    parking: 2,
    price: "$330,000",
  },
  { unit: "E5", rooms: "3", area: 127, parking: 2, price: "$332,000" },
  { unit: "F5", rooms: "2", area: 105, parking: 2, price: "$278,000" },
  { unit: "G5", rooms: "3", area: 155, parking: 2, price: "$370,000" },
];

const AvailabilityTable: React.FC = () => {
  return (
    <section id="availability">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F97316] font-sans">
        Disponibilidad
      </h2>
      <div className="bg-[#F97316]/10 rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-sm border border-orange-500/20">
        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-white/20">
                <tr>
                  {["APTO.", "Habs.", "Área Neta mts2", "Parqs", "Precio"].map(
                    (header) => (
                      <th
                        key={header}
                        className="p-4 text-sm md:text-base font-semibold text-white/80 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <tr
                    key={unit.unit}
                    className={`border-b border-white/10 ${
                      index === units.length - 1 ? "border-none" : ""
                    }`}
                  >
                    <td className="p-4 font-bold text-white text-base md:text-lg">
                      {unit.unit}
                    </td>
                    <td className="p-4 text-gray-300 text-base md:text-lg">
                      {unit.rooms}
                    </td>
                    <td className="p-4 text-gray-300 text-base md:text-lg">
                      {unit.area}
                    </td>
                    <td className="p-4 text-gray-300 text-base md:text-lg">
                      {unit.parking}
                    </td>
                    <td className="p-4 font-bold text-[#F97316] text-base md:text-lg">
                      {unit.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {units.map((unit) => (
            <div
              key={unit.unit}
              className="bg-blue-900/30 p-4 rounded-lg border border-white/10 shadow-lg"
            >
              <div className="flex justify-between items-baseline mb-4 pb-2 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">{`APTO. ${unit.unit}`}</h3>
                <p className="text-xl font-bold text-[#F97316]">{unit.price}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-white/80 uppercase font-semibold">
                    Habs.
                  </p>
                  <p className="font-medium text-gray-200 mt-1">{unit.rooms}</p>
                </div>
                <div>
                  <p className="text-xs text-white/80 uppercase font-semibold">
                    Área (mts²)
                  </p>
                  <p className="font-medium text-gray-200 mt-1">{unit.area}</p>
                </div>
                <div>
                  <p className="text-xs text-white/80 uppercase font-semibold">
                    Parqs.
                  </p>
                  <p className="font-medium text-gray-200 mt-1">
                    {unit.parking}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailabilityTable;
