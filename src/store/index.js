import { proxy } from "valtio";

export const state = proxy({
    filterPage: false
})

export function toggleFilterPage(){
    state.filterPage = !state.filterPage
    console.log(state.filterPage);
}