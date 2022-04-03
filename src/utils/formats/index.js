const formatCardNumber = (value) => {
  return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
};

const formats = {
  formatCardNumber
}

export default formats;
