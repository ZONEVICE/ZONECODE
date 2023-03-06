// Classes and data.
//import { Hero as SuperHero } from './classes/hero'

import * as HeroLibrary from './classes/hero'
import powers, { Power as IPower} from './data/powers'

const ironman = new HeroLibrary.Hero('Tony Stark', 1, 50)

console.log(ironman.power)
console.log(powers[0]);
