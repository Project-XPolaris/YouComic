import { remote } from '@/utils/electron';
import path from 'path';
import childProcess from 'child_process';
import Axios from 'axios';
import nodeFSD from 'fs-extra';
import unzipper from 'unzipper';
import os from 'os';
import http from 'http';
import open from 'open';

export const nodeHttp: typeof http = remote.require('http');
export const nodeFS: typeof nodeFSD = remote.require('fs-extra');
export const nodeChildProcess: typeof childProcess = remote.require('child_process');
export const nodePath: typeof path = remote.require('path');
export const app  = remote.app;
export const nodeAxios: typeof Axios = remote.require('axios');
export const nodeUnzipper: typeof unzipper = remote.require('unzipper');
export const nodeOS: typeof os = remote.require('os');
export const nodeOpen: typeof open = remote.require('open');
const appRoot = app.getPath("userData")
console.log(appRoot)
export const AppPath = {
  AppPath: appRoot,
  DataPath: nodePath.join(appRoot),
  InstallPath: nodePath.join(appRoot, 'app'),
  DownloadPath: nodePath.join(appRoot, 'download'),
  Version:"http://github.com/Project-XPolaris/YouComic/releases/download/v1.0/version.json",
  InstallConfigName:"apps.json"
};


export enum YouComicProduct {
  Service = 'service', Explore = 'explore', Supervisor = 'supervisor', Studio = 'studio'
}
