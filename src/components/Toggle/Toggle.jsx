import { UiToggle } from './style.constant'

const Toggle = ({...props}) => {
  console.log("UiToggle = ", UiToggle)
  return (
    <UiToggle type="checkbox" {...props} />
  )
}

export default Toggle;
