import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MockFacebookApi from '../mock/facebook-api';

import FacebookLogout from '../../../src/js/components/FacebookLogout';

describe('logout component', () => {
    let facebookLogoutComponent;

    beforeEach(() => {
        facebookLogoutComponent = TestUtils.renderIntoDocument(
            <FacebookLogout />
        );

        MockFacebookApi.setup();
    })

    afterEach(() => {
        MockFacebookApi.teardown();
    })

    it('should call FB logout on click', () => {
        const button = facebookLogoutComponent.refs.logoutButton;
        TestUtils.Simulate.click(button)

        assert.ok(global.window.FB.logout.called);
    })
})