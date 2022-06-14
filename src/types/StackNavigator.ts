import { Direction } from "../interfaces/IDirections";

export type StackParamList = {
  Home: undefined;
  Board: {
    direction: Direction,
    line: Direction[]
  };
  User: undefined //TODO add the correrct type
};