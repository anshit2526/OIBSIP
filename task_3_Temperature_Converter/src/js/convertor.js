function convertTemperature(value, fromUnit, toUnit) {
    value = parseFloat(value)
    const conversionFactors = {
        "C": {
            "C": value,
            "F": (9 / 5) * value + 32,
            "K": value + 273.15,
        },
        "F": {
            "C": (5 / 9) * (value - 32),
            "F": value,
            "K": (5 / 9) * (value - 32) + 273.15,
        },
        "K": {
            "C": value - 273.15,
            "F": (9 / 5) * (value - 273.15) + 32,
            "K": value,
        },
    };

    return conversionFactors[fromUnit][toUnit];
}


function handleInput() {
    const value = extractTemp()
    const fromUnit = document.getElementsByTagName('select')[0].value
    const toUnit = document.getElementsByTagName('select')[1].value

    try {
        const convertedValue = convertTemperature(value, fromUnit, toUnit)
        displayTemp(convertedValue.toFixed(3))
    } catch (error) {
        console.log(error.message)
    }
}

for (let i = 0; i < 2; i++) {
    document.getElementsByTagName('select')[i].addEventListener('change', () => {
        const value = extractTemp()
        const fromUnit = document.getElementsByTagName('select')[0].value
        const toUnit = document.getElementsByTagName('select')[1].value

        try {
            const convertedValue = convertTemperature(value, fromUnit, toUnit)
            displayTemp(convertedValue.toFixed(3))
        } catch (error) {
            console.log(error.message)
        }
    })
}
