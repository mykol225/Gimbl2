export default function arrayToObjectArray(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    let id = i
    newArray[i] = { id, value }
  }
  return newArray
}
