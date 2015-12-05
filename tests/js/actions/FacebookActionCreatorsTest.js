import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import MockFacebookApi from '../mock/facebook-api';
import reload from '../utils/reload'

import Constants from '../../../src/js/constants/constants';

describe('facebook action creators', () => {
    let FacebookDispatcher;
    let FacebookActionCreators;

    beforeEach(() => { 
        FacebookDispatcher = reload('../../../src/js/dispatcher/FacebookDispatcher')
        sinon.stub(FacebookDispatcher, 'dispatch')
        FacebookActionCreators = reload('../../../src/js/actions/FacebookActionCreators')

        MockFacebookApi.setup();
    })

    afterEach(() => {
        MockFacebookApi.teardown();
    })

    it('should call FB login status', () => {
        global.window.FB.getLoginStatus.callsArgWith(0, 'foo')
        FacebookActionCreators.getLoginStatus()

        assert.ok(global.window.FB.getLoginStatus.calledOnce)
    })

    it('should send a dispatch message after login status', () => {
        global.window.FB.getLoginStatus.callsArgWith(0, 'foo')
        FacebookActionCreators.getLoginStatus()

        assert.ok(FacebookDispatcher.dispatch.calledOnce)

        const [{actionType, data}] = FacebookDispatcher.dispatch.getCall(0).args
        assert.equal(Constants.FACEBOOK_INITIALIZED, actionType)
        assert.equal(data, 'foo')
    })

    it('should send a dispatch message after FB login connected', () => {
        const fbData = {'status': 'connected'}

        global.window.FB.login.callsArgWith(0, fbData)

        FacebookActionCreators.login()
        assert.ok(FacebookDispatcher.dispatch.calledOnce)

        const [{actionType, data}] = FacebookDispatcher.dispatch.getCall(0).args

        assert.equal(Constants.FACEBOOK_LOGGED_IN, actionType)
        assert.equal(data, fbData)
    })

    it('should send a dispatch message after FB logged out', () => {
        global.window.FB.logout.callsArgWith(0, 'foo')

        FacebookActionCreators.logout()
        assert.ok(FacebookDispatcher.dispatch.calledOnce)

        const [{actionType, data}] = FacebookDispatcher.dispatch.getCall(0).args

        assert.equal(Constants.FACEBOOK_LOGGED_OUT, actionType)
        assert.equal(data, 'foo')
    })



})