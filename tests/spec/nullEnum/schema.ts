/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */

export enum ContentCategoryEnum {
  Music = "music",
  Podcast = "podcast",
  Other = "other",
}

export type NullEnum = null;

export interface ManageArtist {
  content_category?: ContentCategoryEnum | NullEnum | null;
}

export interface ManageAlbum {
  content_category?: "music" | "podcast" | "other" | null;
}
