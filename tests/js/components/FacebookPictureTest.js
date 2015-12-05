import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Constants from '../../../src/js/constants/constants';
import FacebookPicture from '../../../src/js/components/FacebookPicture';

describe('show picture component', () => {
    it('should show receiving message status', () => {
        const action = Constants.FACEBOOK_GETTING_PICTURE;

        const facebookPictureComponent = TestUtils.renderIntoDocument(
            <FacebookPicture facebookPictureStatus={action} />
        );

        const h3 = TestUtils.findRenderedDOMComponentWithTag(facebookPictureComponent, 'h3');

        assert.equal(h3.textContent, 'Downloading picture...')
    })

    it('should show received message status', () => {
        const action = Constants.FACEBOOK_RECEIVED_PICTURE;

        const facebookPictureComponent = TestUtils.renderIntoDocument(
            <FacebookPicture facebookPictureStatus={action} />
        );

        const h3 = TestUtils.findRenderedDOMComponentWithTag(facebookPictureComponent, 'h3');

        assert.equal(h3.textContent, 'Received picture!')
    })

    it('should show picture', () => {
        const url = 'www.example.com/example.png';

        const facebookPictureComponent = TestUtils.renderIntoDocument(
            <FacebookPicture facebookPictureUrl={url} />
        );

        const img = TestUtils.findRenderedDOMComponentWithTag(facebookPictureComponent, 'img');

        assert.equal(img.src, url)
    })
})