import React, { useEffect, useState } from "react";

const systemicCalciumDoseRanges = [
  {
    range: [1.45, 10000],
    dose: "Reduce by 0.6mmol/L & inform Doctor",
    duration: "6 Hours",
  },
  {
    range: [1.31, 1.45],
    dose: "Reduce by 0.4mmol/L",
    duration: "6 Hours",
  },
  {
    range: [1.21, 1.3],
    dose: "Reduce by 0.2mmol/",
    duration: "6 Hours",
  },
  {
    range: [1.12, 1.2],
    dose: "No Change",
    duration: "6 Hours",
  },
  { range: [1.05, 1.11], dose: "Increase by 0.2mmol/L", duration: "6 Hours" },
  { range: [0.95, 1.04], dose: "Increase by 0.4mmol/L", duration: "2 Hours" },
  { range: [0, 0.94], dose: "Increase by 0.6mmol/L", duration: "2 Hours" },
];

const postFilterCitrateDoseRanges = [
  {
    range: [0.46, 10000],
    dose: "Increase by 0.3mmol/L & inform ICU Consultant",
    duration: "6 Hours",
  },
  {
    range: [0.41, 0.45],
    dose: "Increase by 0.2mmol/L",
    duration: "6 Hours",
  },
  {
    range: [0.35, 0.4],
    dose: "Increase by 0.1mmol/L",
    duration: "6 Hours",
  },
  {
    range: [0.25, 0.34],
    dose: "No Change (Typical Target Range)",
    duration: "6 Hours",
  },
  { range: [0.2, 0.24], dose: "Reduce by 0.1mmol/L", duration: "6 Hours" },
  { range: [0.15, 0.19], dose: "Reduce by 0.2mmol/L", duration: "6 Hours" },
  { range: [0, 0.14], dose: "Reduce by 0.3mmol/L", duration: "6 Hours" },
];

const weightRanges = [
  { weightRange: [0, 60], dialysateFlow: 2000, bloodFlow: 100 },
  { weightRange: [60, 69], dialysateFlow: 2200, bloodFlow: 110 },
  { weightRange: [70, 79], dialysateFlow: 2600, bloodFlow: 130 },
  { weightRange: [80, 89], dialysateFlow: 3000, bloodFlow: 150 },
  { weightRange: [90, 100], dialysateFlow: 3200, bloodFlow: 160 },
  { weightRange: [101, 10000], dialysateFlow: 3600, bloodFlow: 180 },
];

