export enum OrderStatus {
    // waiting was depressed
    Waiting = 'Waiting',
    Biding = 'Biding',
    // customer confirm one bid and wait vendor accept
    Accepting = 'Accepting',
    Progressing = 'Progressing',
    Completed = 'Completed',
    Pending = 'Pending',
    Refunding = 'Refunding',
    Closed = 'Closed',
    Finished = 'Finished'
}
