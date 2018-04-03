export default function	uuid() {
    /*jshint bitwise:false */
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }

    return uuid;
}

export  function zAjax(url, method, data, callback) {
    var xhr = new XMLHttpRequest(),
        method = method||"POST",
        url = url,
        data = data;

    var ret = null;

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
            ret = xhr.responseText;
            callback && callback(ret);
        }
    };
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(
        JSON.stringify(data)
    );

}