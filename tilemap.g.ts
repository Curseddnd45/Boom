// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`320008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000040000000000000000000000000000000000000000000000000004040404000000040400000006000000000000000000000404000000000000000000000000000000090000000004060000040000000000000000000004000000000000000000000004040400000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000040404040000000000000000000000000000000000000000000000000000050505000000000000050000000500000000000404040404000000000500000500000007000808010303030303030a0a0a030303030303030a0303030303030303030a0303030303030303030303030a0303030a0303030a02`, img`
..................................................
............222...................................
................2.................2...............
..........2222...22...2..........22...............
.....22..2..........2...........222...............
..................2............2222...............
..............................22222.............22
2222222...2222222.222222222.222222222222.222.222.2
`, [myTiles.transparency16,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile7,myTiles.tile2,myTiles.tile6,myTiles.tile10], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`320008000000000000000000080800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000808080000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000b0000020200000000080000080800000000000100000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000001010000000000000000000009000002010000000000010201020000000000000001010101010000000000000000000000010101000000000000000000000000000000000102010000000000000000000000000000000000000000000000000000000101010100000000000000000000000000000000000000000000000000070707070000000000000000000700000000000001010101010000000600000a0a0a0003040404040c04040404040c0c040404040404040404040c0c04040404040404040c040c040404040404040404040c040c05`, img`
..................................................
................2.................................
.................22....22..............2..........
....................2.................22..........
...22.....2222.......22222...........222..........
......222...........................2222..........
...................................22222......222.
22222.22222..2222222222..22222222.2.2222222222.2.2
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,myTiles.tile7,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile2,myTiles.tile8,myTiles.tile10], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000101000000000000000000000000000000000000000000000000000100000000000000000001020000020001000200000001010100000000000000000000000000000000000000000000000700000002000000000002000000000000010000000000010101010000000000000000000000000000000000000400000001020200000002000102000000000000000000000200000101010101000000000000000000000000000000000003000001010000000007000007000007000700000700070000000001010101010100000000080000030303030303030303030506060606060606060606060606060606060906060609060906060606060906060606060609060606060906060609060609`, img`
..................................................
................................2.................
...............................22.................
........2.........22..2.2.2...222.................
..........2.....2......2.....2222.................
.....222...2.22..........2..22222.................
2..22......................222222.......2222222222
222222222222222222.222.2.22222.222222.2222.222.22.
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile2,myTiles.tile6,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,myTiles.tile3,myTiles.tile7,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
