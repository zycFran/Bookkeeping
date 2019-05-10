import React, {Component} from 'react';
export class FetchUtils extends React.Component {
    static send(method, url, data, callback) {
        let request;
        if (method === 'get') {
            request = new Request(url, {
                method: 'GET',
                headers: ({
                    'Content-Type': 'application/json'
                })
            });
        } else if (method === 'post') {
            request = new Request(url, {
                method: 'POST',
                headers: ({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data)
            });
        }
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);//1
            });
    }

    static getAction(url, data){
        let request = new Request(url, {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json'
            })
        });
        return fetch(request).then((response) => response.json())
    }

    static postAction(url, data){
        let request = new Request(url, {
            method: 'POST',
            headers: ({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        });
        return fetch(request).then((response) => response.json())
    }
}
//  default FetchUtils;