    let dbHandler = {
        save: function(scheme,payload) {
            return new Promise((resolve, reject) => {
                let newScheme = new scheme(payload);
                newScheme.save(function(err) {
                    if (err) {
                        reject()
                    }
                    resolve();
                })
            })
        },
        update: function(scheme,payload, uniqueQuery) {
            return new Promise((resolve, reject) => {
                scheme.update(
                    uniqueQuery, payload,
                    { upsert: true, overwrite: true },
                      function(err, data) {
                        if (err) {
                            reject(err)
                        }
                        resolve(data);
                    })
            })
        },
        find : function(scheme, query = null) {
            return new Promise((resolve, reject) => {
                scheme.find({query}).exec(function(err, projects){
                    if (err) {
                        reject(err)
                    }
                    resolve(projects)
                })
            })
        },
        findByIdAndRemove : function(scheme, query) {
                return new Promise((resolve, reject) => {
                    scheme.findByIdAndRemove(query).exec(function(err, projects){
                        if (err) {
                            reject(err)
                        }
                        resolve(projects)
                    })
                })
        },
        remove : function(scheme, query) {
            return new Promise((resolve, reject) => {
                scheme.remove(query).exec(function(err, data){
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            })
        },
    };
module.exports = dbHandler;
