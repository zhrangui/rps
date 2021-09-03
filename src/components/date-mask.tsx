import React from "react";
// @ts-ignore
import { IMaskInput } from 'react-imask';

interface Props {
  onChange: (event: { currentTarget: { name: string; value: string } }) => void;
  name: string;
}

const DateMask = React.forwardRef<HTMLElement, Props>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask='aaa #000'
        definitions={{ '#': /[1,2]/ }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ currentTarget: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default DateMask;