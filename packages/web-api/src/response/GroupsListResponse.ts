/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type GroupsListResponse = WebAPICallResult & {
  ok?:                boolean;
  groups?:            Group[];
  warning?:           string;
  response_metadata?: ResponseMetadata;
  error?:             string;
  needed?:            string;
  provided?:          string;
};

export interface Group {
  id?:              string;
  name?:            string;
  is_group?:        boolean;
  created?:         number;
  creator?:         string;
  is_archived?:     boolean;
  name_normalized?: string;
  is_mpim?:         boolean;
  members?:         string[];
  topic?:           Purpose;
  purpose?:         Purpose;
  priority?:        number;
  is_open?:         boolean;
  last_read?:       string;
  parent_group?:    string;
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
