// Mock API call
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Batman"
      })
    }, 1000);
  })
}

export default getData;