import { RadioWrapper, UiRadio} from './style.constant';

const Radio = ({name, value, labelName, ...props}) => {
  const id = `${name}_${value}`;

  return (
    <RadioWrapper for={id} aria-labelledby={id}>
      <UiRadio type="radio" id={id} {...props} name={name} value={value} />
      {labelName}
    </RadioWrapper>
  )
}

export default Radio;