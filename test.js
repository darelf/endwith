var test = require('tape')
var endwith = require('./')

test('test endings', function(t) {
  t.plan(2)
  var s1 = 'This needs a period'
  var s2 = 'This has a period.'
  t.equals(s1 + '.', endwith(s1,'.'), 'add a period')
  t.equals(s2, endwith(s2,'.'), "don't go crazy")
})
