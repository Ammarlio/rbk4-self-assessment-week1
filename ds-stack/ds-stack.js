var Stack = function() {
    this._storage =[];
    this.add = function(value){
      // write me
      this._storage.push(value)

    };
    this.remove = function() {
      // write me
     
     this._storage.splice(-1)
    };
  };