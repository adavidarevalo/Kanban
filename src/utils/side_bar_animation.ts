export const sideBarAnimation = (
  isSideOpen: number,
  setIsSideOpen: React.Dispatch<React.SetStateAction<number>>
) => {
  if (isSideOpen === 0) {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setIsSideOpen(() => i * 5)
      }, 600)
    }
    return
  }
  for (let i = 50; i >= 0; i--) {
    setTimeout(() => {
      setIsSideOpen(() => i * 5)
    }, 600)
  }
}
