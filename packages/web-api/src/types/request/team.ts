import { OptionalTeamAssignable, TokenOverridable, CursorPaginationEnabled, TraditionalPagingEnabled } from './common';

// https://api.slack.com/methods/team.accessLogs
export interface TeamAccessLogsArguments extends TokenOverridable, CursorPaginationEnabled,
  TraditionalPagingEnabled, OptionalTeamAssignable {
  /**
   * @description End of time range of logs to include in results (inclusive) as a UNIX timestamp in seconds.
   * Default to now.
   */
  before?: number;
}
// https://api.slack.com/methods/team.billableInfo
export interface TeamBillableInfoArguments extends TokenOverridable, CursorPaginationEnabled, OptionalTeamAssignable {
  /** @description A user to retrieve the billable information for. Defaults to all users. */
  user?: string;
}
// https://api.slack.com/methods/team.billing.info
export interface TeamBillingInfoArguments extends TokenOverridable {}
// https://api.slack.com/methods/team.info
export interface TeamInfoArguments extends TokenOverridable {
  /**
   * @description Query by domain instead of team (only when `team` is null). This only works for domains in the same
   * enterprise as the querying team token.
   * This also expects the domain to belong to a team and not the enterprise itself.
   */
  domain?: string; // available only for Enterprise Grid
  /** @description Team to get info about; if omitted, will return information about the current team. */
  team?: string;
}
// https://api.slack.com/methods/team.integrationLogs
export interface TeamIntegrationLogsArguments extends TokenOverridable,
  OptionalTeamAssignable, TraditionalPagingEnabled {
  /** @description Filter logs to this Slack app. Defaults to all logs. */
  app_id?: string;
  /** @description Filter logs with this change type. Defaults to all logs. */
  change_type?: 'added' | 'removed' | 'enabled' | 'disabled' | 'updated';
  /** @description Filter logs to this service. Defaults to all logs. */
  service_id?: string;
  /** @description Filter logs generated by this user’s actions. Defaults to all logs. */
  user?: string;
}
// https://api.slack.com/methods/team.profile.get
export interface TeamProfileGetArguments extends TokenOverridable {
  /** @description Filter by visibility. */
  visibility?: 'all' | 'visible' | 'hidden';
}
// https://api.slack.com/methods/team.preferences.list
export interface TeamPreferencesListArguments extends TokenOverridable { }