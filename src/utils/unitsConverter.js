export default function unitsConverter(temp, units) {
    units === 'celsius' ? temp = temp - 273.15 : temp = (temp - 273.15) * 1.8 + 32;

    return temp.toFixed(0);
}