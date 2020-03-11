export enum OrderStatus {
    // waiting was depressed
    Waiting = 'Waiting',
    Biding = 'Biding',
    // customer confirm one bid and wait vendor accept
    Accepting = 'Accepting',
    // vendor deny this order
    Denied = 'Denied',
    Progressing = 'Progressing',
    Completed = 'Completed',
    Pending = 'Pending',
    Refunding = 'Refunding',
    Refunded = 'Refunded',
    Closed = 'Closed',
    Finished = 'Finished'
}
