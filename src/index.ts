function loadPalettes () {
  const palettes: any = require.context('./palettes', false, /\.ts$/)
  const reObj: any = {}
  palettes.keys().forEach((key: string) => {
    let palette: any= palettes(key).default
    reObj[palette.name] = palette
  })
  return reObj
}

const colorPalettes = loadPalettes()

export default colorPalettes
