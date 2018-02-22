module.exports =
class PseudoEditor

  constructor: (@buffer) ->
    @selection = new Range(new Point(0,0), new Point(0,0))

  getBuffer: ->
    return @buffer

  insertText: (text) ->  
    @setTextInBufferRange(@selection, text)

  setTextInBufferRange: (range, text, options) ->
    @selection = @getBuffer().setTextInRange(range, text, options)
    return @selection
