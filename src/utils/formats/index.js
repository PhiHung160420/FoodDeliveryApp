const formatCardNumber = (value) => {
  return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
};

const calculateAngle = (coordinates) => {
  let startLat = coordinates[0]["latitude"]
  let startLng = coordinates[0]["longitude"]
  let endLat = coordinates[1]["latitude"]
  let endLng = coordinates[1]["longitude"]
  let dx = endLat - startLat
  let dy = endLng - startLng

  return Math.atan2(dy, dx) * 180 / Math.PI
}

const formats = {
  formatCardNumber,
  calculateAngle
}

export default formats;
