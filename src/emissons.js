
const compute = (distance, transportmethod) => {
    let emisson;
    switch (transportmethod) {
        case "small-diesel-car":
            emisson = distance * 142
            break;
        case "small-petrol-car":
            emisson = distance * 154
            break;
        case "small-plugin-hybrid-car":
            emisson = distance * 73
            break;
        case "small-electric-car":
            emisson = distance * 50
            break;
        case "medium-diesel-car":
            emisson = distance * 171
            break;
        case "medium-petrol-car":
            emisson = distance * 192
            break;
        case "medium-plugin-hybrid-car":
            emisson = distance * 110
            break;
        case "medium-electric-car":
            emisson = distance * 58
            break;
        case "large-diesel-car":
            emisson = distance * 209
            break;
        case "large-petrol-car":
            emisson = distance * 282
            break;
        case "large-plugin-hybrid-car":
            emisson = distance * 126
            break;
        case "large-electric-car":
            emisson = distance * 73
            break;
        case "bus":
            emisson = distance * 27
            break;
        case "train":
            emisson = distance * 6
            break;
        default:
            emisson = 0
            break;
    }
    return emisson
}

module.exports = {
    compute
}