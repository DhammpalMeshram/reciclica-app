import { createAction } from "@ngrx/store";

export const show = createAction('[Loading] show');
export const hide = createAction('[Loading] hide');

export type LoadingAction = ReturnType<typeof show | typeof hide>;
