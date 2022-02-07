export default function setupEventBroadcast(){
    const colours = ['red', 'yellow', 'blue']
    setInterval(() => {
        const colourIndex = Math.floor(Math.random()*colours.length)
        const randomColour = colours[colourIndex]
        const event = new CustomEvent('colourChange', {detail: randomColour})
        document.dispatchEvent(event)}, 2000)
}