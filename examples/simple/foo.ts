const msg: string = '\n\n\nThis is only a test.\n\n\n'
console.log(msg)

/*
import num from '@myorg/js_pkg'
import num2 from '@myorg/js_lib'
import { A } from '@myorg/dts_pkg'
import { format } from 'date-fns'


export const a: A = 123
export const b: string = `number: ${num}, date: ${format(
    new Date(2014, 1, 11),
    'MM/dd/YYYY'
)}`
export const c: string = `number: ${num2}`

/*
console.log(a, b, c)
*/

// Debugging 
interface Pet {
  name: string;
  species: string;
  age?: number;
  isCute?: boolean;
}
const croc: Pet = JSON.parse('{"name":"Lyle","species":"Crocodile","isCute":true}')
const moose: Pet = JSON.parse('{"name":"Bullwinkle","age":59}')

console.log(croc)
console.log(moose)

import {Decoder, object, string, optional, number, boolean} from '@mojotech/json-type-validation'



const petDecoder: Decoder<Pet> = object({
  name: string(),
  species: string(),
  age: optional(number()),
  isCute: optional(boolean())
})
const lyle: Pet = petDecoder.runWithException(croc)
const bullwinkle: Pet = petDecoder.runWithException(moose)
