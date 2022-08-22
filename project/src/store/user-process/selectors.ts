import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserAvatar = (state: State): string => state[NameSpace.User].avatarUrl;
export const getUserEmail = (state: State): string => state[NameSpace.User].email;

