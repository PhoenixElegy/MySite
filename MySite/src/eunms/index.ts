export const enum Locale {
  ZH = 'zh',
  EN = 'en',
}

export interface MenuItem {
  "id": number,
  "name": string,
  "route": string,
  "children"?: Array<MenuItem> 
}