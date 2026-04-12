const PopulationTable = () => {
  const data = [
    { id: 1, name: "Babalag East (Pob.)", pop2010: "1,179" },
    { id: 2, name: "Babalag West (Pob.)", pop2010: "1,851" },
    { id: 3, name: "Bulbul", pop2010: "750" },
    { id: 4, name: "Calaocan", pop2010: "1,304" },
    { id: 5, name: "Kinama", pop2010: "762" },
    { id: 6, name: "Camarao", pop2010: "" },
    { id: 7, name: "Liwan East", pop2010: "1,349" },
    { id: 8, name: "Liwan West", pop2010: "2,490" },
    { id: 9, name: "Macutay", pop2010: "1,575" },
    { id: 10, name: "Romualdez", pop2010: "594" },
    { id: 11, name: "San Francisco", pop2010: "482" },
    { id: 12, name: "San Pascual", pop2010: "1,190" },
    { id: 13, name: "San Pedro", pop2010: "497" },
    { id: 14, name: "San Quintin", pop2010: "532" },
    { id: 15, name: "Santor", pop2010: "1,387" },
  ];

  return (
    <div className="overflow-x-auto my-8 border border-white/20 shadow-sm">
      <table className="w-full border-collapse text-sm md:text-base bg-body-bg text-body-text">
        <thead>
          {/* Main Header */}
          <tr className="bg-brand text-center font-bold text-brand-text uppercase tracking-wider">
            <th colSpan={2} className="border border-white p-3">
              Barangay
            </th>
            <th colSpan={3} className="border border-white p-3">
              Population*
            </th>
          </tr>
          {/* Years Sub-header */}
          <tr className="bg-brand-secondary text-brand text-center font-semibold">
            <th colSpan={2} className="border border-white p-2"></th>
            <th className="border border-white p-2 w-24">2010</th>
            <th className="border border-white p-2 w-24">2020</th>
            <th className="border border-white p-2 w-24"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-black/5 transition-colors">
              <td className="border border-white p-2 w-10 text-gray-500">
                {item.id}
              </td>
              <td className="border border-white p-2 font-medium ">
                {item.name}
              </td>
              <td className="border border-white p-2 text-center font-bold ">
                {item.pop2010}
              </td>
              <td className="border border-white p-2"></td>
              <td className="border border-white p-2"></td>
            </tr>
          ))}
          {/* Total Row */}
          <tr className="bg-brand  text-brand-text font-bold">
            <td
              colSpan={2}
              className="border border-white p-3 uppercase tracking-tight"
            >
              Total
            </td>
            <td className="border border-white p-3"></td>
            <td className="border border-white p-3"></td>
            <td className="border border-white p-3"></td>
          </tr>
        </tbody>
      </table>

      {/* Footer / References */}
      <div className="p-4 bg-body-bg text-xs italic text-gray-600 border-t border-white/40">
        <p className="font-bold not-italic mb-1">References:</p>
        <p>
          * - 2010 NSO{" "}
          <span className="underline text-blue-600 cursor-pointer">
            Census of Population
          </span>
        </p>
        <p>** - 2010 Partial Data from COMELEC</p>
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
    <div className="overflow-hidden my-6 border border-white/20 shadow-sm rounded-sm">
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
  },
];
