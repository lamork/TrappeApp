import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    searchtype: {
      refreshModel: true
    }
  },
  model: function(params) {
    var startAndEndDate = getStartAndEndDate(params.searchtype);
    if(startAndEndDate.startDate === null || startAndEndDate.endDate === null)
    {
      return this.store.findAll('walkedstaircase');
    }
    console.log(startAndEndDate.startDate.toISOString());
    console.log(startAndEndDate.endDate.toISOString());

    return this.store.query('walkedstaircase', {
      orderBy: 'dateWalked',
      startAt:  startAndEndDate.startDate.toISOString(),
      endAt:  startAndEndDate.endDate.toISOString()
    });

  }});

  function getStartAndEndDate(searchtype)
  {
    var date = new Date();
    var firstDay =null;
    var lastDay = null;

    if (searchtype === 'currentMonth')
    {
      firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    if (searchtype === 'currentWeek')
    {
      var first = date.getDate() - date.getDay() + 1; // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6

      var firstDay = new Date(date.setDate(first));
      firstDay.setHours(0);
      firstDay.setMinutes(0);
      firstDay.setSeconds(0);
      firstDay.setMilliseconds(0);

      var lastDay = new Date(date.setDate(last));
      lastDay.setHours(0);
      lastDay.setMinutes(0);
      lastDay.setSeconds(0);
      lastDay.setMilliseconds(0);
    }

    if (searchtype === "currentYear")
    {
      var firstDay = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
      var lastDay = new Date(new Date().getFullYear(), 11, 31, 0, 0, 0, 0);
    }
    return {startDate:firstDay,endDate:lastDay};
  }
