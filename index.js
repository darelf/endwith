module.exports = function(s,ending) {
  if (!s || !ending) return s
  if (s.indexOf(ending, s.length - ending.length) > -1) return s
  return s + ending
}
