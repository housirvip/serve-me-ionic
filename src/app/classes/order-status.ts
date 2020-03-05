export enum OrderStatus {
    // waiting was depressed
    Waiting = 'Waiting',
    Biding = 'Biding',
    // customer confirm one bid and wait vendor accept
    Accepting = 'Accepting',
    Progressing = 'Processing',
    Completed = 'Completed',
    Pending = 'Pending',
    Refunding = 'Refunding',
    Closed = 'Closed',
    Finished = 'Finished'
}
