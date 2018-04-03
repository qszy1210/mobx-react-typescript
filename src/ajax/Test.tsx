import * as React from 'react';

export interface TestProps {
}

function zAjax(url, method, data, callback) {
    var xhr = new XMLHttpRequest(),
        method = method||"POST",
        url = url,
        data = data;

    var ret = null;

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //console.log(xhr.responseText);
            ret = xhr.responseText;
            callback && callback(ret);
        }
    };
    // xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(
        // JSON.stringify(data)
    );

}

export default class Test extends React.Component<TestProps, any> {
    rej;
    promise;
    componentDidMount() {
        this.request().then().catch(error=>{
            console.log(error);
            console.log('e1');
        });
        this.request().then().catch(error=>{
            console.log(error);
            console.log('e2');
        });

    }

    private request() {
        var that = this;
        this.promise = new Promise(function (res, rej) {
            that.rej = rej;
            // res('test1');
        });
        this.promise.then();

        new Promise((res, rej) => {
            res('');
        }).then(function () {
            zAjax("/aa", "GET", "", function (data) {
            });
            // throw new Error('111');
        }).then(function () {
            that.rej("2222");
        }).catch(error => {
            that.rej('in catch');
        });
        return this.promise;
    }

    render() {
        return (
            <div>
                juest test
            </div>
        );
    }
}


