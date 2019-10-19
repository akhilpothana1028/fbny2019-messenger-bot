export interface User {
  name: string;
  id: string;
  timeForWater: number;
  optedInForHealthTips: boolean;
}

export const users: User[] = [
  {
    name: "Roger Smith",
    id: "32478027349023",
    timeForWater: 8,
    optedInForHealthTips: true
  }
];
