export const OPEN_MODAL = "OPEN_MODAL"

export const CLOSE_MODAL = "CLOSE_MODAL"

export const openModal = (muscleName) => ({
  type: OPEN_MODAL,
  payload: muscleName,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
