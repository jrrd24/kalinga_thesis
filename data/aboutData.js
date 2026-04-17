"use client";
import { Book, Coins, Map, MapPin, Users } from "lucide-react";

const PopulationTable = () => {
  const data = [
    { id: 1, name: "Babalag East (Pob.)", pop2020: 1132, pop2015: 1164 },
    { id: 2, name: "Babalag West (Pob.)", pop2020: 2156, pop2015: 1901 },
    { id: 3, name: "Bulbol", pop2020: 1109, pop2015: 918 },
    { id: 4, name: "Calaocan", pop2020: 1503, pop2015: 1278 },
    { id: 5, name: "Kinama", pop2020: 1056, pop2015: 854 },
    { id: 7, name: "Liwan East", pop2020: 1504, pop2015: 1412 },
    { id: 8, name: "Liwan West", pop2020: 3157, pop2015: 2672 },
    { id: 9, name: "Macutay", pop2020: 1998, pop2015: 1720 },
    { id: 10, name: "Romualdez", pop2020: 871, pop2015: 665 },
    { id: 11, name: "San Francisco", pop2020: 711, pop2015: 599 },
    { id: 12, name: "San Pascual", pop2020: 1329, pop2015: 1194 },
    { id: 13, name: "San Pedro", pop2020: 785, pop2015: 622 },
    { id: 14, name: "San Quintin", pop2020: 597, pop2015: 544 },
    { id: 15, name: "Santor", pop2020: 1646, pop2015: 1495 },
  ];

  // Calculate totals for the bottom row
  const total2020 = data.reduce((sum, item) => sum + item.pop2020, 0);
  const total2015 = data.reduce((sum, item) => sum + item.pop2015, 0);
  const totalChange = ((total2020 - total2015) / total2015) * 100;

  return (
    <div className="overflow-x-auto my-8 border border-white/20 shadow-sm rounded-lg">
      <table className="w-full border-collapse text-sm md:text-base bg-body-bg text-body-text">
        <thead>
          <tr className="bg-brand text-center font-bold text-brand-text uppercase tracking-wider">
            <th colSpan={2} className="border border-white p-3">
              Barangay
            </th>
            <th colSpan={3} className="border border-white p-3">
              Population Details
            </th>
          </tr>
          <tr className="bg-brand-secondary text-white text-center font-semibold">
            <th colSpan={2} className="border border-white p-2"></th>
            <th className="border border-white p-2 w-28">2020</th>
            <th className="border border-white p-2 w-28">2015</th>
            <th className="border border-white p-2 w-28 text-xs md:text-sm">
              Change 2020-2015 (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const change = ((item.pop2020 - item.pop2015) / item.pop2015) * 100;
            const isIncrease = change > 0;

            return (
              <tr key={item.id} className="hover:bg-black/5 transition-colors">
                <td className="border border-white p-2 w-10 text-gray-400 text-xs">
                  {item.id}
                </td>
                <td className="border border-white p-2 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="border border-white p-2 font-bold text-brand">
                  {item.pop2020.toLocaleString()}
                </td>
                <td className="border border-white p-2 text-gray-600">
                  {item.pop2015.toLocaleString()}
                </td>
                <td
                  className={`border border-white p-2 font-bold text-xs md:text-sm ${
                    isIncrease ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {isIncrease ? "+" : ""}
                  {change.toFixed(2)}%
                </td>
              </tr>
            );
          })}

          {/* Total Row */}
          <tr className="bg-brand text-brand-text font-bold">
            <td
              colSpan={2}
              className="border border-white p-3 uppercase tracking-tight text-center"
            >
              Total
            </td>
            <td className="border border-white p-3 text-center">
              {total2020.toLocaleString()}
            </td>
            <td className="border border-white p-3 text-center">
              {total2015.toLocaleString()}
            </td>
            <td
              className={`border border-white p-3 text-center ${totalChange > 0 ? "text-emerald-300" : "text-red-300"}`}
            >
              {totalChange > 0 ? "+" : ""}
              {totalChange.toFixed(2)}%
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer / References */}
      <div className="p-4 bg-body-bg text-xs italic text-gray-600 border-t border-white/40">
        <p className="font-bold not-italic mb-1 text-brand">References:</p>
        <p className="hover:text-brand-secondary cursor-pointer">
          https://www.philatlas.com/luzon/car/kalinga/rizal.html
        </p>
      </div>
    </div>
  );
};

const OfficialsTable = () => {
  const data = [
    { period: "2007-2010", name: "Chris Mark S. Dela Cruz" },
    { period: "2010-2019", name: "Marcelo V. Dela Cruz, Jr." },
    { period: "2019-Present", name: "Karl Bugao P. Baac" },
  ];

  return (
    <div className="overflow-hidden my-6 border border-white/20 shadow-sm rounded-lg">
      <table className="w-full border-collapse text-sm md:text-base text-body-text bg-body-bg">
        <thead>
          <tr className="bg-brand text-brand-text text-left font-bold uppercase tracking-wider">
            <th className="border border-white p-3 w-1/3">Period</th>
            <th className="border border-white p-3">Name of Official</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-black/5 transition-colors">
              <td className="border border-white p-3 font-medium ">
                {item.period}
              </td>
              <td className="border border-white p-3  font-semibold">
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const aboutData = [
  {
    id: "history",
    label: "History and Government",
    title: "History and Government",
    content: (
      <div className="space-y-4">
        <p>
          The people along the borderline of Kalinga and Isabela used to call
          this place “Lawan” which means “outside”. As years passed, the word
          Lawan was corrupted into Liwan. People were accustomed to referring to
          the place as Liwan, and to this day, it is still mistakenly called
          that.
        </p>
        <p>
          The municipality was once a part of the town of Tabuk in the old Mt.
          Province. It was the largest barrio of Tabuk before its separation. On
          June 19, 1965, Republic Act No. 4396 was signed into law by President
          Diosdado Macapagal, creating the municipality of Liwan in the old
          Mountain Province. This law marked the separation of Liwan from its
          mother town, Tabuk. It was originally composed of six barrios, namely:
          Babalag, Liwan (Townsite), Macutay, Santor, Bulbulan, and Liwan East.
        </p>
        <p>
          In 1970, Congressman Felipe Almazan of the lone congressional district
          of Kalinga-Apayao sponsored a bill to change the name of Liwan to
          Rizal. On June 19, 1971, Republic Act No. 6183 was passed approving
          the change. Mayor Jambaro, who was still then the incumbent mayor,
          made Babalag the seat of the local government unit. Additional
          barangays were created, including the split of Babalag into two
          barangays. As of 1999, there are fifteen barangays in this town,
          namely: Babalag East, Babalag West, Bulbul, Calaocan, Camarao, Kinama,
          Liwan East, Liwan West, Macutay, Romualdez, San Pascual, San
          Francisco, San Quintin, San Pedro, and Santor.
        </p>

        <PopulationTable />

        <p>
          From 1992 to 1995, Efraim Orodio was the mayor. He was succeeded by
          Marcelo dela Cruz Jr. in the 1998 elections until 2007.
        </p>

        <OfficialsTable />
      </div>
    ),
    Icon: Book,
  },
  {
    id: "land",
    label: "Its Land",
    title: "Its Land",
    content: (
      <div className="space-y-4">
        <p>
          The municipality of Rizal may well be called the gateway to the
          capital town of Tabuk and, in fact, to the province of Kalinga. It is
          situated along the provincial boundaries of Kalinga, Cagayan, and
          Isabela. It lies along the eastern part of Tabuk; bounded on the north
          by the municipality of Tuao, Cagayan; northeast by the municipality of
          Solana, Cagayan; on the east by Enrile, Cagayan, and on the south by
          Santa Maria, Isabela.
        </p>
        <p>
          Rizal has a total land area of <strong>28,178.8435</strong> hectares
          composed of valleys, wide plains, and rolling hills. Its fertile clay
          loam soil is best suited for rice production. On its western side are
          grazing lands and forests.
        </p>
        <p>
          The locality has a very pronounced rainy season from June to November
          and a relatively dry season from January to May. Cold weather occurs
          from November to February. It is hot during the rest of the months.
        </p>
      </div>
    ),
    Icon: Map,
  },
  {
    id: "inhabitants",
    label: "Its Inhabitants",
    title: "Its Inhabitants",
    content: (
      <div className="space-y-4">
        <p>
          Rizal’s population was 13,265 according to the 1995 Census of
          Population. The male population is 6,589, slightly outnumbered by the
          female population of 6,676. Most of the populace are Ilocanos. Only
          15% of the population are Kalingas, while the other 15% are from other
          Cordillera tribes. The rest of the population are Itawes and Ibanags
          from Cagayan and Isabela, respectively.
        </p>
        <p>
          As to religious affiliation, about 25% are Roman Catholics, while 10%
          are Protestants. Iglesia ni Cristo and the Anglican constitute 5% of
          the populace, 10% belonging to other religious groups or sects.
        </p>
      </div>
    ),
    Icon: Users,
  },
  {
    id: "economy",
    label: "Its Economy",
    title: "Its Economy",
    content: (
      <div className="space-y-4">
        <p>
          The town’s major sources of livelihood are farming, business,
          agriculture, foreign or domestic employment, livestock and poultry
          backyard raising, and woodcraft.
        </p>
        <p>
          The municipality also produces corn, vegetables, and bananas.
          Irrigated land area devoted to these crops is 1,800 has and the
          unirrigated or rainfed area is 700 hectares. Its main crop is palay.
        </p>
      </div>
    ),
    Icon: Coins,
  },
  {
    id: "tourist_attraction",
    label: "Tourist Attraction",
    title: "Tourist Attraction and Place of Interest",
    content: (
      <ul className=" list-disc pl-6 list-outside">
        <li>
          The Elephant Hill is located at Sitio Greenhills, San Pedro, Rizal,
          Kalinga
        </li>
        <li>Man-Made Lagoon located at Liwan West, Rizal, Kaling</li>
      </ul>
    ),
    Icon: MapPin,
  },
];
