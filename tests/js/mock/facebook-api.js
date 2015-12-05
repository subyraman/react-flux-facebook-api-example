import sinon from 'sinon';

const facebookApi = {
    setup() {
        global.window.FB = {
            login: sinon.stub(),
            logout: sinon.stub(),
            getLoginStatus: sinon.stub(),
            api: sinon.stub()
        }

        return global.window.FB;
    },

    teardown() {
        delete global.window.FB;
    }
}

module.exports = facebookApi;