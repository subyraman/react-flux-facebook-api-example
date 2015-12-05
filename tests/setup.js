import { assert } from 'chai';
import { jsdom } from 'jsdom';

global.assert = assert;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};
