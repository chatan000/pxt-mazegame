sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        mySprite.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    }
    info.startCountdown(10)
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 
9 9 7 9 9 9 9 7 9 9 
9 7 7 7 9 9 7 7 7 9 
9 9 e 9 9 9 9 e 9 9 
9 9 e 9 9 9 9 e 9 9 
9 9 9 9 8 8 8 9 9 9 
9 9 9 8 8 8 9 9 9 9 
9 9 8 9 9 9 9 9 9 9 
`)
// when turned on, the player cannot go through the
// wall
scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 9 8 8 8 8 9 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 9 8 8 
8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 9 8 8 9 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// controls the sprite
controller.moveSprite(mySprite)
// camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 1; index++) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . c c . . . 
. . c c . c c c c 7 c 2 7 c . . 
. f f 5 c 6 c 5 f f 7 7 2 c . . 
. f f 5 c 6 c 5 f f 7 7 7 7 c . 
. b 5 5 5 c 5 5 5 c 7 7 7 7 7 c 
. b 5 5 5 c 5 5 5 c 2 7 7 7 7 c 
. b b 5 5 3 5 5 c 7 2 7 7 7 c c 
. b b 5 5 3 5 5 c 7 7 7 2 2 c c 
. c c 5 5 5 5 5 b c c 7 7 7 7 c 
c 5 5 4 5 5 5 4 b 5 5 c 7 7 7 c 
b 5 4 b 4 4 4 4 b b 5 c 7 7 c . 
c 4 5 5 b 4 b 5 5 5 4 c b b . . 
c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. c c c c c c c c c . . c c c . 
`, SpriteKind.Food)
    mySprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
}
info.startCountdown(10)
