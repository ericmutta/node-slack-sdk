/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type ChatPostMessageResponse = WebAPICallResult & {
  ok?:                  boolean;
  channel?:             string;
  ts?:                  string;
  message?:             Message;
  error?:               string;
  deprecated_argument?: string;
  response_metadata?:   ResponseMetadata;
  needed?:              string;
  provided?:            string;
};

export interface Message {
  bot_id?:         string;
  type?:           string;
  text?:           string;
  user?:           string;
  ts?:             string;
  team?:           string;
  bot_profile?:    BotProfile;
  thread_ts?:      string;
  parent_user_id?: string;
  subtype?:        string;
  username?:       string;
  icons?:          MessageIcons;
  root?:           Root;
  blocks?:         MessageBlock[];
  attachments?:    Attachment[];
}

export interface Attachment {
  text?:                  string;
  id?:                    number;
  fallback?:              string;
  blocks?:                AttachmentBlock[];
  color?:                 string;
  msg_subtype?:           string;
  callback_id?:           string;
  pretext?:               string;
  service_url?:           string;
  service_name?:          string;
  service_icon?:          string;
  author_id?:             string;
  author_name?:           string;
  author_link?:           string;
  author_icon?:           string;
  from_url?:              string;
  original_url?:          string;
  author_subname?:        string;
  channel_id?:            string;
  channel_name?:          string;
  bot_id?:                string;
  indent?:                boolean;
  is_msg_unfurl?:         boolean;
  is_reply_unfurl?:       boolean;
  is_thread_root_unfurl?: boolean;
  is_app_unfurl?:         boolean;
  app_unfurl_url?:        string;
  title?:                 string;
  title_link?:            string;
  fields?:                Field[];
  image_url?:             string;
  image_width?:           number;
  image_height?:          number;
  image_bytes?:           number;
  thumb_url?:             string;
  thumb_width?:           number;
  thumb_height?:          number;
  video_html?:            string;
  video_html_width?:      number;
  video_html_height?:     number;
  footer?:                string;
  footer_icon?:           string;
  ts?:                    string;
  mrkdwn_in?:             string[];
  actions?:               Action[];
  filename?:              string;
  size?:                  number;
  mimetype?:              string;
  url?:                   string;
  metadata?:              Metadata;
}

export interface Action {
  id?:               string;
  name?:             string;
  text?:             string;
  style?:            string;
  type?:             string;
  value?:            string;
  confirm?:          ActionConfirm;
  options?:          Option[];
  selected_options?: Option[];
  data_source?:      string;
  min_query_length?: number;
  option_groups?:    OptionGroup[];
  url?:              string;
}

export interface ActionConfirm {
  title?:        string;
  text?:         string;
  ok_text?:      string;
  dismiss_text?: string;
}

export interface OptionGroup {
  text?: string;
}

export interface Option {
  text?:  string;
  value?: string;
}

export interface AttachmentBlock {
  type?:         string;
  elements?:     PurpleElement[];
  block_id?:     string;
  fallback?:     string;
  image_url?:    string;
  image_width?:  number;
  image_height?: number;
  image_bytes?:  number;
  alt_text?:     string;
  title?:        TextElement;
  text?:         TextElement;
  fields?:       TextElement[];
  accessory?:    PurpleAccessory;
}

export interface PurpleAccessory {
  type?:         string;
  image_url?:    string;
  alt_text?:     string;
  fallback?:     string;
  image_width?:  number;
  image_height?: number;
  image_bytes?:  number;
}

export interface PurpleElement {
  type?:                            string;
  text?:                            TextElement;
  action_id?:                       string;
  url?:                             string;
  value?:                           string;
  style?:                           string;
  confirm?:                         ElementConfirm;
  placeholder?:                     TextElement;
  initial_channel?:                 string;
  response_url_enabled?:            boolean;
  initial_conversation?:            string;
  default_to_current_conversation?: boolean;
  filter?:                          Filter;
  initial_date?:                    string;
  initial_option?:                  InitialOption;
  min_query_length?:                number;
  image_url?:                       string;
  alt_text?:                        string;
  fallback?:                        string;
  image_width?:                     number;
  image_height?:                    number;
  image_bytes?:                     number;
  initial_user?:                    string;
}

export interface ElementConfirm {
  title?:   TextElement;
  text?:    TextElement;
  confirm?: TextElement;
  deny?:    TextElement;
  style?:   string;
}

