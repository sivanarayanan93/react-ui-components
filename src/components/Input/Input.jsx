import { UiInput } from "./style.constants";
import { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState('')
  // Added for story book purpose
  const handleOnChange = (e) => {
    setValue(value => e.target.value);
    props.onChange && props.onChange();
  }
  return (
    <div>
      <UiInput {...props} onChange={handleOnChange}/>
      {value && props.enableSearch && <span>x</span>}
    </div>
  )
}

export default Input;