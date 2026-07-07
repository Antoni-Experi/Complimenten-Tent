const missionKey = 'complimentenTentMission:v1'

export function loadMission() {
  try {
    const rawMission = localStorage.getItem(missionKey)
    return rawMission ? JSON.parse(rawMission) : null
  } catch {
    return null
  }
}

export function saveMission(mission) {
  localStorage.setItem(missionKey, JSON.stringify(mission))
}

export function clearMission() {
  localStorage.removeItem(missionKey)
}
