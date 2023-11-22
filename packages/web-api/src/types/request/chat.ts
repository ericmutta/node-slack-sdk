import type { KnownBlock, Block, MessageAttachment, LinkUnfurls, MessageMetadata } from '@slack/types';
import type { CursorPaginationEnabled, OptionalTeamAssignable, TokenOverridable } from './common';

interface Channel {
  /** @description Channel ID for the message. */
  channel: string;
}
interface ChannelAndTS extends Channel {
  /** @description Timestamp of the message. */
  ts: string;
}
interface ChannelAndMessageTS extends Channel {
  /** @description Timestamp of the message. */
  message_ts: string;
}
interface AsUser {
  /**
   * @description Pass `true` to act as the authed user with {@link https://api.slack.com/scopes/chat:write:user `chat:write:user` scope}.
   * Bot users in this context are considered authed users. If unused or `false`, the message will be acted upon with
   * {@link https://api.slack.com/scopes/chat:write:bot `chat:write:bot` scope}.
   */
  as_user?: boolean;
}
interface LinkNames {
  /** @description Find and link channel names and usernames. */
  link_names?: boolean;
}
interface Parse {
  /**
   * @description Change how messages are treated. Defaults to `none`.
   * @see {@link https://api.slack.com/reference/surfaces/formatting#automatic-parsing Formatting: Automatic parsing}.
   */
  parse?: 'full' | 'none';
}
interface Text {
  /** @description Text of the message. */
  text: string;
}
interface ChannelAndText extends Channel, Text {}
interface ChannelAndBlocks extends Channel {
  /**
   * @description An array of structured Blocks.
   * @see {@link https://api.slack.com/reference/block-kit/blocks Blocks reference}.
   */
  blocks: (KnownBlock | Block)[];
}
interface ChannelAndAttachments extends Channel {
  /**
   * @description An array of structured attachments.
   * @see {@link https://api.slack.com/messaging/composing/layouts#attachments Adding secondary attachments}.
   */
  attachments: MessageAttachment[];
}
// Models message-creation arguments, user must provide one of the following combinations:
// 1. channel and text
// 2. channel and blocks
// 3. channel and attachments
type MessageContents = ChannelAndText | ChannelAndBlocks | ChannelAndAttachments;
interface ThreadTS {
  /**
   * @description Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts`
   * value; use its parent's value instead.
   */
  thread_ts: string;
}
interface WithinThreadReply extends Partial<ThreadTS> {
  /**
   * @description Used in conjunction with `thread_ts`, when set to `false` will make the reply only visibile within
   * a thread.
   */
  reply_broadcast?: false;
}
interface BroadcastedThreadReply extends ThreadTS {
  /** @description Used in conjunction with `thread_ts`, when set to `true` will broadcast the reply to the channel. */
  reply_broadcast: true;
}
// For APIs supporting `reply_broadcast`, there are two options: either a broadcasted threaded reply,
// or not broadcasted. Broadcasted replies are necessarily threaded, so `thread_ts` becomes required.
type ReplyInThread = WithinThreadReply | BroadcastedThreadReply;

interface Metadata {
  /** @description Object representing message metadata, which will be made accessible to any user or app. */
  metadata?: MessageMetadata;
}
interface IconEmoji {
  as_user?: false;
  icon_url?: never;
  /**
   * @description Emoji to use as the icon for this message. Overrides `icon_url`.
   * Can only be used with `as_user` set to `false`.
   */
  icon_emoji?: string;
}
interface IconURL {
  as_user?: false;
  icon_emoji?: never;
  /**
   * @description URL to an image to use as the icon for this message. `icon_emoji` takes precendence over this field.
   * Can only be used with `as_user` set to `false`.
   */
  icon_url?: string;
}
// Can only specify message icon via predefined authorship using one of emoji or URL, but not both.
type Icon = IconEmoji | IconURL;
interface Username {
  as_user?: false;
  /** @description Set your bot's username. Can only be used with `as_user` set to `false`. */
  username?: string;
}
type Authorship = (Icon & Username) | AsUser;

// https://api.slack.com/methods/chat.delete
export interface ChatDeleteArguments extends ChannelAndTS, AsUser, TokenOverridable {}

// https://api.slack.com/methods/chat.deleteScheduledMessage
export interface ChatDeleteScheduledMessageArguments extends Channel, AsUser, TokenOverridable {
  /** @description The `scheduled_message_id` returned from call to {@link https://api.slack.com/methods/chat.scheduleMessage `chat.scheduleMessage`}. */
  scheduled_message_id: string;
}

