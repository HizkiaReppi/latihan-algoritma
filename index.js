let hobbyList = []
let results = document.getElementById("results")
const fromInput = document.getElementById("from")
const toInput = document.getElementById("to")

const addHobby = () => {
  const input = document.getElementById("inputHobby")
  const errorInputMessage = document.getElementById("errorInputMessage")
  
  if(input.value === "") {
    errorInputMessage.innerText = "Hobby Tidak Boleh Kosong!"
  } else if(hobbyList.includes(input.value)) {
    errorInputMessage.innerText = `Hobby "${input.value}" Sudah Ada Dalam List, Silahkan Masukan Hobby Lain!`
  } else {
    let text = ""
  
    const hobby = input.value
    hobbyList.push(hobby)

    hobbyList.forEach((item, index) => {
      text += index + 1 + ": " + item + "<br>"; 
    })
  
    results.innerHTML = text
    
    errorInputMessage.innerText = ""
  }
}
const swicher = () => {
  const from = fromInput.value - 1
  const to = toInput.value - 1
  let text = ""
  
  const temp = hobbyList[to]
  
  hobbyList[to] = hobbyList[from]
  hobbyList[from] = temp
  
  hobbyList.forEach((item, index) => {
    text += index + 1 + ": " + item + "<br>"; 
  })
  
  results.innerHTML = text
  
}

const validation = () => {
  const errorMesaage = document.getElementById("errorMessage")
  
  if(fromInput.value >= 1 && fromInput.value < toInput.value) {
    if(toInput.value > fromInput.value && toInput.value < hobbyList.length + 1) {
      errorMesaage.innerText = ""
      swicher()
    } else {
      errorMesaage.innerText = `Form 'To' Tidak Boleh < ${fromInput.value}' dan Tidak Boleh Lebih Dari ${hobbyList.length}`
    }
  } else {
    errorMesaage.innerText = `Form 'From' Tidak Boleh < 1 dan > ${toInput}`
  }
}