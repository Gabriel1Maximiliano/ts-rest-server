export type Weather= 'sunny'| 'rainy' | 'cloudy' | 'stormy';
export type Visibility = 'poor'| 'great' | 'ok' ;

export interface DiaryEntry {
        id:number,
        date:string,
        weather:string
        visibility:Weather
        comment:Visibilityng
}