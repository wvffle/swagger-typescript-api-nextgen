/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */

import type { AuthentiqID } from "./data-contracts";

export namespace Key {
  /**
   * @description Revoke an Authentiq ID using email & phone. If called with `email` and `phone` only, a verification code will be sent by email. Do a second call adding `code` to complete the revocation.
   * @tags key, delete
   * @name KeyRevokeNosecret
   * @request DELETE:/key
   */
  export namespace KeyRevokeNosecret {
    export type RequestParams = {};
    export type RequestQuery = { email: string; phone: string; code?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { status?: string };
  }

  /**
   * @description Register a new ID `JWT(sub, devtoken)` v5: `JWT(sub, pk, devtoken, ...)` See: https://github.com/skion/authentiq/wiki/JWT-Examples
   * @tags key, post
   * @name KeyRegister
   * @request POST:/key
   */
  export namespace KeyRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthentiqID;
    export type RequestHeaders = {};
    export type ResponseBody = { secret?: string; status?: string };
  }

  /**
   * @description Revoke an Identity (Key) with a revocation secret
   * @tags key, delete
   * @name KeyRevoke
   * @request DELETE:/key/{PK}
   */
  export namespace KeyRevoke {
    export type RequestParams = { pk: string };
    export type RequestQuery = { secret: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { status?: string };
  }

  /**
   * @description Get public details of an Authentiq ID.
   * @tags key, get
   * @name GetKey
   * @request GET:/key/{PK}
   */
  export namespace GetKey {
    export type RequestParams = { pk: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { since?: string; status?: string; sub?: string };
  }

  /**
   * @description HEAD info on Authentiq ID
   * @tags key, head
   * @name HeadKey
   * @request HEAD:/key/{PK}
   */
  export namespace HeadKey {
    export type RequestParams = { pk: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description update properties of an Authentiq ID. (not operational in v4; use PUT for now) v5: POST issuer-signed email & phone scopes in a self-signed JWT See: https://github.com/skion/authentiq/wiki/JWT-Examples
   * @tags key, post
   * @name KeyUpdate
   * @request POST:/key/{PK}
   */
  export namespace KeyUpdate {
    export type RequestParams = { pk: string };
    export type RequestQuery = {};
    export type RequestBody = AuthentiqID;
    export type RequestHeaders = {};
    export type ResponseBody = { status?: string };
  }

  /**
   * @description Update Authentiq ID by replacing the object. v4: `JWT(sub,email,phone)` to bind email/phone hash; v5: POST issuer-signed email & phone scopes and PUT to update registration `JWT(sub, pk, devtoken, ...)` See: https://github.com/skion/authentiq/wiki/JWT-Examples
   * @tags key, put
   * @name KeyBind
   * @request PUT:/key/{PK}
   */
  export namespace KeyBind {
    export type RequestParams = { pk: string };
    export type RequestQuery = {};
    export type RequestBody = AuthentiqID;
    export type RequestHeaders = {};
    export type ResponseBody = { status?: string };
  }
}
