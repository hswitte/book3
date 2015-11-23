function analyze(){

  //
  // Getting To Know the Data
  //

  heading('Examples')

  ask('how many measurements were included in this dataset?', example1)

  ask('how many samples does each measurement contain?', example2)

  ask('at the 10-th measurement, what are valid sample values (> 0)?', example3)
  // a sample value is valid if it is greater than zero

  heading('Measurements and Samples')

  ask('how many unique non-zero, non-negative sample values in this dataset? what are they?', func1)

  ask('what is the average time (seconds) between two measurements?', func2)

  ask('at 09:57:18, how many samples in this measurement have the value 7?', func3)

  ask('which measurement has the most number of samples with the value 3?', func4)

  ask('how many measurements have no sample value greater than zero?', func5)

  ask('which valid (i.e., greater than zero) sample value is the most common?', func6)

  heading('Mapping')

  ask('when was the boat furthest away from NYC (40.7127 N, 74.0059 W)? what was the distance?', func7)
  // use Leaflet to draw a line between NYC and this "furtherest away" location

  ask('what was the path of the boat?', func8)
  // use Leaflet to draw a line between every two locations

  ask('where were the most common sample value measured?', func9)
  // say, your answer to Question Six is 13, draw a marker for each measurement that has
  // at least one sample whose value is 13

  ask('how does the desensity of valid sample values change across the geographical area?', func10)
  // use the brightness to indicate high number of valid sample values each
  // for each measurement, draw a marker,
  // use the brightness to represent the number of valid samples
  // the brighter a spot, the higher the number
  // for those measurements without a valid sample, draw nothing

  heading('Science')

  ask('what is the distribution of fish?', func11)

  ask('what is the distribution of  are schools of zooplankton?', func12)


  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  })
  toggleSourecode()
}

function example1(){
  return items.length
}

function example2(){
  return items[0].Samples.length
}

function example3(){
  return _.filter(items[9].Samples, function(d){
    return d > 0
  }).join(', ')
}

function func1(){
  //console.log(items)
  var data = _.uniq(_.flatten(_.pluck(items, "Samples")))
  _.remove(data, function(n){
    return n <= 0
  })
  console.log(data)
  return 'There are ' + data.length + 'values. These values are: ' +  data
}

function func2(){
  var times = _.pluck(items, 'Ping_time')

  _.each(times, function(n){
    return Date.parse(n)
  })

  return 5
  //console.log(times)
  //console.log((Date.parse(times[0])-Date.parse(times[1]))/1000)

}

function func3(){
  var filter = _.filter(items, function(n){
    return n.Ping_time == "09:57:18"
  })
  var samp = filter[0].Samples
  //console.log(samp)
  _.remove(samp, function(n){
    return n != "7.000000"
  })
  
  return samp.length + ' samples have a values of 7'
}

function func4(){
  var filt = _.filter(items, function(n){
    return _.contains(n.Samples, "3.000000")
  })
  
  filt = _.groupBy(filt, function(n){
    return n.Ping_time
  })
  //console.log(filt)
  filt = _.mapValues(filt, function(n){
    return _.remove(n[0].Samples, function(d){
      return d == "3.000000"
    })
  })
  console.log(filt)
  filt = _.pairs(filt)
  return _.last(_.sortBy(filt, filt[1].length))[0]
}

function func5(){
  var filt = _.filter(items, function(n){
    return _.every(n.Samples, function(d){
      return d <=0
    })
  })
  //console.log(filt)
  return filt.length
}

function func6(){
  var data = _.flatten(_.pluck(items, "Samples"))
  _.remove(data, function(n){
    return n <= 0
  })
  var measures = { }
  for (var i = 0, j = data.length; i < j; i++) {
    measures[data[i]] = (measures[data[i]] || 0) + 1
  }
  //console.log(measures)
  var sorted = (_.sortBy(_.pairs(measures), function(n){
    return n[1]
  })).reverse()

  return _.first(sorted)[0]
}

function func7(){

  // this sample code shows how to display a map and put a marker to visualize
  // the location of the first item (i.e., measurement data)
  // you need to adapt this code to answer the question

  var first = items[0]
  var pos = [first.Latitude, first.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  var circle = L.circle(pos, 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);
  return '...'
}

function func8(){
  var first = items[0]
  var pos = [first.Latitude, first.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  _.each(items, function(n){
    L.circle([n.Latitude, n.Longitude], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);
  })
  return '...'
}

function func9(){
  var data = _.flatten(_.pluck(items, "Samples"))
  var measures = { }
  for (var i = 0, j = data.length; i < j; i++) {
    measures[data[i]] = (measures[data[i]] || 0) + 1
  }
  //console.log(measures)
  var sorted = (_.sortBy(_.pairs(measures), function(n){
    return n[1]
  })).reverse()

  return  _.map(_.slice(sorted, 0, 5), function(n){
      return n[0]}) 

}

function func10(){

  var filt = _.groupBy(items, function(n){
    return n.Latitude + ',' + n.Longitude
  })
  filt = _.mapValues(filt, function(n){
    return _.remove(n[0].Samples, function(d){
      return d > 0
    })
  })
  //console.log(filt)
  filt = _.pairs(filt)
  filt =  _.slice(_.sortBy(filt, filt[1].length).reverse(), 0,20)
  console.log(filt)

  //var keys = _.keys(filt)
  //console.log(keys)
  filt = _.object(filt)
  filt = _.keys(filt)
  //console.log(filt)

  var first = items[0]
  var pos = [first.Latitude, first.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  _.each(filt, function(n){
    L.circle([n.split(',')[0], n.split(',')[1]], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);
  })
  return 'Plotted are the ' + filt.length + ' locations with the greatest density of valid measurements'
}

function func11(){
  var first = items[0]
  var pos = [first.Latitude, first.Longitude]
  var el = $(this).find('.viz')[0]    // lookup the element that will hold the map
  $(el).height(500) // set the map to the desired height
  var map = createMap(el, pos, 5)

  var data = _.filter(items, function(n){
    return _.contains(n.Samples, "29.000000") || _.contains(n.Samples, "20.000000")
  })
  console.log(data)
  _.each(data, function(n){
    L.circle([n.Latitude, n.Longitude], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(map);
  })
  return 'There are ' + data.length + ' measurements indicating the presence of fish'
}

function func12(){
  var data = _.filter(items, function(n){
    return _.contains(n.Samples, "120.000000") || _.contains(n.Samples, "200.000000")
  })
  return 'There are ' + data.length + ' measurements indicating the presence of zooplankton'
}

