import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MockFacebookApi from '../mock/facebook-api';

import FacebookLogin from '../../../src/js/components/FacebookLogin';

describe('login component', () => {
    let facebookLoginComponent;

    beforeEach(() => {
        facebookLoginComponent = TestUtils.renderIntoDocument(
            <FacebookLogin />
        );
        MockFacebookApi.setup()
    })

    afterEach(() => {
        MockFacebookApi.teardown();
    })


    it('should call FB login on click',function() {
        const button = facebookLoginComponent.refs.loginButton;
        TestUtils.Simulate.click(button)

        assert.ok(global.window.FB.login.called)
    })
})