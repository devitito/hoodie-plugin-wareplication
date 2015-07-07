# hoodie-plugin-wareplication

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