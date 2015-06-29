/**
 * wareplication Plugin's frontend component
 *
 *
 */

Hoodie.extend(function(hoodie) {
  hoodie.waReplication = {
    apply: hoodie.task('wareplication').add,
    on: hoodie.task('wareplication').on
  };
});
