import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommmonStore from "./commonStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommmonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommmonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}