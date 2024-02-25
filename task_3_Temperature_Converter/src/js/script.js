const extractTemp = () => {
    /**
     * Returns extracted value of first <input> from the DOM.
     */
    let convertingTemp = document.getElementsByTagName('input')[0].value === '' ? document.getElementsByTagName('input')[1].value : document.getElementsByTagName('input')[0].value;
    let temperature = parseFloat(convertingTemp);
    temperature = parseFloat(temperature).toFixed(3);
    return temperature;
}

const displayTemp = (temp) => {
    /**
     * Insert the received value into the placeholder of resulting-temperature.
     * 
     * Checks if the value of first <select> is F, C or K respectivley.
     */
    temp = parseFloat(temp)
    const resTemp = document.getElementById('resulting-temperature').classList.contains('d-none') ? document.getElementById('resulting-temperature-small-dvc') : document.getElementById('resulting-temperature');
    if (temp) {
        if (document.getElementsByTagName('select')[1].value === 'C') {
            resTemp.value = ''
            resTemp.placeholder = temp + ' \u00B0C';
        } else if (document.getElementsByTagName('select')[1].value === 'F') {
            resTemp.value = ''
            resTemp.placeholder = temp + ' \u00B0F';
        } else {
            resTemp.value = ''
            resTemp.placeholder = temp + ' K';
        }
    } else {
        resTemp.placeholder = ' '
    }
}

const placeholderToInput = () => {
    /**
     * Set value of second <input> to its placeholder.
     */
    let temp = document.getElementsByTagName('input')[1].placeholder;
    document.getElementsByTagName('input')[1].value = temp.split(" ")[0]
}

Object.assign(document.getElementsByTagName('select')[0].style, {
    'fontSize': '22.5px',
    'height': 'max-content'
})

Object.assign(document.getElementsByTagName('select')[1].style, {
    'fontSize': '22.5px',
    'height': 'max-content'
})

const optionElements = document.getElementsByTagName('option')
for (let i = 0; i < optionElements.length; i++) {
    Object.assign(optionElements[i].style, {
        'fontSize': '21px',
    })
}
