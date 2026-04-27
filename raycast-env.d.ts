/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `add-task` command */
  export type AddTask = ExtensionPreferences & {}
  /** Preferences accessible in the `list-tasks` command */
  export type ListTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `complete-task` command */
  export type CompleteTask = ExtensionPreferences & {}
  /** Preferences accessible in the `flag-task` command */
  export type FlagTask = ExtensionPreferences & {}
  /** Preferences accessible in the `delete-task` command */
  export type DeleteTask = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `add-task` command */
  export type AddTask = {}
  /** Arguments passed to the `list-tasks` command */
  export type ListTasks = {}
  /** Arguments passed to the `complete-task` command */
  export type CompleteTask = {}
  /** Arguments passed to the `flag-task` command */
  export type FlagTask = {}
  /** Arguments passed to the `delete-task` command */
  export type DeleteTask = {}
}

