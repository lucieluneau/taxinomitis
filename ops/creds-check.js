const store = require('../dist/lib/db/store');
const creds = require('../dist/lib/training/credentials');

store.init()
    .then(() => {
        return creds.checkBluemixCredentials();
    });

/*

Unmanaged Bluemix classifier detected (expected=conv)

INSERT INTO knownsyserrors
    (id, type, servicetype, objid)
    VALUES('001', 1, 'conv', classifier.id);



Failed to verify credentials (conversation)

INSERT INTO knownsyserrors
    (id, type, servicetype, objid)
    VALUES('012', 2, 'conv', credentials.id);

 */