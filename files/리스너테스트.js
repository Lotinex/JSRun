x = { aInternal: 10, aListener: function(val) {}, set a(val) { this.aInternal = val; this.aListener(val); }, get a() { return this.aInternal; }, registerListener: function(listener) { this.aListener = listener; } }
x.registerListener(function(val) { alert("Someone changed the value of x.a to " + val); });
console.log(1)
x.a = prompt()