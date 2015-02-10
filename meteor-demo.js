Officers = new Meteor.Collection('office');

if (Meteor.isClient) {
    Template.officers.helpers({
        officers: function() {
            return Officers.find({}, {
                sort: {
                    score: -1,
                    name: 1
                }
            });
        },

    });

    Template.officer.helpers({
        selectedClass: function() {
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedplayer');
            if (selectedPlayer === playerId) {
                return 'selected';
            }
        }
    });

    Template.officers.events({
        'click .officer-name': function(e, tmpl) {
            Session.set('selectedplayer', this._id);
        },
        'click button': function(e, tmpl) {
            var id = Session.get('selectedplayer');
            Officers.update({
                _id: id
            }, {
                $inc: {
                    score: 1
                }
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        Officers.remove({});
        Officers.insert({
            name: 'Mohammad',
            position: 'President',
            score: 0
        });
        Officers.insert({
            name: 'Eddo',
            position: 'Vice President',
            score: 0
        });
        Officers.insert({
            name: 'Anthony',
            position: 'Treasurer',
            score: 0
        });
        Officers.insert({
            name: 'Theresa',
            position: 'Secretary',
            score: 0
        });
        Officers.insert({
            name: 'Matt',
            position: 'Web Master',
            score: 0
        });
        Officers.insert({
            name: 'Al',
            position: 'Public Relations',
            score: 0
        });
    });
}
