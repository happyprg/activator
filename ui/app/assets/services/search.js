/*
 Copyright (C) 2013 Typesafe, Inc <http://typesafe.com>
 */
define([
  'services/sbt',
  'services/ajax'
], function(
  sbt,
  fs
) {

  // options is the observable where we put the results
  var combinedSearch = function(keywords, options) {
    debug && console.log("starting search on " + keywords);
    return $.when(fs.search(keywords), sbt.tasks.deferredPossibleAutoCompletions(keywords))
      .then(function(searchValues, sbtCompletions) {
        sbtCompletions.sort(function(a,b) { return a.title.length > b.title.length });
        options( searchValues.concat(sbtCompletions) );
    });
  }

  return {
    combinedSearch: combinedSearch
  }
});
