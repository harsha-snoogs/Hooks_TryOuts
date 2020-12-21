// import React, { Component } from 'react'

// export class ClassCounter extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default ClassCounter

import React, { Component } from "react";

class Counter extends Component {
    render() {
        let count = 5
        return(<React.Fragment>
               <h1>{count}</h1> 
               <h2>{count*count}</h2>
        </React.Fragment>)
}
}
export default Counter;
