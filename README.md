# hoodie-plugin-wareplication


[![Build Status](https://travis-ci.org/devitito/hoodie-plugin-wareplication.svg)](https://travis-ci.org/devitito/hoodie-plugin-wareplication)
[![Dependency Status](https://david-dm.org/devitito/hoodie-plugin-wareplication.svg)](https://david-dm.org/devitito/hoodie-plugin-wareplication)
[![devDependency Status](https://david-dm.org/devitito/hoodie-plugin-wareplication/dev-status.svg)](https://david-dm.org/devitito/hoodie-plugin-wareplication#info=devDependencies)

[![NPM](https://nodei.co/npm/hoodie-plugin-wareplication.png)](https://nodei.co/npm/hoodie-plugin-wareplication.png)

This plugin centralize per user Db into a central DB (default name: target).
Each entry in _users is scanned and a replication document is created in _replicator if needed. 

## Usage

In frontend application:

```
hoodie.wareplication.apply({
    target: "mycentraldb"
});
```

License: ISC