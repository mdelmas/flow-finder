import React, { useState } from "react";

/*
Possible video durations
any : ne filtrez pas les résultats de recherche de vidéos en fonction de leur durée. Il s'agit de la valeur par défaut.
long : incluez uniquement les vidéos de plus de 20 minutes.
medium : n'incluez que les vidéos d'une durée comprise entre 4 et 20 minutes (inclus).
short : n'incluez que les vidéos de moins de quatre minutes.
*/
function RangeSlider({
  label,
  min,
  max,
}: {
  label: string;
  min: number;
  max: number;
}) {
  const id = React.useId();
  const [lowerBound, setLowerBound] = useState(min);
  const [upperBound, setUpperBound] = useState(max);

  console.log("range slider", lowerBound, upperBound);

  const controlLowerBound = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setLowerBound(+event.target.value);
  };

  return (
    <fieldset id={id}>
      <legend>{label}</legend>

      <label htmlFor="lowerBound">Lower bound</label>
      <input
        type="range"
        id="lowerBound"
        name="lowerBound"
        value={lowerBound}
        onChange={controlLowerBound}
      />

      <label htmlFor="upperBound">Upper bound</label>
      <input
        type="range"
        id="upperBound"
        name="upperBound"
        value={upperBound}
      />
    </fieldset>
  );
}

export default RangeSlider;
