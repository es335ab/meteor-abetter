var Abe = new Meteor.Collection('abes');

if (Meteor.isClient) {
  Template.hello.headline = function () {
    return "あべったー";
  };

  Template.hello.greeting = function () {
    return "あべちゃん";
  };

  Template.hello.events({
    'click input' : function () {
      var getName = prompt('今のキモチをひとこと(・ω<)', '')
      if(getName !== null) {
        Abe.insert({
          name: getName,
          created_at: (new Date()).getTime()
        });
      }
    },
    'click .x' : function () {
      console.log(this._id);
      Abe.remove(this._id);
  }
  });

  Template.hello.abes = function() {
    return Abe.find({}, {sort: {created_at: -1}});
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
