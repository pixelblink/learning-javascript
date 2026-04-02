// names of imported functions can be changed and still they will work but this way is limited to default export
import sums from './18one.js' //using default export

// you can change imported function name using "as" keyword making an alias of the function
import {fun1 as fn,fun2} from './18two.js' //using named export



sums()
fn()
fun2()
