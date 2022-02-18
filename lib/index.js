const fetch = require("node-fetch");

const API_URL = "https://nextverify.net/api/v1";

class nextverify {
    /**
     * @description Creates a new nextverify Api class with the specified Api key
     * @param {String} api
     */
    constructor(api) {
        this.api = api || "";
    }

    /**
     * @description Check if a discord/roblox user is linked to nextverify database
     * @param {String} userId
     * @returns {Promise<Boolean>}
     */
    isUserLinked(userId) {
        return new Promise((res, rej) => {
            fetch(`${API_URL}/user/${userId}`).then(response => response.json()).then((data) => {
                if (data.status == 200) {
                    res(data);
                } else {
                    rej(new Error("Internal API error"));
                }
            }).catch(rej);
        });
    };
};

module.exports = exports = nextverify;