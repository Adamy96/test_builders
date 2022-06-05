import { useTypography } from "@hooks"

const Typography = (props: ITypography) => {
  const { createComponent } = useTypography()
  const component = createComponent(props)

  return component
}

export default Typography