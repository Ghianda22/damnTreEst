export interface Lines {
    lines: Array<Line>
}

export interface Line {
    terminus1: Terminus,
    terminus2: Terminus
}

export interface Terminus {
    sname: string,
    did: number
}

// {
//     "lines": [
//         {
//             "terminus1": {
//                 "sname": "Milano Celoria",
//                 "did": 1
//             },
//             "terminus2": {
//                 "sname": "Milano Rogoredo",
//                 "did": 2
//             }
//         },
//         {
//             "terminus1": {
//                 "sname": "Milano Lambrate",
//                 "did": 3
//             },
//             "terminus2": {
//                 "sname": "Sesto San Giovanni",
//                 "did": 4
//             }
//         }
//     ]
// }