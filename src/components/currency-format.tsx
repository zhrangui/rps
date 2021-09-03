import React from "react";
import NumberFormat from "react-number-format";

interface Props {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const CurrencyFormat = React.forwardRef<NumberFormat, Props>(function CurrencyFormat({ onChange, name, ...other }, ref) {

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange && onChange({
          target: {
            name: name,
            value: values.value,
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

export default CurrencyFormat;