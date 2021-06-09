import {UiCheckbox, CheckboxWrapper} from './style.constant';
import { useEffect } from 'react';


const Checkbox = ({value, labelName, indeterminate, ...props}) => {
  
  useEffect(() => {
    document.getElementById(`id_${value}`).indeterminate = indeterminate;
  }, [indeterminate])

  return (
    <div>
      <CheckboxWrapper for={`id_${value}`}>
        <UiCheckbox {...props} type="checkbox" value={value} id={`id_${value}`} />
        {labelName}
      </CheckboxWrapper>
    </div>
  )
}

export default Checkbox;
