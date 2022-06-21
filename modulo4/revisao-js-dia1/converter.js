
let convertTemperature = (celsius, unityActual) =>{
    if(unityActual === "F"){
        let fahrenheit = (celsius* 9/5) + 32
        return `Celsius ${celsius}, Fahrenheit ${fahrenheit} `
    }else if(unityActual === "K"){
        let Kelvin = (celsius + 273.15)
        return `Celsius ${celsius}, Kelvin ${Kelvin} `
    }

}

console.log("Convertendo De Celsius para fahrenheit:",convertTemperature(30,"F"))
console.log("Convertendo De Celsius para kelvin:",convertTemperature(30,"K"))
