import Game from '../../src/js/game/game'

describe('Core', function() {
  it('jquery is there', () => {
    expect(jQuery).is.not.equal(undefined)
  })

  it('has a game', () => {
    expect(Game).is.not.equal(undefined)
    const game = new Game()
    expect(game.start).is.not.equal(undefined)
  })
})