Foo = new Meteor.Collection('foo');

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Foo.find().fetch().length === 0) {
      _.each(
        ['one', 'two', 'three', 'four', 'five', 'six'],
        function (n) {
          Foo.insert({name: n});
        }
      );
    }
  });
}

if (Meteor.isClient) {
  Template.hello.connected = function () {
    return Meteor.status().connected;
  };

  Foo.find().observe({
    'added': function (doc) {
      console.log('added', doc.name);
    },
    'removed': function (doc) {
      console.log('removed?!!', doc.name);
    }
  });
}
