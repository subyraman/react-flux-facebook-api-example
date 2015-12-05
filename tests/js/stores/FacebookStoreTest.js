import sinon from 'sinon';
import reload from '../utils/reload'

import Constants from '../../../src/js/constants/constants';


describe('facebook action creators', () => {
    let FacebookStore;
    let FacebookDispatcher;

    beforeEach(() => {
        FacebookDispatcher = reload('../../../src/js/dispatcher/FacebookDispatcher')
        sinon.stub(FacebookDispatcher, 'register').returns(12);
    })

    afterEach(() => {
        FacebookDispatcher.register.restore()
    })

    describe('initializing with dispatcher', () => {
        it('should register with the dispatcher', () => {
            // The dispatcher is attached in the module initialiation,
            // so we have to reinitialize the module
            FacebookStore = reload('../../../src/js/stores/FacebookStore')

            assert.equal(FacebookDispatcher.register.callCount, 1)
            assert.equal(FacebookStore.dispatchToken, 12)
        })
    })

    describe('dispatcher actions', () => {
        let FacebookStore;
        let FacebookDispatcher;
        let dispatchCallback;

        beforeEach(() => {
            FacebookDispatcher = reload('../../../src/js/dispatcher/FacebookDispatcher')
            sinon.spy(FacebookDispatcher, 'register');
            FacebookStore = reload('../../../src/js/stores/FacebookStore')
            sinon.spy(FacebookStore, 'emitChange')

            // save the dispatch callback, so action effects on the store can be tested
            dispatchCallback = FacebookDispatcher.register.getCall(0).args[0]
        })

        afterEach(() => {
            FacebookDispatcher.register.restore()
            FacebookStore.emitChange.restore()
        })

        it('should set facebook data after FB initialization', () => {
            const actionData = {
                actionType: Constants.FACEBOOK_INITIALIZED,
                data: 'foo'
            }
            dispatchCallback(actionData)

            assert.equal(FacebookStore.facebookAuthData, 'foo');
            assert.equal(FacebookStore.emitChange.callCount, 1);
        })

        it('should set facebook data after FB login', () => {
            const actionData = {
                actionType: Constants.FACEBOOK_LOGGED_IN,
                data: 'foo'
            }
            dispatchCallback(actionData)

            assert.equal(FacebookStore.facebookAuthData, 'foo');
            assert.equal(FacebookStore.emitChange.callCount, 1);
        })

        it('should set facebook data after FB logout', () => {
            const actionData = {
                actionType: Constants.FACEBOOK_LOGGED_OUT,
                data: 'foo'
            }
            dispatchCallback(actionData)

            assert.equal(FacebookStore.facebookAuthData, 'foo');
            assert.equal(FacebookStore.emitChange.callCount, 1);
        })
    })
})