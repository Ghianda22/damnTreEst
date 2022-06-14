import { Direction } from "../interfaces/IDirections";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type NativeStackParamList = {
  Home: undefined;
  Board: {
    direction: Direction,
    line: Direction[]
  };
  User: undefined //TODO add the correrct type
};


//NSP = NativeScreenProp
export type HomeNSP = NativeStackScreenProps<NativeStackParamList, 'Home'>;

export type BoardNSP = NativeStackScreenProps<NativeStackParamList, 'Board'>;

export type UserNSP = NativeStackScreenProps<NativeStackParamList, 'User'>;
