@namespace
class SpriteKind:
    Npc = SpriteKind.create()
    Map = SpriteKind.create()

def on_hit_wall(sprite, location):
    if tiles.tile_at_location_equals(location, assets.tile("""
        myTile3
    """)) and mySprite.tile_kind_at(TileDirection.TOP, assets.tile("""
        myTile3
    """)) or tiles.tile_at_location_equals(location, assets.tile("""
        myTile0
    """)) and mySprite.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile0
    """)):
        tiles.set_tile_at(location, assets.tile("""
            myTile
        """))
        info.change_score_by(1)
        scene.camera_shake(4, 500)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_b_pressed():
    mySprite.vy = -200
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite2, otherSprite):
    otherSprite.say_text(text_list._pick_random(), 2000, True)
    pause(3000)
sprites.on_overlap(SpriteKind.player, SpriteKind.Npc, on_on_overlap)

def on_overlap_tile(sprite3, location2):
    global Lvl2
    Lvl2 += 1
    blockSettings.write_number("Mny", info.score())
    RestartLevel(Lvl2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile)

def on_on_score():
    achievements.create("You gained 15 coins!",
        1,
        "Lots of money!",
        img("""
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
        """))
info.on_score(15, on_on_score)

def on_on_score2():
    achievements.create("You gained 10 coins!",
        1,
        "Even more money!",
        img("""
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
        """))
info.on_score(10, on_on_score2)

def on_on_score3():
    achievements.create("You gained 15 coins!",
        1,
        "So close!",
        img("""
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
        """))
info.on_score(37, on_on_score3)

def on_on_score4():
    achievements.create("You gained 1 coin!",
        1,
        "Money!",
        img("""
            . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . .
        """))
info.on_score(1, on_on_score4)

def on_overlap_tile2(sprite4, location3):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
    """),
    on_overlap_tile2)

def RestartLevel(Lvl: number):
    global Mmmmm, Npc2
    sprites.destroy(Npc2)
    if Lvl == 1:
        scene.set_background_color(9)
        effects.bubbles.start_screen_effect()
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        scene.set_background_image(img("""
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
        """))
    elif Lvl == 2:
        info.set_score(blockSettings.read_number("Mny"))
        scene.set_background_image(img("""
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
        """))
        scene.set_background_color(2)
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        Mmmmm = sprites.create(img("""
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
            """),
            SpriteKind.food)
        tiles.place_on_random_tile(Mmmmm, assets.tile("""
            myTile6
        """))
        tiles.set_tile_at(Mmmmm.tilemap_location(),
            assets.tile("""
                transparency16
            """))
        Mmmmm.z = -1
        blockSettings.write_number("Nwlv", 2)
    elif Lvl == 3:
        info.set_score(blockSettings.read_number("Mny"))
        sprites.destroy(Mmmmm)
        scene.set_background_image(img("""
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
        """))
        scene.set_background_color(7)
        tiles.set_current_tilemap(tilemap("""
            level4
        """))
        mySprite.set_scale(1, ScaleAnchor.MIDDLE)
        blockSettings.write_number("Nwlv", 3)
    else:
        blockSettings.clear()
        game.game_over(True)
    Npc2 = sprites.create(People._pick_random(), SpriteKind.Npc)
    Npc2.z = -1
    tiles.place_on_random_tile(Npc2, assets.tile("""
        myTile1
    """))
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile4
    """))

def on_overlap_tile3(sprite5, location4):
    pause(500)
    tiles.set_tile_at(location4, assets.tile("""
        myTile7
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile3)

def on_combos_attach_combo():
    blockSettings.clear()
    game.reset()
controller.combos.attach_combo("Upupdowndownleftrightleftrightba", on_combos_attach_combo)

def on_on_overlap2(sprite6, otherSprite2):
    sprites.destroy(otherSprite2)
    sprite6.set_scale(2, ScaleAnchor.BOTTOM)
    achievements.create("You are HUGE!",
        1,
        "Yum Yum!",
        img("""
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
        """))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_on_score5():
    achievements.create("You gained 5 coins!",
        1,
        "More money!",
        img("""
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
        """))
info.on_score(5, on_on_score5)

myMinimap: minimap.Minimap = None
mySprite2: Sprite = None
Mmmmm: Sprite = None
Npc2: Sprite = None
mySprite: Sprite = None
Lvl2 = 0
text_list: List[str] = []
People: List[Image] = []
game.splash("Boom")
game.splash("A Coleonsole Original")
People = [img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """)]
text_list = ["Meow, I'm a cat!",
    "POP! I'm a fish.",
    "Lalala",
    "Who is the new neighbour?"]
Lvl2 = 1
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 350
scene.camera_follow_sprite(mySprite)
characterAnimations.loop_frames(mySprite,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    500,
    characterAnimations.rule(Predicate.MOVING_LEFT))
characterAnimations.loop_frames(mySprite,
    [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)],
    500,
    characterAnimations.rule(Predicate.MOVING_RIGHT))
characterAnimations.loop_frames(mySprite,
    [img("""
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
        """),
        img("""
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
        """)],
    500,
    characterAnimations.rule(Predicate.FACING_LEFT))
characterAnimations.loop_frames(mySprite,
    [img("""
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
        """),
        img("""
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
        """)],
    500,
    characterAnimations.rule(Predicate.FACING_RIGHT))
if blockSettings.exists("Nwlv"):
    Lvl2 = blockSettings.read_number("Nwlv")
RestartLevel(Lvl2)

def on_update_interval():
    global myMinimap, mySprite2
    sprites.destroy(mySprite2)
    myMinimap = minimap.minimap(MinimapScale.EIGHTH, 2, 0)
    mySprite2 = sprites.create(minimap.get_image(myMinimap), SpriteKind.Map)
    mySprite2.set_position(scene.camera_property(CameraProperty.X) - 28,
        scene.camera_property(CameraProperty.Y) - 52)
    minimap.include_sprite(myMinimap, mySprite, MinimapSpriteScale.DOUBLE)
    for value in sprites.all_of_kind(SpriteKind.food):
        minimap.include_sprite(myMinimap, value)
    for value2 in sprites.all_of_kind(SpriteKind.Npc):
        minimap.include_sprite(myMinimap, value2)
game.on_update_interval(1, on_update_interval)