export interface TextElement {
  type?:     string;
  text?:     string;
  emoji?:    boolean;
  verbatim?: boolean;
}

export interface Filter {
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?:                boolean;
}

export interface InitialOption {
  text?:        TextElement;
  value?:       string;
  description?: TextElement;
  url?:         string;
}

export interface Field {
  title?: string;
  value?: string;
  short?: boolean;
}

export interface Metadata {
  thumb_64?:    boolean;
  thumb_80?:    boolean;
  thumb_160?:   boolean;
  original_w?:  number;
  original_h?:  number;
  thumb_360_w?: number;
  thumb_360_h?: number;
  format?:      string;
  extension?:   string;
  rotation?:    number;
  thumb_tiny?:  string;
}

export interface MessageBlock {
  type?:                     string;
  block_id?:                 string;
  text?:                     TextElement;
  accessory?:                FluffyAccessory;
  elements?:                 FluffyElement[];
  call_id?:                  string;
  api_decoration_available?: boolean;
  call?:                     Call;
  fallback?:                 string;
  image_url?:                string;
  image_width?:              number;
  image_height?:             number;
  image_bytes?:              number;
  alt_text?:                 string;
  title?:                    TextElement;
  fields?:                   TextElement[];
}

export interface FluffyAccessory {
  fallback?:     string;
  image_url?:    string;
  image_width?:  number;
  image_height?: number;
  image_bytes?:  number;
  type?:         string;
  alt_text?:     string;
  action_id?:    string;
  initial_time?: string;
  placeholder?:  TextElement;
}

export interface Call {
  v1?:                 V1;
  media_backend_type?: string;
}

export interface V1 {
  id?:                   string;
  app_id?:               string;
  app_icon_urls?:        AppIconUrls;
  date_start?:           number;
  active_participants?:  Participant[];
  all_participants?:     Participant[];
  display_id?:           string;
  join_url?:             string;
  desktop_app_join_url?: string;
  name?:                 string;
  created_by?:           string;
  date_end?:             number;
  channels?:             string[];
  is_dm_call?:           boolean;
  was_rejected?:         boolean;
  was_missed?:           boolean;
  was_accepted?:         boolean;
  has_ended?:            boolean;
}

export interface Participant {
  slack_id?:     string;
  external_id?:  string;
  avatar_url?:   string;
  display_name?: string;
}

export interface AppIconUrls {
  image_32?:       string;
  image_36?:       string;
  image_48?:       string;
  image_64?:       string;
  image_72?:       string;
  image_96?:       string;
  image_128?:      string;
  image_192?:      string;
  image_512?:      string;
  image_1024?:     string;
  image_original?: string;
}

export interface FluffyElement {
  type?:                            string;
  action_id?:                       string;
  text?:                            TextElement | string;
  value?:                           string;
  verbatim?:                        boolean;
  emoji?:                           boolean;
  url?:                             string;
  style?:                           string;
  confirm?:                         ElementConfirm;
  placeholder?:                     TextElement;
  initial_channel?:                 string;
  response_url_enabled?:            boolean;
  initial_conversation?:            string;
  default_to_current_conversation?: boolean;
  filter?:                          Filter;
  initial_date?:                    string;
  initial_option?:                  InitialOption;
  min_query_length?:                number;
  image_url?:                       string;
  alt_text?:                        string;
  fallback?:                        string;
  image_width?:                     number;
  image_height?:                    number;
  image_bytes?:                     number;
  initial_user?:                    string;
}

export interface BotProfile {
  id?:      string;
  deleted?: boolean;
  name?:    string;
  updated?: number;
  app_id?:  string;
  icons?:   BotProfileIcons;
  team_id?: string;
}

export interface BotProfileIcons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface MessageIcons {
  emoji?:    string;
  image_64?: string;
}

export interface Root {
  type?:              string;
  subtype?:           string;
  text?:              string;
  ts?:                string;
  username?:          string;
  icons?:             MessageIcons;
  bot_id?:            string;
  thread_ts?:         string;
  parent_user_id?:    string;
  reply_count?:       number;
  reply_users_count?: number;
  latest_reply?:      string;
  reply_users?:       string[];
  subscribed?:        boolean;
}

export interface ResponseMetadata {
  messages?: string[];
}
