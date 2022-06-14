import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { Direction } from "../interfaces/IDirections";

export type MaterialTopTabParamList = {
    Stops: undefined;
    Map: undefined;
    Posts: {
        did: Direction["did"]
    };
};

//MTTSP = MaterialTopTabScreenProp
export type StopsMTTSP = MaterialTopTabScreenProps<MaterialTopTabParamList, 'Stops'>;

export type MapMTTSP = MaterialTopTabScreenProps<MaterialTopTabParamList, 'Map'>;

export type PostsMTTSP = MaterialTopTabScreenProps<MaterialTopTabParamList, 'Posts'>;