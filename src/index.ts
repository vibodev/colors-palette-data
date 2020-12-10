function loadPalettes () {
  const palettes: any = require.context('./palettes', false, /\.ts$/)
  const reObj: any = {}
  // console.log(palettes)
  palettes.keys().forEach((key: string) => {
    let palette: any= palettes(key).default
    reObj[palette.name] = palette
  })
  console.log(reObj)
  return reObj
}

const colorPalettes = loadPalettes()

export default colorPalettes
