const image = (sizes, type) => {

    let sizeDefault = 320

    if (!sizes) {
        sizes = {
            xs: 320
        }
        if (type == "svg") {
            sizes = {
                mini: 32
            }
        }
    }


    let urlStart
    let urlEnd

    switch (type) {
        case "svg":
            urlStart = `https://placeholder.pics/svg/`
            urlEnd = `/000000/DEDEDE-000000/`
            break;
        default:
            urlStart = `https://fakeimg.pl/`
            urlEnd = `?text=`

    }

    return {
        create: {
            name: "Imagen de prueba",
            remoteId: `...`,
            url: `${urlStart}${sizeDefault}x${sizeDefault}${urlEnd}${sizeDefault}`,
            resizedImages: {
                create: Object.entries(sizes).map(pair => ({
                    remoteId: `...`,
                    url: `${urlStart}${pair[1]}x${pair[1]}${urlEnd}${pair[0]}-${pair[1]}`,
                    sizeName: pair[0],
                    size: pair[1]
                })),
            }
        }
    }
}

const svg = (sizes) => image(sizes,"svg")



module.exports = {
    image,
    svg
}