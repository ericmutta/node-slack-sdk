/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type MpimOpenResponse = WebAPICallResult & {
  ok?:                boolean;
  group?:             Group;
  warning?:           string;
  response_metadata?: ResponseMetadata;
  error?:             string;
  needed?:            string;
  provided?:          string;
};

export interface Group {
  id?:                   string;
  name?:                 string;
  is_group?:             boolean;
  created?:              number;
  creator?:              string;
  is_archived?:          boolean;
  name_normalized?:      string;
  is_mpim?:              boolean;
  is_open?:              boolean;
  last_read?:            string;
  latest?:               Latest;
  unread_count?:         number;
  unread_count_display?: number;
  members?:              string[];
  topic?:                Purpose;
  purpose?:              Purpose;
  priority?:             number;
}

export interface Latest {
  bot_id?:         string;
  type?:           string;
  text?:           string;
  user?:           string;
  ts?:             string;
  team?:           string;
  bot_profile?:    BotProfile;
  thread_ts?:      string;
  parent_user_id?: string;
}

export interface BotProfile {
  id?:      string;
  deleted?: boolean;
  name?:    string;
  updated?: number;
  app_id?:  string;
  icons?:   Icons;
  team_id?: string;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface Purpose {
  value?:    string;
  creator?:  string;
  last_set?: number;
}

export interface ResponseMetadata {
  messages?: string[];
  warnings?: string[];
}
