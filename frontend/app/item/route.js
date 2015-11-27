import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title: 'foo',
        body: 'bar',
        image: 'https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12273601_10207990293546059_9151703523103933532_o.jpg'
      }
    ];
  }
});
