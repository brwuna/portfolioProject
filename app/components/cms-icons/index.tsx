type CMSIconProps = {
  icon: string
}
// render html that is contained in a string

export const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}