// https://api.slack.com/methods/chat.getPermalink
export interface ChatGetPermalinkArguments extends ChannelAndMessageTS, TokenOverridable {}

// https://api.slack.com/methods/chat.meMessage
export interface ChatMeMessageArguments extends ChannelAndText, TokenOverridable {}

// https://api.slack.com/methods/chat.postEphemeral
export type ChatPostEphemeralArguments = TokenOverridable & MessageContents & Parse & LinkNames & Authorship
& Partial<ThreadTS> & {
  /**
   * @description `id` of the user who will receive the ephemeral message.
   * The user should be in the channel specified by the `channel` argument.
   */
  user: string;
};

// https://api.slack.com/methods/chat.postMessage
export type ChatPostMessageArguments = TokenOverridable & MessageContents & AsUser & Parse & LinkNames & Icon
& Username & Metadata & ReplyInThread & {
  /** @description Disable Slack markup parsing by setting to `false`. Enabled by default. */
  mrkdwn?: boolean;
  /** @description Pass `true` to enable unfurling of primarily text-based content. */
  unfurl_links?: boolean;
  /** @description Pass `false` to disable unfurling of media content. */
  unfurl_media?: boolean;
};

// TODO: breaking change: could use unions of types to better model either/or arguments (e.g. either channel and text
// is required OR channel and blocks OR channel and attachments)
// for an in-code example for chat.postMessage: https://github.com/slackapi/node-slack-sdk/pull/1670/files#r1346453396
// Many of these arguments can be shared with ChatPostEphemeralArguments
// https://api.slack.com/methods/chat.scheduleMessage
export interface ChatScheduleMessageArguments extends TokenOverridable, OptionalTeamAssignable {
  channel: string;
  text?: string;
  post_at: string | number;
  as_user?: boolean;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  metadata?: MessageMetadata;
  link_names?: boolean;
  parse?: 'full' | 'none';
  reply_broadcast?: boolean; // if specified, thread_ts must be set
  thread_ts?: string;
  unfurl_links?: boolean;
  unfurl_media?: boolean;
}
// https://api.slack.com/methods/chat.scheduledMessages.list
export interface ChatScheduledMessagesListArguments extends TokenOverridable,
  CursorPaginationEnabled, OptionalTeamAssignable {
  channel?: string;
  latest?: number;
  oldest?: number;
}

interface SourceAndUnfurlID {
  /**
   * @description The source of the link to unfurl. The source may either be `composer`, when the link is inside the
   * message composer, or `conversations_history`, when the link has been posted to a conversation.
   */
  source: 'composer' | 'conversations_history';
  /**
   * @description The ID of the link to unfurl. Both `unfurl_id` and `source` must be provided together, or `channel`
   * and `ts` must be provided together.
   */
  unfurl_id: string;
}
// https://api.slack.com/methods/chat.unfurl
export type ChatUnfurlArguments = (ChannelAndTS | SourceAndUnfurlID) & TokenOverridable
& {
  /**
   * @description URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl
   * blocks or message attachments.
   */
  unfurls: LinkUnfurls;
  /**
   * @description Provide a simply-formatted string to send as an ephemeral message to the user as invitation to
   * authenticate further and enable full unfurling behavior. Provides two buttons, Not now or Never ask me again.
   */
  user_auth_message?: string;
  /**
   * @description Set to `true` to indicate the user must install your Slack app to trigger unfurls for this domain.
   * Defaults to `false`.
   */
  user_auth_required?: boolean;
  /**
   * @description Send users to this custom URL where they will complete authentication in your app to fully trigger
   * unfurling. Value should be properly URL-encoded.
   */
  user_auth_url?: string;
  /**
   * @description Provide a JSON based array of structured blocks presented as URL-encoded string to send as an
   * ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior.
   */
  user_auth_blocks?: (KnownBlock | Block)[];
};
// TODO: breaking change: could use unions of types to better model either/or arguments (e.g. either channel and text
// is required OR channel and blocks OR channel and attachments)
// for an in-code example for chat.postMessage: https://github.com/slackapi/node-slack-sdk/pull/1670/files#r1346453396
// Many of these arguments can be shared with ChatPostEphemeralArguments
// https://api.slack.com/methods/chat.update
export interface ChatUpdateArguments extends TokenOverridable {
  channel: string;
  ts: string;
  as_user?: boolean;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  link_names?: boolean;
  metadata?: MessageMetadata;
  parse?: 'full' | 'none';
  file_ids?: string[];
  reply_broadcast?: boolean;
  text?: string;
}