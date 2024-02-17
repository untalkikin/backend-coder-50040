import {fileURLToPath} from "url"
import {dirname} from "path"

const _filename = fileURLToPath(import.meta.url)
export const _dirname = dirname(_filename) // devuelvo el path del archivo

console.log(_dirname)
