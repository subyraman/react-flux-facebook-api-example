import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MockFacebookApi from '../mock/facebook-api';

import FacebookDownloadPicture from '../../../src/js/components/FacebookDownloadPicture';

describe('download picture component', () => {
    let facebookDownloadPictureComponent;

    beforeEach(() => {
        facebookDownloadPictureComponent = TestUtils.renderIntoDocument(
            <FacebookDownloadPicture />
        );
        MockFacebookApi.setup()
    })

    afterEach(() => {
        MockFacebookApi.teardown();
    })


    it('should call the FB API on click',function() {
        const button = facebookDownloadPictureComponent.refs.downloadPictureButton;
        TestUtils.Simulate.click(button)

        assert.ok(global.window.FB.api.called)
    })
})