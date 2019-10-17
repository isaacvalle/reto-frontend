import { StateType } from 'typesafe-actions';
export type RootState = StateType<typeof import('../reducers').default>;