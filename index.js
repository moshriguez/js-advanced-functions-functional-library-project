const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //! Collection functions

    each: function(collection, callback) {
      for (const item in collection) {
        callback(collection[item])
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = []
      let i = 0
      for (const item in collection) {
        i++
        newArray.push(callback(collection[item], i, collection))
      }
      return newArray
    },

    reduce: function(collection, callback, acc = 0) {
      for (const item in collection) {
        acc = callback(acc, collection[item], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const item in collection) {
        if (predicate(collection[item])) {
          return collection[item]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (const item in collection) {
        if (predicate(collection[item])) {
          newArray.push(collection[item])
        }
      }
        return newArray
    },

    size: function(collection) {
      let i = 0
      for (const item in collection) {
        i++
      }
      return i
    },
    
    //! Array functions

    first: function(array, n = 0) {
      const newArray = []
      if (n === 0) {
        return array[n]
      } else {
        for (let i=0; i < n; i++) {
          newArray.push(array[i])
        }
        return newArray
      }
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array.slice(-n)[0]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      const newArray = []
      for (const item of array) {
        if (!!item) {
          newArray.push(item)
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
    
      return array.sort(callback)
    },

    flatten: function() {

    },

    uniq: function() {

    },


  }
})()

fi.libraryMethod()



