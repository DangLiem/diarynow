import Colors from 'consts/colors'

let names = "ORIGINAL"
let listeners = []

export let palette = Colors.ORIGINAL;

export const setPalette = (name) => {
  if (Colors[name]) {
    names = name
    palette = Colors[name];
    listeners.map(listener => listener(palette, name))
    return palette;
  }
}

export const registerListener = (listener) => {
  listeners.push(listener)
}