export const WeightPanel = () => {
  const [weightInKG, setWeightInKG] = useState("");
  const [weightRangeData, setWeightRangeData] = useState({});

  useEffect(() => {
    if (weightInKG.length > 0 && !isNaN(weightInKG) && Number(weightInKG) > 0) {
      const foundWeightRangeData = weightRanges.find(
        (item) =>
          weightInKG >= item.weightRange[0] && weightInKG <= item.weightRange[1]
      );
      if (foundWeightRangeData) {
        setWeightRangeData(foundWeightRangeData);
      } else {
        setWeightRangeData({});
      }
      console.log(foundWeightRangeData);
    } else {
      setWeightRangeData({});
    }
  }, [weightInKG]);

  return (
    <section class="bg-zinc-50" id="Weight">
      <div class="flex flex-col items-center justify-center px-6 mx-auto mb-6 mt-6 lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-left">
              Weight
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 text-left"
                >
                  Patient Weight KG
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="80"
                  required="true"
                  min={0}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setWeightInKG(value);
                  }}
                />

                {weightRangeData.dialysateFlow && weightRangeData.bloodFlow ? (
                  <div className="text-slate-500 text-gray-900 text-left py-6 pb-6">
                    <p class="font-normal">
                      <span className="font-bold">Dialysate Flow: </span>
                      {weightRangeData.dialysateFlow} ml/h
                    </p>
                    <p class="font-normal">
                      <span className="font-bold">Blood Flow: </span>
                      {weightRangeData.bloodFlow} ml/mml
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PostFilterCitrateDosePanel = () => {
  const [postFilterCitrateDoseInMMOL, setPostFilterCitrateDoseInMMOL] =
    useState("");
  const [postFilterCitrateDoseData, setPostFilterCitrateDoseData] = useState(
    {}
  );

  useEffect(() => {
    if (
      postFilterCitrateDoseInMMOL.length > 0 &&
      !isNaN(postFilterCitrateDoseInMMOL) &&
      Number(postFilterCitrateDoseInMMOL) > 0
    ) {
      const foundRangeData = postFilterCitrateDoseRanges.find((item) => {
        console.log(
          postFilterCitrateDoseInMMOL,
          item.range,
          postFilterCitrateDoseInMMOL >= item.range[0],
          postFilterCitrateDoseInMMOL <= item.range[1]
        );
        return (
          postFilterCitrateDoseInMMOL >= item.range[0] &&
          postFilterCitrateDoseInMMOL <= item.range[1]
        );
      });
      if (foundRangeData) {
        setPostFilterCitrateDoseData(foundRangeData);
      } else {
        setPostFilterCitrateDoseData({});
      }
      console.log(foundRangeData);
    } else {
      setPostFilterCitrateDoseData({});
    }
  }, [postFilterCitrateDoseInMMOL]);

  return (
    <section class="bg-zinc-50" id="Citrate">
      <div class="flex flex-col items-center justify-center px-6 mx-auto mb-6 mt-6 lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-left">
              Post-filter (Circuit) [iCa2+] and Citrate Dose
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 text-left"
                >
                  Post-filter [iCa2+] [mmol/L]
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="0.5"
                  maxLength={3}
                  required="true"
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setPostFilterCitrateDoseInMMOL(value);
                  }}
                />

                {postFilterCitrateDoseData.dose &&
                postFilterCitrateDoseData.duration ? (
                  <div className="text-slate-500 text-gray-900 text-left py-6 pb-6">
                    <p class="font-normal">
                      <span className="font-bold">
                        Change of Citrate dose (Citrate/Blood):{" "}
                      </span>
                      {postFilterCitrateDoseData.dose} ml/h
                    </p>
                    <p class="font-normal">
                      <span className="font-bold">
                        Check post-filter iCa2+ & review Citrate dose after:{" "}
                      </span>
                      {postFilterCitrateDoseData.duration} ml/mml
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SystemicCalciumDosePanel = () => {
  const [systemicCalciumDoseInMMOL, setSystemicCalciumDoseInMMOL] =
    useState("");
  const [systemicCalciumDoseData, setSystemicCalciumDoseData] = useState({});

  useEffect(() => {
    if (
      systemicCalciumDoseInMMOL.length > 0 &&
      !isNaN(systemicCalciumDoseInMMOL) &&
      Number(systemicCalciumDoseInMMOL) > 0
    ) {
      const foundRangeData = systemicCalciumDoseRanges.find((item) => {
        console.log(
          systemicCalciumDoseInMMOL,
          item.range,
          systemicCalciumDoseInMMOL >= item.range[0],
          systemicCalciumDoseInMMOL <= item.range[1]
        );
        return (
          systemicCalciumDoseInMMOL >= item.range[0] &&
          systemicCalciumDoseInMMOL <= item.range[1]
        );
      });
      if (foundRangeData) {
        setSystemicCalciumDoseData(foundRangeData);
      } else {
        setSystemicCalciumDoseData({});
      }
      console.log(foundRangeData);
    } else {
      setSystemicCalciumDoseData({});
    }
  }, [systemicCalciumDoseInMMOL]);

  return (
    <section class="bg-zinc-50" id="Calcium">
      <div class="flex flex-col items-center justify-center px-6 mx-auto mb-6 mt-6 lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-left">
              Systemic [iCa2+] and Calcium Dose
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 text-left"
                >
                  Systemic [iCa2+] [mmol/L]
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="0.5"
                  maxLength={3}
                  required="true"
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setSystemicCalciumDoseInMMOL(value);
                  }}
                />

                {systemicCalciumDoseData.dose &&
                systemicCalciumDoseData.duration ? (
                  <div className="text-slate-500 text-gray-900 text-left py-6 pb-6">
                    <p class="font-normal">
                      <span className="font-bold">
                        Change of Calcium dose (Calcium/filtrate):{" "}
                      </span>
                      {systemicCalciumDoseData.dose}
                    </p>
                    <p class="font-normal">
                      <span className="font-bold">
                        Review systemic [iCa2+] & review Calcium dose after:{" "}
                      </span>
                      {systemicCalciumDoseData.duration}
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
