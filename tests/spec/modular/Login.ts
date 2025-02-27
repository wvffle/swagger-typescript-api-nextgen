/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */

import type { Error, PushToken } from "./data-contracts";
import type { RequestParams } from "./http-client";
import { HttpClient } from "./http-client";

export class Login<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description push sign-in request See: https://github.com/skion/authentiq/wiki/JWT-Examples
   *
   * @tags login, post
   * @name PushLoginRequest
   * @request POST:/login
   */
  pushLoginRequest = (query: { callback: string }, body: PushToken, params: RequestParams = {}) =>
    this.request<{ status?: string }, Error>({
      path: `/login`,
      method: "POST",
      query: query,
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Get a current key register
   *
   * @tags key, get
   * @name KeyRegister
   * @request GET:/login
   */
  keyRegister = (params: RequestParams = {}) =>
    this.request<{ secret?: string; status?: string }, Error>({
      path: `/login`,
      method: "GET",
      format: "json",
      ...params,
    });
}
