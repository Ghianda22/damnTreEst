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