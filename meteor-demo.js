Officers = new Meteor.Collection('office');

if (Meteor.isClient) {
    Template.officers
.helpers({
        officers: function() {
            return Officers.find({});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        Officers.remove({});
        Officers.insert({
            name: 'Mohammad',
            position: 'President'
        });
        Officers.insert({
            name: 'Eddo',
            position: 'Vice President'
        });
        Officers.insert({
            name: 'Anthony',
            position: 'Treasurer'
        });
        Officers.insert({
            name: 'Theresa',
            position: 'Secretary'
        });
        Officers.insert({
            name: 'Matt',
            position: 'Web Master'
        });
        Officers.insert({
            name: 'Al',
            position: 'Public Relations'
        });
    });
}
