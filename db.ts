export interface User {
  id: string;
  name: string;
  timeForWater: number;
  optedInForHealthTips: boolean;
  hours: number[];
}

export const users: User[] = [
  {
    name: "Akhil Pothana",
    id: "3116733678368229",
    timeForWater: 8,
    optedInForHealthTips: true,
    hours: [2, 10, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    name: "Roger Smith",
    id: "2569932836385750",
    timeForWater: 8,
    optedInForHealthTips: true,
    hours: [2, 10, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    name: "Ronny Lim",
    id: "2624246044325897",
    timeForWater: 8,
    optedInForHealthTips: true,
    hours: [2, 10, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    name: "Kevin Wang",
    id: "2479436688830447",
    timeForWater: 8,
    optedInForHealthTips: true,
    hours: [2, 10, 14, 15, 16, 17, 18, 19, 20]
  }
];
