const useScrollTo = () => {
  const componentRef = useRef(null)
  const handleScroll = () => componentRef.currnent.scrollIntoView()

  return [handleScroll, componentRef]
}