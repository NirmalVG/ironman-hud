interface CornerBracketsProps {
  size?: number // px size of bracket arm
  thickness?: number // border width
  color?: string
}

export function CornerBrackets({
  size = 16,
  thickness = 2,
  color = "#00D4FF",
}: CornerBracketsProps) {
  const style = (
    top?: boolean,
    right?: boolean,
    bottom?: boolean,
    left?: boolean,
  ) => ({
    position: "absolute" as const,
    width: size,
    height: size,
    ...(top !== undefined && { top: 0 }),
    ...(bottom !== undefined && { bottom: 0 }),
    ...(left !== undefined && { left: 0 }),
    ...(right !== undefined && { right: 0 }),
    borderColor: color,
    borderStyle: "solid",
    borderTopWidth: top ? thickness : 0,
    borderBottomWidth: bottom ? thickness : 0,
    borderLeftWidth: left ? thickness : 0,
    borderRightWidth: right ? thickness : 0,
  })

  return (
    <>
      <div style={style(true, undefined, undefined, true)} />
      <div style={style(true, true, undefined, undefined)} />
      <div style={style(undefined, undefined, true, true)} />
      <div style={style(undefined, true, true, undefined)} />
    </>
  )
}
