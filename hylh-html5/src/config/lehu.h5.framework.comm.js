import $ from 'jquery';


let LHBaseComm = {

    /*
     * api的定义需要被每个子类复写
     * */
    api: {},

    sendRequest: function (type) {

        let requestData = this.buildRequestData();

        let method = this.getMethod();

        //step2 发送请求，获得返回数据
        return this.request(requestData, method)
    },

    buildRequestData: function () {
        return this.data;
    },

    getMethod: function () {
        return this.method;
    },

    request: function (data, method) {

        let def = $.Deferred();

        let that = this;

        let successCallback = function (response) {
            def.resolve(response)
        }

        let failCallback = function (error) {
            def.reject(error);
        }

        $.ajax({
            url: this.url,
            type: method || 'get',
            contentType: method == 'get' ? "text/x-json;charset=UTF-8" : "application/json;charset=UTF-8",
            data: data,
            success: function (response) {
                successCallback(response);
            },
            error: function (error) {
                failCallback(error)
            }
        })
            .done(function (response) {
                successCallback(response)
            })
            .fail(function (response) {
                failCallback(response);
            })

        return def;

    }


};

export default LHBaseComm;