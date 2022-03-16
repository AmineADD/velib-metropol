export type Station = {
    capacity?: number
    lat?: number
    lon?: number
    name?: string
    stationCode?: string
    station_id?: number
    rental_methods?: string[]
}

export type Stations = {
    lastFetch?: Date;
    results: Station[]
}