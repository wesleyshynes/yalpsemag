import { createAction, props } from '@ngrx/store';

export const addCredentials = createAction(
    '[User Component] AddCredentials',
    props<{username: string; role: string;}>()
);
export const removeCredentials = createAction('[User Component] RemoveCredentials');
