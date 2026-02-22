namespace SpriteKind {
    export const Npc = SpriteKind.create()
    export const Map = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile5`) && mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`) || tiles.tileAtLocationEquals(location, assets.tile`myTile0`) && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        tiles.setTileAt(location, assets.tile`myTile`)
        info.changeScoreBy(1)
        scene.cameraShake(4, 500)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite3, location2) {
    Lvl2 += 1
    blockSettings.writeNumber("Mny", info.score())
    RestartLevel(Lvl2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite6, otherSprite2) {
    sprites.destroy(otherSprite2)
    sprite6.setScale(2, ScaleAnchor.Bottom)
    achievements.create("You are HUGE!", 1, "Yum Yum!", img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 2 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 5 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 6 3 3 3 a a 3 4 2 3 d a 4 b 
        b 3 9 6 3 b a 3 3 4 4 3 d a 4 b 
        b 3 6 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 7 9 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 9 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite4, location3) {
    game.gameOver(false)
})
info.onScore(15, function () {
    achievements.create("You gained 15 coins!", 2, "Lots of money!", img`
        ..bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff..
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc, function (sprite2, otherSprite) {
    otherSprite.sayText(text_list._pickRandom(), 2000, true)
    pause(3000)
})
info.onScore(10, function () {
    achievements.create("You gained 10 coins!", 2, "Even more money!", img`
        ..bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515b
        c53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515b
        c53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515b
        c53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff..
        `)
})
info.onScore(37, function () {
    if (!(achievements.isShowing())) {
        achievements.create("You gained 37 coins!", 2, "Did you miss one?", img`
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
            .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
            b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
            b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
            c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
            cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
            .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
            ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
            `)
    }
})
info.onScore(38, function () {
    achievements.create("You gained 38 coins!", 2, "Wow! You got them all!", img`
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        ..bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb....bbbb..
        .b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b..b5555b.
        b5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5bb5d33d5b
        b535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515bb535515b
        c53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dcc53551dc
        cdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddccdd11ddc
        .fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf..fddddf.
        ..ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff....ffff..
        `)
})
info.onScore(1, function () {
    achievements.create("You gained 1 coin!", 2, "Money!", img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `)
})
function RestartLevel (Lvl: number) {
    sprites.destroy(Npc2)
    if (Lvl == 1) {
        scene.setBackgroundColor(9)
        effects.bubbles.startScreenEffect()
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ......................................................................................................................................................e.........
            ....................................................................................................................................................eee.........
            ...................................................................................................................................................eeee.........
            ..................................................................................................................................................eeeee.........
            ................................................................................................................................................eeeeeee.........
            ...............................................................................................................................................eeeeeeee.........
            ..............................................................................................................................................eeeeeeeee.........
            .............................................................................................................................................eeeeeeeeee.........
            ...........................................................................................................................................eeeeeeeeeeee.........
            ..........................................................................................................................................eeeeeeeeeeeee.........
            ....................................................ee...................................................................................eeeeeeeeeeeeee.........
            ....................................................ee..................................................................................eeeeeeeeeeeeeee.........
            ....................................................eee................................................................................eeeeeeeeeeeeeeee.........
            ...................................................eeee...............................................................................eeeeeeeeeeeeeeeee.........
            ...................................................eeee..............................................................................eeeeeeeeeeeeeeeeee.........
            ...................................................eeeee............................................................................eeeeeeeeeeeeeeeeeeee........
            ..................................................eeeeeee..........................................................................eeeeeeeeeeeeeeeeeeeee........
            ..................................................eeeeeeee........................................................................eeeeeeeeeeeeeeeeeeeeee........
            .................................................eeeeeeeee......................................................................eeeeeeeeeeeeeeeeeeeeeeee........
            .................................................eeeeeeeeee....................................................................eeeeeeeeeeeeeeeeeeeeeeeee........
            ................................................eeeeeeeeeee...................................................................eeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee.................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ..............................................eeeeeeeeeeeeee...............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeee.............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeeee...........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeee..........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeee........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeeee.......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ............................................eeeeeeeeeeeeeeeeeeee.....................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
            ...........................................eeeeeeeeeeeeeeeeeeeeee...................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
            ..........................................eeeeeeeeeeeeeeeeeeeeeeeee...............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            .........................................eeeeeeeeeeeeeeeeeeeeeeeeee..............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeee............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            .......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            .....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
    } else if (Lvl == 2) {
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ......................................................................................................................................................e.........
            ....................................................................................................................................................eee.........
            ...................................................................................................................................................eeee.........
            ..................................................................................................................................................eeeee.........
            ................................................................................................................................................eeeeeee.........
            ...............................................................................................................................................eeeeeeee.........
            ..............................................................................................................................................eeeeeeeee.........
            .............................................................................................................................................eeeeeeeeee.........
            ...........................................................................................................................................eeeeeeeeeeee.........
            ..........................................................................................................................................eeeeeeeeeeeee.........
            ....................................................ee...................................................................................eeeeeeeeeeeeee.........
            ....................................................ee..................................................................................eeeeeeeeeeeeeee.........
            ....................................................eee................................................................................eeeeeeeeeeeeeeee.........
            ...................................................eeee...............................................................................eeeeeeeeeeeeeeeee.........
            ...................................................eeee..............................................................................eeeeeeeeeeeeeeeeee.........
            ...................................................eeeee............................................................................eeeeeeeeeeeeeeeeeeee........
            ..................................................eeeeeee..........................................................................eeeeeeeeeeeeeeeeeeeee........
            ..................................................eeeeeeee........................................................................eeeeeeeeeeeeeeeeeeeeee........
            .................................................eeeeeeeee......................................................................eeeeeeeeeeeeeeeeeeeeeeee........
            .................................................eeeeeeeeee....................................................................eeeeeeeeeeeeeeeeeeeeeeeee........
            ................................................eeeeeeeeeee...................................................................eeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee.................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ..............................................eeeeeeeeeeeeee...............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeee.............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeeee...........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeee..........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeee........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeeee.......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ............................................eeeeeeeeeeeeeeeeeeee.....................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
            ...........................................eeeeeeeeeeeeeeeeeeeeee...................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
            ..........................................eeeeeeeeeeeeeeeeeeeeeeeee...............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            .........................................eeeeeeeeeeeeeeeeeeeeeeeeee..............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeee............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            .......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            .....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        scene.setBackgroundColor(2)
        tiles.setCurrentTilemap(tilemap`level3`)
        Mmmmm = sprites.create(img`
            . . . . . . b b b b a a . . . . 
            . . . . b b d d d 3 3 3 a a . . 
            . . . b d d d 3 3 3 3 3 3 a a . 
            . . b d d 3 2 3 3 3 3 3 3 3 a . 
            . b 3 d 3 3 5 3 3 b 3 3 3 3 a b 
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
            b 3 6 3 3 3 a a 3 4 2 3 d a 4 b 
            b 3 9 6 3 b a 3 3 4 4 3 d a 4 b 
            b 3 6 3 3 3 3 3 3 3 3 d a 4 4 e 
            a 3 3 3 7 9 3 3 3 3 d a 4 4 4 e 
            a 3 3 3 9 3 3 3 d d a 4 4 4 e . 
            a a 3 3 3 d d d a a 4 4 4 e e . 
            . e a a a a a a 4 4 4 4 e e . . 
            . . e e b b 4 4 4 4 b e e . . . 
            . . . e e e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Mmmmm, assets.tile`myTile8`)
        tiles.setTileAt(Mmmmm.tilemapLocation(), sprites.skillmap.islandTile7)
        Mmmmm.z = -1
        blockSettings.writeNumber("Nwlv", 2)
    } else if (Lvl == 3) {
        sprites.destroy(Mmmmm)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            .................11111111111....................................................................................................................................
            ...............111111111111111..................................................................................................................................
            ..............11111111111111111.................................................................................................................................
            .............1111111111111111111................................................................................................................................
            ............111111111111111111111...............................................................................................................................
            ...........11111111111111111111111..............................................................................................................................
            ..........1111111111111111111111111.............................................................................................................................
            ..........1111111111111111111111111.............................................................................................................................
            .........111111111111111111111111111..................................................................................................................e.........
            .........111111111111111111111111111................................................................................................................eee.........
            .........111111111111111111111111111...............................................................................................................eeee.........
            .........111111111111111111111111111..............................................................................................................eeeee.........
            .........111111111111111111111111111............................................................................................................eeeeeee.........
            .........111111111111111111111111111...........................................................................................................eeeeeeee.........
            .........111111111111111111111111111..........................................................................................................eeeeeeeee.........
            .........111111111111111111111111111.........................................................................................................eeeeeeeeee.........
            .........111111111111111111111111111.......................................................................................................eeeeeeeeeeee.........
            .........111111111111111111111111111......................................................................................................eeeeeeeeeeeee.........
            .........111111111111111111111111111................ee...................................................................................eeeeeeeeeeeeee.........
            ..........1111111111111111111111111.................ee..................................................................................eeeeeeeeeeeeeee.........
            ..........1111111111111111111111111.................eee................................................................................eeeeeeeeeeeeeeee.........
            ...........11111111111111111111111.................eeee...............................................................................eeeeeeeeeeeeeeeee.........
            ............111111111111111111111..................eeee..............................................................................eeeeeeeeeeeeeeeeee.........
            .............1111111111111111111...................eeeee............................................................................eeeeeeeeeeeeeeeeeeee........
            ..............11111111111111111...................eeeeeee..........................................................................eeeeeeeeeeeeeeeeeeeee........
            ...............111111111111111....................eeeeeeee........................................................................eeeeeeeeeeeeeeeeeeeeee........
            .................11111111111.....................eeeeeeeee......................................................................eeeeeeeeeeeeeeeeeeeeeeee........
            .................................................eeeeeeeeee....................................................................eeeeeeeeeeeeeeeeeeeeeeeee........
            ................................................eeeeeeeeeee...................................................................eeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee.................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ...............................................eeeeeeeeeeeee................................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ..............................................eeeeeeeeeeeeee...............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeee.............................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ..............................................eeeeeeeeeeeeeeee...........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeee..........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeee........................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            .............................................eeeeeeeeeeeeeeeeeee.......................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
            ............................................eeeeeeeeeeeeeeeeeeee.....................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
            ...........................................eeeeeeeeeeeeeeeeeeeeee...................................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
            ..........................................eeeeeeeeeeeeeeeeeeeeeeeee...............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            .........................................eeeeeeeeeeeeeeeeeeeeeeeeee..............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeee............................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...
            ........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            .......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            .....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
            ....................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ............................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ........................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ......................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        scene.setBackgroundColor(7)
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.setScale(1, ScaleAnchor.Middle)
        blockSettings.writeNumber("Nwlv", 3)
    } else {
        blockSettings.clear()
        game.gameOver(true)
    }
    Npc2 = sprites.create(People._pickRandom(), SpriteKind.Npc)
    Npc2.z = -1
    tiles.placeOnRandomTile(Npc2, assets.tile`myTile1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite5, location4) {
    pause(500)
    tiles.setTileAt(location4, assets.tile`transparency16`)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.clear()
    game.reset()
})
info.onScore(5, function () {
    achievements.create("You gained 5 coins!", 2, "More money!", img`
        . . b b b b . . . . b b b b . . 
        . b 5 5 5 5 b . . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c c 5 3 5 5 1 d c 
        c d d 1 1 d d c c d d 1 1 d d c 
        . f d d d d f . . f d d d d f . 
        . . f f f f . . . . f f f f . . 
        . . b b b b . . . . b b b b . . 
        . b 5 5 5 5 b . . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c c 5 3 5 5 1 d c 
        c d d 1 1 d d c c d d 1 1 d d c 
        . f d d d d f . . f d d d d f . 
        . . f f f f . . . . f f f f . . 
        `)
})
let myMinimap: minimap.Minimap = null
let mySprite2: Sprite = null
let Mmmmm: Sprite = null
let Npc2: Sprite = null
let mySprite: Sprite = null
let Lvl2 = 0
let text_list: string[] = []
let People: Image[] = []
blockSettings.clear()
game.splash("Boom")
game.splash("A Coleonsole Original")
People = [
img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `,
img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `
]
text_list = [
"Meow, I'm a cat!",
"POP! I'm a fish.",
"Lalala",
"Who is the new neighbour?"
]
Lvl2 = 1
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 4 4 5 f . 
    . . . f 5 5 5 5 5 5 5 f f f . . 
    . . . f 5 4 5 f f f 5 f . . . . 
    . . . f f f f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    . f f . f 5 5 5 4 4 5 5 5 f . . 
    . f 5 f f 6 5 5 f f 5 5 4 . . . 
    . f 5 4 4 4 6 6 6 6 6 6 f . . . 
    . . f f f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 f f f 5 4 5 f . . . 
    . . . . f f . . f f f f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    . f f . f 5 5 5 4 4 5 5 5 f . . 
    . f 5 f f 6 5 5 f f 5 5 4 . . . 
    . f 5 5 f 4 6 6 6 6 6 6 f . . . 
    . . f 5 4 5 5 5 5 5 5 5 f . . . 
    . . . f f f 5 f 5 4 5 f . . . . 
    . . . . f f f f f f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 f f f 5 f f 5 f f . . 
    . . . f f . . f f . . f f . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingRight)
)
if (blockSettings.exists("Nwlv")) {
    Lvl2 = blockSettings.readNumber("Nwlv")
}
RestartLevel(Lvl2)
game.onUpdateInterval(1, function () {
    sprites.destroy(mySprite2)
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
    mySprite2.setPosition(scene.cameraProperty(CameraProperty.X) - 28, scene.cameraProperty(CameraProperty.Y) - 52)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.Double)
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        minimap.includeSprite(myMinimap, value)
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Npc)) {
        minimap.includeSprite(myMinimap, value2)
    }
})
