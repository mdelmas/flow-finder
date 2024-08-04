import React, { useState } from "react";

/*
Possible video durations
any : ne filtrez pas les résultats de recherche de vidéos en fonction de leur durée. Il s'agit de la valeur par défaut.
long : incluez uniquement les vidéos de plus de 20 minutes.
medium : n'incluez que les vidéos d'une durée comprise entre 4 et 20 minutes (inclus).
short : n'incluez que les vidéos de moins de quatre minutes.
*/

export interface Option {
  id: string;
  label: string;
  value: string;
}

function ToggleButtonGroup({
  label,
  fieldName,
  buttonOptions = [],
}: {
  label: string;
  fieldName: string;
  buttonOptions: Option[];
}) {
  const [currentValue, setCurrentValue] = useState(buttonOptions[0]?.value);

  return (
    <fieldset>
      <legend>{label}</legend>

      {buttonOptions.map((option, index) => (
        <div key={option.id}>
          <input
            type="radio"
            name={fieldName}
            id={option.id}
            value={option.value}
            checked={currentValue === option.value}
            onChange={(event) => {
              setCurrentValue(event.target.value);
            }}
          />
          <label htmlFor={option.id}>{option.label}</label>
          {index !== buttonOptions.length - 1 && <br />}
        </div>
      ))}
    </fieldset>
  );
}

export default ToggleButtonGroup;
