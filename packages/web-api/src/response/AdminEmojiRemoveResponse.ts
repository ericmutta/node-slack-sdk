/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type AdminEmojiRemoveResponse = WebAPICallResult & {
  ok?:                boolean;
  error?:             string;
  response_metadata?: ResponseMetadata;
  needed?:            string;
  provided?:          string;
};

export interface ResponseMetadata {
  messages?: string[];
}
